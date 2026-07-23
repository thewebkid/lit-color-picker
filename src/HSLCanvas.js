import { styleMap } from 'lit/directives/style-map.js';
import { LitElement, html, css } from 'lit';
import { Color } from 'modern-color';
import { emitColorIntent, finiteOr } from './color-state.js';

export class HSLCanvas extends LitElement {
  static properties = {
    color: { type: Object },
    /** Explicit polar coords from the parent model (not mutated onto Color). */
    hsx: { type: Object, attribute: false },
    /** Provenance of the last model write — skip gradient rebuild when we were the source. */
    source: { type: String, attribute: false },
    isHsl: { type: Boolean },
    size: { type: Number },
    debounceMode: { type: Boolean },
    ctx: { type: Object, state: true, attribute: false },
    hsw: { type: Object, state: true, attribute: false },
    circlePos: { type: Object, state: true, attribute: false },
  };

  static styles = css`
    :host .outer {
      position: absolute;
      top: 0;
      right: 0;
    }

    :host .outer canvas {
      height: inherit;
      width: inherit;
      cursor: pointer;
    }

    /* In-flow so <movable-el> gets a real hit box (absolute children collapse the host to 0×0). */
    :host movable-el {
      z-index: 1;
      /* Center the knob on the sample point (host's top/left). */
      margin: -8px 0 0 -8px;
    }

    :host .circle {
      height: 12px;
      width: 12px;
      border: solid 2px #eee;
      border-radius: 50%;
      box-shadow: 0 0 3px #000, inset 0 0 1px #fff;
      mix-blend-mode: difference;
      pointer-events: auto;
    }
  `;

  constructor() {
    super();
    this.isHsl = true;
    this.hsx = null;
    this.source = 'external';
    this.circlePos = { top: 0, left: 0, bounds: { x: '', y: '' } };
    this.size = 160;
    /** While true, do not rewrite movable bounds — mid-drag reparse corrupts the clamp. */
    this._dragging = false;
  }

  /**
   * @param {number} x sample x (knob center), clamped to the canvas by callers
   * @param {number} y sample y
   * @param {{ updateBounds?: boolean }} [opts]
   */
  setCircleCss(x, y, { updateBounds = !this._dragging } = {}) {
    // lit-movable bounds are offsets from *current* style.left/top.
    // Absolute clamp we want: [0, size]. Relative form at position P: `${-P}, ${size-P}`.
    // Re-writing those strings mid-drag (when style.left already moved but Lit's
    // pos binding lags) reparses with a mismatched offset and the min bound goes
    // negative — knob escapes the canvas. Freeze bounds for the active drag.
    const left = Number(x);
    const top = Number(y);
    const size = this.size;
    const prev = this.circlePos;
    this.circlePos = {
      top,
      left,
      bounds: updateBounds
        ? {
            x: `${-left}, ${size - left}`,
            y: `${-top}, ${size - top}`,
          }
        : prev.bounds,
    };
  }

  onCircleStart() {
    this._dragging = true;
    // One clean reparse at drag start so _bounds* stay [0, size] for the gesture.
    const { left, top } = this.circlePos;
    this.setCircleCss(left, top, { updateBounds: true });
  }

  onCircleEnd() {
    this._dragging = false;
    const { left, top } = this.circlePos;
    this.setCircleCss(left, top, { updateBounds: true });
  }

