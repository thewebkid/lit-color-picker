import { html, LitElement } from 'lit';
import { Color, namedColors } from 'modern-color';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
// Side-effect imports: register child custom elements used in the template
import './HueBar.js';
import './ColorInputChannel.js';
import './HSLCanvas.js';
import 'lit-movable';
import { root } from './css.js';
import { copy } from './lib.js';
import {
  COLOR_CHANGE,
  COLOR_PICK,
  colorToValue,
  createColorModel,
  emitPublicColorEvent,
} from './color-state.js';
/**
 * <color-picker>
 *
 * Owns a ColorModel { color, space, source, hsx }.
 * Children emit `color-intent`; this host is the only place that mutates the model
 * and fires the public `color-change` / `color-pick` events.
 *
 * @fires color-change - any live mutation (detail: { color, space, source })
 * @fires color-pick - user confirmed with OK (detail: { color, space, source })
 * @attr {string} value - reflected color string (hex, or css when alpha < 1)
 */
export class ColorPicker extends LitElement {
  static properties = {
    /** @type {import('./color-state.js').ColorModel} */
    model: { type: Object, state: true, attribute: false },
    hex: { type: String, state: true, attribute: false },
    value: { type: String, reflect: true },
    isHsl: { type: Boolean, state: true, attribute: false },
    copied: { type: String },
    debounceMode: { type: Boolean, state: true, attribute: false },
  };

  static styles = root;

  /** Guard so reflecting `value` does not re-parse into a feedback loop. */
  _syncingValue = false;

  constructor() {
    super();
    const color = Color.parse(namedColors.slateblue);
    this.model = createColorModel(color, { space: 'hsl', source: 'external' });
    this.hex = color.hex;
    this.value = colorToValue(color);
    this.isHsl = true;
    this.debounceMode = false;
  }

  /** Imperative / demo API — the live Color instance. */
  get color() {
    return this.model.color;
  }

  set color(input) {
    if (input == null) return;
    const color = Color.parse(input);
    if (!color) return;
    this.applyModel(
      createColorModel(color, {
        space: this.isHsl ? 'hsl' : 'hsv',
        source: 'external',
        hsx: null,
      })
    );
  }

  /**
   * Single write path for picker state.
   * @param {import('./color-state.js').ColorModel} model
   * @param {{ emit?: boolean }} [opts]
   */
  applyModel(model, { emit = true } = {}) {
    this.model = model;
    this.hex = model.color.hex;

    const nextValue = colorToValue(model.color);
    if (this.value !== nextValue) {
      this._syncingValue = true;
      this.value = nextValue;
      this._syncingValue = false;
    }

    if (emit) {
      emitPublicColorEvent(this, COLOR_CHANGE, model);
    }
  }

  willUpdate(changed) {
    // Host attribute / property `value` changed from the outside.
    if (changed.has('value') && !this._syncingValue) {
      const color = Color.parse(this.value);
      if (color && colorToValue(color) !== colorToValue(this.model.color)) {
        this.applyModel(
          createColorModel(color, {
            space: this.isHsl ? 'hsl' : 'hsv',
            source: 'external',
            hsx: null,
          }),
          { emit: true }
        );
      }
    }

    if (changed.has('isHsl')) {
      const space = this.isHsl ? 'hsl' : 'hsv';
      if (this.model.space !== space) {
        // Drop polar lock and mark external so canvas/channels fully refresh.
        this.model = createColorModel(this.model.color, {
          space,
          source: 'external',
          hsx: null,
        });
      }
    }
  }

  /** Child `color-intent` → update model. */
  onColorIntent({ detail }) {
    const { color, source, hsx = null, space } = detail;
    this.applyModel(
      createColorModel(color, {
        source,
        hsx,
        space: space ?? (this.isHsl ? 'hsl' : 'hsv'),
      })
    );
  }

  /** Hex / free-text field. */
  setColorFromInput() {
    const cs = this.renderRoot.querySelector('input#hex').value;
    const color = Color.parse(cs);
    if (!color) {
      console.log(`ignored unparsable input: ${cs}`);
      return;
    }
    this.applyModel(
      createColorModel(color, {
        source: 'input',
        space: this.isHsl ? 'hsl' : 'hsv',
        hsx: null,
      })
    );
  }

  /** Hue bar only sends `{ h }`; parent merges into current HS* coords. */
  setHue({ detail: { h } }) {
    const space = this.isHsl ? 'hsl' : 'hsv';
    const base =
      this.model.hsx ?? (this.isHsl ? this.color.hsl : this.color.hsv);
    const hsx = { ...base, h };
    let color = this.isHsl ? Color.fromHsl(hsx) : Color.fromHsv(hsx);
    color.a = this.color.alpha;
    this.applyModel(createColorModel(color, { source: 'hue', space, hsx }));
  }

  setHsl(hsl) {
    this.isHsl = hsl;
  }

