const colorByte = v => maxVal(255, Math.round(Number(v)));
const float2Byte = v => colorByte(v * 255);
const byte2Float = v => maxVal(1, v / 255);
const maxVal = (max, v) => Math.max(0, Math.min(max, v));

const toFlt = (v) => {
  if (v === undefined) {
    return 1;
  }
  if (typeof v === 'string' && v.indexOf('%') > 0) {
    v = Number(v.split('%')[0]) / 100;
  }
  v = Number(Number(v).toFixed(3));
  if (!isNaN(v)) {
    return maxVal(1, v);
  }
  return 1;
};

export const namedColors = {
  'aliceblue': '#F0F8FF',
  'antiquewhite': '#FAEBD7',
  'aqua': '#00FFFF',
  'aquamarine': '#7FFFD4',
  'azure': '#F0FFFF',
  'beige': '#F5F5DC',
  'bisque': '#FFE4C4',
  'black': '#000000',
  'blanchedalmond': '#FFEBCD',
  'blue': '#0000FF',
  'blueviolet': '#8A2BE2',
  'brown': '#A52A2A',
  'burlywood': '#DEB887',
  'cadetblue': '#5F9EA0',
  'chartreuse': '#7FFF00',
  'chocolate': '#D2691E',
  'coral': '#FF7F50',
  'cornflowerblue': '#6495ED',
  'cornsilk': '#FFF8DC',
  'crimson': '#DC143C',
  'cyan': '#00FFFF',
  'darkblue': '#00008B',
  'darkcyan': '#008B8B',
  'darkgoldenrod': '#B8860B',
  'darkgray': '#A9A9A9',
  'darkgrey': '#A9A9A9',
  'darkgreen': '#006400',
  'darkkhaki': '#BDB76B',
  'darkmagenta': '#8B008B',
  'darkolivegreen': '#556B2F',
  'darkorange': '#FF8C00',
  'darkorchid': '#9932CC',
  'darkred': '#8B0000',
  'darksalmon': '#E9967A',
  'darkseagreen': '#8FBC8F',
  'darkslateblue': '#483D8B',
  'darkslategray': '#2F4F4F',
  'darkslategrey': '#2F4F4F',
  'darkturquoise': '#00CED1',
  'darkviolet': '#9400D3',
  'deeppink': '#FF1493',
  'deepskyblue': '#00BFFF',
  'dimgray': '#696969',
  'dimgrey': '#696969',
  'dodgerblue': '#1E90FF',
  'firebrick': '#B22222',
  'floralwhite': '#FFFAF0',
  'forestgreen': '#228B22',
  'fuchsia': '#FF00FF',
  'gainsboro': '#DCDCDC',
  'ghostwhite': '#F8F8FF',
  'gold': '#FFD700',
  'goldenrod': '#DAA520',
  'gray': '#808080',
  'grey': '#808080',
  'green': '#008000',
  'greenyellow': '#ADFF2F',
  'honeydew': '#F0FFF0',
  'hotpink': '#FF69B4',
  'indianred ': '#CD5C5C',
  'indigo ': '#4B0082',
  'ivory': '#FFFFF0',
  'khaki': '#F0E68C',
  'lavender': '#E6E6FA',
  'lavenderblush': '#FFF0F5',
  'lawngreen': '#7CFC00',
  'lemonchiffon': '#FFFACD',
  'lightblue': '#ADD8E6',
  'lightcoral': '#F08080',
  'lightcyan': '#E0FFFF',
  'lightgoldenrodyellow': '#FAFAD2',
  'lightgray': '#D3D3D3',
  'lightgrey': '#D3D3D3',
  'lightgreen': '#90EE90',
  'lightpink': '#FFB6C1',
  'lightsalmon': '#FFA07A',
  'lightseagreen': '#20B2AA',
  'lightskyblue': '#87CEFA',
  'lightslategray': '#778899',
  'lightslategrey': '#778899',
  'lightsteelblue': '#B0C4DE',
  'lightyellow': '#FFFFE0',
  'lime': '#00FF00',
  'limegreen': '#32CD32',
  'linen': '#FAF0E6',
  'magenta': '#FF00FF',
  'maroon': '#800000',
  'mediumaquamarine': '#66CDAA',
  'mediumblue': '#0000CD',
  'mediumorchid': '#BA55D3',
  'mediumpurple': '#9370DB',
  'mediumseagreen': '#3CB371',
  'mediumslateblue': '#7B68EE',
  'mediumspringgreen': '#00FA9A',
  'mediumturquoise': '#48D1CC',
  'mediumvioletred': '#C71585',
  'midnightblue': '#191970',
  'mintcream': '#F5FFFA',
  'mistyrose': '#FFE4E1',
  'moccasin': '#FFE4B5',
  'navajowhite': '#FFDEAD',
  'navy': '#000080',
  'oldlace': '#FDF5E6',
  'olive': '#808000',
  'olivedrab': '#6B8E23',
  'orange': '#FFA500',
  'orangered': '#FF4500',
  'orchid': '#DA70D6',
  'palegoldenrod': '#EEE8AA',
  'palegreen': '#98FB98',
  'paleturquoise': '#AFEEEE',
  'palevioletred': '#DB7093',
  'papayawhip': '#FFEFD5',
  'peachpuff': '#FFDAB9',
  'peru': '#CD853F',
  'pink': '#FFC0CB',
  'plum': '#DDA0DD',
  'powderblue': '#B0E0E6',
  'purple': '#800080',
  'rebeccapurple': '#663399',
  'red': '#FF0000',
  'rosybrown': '#BC8F8F',
  'royalblue': '#4169E1',
  'saddlebrown': '#8B4513',
  'salmon': '#FA8072',
  'sandybrown': '#F4A460',
  'seagreen': '#2E8B57',
  'seashell': '#FFF5EE',
  'sienna': '#A0522D',
  'silver': '#C0C0C0',
  'skyblue': '#87CEEB',
  'slateblue': '#6A5ACD',
  'slategray': '#708090',
  'slategrey': '#708090',
  'snow': '#FFFAFA',
  'springgreen': '#00FF7F',
  'steelblue': '#4682B4',
  'tan': '#D2B48C',
  'teal': '#008080',
  'thistle': '#D8BFD8',
  'tomato': '#FF6347',
  'turquoise': '#40E0D0',
  'violet': '#EE82EE',
  'wheat': '#F5DEB3',
  'white': '#FFFFFF',
  'whitesmoke': '#F5F5F5',
  'yellow': '#FFFF00',
  'yellowgreen': '#9ACD32'
};

