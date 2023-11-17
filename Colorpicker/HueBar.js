import { LitElement, html, css, unsafeCSS } from 'lit';
import { Color } from './Color';
import { styleMap } from 'lit/directives/style-map.js';
import { hueGradient } from './lib.js';

export class HueBar extends LitElement {
  static properties = {
    hue: { type: Number },
    color: {type: Object},
    gradient: { type: String, attribute: false },
    sliderStyle: { type: String, attribute: false},
    sliderBounds: {type: Object},
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

  }

  firstUpdated() {
    let me = this.renderRoot.querySelector('lit-movable');
    me.onmove = ({ posLeft }) => this.selectHue({offsetX: posLeft});
    this.sliderStyle = this.sliderCss(this.hue);
  }

  get sliderBounds(){
    let r = this.width / 360;
    let posLeft = Number(this.hue) * r;
    let min = 0 - posLeft;
    let max = this.width - posLeft;
    return {min, max, posLeft};
  }
  get sliderCss() {
    return (h) => {
      if (this.color.hsx){
        h = this.color.hsx.h;
      }
      let color = Color.parse({ h, s:100, l:50 });
      return  { backgroundColor: color.css };
    };
  }


  willUpdate(props) {
    let h = props.get('hue');
    if (h && isFinite(this.hue)) {
      if (this.color?.hsx){
        return; // console.log({hueBarIgnored: this.color.hsx});
      }
      let hue = this.hue;
      this.sliderStyle = this.sliderCss(hue);
    }
  }

  selectHue(e) {
    let r = 360 / this.width;
    let l = e.offsetX;
    let h = Math.max(0,Math.min(359,Math.round(l * r)));
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
        <lit-movable horizontal='${this.sliderBounds.min}, ${this.sliderBounds.max}' posLeft='${this.sliderBounds.posLeft}'>
          <a class='slider' style=${styleMap(this.sliderCss(this.h))}></a>
        </lit-movable>

      </div>`;
  }
}

customElements.define('hue-bar', HueBar);
