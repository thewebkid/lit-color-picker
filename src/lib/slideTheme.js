import colors from './colorConstants.js';
import { Color } from './Color.js';
import {reactive} from 'vue';
const px = n => `${n}px`;

class ColorScheme {
  name;
  slideBg = Color.parse('white');
  slideText = Color.parse('black');
  slideHeading = Color.parse('black');
  primary = Color.parse(colors.blue500);
  primary1;
  primary2;
  primary3;
  primary4;
  primary5;
  primary6;
  primary7;
  primary8;
  secondary = Color.parse(colors.gray500);
  secondary1;
  secondary2;
  secondary3;
  secondary4;
  secondary5;
  secondary6;
  secondary7;
  secondary8;
  fontFamily;
  constructor({ font = `"Helvetica Neue", Inter`, colors = {}, headingFont }, name = 'default') {
    this.name = name;
    Object.entries(colors).forEach(([name, color]) => (this[name] = Color.parse(color)));

    if (!this.secondary) {
      this.secondary = this.primary;
    }

    this.fontFamily = font;
    this.headingFont = headingFont ?? font;
    this.setPrimary();
    this.setSecondary();
  }

  static create(colors = {}, name) {
    return new ColorScheme(colors, name);
  }

  setPrimary(c) {
    this.genThemeVariants(c ?? this.primary, 'primary');
  }

  setSecondary(c) {
    this.genThemeVariants(c ?? this.secondary, 'secondary');
  }

  genThemeVariants(c, key) {
    let { h } = c.hsv;
    this[key] = c;
    const shades = c.getShades(8);
    shades.forEach((shade, i) => {
      this[`${key}${i + 1}`] = shade;
    })
  }
}

class SlideTheme {
  scheme;
  name;
  fontSizes = {
    xxl: 80,
    xl: 64,
    lg: 48,
    md: 40,
    sm: 36,
    xs: 28,
    xxs: 24
  };
  static keys = {
    slideRoot: 'slideRoot',
    contentBox: 'contentBox',
    accentBox: 'accentBox',
    accentBox2: 'accentBox2',
    headingBox: 'headingBox',
    brandSlide: 'brandSlide',
    separator: 'separator',
    brandBox: 'brandBox'
  }
  constructor(name) {
    this.name = name;
    this.scheme = ColorScheme.create();
  }

  static create(name) {
    return new SlideTheme(name);
  }

  get contentBox() {
    return {
      background: this.scheme.slideBg,
      color: this.scheme.slideText,
      '--fontSize': px(this.fontSizes.md),
      '--fontWeight': 400,
      '--fontFamily': this.scheme.fontFamily
    };
  }
  get accentBox() {
    const { primary } = this.scheme;
    return {
      ...this.contentBox,
      background: primary.toAlpha(0)
    };
  }
  get accentBox2() {
    return {
      ...this.contentBox,
      background: this.scheme.secondary.toAlpha(0)
    };
  }
  get headingBox() {
    return {
      fontWeight: 600,
      background: this.scheme.slideBg,
      '--textColor': this.scheme.slideText,
      '--fontSize': px(this.fontSizes.lg),
    };
  }
  get brandSlide() {
    return this.slideRoot
  }
  get slideRoot(){
    return {
      background: this.scheme.slideBg,
      '--fontFamily': this.scheme.fontFamily,
      '--textColor': this.scheme.slideText,
      '--fontSize': px(this.fontSizes.sm),
      '--separatorColor': this.scheme.primary1.hex,
      '--headingColor': this.scheme.slideHeading,
      '--headingFontSize': px(this.fontSizes.lg),
      '--headingFontWeight': 600,
      '--headingFontFamily': this.scheme.headingFont ?? this.scheme.font
    }
  }
  get separator(){
    return {
      background: this.scheme.slideText.toAlpha(.2),
    }
  }
}

class BeciseTheme extends SlideTheme {
  constructor(name, scheme) {
    super(name, scheme);
    this.scheme = ColorScheme.create({
      primary: colors.blue,
      secondary: colors.secondary
    }, 'becise');

  }

  static create(name, scheme) {
    return new BeciseTheme(name, scheme);
  }

