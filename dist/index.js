var Ne = Object.defineProperty;
var Re = (o, t, e) => t in o ? Ne(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var y = (o, t, e) => Re(o, typeof t != "symbol" ? t + "" : t, e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt = globalThis, Bt = dt.ShadowRoot && (dt.ShadyCSS === void 0 || dt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ot = Symbol(), Lt = /* @__PURE__ */ new WeakMap();
let ue = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== Ot) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Bt && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = Lt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && Lt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const pe = (o) => new ue(typeof o == "string" ? o : o + "", void 0, Ot), L = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((s, i, r) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + o[r + 1], o[0]);
  return new ue(e, o, Ot);
}, Le = (o, t) => {
  if (Bt) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = dt.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, o.appendChild(s);
  }
}, jt = Bt ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return pe(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: je, defineProperty: ze, getOwnPropertyDescriptor: Ie, getOwnPropertyNames: Ve, getOwnPropertySymbols: qe, getPrototypeOf: Xe } = Object, F = globalThis, zt = F.trustedTypes, We = zt ? zt.emptyScript : "", _t = F.reactiveElementPolyfillSupport, J = (o, t) => o, Et = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? We : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, fe = (o, t) => !je(o, t), It = { attribute: !0, type: String, converter: Et, reflect: !1, useDefault: !1, hasChanged: fe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), F.litPropertyMetadata ?? (F.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let z = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = It) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && ze(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: r } = Ie(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: i, set(n) {
      const a = i == null ? void 0 : i.call(this);
      r == null || r.call(this, n), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? It;
  }
  static _$Ei() {
    if (this.hasOwnProperty(J("elementProperties"))) return;
    const t = Xe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(J("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(J("properties"))) {
      const e = this.properties, s = [...Ve(e), ...qe(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(jt(i));
    } else t !== void 0 && e.push(jt(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Le(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    var r;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const n = (((r = s.converter) == null ? void 0 : r.toAttribute) !== void 0 ? s.converter : Et).toAttribute(e, s.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var r, n;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const a = s.getPropertyOptions(i), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((r = a.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? a.converter : Et;
      this._$Em = i, this[i] = l.fromAttribute(e, a.type) ?? ((n = this._$Ej) == null ? void 0 : n.get(i)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    var i;
    if (t !== void 0) {
      const r = this.constructor, n = this[t];
      if (s ?? (s = r.getPropertyOptions(t)), !((s.hasChanged ?? fe)(n, e) || s.useDefault && s.reflect && n === ((i = this._$Ej) == null ? void 0 : i.get(t)) && !this.hasAttribute(r._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: r }, n) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), r !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, n] of i) {
        const { wrapped: a } = n, l = this[r];
        a !== !0 || this._$AL.has(r) || l === void 0 || this.C(r, void 0, n, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var r;
        return (r = i.hostUpdate) == null ? void 0 : r.call(i);
      }), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
z.elementStyles = [], z.shadowRootOptions = { mode: "open" }, z[J("elementProperties")] = /* @__PURE__ */ new Map(), z[J("finalized")] = /* @__PURE__ */ new Map(), _t == null || _t({ ReactiveElement: z }), (F.reactiveElementVersions ?? (F.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, pt = Q.trustedTypes, Vt = pt ? pt.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, ge = "$lit$", S = `lit$${Math.random().toFixed(9).slice(2)}$`, me = "?" + S, Ye = `<${me}>`, N = document, it = () => N.createComment(""), rt = (o) => o === null || typeof o != "object" && typeof o != "function", Tt = Array.isArray, Ze = (o) => Tt(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", xt = `[ 	
\f\r]`, G = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qt = /-->/g, Xt = />/g, M = RegExp(`>|${xt}(?:([^\\s"'>=/]+)(${xt}*=${xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Wt = /'/g, Yt = /"/g, be = /^(?:script|style|textarea|title)$/i, Ge = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), x = Ge(1), H = Symbol.for("lit-noChange"), g = Symbol.for("lit-nothing"), Zt = /* @__PURE__ */ new WeakMap(), B = N.createTreeWalker(N, 129);
function $e(o, t) {
  if (!Tt(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Vt !== void 0 ? Vt.createHTML(t) : t;
}
const Ke = (o, t) => {
  const e = o.length - 1, s = [];
  let i, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = G;
  for (let a = 0; a < e; a++) {
    const l = o[a];
    let h, d, c = -1, p = 0;
    for (; p < l.length && (n.lastIndex = p, d = n.exec(l), d !== null); ) p = n.lastIndex, n === G ? d[1] === "!--" ? n = qt : d[1] !== void 0 ? n = Xt : d[2] !== void 0 ? (be.test(d[2]) && (i = RegExp("</" + d[2], "g")), n = M) : d[3] !== void 0 && (n = M) : n === M ? d[0] === ">" ? (n = i ?? G, c = -1) : d[1] === void 0 ? c = -2 : (c = n.lastIndex - d[2].length, h = d[1], n = d[3] === void 0 ? M : d[3] === '"' ? Yt : Wt) : n === Yt || n === Wt ? n = M : n === qt || n === Xt ? n = G : (n = M, i = void 0);
    const f = n === M && o[a + 1].startsWith("/>") ? " " : "";
    r += n === G ? l + Ye : c >= 0 ? (s.push(h), l.slice(0, c) + ge + l.slice(c) + S + f) : l + S + (c === -2 ? a : f);
  }
  return [$e(o, r + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
let Ct = class ve {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0, n = 0;
    const a = t.length - 1, l = this.parts, [h, d] = Ke(t, e);
    if (this.el = ve.createElement(h, s), B.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (i = B.nextNode()) !== null && l.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const c of i.getAttributeNames()) if (c.endsWith(ge)) {
          const p = d[n++], f = i.getAttribute(c).split(S), _ = /([.?@])?(.*)/.exec(p);
          l.push({ type: 1, index: r, name: _[2], strings: f, ctor: _[1] === "." ? Qe : _[1] === "?" ? ts : _[1] === "@" ? es : bt }), i.removeAttribute(c);
        } else c.startsWith(S) && (l.push({ type: 6, index: r }), i.removeAttribute(c));
        if (be.test(i.tagName)) {
          const c = i.textContent.split(S), p = c.length - 1;
          if (p > 0) {
            i.textContent = pt ? pt.emptyScript : "";
            for (let f = 0; f < p; f++) i.append(c[f], it()), B.nextNode(), l.push({ type: 2, index: ++r });
            i.append(c[p], it());
          }
        }
      } else if (i.nodeType === 8) if (i.data === me) l.push({ type: 2, index: r });
      else {
        let c = -1;
        for (; (c = i.data.indexOf(S, c + 1)) !== -1; ) l.push({ type: 7, index: r }), c += S.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const s = N.createElement("template");
    return s.innerHTML = t, s;
  }
};
function V(o, t, e = o, s) {
  var n, a;
  if (t === H) return t;
  let i = s !== void 0 ? (n = e._$Co) == null ? void 0 : n[s] : e._$Cl;
  const r = rt(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== r && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), r === void 0 ? i = void 0 : (i = new r(o), i._$AT(o, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = V(o, i._$AS(o, t.values), i, s)), t;
}
let Je = class {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? N).importNode(e, !0);
    B.currentNode = i;
    let r = B.nextNode(), n = 0, a = 0, l = s[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let h;
        l.type === 2 ? h = new Nt(r, r.nextSibling, this, t) : l.type === 1 ? h = new l.ctor(r, l.name, l.strings, this, t) : l.type === 6 && (h = new ss(r, this, t)), this._$AV.push(h), l = s[++a];
      }
      n !== (l == null ? void 0 : l.index) && (r = B.nextNode(), n++);
    }
    return B.currentNode = N, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}, Nt = class ye {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = V(this, t, e), rt(t) ? t === g || t == null || t === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : t !== this._$AH && t !== H && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ze(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== g && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(N.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var r;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = Ct.createElement($e(s.h, s.h[0]), this.options)), s);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === i) this._$AH.p(e);
    else {
      const n = new Je(i, this), a = n.u(this.options);
      n.p(e), this.T(a), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = Zt.get(t.strings);
    return e === void 0 && Zt.set(t.strings, e = new Ct(t)), e;
  }
  k(t) {
    Tt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const r of t) i === e.length ? e.push(s = new ye(this.O(it()), this.O(it()), this, this.options)) : s = e[i], s._$AI(r), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}, bt = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, r) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = g;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) t = V(this, t, e, 0), n = !rt(t) || t !== this._$AH && t !== H, n && (this._$AH = t);
    else {
      const a = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++) h = V(this, a[s + l], e, l), h === H && (h = this._$AH[l]), n || (n = !rt(h) || h !== this._$AH[l]), h === g ? t = g : t !== g && (t += (h ?? "") + r[l + 1]), this._$AH[l] = h;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
};
class Qe extends bt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === g ? void 0 : t;
  }
}
let ts = class extends bt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== g);
  }
}, es = class extends bt {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = V(this, t, e, 0) ?? g) === H) return;
    const s = this._$AH, i = t === g && s !== g || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== g && (s === g || i);
    i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}, ss = class {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    V(this, t);
  }
};
const At = Q.litHtmlPolyfillSupport;
At == null || At(Ct, Nt), (Q.litHtmlVersions ?? (Q.litHtmlVersions = [])).push("3.3.0");
const is = (o, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const r = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new Nt(t.insertBefore(it(), r), r, void 0, e ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = globalThis;
let k = class extends z {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = is(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return H;
  }
};
var de;
k._$litElement$ = !0, k.finalized = !0, (de = T.litElementHydrateSupport) == null || de.call(T, { LitElement: k });
const wt = T.litElementPolyfillSupport;
wt == null || wt({ LitElement: k });
(T.litElementVersions ?? (T.litElementVersions = [])).push("4.2.0");
const $ = (o) => $t(255, Math.round(Number(o))), P = (o) => $(o * 255), D = (o) => $t(1, o / 255), $t = (o, t) => Math.max(0, Math.min(o, t)), j = (o) => o === void 0 ? 1 : (typeof o == "string" && o.indexOf("%") > 0 && (o = Number(o.split("%")[0]) / 100), o = Number(Number(o).toFixed(3)), isNaN(o) ? 1 : $t(1, o)), Ft = {
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#00FFFF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000000",
  blanchedalmond: "#FFEBCD",
  blue: "#0000FF",
  blueviolet: "#8A2BE2",
  brown: "#A52A2A",
  burlywood: "#DEB887",
  cadetblue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#00FFFF",
  darkblue: "#00008B",
  darkcyan: "#008B8B",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  darkgreen: "#006400",
  darkkhaki: "#BDB76B",
  darkmagenta: "#8B008B",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
  darkorchid: "#9932CC",
  darkred: "#8B0000",
  darksalmon: "#E9967A",
  darkseagreen: "#8FBC8F",
  darkslateblue: "#483D8B",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  darkturquoise: "#00CED1",
  darkviolet: "#9400D3",
  deeppink: "#FF1493",
  deepskyblue: "#00BFFF",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1E90FF",
  firebrick: "#B22222",
  floralwhite: "#FFFAF0",
  forestgreen: "#228B22",
  fuchsia: "#FF00FF",
  gainsboro: "#DCDCDC",
  ghostwhite: "#F8F8FF",
  gold: "#FFD700",
  goldenrod: "#DAA520",
  gray: "#808080",
  grey: "#808080",
  green: "#008000",
  greenyellow: "#ADFF2F",
  honeydew: "#F0FFF0",
  hotpink: "#FF69B4",
  indianred: "#CD5C5C",
  indigo: "#4B0082",
  ivory: "#FFFFF0",
  khaki: "#F0E68C",
  lavender: "#E6E6FA",
  lavenderblush: "#FFF0F5",
  lawngreen: "#7CFC00",
  lemonchiffon: "#FFFACD",
  lightblue: "#ADD8E6",
  lightcoral: "#F08080",
  lightcyan: "#E0FFFF",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#D3D3D3",
  lightgrey: "#D3D3D3",
  lightgreen: "#90EE90",
  lightpink: "#FFB6C1",
  lightsalmon: "#FFA07A",
  lightseagreen: "#20B2AA",
  lightskyblue: "#87CEFA",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#B0C4DE",
  lightyellow: "#FFFFE0",
  lime: "#00FF00",
  limegreen: "#32CD32",
  linen: "#FAF0E6",
  magenta: "#FF00FF",
  maroon: "#800000",
  mediumaquamarine: "#66CDAA",
  mediumblue: "#0000CD",
  mediumorchid: "#BA55D3",
  mediumpurple: "#9370DB",
  mediumseagreen: "#3CB371",
  mediumslateblue: "#7B68EE",
  mediumspringgreen: "#00FA9A",
  mediumturquoise: "#48D1CC",
  mediumvioletred: "#C71585",
  midnightblue: "#191970",
  mintcream: "#F5FFFA",
  mistyrose: "#FFE4E1",
  moccasin: "#FFE4B5",
  navajowhite: "#FFDEAD",
  navy: "#000080",
  oldlace: "#FDF5E6",
  olive: "#808000",
  olivedrab: "#6B8E23",
  orange: "#FFA500",
  orangered: "#FF4500",
  orchid: "#DA70D6",
  palegoldenrod: "#EEE8AA",
  palegreen: "#98FB98",
  paleturquoise: "#AFEEEE",
  palevioletred: "#DB7093",
  papayawhip: "#FFEFD5",
  peachpuff: "#FFDAB9",
  peru: "#CD853F",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  powderblue: "#B0E0E6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#FF0000",
  rosybrown: "#BC8F8F",
  royalblue: "#4169E1",
  saddlebrown: "#8B4513",
  salmon: "#FA8072",
  sandybrown: "#F4A460",
  seagreen: "#2E8B57",
  seashell: "#FFF5EE",
  sienna: "#A0522D",
  silver: "#C0C0C0",
  skyblue: "#87CEEB",
  slateblue: "#6A5ACD",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#FFFAFA",
  springgreen: "#00FF7F",
  steelblue: "#4682B4",
  tan: "#D2B48C",
  teal: "#008080",
  thistle: "#D8BFD8",
  tomato: "#FF6347",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  wheat: "#F5DEB3",
  white: "#FFFFFF",
  whitesmoke: "#F5F5F5",
  yellow: "#FFFF00",
  yellowgreen: "#9ACD32"
};
class u {
  constructor(t, e, s, i) {
    return u.isBaseConstructor(t) ? (this.r = $(t.r), this.g = $(t.g), this.b = $(t.b), t.a !== void 0 && (this.a = j(t.a)), this) : u.parse(t, e, s, i);
  }
  static parse(t, e, s, i) {
    if (u.isBaseConstructor(t))
      return new u(t);
    if (e !== void 0 && s !== void 0) {
      let r = $(t);
      return e = $(e), s = $(s), i !== void 0 && (i = j(i)), new u({ r, g: e, b: s, a: i });
    }
    if (Array.isArray(t))
      return u.fromArray(t);
    if (typeof t == "string") {
      let r;
      if (e !== void 0 && Number(e) <= 1 && Number(e) >= 0 && (r = Number(e)), t.startsWith("#"))
        return u.fromHex(t, r);
      if (Ft[t.toLowerCase()])
        return u.fromNamed(t, r);
      if (t.startsWith("rgb"))
        return u.fromRgbString(t);
      if (t === "transparent") {
        let n, a, l, h;
        return n = a = l = h = 0, new u({ r: n, g: a, b: l, a: h });
      } else
        return null;
    } else if (typeof t == "object") {
      if (t.a !== void 0 && (this.a = j(t.a)), t.h !== void 0) {
        let r = {};
        if (t.v !== void 0)
          r = u.fromHsv(t);
        else if (t.l !== void 0)
          r = u.fromHsl(t);
        else
          return u.fromArray([0, 0, 0]);
        return r.a = t.a !== void 0 ? j(t.a) : void 0, new u(r);
      }
      return t.c !== void 0 ? u.fromCMYK(t) : this;
    }
    return u.fromArray([0, 0, 0]);
  }
  static isBaseConstructor(t) {
    return typeof t == "object" && t.r !== void 0 && t.g !== void 0 && t.b !== void 0;
  }
  static fromNamed(t, e) {
    return u.fromHex(Ft[t.toLowerCase()], e);
  }
  static fromArray(t) {
    t = t.filter((s) => s !== "" && isFinite(s));
    const e = {
      r: $(t[0]),
      g: $(t[1]),
      b: $(t[2])
    };
    return t[3] !== void 0 && (e.a = j(t[3])), new u(e);
  }
  static fromHex(t, e) {
    t = t.replace("#", ""), (t.length === 3 || t.length === 4) && (t = t.split("").map((i) => i + i).join(""));
    let s = t.match(/[A-Za-z0-9]{2}/g).map((i) => parseInt(i, 16));
    return s.length === 4 ? s[3] /= 255 : e !== void 0 && (s[3] = e), u.fromArray(s);
  }
  static fromRgbString(t) {
    if (t.includes(","))
      return u.fromArray(t.split("(")[1].split(")")[0].split(","));
    const e = t.replace("/", " ").split("(")[1].replace(")", "").split(" ").filter((s) => s !== "" && isFinite(Number(s)));
    return u.fromArray(e);
  }
  static fromHsv({ h: t, s: e, v: s }) {
    e = e / 100, s = s / 100;
    const i = Math.floor(t / 60 % 6), r = t / 60 - i, n = s * (1 - e), a = s * (1 - r * e), l = s * (1 - (1 - r) * e), d = [
      [s, l, n],
      [a, s, n],
      [n, s, l],
      [n, a, s],
      [l, n, s],
      [s, n, a]
    ][i].map((c) => Math.round(c * 256));
    return new u({ r: $(d[0]), g: $(d[1]), b: $(d[2]) });
  }
  static fromHsl({ h: t, s: e, l: s }) {
    e /= 100, s /= 100;
    const i = (1 - Math.abs(2 * s - 1)) * e, r = i * (1 - Math.abs(t / 60 % 2 - 1)), n = s - i / 2;
    let a = 0, l = 0, h = 0;
    return 0 <= t && t < 60 ? (a = i, l = r, h = 0) : 60 <= t && t < 120 ? (a = r, l = i, h = 0) : 120 <= t && t < 180 ? (a = 0, l = i, h = r) : 180 <= t && t < 240 ? (a = 0, l = r, h = i) : 240 <= t && t < 300 ? (a = r, l = 0, h = i) : 300 <= t && t < 360 && (a = i, l = 0, h = r), new u({
      r: P(n + a),
      g: P(n + l),
      b: P(n + h)
    });
  }
  static fromCMYK({ c: t, m: e, y: s, k: i, a: r }) {
    const n = (a) => P(
      1 - Math.min(1, a / 100 * (1 - i) + i)
    );
    return new u({ r: n(t), b: n(e), g: n(s), a: r });
  }
  /** Getters **/
  get alpha() {
    return this.a === void 0 ? 1 : this.a;
  }
  get rgb() {
    return [this.r, this.g, this.b];
  }
  get rgba() {
    return [this.r, this.g, this.b, this.alpha];
  }
  get rgbObj() {
    let { r: t, g: e, b: s } = this;
    return { r: t, g: e, b: s, a: this.alpha };
  }
  get css() {
    return this.rgbString;
  }
  get rgbString() {
    return this.a === void 0 ? `rgb(${this.rgb.join(",")})` : `rgba(${this.rgba.join(",")})`;
  }
  get rgbaString() {
    return `rgba(${this.rgba.join(",")})`;
  }
  get hex() {
    return `#${this.rgb.map((t) => t.toString(16).padStart(2, "0")).join("")}`.toUpperCase();
  }
  get hexa() {
    return this.rgbaHex;
  }
  get rgbaHex() {
    let t = this.rgba;
    return t[3] = P(t[3]), `#${t.map((e) => e.toString(16).padStart(2, "0")).join("")}`.toUpperCase();
  }
  get hsv() {
    const t = D(this.r), e = D(this.g), s = D(this.b), i = Math.min(t, e, s), r = Math.max(t, e, s);
    let n;
    const a = r, l = r - i;
    l === 0 ? n = 0 : r === t ? n = 60 * ((e - s) / l) % 360 : r === e ? n = 60 * ((s - t) / l) + 120 : r === s ? n = 60 * ((t - e) / l) + 240 : n = 0, n < 0 && (n += 360);
    const h = r === 0 ? 0 : 1 - i / r;
    return {
      h: Math.round(n),
      s: Math.round(h * 100),
      v: Math.round(a * 100),
      a: this.alpha
    };
  }
  get hsl() {
    const t = D(this.r), e = D(this.g), s = D(this.b), i = Math.max(t, e, s), r = Math.min(t, e, s);
    let n, a;
    const l = (i + r) / 2;
    if (i === r)
      n = a = 0;
    else {
      const h = i - r;
      switch (a = l > 0.5 ? h / (2 - i - r) : h / (i + r), i) {
        case t:
          n = (e - s) / h + (e < s ? 6 : 0);
          break;
        case e:
          n = (s - t) / h + 2;
          break;
        case s:
          n = (t - e) / h + 4;
          break;
      }
      n /= 6;
    }
    return {
      h: Math.round(n * 360),
      s: Math.round(a * 100),
      l: Math.round(l * 100),
      a: this.alpha
    };
  }
  get cmyk() {
    let t, e, s, i;
    const r = parseFloat(this.r) / 255, n = parseFloat(this.g) / 255, a = parseFloat(this.b) / 255;
    return i = 1 - Math.max(r, n, a), i === 1 ? t = e = s = 0 : (t = (1 - r - i) / (1 - i), e = (1 - n - i) / (1 - i), s = (1 - a - i) / (1 - i)), t = Math.round(100 * t), e = Math.round(100 * e), s = Math.round(100 * s), i = Math.round(100 * i), this.alpha ? { c: t, m: e, y: s, k: i, a: this.alpha } : { c: t, m: e, y: s, k: i };
  }
  get hslString() {
    const t = this.hsl;
    return `hsl(${t.h}, ${t.s}%, ${t.l}%)`;
  }
  get hslaString() {
    const t = this.hsl;
    return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`;
  }
  get cmykString() {
    const t = this.cmyk;
    return `cmyk(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%)`;
  }
  get cmykaString() {
    const t = this.cmyk;
    return `cmyka(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%, ${t.a})`;
  }
  /** Functions **/
  toString(t = "rgb") {
    let e;
    switch (t) {
      case "rgb":
        e = this.rgbString;
        break;
      case "hex":
        e = this.hex;
        break;
      case "rgbaHex":
        e = this.hexa;
        break;
      case "hsl":
        e = this.hslString;
        break;
      case "hsla":
        e = this.hslaString;
        break;
      case "cmyk":
        e = this.cmykString;
        break;
      case "cmyka":
        e = this.cmykaString;
        break;
      default:
        e = this.rgbString;
        break;
    }
    return e;
  }
  mix(t, e = 0.5) {
    const s = this.rgba;
    s[3] = P(s[3]);
    const i = new u(t).rgba;
    i[3] = P(i[3]), e = j(e);
    const r = s.map((n, a) => {
      const l = i[a], h = l < n, d = h ? n - l : l - n, c = Math.round(d * e);
      return h ? n - c : c + n;
    });
    return r[3] = D(r[3]), u.fromArray(r);
  }
  adjustSatLum(t, e, s) {
    const i = this.hsl;
    let r = i[t], n = (s ? r : 100 - r) * e;
    return i[t] = $t(100, s ? r - n : r + n), i.a = this.a, new u(i);
  }
  lighten(t, e = !1) {
    return this.adjustSatLum("l", t, e);
  }
  darken(t) {
    return this.lighten(t, !0);
  }
  saturate(t, e = !1) {
    return this.adjustSatLum("s", t, e);
  }
  desaturate(t) {
    return this.saturate(t, !0);
  }
  grayscale() {
    return this.desaturate(1);
  }
  rotate(t) {
    return this.hue(t);
  }
  hue(t) {
    const e = this.hsl;
    return e.h = Math.round(e.h + t) % 360, e.a = this.a, new u(e);
  }
  fadeIn(t, e) {
    let s = this.alpha;
    const { r: i, g: r, b: n } = this;
    let a = (1 - s) * t;
    return s = e ? s - a : s + a, u({ r: i, g: r, b: n, a: s });
  }
  fadeOut(t) {
    return this.fadeIn(t, !0);
  }
  negate() {
    let t = this.rgb.map((e) => 255 - e);
    return this.a !== void 0 && t.push(this.alpha), u.fromArray(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e = { ATTRIBUTE: 1 }, xe = (o) => (...t) => ({ _$litDirective$: o, values: t });
let Ae = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    this._$Ct = t, this._$AM = e, this._$Ci = s;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kt = xe(class extends Ae {
  constructor(o) {
    var t;
    if (super(o), o.type !== _e.ATTRIBUTE || o.name !== "class" || ((t = o.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(o) {
    return " " + Object.keys(o).filter((t) => o[t]).join(" ") + " ";
  }
  update(o, [t]) {
    var s, i;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), o.strings !== void 0 && (this.nt = new Set(o.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in t) t[r] && !((s = this.nt) != null && s.has(r)) && this.st.add(r);
      return this.render(t);
    }
    const e = o.element.classList;
    for (const r of this.st) r in t || (e.remove(r), this.st.delete(r));
    for (const r in t) {
      const n = !!t[r];
      n === this.st.has(r) || (i = this.nt) != null && i.has(r) || (n ? (e.add(r), this.st.add(r)) : (e.remove(r), this.st.delete(r)));
    }
    return H;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const we = "important", rs = " !" + we, q = xe(class extends Ae {
  constructor(o) {
    var t;
    if (super(o), o.type !== _e.ATTRIBUTE || o.name !== "style" || ((t = o.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(o) {
    return Object.keys(o).reduce((t, e) => {
      const s = o[e];
      return s == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
    }, "");
  }
  update(o, [t]) {
    const { style: e } = o.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const s of this.ft) t[s] == null && (this.ft.delete(s), s.includes("-") ? e.removeProperty(s) : e[s] = null);
    for (const s in t) {
      const i = t[s];
      if (i != null) {
        this.ft.add(s);
        const r = typeof i == "string" && i.endsWith(rs);
        s.includes("-") || r ? e.setProperty(s, r ? i.slice(0, -11) : i, r ? we : "") : e[s] = i;
      }
    }
    return H;
  }
}), X = (o, t, e = "color-update") => {
  const s = e.includes("color") ? { color: t } : t;
  let i = new CustomEvent(e, {
    bubbles: !0,
    composed: !0,
    detail: s
  });
  o.dispatchEvent(i);
}, Se = (o = 3, t) => {
  let e = 0, s = 100, i = 50, r = null, n = !1;
  t && (s = t.s, t.hasOwnProperty("v") ? (r = t.v, i = null, n = !0) : i = t.l);
  const a = [];
  let l, h;
  const d = (c, p) => `${c.css} ${(p * 100).toFixed(1)}%`;
  for (; e < 360; )
    l = u.parse(n ? { h: e, s, v: r } : { h: e, s, l: i }), h = e / 360, a.push(d(l, h)), e += o;
  return e = 359, l = u.parse(n ? { h: e, s, v: r } : { h: e, s, l: i }), h = 1, a.push(d(l, h)), a.join(", ");
}, ct = x`<svg stroke='currentColor' fill='none' stroke-width='0' viewBox='0 0 24 24'>
  <path d='M13 7H7V5H13V7Z' fill='currentColor'></path>
  <path d='M13 11H7V9H13V11Z' fill='currentColor'></path>
  <path d='M7 15H13V13H7V15Z' fill='currentColor'></path>
  <path fill-rule='evenodd' clip-rule='evenodd' d='M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z' fill='currentColor'></path>
</svg>`, st = class st extends k {
  constructor() {
    super(), this.gradient = { backgroundImage: `linear-gradient(90deg, ${Se(24)})` }, this.width = 400, this.sliderStyle = { display: "none" };
  }
  firstUpdated() {
    let t = this.renderRoot.querySelector("lit-movable");
    t.onmovestart = () => {
      X(this.renderRoot, { sliding: !0 }, "sliding-hue");
    }, t.onmoveend = () => {
      X(this.renderRoot, { sliding: !1 }, "sliding-hue");
    }, t.onmove = ({ posLeft: e }) => this.selectHue({ offsetX: e }), this.sliderStyle = this.sliderCss(this.hue);
  }
  get sliderBounds() {
    let t = this.width / 360, e = Number(this.hue) * t, s = 0 - e, i = this.width - e;
    return { min: s, max: i, posLeft: e };
  }
  get sliderCss() {
    return (t) => (this.color.hsx && (t = this.color.hsx.h), t === void 0 && (t = this.color.hsl.h), { backgroundColor: u.parse({ h: t, s: 100, l: 50 }).css });
  }
  willUpdate(t) {
    var s;
    if (t.get("hue") && isFinite(this.hue)) {
      if ((s = this.color) != null && s.hsx)
        return;
      let i = this.hue;
      this.sliderStyle = this.sliderCss(i);
    }
  }
  selectHue(t) {
    let e = 360 / this.width, s = t.offsetX, i = Math.max(0, Math.min(359, Math.round(s * e))), r = this.renderRoot.querySelector("a"), n = new CustomEvent("hue-update", {
      bubbles: !0,
      composed: !0,
      detail: { h: i }
    });
    r.dispatchEvent(n), this.sliderStyle = this.sliderCss(i);
  }
  render() {
    return x`
      <div style=${q(this.gradient)} class='bar' @click='${this.selectHue}'>
        <lit-movable horizontal='${this.sliderBounds.min}, ${this.sliderBounds.max}' posLeft='${this.sliderBounds.posLeft}'>
          <a class='slider' style=${q(this.sliderCss(this.h))}></a>
        </lit-movable>

      </div>`;
  }
};
y(st, "properties", {
  hue: { type: Number },
  color: { type: Object },
  gradient: { type: String, attribute: !1 },
  sliderStyle: { type: String, attribute: !1 },
  sliderBounds: { type: Object },
  width: { type: Number, attribute: !1 }
}), y(st, "styles", L`
    :host > div {
      display: block;
      width: ${pe(st.width)}px;
      height: 15px;
      cursor: pointer;
      position: relative;
    }

    :host .slider {
      position: absolute;
      top: -1px;
      height: 17px;
      width: 8px;
      margin-left: -4px;
      box-shadow: 0 0 3px #111, inset 0 0 2px white;
    }
  `);
let Ht = st;
customElements.define("hue-bar", Ht);
const Ee = L`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), #fff;
  background-repeat: repeat, repeat;
  background-position: 0 0, 6px 6px;
  background-size: 12px 12px, 12px 12px;
`, Ce = L`
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
`, Fe = L`
  color: var(--input-active-color);
  background-color: var(--input-active-bg);
  border-color: var(--input-active-border-color);
  outline: 0;
  box-shadow: var(--input-active-box-shadow);
`, os = L`
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
      ${Ce}
    }
    :host .form-control:focus {
      ${Fe}
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
  :host dialog.open{
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
      ${Ee}
      z-index: 0;
    }
  `, ns = L`
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
    ${Ce}
  }

  :host .form-control:focus {
    ${Fe}
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
    ${Ee}
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  :host div.active .transparent-checks {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`, ls = {
  r: "R (red) channel",
  g: "G (green) channel",
  b: "B (blue) channel",
  h: "H (hue) channel",
  s: "S (saturation) channel",
  v: "V (value / brightness) channel",
  l: "L (luminosity) channel",
  a: "A (alpha / opacity) channel"
};
class Mt extends k {
  constructor() {
    super();
    y(this, "valueChange", (e, s = null) => {
      s = s ?? Number(this.renderRoot.querySelector("input").value), this.c[this.channel] = s;
      let i = u.parse(this.c);
      this.group !== "rgb" && (i.hsx = this.c), this.c = this.group === "rgb" ? this.color.rgbObj : this.isHsl ? this.color.hsl : this.color.hsv, X(this.renderRoot, i);
    });
  }
  clickPreview(e) {
    const i = Math.max(0, Math.min(e.offsetX, 128));
    let r = Math.round(i / 128 * this.max);
    this.channel === "a" && (r = Number((i / 127).toFixed(2))), this.valueChange(null, r), this.setActive(!1);
  }
  setActive(e) {
    this.active = e, e && this.renderRoot.querySelector("input").select();
  }
  setPreviewGradient() {
    let e;
    this.group === "rgb" ? e = this.color.rgbObj : this.color.hsx ? e = this.color.hsx : e = this.isHsl ? this.color.hsl : this.color.hsv, this.c = e;
    let s = this.group, i = this.channel;
    const r = i === "a";
    this.v = e[i], r && (this.v = Math.max(0, Math.min(this.v, 1)));
    let n = 255, a, l;
    if (s !== "rgb" || i === "a")
      if (i === "h") {
        n = this.max = 359, this.previewGradient = {
          "--preview": `linear-gradient(90deg, ${Se(24, e)})`,
          "--pct": `${100 * (e.h / n)}%`
        };
        return;
      } else r ? n = 1 : n = 100;
    if (this.max = n, a = { ...e }, l = a, a[this.channel] = 0, a = u.parse(a), l[this.channel] = n, l = u.parse(l), this.channel === "l") {
      let h = { ...e };
      h.l = 50, this.previewGradient = {
        "--preview": `linear-gradient(90deg, ${a.hex}, ${u.parse(h).hex}, ${l.hex})`,
        "--pct": `${100 * (e[this.channel] / n)}%`
      };
    } else
      this.previewGradient = {
        "--preview": `linear-gradient(90deg, ${r ? a.css : a.hex}, ${r ? l.css : l.hex})`,
        "--pct": `${Math.min(100, Math.max(100 * (e[this.channel] / n), 0))}%`
      };
  }
  willUpdate(e) {
    this.setPreviewGradient();
  }
  render() {
    const e = this.channel === "a" ? x`<div class='transparent-checks'></div>` : null, s = this.channel === "a" ? 1 : this.max;
    return x`
      <div class='${kt({ active: this.active })}'>
        <label for=channel_${this.ch} >${this.channel.toUpperCase()}</label>
        <input id=channel_${this.ch} aria-label='${ls[this.channel]}'
          class='form-control' .value='${this.channel === "a" && this.v < 1 ? Math.min(1, this.v).toFixed(2) : Math.round(this.v)}'
          type='number' min='0' max='${s}' .step='${this.channel === "a" ? 0.01 : 1}'
          @input='${this.valueChange}'
          @focus='${() => this.setActive(!0)}'
          @blur='${() => this.setActive(!1)}'
        />
        <div class='preview-bar' style='${q(this.previewGradient)}' @mousedown='${this.clickPreview}'>
          <div class='pct'></div>
          ${e}
        </div>
      </div>`;
  }
}
y(Mt, "properties", {
  group: { type: String },
  channel: { type: String },
  color: { type: Object },
  isHsl: { type: Boolean },
  c: { type: Object, state: !0, attribute: !1 },
  previewGradient: { type: Object, state: !0, attribute: !1 },
  active: { type: Boolean, state: !0, attribute: !1 },
  max: { type: Number, state: !0, attribute: !1 },
  v: { type: Number, state: !0, attribute: !1 }
}), y(Mt, "styles", ns);
customElements.define("color-input-channel", Mt);
class Pt extends k {
  constructor() {
    super(), this.isHsl = !0, this.circlePos = { top: 0, left: 0, bounds: { x: "", y: "" } }, this.size = 160;
  }
  setColor(t) {
    X(this.renderRoot, t);
  }
  setCircleCss(t, e) {
    let s = `${t}`, i = `${e}`, r = { x: `0, ${this.size}`, y: `0,${this.size}` };
    this.circlePos = { top: i, left: s, bounds: r };
  }
  pickCoord({ offsetX: t, offsetY: e }) {
    let s = t, i = e;
    const { size: r, hsw: n, isHsl: a, color: l } = this;
    let h = (r - i) / r;
    h = Math.round(h * 100);
    let d = Math.round(s / r * 100), c = { h: n.h, s: d, [a ? "l" : "v"]: h }, p = a ? u.fromHsl(c) : u.fromHsv(c);
    this.setCircleCss(s, i), p.a = l.alpha, p.hsx = c, p.fromHSLCanvas = !0, this.setColor(p);
  }
  debouncePaintDetail(t) {
    clearTimeout(this.bouncer), this.bouncer = setTimeout(() => this.paintHSL(t, !0), 50), this.paintHSL(t, !1);
  }
  // todo: test assumption that this perf lag (lit warning)
  //  is ok due to rendering canvas post update
  paintHSL(t, e = null) {
    if (this.debounceMode && e === null)
      return this.debouncePaintDetail(t);
    const { ctx: s, color: i, isHsl: r, size: n } = this;
    if (!s)
      return;
    let a = i;
    t = t ?? r ? a.hsl : a.hsv, t.w = r ? t.l : t.v;
    let { h: l, s: h, w: d } = t, c = this.hsw = { h: l, s: h, w: d }, p = n / 100;
    const Te = r ? (A, w, yt) => `hsl(${A}, ${w}%, ${100 - yt}%)` : (A, w, yt) => u.fromHsv({ h: A, s: w, v: 100 - yt }).hex;
    let ht = e === !1 ? 4 : 1;
    for (let A = 0; A < 100; A += ht)
      for (let w = 0; w < 100; w += ht)
        s.fillStyle = Te(l, A, w), s.fillRect(A, w, A + ht, w + ht);
    this.setCircleCss(c.s * p, n - t.w * p);
  }
  willUpdate(t) {
    var e;
    if (t.has("color") || t.has("isHsl")) {
      if ((e = this.color) != null && e.hsx) {
        if (this.color.fromHSLCanvas) {
          delete this.color.fromHSLCanvas;
          return;
        }
        return this.paintHSL(this.color.hsx);
      }
      this.paintHSL();
    }
  }
  firstUpdated(t) {
    let e = this.renderRoot.querySelector("canvas");
    this.ctx = e.getContext("2d"), this.paintHSL();
  }
  circleMove({ posTop: t, posLeft: e }) {
    this.pickCoord({ offsetX: e, offsetY: t });
  }
  render() {
    let t = { height: this.size + "p", width: this.size + "px" }, { top: e, left: s, bounds: i } = this.circlePos;
    return x`
      <div class='outer' @click='${this.pickCoord}' style='${q(t)}'>
        <canvas height='100' width='100'></canvas>
        <lit-movable
          boundsX='${i.x}' boundsY='${i.y}'
          posTop='${e}' posLeft='${s}' .onmove='${(r) => this.circleMove(r)}'>
          <div class='circle'></div>
        </lit-movable>
      </div>`;
  }
}
y(Pt, "properties", {
  color: { type: Object },
  isHsl: { type: Boolean },
  size: { type: Number },
  debounceMode: { type: Boolean },
  ctx: { type: Object, state: !0, attribute: !1 },
  hsw: { type: Object, state: !0, attribute: !1 },
  circlePos: { type: Object, state: !0, attribute: !1 }
}), y(Pt, "styles", L`
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

    :host .circle {
      height: 12px;
      width: 12px;
      border: solid 2px #eee;
      border-radius: 50%;
      box-shadow: 0 0 3px #000, inset 0 0 1px #fff;
      position: absolute;
      margin: -8px;
      mix-blend-mode: difference;
    }
  `);
customElements.define("hsl-canvas", Pt);
var as = Object.defineProperty, hs = (o, t, e) => t in o ? as(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, v = (o, t, e) => (hs(o, typeof t != "symbol" ? t + "" : t, e), e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = globalThis, Rt = ut.ShadowRoot && (ut.ShadyCSS === void 0 || ut.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ke = Symbol(), Gt = /* @__PURE__ */ new WeakMap();
let cs = class {
  constructor(o, t, e) {
    if (this._$cssResult$ = !0, e !== ke)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = o, this.t = t;
  }
  get styleSheet() {
    let o = this.o;
    const t = this.t;
    if (Rt && o === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (o = Gt.get(t)), o === void 0 && ((this.o = o = new CSSStyleSheet()).replaceSync(this.cssText), e && Gt.set(t, o));
    }
    return o;
  }
  toString() {
    return this.cssText;
  }
};
const ds = (o) => new cs(typeof o == "string" ? o : o + "", void 0, ke), us = (o, t) => {
  if (Rt)
    o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (const e of t) {
      const s = document.createElement("style"), i = ut.litNonce;
      i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, o.appendChild(s);
    }
}, Kt = Rt ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return ds(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ps, defineProperty: fs, getOwnPropertyDescriptor: gs, getOwnPropertyNames: ms, getOwnPropertySymbols: bs, getPrototypeOf: $s } = Object, W = globalThis, Jt = W.trustedTypes, vs = Jt ? Jt.emptyScript : "", Qt = W.reactiveElementPolyfillSupport, tt = (o, t) => o, Dt = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? vs : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, He = (o, t) => !ps(o, t), te = { attribute: !0, type: String, converter: Dt, reflect: !1, hasChanged: He };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class I extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = te) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && fs(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: r } = gs(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(n) {
      const a = i == null ? void 0 : i.call(this);
      r.call(this, n), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? te;
  }
  static _$Ei() {
    if (this.hasOwnProperty(tt("elementProperties")))
      return;
    const t = $s(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(tt("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(tt("properties"))) {
      const e = this.properties, s = [...ms(e), ...bs(e)];
      for (const i of s)
        this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0)
        for (const [s, i] of e)
          this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s)
        e.unshift(Kt(i));
    } else
      t !== void 0 && e.push(Kt(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys())
      this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return us(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var s;
    const i = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const n = (((s = i.converter) == null ? void 0 : s.toAttribute) !== void 0 ? i.converter : Dt).toAttribute(e, i.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var s;
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const n = i.getPropertyOptions(r), a = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((s = n.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? n.converter : Dt;
      this._$Em = r, this[r] = a.fromAttribute(e, n.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? He)(this[t], e))
        return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep)
          this[r] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0)
        for (const [r, n] of i)
          n.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], n);
    }
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), (t = this._$EO) == null || t.forEach((i) => {
        var r;
        return (r = i.hostUpdate) == null ? void 0 : r.call(i);
      }), this.update(s)) : this._$EU();
    } catch (i) {
      throw e = !1, this._$EU(), i;
    }
    e && this._$AE(s);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
I.elementStyles = [], I.shadowRootOptions = { mode: "open" }, I[tt("elementProperties")] = /* @__PURE__ */ new Map(), I[tt("finalized")] = /* @__PURE__ */ new Map(), Qt == null || Qt({ ReactiveElement: I }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = globalThis, gt = ft.trustedTypes, ee = gt ? gt.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, Me = "$lit$", E = `lit$${(Math.random() + "").slice(9)}$`, Pe = "?" + E, ys = `<${Pe}>`, R = document, ot = () => R.createComment(""), nt = (o) => o === null || typeof o != "object" && typeof o != "function", De = Array.isArray, _s = (o) => De(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", St = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, se = /-->/g, ie = />/g, U = RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), re = /'/g, oe = /"/g, Ue = /^(?:script|style|textarea|title)$/i, xs = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), As = xs(1), Y = Symbol.for("lit-noChange"), m = Symbol.for("lit-nothing"), ne = /* @__PURE__ */ new WeakMap(), O = R.createTreeWalker(R, 129);
function Be(o, t) {
  if (!Array.isArray(o) || !o.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return ee !== void 0 ? ee.createHTML(t) : t;
}
const ws = (o, t) => {
  const e = o.length - 1, s = [];
  let i, r = t === 2 ? "<svg>" : "", n = K;
  for (let a = 0; a < e; a++) {
    const l = o[a];
    let h, d, c = -1, p = 0;
    for (; p < l.length && (n.lastIndex = p, d = n.exec(l), d !== null); )
      p = n.lastIndex, n === K ? d[1] === "!--" ? n = se : d[1] !== void 0 ? n = ie : d[2] !== void 0 ? (Ue.test(d[2]) && (i = RegExp("</" + d[2], "g")), n = U) : d[3] !== void 0 && (n = U) : n === U ? d[0] === ">" ? (n = i ?? K, c = -1) : d[1] === void 0 ? c = -2 : (c = n.lastIndex - d[2].length, h = d[1], n = d[3] === void 0 ? U : d[3] === '"' ? oe : re) : n === oe || n === re ? n = U : n === se || n === ie ? n = K : (n = U, i = void 0);
    const f = n === U && o[a + 1].startsWith("/>") ? " " : "";
    r += n === K ? l + ys : c >= 0 ? (s.push(h), l.slice(0, c) + Me + l.slice(c) + E + f) : l + E + (c === -2 ? a : f);
  }
  return [Be(o, r + (o[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class lt {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0, n = 0;
    const a = t.length - 1, l = this.parts, [h, d] = ws(t, e);
    if (this.el = lt.createElement(h, s), O.currentNode = this.el.content, e === 2) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (i = O.nextNode()) !== null && l.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const c of i.getAttributeNames())
            if (c.endsWith(Me)) {
              const p = d[n++], f = i.getAttribute(c).split(E), _ = /([.?@])?(.*)/.exec(p);
              l.push({ type: 1, index: r, name: _[2], strings: f, ctor: _[1] === "." ? Es : _[1] === "?" ? Cs : _[1] === "@" ? Fs : vt }), i.removeAttribute(c);
            } else
              c.startsWith(E) && (l.push({ type: 6, index: r }), i.removeAttribute(c));
        if (Ue.test(i.tagName)) {
          const c = i.textContent.split(E), p = c.length - 1;
          if (p > 0) {
            i.textContent = gt ? gt.emptyScript : "";
            for (let f = 0; f < p; f++)
              i.append(c[f], ot()), O.nextNode(), l.push({ type: 2, index: ++r });
            i.append(c[p], ot());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Pe)
          l.push({ type: 2, index: r });
        else {
          let c = -1;
          for (; (c = i.data.indexOf(E, c + 1)) !== -1; )
            l.push({ type: 7, index: r }), c += E.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const s = R.createElement("template");
    return s.innerHTML = t, s;
  }
}
function Z(o, t, e = o, s) {
  var i, r;
  if (t === Y)
    return t;
  let n = s !== void 0 ? (i = e._$Co) == null ? void 0 : i[s] : e._$Cl;
  const a = nt(t) ? void 0 : t._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== a && ((r = n == null ? void 0 : n._$AO) == null || r.call(n, !1), a === void 0 ? n = void 0 : (n = new a(o), n._$AT(o, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = n : e._$Cl = n), n !== void 0 && (t = Z(o, n._$AS(o, t.values), n, s)), t;
}
class Ss {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? R).importNode(e, !0);
    O.currentNode = i;
    let r = O.nextNode(), n = 0, a = 0, l = s[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let h;
        l.type === 2 ? h = new at(r, r.nextSibling, this, t) : l.type === 1 ? h = new l.ctor(r, l.name, l.strings, this, t) : l.type === 6 && (h = new ks(r, this, t)), this._$AV.push(h), l = s[++a];
      }
      n !== (l == null ? void 0 : l.index) && (r = O.nextNode(), n++);
    }
    return O.currentNode = R, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class at {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = m, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = Z(this, t, e), nt(t) ? t === m || t == null || t === "" ? (this._$AH !== m && this._$AR(), this._$AH = m) : t !== this._$AH && t !== Y && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : _s(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== m && nt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(R.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var e;
    const { values: s, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = lt.createElement(Be(i.h, i.h[0]), this.options)), i);
    if (((e = this._$AH) == null ? void 0 : e._$AD) === r)
      this._$AH.p(s);
    else {
      const n = new Ss(r, this), a = n.u(this.options);
      n.p(s), this.T(a), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = ne.get(t.strings);
    return e === void 0 && ne.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    De(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const r of t)
      i === e.length ? e.push(s = new at(this.S(ot()), this.S(ot()), this, this.options)) : s = e[i], s._$AI(r), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class vt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, r) {
    this.type = 1, this._$AH = m, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = m;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let n = !1;
    if (r === void 0)
      t = Z(this, t, e, 0), n = !nt(t) || t !== this._$AH && t !== Y, n && (this._$AH = t);
    else {
      const a = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        h = Z(this, a[s + l], e, l), h === Y && (h = this._$AH[l]), n || (n = !nt(h) || h !== this._$AH[l]), h === m ? t = m : t !== m && (t += (h ?? "") + r[l + 1]), this._$AH[l] = h;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === m ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Es extends vt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === m ? void 0 : t;
  }
}
class Cs extends vt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== m);
  }
}
class Fs extends vt {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Z(this, t, e, 0) ?? m) === Y)
      return;
    const s = this._$AH, i = t === m && s !== m || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== m && (s === m || i);
    i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ks {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Z(this, t);
  }
}
const le = ft.litHtmlPolyfillSupport;
le == null || le(lt, at), (ft.litHtmlVersions ?? (ft.litHtmlVersions = [])).push("3.1.2");
const Hs = (o, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const r = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new at(t.insertBefore(ot(), r), r, void 0, e ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class et extends I {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Hs(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return Y;
  }
}
var ae;
et._$litElement$ = !0, et.finalized = !0, (ae = globalThis.litElementHydrateSupport) == null || ae.call(globalThis, { LitElement: et });
const he = globalThis.litElementPolyfillSupport;
he == null || he({ LitElement: et });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
const mt = (o) => isFinite(o) ? Number(o) : Number(o.replace(/[^0-9.\-]/g, "")), ce = (o) => (o = Number(o), (isNaN(o) || [void 0, null].includes(o)) && (o = 0), o);
class b {
  constructor(t, e) {
    this.x = ce(t), this.y = ce(e);
  }
  static fromPointerEvent(t) {
    const { pageX: e, pageY: s } = t;
    return new b(e, s);
  }
  static fromElementStyle(t) {
    let e = mt(t.style.left ?? 0), s = mt(t.style.top ?? 0);
    return new b(e, s);
  }
  static fromObject({ x: t, y: e }) {
    return new b(t, e);
  }
  get top() {
    return this.y;
  }
  set top(t) {
    this.y = t;
  }
  get left() {
    return this.x;
  }
  set left(t) {
    this.x = t;
  }
}
const Ms = (o) => {
  const t = b.fromPointerEvent(o), e = o.target.getBoundingClientRect();
  let s = t.x - (e.left + document.body.scrollLeft), i = t.y - (e.top + document.body.scrollTop);
  return new b(s, i);
};
class C {
  constructor(t = -1 / 0, e = 1 / 0) {
    this.min = t, this.max = e, this.attr = "";
  }
  get constrained() {
    return this.min === this.max;
  }
  get unconstrained() {
    return this.min === -1 / 0 && this.max === 1 / 0;
  }
  static fromString(t = null, e = 0) {
    if (!t)
      return new C();
    if (t === "null")
      return new C(0, 0);
    let [s, i] = t.split(",").map((n) => Number(n.trim()) + e), r = new C(s, i);
    return r.attr = t, r;
  }
}
class Oe extends et {
  constructor() {
    super(), v(this, "_target"), v(this, "_targetSelector", null), v(this, "_boundsX", new C()), v(this, "_boundsY", new C()), v(this, "isMoving", !1), v(this, "moveState", {}), v(this, "_vertical", null), v(this, "_horizontal", null), v(this, "_posTop", null), v(this, "_posLeft", null), v(this, "_grid", 1), v(this, "pointerId");
  }
  get vertical() {
    return this._vertical;
  }
  set vertical(t) {
    this.boundsY = t, this.boundsX = "null", this._vertical = t;
  }
  get horizontal() {
    return this._horizontal;
  }
  set horizontal(t) {
    this.boundsX = t, this.boundsY = "null", this._horizontal = t;
  }
  set posTop(t) {
    t = Number(t), this._posTop = t, this.target && (this.target.style.top = t + "px");
  }
  get posTop() {
    return this._posTop;
  }
  set posLeft(t) {
    t = Number(t), this._posLeft = t, this.target && (this.target.style.left = t + "px");
  }
  get posLeft() {
    return this._posLeft;
  }
  get grid() {
    return this._grid;
  }
  set grid(t) {
    t > 0 && t < 1 / 0 ? this._grid = t : this._grid = 1;
  }
  get bounds() {
    return {
      left: this._boundsX,
      top: this._boundsY
    };
  }
  set targetSelector(t) {
    this._targetSelector = t, this._retryTarget = document.querySelector(t) === null, this._target = document.querySelector(t);
  }
  get targetSelector() {
    return this._targetSelector;
  }
  get target() {
    return this._target ?? this;
  }
  set target(t) {
    this._target = t;
  }
  get boundsX() {
    return this._boundsX;
  }
  set boundsX(t) {
    var e;
    this._boundsX = C.fromString(t, mt(((e = this.target) == null ? void 0 : e.style.left) ?? 0)), this.bounds.left = this._boundsX;
  }
  get boundsY() {
    return this._boundsY;
  }
  set boundsY(t) {
    var e;
    this._boundsY = C.fromString(t, mt(((e = this.target) == null ? void 0 : e.style.top) ?? 0)), this.bounds.top = this._boundsY;
  }
  firstUpdated(t) {
    this._retryTarget && (this.target = document.querySelector(this.targetSelector));
    let { bounds: e, target: s, posTop: i, posLeft: r } = this, { offsetLeft: n, offsetTop: a, style: { left: l, top: h } } = this.target;
    s.classList.add("--movable-base"), this.renderRoot.addEventListener("pointerdown", (d) => this.pointerdown(d)), s.style.position = "absolute", s.style.cursor = "pointer", r ? s.style.left = r + "px" : !l && n && (s.style.left = n + "px", e.left.constrained && (e.left.min = e.left.max = n)), i ? s.style.top = i + "px" : !h && a && (s.style.top = a + "px", e.top.constrained && (e.top.min = e.top.max = a));
  }
  reposition(t) {
    if (typeof t == "object") {
      const { eventsOnly: e, target: s } = this;
      this.posTop = t.top, this.posLeft = t.left, s && !e && (s.style.left = t.left + "px", s.style.top = t.top + "px");
    } else
      this.isMoving = t;
  }
  moveInit(t) {
    let e = this.moveState, { target: s, bounds: i } = this;
    e.mouseCoord = b.fromPointerEvent(t), e.startCoord = b.fromElementStyle(s), e.moveDist = new b(0, 0), e.totalDist = new b(0, 0), e.clickOffset = Ms(t), e.coords = b.fromObject(e.startCoord), e.maxX = isFinite(i.left.min) && isFinite(i.left.max) ? i.left.min + i.left.max : 1 / 0, e.maxY = isFinite(i.top.min) && isFinite(i.top.max) ? i.top.min + i.top.max : 1 / 0, this.isMoving = !0, this.reposition(!0), this.eventBroker("movestart", t);
  }
  eventBroker(t, e) {
    this.moveState.posTop = this.posTop, this.moveState.posLeft = this.posLeft;
    let s = new CustomEvent(t, {
      bubbles: !0,
      composed: !0,
      detail: { ...e, ...this.moveState, element: this }
    });
    this.renderRoot.dispatchEvent(s);
    let i = this[`on${t}`];
    i && i({ ...e, ...this.moveState, me: this });
  }
  unbind(t) {
    this.pointerId = null, document.body.removeEventListener("pointermove", (e) => this.motionHandler(e)), this.moveEnd(t);
  }
  moveEnd(t) {
    this.isMoving && (this.isMoving = this.moveState.isMoving = !1, this.reposition(!1), this.eventBroker("moveend", t));
  }
  motionHandler(t) {
    t.stopPropagation();
    let e = b.fromPointerEvent(t), s = this.moveState, { grid: i, bounds: r, shiftBehavior: n, boundsX: a, boundsY: l } = this;
    if (s.moveDist = b.fromObject({
      x: e.x - s.mouseCoord.x,
      y: e.y - s.mouseCoord.y
    }), s.mouseCoord = e, s.totalDist = b.fromObject({
      x: s.totalDist.x + s.moveDist.x,
      y: s.totalDist.y + s.moveDist.y
    }), s.coords = b.fromObject({
      x: Math.round(s.totalDist.x / i) * i + s.startCoord.x,
      y: Math.round(s.totalDist.y / i) * i + s.startCoord.y
    }), n && t.shiftKey && a.unconstrained && l.unconstrained) {
      let { x: h, y: d } = s.totalDist;
      Math.abs(h) > Math.abs(d) ? s.coords.top = s.startCoord.y : s.coords.left = s.startCoord.x;
    } else
      s.coords.y = Math.min(Math.max(r.top.min, s.coords.top), r.top.max), s.coords.x = Math.min(Math.max(r.left.min, s.coords.left), r.left.max);
    isFinite(s.maxX) && (s.pctX = Math.max(r.left.min, s.coords.left) / s.maxX), isFinite(s.maxY) && (s.pctY = Math.max(r.top.min, s.coords.top) / s.maxY), this.reposition(s.coords), this.eventBroker("move", t);
  }
  pointerdown(t) {
    document.body.setPointerCapture(t.pointerId), t.preventDefault(), t.stopPropagation(), t.pointerId !== void 0 && (this.pointerId = t.pointerId), this.listening || (document.body.addEventListener("pointerup", (e) => {
      this.isMoving && this.unbind(e);
    }, !1), document.body.addEventListener("pointermove", (e) => {
      this.pointerId !== void 0 && e.pointerId === this.pointerId && this.motionHandler(e);
    }, !1)), this.listening = !0, this.moveInit(t);
  }
  render() {
    return As`<slot></slot>`;
  }
}
v(Oe, "properties", {
  //set the left/top position
  // defaults to  element.offsetTop /offsetLeft
  posLeft: { type: Number },
  posTop: { type: Number },
  // target element that moves - defaults to root element
  target: { type: Object, attribute: !1, state: !0 },
  // selector that will set the target element that will move
  targetSelector: { type: String },
  // object (left:boundsX,top:boundsY)
  bounds: { type: Object, attribute: !1, state: !0 },
  // Both x and y default to -Infinity,Infinity.
  // Set to boundsX="min,max" ([0,0] to restrict the axis)
  // these are attribute string setters meant for declarative
  // element attribute setting
  boundsX: { type: String },
  boundsY: { type: String },
  // vertical="min,max" - constrain movement to y axis within min and max numbers provided.
  // automatically disables horizontal movement
  vertical: { type: String },
  // horizontal="min,max" - constrain movement to x axis within min and max provided.
  // automatically disables vertical movement
  horizontal: { type: String },
  //defaults to 1. snap to grid size in pixels.
  grid: { type: Number },
  // set to true enables shift key to constrain movement to either
  // x or y axis (whichever is greater).
  // Setting any bounds option automatically disables shift key behavior.
  shiftBehavior: { type: Boolean },
  //disables moving
  disabled: { type: Boolean },
  // advanced mode: Does not move the element, but fires
  // events so you can pass to your own handler
  eventsOnly: { type: Boolean },
  listening: { type: Boolean },
  onmovestart: { type: Object },
  onmoveend: { type: Object },
  onmove: { type: Object }
});
window.customElements.define("lit-movable", Oe);
class Ut extends k {
  constructor() {
    super();
    y(this, "_color");
    this._color = u.parse(Ft.slateblue), this.isHsl = !0;
  }
  firstUpdated(e) {
    this.debounceMode = !1, e.has("value") && (this.color = u.parse(this.value));
  }
  get color() {
    return this._color;
  }
  set color(e) {
    e = e.hsx ? e : e.rgba ? u.parse(...e.rgba) : u.parse(e), e && (this.hex = e.hex, this._color = e, X(this.renderRoot, e, "colorchanged"));
  }
  updateColor({ detail: { color: e } }) {
    this.color = e;
  }
  setColor(e) {
    const s = this.renderRoot.querySelector("input#hex").value, i = u.parse(s);
    i ? this.color = i : console.log(`ignored unparsable input: ${s}`);
  }
  setHue({ detail: { h: e } }) {
    let { s, l: i, a: r } = this.color.hsl;
    r === 1 && (r = void 0), this.color = { h: e, s, l: i, a: r };
  }
  setHsl(e) {
    this.isHsl = e;
  }
  okColor() {
    X(this.renderRoot, this.color, "colorpicked");
  }
  showCopyDialog() {
    if (this.copied = null, this.dlg = this.dlg ?? this.renderRoot.querySelector("dialog"), this.dlg.open)
      return this.dlg.classList.remove("open"), this.dlg.close();
    this.dlg.show(), this.dlg.classList.add("open");
  }
  clipboard(e) {
    let s = this.color.toString(e);
    window.navigator.clipboard.writeText(s).then(() => {
      this.hideCopyDialog(s);
    });
  }
  hideCopyDialog(e) {
    if (e) {
      this.copied = e, setTimeout(() => this.dlg.classList.remove("open"), 400), setTimeout(() => this.hideCopyDialog(), 1200);
      return;
    }
    this.dlg.classList.remove("open"), this.dlg.close(), this.copied = null;
  }
  setSliding({ detail: e }) {
    this.debounceMode = e.sliding;
  }
  render() {
    const e = this.isHsl ? ["h", "s", "l"] : ["h", "s", "v"], s = { button: !0, active: !this.isHsl, l: !0 }, i = { button: !0, active: this.isHsl, r: !0 };
    let r = { backgroundColor: this.color }, n = this.copied ? { textAlign: "center", display: "block" } : { display: "none" };
    const a = this.debounceMode;
    return x`
      <div class='outer'>
        <hue-bar
          @sliding-hue='${this.setSliding}'
          hue='${this.color.hsx ? this.color.hsx.h : this.color.hsl.h}'
          @hue-update='${this.setHue}' .color='${this.color}'></hue-bar>
        <div class='d-flex'>
          <div class='col w-30'>
            ${["r", "g", "b", "a"].map((l) => x`
              <color-input-channel
                group='rgb' channel='${l}' isHsl='${this.isHsl}'
                .color='${this.color}' @color-update='${this.updateColor}' />
            `)}
            <div class='hex'>
              <dialog @blur='${() => this.hideCopyDialog()}' tabindex='0'>
                <sub class='copied' style='${q(n)}'>copied <em>${this.copied}</em></sub>
                ${this.copied ? x`` : x`
                  <a class='copy-item' @click=${(l) => this.clipboard("hex", l)} id='copyHex'>
                    <input class='form-control' disabled='disabled' value='${this.color.hex}'>
                    <button title='Copy HEX String' class='button' tabindex='0'>${ct}</button>
                  </a>
                  <a class='copy-item' @click=${(l) => this.clipboard("css", l)} id='copyRgb'>
                    <input class='form-control' disabled='disabled' value='${this.color.css}'>
                    <button title='Copy RGB String' class='button' tabindex='0'>${ct}</button>
                  </a>
                  <a class='copy-item'  id='copyHsl'
                     @click=${(l) => this.clipboard(this.color.alpha < 1 ? "hsla" : "hsl", l)}>
                    <input class='form-control' disabled='disabled'
                           value='${this.color.toString(this.color.alpha < 1 ? "hsla" : "hsl")}'>
                    <button title='Copy HSL String' class='button' tabindex='0'>${ct}</button>
                  </a>
                `}

              </dialog>
              <label for='hex'>#</label>
              <input aria-label='Hexadecimal value (editable - accepts any valid color string)'
                     @input='${this.setColor}' class='form-control' id='hex' placeholder='Set color'
                     value='${this.hex}' /><a title='Show copy to clipboard menu'
                                               @click='${this.showCopyDialog}' class='button copy'>
              ${ct}
              <span>&#11205;</span>
            </a>

            </div>
          </div>
          <div class='col w-30'>
            ${e.map((l) => x`
              <color-input-channel
                group="hsl" channel="${l}" .isHsl="${this.isHsl}"
                .color="${this.color}" @color-update="${this.updateColor}" />
            `)}
            <div class='hsl-mode'>
              <a title='Use hue / saturation / value (brightness) mode'
                 class='${kt(s)}'
                 @click='${() => this.setHsl(!1)}'>HSV</a><a
              title='Use hue / saturation / luminosity mode'
              class='${kt(i)}'
              @click='${() => this.setHsl(!0)}'>HSL</a>
            </div>
          </div>
          <div class='w-40'>
            <hsl-canvas .debounceMode='${a}'
              size='${160}' .isHsl='${this.isHsl}'
              .color='${this.color}' @color-update='${this.updateColor}'></hsl-canvas>
            <div class='ok'>
              <a class='button' @click='${this.okColor}'>OK
                <span class='swatch'>
                  <span style='${q(r)}'></span>
                  <span class='checky'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }
}
y(Ut, "properties", {
  color: { type: Object, state: !0, attribute: !1 },
  hex: { type: String, state: !0, attribute: !1 },
  value: { type: String },
  isHsl: { type: Boolean, state: !0, attribute: !1 },
  copied: { type: String },
  debounceMode: { type: Boolean }
}), y(Ut, "styles", os);
window.customElements.get("color-picker") || window.customElements.define("color-picker", Ut);
export {
  Ut as ColorPicker
};
