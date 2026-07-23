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

/** @param {unknown} n @param {number | null} [fallback] */
export const finiteOr = (n, fallback = null) =>
  Number.isFinite(n) ? /** @type {number} */ (n) : fallback;

/**
 * modern-color can emit `#NANNANNAN` when HSL/HSV channels are non-finite;
 * that then re-parses into garbage like `#0ANANNAN` (r=10, g/b NaN).
 * @param {Color | null | undefined} color
 */
export const isValidColor = (color) =>
  !!color &&
  Number.isFinite(color.r) &&
  Number.isFinite(color.g) &&
  Number.isFinite(color.b) &&
  Number.isFinite(color.alpha);

/**
 * Keep a usable hue when saturation hits 0 (RGB→HSL makes hue undefined/0)
 * and scrub non-finite polar channels so the model never stores NaNs.
 *
 * @param {Record<string, number> | null | undefined} hsx
 * @param {{ color: Color, space: ColorSpace, prevHsx?: Record<string, number> | null }} ctx
 * @returns {Record<string, number> | null}
 */
export const normalizeHsx = (hsx, { color, space, prevHsx = null }) => {
  const derived = space === 'hsl' ? color.hsl : color.hsv;
  const prevH = finiteOr(prevHsx?.h);

  if (hsx) {
    const h = finiteOr(hsx.h, prevH ?? finiteOr(derived.h, 0));
    const s = finiteOr(hsx.s, finiteOr(derived.s, 0));
    if (space === 'hsl') {
      return { h, s, l: finiteOr(hsx.l, finiteOr(derived.l, 0)) };
    }
    return { h, s, v: finiteOr(hsx.v, finiteOr(derived.v, 0)) };
  }

  // No explicit polar lock — for grayscale, keep the last hue so the strip
  // / H channel don't jump to 0 when the user desaturates.
  if (derived.s === 0 && prevH != null) {
    return space === 'hsl'
      ? { h: prevH, s: 0, l: derived.l }
      : { h: prevH, s: 0, v: derived.v };
  }

  return null;
};

/**
 * @param {Color} color
 * @param {{ space?: ColorSpace, source?: ColorSource, hsx?: Record<string, number> | null }} [opts]
 * @param {ColorModel | null} [prev] previous model — supplies sticky hue
 * @returns {ColorModel}
 */
export const createColorModel = (
  color,
  { space = 'hsl', source = 'external', hsx = null } = {},
  prev = null
) => ({
  color,
  space,
  source,
  hsx: isValidColor(color)
    ? normalizeHsx(hsx, {
        color,
        space,
        prevHsx: prev?.hsx ?? null,
      })
    : null,
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
