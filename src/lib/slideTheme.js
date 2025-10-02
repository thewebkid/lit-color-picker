import colors from './colorConstants.js';
import { Color } from './Color.js';

const px = n => `${n}px`;

class ColorScheme {
  name;
  light1 = Color.parse('white');
  slideBg = Color.parse('white');
  light2;
  dark1 = Color.parse('black');
  slideText = Color.parse('black');
  dark2;
  primary = Color.parse(colors.blue500);
  primaryDark;
  primaryLight;
  secondary;
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
    this[`${key}1`] = Color.parse({ h, s: 40, v: 100 });
    this[`${key}2`] = Color.parse({ h, s: 70, v: 100 });
    this[`${key}3`] = Color.parse({ h, s: 100, v: 100 });
    this[`${key}4`] = Color.parse({ h, s: 100, v: 70 });
    this[`${key}5`] = Color.parse({ h, s: 100, v: 40 });

  }
}

class SlideTheme {
  scheme;
  name;
  base = {};
  decorations = {};
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
      background: this.scheme.light1,
      color: this.scheme.dark1,
      fontSize: this.fontSizes.xs,
      fontWeight: 400,
      fontFamily: this.scheme.fontFamily
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
      color: this.scheme.dark2,
      background: this.scheme.light2.darken(.9)
    };
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
    const { primary, secondary } = this.scheme;
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
    const { primary, secondary } = this.scheme;
    return {
      background: `rgb(242, 244, 255)`,
      fontSize: this.fontSizes.md

    };
  }

  get headingBox1() {
    return {
      fontWeight: 600,
      color: this.scheme.light2,
      fontSize: this.fontSizes.lg,
      ...this.brandBox
    };
  }

  get brandBox() {
    const { primary, secondary } = this.scheme;
    return {
      background: `linear-gradient(90deg, ${primary} -26.08%, ${secondary} 85.04%)`
    };
  }

  get brandSlide() {
    return {
      background: this.fullBgBrand,
      color: this.scheme.light1.css
    };
  }
}

// Export themes for extensibility
export const slideThemes = {
  default: SlideTheme.create('default'),
  becise: BeciseTheme.create('becise')
};

window.Color = Color;