  pickCoord({ offsetX, offsetY } = {}) {
    const { size, hsw, isHsl, color, hsx: modelHsx } = this;

    // Non-finite coords → fromHsl(l:NaN) → `#NANNANNAN` → value re-parse `#0ANANNAN`.
    if (!Number.isFinite(offsetX) || !Number.isFinite(offsetY)) {
      return;
    }

    const x = Math.min(size, Math.max(0, offsetX));
    const y = Math.min(size, Math.max(0, offsetY));

    // Prefer live gradient hue, then sticky model hsx, then RGB-derived hue.
    const h =
      finiteOr(hsw?.h) ??
      finiteOr(modelHsx?.h) ??
      finiteOr(color?.hsl?.h, 0);

    let w = Math.round(((size - y) / size) * 100);
    let sat = Math.round((x / size) * 100);
    const hsx = { h, s: sat, [isHsl ? 'l' : 'v']: w };

    const c = isHsl ? Color.fromHsl(hsx) : Color.fromHsv(hsx);
    this.setCircleCss(x, y);
    c.a = color.alpha;

    // Intent only — parent owns the model. hsx travels beside Color, not on it.
    emitColorIntent(this.renderRoot, {
      color: c,
      source: 'canvas',
      hsx,
      space: isHsl ? 'hsl' : 'hsv',
    });
  }

  debouncePaintDetail(hsx) {
    clearTimeout(this.bouncer);
    this.bouncer = setTimeout(() => this.paintHSL(hsx, true), 50);
    this.paintHSL(hsx, false);
  }

  // todo: test assumption that this perf lag (lit warning)
  //  is ok due to rendering canvas post update
  paintHSL(hsx, detail = null) {
    if (this.debounceMode && detail === null) {
      return this.debouncePaintDetail(hsx);
    }
    const { ctx, color, isHsl, size } = this;
    if (!ctx) {
      return;
    }

    let coords = hsx ?? (isHsl ? color.hsl : color.hsv);
    coords = { ...coords };
    coords.w = isHsl ? coords.l : coords.v;
    let { h, s, w } = coords;
    let hsw = (this.hsw = { h, s, w });
    let scale = size / 100;
    const fillHsl = (h, s, l) => `hsl(${h}, ${s}%, ${100 - l}%)`;
    const fillHsv = (h, s, v) => Color.fromHsv({ h, s, v: 100 - v }).hex;
    const fill = isHsl ? fillHsl : fillHsv;

    let incr = detail === false ? 4 : 1; // rapid painting during hue slider ops
    for (let s = 0; s < 100; s += incr) {
      for (let w = 0; w < 100; w += incr) {
        ctx.fillStyle = fill(h, s, w);
        ctx.fillRect(s, w, s + incr, w + incr);
      }
    }

    this.setCircleCss(hsw.s * scale, size - coords.w * scale);
  }

  willUpdate(props) {
    if (!(props.has('color') || props.has('isHsl') || props.has('hsx') || props.has('source'))) {
      return;
    }

    // We just emitted this change — knob already moved; hue is unchanged so
    // the gradient does not need a rebuild.
    if (this.source === 'canvas' && !props.has('isHsl')) {
      return;
    }

    // Prefer parent-provided hsx (preserves polar precision) when present.
    if (this.hsx) {
      this.paintHSL(this.hsx);
      return;
    }
    this.paintHSL();
  }

  firstUpdated() {
    const canvas = this.renderRoot.querySelector('canvas');
    this.ctx = canvas.getContext('2d');
    this.paintHSL(this.hsx);
  }

  circleMove({ posTop: offsetY, posLeft: offsetX }) {
    this.pickCoord({ offsetX, offsetY });
  }

  render() {
    const hw = { height: this.size + 'px', width: this.size + 'px' };
    const { top, left, bounds } = this.circlePos;
    // pos* BEFORE bounds*: lit-movable parses bounds relative to current style.left/top.
    // Click only on <canvas> — a click on the knob (normal after pointerup) has
    // offsetX/Y relative to the 16px circle and would snap to near-white.
    return html`
      <div class='outer' style=${styleMap(hw)}>
        <canvas height='100' width='100' @click=${this.pickCoord}></canvas>
        <movable-el
          .posTop=${top}
          .posLeft=${left}
          .boundsX=${bounds.x}
          .boundsY=${bounds.y}
          @movestart=${this.onCircleStart}
          @move=${(e) => this.circleMove(e.detail)}
          @moveend=${this.onCircleEnd}>
          <div class='circle'></div>
        </movable-el>
      </div>
    `;
  }
}

customElements.define('hsl-canvas', HSLCanvas);
