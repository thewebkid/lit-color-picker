// noinspection ES6UnusedImports

import { css, html, LitElement } from 'lit';
import { Color, namedColors } from './Color.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
// todo: understand why eslint thinks these are unused - they are dependencies
import { HueBar } from './HueBar.js';
import { ColorInputChannel } from './ColorInputChannel.js';
import { HSLCanvas } from './HSLCanvas.js';
import { focusedFormControl, formControl, root, transparentChex } from './css.js';
import { colorEvent, copy } from './lib.js';


//todo: light/dark mode + get decorators working without typescript
export class ColorPicker extends LitElement {
  static properties = {
    color: { type: Object, state:true, attribute:false },
    hex: { type: String, state:true, attribute:false},
    value: { type:String },
    isHsl: { type: Boolean, state:true, attribute:false },
    copied:{type:String}
  };

  static styles = root;

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
      colorEvent(this.renderRoot, c, 'preview');
    }
  }

  updateColor({ detail: { color } }) {
    this.color = color;
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
    colorEvent(this.renderRoot, this.color, 'picked');
  }
  showCopyDialog(){
    this.copied = null;
    this.dlg = this.dlg ?? this.renderRoot.querySelector('dialog');
    if (this.dlg.open){
      this.dlg.classList.remove('open')
      return this.dlg.close();
    }

    this.dlg.show();
    this.dlg.classList.add('open');
  }
  clipboard(f){
    let s = this.color.toString(f)
    navigator.clipboard.writeText(s);
    this.hideCopyDialog(s);
  }
  hideCopyDialog(copyText){
    if (copyText){
      this.copied = copyText;
      setTimeout(()=>this.dlg.classList.remove('open'),400);
      setTimeout(()=>this.hideCopyDialog(),1200);
      return
    }
    this.dlg.classList.remove('open')
    this.dlg.close();
    this.copied = null;
  }
  render() {
    const hslChannels = this.isHsl ? ['h', 's', 'l'] : ['h', 's', 'v'];
    const hsvClass = { button: true, active: !this.isHsl, l:true };
    const hslClass = { button: true, active: this.isHsl,r:true };
    let swatchBg = {backgroundColor:this.color};
    let hideCopied = this.copied ? {textAlign:'center',display: 'block'} : {display:'none',}
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
              <dialog @blur=${()=>this.hideCopyDialog()} tabindex='0'>
                <sub class='copied' style='${styleMap(hideCopied)}'>copied <em>${this.copied}</em></sub>
                ${this.copied ? html`` : html`
                <div>
                  <input class='form-control' disabled='disabled' value='${this.color.hex}'>
                  <a title='Copy HEX String' class='button' tabindex='0' @click=${(e)=>this.clipboard('hex',e)}>${copy}</a>
                </div>
                <div>
                  <input class='form-control' disabled='disabled' value='${this.color.css}'>
                  <a title='Copy RGB String' class='button' tabindex='0' @click=${(e)=>this.clipboard('css',e)}>${copy}</a>
                </div>
                <div>
                  <input class='form-control' disabled='disabled' value='${this.color.toString('hsl')}'>
                  <a title='Copy HSL String' class='button' tabindex='0' @click=${(e)=>this.clipboard('hsl',e)}>${copy}</a>
                </div>
                `}

              </dialog>
              <label>#</label>
              <input @input='${(e) => this.setColor(e)}' class='form-control' placeholder='Set color'
                     .value='${this.color.hex}' /><a
                @click=${this.showCopyDialog} class='button copy' title='Copy+formats TBA'><!-- TODO: wire -->
                ${copy}
                <span>&#11205;</span>
              </a>

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
