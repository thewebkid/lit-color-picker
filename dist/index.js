import { LitElement as e, css as t, html as n, unsafeCSS as r } from "lit";
import { Color as i, namedColors as a } from "modern-color";
import { classMap as o } from "lit/directives/class-map.js";
import { styleMap as s } from "lit/directives/style-map.js";
import "lit-movable";
//#region src/lib.js
var c = (e, t, n) => {
	e.dispatchEvent(new CustomEvent(n, {
		bubbles: !0,
		composed: !0,
		detail: t
	}));
}, l = (e = 3, t) => {
	let n = 0, r = 100, a = 50, o = null, s = !1;
	t && (r = t.s, Object.prototype.hasOwnProperty.call(t, "v") ? (o = t.v, a = null, s = !0) : a = t.l);
	let c = [], l, u, d = (e, t) => `${e.css} ${(t * 100).toFixed(1)}%`;
	for (; n < 360;) l = i.parse(s ? {
		h: n,
		s: r,
		v: o
	} : {
		h: n,
		s: r,
		l: a
	}), u = n / 360, c.push(d(l, u)), n += e;
	return n = 359, l = i.parse(s ? {
		h: n,
		s: r,
		v: o
	} : {
		h: n,
		s: r,
		l: a
	}), u = 1, c.push(d(l, u)), c.join(", ");
}, u = n`<svg stroke='currentColor' fill='none' stroke-width='0' viewBox='0 0 24 24'>
  <path d='M13 7H7V5H13V7Z' fill='currentColor'></path>
  <path d='M13 11H7V9H13V11Z' fill='currentColor'></path>
  <path d='M7 15H13V13H7V15Z' fill='currentColor'></path>
  <path fill-rule='evenodd' clip-rule='evenodd' d='M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z' fill='currentColor'></path>
</svg>`, d = class extends e {
	static properties = {
		hue: { type: Number },
		color: { type: Object },
		gradient: {
			type: String,
			attribute: !1
		},
		sliderStyle: {
			type: String,
			attribute: !1
		},
		sliderBounds: { type: Object },
		width: {
			type: Number,
			attribute: !1
		}
	};
	static styles = t`
    :host > div {
      display: block;
      width: ${r(this.width)}px;
      height: 15px;
      cursor: pointer;
      position: relative;
    }

    :host movable-el {
      top: -1px;
      /* In-flow thumb so the host has a non-zero drag target. */
      margin-left: -4px;
    }

    :host .slider {
      display: block;
      height: 17px;
      width: 8px;
      box-shadow: 0 0 3px #111, inset 0 0 2px white;
    }
  `;
	constructor() {
		super(), this.gradient = { backgroundImage: `linear-gradient(90deg, ${l(24)})` }, this.width = 400, this.sliderStyle = { display: "none" };
	}
	firstUpdated() {
		this.sliderStyle = this.sliderCss(this.hue);
	}
	onSliderStart() {
		c(this.renderRoot, { sliding: !0 }, "sliding-hue");
	}
	onSliderEnd() {
		c(this.renderRoot, { sliding: !1 }, "sliding-hue");
	}
	onSliderMove({ detail: { posLeft: e } }) {
		this.selectHue({ offsetX: e });
	}
	get sliderBounds() {
		let e = this.width / 360, t = Number(this.hue) * e;
		return {
			min: 0 - t,
			max: this.width - t,
			posLeft: t
		};
	}
	get sliderCss() {
		return (e) => (e === void 0 && (e = this.hue ?? this.color.hsl.h), { backgroundColor: i.parse({
			h: e,
			s: 100,
			l: 50
		}).css });
	}
	willUpdate(e) {
		e.has("hue") && isFinite(this.hue) && (this.sliderStyle = this.sliderCss(this.hue));
	}
	selectHue(e) {
		let t = 360 / this.width, n = e.offsetX, r = Math.max(0, Math.min(359, Math.round(n * t)));
		this.renderRoot.querySelector("a").dispatchEvent(new CustomEvent("hue-update", {
			bubbles: !0,
			composed: !0,
			detail: { h: r }
		})), this.sliderStyle = this.sliderCss(r);
	}
	render() {
		let { min: e, max: t, posLeft: r } = this.sliderBounds;
		return n`
      <div style=${s(this.gradient)} class='bar' @click=${this.selectHue}>
        <movable-el
          axis='x'
          .posLeft=${r}
          .boundsX=${`${e}, ${t}`}
          @movestart=${this.onSliderStart}
          @move=${this.onSliderMove}
          @moveend=${this.onSliderEnd}>
          <a class='slider' style=${s(this.sliderCss(this.hue))}></a>
        </movable-el>
      </div>
    `;
	}
};
customElements.define("hue-bar", d);
//#endregion
//#region src/css.js
var f = t`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), #fff;
  background-repeat: repeat, repeat;
  background-position: 0 0, 6px 6px;
  background-size: 12px 12px, 12px 12px;
`, p = t`
  display: inline-block;
  width: 69px;
  padding: .325rem .5rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--input-color);
  appearance: none;
  background-color: var(--input-bg);
  background-clip: padding-box;
  border: 1px solid var(--form-border-color);
  border-radius: 3px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`, m = t`
  color: var(--input-active-color);
  background-color: var(--input-active-bg);
  border-color: var(--input-active-border-color);
  outline: 0;
  box-shadow: var(--input-active-box-shadow);
`, h = t`
  :host{
    --font-fam: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bg-color:rgb(30 41 59);
    --label-color: #ccc;
    --form-border-color: #495057;
    --input-active-border-color: #86b7fe;
    --input-bg: #020617;
    --input-active-bg: #4682B4;
    --input-color: #ccc;
    --input-active-color: #333;
    --input-active-box-shadow: 0 2px 5px #ccc;
    --button-active-bg: #0C5B9D;
    --button-active-color:white;
    --outer-box-shadow:0 4px 12px #111;
  }
    :host > .outer {
      position: relative;
      background-color: var(--bg-color);
      height: 250px;
      width: 400px;
      display: block;
      padding: 10px;
      margin: 10px;
      box-shadow: var(--outer-box-shadow);
    }
    .d-flex {
      display: flex;
      width: 100%;
      margin-top: 15px;
    }
    .w-30 {
      width: 30%;
    }
    .w-40 {
      width: 40%;
      position: relative;
      height:210px;
    }
    :host .form-control {
      ${p}
    }
    :host .form-control:focus {
      ${m}
    }
    :host label {
      width: 12px;
      display: inline-block;
      color: var(--label-color);
      font-family: var(--font-fam);
    }
    :host .hsl-mode{
      padding-left:16px;
      margin-top:18px;
    }
    :host .button{
      padding: .325rem .5rem;
      background-color: var(--input-bg);
      border: 1px solid var(--form-border-color);
      font-family: var(--font-fam);
      color:var(--input-color);
      cursor: pointer;
      font-size: .9rem;
    }
    :host div.hex{
      margin-top:27px;
      white-space: nowrap;
      position: relative;
    }
  :host dialog{
    opacity: 0;
    width:177px;
    position: absolute;
    bottom:30px;
    left:0px;
    z-index: 3;
    border: 1px solid transparent;
    outline:transparent;
    box-shadow:var(--outer-box-shadow);
    background-color: var(--input-bg);
    transition: opacity .3s;
  }
  /* Use the native [open] attribute from dialog.show() — more reliable than a parallel class. */
  :host dialog[open]{
    opacity: 1;
  }
  :host dialog *{
    color:var(--input-color);
  }
  :host dialog a.copy-item{
    margin-bottom:5px;
    white-space: nowrap;
    display: block;
    width: 180px;
    cursor: pointer;
  }
  :host dialog input.form-control{
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
    width:132px;
    padding-bottom: 2px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    pointer-events: none;
  }
  :host dialog button.button{
    display: inline-block;
    vertical-align: middle;
    margin-left:-5px;
    font-size: 12px;
    height:27px;
    width:27px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    box-sizing: border-box;
    overflow: hidden;
    outline:none;
    background-color: transparent;
  }
  :host dialog a.copy-item:hover .button,
  :host dialog a.copy-item:hover input.form-control,
  :host dialog a.copy-item:hover path{
    color:var(--button-active-color);
    background-color: var(--button-active-bg);
    fill:var(--button-active-color);
    cursor: pointer;
  }
  :host dialog .button svg{
     height:15px;
     width:15px;
     margin-left:-3px;
   }
  :host div.hex input{
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      vertical-align: middle;
      display: inline-block;
    }
    :host .button.copy{
      padding:8px 6px 5px 5px;
      position:relative;
      position:relative;
      border-left:0;
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      height:34px;
      display: inline-block;
      box-sizing: border-box;
      overflow: hidden;
      vertical-align: middle;
    }
    :host .button.copy svg{
      height:16px;
      width:15px;
      margin-right:-2px;
    }
  :host .button.copy span{
    font-size: 10px;
    position:relative;
    top:-3px;
  }
    :host a.button.l{
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    :host a.button.r{
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-left:none;
    }
    :host a.button.active{
      color: #eee;
      background-color: var(--button-active-bg);
      cursor:default;
    }
    :host .ok{
      position:absolute;
      bottom:0;
      right:0;
    }
    :host .ok a{
      border-radius:3px;
      padding:6px 12px;
    }
    :host .swatch{
      height:14px;
      width:14px;
      display: inline-block;
      position:relative;
      top:2px;
      margin-left:3px;
    }
    :host .swatch span{
      position: absolute;
      z-index: 1;
      top:0;
      left:0;
      height:100%;
      width:100%;
    }
    :host .swatch span.checky{
      ${f}
      z-index: 0;
    }
  `, g = t`
  :host > div {
    margin-bottom: 8px;
    display: block;
    position: relative;
  }

  :host label {
    width: 12px;
    display: inline-block;
    color: var(--label-color);
    font-family: var(--font-fam);
  }

  :host .form-control {
    ${p}
  }

  :host .form-control:focus {
    ${m}
  }

  :host .preview-bar {
    height: 4px;
    width: 85.5px;
    position: absolute;
    bottom: 0px;
    right: 17.5px;
    --pct: 0;
    pointer-events: none;
    z-index: 2;
  }

  :host .preview-bar:after {
    position: absolute;
    content: '';
    background-image: var(--preview);
    background-color: transparent;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    box-shadow: inset 0 -1px 1px var(--form-border-color);
    height: 100%;
    width: 100%;
  }

  :host > div.active .preview-bar {
    width: 128px;
    bottom: -23px;
    right: -9px;
    height: 10px;
    border: 8px solid var(--input-bg);
    box-shadow:var(--input-active-box-shadow);
    pointer-events: all;
    z-index: 2;
    cursor: pointer;

  }
  :host > div.active .preview-bar:after {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host .preview-bar .pct {
    bottom: -3px;
    margin-top: -.75px;
    position: absolute;
    width: 3px;
    height: 11px;
    background: 0 0;
    left: var(--pct);
    display: inline-block;
    z-index: 3;
    pointer-events: none;
  }

  :host .preview-bar .pct:before {
    content: "";
    height: 7px;
    width: 5px;
    position: absolute;
    left: -2.5px;
    top: 2.5px;
    background-color: #fff;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }
  :host .active .preview-bar .pct:before{

    width:7px;
    height:11px;
    left:-3.5px;
    top:-1px;
  }
  :host .transparent-checks {
    ${f}
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  :host div.active .transparent-checks {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`, _ = "color-change", v = "color-pick", y = "color-intent", b = (e, { space: t = "hsl", source: n = "external", hsx: r = null } = {}) => ({
	color: e,
	space: t,
	source: n,
	hsx: r
}), x = (e) => e.alpha < 1 ? e.css : e.hex, S = (e, t) => {
	e.dispatchEvent(new CustomEvent(y, {
		bubbles: !0,
		composed: !0,
		detail: t
	}));
}, C = (e, t, n) => {
	e.dispatchEvent(new CustomEvent(t, {
		bubbles: !0,
		composed: !0,
		detail: {
			color: n.color,
			space: n.space,
			source: n.source
		}
	}));
}, w = {
	r: "R (red) channel",
	g: "G (green) channel",
	b: "B (blue) channel",
	h: "H (hue) channel",
	s: "S (saturation) channel",
	v: "V (value / brightness) channel",
	l: "L (luminosity) channel",
	a: "A (alpha / opacity) channel"
}, T = class extends e {
	static properties = {
		group: { type: String },
		channel: { type: String },
		color: { type: Object },
		hsx: {
			type: Object,
			attribute: !1
		},
		isHsl: { type: Boolean },
		c: {
			type: Object,
			state: !0,
			attribute: !1
		},
		previewGradient: {
			type: Object,
			state: !0,
			attribute: !1
		},
		active: {
			type: Boolean,
			state: !0,
			attribute: !1
		},
		max: {
			type: Number,
			state: !0,
			attribute: !1
		},
		v: {
			type: Number,
			state: !0,
			attribute: !1
		}
	};
	static styles = g;
	clickPreview(e) {
		let t = Math.max(0, Math.min(e.offsetX, 128)), n = Math.round(t / 128 * this.max);
		this.channel === "a" && (n = Number((t / 127).toFixed(2))), this.valueChange(null, n), this.setActive(!1);
	}
	valueChange = (e, t = null) => {
		t ??= Number(this.renderRoot.querySelector("input").value);
		let n = {
			...this.c,
			[this.channel]: t
		}, r = i.parse(n), a = this.group === "rgb" ? null : n;
		S(this.renderRoot, {
			color: r,
			source: "channel",
			hsx: a,
			space: this.isHsl ? "hsl" : "hsv"
		});
	};
	setActive(e) {
		this.active = e, e && this.renderRoot.querySelector("input").select();
	}
	setPreviewGradient() {
		let e;
		e = this.group === "rgb" ? this.color.rgbObj : this.hsx ?? (this.isHsl ? this.color.hsl : this.color.hsv), this.c = e;
		let t = this.group, n = this.channel, r = n === "a";
		this.v = e[n], r && (this.v = Math.max(0, Math.min(this.v, 1)));
		let a = 255, o, s;
		if (t !== "rgb" || n === "a") if (n === "h") {
			a = this.max = 359, this.previewGradient = {
				"--preview": `linear-gradient(90deg, ${l(24, e)})`,
				"--pct": `${100 * (e.h / a)}%`
			};
			return;
		} else a = r ? 1 : 100;
		if (this.max = a, o = { ...e }, s = o, o[this.channel] = 0, o = i.parse(o), s[this.channel] = a, s = i.parse(s), this.channel === "l") {
			let t = { ...e };
			t.l = 50, this.previewGradient = {
				"--preview": `linear-gradient(90deg, ${o.hex}, ${i.parse(t).hex}, ${s.hex})`,
				"--pct": `${100 * (e[this.channel] / a)}%`
			};
		} else this.previewGradient = {
			"--preview": `linear-gradient(90deg, ${r ? o.css : o.hex}, ${r ? s.css : s.hex})`,
			"--pct": `${Math.min(100, Math.max(100 * (e[this.channel] / a), 0))}%`
		};
	}
	willUpdate() {
		this.setPreviewGradient();
	}
	render() {
		let e = this.channel === "a" ? n`<div class='transparent-checks'></div>` : null, t = this.channel === "a" ? 1 : this.max;
		return n`
      <div class=${o({ active: this.active })}>
        <label for=${`channel_${this.channel}`}>${this.channel.toUpperCase()}</label>
        <input id=${`channel_${this.channel}`} aria-label=${w[this.channel]}
          class='form-control'
          .value=${this.channel === "a" && this.v < 1 ? Math.min(1, this.v).toFixed(2) : Math.round(this.v)}
          type='number' min='0' max=${t} .step=${this.channel === "a" ? .01 : 1}
          @input=${this.valueChange}
          @focus=${() => this.setActive(!0)}
          @blur=${() => this.setActive(!1)}
        />
        <div class='preview-bar' style=${s(this.previewGradient)}
             @mousedown=${this.clickPreview}>
          <div class='pct'></div>
          ${e}
        </div>
      </div>
    `;
	}
};
customElements.define("color-input-channel", T);
//#endregion
//#region src/HSLCanvas.js
var E = class extends e {
	static properties = {
		color: { type: Object },
		hsx: {
			type: Object,
			attribute: !1
		},
		source: {
			type: String,
			attribute: !1
		},
		isHsl: { type: Boolean },
		size: { type: Number },
		debounceMode: { type: Boolean },
		ctx: {
			type: Object,
			state: !0,
			attribute: !1
		},
		hsw: {
			type: Object,
			state: !0,
			attribute: !1
		},
		circlePos: {
			type: Object,
			state: !0,
			attribute: !1
		}
	};
	static styles = t`
    :host .outer {
      position: absolute;
      top: 0;
      right: 0;
    }

    :host .outer canvas {
      height: inherit;
      width: inherit;
      cursor: pointer;
    }

    /* In-flow so <movable-el> gets a real hit box (absolute children collapse the host to 0×0). */
    :host movable-el {
      z-index: 1;
      /* Center the knob on the sample point (host's top/left). */
      margin: -8px 0 0 -8px;
    }

    :host .circle {
      height: 12px;
      width: 12px;
      border: solid 2px #eee;
      border-radius: 50%;
      box-shadow: 0 0 3px #000, inset 0 0 1px #fff;
      mix-blend-mode: difference;
      pointer-events: auto;
    }
  `;
	constructor() {
		super(), this.isHsl = !0, this.hsx = null, this.source = "external", this.circlePos = {
			top: 0,
			left: 0,
			bounds: {
				x: "",
				y: ""
			}
		}, this.size = 160;
	}
	setCircleCss(e, t) {
		let n = Number(e), r = Number(t), i = this.size;
		this.circlePos = {
			top: r,
			left: n,
			bounds: {
				x: `${-n}, ${i - n}`,
				y: `${-r}, ${i - r}`
			}
		};
	}
	pickCoord({ offsetX: e, offsetY: t }) {
		let n = e, r = t, { size: a, hsw: o, isHsl: s, color: c } = this, l = (a - r) / a;
		l = Math.round(l * 100);
		let u = Math.round(n / a * 100), d = {
			h: o.h,
			s: u,
			[s ? "l" : "v"]: l
		}, f = s ? i.fromHsl(d) : i.fromHsv(d);
		this.setCircleCss(n, r), f.a = c.alpha, S(this.renderRoot, {
			color: f,
			source: "canvas",
			hsx: d,
			space: s ? "hsl" : "hsv"
		});
	}
	debouncePaintDetail(e) {
		clearTimeout(this.bouncer), this.bouncer = setTimeout(() => this.paintHSL(e, !0), 50), this.paintHSL(e, !1);
	}
	paintHSL(e, t = null) {
		if (this.debounceMode && t === null) return this.debouncePaintDetail(e);
		let { ctx: n, color: r, isHsl: a, size: o } = this;
		if (!n) return;
		let s = e ?? (a ? r.hsl : r.hsv);
		s = { ...s }, s.w = a ? s.l : s.v;
		let { h: c, s: l, w: u } = s, d = this.hsw = {
			h: c,
			s: l,
			w: u
		}, f = o / 100, p = a ? (e, t, n) => `hsl(${e}, ${t}%, ${100 - n}%)` : (e, t, n) => i.fromHsv({
			h: e,
			s: t,
			v: 100 - n
		}).hex, m = t === !1 ? 4 : 1;
		for (let e = 0; e < 100; e += m) for (let t = 0; t < 100; t += m) n.fillStyle = p(c, e, t), n.fillRect(e, t, e + m, t + m);
		this.setCircleCss(d.s * f, o - s.w * f);
	}
	willUpdate(e) {
		if ((e.has("color") || e.has("isHsl") || e.has("hsx") || e.has("source")) && !(this.source === "canvas" && !e.has("isHsl"))) {
			if (this.hsx) {
				this.paintHSL(this.hsx);
				return;
			}
			this.paintHSL();
		}
	}
	firstUpdated() {
		let e = this.renderRoot.querySelector("canvas");
		this.ctx = e.getContext("2d"), this.paintHSL(this.hsx);
	}
	circleMove({ posTop: e, posLeft: t }) {
		this.pickCoord({
			offsetX: t,
			offsetY: e
		});
	}
	render() {
		let e = {
			height: this.size + "px",
			width: this.size + "px"
		}, { top: t, left: r, bounds: i } = this.circlePos;
		return n`
      <div class='outer' @click=${this.pickCoord} style=${s(e)}>
        <canvas height='100' width='100'></canvas>
        <movable-el
          .posTop=${t}
          .posLeft=${r}
          .boundsX=${i.x}
          .boundsY=${i.y}
          @move=${(e) => this.circleMove(e.detail)}>
          <div class='circle'></div>
        </movable-el>
      </div>
    `;
	}
};
customElements.define("hsl-canvas", E);
//#endregion
//#region src/ColorPicker.js
var D = class extends e {
	static properties = {
		model: {
			type: Object,
			state: !0,
			attribute: !1
		},
		hex: {
			type: String,
			state: !0,
			attribute: !1
		},
		value: {
			type: String,
			reflect: !0
		},
		isHsl: {
			type: Boolean,
			state: !0,
			attribute: !1
		},
		copied: { type: String },
		debounceMode: {
			type: Boolean,
			state: !0,
			attribute: !1
		}
	};
	static styles = h;
	_syncingValue = !1;
	constructor() {
		super();
		let e = i.parse(a.slateblue);
		this.model = b(e, {
			space: "hsl",
			source: "external"
		}), this.hex = e.hex, this.value = x(e), this.isHsl = !0, this.debounceMode = !1;
	}
	get color() {
		return this.model.color;
	}
	set color(e) {
		if (e == null) return;
		let t = i.parse(e);
		t && this.applyModel(b(t, {
			space: this.isHsl ? "hsl" : "hsv",
			source: "external",
			hsx: null
		}));
	}
	applyModel(e, { emit: t = !0 } = {}) {
		this.model = e, this.hex = e.color.hex;
		let n = x(e.color);
		this.value !== n && (this._syncingValue = !0, this.value = n, this._syncingValue = !1), t && C(this, _, e);
	}
	willUpdate(e) {
		if (e.has("value") && !this._syncingValue) {
			let e = i.parse(this.value);
			e && x(e) !== x(this.model.color) && this.applyModel(b(e, {
				space: this.isHsl ? "hsl" : "hsv",
				source: "external",
				hsx: null
			}), { emit: !0 });
		}
		if (e.has("isHsl")) {
			let e = this.isHsl ? "hsl" : "hsv";
			this.model.space !== e && (this.model = b(this.model.color, {
				space: e,
				source: "external",
				hsx: null
			}));
		}
	}
	onColorIntent({ detail: e }) {
		let { color: t, source: n, hsx: r = null, space: i } = e;
		this.applyModel(b(t, {
			source: n,
			hsx: r,
			space: i ?? (this.isHsl ? "hsl" : "hsv")
		}));
	}
	setColorFromInput() {
		let e = this.renderRoot.querySelector("input#hex").value, t = i.parse(e);
		if (!t) {
			console.log(`ignored unparsable input: ${e}`);
			return;
		}
		this.applyModel(b(t, {
			source: "input",
			space: this.isHsl ? "hsl" : "hsv",
			hsx: null
		}));
	}
	setHue({ detail: { h: e } }) {
		let t = this.isHsl ? "hsl" : "hsv", n = {
			...this.model.hsx ?? (this.isHsl ? this.color.hsl : this.color.hsv),
			h: e
		}, r = this.isHsl ? i.fromHsl(n) : i.fromHsv(n);
		r.a = this.color.alpha, this.applyModel(b(r, {
			source: "hue",
			space: t,
			hsx: n
		}));
	}
	setHsl(e) {
		this.isHsl = e;
	}
	okColor() {
		C(this, v, this.model);
	}
	showCopyDialog() {
		if (this.copied = null, this.dlg = this.dlg ?? this.renderRoot.querySelector("dialog"), this.dlg.open) return this.dlg.close();
		this.dlg.show();
	}
	clipboard(e) {
		let t = this.color.toString(e);
		window.navigator.clipboard.writeText(t).then(() => {
			this.hideCopyDialog(t);
		});
	}
	hideCopyDialog(e) {
		if (this.dlg ||= this.renderRoot.querySelector("dialog"), e) {
			this.copied = e, setTimeout(() => this.hideCopyDialog(), 1200);
			return;
		}
		this.dlg?.open && this.dlg.close(), this.copied = null;
	}
	setSliding({ detail: e }) {
		this.debounceMode = e.sliding;
	}
	render() {
		let { color: e, hsx: t, source: r } = this.model, i = t?.h ?? e.hsl.h, a = this.isHsl ? [
			"h",
			"s",
			"l"
		] : [
			"h",
			"s",
			"v"
		], c = {
			button: !0,
			active: !this.isHsl,
			l: !0
		}, l = {
			button: !0,
			active: this.isHsl,
			r: !0
		}, d = { backgroundColor: e }, f = this.copied ? {
			textAlign: "center",
			display: "block"
		} : { display: "none" };
		return n`
      <div class='outer' @color-intent=${this.onColorIntent}>
        <hue-bar
          @sliding-hue=${this.setSliding}
          .hue=${i}
          @hue-update=${this.setHue}
          .color=${e}></hue-bar>
        <div class='d-flex'>
          <div class='col w-30'>
            ${[
			"r",
			"g",
			"b",
			"a"
		].map((r) => n`
                <color-input-channel
                  group='rgb'
                  channel=${r}
                  .isHsl=${this.isHsl}
                  .color=${e}
                  .hsx=${t}></color-input-channel>
              `)}
            <div class='hex'>
              <dialog tabindex='0'>
                <sub class='copied' style=${s(f)}>copied <em>${this.copied}</em></sub>
                ${this.copied ? n`` : n`
                      <a class='copy-item' @click=${() => this.clipboard("hex")} id='copyHex'>
                        <input class='form-control' disabled value=${e.hex}>
                        <button title='Copy HEX String' class='button' tabindex='0'>${u}</button>
                      </a>
                      <a class='copy-item' @click=${() => this.clipboard("css")} id='copyRgb'>
                        <input class='form-control' disabled value=${e.css}>
                        <button title='Copy RGB String' class='button' tabindex='0'>${u}</button>
                      </a>
                      <a class='copy-item' id='copyHsl'
                         @click=${() => this.clipboard(e.alpha < 1 ? "hsla" : "hsl")}>
                        <input class='form-control' disabled
                               value=${e.toString(e.alpha < 1 ? "hsla" : "hsl")}>
                        <button title='Copy HSL String' class='button' tabindex='0'>${u}</button>
                      </a>
                    `}
              </dialog>
              <label for='hex'>#</label>
              <input aria-label='Hexadecimal value (editable - accepts any valid color string)'
                     @input=${this.setColorFromInput} class='form-control' id='hex'
                     placeholder='Set color' .value=${this.hex}>
              <a title='Show copy to clipboard menu' @click=${this.showCopyDialog} class='button copy'>
                ${u}
                <span>&#11205;</span>
              </a>
            </div>
          </div>
          <div class='col w-30'>
            ${a.map((r) => n`
                <color-input-channel
                  group='hsl'
                  channel=${r}
                  .isHsl=${this.isHsl}
                  .color=${e}
                  .hsx=${t}></color-input-channel>
              `)}
            <div class='hsl-mode'>
              <a title='Use hue / saturation / value (brightness) mode'
                 class=${o(c)}
                 @click=${() => this.setHsl(!1)}>HSV</a><a
                title='Use hue / saturation / luminosity mode'
                class=${o(l)}
                @click=${() => this.setHsl(!0)}>HSL</a>
            </div>
          </div>
          <div class='w-40'>
            <hsl-canvas
              .debounceMode=${this.debounceMode}
              .size=${160}
              .isHsl=${this.isHsl}
              .color=${e}
              .hsx=${t}
              .source=${r}></hsl-canvas>
            <div class='ok'>
              <a class='button' @click=${this.okColor}>OK
                <span class='swatch'>
                  <span style=${s(d)}></span>
                  <span class='checky'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
	}
};
window.customElements.get("color-picker") || window.customElements.define("color-picker", D);
//#endregion
export { _ as COLOR_CHANGE, y as COLOR_INTENT, v as COLOR_PICK, D as ColorPicker, x as colorToValue, b as createColorModel };
