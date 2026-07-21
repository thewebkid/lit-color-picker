import { styleMap } from 'lit/directives/style-map.js';
import { LitElement, html, css } from 'lit';
import { Color } from 'modern-color';
import { colorEvent } from './lib.js';

export class HSLCanvas extends LitElement {
  static properties = {
    color: { type: Object },
    isHsl: { type: Boolean },
    size: { type: Number},
    debounceMode: {type: Boolean},
    ctx: { type: Object, state: true, attribute: false },
    hsw: { type: Object, state: true, attribute: false },
    circlePos: { type: Object, state: true, attribute: false }
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
    this.circlePos = { top: 0, left: 0, bounds: {x: '', y: ''} };
    this.size = 160;
  }

  setColor(c) {
    //this.color = c;
    colorEvent(this.renderRoot, c);
  }

  setCircleCss(x, y) {
    // lit-movable bounds are relative to the current pos; keep the knob center on-canvas
    // (the 16px knob may overhang — that's intentional).
    const left = Number(x);
    const top = Number(y);
    const size = this.size;
    this.circlePos = {
      top,
      left,
      bounds: {
        x: `${-left}, ${size - left}`,
        y: `${-top}, ${size - top}`,
      },
    };
  }

  pickCoord({ offsetX, offsetY }) {
    let x = offsetX;
    let y = offsetY;
    const { size, hsw, isHsl, color } = this;

    let w = (size - y) / size;
    w = Math.round(w * 100);
    let sat = Math.round((x / size) * 100);
    let hsx = { h: hsw.h, s: sat, [isHsl ? 'l' : 'v']: w };

    let c = isHsl ? Color.fromHsl(hsx)
      : Color.fromHsv(hsx);
    this.setCircleCss(x, y);
    c.a = color.alpha;
    c.hsx = hsx;
    c.fromHSLCanvas = true;
    this.setColor(c);
  }

  debouncePaintDetail(hsx){
    clearTimeout(this.bouncer);
    this.bouncer = setTimeout(() => this.paintHSL(hsx, true), 50);
    this.paintHSL(hsx, false);
  }

  // todo: test assumption that this perf lag (lit warning)
  //  is ok due to rendering canvas post update
  paintHSL(hsx, detail = null) {
    if (this.debounceMode && detail === null){
      // enable rapid painting in lower res
      return this.debouncePaintDetail(hsx);
    }
    const { ctx, color, isHsl, size } = this;
    if (!ctx) {
      return;
    }
    //console.time('paint'+detail)

    let clr = color;
    hsx = hsx ?? isHsl ? clr.hsl : clr.hsv; // hue-sat-whatever
    hsx.w = isHsl ? hsx.l : hsx.v;
    let { h, s, w } = hsx;
    let hsw = this.hsw = { h, s, w };
    let scale = size / 100;
    const fillHsl = (h, s, l) => `hsl(${h}, ${s}%, ${100 - l}%)`;
    const fillHsv = (h, s, v) => Color.fromHsv({ h, s, v: 100 - v }).hex;
    const fill = isHsl ? fillHsl : fillHsv;

    let incr = detail === false ? 4 : 1;//rapid painting during hue slider ops
    for (let s = 0; s < 100; s += incr) {
      for (let w = 0; w < 100; w += incr) {
        ctx.fillStyle = fill(h, s, w);
        ctx.fillRect(s, w, (s + incr), (w + incr));
      }
    }

    this.setCircleCss(hsw.s * scale, size - (hsx.w * scale));
    //console.timeEnd('paint'+detail)
  }

  willUpdate(props) {
    if (props.has('color') || props.has('isHsl')) {
      if (this.color?.hsx){
        if (this.color.fromHSLCanvas){
          delete this.color.fromHSLCanvas;//avoid extra paint job
          return;
        }
        return this.paintHSL(this.color.hsx);
      }
      this.paintHSL();
    }
  }

  firstUpdated(props) {
    let canvas = this.renderRoot.querySelector('canvas');
    this.ctx = canvas.getContext('2d');
    this.paintHSL();
  }

  circleMove({posTop: offsetY, posLeft: offsetX}){
    this.pickCoord({offsetX, offsetY});
  }

  render() {
    let hw = { height: this.size + 'px', width: this.size + 'px' };
    let {top, left, bounds} = this.circlePos;
    // pos* BEFORE bounds*: lit-movable parses bounds relative to current style.left/top.
    return html`
      <div class='outer' @click='${this.pickCoord}' style='${styleMap(hw)}'>
        <canvas height='100' width='100'></canvas>
        <movable-el
          .posTop=${top}
          .posLeft=${left}
          .boundsX=${bounds.x}
          .boundsY=${bounds.y}
          @move=${(e) => this.circleMove(e.detail)}>
          <div class='circle'></div>
        </movable-el>
      </div>`;
  }
}

customElements.define('hsl-canvas', HSLCanvas);