  get fullBgBrand() {
    const {  primary5,primary4 } = this.scheme;
    let lightColor = primary4;
    let darkColor = primary5;
    const primaryFade = darkColor.toAlpha(0.03);
    return {
      background: `radial-gradient(circle closest-corner at 79.7% 46.7%,
          ${darkColor} 22.40%,  ${darkColor} 41.00%,  ${darkColor.toAlpha(.08)} 99.10%
        ),
        linear-gradient(220deg,
          ${primaryFade} 22.40%, ${darkColor} 22.60%, ${darkColor.toAlpha(.98)} 47.40%, ${primaryFade} 87.60%),
        linear-gradient(134deg,
          ${darkColor} 22.40%, ${lightColor} 22.50%, ${lightColor} 68.40%, ${darkColor} 68.50%
        )`
    };
  }

  get accentBox() {
    const { primary, secondary, primary5 } = this.scheme;
    return {
      background: primary.toAlpha(.2),
      fontSize: px(this.fontSizes.md),
      heading:{
        fontSize: px(this.fontSizes.lg),
        fontWeight: 600,
        color:this.scheme.primary5
      }
    };
  }
  get accentBox2() {
    const { secondary } = this.scheme;
    return {
      background: secondary.toAlpha(.2),
      fontSize: px(this.fontSizes.md),
      heading: {
        ...this.accentBox.heading,
        color: this.scheme.secondary5
      }
    };
  }
  get headingBox() {
    return {
      fontWeight: 600,
      color: this.scheme.light2,
      fontSize: px(this.fontSizes.lg),
      ...this.brandBox
    };
  }

  get brandBox() {
    return {
      background: `linear-gradient(90deg, ${this.scheme.primary4} -26.08%, ${this.scheme.primary5} 85.04%)`,
      '--textColor': 'white',
      '--headingColor': 'white'
    };
  }

