var Jt = Object.defineProperty;
var Qt = (o, t, e) => t in o ? Jt(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var p = (o, t, e) => Qt(o, typeof t != "symbol" ? t + "" : t, e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, mt = Q.ShadowRoot && (Q.ShadyCSS === void 0 || Q.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, vt = Symbol(), $t = /* @__PURE__ */ new WeakMap();
let Pt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== vt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (mt && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = $t.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && $t.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Nt = (o) => new Pt(typeof o == "string" ? o : o + "", void 0, vt), k = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((s, i, r) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + o[r + 1], o[0]);
  return new Pt(e, o, vt);
}, te = (o, t) => {
  if (mt) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = Q.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, o.appendChild(s);
  }
}, xt = mt ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return Nt(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ee, defineProperty: se, getOwnPropertyDescriptor: ie, getOwnPropertyNames: re, getOwnPropertySymbols: oe, getPrototypeOf: ne } = Object, E = globalThis, wt = E.trustedTypes, ae = wt ? wt.emptyScript : "", rt = E.reactiveElementPolyfillSupport, z = (o, t) => o, ct = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? ae : null;
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
} }, Lt = (o, t) => !ee(o, t), At = { attribute: !0, type: String, converter: ct, reflect: !1, useDefault: !1, hasChanged: Lt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), E.litPropertyMetadata ?? (E.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let R = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = At) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && se(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: r } = ie(this.prototype, t) ?? { get() {
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
    return this.elementProperties.get(t) ?? At;
  }
  static _$Ei() {
    if (this.hasOwnProperty(z("elementProperties"))) return;
    const t = ne(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(z("properties"))) {
      const e = this.properties, s = [...re(e), ...oe(e)];
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
      for (const i of s) e.unshift(xt(i));
    } else t !== void 0 && e.push(xt(t));
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
    return te(t, this.constructor.elementStyles), t;
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
      const n = (((r = s.converter) == null ? void 0 : r.toAttribute) !== void 0 ? s.converter : ct).toAttribute(e, s.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var r, n;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const a = s.getPropertyOptions(i), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((r = a.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? a.converter : ct;
      this._$Em = i;
      const h = l.fromAttribute(e, a.type);
      this[i] = h ?? ((n = this._$Ej) == null ? void 0 : n.get(i)) ?? h, this._$Em = null;
    }
  }
  requestUpdate(t, e, s, i = !1, r) {
    var n;
    if (t !== void 0) {
      const a = this.constructor;
      if (i === !1 && (r = this[t]), s ?? (s = a.getPropertyOptions(t)), !((s.hasChanged ?? Lt)(r, e) || s.useDefault && s.reflect && r === ((n = this._$Ej) == null ? void 0 : n.get(t)) && !this.hasAttribute(a._$Eu(t, s)))) return;
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
R.elementStyles = [], R.shadowRootOptions = { mode: "open" }, R[z("elementProperties")] = /* @__PURE__ */ new Map(), R[z("finalized")] = /* @__PURE__ */ new Map(), rt == null || rt({ ReactiveElement: R }), (E.reactiveElementVersions ?? (E.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis, _t = (o) => o, tt = V.trustedTypes, St = tt ? tt.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, Tt = "$lit$", S = `lit$${Math.random().toFixed(9).slice(2)}$`, Rt = "?" + S, le = `<${Rt}>`, T = document, X = () => T.createComment(""), Y = (o) => o === null || typeof o != "object" && typeof o != "function", yt = Array.isArray, he = (o) => yt(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", ot = `[ 	
\f\r]`, I = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Et = /-->/g, Ft = />/g, M = RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), kt = /'/g, Ct = /"/g, jt = /^(?:script|style|textarea|title)$/i, ce = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), $ = ce(1), F = Symbol.for("lit-noChange"), f = Symbol.for("lit-nothing"), Mt = /* @__PURE__ */ new WeakMap(), P = T.createTreeWalker(T, 129);
function Ut(o, t) {
  if (!yt(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return St !== void 0 ? St.createHTML(t) : t;
}
const de = (o, t) => {
  const e = o.length - 1, s = [];
  let i, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = I;
  for (let a = 0; a < e; a++) {
    const l = o[a];
    let h, u, d = -1, g = 0;
    for (; g < l.length && (n.lastIndex = g, u = n.exec(l), u !== null); ) g = n.lastIndex, n === I ? u[1] === "!--" ? n = Et : u[1] !== void 0 ? n = Ft : u[2] !== void 0 ? (jt.test(u[2]) && (i = RegExp("</" + u[2], "g")), n = M) : u[3] !== void 0 && (n = M) : n === M ? u[0] === ">" ? (n = i ?? I, d = -1) : u[1] === void 0 ? d = -2 : (d = n.lastIndex - u[2].length, h = u[1], n = u[3] === void 0 ? M : u[3] === '"' ? Ct : kt) : n === Ct || n === kt ? n = M : n === Et || n === Ft ? n = I : (n = M, i = void 0);
    const b = n === M && o[a + 1].startsWith("/>") ? " " : "";
    r += n === I ? l + le : d >= 0 ? (s.push(h), l.slice(0, d) + Tt + l.slice(d) + S + b) : l + S + (d === -2 ? a : b);
  }
  return [Ut(o, r + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class G {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0, n = 0;
    const a = t.length - 1, l = this.parts, [h, u] = de(t, e);
    if (this.el = G.createElement(h, s), P.currentNode = this.el.content, e === 2 || e === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (i = P.nextNode()) !== null && l.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const d of i.getAttributeNames()) if (d.endsWith(Tt)) {
          const g = u[n++], b = i.getAttribute(d).split(S), C = /([.?@])?(.*)/.exec(g);
          l.push({ type: 1, index: r, name: C[2], strings: b, ctor: C[1] === "." ? pe : C[1] === "?" ? ge : C[1] === "@" ? fe : st }), i.removeAttribute(d);
        } else d.startsWith(S) && (l.push({ type: 6, index: r }), i.removeAttribute(d));
        if (jt.test(i.tagName)) {
          const d = i.textContent.split(S), g = d.length - 1;
          if (g > 0) {
            i.textContent = tt ? tt.emptyScript : "";
            for (let b = 0; b < g; b++) i.append(d[b], X()), P.nextNode(), l.push({ type: 2, index: ++r });
            i.append(d[g], X());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Rt) l.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = i.data.indexOf(S, d + 1)) !== -1; ) l.push({ type: 7, index: r }), d += S.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const s = T.createElement("template");
    return s.innerHTML = t, s;
  }
}
function j(o, t, e = o, s) {
  var n, a;
  if (t === F) return t;
  let i = s !== void 0 ? (n = e._$Co) == null ? void 0 : n[s] : e._$Cl;
  const r = Y(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== r && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), r === void 0 ? i = void 0 : (i = new r(o), i._$AT(o, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = j(o, i._$AS(o, t.values), i, s)), t;
}
class ue {
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
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? T).importNode(e, !0);
    P.currentNode = i;
    let r = P.nextNode(), n = 0, a = 0, l = s[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let h;
        l.type === 2 ? h = new W(r, r.nextSibling, this, t) : l.type === 1 ? h = new l.ctor(r, l.name, l.strings, this, t) : l.type === 6 && (h = new be(r, this, t)), this._$AV.push(h), l = s[++a];
      }
      n !== (l == null ? void 0 : l.index) && (r = P.nextNode(), n++);
    }
    return P.currentNode = T, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class W {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = f, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
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
    t = j(this, t, e), Y(t) ? t === f || t == null || t === "" ? (this._$AH !== f && this._$AR(), this._$AH = f) : t !== this._$AH && t !== F && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : he(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== f && Y(this._$AH) ? this._$AA.nextSibling.data = t : this.T(T.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var r;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = G.createElement(Ut(s.h, s.h[0]), this.options)), s);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === i) this._$AH.p(e);
    else {
      const n = new ue(i, this), a = n.u(this.options);
      n.p(e), this.T(a), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = Mt.get(t.strings);
    return e === void 0 && Mt.set(t.strings, e = new G(t)), e;
  }
  k(t) {
    yt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const r of t) i === e.length ? e.push(s = new W(this.O(X()), this.O(X()), this, this.options)) : s = e[i], s._$AI(r), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t !== this._$AB; ) {
      const i = _t(t).nextSibling;
      _t(t).remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class st {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, r) {
    this.type = 1, this._$AH = f, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = f;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) t = j(this, t, e, 0), n = !Y(t) || t !== this._$AH && t !== F, n && (this._$AH = t);
    else {
      const a = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++) h = j(this, a[s + l], e, l), h === F && (h = this._$AH[l]), n || (n = !Y(h) || h !== this._$AH[l]), h === f ? t = f : t !== f && (t += (h ?? "") + r[l + 1]), this._$AH[l] = h;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === f ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class pe extends st {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === f ? void 0 : t;
  }
}
class ge extends st {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== f);
  }
}
class fe extends st {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = j(this, t, e, 0) ?? f) === F) return;
    const s = this._$AH, i = t === f && s !== f || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== f && (s === f || i);
    i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class be {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    j(this, t);
  }
}
const nt = V.litHtmlPolyfillSupport;
nt == null || nt(G, W), (V.litHtmlVersions ?? (V.litHtmlVersions = [])).push("3.3.3");
const me = (o, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const r = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new W(t.insertBefore(X(), r), r, void 0, e ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
let _ = class extends R {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = me(e, this.renderRoot, this.renderOptions);
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
    return F;
  }
};
var Ot;
_._$litElement$ = !0, _.finalized = !0, (Ot = L.litElementHydrateSupport) == null || Ot.call(L, { LitElement: _ });
const at = L.litElementPolyfillSupport;
at == null || at({ LitElement: _ });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
const v = (o) => N(255, Math.round(Number(o))), H = (o) => v(o * 255), D = (o) => N(1, o / 255), N = (o, t) => Math.max(0, Math.min(o, t)), ve = (o) => o <= 0.04045 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4), ye = (o) => o <= 31308e-7 ? 12.92 * o : 1.055 * Math.pow(o, 1 / 2.4) - 0.055, lt = (o, t) => [
  o[0][0] * t[0] + o[0][1] * t[1] + o[0][2] * t[2],
  o[1][0] * t[0] + o[1][1] * t[1] + o[1][2] * t[2],
  o[2][0] * t[0] + o[2][1] * t[1] + o[2][2] * t[2]
], B = (o) => o === void 0 ? 1 : (typeof o == "string" && o.indexOf("%") > 0 && (o = Number(o.split("%")[0]) / 100), o = Number(Number(o).toFixed(3)), isNaN(o) ? 1 : N(1, o)), dt = {
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
class c {
  constructor(t, e, s, i) {
    return c.isBaseConstructor(t) ? (this.r = v(t.r), this.g = v(t.g), this.b = v(t.b), t.a !== void 0 && (this.a = B(t.a)), this) : c.parse(t, e, s, i);
  }
  static parse(t, e, s, i) {
    if (c.isBaseConstructor(t))
      return new c(t);
    if (e !== void 0 && s !== void 0) {
      let r = v(t);
      return e = v(e), s = v(s), i !== void 0 && (i = B(i)), new c({ r, g: e, b: s, a: i });
    }
    if (Array.isArray(t))
      return c.fromArray(t);
    if (typeof t == "string") {
      let r;
      if (e !== void 0 && Number(e) <= 1 && Number(e) >= 0 && (r = Number(e)), t.startsWith("#"))
        return c.fromHex(t, r);
      if (dt[t.toLowerCase()])
        return c.fromNamed(t, r);
      if (t.startsWith("rgb"))
        return c.fromRgbString(t);
      if (t === "transparent") {
        let n, a, l, h;
        return n = a = l = h = 0, new c({ r: n, g: a, b: l, a: h });
      } else
        return null;
    } else if (typeof t == "object") {
      if (t.a !== void 0 && (this.a = B(t.a)), t.h !== void 0) {
        let r = {};
        if (t.l !== void 0 && t.c !== void 0)
          return c.fromOklch(t);
        if (t.v !== void 0)
          r = c.fromHsv(t);
        else if (t.l !== void 0)
          r = c.fromHsl(t);
        else
          return null;
        return r.a = t.a !== void 0 ? B(t.a) : void 0, new c(r);
      }
      return t.c !== void 0 ? c.fromCMYK(t) : this;
    }
    return c.fromArray([0, 0, 0]);
  }
  static isBaseConstructor(t) {
    return typeof t == "object" && t.r !== void 0 && t.g !== void 0 && t.b !== void 0;
  }
  static fromNamed(t, e) {
    return c.fromHex(dt[t.toLowerCase()], e);
  }
  static fromArray(t) {
    t = t.filter((s) => s !== "" && isFinite(s));
    const e = {
      r: v(t[0]),
      g: v(t[1]),
      b: v(t[2])
    };
    return t[3] !== void 0 && (e.a = B(t[3])), new c(e);
  }
  static fromHex(t, e) {
    t = t.replace("#", ""), (t.length === 3 || t.length === 4) && (t = t.split("").map((i) => i + i).join(""));
    let s = t.match(/[A-Za-z0-9]{2}/g).map((i) => parseInt(i, 16));
    return s.length === 4 ? s[3] /= 255 : e !== void 0 && (s[3] = e), c.fromArray(s);
  }
  static fromRgbString(t) {
    if (t.includes(","))
      return c.fromArray(t.split("(")[1].split(")")[0].split(","));
    const e = t.replace("/", " ").split("(")[1].replace(")", "").split(" ").filter((s) => s !== "" && isFinite(Number(s)));
    return c.fromArray(e);
  }
  static fromHsv({ h: t, s: e, v: s }) {
    e = e / 100, s = s / 100;
    const i = Math.floor(t / 60 % 6), r = t / 60 - i, n = s * (1 - e), a = s * (1 - r * e), l = s * (1 - (1 - r) * e), u = [
      [s, l, n],
      [a, s, n],
      [n, s, l],
      [n, a, s],
      [l, n, s],
      [s, n, a]
    ][i].map((d) => Math.round(d * 256));
    return new c({ r: v(u[0]), g: v(u[1]), b: v(u[2]) });
  }
  static fromHsl({ h: t, s: e, l: s }) {
    e /= 100, s /= 100;
    const i = (1 - Math.abs(2 * s - 1)) * e, r = i * (1 - Math.abs(t / 60 % 2 - 1)), n = s - i / 2;
    let a = 0, l = 0, h = 0;
    return 0 <= t && t < 60 ? (a = i, l = r, h = 0) : 60 <= t && t < 120 ? (a = r, l = i, h = 0) : 120 <= t && t < 180 ? (a = 0, l = i, h = r) : 180 <= t && t < 240 ? (a = 0, l = r, h = i) : 240 <= t && t < 300 ? (a = r, l = 0, h = i) : 300 <= t && t < 360 && (a = i, l = 0, h = r), new c({
      r: H(n + a),
      g: H(n + l),
      b: H(n + h)
    });
  }
  static fromCMYK({ c: t, m: e, y: s, k: i, a: r }) {
    const n = (a) => H(
      1 - Math.min(1, a / 100 * (1 - i) + i)
    );
    return new c({ r: n(t), b: n(e), g: n(s), a: r });
  }
  static fromOklch({ l: t, c: e, h: s, a: i }) {
    t = N(1, Number(t)), e = Math.max(0, Number(e)), s = Number(s) % 360;
    const r = s * Math.PI / 180, n = e * Math.cos(r), a = e * Math.sin(r), l = t + 0.3963377774 * n + 0.2158037573 * a, h = t - 0.1055613458 * n - 0.0638541728 * a, u = t - 0.0894841775 * n - 1.291485548 * a, d = [l ** 3, h ** 3, u ** 3], b = lt([
      [4.0767416621, -3.3077115913, 0.2309699292],
      [-1.2684380046, 2.6097574011, -0.3413193965],
      [-0.0041960863, -0.7034186147, 1.707614701]
    ], d).map((C) => v(255 * ye(Math.max(0, C))));
    return new c({ r: b[0], g: b[1], b: b[2], a: B(i) });
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
    return t[3] = H(t[3]), `#${t.map((e) => e.toString(16).padStart(2, "0")).join("")}`.toUpperCase();
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
  get oklch() {
    const { r: t, g: e, b: s, a: i } = this, n = [t / 255, e / 255, s / 255].map(ve), l = lt([
      [0.4122214708, 0.5363325363, 0.0514459929],
      [0.2119034982, 0.6806995451, 0.1073969566],
      [0.0883024619, 0.2817188376, 0.6299787005]
    ], n).map(Math.cbrt), [h, u, d] = lt([
      [0.2104542553, 0.793617785, -0.0040720468],
      [1.9779984951, -2.428592205, 0.4505937099],
      [0.0259040371, 0.7827717662, -0.808675766]
    ], l), g = Math.sqrt(u ** 2 + d ** 2);
    let b = Math.atan2(d, u) * 180 / Math.PI;
    return b < 0 && (b += 360), { l: h, c: g, h: b, a: i };
  }
  get oklchString() {
    const { l: t, c: e, h: s } = this.oklch;
    return `oklch(${t} ${e} ${s})`;
  }
  get oklchaString() {
    const { l: t, c: e, h: s, a: i } = this.oklch;
    return `oklch(${t} ${e} ${s} / ${i})`;
  }
  get hslString() {
    const t = this.hsl;
    return `hsl(${t.h}, ${t.s}%, ${t.l}%)`;
  }
  get hslaString() {
    const t = this.hsl;
    return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`;
  }
  get hsvString() {
    const { h: t, s: e, v: s } = this.hsv;
    return `hsv(${t}, ${e}%, ${s}%)`;
  }
  get cmykString() {
    const t = this.cmyk;
    return `cmyk(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%)`;
  }
  get cmykaString() {
    const t = this.cmyk;
    return `cmyka(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%, ${t.a})`;
  }
  get isGrayScale() {
    return this.r === this.g && this.g === this.b;
  }
  /** Functions **/
  toString(t = "rgb") {
    switch (t) {
      case "rgb":
        return this.rgbString;
      case "hex":
        return this.hex;
      case "rgbaHex":
        return this.hexa;
      case "hsl":
        return this.hslString;
      case "hsla":
        return this.hslaString;
      case "hsv":
        return this.hsvString;
      case "cmyk":
        return this.cmykString;
      case "cmyka":
        return this.cmykaString;
      case "oklch":
        return this.oklchString;
      case "oklcha":
        return this.oklchaString;
      default:
        return this.rgbString;
    }
  }
  mix(t, e = 0.5) {
    const s = this.rgba;
    s[3] = H(s[3]);
    const i = c.parse(t).rgba;
    i[3] = H(i[3]), e = B(e);
    const r = s.map((n, a) => {
      const l = i[a], h = l < n, u = h ? n - l : l - n, d = Math.round(u * e);
      return h ? n - d : d + n;
    });
    return r[3] = D(r[3]), c.fromArray(r);
  }
  adjustSatLum(t, e, s) {
    const i = this.hsl;
    let r = i[t], n = (s ? r : 100 - r) * e;
    return i[t] = N(100, s ? r - n : r + n), i.a = this.a, c.parse(i);
  }
  lighten(t, e = !1) {
    return this.adjustSatLum("l", t, e);
  }
  darken(t) {
    return this.lighten(t, !0);
  }
  saturate(t, e = !1) {
    return t === 0 ? this : (t < 0 && (e = !0, t = -t), this.adjustSatLum("s", t, e));
  }
  desaturate(t) {
    const { h: e, l: s } = this.hsl;
    return t >= 1 ? c.fromHsl({ h: e, l: s, s: 0 }) : c.fromHsl({ h: e, l: s, s: N(100, s * (1 - t)) });
  }
  grayscale() {
    return this.desaturate(1);
  }
  rotate(t) {
    return this.hue(t);
  }
  hue(t) {
    const e = this.hsl;
    return e.h = Math.round(e.h + t) % 360, e.a = this.a, c.parse(e);
  }
  fadeIn(t, e) {
    let s = this.alpha;
    const { r: i, g: r, b: n } = this;
    let a = (1 - s) * t;
    return s = e ? s - a : s + a, c.parse({ r: i, g: r, b: n, a: s });
  }
  fadeOut(t) {
    return this.fadeIn(t, !0);
  }
  negate() {
    let t = this.rgb.map((e) => 255 - e);
    return this.a !== void 0 && t.push(this.alpha), c.fromArray(t);
  }
  toAlpha(t) {
    return c.parse({ ...this.rgbObj, a: t });
  }
  toHSVSaturation(t) {
    return c.parse({ ...this.hsv, s: t });
  }
  toHSLSaturation(t) {
    return c.parse({ ...this.hsl, s: t });
  }
  toLuminance(t) {
    return c.parse({ ...this.hsl, l: t });
  }
  toHue(t) {
    return c.fromHsl({ ...this.hsl, h: t % 360 });
  }
  toValue(t) {
    return c.parse({ ...this.hsv, v: t });
  }
  toOklchLightness(t) {
    const e = this.oklch;
    return e.l = N(1, Number(t)), c.fromOklch(e);
  }
  toChroma(t) {
    const e = this.oklch;
    return e.c = Math.max(0, Number(t)), c.fromOklch(e);
  }
  getShades(t = 10, e = "hsl", s = 0.95, i = 0.05) {
    if (t < 2) return [this];
    const r = [], n = (s - i) / (t - 1);
    if (e === "hsl") {
      const { h: a, s: l } = this.hsl;
      for (let h = 0; h < t; h++) {
        const u = s * 100 - h * n * 100;
        r.push(c.fromHsl({ h: a, s: l, l: u }));
      }
    } else {
      const { h: a, c: l, a: h } = this.oklch;
      for (let u = 0; u < t; u++) {
        const d = s - u * n;
        r.push(c.fromOklch({ l: d, c: l, h: a, a: h }));
      }
    }
    return r;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It = { ATTRIBUTE: 1 }, zt = (o) => (...t) => ({ _$litDirective$: o, values: t });
let Vt = class {
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
const ut = zt(class extends Vt {
  constructor(o) {
    var t;
    if (super(o), o.type !== It.ATTRIBUTE || o.name !== "class" || ((t = o.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
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
    return F;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt = "important", $e = " !" + qt, U = zt(class extends Vt {
  constructor(o) {
    var t;
    if (super(o), o.type !== It.ATTRIBUTE || o.name !== "style" || ((t = o.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
        const r = typeof i == "string" && i.endsWith($e);
        s.includes("-") || r ? e.setProperty(s, r ? i.slice(0, -11) : i, r ? qt : "") : e[s] = i;
      }
    }
    return F;
  }
}), Ht = (o, t, e) => {
  o.dispatchEvent(
    new CustomEvent(e, {
      bubbles: !0,
      composed: !0,
      detail: t
    })
  );
}, Xt = (o = 3, t) => {
  let e = 0, s = 100, i = 50, r = null, n = !1;
  t && (s = t.s, Object.prototype.hasOwnProperty.call(t, "v") ? (r = t.v, i = null, n = !0) : i = t.l);
  const a = [];
  let l, h;
  const u = (d, g) => `${d.css} ${(g * 100).toFixed(1)}%`;
  for (; e < 360; )
    l = c.parse(n ? { h: e, s, v: r } : { h: e, s, l: i }), h = e / 360, a.push(u(l, h)), e += o;
  return e = 359, l = c.parse(n ? { h: e, s, v: r } : { h: e, s, l: i }), h = 1, a.push(u(l, h)), a.join(", ");
}, K = $`<svg stroke='currentColor' fill='none' stroke-width='0' viewBox='0 0 24 24'>
  <path d='M13 7H7V5H13V7Z' fill='currentColor'></path>
  <path d='M13 11H7V9H13V11Z' fill='currentColor'></path>
  <path d='M7 15H13V13H7V15Z' fill='currentColor'></path>
  <path fill-rule='evenodd' clip-rule='evenodd' d='M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z' fill='currentColor'></path>
</svg>`, q = class q extends _ {
  constructor() {
    super(), this.gradient = {
      backgroundImage: `linear-gradient(90deg, ${Xt(24)})`
    }, this.width = 400, this.sliderStyle = { display: "none" };
  }
  firstUpdated() {
    this.sliderStyle = this.sliderCss(this.hue);
  }
  onSliderStart() {
    Ht(this.renderRoot, { sliding: !0 }, "sliding-hue");
  }
  onSliderEnd() {
    Ht(this.renderRoot, { sliding: !1 }, "sliding-hue");
  }
  onSliderMove({ detail: { posLeft: t } }) {
    this.selectHue({ offsetX: t });
  }
  get sliderBounds() {
    let t = this.width / 360, e = Number(this.hue) * t, s = 0 - e, i = this.width - e;
    return { min: s, max: i, posLeft: e };
  }
  get sliderCss() {
    return (t) => (t === void 0 && (t = this.hue ?? this.color.hsl.h), { backgroundColor: c.parse({ h: t, s: 100, l: 50 }).css });
  }
  willUpdate(t) {
    t.has("hue") && isFinite(this.hue) && (this.sliderStyle = this.sliderCss(this.hue));
  }
  selectHue(t) {
    let e = 360 / this.width, s = t.offsetX, i = Math.max(0, Math.min(359, Math.round(s * e)));
    this.renderRoot.querySelector("a").dispatchEvent(
      new CustomEvent("hue-update", {
        bubbles: !0,
        composed: !0,
        detail: { h: i }
      })
    ), this.sliderStyle = this.sliderCss(i);
  }
  render() {
    const { min: t, max: e, posLeft: s } = this.sliderBounds;
    return $`
      <div style=${U(this.gradient)} class='bar' @click=${this.selectHue}>
        <movable-el
          axis='x'
          .posLeft=${s}
          .boundsX=${`${t}, ${e}`}
          @movestart=${this.onSliderStart}
          @move=${this.onSliderMove}
          @moveend=${this.onSliderEnd}>
          <a class='slider' style=${U(this.sliderCss(this.hue))}></a>
        </movable-el>
      </div>
    `;
  }
};
p(q, "properties", {
  hue: { type: Number },
  color: { type: Object },
  gradient: { type: String, attribute: !1 },
  sliderStyle: { type: String, attribute: !1 },
  sliderBounds: { type: Object },
  width: { type: Number, attribute: !1 }
}), p(q, "styles", k`
    :host > div {
      display: block;
      width: ${Nt(q.width)}px;
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
  `);
let pt = q;
customElements.define("hue-bar", pt);
const Yt = k`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), #fff;
  background-repeat: repeat, repeat;
  background-position: 0 0, 6px 6px;
  background-size: 12px 12px, 12px 12px;
`, Gt = k`
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
`, Wt = k`
  color: var(--input-active-color);
  background-color: var(--input-active-bg);
  border-color: var(--input-active-border-color);
  outline: 0;
  box-shadow: var(--input-active-box-shadow);
`, xe = k`
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
      ${Gt}
    }
    :host .form-control:focus {
      ${Wt}
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
      ${Yt}
      z-index: 0;
    }
  `, we = k`
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
    ${Gt}
  }

  :host .form-control:focus {
    ${Wt}
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
    ${Yt}
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  :host div.active .transparent-checks {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`, Ae = "color-change", _e = "color-pick", Se = "color-intent", O = (o, { space: t = "hsl", source: e = "external", hsx: s = null } = {}) => ({
  color: o,
  space: t,
  source: e,
  hsx: s
}), ht = (o) => o ? o instanceof c || o.hex && o.hsl && o.rgbObj ? o : Array.isArray(o) ? c.parse(...o) : o.rgba ? c.parse(...o.rgba) : c.parse(o) : null, J = (o) => o.alpha < 1 ? o.css : o.hex, Zt = (o, t) => {
  o.dispatchEvent(
    new CustomEvent(Se, {
      bubbles: !0,
      composed: !0,
      detail: t
    })
  );
}, Dt = (o, t, e) => {
  o.dispatchEvent(
    new CustomEvent(t, {
      bubbles: !0,
      composed: !0,
      detail: {
        color: e.color,
        space: e.space,
        source: e.source
      }
    })
  );
}, Ee = {
  r: "R (red) channel",
  g: "G (green) channel",
  b: "B (blue) channel",
  h: "H (hue) channel",
  s: "S (saturation) channel",
  v: "V (value / brightness) channel",
  l: "L (luminosity) channel",
  a: "A (alpha / opacity) channel"
};
class gt extends _ {
  constructor() {
    super(...arguments);
    p(this, "valueChange", (e, s = null) => {
      s = s ?? Number(this.renderRoot.querySelector("input").value);
      const i = { ...this.c, [this.channel]: s }, r = c.parse(i), n = this.group === "rgb" ? null : i;
      Zt(this.renderRoot, {
        color: r,
        source: "channel",
        hsx: n,
        space: this.isHsl ? "hsl" : "hsv"
      });
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
    this.group === "rgb" ? e = this.color.rgbObj : e = this.hsx ?? (this.isHsl ? this.color.hsl : this.color.hsv), this.c = e;
    let s = this.group, i = this.channel;
    const r = i === "a";
    this.v = e[i], r && (this.v = Math.max(0, Math.min(this.v, 1)));
    let n = 255, a, l;
    if (s !== "rgb" || i === "a")
      if (i === "h") {
        n = this.max = 359, this.previewGradient = {
          "--preview": `linear-gradient(90deg, ${Xt(24, e)})`,
          "--pct": `${100 * (e.h / n)}%`
        };
        return;
      } else r ? n = 1 : n = 100;
    if (this.max = n, a = { ...e }, l = a, a[this.channel] = 0, a = c.parse(a), l[this.channel] = n, l = c.parse(l), this.channel === "l") {
      let h = { ...e };
      h.l = 50, this.previewGradient = {
        "--preview": `linear-gradient(90deg, ${a.hex}, ${c.parse(h).hex}, ${l.hex})`,
        "--pct": `${100 * (e[this.channel] / n)}%`
      };
    } else
      this.previewGradient = {
        "--preview": `linear-gradient(90deg, ${r ? a.css : a.hex}, ${r ? l.css : l.hex})`,
        "--pct": `${Math.min(100, Math.max(100 * (e[this.channel] / n), 0))}%`
      };
  }
  willUpdate() {
    this.setPreviewGradient();
  }
  render() {
    const e = this.channel === "a" ? $`<div class='transparent-checks'></div>` : null, s = this.channel === "a" ? 1 : this.max;
    return $`
      <div class=${ut({ active: this.active })}>
        <label for=${`channel_${this.channel}`}>${this.channel.toUpperCase()}</label>
        <input id=${`channel_${this.channel}`} aria-label=${Ee[this.channel]}
          class='form-control'
          .value=${this.channel === "a" && this.v < 1 ? Math.min(1, this.v).toFixed(2) : Math.round(this.v)}
          type='number' min='0' max=${s} .step=${this.channel === "a" ? 0.01 : 1}
          @input=${this.valueChange}
          @focus=${() => this.setActive(!0)}
          @blur=${() => this.setActive(!1)}
        />
        <div class='preview-bar' style=${U(this.previewGradient)}
             @mousedown=${this.clickPreview}>
          <div class='pct'></div>
          ${e}
        </div>
      </div>
    `;
  }
}
p(gt, "properties", {
  group: { type: String },
  channel: { type: String },
  color: { type: Object },
  /** Parent model polar coords — preferred over deriving from color.hsl/hsv. */
  hsx: { type: Object, attribute: !1 },
  isHsl: { type: Boolean },
  c: { type: Object, state: !0, attribute: !1 },
  previewGradient: { type: Object, state: !0, attribute: !1 },
  active: { type: Boolean, state: !0, attribute: !1 },
  max: { type: Number, state: !0, attribute: !1 },
  v: { type: Number, state: !0, attribute: !1 }
}), p(gt, "styles", we);
customElements.define("color-input-channel", gt);
class ft extends _ {
  constructor() {
    super(), this.isHsl = !0, this.hsx = null, this.source = "external", this.circlePos = { top: 0, left: 0, bounds: { x: "", y: "" } }, this.size = 160;
  }
  setCircleCss(t, e) {
    const s = Number(t), i = Number(e), r = this.size;
    this.circlePos = {
      top: i,
      left: s,
      bounds: {
        x: `${-s}, ${r - s}`,
        y: `${-i}, ${r - i}`
      }
    };
  }
  pickCoord({ offsetX: t, offsetY: e }) {
    let s = t, i = e;
    const { size: r, hsw: n, isHsl: a, color: l } = this;
    let h = (r - i) / r;
    h = Math.round(h * 100);
    let u = Math.round(s / r * 100);
    const d = { h: n.h, s: u, [a ? "l" : "v"]: h }, g = a ? c.fromHsl(d) : c.fromHsv(d);
    this.setCircleCss(s, i), g.a = l.alpha, Zt(this.renderRoot, {
      color: g,
      source: "canvas",
      hsx: d,
      space: a ? "hsl" : "hsv"
    });
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
    let a = t ?? (r ? i.hsl : i.hsv);
    a = { ...a }, a.w = r ? a.l : a.v;
    let { h: l, s: h, w: u } = a, d = this.hsw = { h: l, s: h, w: u }, g = n / 100;
    const Kt = r ? (w, A, it) => `hsl(${w}, ${A}%, ${100 - it}%)` : (w, A, it) => c.fromHsv({ h: w, s: A, v: 100 - it }).hex;
    let Z = e === !1 ? 4 : 1;
    for (let w = 0; w < 100; w += Z)
      for (let A = 0; A < 100; A += Z)
        s.fillStyle = Kt(l, w, A), s.fillRect(w, A, w + Z, A + Z);
    this.setCircleCss(d.s * g, n - a.w * g);
  }
  willUpdate(t) {
    if ((t.has("color") || t.has("isHsl") || t.has("hsx") || t.has("source")) && !(this.source === "canvas" && !t.has("isHsl"))) {
      if (this.hsx) {
        this.paintHSL(this.hsx);
        return;
      }
      this.paintHSL();
    }
  }
  firstUpdated() {
    const t = this.renderRoot.querySelector("canvas");
    this.ctx = t.getContext("2d"), this.paintHSL(this.hsx);
  }
  circleMove({ posTop: t, posLeft: e }) {
    this.pickCoord({ offsetX: e, offsetY: t });
  }
  render() {
    const t = { height: this.size + "px", width: this.size + "px" }, { top: e, left: s, bounds: i } = this.circlePos;
    return $`
      <div class='outer' @click=${this.pickCoord} style=${U(t)}>
        <canvas height='100' width='100'></canvas>
        <movable-el
          .posTop=${e}
          .posLeft=${s}
          .boundsX=${i.x}
          .boundsY=${i.y}
          @move=${(r) => this.circleMove(r.detail)}>
          <div class='circle'></div>
        </movable-el>
      </div>
    `;
  }
}
p(ft, "properties", {
  color: { type: Object },
  /** Explicit polar coords from the parent model (not mutated onto Color). */
  hsx: { type: Object, attribute: !1 },
  /** Provenance of the last model write — skip gradient rebuild when we were the source. */
  source: { type: String, attribute: !1 },
  isHsl: { type: Boolean },
  size: { type: Number },
  debounceMode: { type: Boolean },
  ctx: { type: Object, state: !0, attribute: !1 },
  hsw: { type: Object, state: !0, attribute: !1 },
  circlePos: { type: Object, state: !0, attribute: !1 }
}), p(ft, "styles", k`
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
  `);
customElements.define("hsl-canvas", ft);
const x = (o) => isFinite(o) ? Number(o) : Number(String(o).replace(/[^0-9.\-]/g, "")), Bt = (o) => (o = Number(o), (isNaN(o) || [void 0, null].includes(o)) && (o = 0), o);
class m {
  constructor(t, e) {
    this.x = Bt(t), this.y = Bt(e);
  }
  static fromPointerEvent(t) {
    const { pageX: e, pageY: s } = t;
    return new m(e, s);
  }
  static fromElementStyle(t) {
    const e = x(t.style.left ?? 0), s = x(t.style.top ?? 0);
    return new m(e, s);
  }
  static fromObject({ x: t, y: e }) {
    return new m(t, e);
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
const Fe = (o) => {
  const t = m.fromPointerEvent(o), e = o.target.getBoundingClientRect(), s = t.x - (e.left + document.body.scrollLeft), i = t.y - (e.top + document.body.scrollTop);
  return new m(s, i);
};
class y {
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
      return new y();
    if (t === "null")
      return new y(e, e);
    const [s, i] = t.split(",").map((n) => Number(n.trim()) + e), r = new y(s, i);
    return r.attr = t, r;
  }
}
class et extends _ {
  constructor() {
    super();
    p(this, "_target");
    p(this, "_targetSelector", null);
    p(this, "_boundsX", new y());
    p(this, "_boundsY", new y());
    p(this, "_axis", null);
    p(this, "_posTop", null);
    p(this, "_posLeft", null);
    p(this, "_grid", 1);
    p(this, "_dragAfterDist", 0);
    p(this, "_boundsXAttr", null);
    p(this, "_boundsYAttr", null);
    p(this, "_pointerBound", !1);
    p(this, "_dragArmed", !1);
    p(this, "_thresholdMet", !1);
    p(this, "pointerId");
    p(this, "isMoving", !1);
    p(this, "moveState", {});
    this._onPointerDown = (e) => this.pointerdown(e), this._onPointerMove = (e) => {
      this.pointerId !== void 0 && e.pointerId === this.pointerId && this.motionHandler(e);
    }, this._onPointerEnd = (e) => {
      this._dragArmed && this.unbind(e);
    };
  }
  set posTop(e) {
    e = Number(e), this._posTop = e, this.target && !this.eventsOnly && (this.target.style.top = e + "px");
  }
  get posTop() {
    return this._posTop;
  }
  set posLeft(e) {
    e = Number(e), this._posLeft = e, this.target && !this.eventsOnly && (this.target.style.left = e + "px");
  }
  get posLeft() {
    return this._posLeft;
  }
  get grid() {
    return this._grid;
  }
  set grid(e) {
    e > 0 && e < 1 / 0 ? this._grid = e : this._grid = 1;
  }
  get dragAfterDist() {
    return this._dragAfterDist;
  }
  set dragAfterDist(e) {
    const s = Number(e);
    this._dragAfterDist = s > 0 ? s : 0;
  }
  get bounds() {
    return {
      left: this._boundsX,
      top: this._boundsY
    };
  }
  set targetSelector(e) {
    this._targetSelector = e, this._retryTarget = document.querySelector(e) === null, this._target = document.querySelector(e);
  }
  get targetSelector() {
    return this._targetSelector;
  }
  get target() {
    return this._target ?? this;
  }
  set target(e) {
    this._target = e;
  }
  get boundsX() {
    return this._boundsX;
  }
  set boundsX(e) {
    var s;
    this._boundsXAttr = e, this._boundsX = y.fromString(e, x(((s = this.target) == null ? void 0 : s.style.left) ?? 0));
  }
  get boundsY() {
    return this._boundsY;
  }
  set boundsY(e) {
    var s;
    this._boundsYAttr = e, this._boundsY = y.fromString(e, x(((s = this.target) == null ? void 0 : s.style.top) ?? 0));
  }
  get axis() {
    return this._axis;
  }
  set axis(e) {
    const s = e === "x" || e === "y" ? e : null;
    this._axis = s, this.applyAxisLock();
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("pointermove", this._onPointerMove), this.addEventListener("pointerup", this._onPointerEnd), this.addEventListener("pointercancel", this._onPointerEnd), this.addEventListener("lostpointercapture", this._onPointerEnd), this._pointerBound = !0;
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this._pointerBound && (this.removeEventListener("pointermove", this._onPointerMove), this.removeEventListener("pointerup", this._onPointerEnd), this.removeEventListener("pointercancel", this._onPointerEnd), this.removeEventListener("lostpointercapture", this._onPointerEnd), this._pointerBound = !1), (e = this.renderRoot) == null || e.removeEventListener("pointerdown", this._onPointerDown), this._dragArmed && this.unbind();
  }
  firstUpdated() {
    this._retryTarget && (this.target = document.querySelector(this.targetSelector));
    const { target: e, posTop: s, posLeft: i } = this, {
      offsetLeft: r,
      offsetTop: n,
      style: { left: a, top: l }
    } = this.target;
    e.classList.add("--movable-base"), this.renderRoot.addEventListener("pointerdown", this._onPointerDown), getComputedStyle(e).position === "static" && (e.style.position = "absolute"), this.style.touchAction = "none", e.style.touchAction = "none", i != null ? e.style.left = Number(i) + "px" : !a && r && (e.style.left = r + "px"), s != null ? e.style.top = Number(s) + "px" : !l && n && (e.style.top = n + "px"), this._boundsXAttr != null && (this._boundsX = y.fromString(
      this._boundsXAttr,
      x(e.style.left ?? 0)
    )), this._boundsYAttr != null && (this._boundsY = y.fromString(
      this._boundsYAttr,
      x(e.style.top ?? 0)
    )), this.syncConstrainedBounds(), this.applyAxisLock();
  }
  /** Pin constrained axes to the target's current left/top. */
  syncConstrainedBounds() {
    const { bounds: e, target: s } = this, i = x(s.style.left ?? 0), r = x(s.style.top ?? 0);
    e.left.constrained && (e.left.min = e.left.max = i), e.top.constrained && (e.top.min = e.top.max = r);
  }
  /** Lock the orthogonal axis when axis="x"|"y". */
  applyAxisLock() {
    if (!this.target)
      return;
    const e = x(this.target.style.left ?? 0), s = x(this.target.style.top ?? 0);
    this._axis === "x" ? this._boundsY = new y(s, s) : this._axis === "y" && (this._boundsX = new y(e, e));
  }
  hasHandleSlot() {
    var e, s;
    return (((s = (e = this.renderRoot) == null ? void 0 : e.querySelector('slot[name="handle"]')) == null ? void 0 : s.assignedElements({ flatten: !0 })) ?? []).length > 0;
  }
  isEventOnHandle(e) {
    if (!this.hasHandleSlot())
      return !0;
    const s = this.renderRoot.querySelector('slot[name="handle"]').assignedElements({ flatten: !0 }), i = e.composedPath();
    return s.some((r) => i.includes(r));
  }
  reposition(e) {
    if (typeof e == "object") {
      const { eventsOnly: s, target: i } = this;
      this.posTop = e.top, this.posLeft = e.left, i && !s && (i.style.left = e.left + "px", i.style.top = e.top + "px");
    } else
      this.isMoving = e;
  }
  detailState() {
    return {
      coords: this.moveState.coords,
      startCoord: this.moveState.startCoord,
      moveDist: this.moveState.moveDist,
      totalDist: this.moveState.totalDist,
      mouseCoord: this.moveState.mouseCoord,
      clickOffset: this.moveState.clickOffset,
      posTop: this.posTop,
      posLeft: this.posLeft,
      pctX: this.moveState.pctX,
      pctY: this.moveState.pctY,
      isMoving: this.isMoving
    };
  }
  eventBroker(e) {
    const s = this.detailState();
    this.dispatchEvent(
      new CustomEvent(e, {
        bubbles: !0,
        composed: !0,
        detail: s
      })
    );
    const i = this[`on${e}`];
    typeof i == "function" && i(s);
  }
  moveInit(e) {
    const s = this.moveState, { target: i, bounds: r } = this;
    s.mouseCoord = m.fromPointerEvent(e), s.startCoord = m.fromElementStyle(i), s.moveDist = new m(0, 0), s.totalDist = new m(0, 0), s.clickOffset = Fe(e), s.coords = m.fromObject(s.startCoord), s.maxX = isFinite(r.left.min) && isFinite(r.left.max) ? r.left.min + r.left.max : 1 / 0, s.maxY = isFinite(r.top.min) && isFinite(r.top.max) ? r.top.min + r.top.max : 1 / 0, this._thresholdMet = this._dragAfterDist <= 0, this._dragArmed = !0, this.isMoving = this._thresholdMet, this._thresholdMet && this.eventBroker("movestart");
  }
  unbind() {
    const e = this.pointerId;
    if (this.pointerId = null, e != null)
      try {
        this.hasPointerCapture(e) && this.releasePointerCapture(e);
      } catch {
      }
    this.moveEnd();
  }
  moveEnd() {
    const e = this._thresholdMet && this.isMoving;
    this._dragArmed = !1, e ? (this.isMoving = this.moveState.isMoving = !1, this.eventBroker("moveend")) : (this.isMoving = !1, this._thresholdMet = !1);
  }
  motionHandler(e) {
    if (!this._dragArmed)
      return;
    e.stopPropagation();
    const s = m.fromPointerEvent(e), i = this.moveState, { grid: r, bounds: n, shiftBehavior: a } = this;
    if (i.moveDist = m.fromObject({
      x: s.x - i.mouseCoord.x,
      y: s.y - i.mouseCoord.y
    }), i.mouseCoord = s, i.totalDist = m.fromObject({
      x: i.totalDist.x + i.moveDist.x,
      y: i.totalDist.y + i.moveDist.y
    }), !this._thresholdMet) {
      if (Math.hypot(i.totalDist.x, i.totalDist.y) < this._dragAfterDist)
        return;
      this._thresholdMet = !0, this.isMoving = !0, this.eventBroker("movestart");
    }
    if (i.coords = m.fromObject({
      x: Math.round(i.totalDist.x / r) * r + i.startCoord.x,
      y: Math.round(i.totalDist.y / r) * r + i.startCoord.y
    }), a && e.shiftKey && n.left.unconstrained && n.top.unconstrained) {
      const { x: l, y: h } = i.totalDist;
      Math.abs(l) > Math.abs(h) ? i.coords.top = i.startCoord.y : i.coords.left = i.startCoord.x;
    } else
      i.coords.y = Math.min(
        Math.max(n.top.min, i.coords.top),
        n.top.max
      ), i.coords.x = Math.min(
        Math.max(n.left.min, i.coords.left),
        n.left.max
      );
    isFinite(i.maxX) && (i.pctX = Math.max(n.left.min, i.coords.left) / i.maxX), isFinite(i.maxY) && (i.pctY = Math.max(n.top.min, i.coords.top) / i.maxY), this.reposition(i.coords), this.eventBroker("move");
  }
  pointerdown(e) {
    if (!(this.disabled || !this.isEventOnHandle(e))) {
      if (e.preventDefault(), e.stopPropagation(), e.pointerId !== void 0) {
        this.pointerId = e.pointerId;
        try {
          this.setPointerCapture(e.pointerId);
        } catch {
        }
      }
      this.moveInit(e);
    }
  }
  render() {
    return $`
      <slot name="handle"></slot>
      <slot></slot>
    `;
  }
}
p(et, "styles", k`
    :host {
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
    }
  `), p(et, "properties", {
  posLeft: { type: Number },
  posTop: { type: Number },
  target: { type: Object, attribute: !1, state: !0 },
  targetSelector: { type: String },
  bounds: { type: Object, attribute: !1, state: !0 },
  boundsX: { type: String },
  boundsY: { type: String },
  axis: { type: String },
  grid: { type: Number },
  dragAfterDist: { type: Number },
  shiftBehavior: {
    type: Boolean,
    converter: (e) => e !== null && e !== "false"
  },
  disabled: {
    type: Boolean,
    converter: (e) => e !== null && e !== "false"
  },
  eventsOnly: {
    type: Boolean,
    converter: (e) => e !== null && e !== "false"
  },
  onmovestart: { type: Object, attribute: !1 },
  onmoveend: { type: Object, attribute: !1 },
  onmove: { type: Object, attribute: !1 }
});
window.customElements.get("movable-el") || window.customElements.define("movable-el", et);
class ke extends et {
}
window.customElements.get("lit-movable") || window.customElements.define("lit-movable", ke);
class bt extends _ {
  constructor() {
    super();
    /** Guard so reflecting `value` does not re-parse into a feedback loop. */
    p(this, "_syncingValue", !1);
    const e = c.parse(dt.slateblue);
    this.model = O(e, { space: "hsl", source: "external" }), this.hex = e.hex, this.value = J(e), this.isHsl = !0, this.debounceMode = !1;
  }
  /** Imperative / demo API — the live Color instance. */
  get color() {
    return this.model.color;
  }
  set color(e) {
    const s = ht(e);
    s && this.applyModel(
      O(s, {
        space: this.isHsl ? "hsl" : "hsv",
        source: "external",
        hsx: null
      })
    );
  }
  /**
   * Single write path for picker state.
   * @param {import('./color-state.js').ColorModel} model
   * @param {{ emit?: boolean }} [opts]
   */
  applyModel(e, { emit: s = !0 } = {}) {
    this.model = e, this.hex = e.color.hex;
    const i = J(e.color);
    this.value !== i && (this._syncingValue = !0, this.value = i, this._syncingValue = !1), s && Dt(this, Ae, e);
  }
  willUpdate(e) {
    if (e.has("value") && !this._syncingValue) {
      const s = ht(this.value);
      s && J(s) !== J(this.model.color) && this.applyModel(
        O(s, {
          space: this.isHsl ? "hsl" : "hsv",
          source: "external",
          hsx: null
        }),
        { emit: !0 }
      );
    }
    if (e.has("isHsl")) {
      const s = this.isHsl ? "hsl" : "hsv";
      this.model.space !== s && (this.model = O(this.model.color, {
        space: s,
        source: "external",
        hsx: null
      }));
    }
  }
  /** Child `color-intent` → update model. */
  onColorIntent({ detail: e }) {
    const { color: s, source: i, hsx: r = null, space: n } = e;
    this.applyModel(
      O(s, {
        source: i,
        hsx: r,
        space: n ?? (this.isHsl ? "hsl" : "hsv")
      })
    );
  }
  /** Hex / free-text field. */
  setColorFromInput() {
    const e = this.renderRoot.querySelector("input#hex").value, s = ht(e);
    if (!s) {
      console.log(`ignored unparsable input: ${e}`);
      return;
    }
    this.applyModel(
      O(s, {
        source: "input",
        space: this.isHsl ? "hsl" : "hsv",
        hsx: null
      })
    );
  }
  /** Hue bar only sends `{ h }`; parent merges into current HS* coords. */
  setHue({ detail: { h: e } }) {
    const s = this.isHsl ? "hsl" : "hsv", r = { ...this.model.hsx ?? (this.isHsl ? this.color.hsl : this.color.hsv), h: e };
    let n = this.isHsl ? c.fromHsl(r) : c.fromHsv(r);
    n.a = this.color.alpha, this.applyModel(O(n, { source: "hue", space: s, hsx: r }));
  }
  setHsl(e) {
    this.isHsl = e;
  }
  okColor() {
    Dt(this, _e, this.model);
  }
  showCopyDialog() {
    if (this.copied = null, this.dlg = this.dlg ?? this.renderRoot.querySelector("dialog"), this.dlg.open)
      return this.dlg.classList.remove("open"), this.dlg.close();
    this.dlg.show(), this.dlg.classList.add("open");
  }
  clipboard(e) {
    const s = this.color.toString(e);
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
    const { color: e, hsx: s, source: i } = this.model, r = (s == null ? void 0 : s.h) ?? e.hsl.h, n = this.isHsl ? ["h", "s", "l"] : ["h", "s", "v"], a = { button: !0, active: !this.isHsl, l: !0 }, l = { button: !0, active: this.isHsl, r: !0 }, h = { backgroundColor: e }, u = this.copied ? { textAlign: "center", display: "block" } : { display: "none" };
    return $`
      <div class='outer' @color-intent=${this.onColorIntent}>
        <hue-bar
          @sliding-hue=${this.setSliding}
          .hue=${r}
          @hue-update=${this.setHue}
          .color=${e}></hue-bar>
        <div class='d-flex'>
          <div class='col w-30'>
            ${["r", "g", "b", "a"].map(
      (d) => $`
                <color-input-channel
                  group='rgb'
                  channel=${d}
                  .isHsl=${this.isHsl}
                  .color=${e}
                  .hsx=${s}></color-input-channel>
              `
    )}
            <div class='hex'>
              <dialog @blur=${() => this.hideCopyDialog()} tabindex='0'>
                <sub class='copied' style=${U(u)}>copied <em>${this.copied}</em></sub>
                ${this.copied ? $`` : $`
                      <a class='copy-item' @click=${() => this.clipboard("hex")} id='copyHex'>
                        <input class='form-control' disabled value=${e.hex}>
                        <button title='Copy HEX String' class='button' tabindex='0'>${K}</button>
                      </a>
                      <a class='copy-item' @click=${() => this.clipboard("css")} id='copyRgb'>
                        <input class='form-control' disabled value=${e.css}>
                        <button title='Copy RGB String' class='button' tabindex='0'>${K}</button>
                      </a>
                      <a class='copy-item' id='copyHsl'
                         @click=${() => this.clipboard(e.alpha < 1 ? "hsla" : "hsl")}>
                        <input class='form-control' disabled
                               value=${e.toString(e.alpha < 1 ? "hsla" : "hsl")}>
                        <button title='Copy HSL String' class='button' tabindex='0'>${K}</button>
                      </a>
                    `}
              </dialog>
              <label for='hex'>#</label>
              <input aria-label='Hexadecimal value (editable - accepts any valid color string)'
                     @input=${this.setColorFromInput} class='form-control' id='hex'
                     placeholder='Set color' .value=${this.hex}>
              <a title='Show copy to clipboard menu' @click=${this.showCopyDialog} class='button copy'>
                ${K}
                <span>&#11205;</span>
              </a>
            </div>
          </div>
          <div class='col w-30'>
            ${n.map(
      (d) => $`
                <color-input-channel
                  group='hsl'
                  channel=${d}
                  .isHsl=${this.isHsl}
                  .color=${e}
                  .hsx=${s}></color-input-channel>
              `
    )}
            <div class='hsl-mode'>
              <a title='Use hue / saturation / value (brightness) mode'
                 class=${ut(a)}
                 @click=${() => this.setHsl(!1)}>HSV</a><a
                title='Use hue / saturation / luminosity mode'
                class=${ut(l)}
                @click=${() => this.setHsl(!0)}>HSL</a>
            </div>
          </div>
          <div class='w-40'>
            <hsl-canvas
              .debounceMode=${this.debounceMode}
              .size=${160}
              .isHsl=${this.isHsl}
              .color=${e}
              .hsx=${s}
              .source=${i}></hsl-canvas>
            <div class='ok'>
              <a class='button' @click=${this.okColor}>OK
                <span class='swatch'>
                  <span style=${U(h)}></span>
                  <span class='checky'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
p(bt, "properties", {
  /** @type {import('./color-state.js').ColorModel} */
  model: { type: Object, state: !0, attribute: !1 },
  hex: { type: String, state: !0, attribute: !1 },
  value: { type: String, reflect: !0 },
  isHsl: { type: Boolean, state: !0, attribute: !1 },
  copied: { type: String },
  debounceMode: { type: Boolean, state: !0, attribute: !1 }
}), p(bt, "styles", xe);
window.customElements.get("color-picker") || window.customElements.define("color-picker", bt);
export {
  Ae as COLOR_CHANGE,
  Se as COLOR_INTENT,
  _e as COLOR_PICK,
  bt as ColorPicker,
  J as colorToValue,
  O as createColorModel,
  ht as parseColor
};
