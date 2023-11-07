// noinspection ES6UnusedImports

import { css, html, LitElement } from 'lit';
import { Color, namedColors } from './Color.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
// todo: understand why eslint thinks these are unused - they are dependencies
import { HueBar } from './HueBar.js';
import { ColorInputChannel } from './ColorInputChannel.js';
import { HSLCanvas } from './HSLCanvas.js';
import { focusedFormControl, formControl, transparentChex } from './css.js';


//todo: light/dark mode + get decorators working without typescript
export class ColorPicker extends LitElement {
  static properties = {
    color: { type: Object },
    hex: {type: String},
    value:{type:String, attribute:true},
    isHsl: { type: Boolean }
  };

  static styles = css`
    :host > .outer {
      --font-fam: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      position: relative;
      background-color: rgb(30 41 59);
      height: 250px;
      width: 400px;
      display: block;
      padding: 10px;
      margin: 10px;
      box-shadow: 0 4px 12px #111;
    }
    .d-flex {
      display: flex;
      width: 100%;
      margin-top: 15px;
    }
    .w-30 {
      width: 30%;
    }
    .w-40 {
      width: 40%;
      position: relative;
      height:210px;
    }
    :host .form-control {
      ${formControl}
    }
    :host .form-control:focus {
      ${focusedFormControl}
    }
    :host label {
      width: 12px;
      display: inline-block;
      color: #ccc;
      font-family: var(--font-fam);
    }
    :host .hsl-mode{
      padding-left:16px;
      margin-top:18px;
    }
    :host a.button{
      padding: .325rem .5rem;
      background-color: #020617;
      border: 1px solid #495057;
      font-family: var(--font-fam);
      color:#ddd;
      cursor: pointer;
      font-size: .9rem;
    }
    :host div.hex{
      margin-top:27px;
      white-space: nowrap;
    }
    :host div.hex input{
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    :host a.button.copy{
      padding:7px 7px 5px 4px;
      position:relative;
      border-left:0;
      top:2px;
    }
    :host a.button.copy svg{
      height:15px;
      width:15px;
    }
    :host a.button.l{
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    :host a.button.r{
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    :host a.button.active{
      color: #eee;
      background-color: #0C5B9D;
      cursor:default;
    }
    :host .ok{
      position:absolute;
      bottom:0;
      right:0;
    }
    :host .ok a{
      border-radius:3px;
      padding:6px 12px;
    }
    :host .swatch{
      height:14px;
      width:14px;
      display: inline-block;
      position:relative;
      top:2px;
      margin-left:3px;
    }
    :host .swatch span{
      position: absolute;
      z-index: 1;
      top:0;
      left:0;
      height:100%;
      width:100%;
    }
    :host .swatch span.checky{
      ${transparentChex}
      z-index: 0;
    }
  `;

  _color;

  constructor() {
    super();
    this._color = Color.parse(namedColors.slateblue);
    this.isHsl = true;
  }

  firstUpdated(props) {
    if (props.has('value')){
      this.color = Color.parse(this.value)
    }
  }

  get color() {
    return this._color;
  }

  set color(c) {
    c = Color.parse(c);
    if (c) {
      this.hex = c.hex;
      this._color = c;
      const event = new CustomEvent('preview', {
        bubbles: true,
        composed: true,
        detail: { color: c }
      });
      this.renderRoot.dispatchEvent(event);
    }
  }

  updateColor({ detail: { c } }) {
    this.color = c;
  }

  setColor(c) {
    const cs = this.renderRoot.querySelector('input').value;
    this.color = Color.parse(cs);
  }

  setHue({ detail: { h } }) {
    let { s, l, a } = this.color.hsl;
    if (a === 1) a = undefined;
    this.color = { h, s, l, a };
  }

  setHsl(hsl){
    this.isHsl = hsl;
  }

  okColor(){
    const event = new CustomEvent('picked', {
      bubbles: true,
      composed: true,
      detail: { color: this.color }
    });
    this.renderRoot.dispatchEvent(event);
  }
  render() {
    const hslChannels = this.isHsl ? ['h', 's', 'l'] : ['h', 's', 'v'];
    const hsvClass = { button: true, active: !this.isHsl, l:true };
    const hslClass = { button: true, active: this.isHsl,r:true };
    let swatchBg = {backgroundColor:this.color};
    return html`
      <div class='outer'>
        <hue-bar hue='${this.color.hsl.h}' @hue-update='${this.setHue}'></hue-bar>
        <div class='d-flex'>
          <div class='col w-30'>
            ${['r', 'g', 'b', 'a'].map(c => html`
              <color-input-channel
                group="rgb" channel="${c}" isHsl="${this.isHsl}"
                .color="${this.color}" @color-update="${this.updateColor}" />
            `)}<div class='hex'>
            <label>#</label>
            <input @input='${(e) => this.setColor(e)}' class='form-control' placeholder='Set color'
                   .value='${this.color.hex}' /><a class='button copy' title='Copy+formats TBA'><!-- TODO: wire -->
              <svg stroke='currentColor' fill='none' stroke-width='0' viewBox='0 0 24 24'><path d='M13 7H7V5H13V7Z' fill='currentColor'></path><path d='M13 11H7V9H13V11Z' fill='currentColor'></path><path d='M7 15H13V13H7V15Z' fill='currentColor'></path><path fill-rule='evenodd' clip-rule='evenodd' d='M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z' fill='currentColor'></path></svg></a>
            </div>
          </div>
          <div class='col w-30'>
            ${hslChannels.map(c => html`
              <color-input-channel
                group="hsl" channel="${c}" .isHsl="${this.isHsl}"
                .color="${this.color}" @color-update="${this.updateColor}" />
            `)}
            <div class='hsl-mode'>
              <a class=${classMap(hsvClass)} @click=${()=>this.setHsl(false)}>HSV</a><a class=${classMap(hslClass)} @click=${()=>this.setHsl(true)}>HSL</a>
            </div>
          </div>
          <div class='w-40'>
            <hsl-canvas
              size='${160}' .isHsl='${this.isHsl}'
              .color='${this.color}' @color-update='${this.updateColor}' ></hsl-canvas>
            <div class='ok'>
              <a class='button' @click=${this.okColor}>OK
                <span class='swatch'>
                  <span style="${styleMap(swatchBg)}"></span>
                  <span class='checky'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }
}