export class Color {
  constructor(input, g, b, a) {
    if (Color.isBaseConstructor(input)) {
      this.r = colorByte(input.r);
      this.g = colorByte(input.g);
      this.b = colorByte(input.b);
      if (input.a !== undefined) {
        this.a = toFlt(input.a);
      }
      return this;
    }else{
      return Color.parse(input, g, b, a);
    }
  }
  static parse(input, g, b, a){
    if (Color.isBaseConstructor(input)){
      return new Color(input);
    }
    if (g !== undefined && b !== undefined) {
      let r = colorByte(input);
      g = colorByte(g);
      b = colorByte(b);
      if (a !== undefined) {
        a = toFlt(a);
      }
      return new Color({r, g, b, a});
    }
    if (Array.isArray(input)) {
      return Color.fromArray(input);
    } else if (typeof input === 'string') {
      let a;
      if (g !== undefined && Number(g) <= 1 && Number(g) >= 0){
        a = Number(g);
      }
      if (input.startsWith('#')) {
        return Color.fromHex(input, a);
      } else if (namedColors[input.toLowerCase()]) {
        return Color.fromNamed(input, a);
      } else if (input.startsWith('rgb')) {
        return Color.fromRgbString(input);
      } else if(input === 'transparent'){
        let r,g,b,a;
        r = g = b = a = 0;
        return new Color({r, g, b, a});
      } else {
        return null;
      }
    } else if (typeof input === 'object') {
      if (input.a !== undefined) {
        this.a = toFlt(input.a);
      }
      if (input.h !== undefined) {
        let c = {};
        if (input.v !== undefined) {
          c = Color.fromHsv(input);
        } else if (input.l !== undefined) {
          c = Color.fromHsl(input);
        } else {
          return Color.fromArray([0, 0, 0]);
        }
        c.a = input.a !== undefined ? toFlt(input.a) : undefined;
        return new Color(c);
      }
      if (input.c !== undefined) {
        return Color.fromCMYK(input);
      }
      return this;
    }
    return Color.fromArray([0, 0, 0]);
  }
  static isBaseConstructor(input){
    return typeof input === 'object' && (input.r !== undefined && input.g !== undefined && input.b !== undefined);
  }
  static fromNamed(colorName, a) {
    return Color.fromHex(namedColors[colorName.toLowerCase()], a);
  }
  static fromArray(input) {
    input = input.filter(channel=>channel !== '' && isFinite(channel));
    const c = {
      r: colorByte(input[0]),
      g: colorByte(input[1]),
      b: colorByte(input[2])
    };
    if (input[3] !== undefined) {
      c.a = toFlt(input[3]);
    }
    return new Color(c);
  }
  static fromHex(hex, a) {
    hex = hex.replace('#', '');
    if (hex.length === 3 || hex.length === 4) {
      hex = hex.split('').map(h => h + h).join('');
    }
    let arr = hex.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));
    if (arr.length === 4){
      arr[3] /= 255;
    }
    else if (a !== undefined){
      arr[3] = a;
    }
    return Color.fromArray(arr);
  }
  static fromRgbString(s) {
    if (s.includes(',')) {
      return Color.fromArray(s.split('(')[1].split(')')[0].split(','));
    }
    const vals = s.replace('/',' ').split('(')[1].replace(')','')
      .split(' ').filter(v => v !== '' && isFinite(Number(v)));

    return Color.fromArray(vals);
  }
  static fromHsv({h, s, v}) {
    s = s / 100;
    v = v / 100;
    const hi = Math.floor((h / 60) % 6);
    const f = (h / 60) - hi;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const sequences = [[v, t, p],
      [q, v, p],
      [p, v, t],
      [p, q, v],
      [t, p, v],
      [v, p, q]];
    const rgb = sequences[hi].map(chan => Math.round(chan * 256));

    return new Color({r: colorByte(rgb[0]), g: colorByte(rgb[1]), b: colorByte(rgb[2])});
  }
  static fromHsl({h, s, l}) {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    return new Color({
      r: float2Byte(m + r),
      g: float2Byte(m + g),
      b: float2Byte(m + b)
    });
  }
  static fromCMYK({c, m, y, k, a}){
    const chanCalc = ch => float2Byte(
      1 - Math.min(1, (ch / 100) * (1 - k) + k)
    );
    return new Color({r:chanCalc(c), b:chanCalc(m), g:chanCalc(y), a});
  }

  /** Getters **/
  get alpha(){
    return this.a === undefined ? 1 : this.a;
  }
  get rgb() {//simple rgb array
    return [this.r, this.g, this.b];
  }
  get rgba() {//simple rgba array

    return [this.r, this.g, this.b, this.alpha];
  }
  get rgbObj() {
    let {r, g, b} = this;
    return {r, g, b, a:this.alpha};
  }
  get css(){
    return this.rgbString;
  }
  get rgbString() {
    if (this.a === undefined){
      return `rgb(${this.rgb.join(',')})`;
    }
    return `rgba(${this.rgba.join(',')})`;
  }
  get rgbaString() {//alias
    return `rgba(${this.rgba.join(',')})`;
  }
  get hex() {
    return `#${this.rgb.map(v => v.toString(16).padStart(2, '0')).join('')}`.toUpperCase();
  }
  get hexa() {//alias
    return this.rgbaHex;
  }
  get rgbaHex() {
    let rgba = this.rgba;
    rgba[3] = float2Byte(rgba[3]);
    return `#${rgba.map(v => v.toString(16).padStart(2, '0')).join('')}`.toUpperCase();
  }
  get hsv() {
    const r = byte2Float(this.r);
    const g = byte2Float(this.g);
    const b = byte2Float(this.b);
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    let hue;
    const value = max;
    const diff = max - min;

    // Hue
    if (diff === 0)
      hue = 0;
    else if (max === r)
      hue = (60 * ((g - b) / diff)) % 360;
    else if (max === g)
      hue = 60 * ((b - r) / diff) + 120;
    else if (max === b)
      hue = 60 * ((r - g) / diff) + 240;
    else hue = 0;
    if (hue < 0)
      hue += 360;

    // Saturation
    const saturation = max === 0 ? 0 : 1 - (min / max);

    return {
      h: Math.round(hue),
      s: Math.round(saturation * 100),
      v: Math.round(value * 100),
      a: this.alpha
    };
  }
  get hsl() {
    const r = byte2Float(this.r);
    const g = byte2Float(this.g);
    const b = byte2Float(this.b);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
      a: this.alpha
    };
  }

  get cmyk(){
    let c, m, y, k;

    const r = parseFloat(this.r) / 255.0;
    const g = parseFloat(this.g) / 255.0;
    const b = parseFloat(this.b) / 255.0;

    k = 1 - Math.max(r, g, b);

    if (k === 1) c = m = y = 0;
    else {
      c = (1 - r - k) / (1 - k);
      m = (1 - g - k) / (1 - k);
      y = (1 - b - k) / (1 - k);
    }

    c = Math.round(100 * c);
    m = Math.round(100 * m);
    y = Math.round(100 * y);
    k = Math.round(100 * k);

    return this.alpha ? { c, m, y, k, a: this.alpha } : { c, m, y, k };
  }

  get hslString() {
    const hsl = this.hsl;
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  }
  get hslaString() {
    const hsl = this.hsl;
    return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${hsl.a})`;
  }

  get cmykString() {
    const cmyk = this.cmyk;
    return `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;
  }
  get cmykaString() {
    const cmyk = this.cmyk;
    return `cmyka(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%, ${cmyk.a})`;
  }

  /** Functions **/
  toString(format = 'rgb') {// accepts rgb, rgbaHex, hex, hsl, hsla, cmyk, cmyka
    let s;
    switch (format) {
      case 'rgb':
        s = this.rgbString;
        break;
      case 'hex':
        s = this.hex;
        break;
      case 'rgbaHex':
        s = this.hexa;
        break;
      case 'hsl':
        s = this.hslString;
        break;
      case 'hsla':
        s = this.hslaString;
        break;
      case 'cmyk':
        s = this.cmykString;
        break;
      case 'cmyka':
        s = this.cmykaString;
        break;

      default :
        s = this.rgbString;
        break;
    }
    return s;
  }
  mix(color, ratio = 0.5) {
    const rgb1 = this.rgba;
    rgb1[3] = float2Byte(rgb1[3]);
    const rgb2 = new Color(color).rgba;
    rgb2[3] = float2Byte(rgb2[3]);
    ratio = toFlt(ratio);
    const mixed = rgb1.map((lc, i) => {
      const hc = rgb2[i];
      // high color is lower than low color - reverse the subtracted vals
      const reverse = hc < lc;
      // difference between the high and low values
      const diff = reverse ? lc - hc : hc - lc;
      const diffRatio = Math.round(diff * ratio);
      // add or subtract from lc based on reverse mode
      return reverse ? lc - diffRatio : diffRatio + lc;
    });
    // noinspection JSValidateTypes
    mixed[3] = byte2Float(mixed[3]);
    return Color.fromArray(mixed);
  }
  adjustSatLum(chan, ratio, reverse){
    const hsl = this.hsl;
    let val = hsl[chan];
    let incrementBy =  (reverse ? val : 100 - val) * ratio;
    hsl[chan] = maxVal(100, reverse ? val - incrementBy : val + incrementBy);
    hsl.a = this.a;
    return new Color(hsl);
  }
  lighten(ratio, reverse = false) {
    return this.adjustSatLum('l', ratio, reverse);
  }
  darken(ratio) {
    return this.lighten(ratio, true);
  }
  saturate(ratio, reverse = false) {
    return this.adjustSatLum('s', ratio, reverse);
  }
  desaturate(ratio) {
    return this.saturate(ratio, true);
  }
  grayscale() {
    return this.desaturate(1);
  }
  rotate(deg){
    return this.hue(deg);
  }
  hue(deg) {
    const hsl = this.hsl;
    hsl.h = Math.round(hsl.h + deg) % 360;
    hsl.a = this.a;
    return new Color(hsl);
  }
  fadeIn(ratio, reverse) {
    let a = this.alpha;
    const {r, g, b} = this;
    let incr = (1 - a) * ratio;
    a = reverse ? a - incr : a + incr;
    return Color({r, g, b, a});
  }
  fadeOut(ratio) {
    return this.fadeIn(ratio, true);
  }
  negate(){
    let rgb = this.rgb.map(c => 255 - c);
    if (this.a !== undefined){
      rgb.push(this.alpha);
    }
    return Color.fromArray(rgb);
  }
}
