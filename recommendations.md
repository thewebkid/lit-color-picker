# lit-colorpicker — architecture recommendations (temp)

Scratchpad for the lit-movable v1 upgrade session. Delete when done.

## Done this session

- [x] Bump `lit-movable` to `^1.0.0`
- [x] Migrate HueBar: `horizontal` → `axis="x"` + `boundsX`; `<lit-movable>` → `<movable-el>`
- [x] Migrate HSLCanvas to `<movable-el>` + `@move`
- [x] Fix HueBar `this.h` → `this.hue`; HSLCanvas height typo `'p'` → `'px'`
- [x] Fix HSLCanvas circle drag regression
- [x] Validate canvas bounds (center-on-canvas; circle may overhang)
- [x] HP1: public `color-change` / `color-pick` + reflected `value`
- [x] HP2: ColorModel — stop mutating Color with hsx/fromHSLCanvas

---

## High priority

### 1. Single color event name + public contract — DONE

Public API:
- `color-change` — live mutations (`detail: { color, space, source }`)
- `color-pick` — OK button
- `value` attribute reflected (hex, or css when alpha &lt; 1)

Internal only: `color-intent` (children → parent), `hue-update`, `sliding-hue`.

### 2. Stop mutating Color with ad-hoc flags — DONE

`src/color-state.js` defines `ColorModel`:

```js
{ color, space: 'hsl'|'hsv', source: 'canvas'|'hue'|'channel'|'input'|'external', hsx }
```

- `color` stays a pure `modern-color` instance (no `.hsx` / `.fromHSLCanvas`)
- `hsx` holds explicit polar coords when the last edit was in HS* space (avoids RGB round-trip drift)
- `source` lets canvas skip redundant gradient paints when it was the writer
- Parent `applyModel()` is the single write path; children only `emitColorIntent()`

### 3. Package surface for consumers

Vite currently bundles `lit` + `lit-movable` into `dist` (~77kb). Mirror lit-movable: `lit` (and maybe `lit-movable`) as **peerDependencies**, mark them `external` in Vite, ship types if possible. Prevents duplicate Lit when hosts already use it.

### 4. Canvas movable bounds (relative, not absolute)

`boundsX="0, size"` is **relative to current position** in lit-movable v1. With `posLeft=85`, that becomes absolute `[85, 245]` — drag left/up is impossible / feels broken.

Correct shape for “center stays on canvas” (circle may half-overhang):

```js
bounds: {
  x: `${-left}, ${size - left}`,
  y: `${-top}, ${size - top}`,
}
```

---

## Medium priority

### 5. HueBar CSS `unsafeCSS(this.width)`

`static styles` runs once; `this.width` won’t react. Use a CSS variable (`--hue-bar-width`) or inline style.

### 6. `paintHSL` in `willUpdate`

Canvas work mid-update triggers Lit’s perf warning. Move painting to `updated()` (or rAF after update).

### 7. HSV fill path performance

Per-pixel `Color.fromHsv(...).hex` is much heavier than HSL string fills. Cache a hue strip or use ImageData once per hue.

### 8. Accessibility

Mode toggles and OK are `<a class="button">`; prefer `<button>`. Hue slider needs `role="slider"`, `aria-valuenow`, and keyboard support.

### 9. README / demo drift

Import path `color-picker/color-picker.js` doesn’t match `exports: { ".": "./index.js" }`. Align docs with the real entry.

---

## Nice to have

### 10. Light/dark via CSS vars

`:host([theme=light])` preset would finish the light/dark TODO without TypeScript.

### 11. Dead imports

ColorPicker previously imported unused CSS helpers (`formControl`, etc.) — cleaned partially with side-effect import cleanup.

### 12. `modern-color` packaging

Peer if hosts share color math; keep bundled for zero-config drop-in.

---

## Regression notes (circle drag) — RESOLVED

Observed markup:

```html
<movable-el boundsx="0, 160" boundsy="0,160" postop="66" posleft="85">
  <div class="circle"></div>
</movable-el>
```

### Root causes

1. **Relative bounds + attribute order**  
   lit-movable v1 parses `boundsX`/`boundsY` as offsets from *current* `style.left`/`top`. Binding `boundsX="0, 160"` with `posLeft=85` becomes absolute `[85, 245]` (can’t drag left/up). Worse: setting `bounds*` *before* `pos*` in the template (or via attributes that skip re-set) leaves stale/corrupt clamps. Hue bar was measured at bounds `[268, 668]` while thumb sat at `6.67` — fully stuck.

2. **0×0 hit target**  
   `.circle { position: absolute }` took the knob out of flow, so `<movable-el>` collapsed to 0×0. Clicks often fell through to the canvas (`@click` only — no drag).

### Fix applied

- Relative bounds: `` `${-left}, ${size - left}` `` so the center stays on-canvas (knob may overhang).
- Template/property order: set `posTop`/`posLeft` **before** `boundsX`/`boundsY`.
- In-flow knob + margin centering so the host has a real drag target; `z-index: 1` above the canvas.
- Same pos-before-bounds + in-flow treatment on the hue slider.
