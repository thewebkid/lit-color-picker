import { Color } from 'modern-color';

/**
 * Public host events (bubble + composed).
 * detail: { color, space, source }
 */
export const COLOR_CHANGE = 'color-change';
export const COLOR_PICK = 'color-pick';

/**
 * Internal child → parent intent.
 * detail: { color, source, hsx?, space? }
 */
export const COLOR_INTENT = 'color-intent';

/** @typedef {'hsl' | 'hsv'} ColorSpace */
/** @typedef {'canvas' | 'hue' | 'channel' | 'input' | 'external'} ColorSource */

/**
 * Picker-owned color state. Color instances stay pure —
 * polar coords (`hsx`) and provenance (`source`) live here, not on Color.
 *
 * @typedef {Object} ColorModel
 * @property {Color} color
 * @property {ColorSpace} space
 * @property {ColorSource} source
 * @property {Record<string, number> | null} hsx  explicit {h,s,l} or {h,s,v} when last edit was in HS*
 */

/**
 * @param {Color} color
 * @param {{ space?: ColorSpace, source?: ColorSource, hsx?: Record<string, number> | null }} [opts]
 * @returns {ColorModel}
 */
export const createColorModel = (
  color,
  { space = 'hsl', source = 'external', hsx = null } = {}
) => ({
  color,
  space,
  source,
  hsx,
});

/**
 * Attribute / form-friendly string that round-trips alpha when needed.
 * @param {Color} color
 * @returns {string}
 */
export const colorToValue = (color) =>
  color.alpha < 1 ? color.css : color.hex;

/**
 * Dispatch a child intent (not part of the public API).
 * @param {EventTarget} target
 * @param {{ color: Color, source: ColorSource, hsx?: Record<string, number> | null, space?: ColorSpace }} detail
 */
export const emitColorIntent = (target, detail) => {
  target.dispatchEvent(
    new CustomEvent(COLOR_INTENT, {
      bubbles: true,
      composed: true,
      detail,
    })
  );
};

/**
 * Dispatch a public picker event from the host element.
 * @param {EventTarget} target
 * @param {typeof COLOR_CHANGE | typeof COLOR_PICK} name
 * @param {ColorModel} model
 */
export const emitPublicColorEvent = (target, name, model) => {
  target.dispatchEvent(
    new CustomEvent(name, {
      bubbles: true,
      composed: true,
      detail: {
        color: model.color,
        space: model.space,
        source: model.source,
      },
    })
  );
};
