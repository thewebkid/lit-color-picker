# lit-colorpicker — architecture recommendations (temp)

Scratchpad for the lit-movable v1 upgrade session. Delete when done.

## Done this session

- [x] Bump `lit-movable` to `^1.0.0`
- [x] Migrate HueBar: `horizontal` → `axis="x"` + `boundsX`; `<lit-movable>` → `<movable-el>`
- [x] Migrate HSLCanvas to `<movable-el>` + `@move`
- [x] Fix HueBar `this.h` → `this.hue`; HSLCanvas height typo `'p'` → `'px'`
- [ ] Fix HSLCanvas circle drag regression
- [ ] Validate canvas bounds (center-on-canvas; circle may overhang)

---

## High priority

### 1. Single color event name + public contract

Internally: `color-update` / `colorchanged` / `colorpicked`. README mentions `colorupdated`. Pick one public API (e.g. `color-change` + `color-pick`), document it, and reflect `value` as an attribute for declarative hosts.

### 2. Stop mutating Color with ad-hoc flags

`c.hsx`, `c.fromHSLCanvas` on Color instances fight Lit’s update cycle. Prefer a small controller/state object:

```js
{ color, space: 'hsl'|'hsv', source: 'canvas'|'hue'|'channel'|'input' }
```

Children emit intent; parent owns the model and pushes props down.

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

## Regression notes (circle drag)

Observed markup:

```html
<movable-el boundsx="0, 160" boundsy="0,160" postop="66" posleft="85">
  <div class="circle"></div>
</movable-el>
```

Symptoms: circle ignores click/drag after movable v1 migration.

Suspects to verify:

1. **Relative bounds** making min ≈ current position (only down-right drag possible)
2. **Hit target**: `.circle { position: absolute }` takes it out of flow → host may be 0×0; clicks fall through to canvas (`@click` only, no drag)
3. **Controlled `posTop`/`posLeft`** re-bound every render fighting in-progress drag
4. **Event wiring**: `.onmove` (state object) → `@move` (`event.detail`)
