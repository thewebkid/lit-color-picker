import type { LitElement } from 'lit';
import type { Color } from 'modern-color';

/** Active color space for polar editing. */
export type ColorSpace = 'hsl' | 'hsv';

/** Provenance of the last model write. */
export type ColorSource =
  | 'canvas'
  | 'hue'
  | 'channel'
  | 'input'
  | 'external';

/**
 * Picker-owned color state. `color` stays a pure modern-color instance;
 * polar coords (`hsx`) and provenance (`source`) live here.
 */
export interface ColorModel {
  color: Color;
  space: ColorSpace;
  source: ColorSource;
  /** Explicit `{h,s,l}` or `{h,s,v}` when the last edit was in HS* space. */
  hsx: Record<string, number> | null;
}

/** Public live-mutation event name. */
export declare const COLOR_CHANGE: 'color-change';

/** Public OK / commit event name. */
export declare const COLOR_PICK: 'color-pick';

/** Internal child → parent intent (not part of the public host API). */
export declare const COLOR_INTENT: 'color-intent';

/** `detail` for `color-change` / `color-pick`. */
export interface ColorEventDetail {
  color: Color;
  space: ColorSpace;
  source: ColorSource;
}

export type ColorEventName = typeof COLOR_CHANGE | typeof COLOR_PICK;

/**
 * Build a {@link ColorModel}. When `hsx` is omitted and the color is grayscale,
 * a previous model's hue is preserved when `prev` is passed.
 */
export declare function createColorModel(
  color: Color,
  opts?: {
    space?: ColorSpace;
    source?: ColorSource;
    hsx?: Record<string, number> | null;
  },
  prev?: ColorModel | null
): ColorModel;

/** Attribute / form-friendly string (hex, or CSS when alpha &lt; 1). */
export declare function colorToValue(color: Color): string;

/**
 * `<color-picker>` — Lit 3 color picker web component.
 *
 * @fires color-change - live mutation (`detail`: {@link ColorEventDetail})
 * @fires color-pick - user confirmed with OK (`detail`: {@link ColorEventDetail})
 * @attr {string} value - reflected color string (hex, or css when alpha &lt; 1)
 */
export declare class ColorPicker extends LitElement {
  /** Live modern-color instance (from the internal model). */
  get color(): Color;
  /** Parse and apply an external color (string or modern-color-compatible input). */
  set color(input: unknown);

  /** Reflected color string (hex, or CSS when alpha &lt; 1). */
  value: string;

  /** Hex string mirror of the current color (no alpha). */
  hex: string;

  /** Internal model — prefer `color` / `value` / events for app code. */
  model: ColorModel;

  /** `true` when editing in HSL; `false` for HSV. */
  isHsl: boolean;

  addEventListener(
    type: ColorEventName,
    listener: (this: ColorPicker, ev: CustomEvent<ColorEventDetail>) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;

  removeEventListener(
    type: ColorEventName,
    listener: (this: ColorPicker, ev: CustomEvent<ColorEventDetail>) => void,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'color-picker': ColorPicker;
  }
}

export {};
