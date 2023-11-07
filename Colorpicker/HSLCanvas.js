import { styleMap } from 'lit/directives/style-map.js';
import { LitElement, html, css } from 'lit';
import { Color } from './Color';

export class HSLCanvas extends LitElement {
  static properties = {
    color: { type: Object },
    ctx: { type: Object },
    hsw: { type: Object },
    isHsl: { type: Boolean },
    size: { type: Number, attribute: true },
    circlePos: { type: Object }
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

    :host .circle {
      height: 12px;
      width: 12px;
      border: solid 2px #eee;
      border-radius: 50%;
      box-shadow: 0 0 3px #000, inset 0 0 1px #fff;
      position: absolute;
      margin: -7px;
      mix-blend-mode: difference;
    }
  `;

  constructor() {
    super();
    this.isHsl = true;
    this.circlePos = { top: '0px', left: '0px' };
    this.size = 160;
  }

  setColor(c) {
    //this.color = c;
    let target = this.renderRoot.querySelector('.outer');
    let event = new CustomEvent('color-update', {
      bubbles: true,
      composed: true,
      detail: { c }
    });

    target.dispatchEvent(event);
  }

  setCircleCss(x, y) {
    let left = `${x}px`;
    let top = `${y}px`;
    this.circlePos = { top, left };
  }

  pickCoord({ offsetX, offsetY }) {
    let x = offsetX;
    let y = offsetY;
    const { size, hsw, isHsl, color } = this;

    let w = (size - y) / size;
    w = Math.round(w * 100);
    let sat = Math.round((x / size) * 100);
    let hsx = { h: hsw.h, s: sat };
    let c = isHsl ? Color.fromHsl({ ...hsx, l: w })
      : Color.fromHsv({ ...hsx, v: w });
    this.setCircleCss(x, y);
    c.a = color.alpha;
    this.setColor(c);
  }

  // todo: test assumption that this perf lag (lit warning)
  //  is ok due to rendering canvas post update
  paintHSL() {
    const { ctx, color, isHsl, size } = this;
    if (!ctx) {
      return;
    }
    //console.time('paint')

    let clr = color;
    let hsx = isHsl ? clr.hsl : clr.hsv; // hue-sat-whatever
    hsx.w = isHsl ? hsx.l : hsx.v;
    let { h, s, w } = hsx;
    let hsw = this.hsw = { h, s, w };
    let scale = size / 100;
    const fillHsl = (h, s, l) => `hsl(${h}, ${s}%, ${100 - l}%)`;
    const fillHsv = (h, s, v) => Color.fromHsv({ h, s, v: 100 - v }).hex;
    const fill = isHsl ? fillHsl : fillHsv;

    let incr = 1;
    for (let s = 0; s < 100; s += incr) {
      for (let w = 0; w < 100; w += incr) {
        ctx.fillStyle = fill(h, s, w);
        ctx.fillRect(s, w, (s + incr), (w + incr));
      }
    }
    let left = `${hsw.s * scale}px`;
    let top = `${size - (hsx.w * scale)}px`;
    this.circlePos = { top, left };
    //console.timeEnd('paint')
  }

  willUpdate(props) {
    if (props.has('color') || props.has('isHsl')) {
      this.paintHSL();
    }
  }

  firstUpdated(props) {
    let canvas = this.renderRoot.querySelector('canvas');
    this.ctx = canvas.getContext('2d');
    this.paintHSL();
  }

  render() {
    let hw = { height: this.size + 'px', width: this.size + 'px' };
    return html`
      <div class='outer' @click='${this.pickCoord}' style='${styleMap(hw)}'>
        <canvas height='100' width='100'></canvas>
        <div class='circle' style='${styleMap(this.circlePos)}'></div>
      </div>`;
  }
}

customElements.define('hsl-canvas', HSLCanvas);
