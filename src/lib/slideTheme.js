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
  secondary = Color.parse(colors.gray500);
  secondary1;
  secondary2;
  secondary3;
  secondary4;
  secondary5;
  accent1;
  accent2;
  accent3;
  fontFamily;
  variantStruct = [
    [40, 100, -30],
    [70, 100, -15],
    [100, 100, 0],
    [100, 70, 15],
    [100, 40, 30]
  ];
  usePct = true;
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
  updateVariantFormula(struct){
    this.variantStruct = struct;
    this.setPrimary();
    this.setSecondary();
  }
  genThemeVariants(c, key) {
    let { h } = c.hsv;
    this[key] = c;
    this.variantStruct.forEach(([s, v, adjSat], i) => {

      this[`${key}${i + 1}`] = this.usePct ?
        c.saturate(adjSat / 100).toValue(v) :
        Color.parse({ h, s, v });

    });
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
      fontSize: px(this.fontSizes.xs),
      fontWeight: 400,
      fontFamily: this.scheme.fontFamily
    };
  }
  get accentBox() {
    const { primary } = this.scheme;
    return {
      background: primary.toAlpha(0),
      fontSize: px(this.fontSizes.md)

    };
  }
  get accentBox2() {
    const { secondary } = this.scheme;
    return {
      background: secondary.toAlpha(0),
      fontSize: px(this.fontSizes.md)

    };
  }
  get headingBox() {
    return {
      fontWeight: 600,
      background: this.scheme.light1,
      color: this.scheme.dark1
    };
  }

  get headingBoxBrand() {
    return {
      fontWeight: 600,
      color: this.scheme.slideHeading.negate(),
      fontSize: px(this.fontSizes.xl),
      //background: this.scheme.slideText.darken(.9)
    };
  }
  get slideRoot(){
    return {
      background: this.scheme.slideBg,
      color: this.scheme.slideText,
      fontSize: px(this.fontSizes.md),
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
    const { primary5, primary4,primary3 } = this.scheme;
    let secondary = primary3;
    let primary = primary4;
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
      borderRadius: px(20),
      border: `1.5px solid ${primary5}`,
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
      borderRadius: px(20),
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
    const { primary, primary4 } = this.scheme;
    return {
      background: `linear-gradient(90deg, ${primary} -26.08%, ${primary4} 85.04%)`,
      color: this.scheme.slideText.negate()
    };
  }

  get brandSlide() {
    return {
      ...this.fullBgBrand,
      color: this.scheme.slideText.negate(),
    };
  }
}

// Export themes for extensibility
export const slideThemes = reactive({
  default: SlideTheme.create('default'),
  becise: BeciseTheme.create('becise')
});

window.Color = Color;