  okColor() {
    emitPublicColorEvent(this, COLOR_PICK, this.model);
  }

  showCopyDialog() {
    this.copied = null;
    this.dlg = this.dlg ?? this.renderRoot.querySelector('dialog');
    if (this.dlg.open) {
      return this.dlg.close();
    }
    this.dlg.show();
  }

  clipboard(f) {
    const s = this.color.toString(f);
    window.navigator.clipboard.writeText(s).then(() => {
      this.hideCopyDialog(s);
    });
  }

  hideCopyDialog(copyText) {
    if (!this.dlg) {
      this.dlg = this.renderRoot.querySelector('dialog');
    }
    if (copyText) {
      this.copied = copyText;
      setTimeout(() => this.hideCopyDialog(), 1200);
      return;
    }
    if (this.dlg?.open) {
      this.dlg.close();
    }
    this.copied = null;
  }

  setSliding({ detail }) {
    this.debounceMode = detail.sliding;
  }

  render() {
    const { color, hsx, source } = this.model;
    const hue = hsx?.h ?? color.hsl.h;
    const hslChannels = this.isHsl ? ['h', 's', 'l'] : ['h', 's', 'v'];
    const hsvClass = { button: true, active: !this.isHsl, l: true };
    const hslClass = { button: true, active: this.isHsl, r: true };
    const swatchBg = { backgroundColor: color };
    const hideCopied = this.copied
      ? { textAlign: 'center', display: 'block' }
      : { display: 'none' };

    return html`
      <div class='outer' @color-intent=${this.onColorIntent}>
        <hue-bar
          @sliding-hue=${this.setSliding}
          .hue=${hue}
          @hue-update=${this.setHue}
          .color=${color}></hue-bar>
        <div class='d-flex'>
          <div class='col w-30'>
            ${['r', 'g', 'b', 'a'].map(
              (c) => html`
                <color-input-channel
                  group='rgb'
                  channel=${c}
                  .isHsl=${this.isHsl}
                  .color=${color}
                  .hsx=${hsx}></color-input-channel>
              `
            )}
            <div class='hex'>
              <dialog tabindex='0'>
                <sub class='copied' style=${styleMap(hideCopied)}>copied <em>${this.copied}</em></sub>
                ${this.copied
                  ? html``
                  : html`
                      <a class='copy-item' @click=${() => this.clipboard('hex')} id='copyHex'>
                        <input class='form-control' disabled value=${color.hex}>
                        <button title='Copy HEX String' class='button' tabindex='0'>${copy}</button>
                      </a>
                      <a class='copy-item' @click=${() => this.clipboard('css')} id='copyRgb'>
                        <input class='form-control' disabled value=${color.css}>
                        <button title='Copy RGB String' class='button' tabindex='0'>${copy}</button>
                      </a>
                      <a class='copy-item' id='copyHsl'
                         @click=${() =>
                           this.clipboard(color.alpha < 1 ? 'hsla' : 'hsl')}>
                        <input class='form-control' disabled
                               value=${color.toString(color.alpha < 1 ? 'hsla' : 'hsl')}>
                        <button title='Copy HSL String' class='button' tabindex='0'>${copy}</button>
                      </a>
                    `}
              </dialog>
              <label for='hex'>#</label>
              <input aria-label='Hexadecimal value (editable - accepts any valid color string)'
                     @input=${this.setColorFromInput} class='form-control' id='hex'
                     placeholder='Set color' .value=${this.hex}>
              <a title='Show copy to clipboard menu' @click=${this.showCopyDialog} class='button copy'>
                ${copy}
                <span>&#11205;</span>
              </a>
            </div>
          </div>
          <div class='col w-30'>
            ${hslChannels.map(
              (c) => html`
                <color-input-channel
                  group='hsl'
                  channel=${c}
                  .isHsl=${this.isHsl}
                  .color=${color}
                  .hsx=${hsx}></color-input-channel>
              `
            )}
            <div class='hsl-mode'>
              <a title='Use hue / saturation / value (brightness) mode'
                 class=${classMap(hsvClass)}
                 @click=${() => this.setHsl(false)}>HSV</a><a
                title='Use hue / saturation / luminosity mode'
                class=${classMap(hslClass)}
                @click=${() => this.setHsl(true)}>HSL</a>
            </div>
          </div>
          <div class='w-40'>
            <hsl-canvas
              .debounceMode=${this.debounceMode}
              .size=${160}
              .isHsl=${this.isHsl}
              .color=${color}
              .hsx=${hsx}
              .source=${source}></hsl-canvas>
            <div class='ok'>
              <a class='button' @click=${this.okColor}>OK
                <span class='swatch'>
                  <span style=${styleMap(swatchBg)}></span>
                  <span class='checky'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// Re-export event names for hosts / typings consumers.
export { COLOR_CHANGE, COLOR_PICK };

window.customElements.get('color-picker') ||
  window.customElements.define('color-picker', ColorPicker);
