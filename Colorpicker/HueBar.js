import { LitElement, html, css, unsafeCSS } from 'lit';
import { Color } from './Color';
import { styleMap } from 'lit/directives/style-map.js';
import { hueGradient } from './lib.js';

export class HueBar extends LitElement {
  static properties = {
    hue: { type: Number },
    gradient: { type: String, attribute: false },
    sliderStyle: { type: String, attribute: false},
    width: { type: Number, attribute: false }
  };
  static styles = css`
    :host > div {
      display: block;
      width: ${unsafeCSS(this.width)}px;
      height: 15px;
      cursor: pointer;
      position: relative;
    }

    :host .slider {
      position: absolute;
      top: -1px;
      height: 17px;
      width: 8px;
      margin-left: -4px;
      box-shadow: 0 0 3px #111, inset 0 0 2px white;
    }

  `;

  constructor() {
    super();
    this.gradient = { backgroundImage: `linear-gradient(90deg, ${hueGradient(24)})` };
    this.width = 400;
    this.sliderStyle = { display: 'none' };
    this.init();
  }

  async init() {
    await this.updateComplete;
    this.sliderStyle = this.sliderCss(this.hue);
  }

  get sliderCss() {
    return (h) => {
      let r = this.width / 360;
      let left = Number(h) * r;
      let color = Color.fromHsl({ h, s: 100, l: 50 });
      return isFinite(h) ? { left: `${left}px`, backgroundColor: color.css } : { display: 'none' };
    };
  }

  updateHue(e) {
    let target = this.renderRoot.querySelector('input');
    let event = new CustomEvent('hue-update', {
      bubbles: true,
      composed: true,
      detail: { h: Number(target.value) }
    });

    target.dispatchEvent(event);
  }

  willUpdate(props) {
    let h = props.get('hue');
    if (isFinite(h)) {
      let hue = this.hue;
      this.sliderStyle = this.sliderCss(hue);
    }
  }

  selectHue(e) {
    let r = 360 / this.width;
    let l = e.offsetX;
    let h = Math.round(l * r);
    let target = this.renderRoot.querySelector('a');
    let event = new CustomEvent('hue-update', {
      bubbles: true,
      composed: true,
      detail: { h }
    });

    target.dispatchEvent(event);
    this.sliderStyle = this.sliderCss(h);
  }

  render() {

    return html`
      <div style=${styleMap(this.gradient)} class='bar' @click='${this.selectHue}'>
        <a class='slider' style=${styleMap(this.sliderStyle)}></a>
      </div>`;
  }
}

customElements.define('hue-bar', HueBar);
