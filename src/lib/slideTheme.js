import colors from './colorConstants.js';
import { Color } from './Color.js';
import {reactive} from 'vue';
const px = n => `${n}px`;

class ColorScheme {
  name;
  light1 = Color.parse('white');
  slideBg = Color.parse('white');
  light2;
  dark1 = Color.parse('black');
  slideText = Color.parse('black');
  slideHeading = Color.parse('black');
  dark2;
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
  accent1;
  accent2;
  accent3;
  fontFamily;
  constructor({ font = `"Helvetica Neue", Inter`, colors = {} }, name = 'default') {
    this.name = name;
    Object.entries(colors).forEach(([name, color]) => (this[name] = Color.parse(color)));
    if (!this.light2) {
      this.light2 = this.light1;
    }
    if (!this.dark2) {
      this.dark2 = this.dark1;
    }
    if (!this.accent2) {
      this.accent2 = this.accent1;
    }
    if (!this.accent3) {
      this.accent3 = this.accent2;
    }
    if (!this.secondary) {
      this.secondary = this.primary;
    }
    if (!this.primaryDark) {
      this.primaryDark = this.primary.darken(.2);
    }
    if (!this.primaryLight) {
      this.primaryLight = this.primary.lighten(.2);
    }
    this.fontFamily = font;
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
    const { secondary } = this.scheme;
    return {
      ...this.contentBox,
      background: secondary.toAlpha(0)

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
    let secondary = primary4;
    let primary = primary5;
    //let primary = primary;
    const primaryFade = primary.toAlpha(0.03);
    return {
      background: `radial-gradient(circle closest-corner at 79.7% 46.7%,
          ${primary} 22.40%,  ${primary} 41.00%,  ${primary.toAlpha(.08)} 99.10%
        ),
        linear-gradient(220deg,
          ${primaryFade} 22.40%, ${primary} 22.60%, ${primary.toAlpha(.98)} 47.40%, ${primaryFade} 87.60%),
        linear-gradient(134deg,
          ${primary} 22.40%, ${secondary} 22.50%, ${secondary} 68.40%, ${primary} 68.50%
        )`
    };
  }

  get accentBox() {
    const { primary, secondary, primary5 } = this.scheme;
    return {
      background: primary.toAlpha(.2),
      fontSize: px(this.fontSizes.md),
      //borderRadius: px(20),
      //border: `1.5px solid ${primary5}`,
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
      //borderRadius: px(20),
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
    //const { primary, primary4 } = this.scheme;
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
      },font:'Poppins, sans-serif'
    }, 'artera');
    console.log({artera:this})
  }
  static create(name){
    return new ArteraTheme(name);
  }
  get accentBox() {
    const { primary, secondary, primary5 } = this.scheme;
    //console.log({background: this.scheme.primary1.desaturate()})
    return {
      background: this.scheme.primary1.desaturate(1),
      fontSize: px(this.fontSizes.md),
      //borderRadius: px(20),
      //border: `1.5px solid ${primary5}`,

      '--headingFontSize': px(this.fontSizes.lg),
      '--headingFontWeight': 600,
      '--headingColor':this.scheme.primary6

    };
  }
  get accentBox2() {
    const { secondary } = this.scheme;
    return {
      background: this.accentBox.background,
      fontSize: px(this.fontSizes.md),
      //borderRadius: px(20),
      heading: {
        ...this.accentBox.heading,
        color: this.scheme.secondary6
      }
    };
  }
  get fullBgBrand() {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="1263" height="1100" viewBox="0 0 1463 1320" fill="none">
    <g style="mix-blend-mode:soft-light">
      <path d="M1342.06 121.275C1206.79 -14.0011 1001.54 -35.7696 842.941 54.4143L1121.27 332.74C1166.36 377.832 1166.36 451.431 1121.27 496.523L1103.13 514.663L720.622 132.159L721.141 131.641L719.067 129.568C562.541 -26.9585 312.722 -41.4709 149.458 94.8416C60.3103 169.477 6.4072 279.356 1.22423 395.455C-3.95875 511.553 40.0966 625.061 121.988 706.952L732.025 1316.99V1319.06L1341.54 709.543C1503.25 547.834 1503.25 284.539 1341.54 122.83L1342.06 121.275ZM732.543 884.21L726.842 878.509L338.636 490.303C316.868 468.535 305.465 439.51 306.502 408.412C308.057 377.832 322.051 349.326 345.893 329.631C387.356 294.386 457.845 301.643 501.9 345.698L720.622 564.42L732.025 575.822L732.025 577.896L885.959 731.83L732.025 885.765L732.543 884.21Z" fill="url(#fadeWhite)"/>
    </g>
    <defs>
      <linearGradient id="fadeWhite" x1="185.346" y1="122.421" x2="1134.96" y2="893.041" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity=".4"/>
        <stop offset="1" stop-color="white" stop-opacity="0.2"/>
      </linearGradient>
    </defs>
  </svg>`;

    return {
      '--pseudoBg': `url(data:image/svg+xml;base64,${btoa(svgString)}) no-repeat 333px -160px`,
      background:`linear-gradient(90deg, ${this.scheme.primary5} , ${this.scheme.secondary5} )`
    };
  }
  get slideRoot(){
    return {
      ...super.slideRoot,
      background: this.scheme.slideBg,
      '--fontFamily': this.scheme.fontFamily,
      '--textColor': this.scheme.slideText,
      '--fontSize': px(this.fontSizes.sm),
      '--separatorColor': this.scheme.primary1.hex
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
      background: 'black',
      '--headingLine':this.fullBgBrand.background,
      '--headingLineHeight': px(3),
      '--headingLineOffY': px(-10),
    };
  }
}

// Export themes for extensibility
export const slideThemes = reactive({
  default: SlideTheme.create('default'),
  becise: BeciseTheme.create('becise'),
  artera: ArteraTheme.create('artera'),
});
