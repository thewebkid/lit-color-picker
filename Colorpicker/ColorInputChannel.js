import { css, html, LitElement } from 'lit';
import { Color, hueGradient } from './Color';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { focusedFormControl, formControl, transparentChex } from './css.js';

export class ColorInputChannel extends LitElement {
  static properties = {
    group: { type: String, attribute: true },
    channel: { type: String, attribute: true },
    color: { type: Object },
    c: { type: Object },
    v: { type: Number },
    groupColor: { type: Object },
    previewGradient: { type: Object },
    active: { type: Boolean },
    max: { type: Number },
    isHsl: { type: Boolean }
  };
  static styles = css`
    :host > div {
      margin-bottom: 8px;
      display: block;
      position: relative;
    }

    :host label {
      width: 12px;
      display: inline-block;
      color: #ccc;
      font-family: var(--font-fam);
    }

    :host .form-control {
      ${formControl}
    }

    :host .form-control:focus {
      ${focusedFormControl}
    }

    :host .preview-bar {
      height: 4px;
      width: 85px;
      position: absolute;
      bottom: 0px;
      right: 18px;
      --pct: 0;
      pointer-events: none;
      z-index: 2;
    }

    :host .preview-bar:after {
      position: absolute;
      content: '';
      background-image: var(--preview);
      height: 100%;
      width: 100%;
    }

    :host > div.active .preview-bar {
      width: 128px;
      bottom: -23px;
      right: -9px;
      height: 10px;
      border: 8px solid #020617;
      box-shadow: 0 2px 5px #ccc;
      pointer-events: all;
      z-index: 2;
    }

    :host .preview-bar .pct {
      bottom: -3px;
      margin-top: -.75px;
      position: absolute;
      width: 3px;
      height: 11px;
      background: 0 0;
      left: var(--pct);
      display: inline-block;
      z-index: 3;
    }

    :host .preview-bar .pct:before {
      content: "";
      height: 7px;
      width: 5px;
      position: absolute;
      left: -2.5px;
      top: 2.5px;
      background-color: #fff;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }

    :host .transparent-checks {
      ${transparentChex}
    }
  `;

  clickPreview(e) {
    const x = e.offsetX;
    let v = Math.round((x / 127) * this.max);
    if (this.channel === 'a') {
      v = Number((x / 127).toFixed(2));
    }
    this.valueChange(null, v);
    this.setActive(false);
  }

  valueChange = (e, val = null) => {
    this.c[this.channel] = val ?? Number(this.renderRoot.querySelector('input').value);
    let c = Color.parse(this.c);
    this.c = this.group === 'rgb' ? this.color.rgbObj : this.isHsl ? this.color.hsl : this.color.hsv;
    let event = new CustomEvent('color-update', {
      bubbles: true,
      composed: true,
      detail: { c }
    });
    this.renderRoot.dispatchEvent(event);
  };

  setActive(active) {
    this.active = active;
  }

  constructor() {
    super();
    this.color = {};
    this.previewGradient = {};
  }

  setPreviewGradient() {
    let c = this.c = this.group === 'rgb' ? this.color.rgbObj : this.isHsl ? this.color.hsl : this.color.hsv;
    let g = this.group;
    let ch = this.channel;
    const isAlpha = ch === 'a';
    this.v = c[ch];
    if (isAlpha) {
      this.v *= 100;
    }
    let max = 255;
    let minC, maxC;
    if (g !== 'rgb' || ch === 'a') {
      if (ch === 'h') {
        max = this.max = 360;
        this.previewGradient = {
          '--preview': `linear-gradient(90deg, ${hueGradient(24)})`,
          '--pct': `${100 * (c.h / max)}%`
        };
        return;
      } else if (isAlpha) {
        max = 1;
      } else {
        max = 100;
      }
    }
    this.max = max;
    minC = { ...c };
    maxC = minC;
    minC[this.channel] = 0;
    minC = Color.parse(minC);
    maxC[this.channel] = max;
    maxC = Color.parse(maxC);

    if (this.channel === 'l') {
      let midC = { ...c };
      midC.l = 50;
      this.previewGradient = {
        '--preview': `linear-gradient(90deg, ${minC.hex}, ${Color.parse(midC).hex}, ${maxC.hex})`,
        '--pct': `${100 * (c[this.channel] / max)}%`
      };
    } else {
      this.previewGradient = {
        '--preview': `linear-gradient(90deg, ${isAlpha ? minC.css : minC.hex}, ${isAlpha ? maxC.css : maxC.hex})`,
        '--pct': `${100 * (c[this.channel] / max)}%`
      };
    }
  }

  willUpdate(props) {
    this.setPreviewGradient();
  }

  render() {
    //let c = this.group === 'rgb' ? this.color : this.color.hsl;
    return html`
      <div class='${classMap({ active: this.active })}'>
        <label>${this.channel.toUpperCase()}</label>
        <input
          class='form-control' .value='${this.v}' type='number' @input='${this.valueChange}'
          @focus='${() => this.setActive(true)}' @blur='${() => this.setActive(false)}'
        />
        <div class='preview-bar' style='${styleMap(this.previewGradient)}' @mousedown='${this.clickPreview}'>
          <div class='pct'></div>
          <div class='transparent-checks'></div>
        </div>
      </div>`;
  }
}

customElements.define('color-input-channel', ColorInputChannel);