  get brandSlide() {
    return {
      ...this.slideRoot,
      ...this.fullBgBrand,
      '--textColor': 'white',
      '--headingColor': 'white',
      '--headingFontWeight': 600,
      '--headingFontSize': px(this.fontSizes.lg),
    };
  }
}
class ArteraTheme extends BeciseTheme {
  constructor(name) {
    super(name);
    this.scheme = ColorScheme.create({
      colors: {
        primary: Color.fromHex('#7716b7'),
        secondary: Color.fromHex('#FE2b65')
      }, font: 'Poppins, sans-serif'
    }, 'artera');
  }
  static create(name){
    return new ArteraTheme(name);
  }
  get accentBox() {
    const { primary1, primary6 } = this.scheme;

    return {
      background: primary1.desaturate(1),
      fontSize: px(this.fontSizes.md),
      '--headingFontSize': px(this.fontSizes.lg),
      '--headingFontWeight': 600,
      '--headingColor': primary6
    };
  }
  get accentBox2() {
    return {
      background: this.accentBox.background,
      fontSize: px(this.fontSizes.md),
      heading: {
        ...this.accentBox.heading,
        color: this.scheme.secondary6
      }
    };
  }
  get fullBgBrand() {
    const {slideBg, secondary5, primary5} = this.scheme;
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="1263" height="1100" viewBox="0 0 1463 1320" fill="none">
    <g style="mix-blend-mode:soft-light">
      <path d="M1342.06 121.275C1206.79 -14.0011 1001.54 -35.7696 842.941 54.4143L1121.27 332.74C1166.36 377.832 1166.36 451.431 1121.27 496.523L1103.13 514.663L720.622 132.159L721.141 131.641L719.067 129.568C562.541 -26.9585 312.722 -41.4709 149.458 94.8416C60.3103 169.477 6.4072 279.356 1.22423 395.455C-3.95875 511.553 40.0966 625.061 121.988 706.952L732.025 1316.99V1319.06L1341.54 709.543C1503.25 547.834 1503.25 284.539 1341.54 122.83L1342.06 121.275ZM732.543 884.21L726.842 878.509L338.636 490.303C316.868 468.535 305.465 439.51 306.502 408.412C308.057 377.832 322.051 349.326 345.893 329.631C387.356 294.386 457.845 301.643 501.9 345.698L720.622 564.42L732.025 575.822L732.025 577.896L885.959 731.83L732.025 885.765L732.543 884.21Z" fill="url(#fadeWhite)"/>
    </g>
    <defs>
      <linearGradient id="fadeWhite" x1="185.346" y1="122.421" x2="1134.96" y2="893.041" gradientUnits="userSpaceOnUse">
        <stop stop-color="${slideBg}" stop-opacity=".4"/>
        <stop offset="1" stop-color="${slideBg}" stop-opacity="0.2"/>
      </linearGradient>
    </defs>
  </svg>`;

    return {
      '--pseudoBg': `url(data:image/svg+xml;base64,${btoa(svgString)}) no-repeat 333px -160px`,
      background:`linear-gradient(90deg, ${primary5} , ${secondary5} )`
    };
  }
  get slideRoot(){
    const {scheme, fontSizes} = this;
    return {
      ...super.slideRoot,
      background: scheme.slideBg,
      '--fontFamily': scheme.fontFamily,
      '--textColor': scheme.slideText,
      '--fontSize': px(fontSizes.sm),
      '--separatorColor': scheme.primary1
    }
  }
  get brandBox() {
    const { primary, primary4 } = this.scheme;
    return {
      background: this.fullBgBrand.background,
      '--textColor': 'white',
      '--headingColor': 'white'
    };
  }
  get headingBox() {
    return {
      ...super.headingBox,
      background: this.scheme.slideBg,
      '--headingLine':this.fullBgBrand.background,
      '--headingLineHeight': px(3),
      '--headingLineOffY': px(-10),
    };
  }
}
class LocktonTheme extends ArteraTheme {
  constructor(name) {
    super(name);
    this.scheme = ColorScheme.create({
      colors: {
        primary: Color.fromHex('#009ee3')
      },headingFont:'"EB Garamond", sans-serif', font:'"Work Sans", sans-serif'
    }, 'lockton');
  }
  static create(){
    return new LocktonTheme('lockton');
  }
  get fullBgBrand() {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" style="transform:scale(.8)" width="1921" height="1080" viewBox="0 0 1921 1080">
  <g filter="url(#blur)">
    <path d="M192.07 462.56C78.8754 349.365 229.265 64.159 318.609 -64.2949H2074.02V706.431C2080.07 803.334 2024.58 979.03 1754.23 906.59C1483.88 834.151 1534.22 631.002 1593.18 538.482C1383.82 667.32 906.662 924.996 672.913 924.996C439.165 924.996 593.923 492.469 700.521 276.205C578.202 385.488 305.264 575.754 192.07 462.56Z" fill="url(#radial)"/>
  </g>
  <defs>
    <filter id="blur" x="-148.488" y="-364.295" width="2522.94" height="1589.29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4035_36791"/>
    </filter>
    <radialGradient id="radial" cx="0" cy="0" r="1"
    gradientUnits="userSpaceOnUse"
    gradientTransform="translate(1505.42 140.801) rotate(135.513) scale(986.039 1916.62)">
      <stop stop-color="${this.scheme.primary5}"/>
      <stop offset="1" stop-color="${this.scheme.primary7}"/>
    </radialGradient>
  </defs>
</svg>`;
    const black20 = this.scheme.slideText.toAlpha(.2);
    return {
      '--pseudoBg': `url(data:image/svg+xml;base64,${btoa(svgString)}) no-repeat -120px -110px ${this.scheme.slideText}`,
      //backgroundColor:`black`,
      '--pseudoFg':`radial-gradient(circle, ${black20} 15%, transparent 15%) 0 0 / 30px 52px,
            radial-gradient(circle, ${black20} 15%, transparent 15%) 15px 26px / 30px 52px repeat`,
      '--fgBlendMode':'soft-light'
    };
  }
  get brandBox() {
    return {
      background:this.scheme.slideText,
      '--textColor': this.scheme.slideBg,
      '--headingColor': this.scheme.slideBg,
      boxShadow: `20px 0 0 0 ${this.scheme.primary5}`
    };
  }
  get headingBox() {
    return {
      ...super.headingBox,
      background: this.scheme.slideText,
      '--headingLine':this.scheme.primary5,
      '--headingLineHeight': px(10),
      '--headingLineOffY': px(6),
    };
  }
}

// Export themes for extensibility
export const slideThemes = reactive({
  default: SlideTheme.create('default'),
  becise: BeciseTheme.create('becise'),
  artera: ArteraTheme.create('artera'),
  lockton: LocktonTheme.create('lockton')
});
