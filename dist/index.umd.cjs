(function(_,b){typeof exports=="object"&&typeof module<"u"?b(exports):typeof define=="function"&&define.amd?define(["exports"],b):(_=typeof globalThis<"u"?globalThis:_||self,b(_["color-picker"]={}))})(this,function(_){"use strict";var Ms=Object.defineProperty;var Ps=(_,b,C)=>b in _?Ms(_,b,{enumerable:!0,configurable:!0,writable:!0,value:C}):_[b]=C;var x=(_,b,C)=>Ps(_,typeof b!="symbol"?b+"":b,C);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe;const b=globalThis,C=b.ShadowRoot&&(b.ShadyCSS===void 0||b.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),jt=new WeakMap;let zt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(C&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=jt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&jt.set(e,t))}return t}toString(){return this.cssText}};const It=o=>new zt(typeof o=="string"?o:o+"",void 0,At),U=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new zt(e,o,At)},Ne=(o,t)=>{if(C)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=b.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},Vt=C?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return It(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Re,defineProperty:Le,getOwnPropertyDescriptor:je,getOwnPropertyNames:ze,getOwnPropertySymbols:Ie,getPrototypeOf:Ve}=Object,F=globalThis,qt=F.trustedTypes,qe=qt?qt.emptyScript:"",wt=F.reactiveElementPolyfillSupport,Q=(o,t)=>o,St={toAttribute(o,t){switch(t){case Boolean:o=o?qe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Xt=(o,t)=>!Re(o,t),Wt={attribute:!0,type:String,converter:St,reflect:!1,useDefault:!1,hasChanged:Xt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);let V=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Le(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=je(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);r==null||r.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Wt}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;const t=Ve(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){const e=this.properties,s=[...ze(e),...Ie(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Vt(i))}else t!==void 0&&e.push(Vt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:St).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var r,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:St;this._$Em=i,this[i]=l.fromAttribute(e,a.type)??((n=this._$Ej)==null?void 0:n.get(i))??null,this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){const r=this.constructor,n=this[t];if(s??(s=r.getPropertyOptions(t)),!((s.hasChanged??Xt)(n,e)||s.useDefault&&s.reflect&&n===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i){const{wrapped:a}=n,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[Q("elementProperties")]=new Map,V[Q("finalized")]=new Map,wt==null||wt({ReactiveElement:V}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,ut=tt.trustedTypes,Yt=ut?ut.createPolicy("lit-html",{createHTML:o=>o}):void 0,Zt="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+k,Xe=`<${Gt}>`,O=document,et=()=>O.createComment(""),st=o=>o===null||typeof o!="object"&&typeof o!="function",Et=Array.isArray,We=o=>Et(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Ct=`[
\f\r]`,it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kt=/-->/g,Jt=/>/g,T=RegExp(`>|${Ct}(?:([^\\s"'>=/]+)(${Ct}*=${Ct}*(?:[^
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qt=/'/g,te=/"/g,ee=/^(?:script|style|textarea|title)$/i,Ye=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),A=Ye(1),H=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),se=new WeakMap,B=O.createTreeWalker(O,129);function ie(o,t){if(!Et(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yt!==void 0?Yt.createHTML(t):t}const Ze=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",n=it;for(let a=0;a<e;a++){const l=o[a];let h,d,c=-1,p=0;for(;p<l.length&&(n.lastIndex=p,d=n.exec(l),d!==null);)p=n.lastIndex,n===it?d[1]==="!--"?n=Kt:d[1]!==void 0?n=Jt:d[2]!==void 0?(ee.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=T):d[3]!==void 0&&(n=T):n===T?d[0]===">"?(n=i??it,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?T:d[3]==='"'?te:Qt):n===te||n===Qt?n=T:n===Kt||n===Jt?n=it:(n=T,i=void 0);const m=n===T&&o[a+1].startsWith("/>")?" ":"";r+=n===it?l+Xe:c>=0?(s.push(h),l.slice(0,c)+Zt+l.slice(c)+k+m):l+k+(c===-2?a:m)}return[ie(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let Ft=class Te{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const a=t.length-1,l=this.parts,[h,d]=Ze(t,e);if(this.el=Te.createElement(h,s),B.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=B.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Zt)){const p=d[n++],m=i.getAttribute(c).split(k),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:w[2],strings:m,ctor:w[1]==="."?Ke:w[1]==="?"?Je:w[1]==="@"?Qe:pt}),i.removeAttribute(c)}else c.startsWith(k)&&(l.push({type:6,index:r}),i.removeAttribute(c));if(ee.test(i.tagName)){const c=i.textContent.split(k),p=c.length-1;if(p>0){i.textContent=ut?ut.emptyScript:"";for(let m=0;m<p;m++)i.append(c[m],et()),B.nextNode(),l.push({type:2,index:++r});i.append(c[p],et())}}}else if(i.nodeType===8)if(i.data===Gt)l.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(k,c+1))!==-1;)l.push({type:7,index:r}),c+=k.length-1}r++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}};function q(o,t,e=o,s){var n,a;if(t===H)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const r=st(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=q(o,i._$AS(o,t.values),i,s)),t}let Ge=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??O).importNode(e,!0);B.currentNode=i;let r=B.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new kt(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new ts(r,this,t)),this._$AV.push(h),l=s[++a]}n!==(l==null?void 0:l.index)&&(r=B.nextNode(),n++)}return B.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},kt=class Be{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),st(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):We(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&st(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ft.createElement(ie(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const n=new Ge(i,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=se.get(t.strings);return e===void 0&&se.set(t.strings,e=new Ft(t)),e}k(t){Et(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Be(this.O(et()),this.O(et()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=q(this,t,e,0),n=!st(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=q(this,a[s+l],e,l),h===H&&(h=this._$AH[l]),n||(n=!st(h)||h!==this._$AH[l]),h===f?t=f:t!==f&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}n&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class Ke extends pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}let Je=class extends pt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},Qe=class extends pt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??f)===H)return;const s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},ts=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}};const Ht=tt.litHtmlPolyfillSupport;Ht==null||Ht(Ft,kt),(tt.litHtmlVersions??(tt.litHtmlVersions=[])).push("3.3.0");const es=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new kt(t.insertBefore(et(),r),r,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis;let M=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=es(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return H}};M._$litElement$=!0,M.finalized=!0,(Oe=N.litElementHydrateSupport)==null||Oe.call(N,{LitElement:M});const Mt=N.litElementPolyfillSupport;Mt==null||Mt({LitElement:M}),(N.litElementVersions??(N.litElementVersions=[])).push("4.2.0");const v=o=>ft(255,Math.round(Number(o))),R=o=>v(o*255),L=o=>ft(1,o/255),ft=(o,t)=>Math.max(0,Math.min(o,t)),X=o=>o===void 0?1:(typeof o=="string"&&o.indexOf("%")>0&&(o=Number(o.split("%")[0])/100),o=Number(Number(o).toFixed(3)),isNaN(o)?1:ft(1,o)),Pt={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};class u{constructor(t,e,s,i){return u.isBaseConstructor(t)?(this.r=v(t.r),this.g=v(t.g),this.b=v(t.b),t.a!==void 0&&(this.a=X(t.a)),this):u.parse(t,e,s,i)}static parse(t,e,s,i){if(u.isBaseConstructor(t))return new u(t);if(e!==void 0&&s!==void 0){let r=v(t);return e=v(e),s=v(s),i!==void 0&&(i=X(i)),new u({r,g:e,b:s,a:i})}if(Array.isArray(t))return u.fromArray(t);if(typeof t=="string"){let r;if(e!==void 0&&Number(e)<=1&&Number(e)>=0&&(r=Number(e)),t.startsWith("#"))return u.fromHex(t,r);if(Pt[t.toLowerCase()])return u.fromNamed(t,r);if(t.startsWith("rgb"))return u.fromRgbString(t);if(t==="transparent"){let n,a,l,h;return n=a=l=h=0,new u({r:n,g:a,b:l,a:h})}else return null}else if(typeof t=="object"){if(t.a!==void 0&&(this.a=X(t.a)),t.h!==void 0){let r={};if(t.v!==void 0)r=u.fromHsv(t);else if(t.l!==void 0)r=u.fromHsl(t);else return u.fromArray([0,0,0]);return r.a=t.a!==void 0?X(t.a):void 0,new u(r)}return t.c!==void 0?u.fromCMYK(t):this}return u.fromArray([0,0,0])}static isBaseConstructor(t){return typeof t=="object"&&t.r!==void 0&&t.g!==void 0&&t.b!==void 0}static fromNamed(t,e){return u.fromHex(Pt[t.toLowerCase()],e)}static fromArray(t){t=t.filter(s=>s!==""&&isFinite(s));const e={r:v(t[0]),g:v(t[1]),b:v(t[2])};return t[3]!==void 0&&(e.a=X(t[3])),new u(e)}static fromHex(t,e){t=t.replace("#",""),(t.length===3||t.length===4)&&(t=t.split("").map(i=>i+i).join(""));let s=t.match(/[A-Za-z0-9]{2}/g).map(i=>parseInt(i,16));return s.length===4?s[3]/=255:e!==void 0&&(s[3]=e),u.fromArray(s)}static fromRgbString(t){if(t.includes(","))return u.fromArray(t.split("(")[1].split(")")[0].split(","));const e=t.replace("/"," ").split("(")[1].replace(")","").split(" ").filter(s=>s!==""&&isFinite(Number(s)));return u.fromArray(e)}static fromHsv({h:t,s:e,v:s}){e=e/100,s=s/100;const i=Math.floor(t/60%6),r=t/60-i,n=s*(1-e),a=s*(1-r*e),l=s*(1-(1-r)*e),d=[[s,l,n],[a,s,n],[n,s,l],[n,a,s],[l,n,s],[s,n,a]][i].map(c=>Math.round(c*256));return new u({r:v(d[0]),g:v(d[1]),b:v(d[2])})}static fromHsl({h:t,s:e,l:s}){e/=100,s/=100;const i=(1-Math.abs(2*s-1))*e,r=i*(1-Math.abs(t/60%2-1)),n=s-i/2;let a=0,l=0,h=0;return 0<=t&&t<60?(a=i,l=r,h=0):60<=t&&t<120?(a=r,l=i,h=0):120<=t&&t<180?(a=0,l=i,h=r):180<=t&&t<240?(a=0,l=r,h=i):240<=t&&t<300?(a=r,l=0,h=i):300<=t&&t<360&&(a=i,l=0,h=r),new u({r:R(n+a),g:R(n+l),b:R(n+h)})}static fromCMYK({c:t,m:e,y:s,k:i,a:r}){const n=a=>R(1-Math.min(1,a/100*(1-i)+i));return new u({r:n(t),b:n(e),g:n(s),a:r})}get alpha(){return this.a===void 0?1:this.a}get rgb(){return[this.r,this.g,this.b]}get rgba(){return[this.r,this.g,this.b,this.alpha]}get rgbObj(){let{r:t,g:e,b:s}=this;return{r:t,g:e,b:s,a:this.alpha}}get css(){return this.rgbString}get rgbString(){return this.a===void 0?`rgb(${this.rgb.join(",")})`:`rgba(${this.rgba.join(",")})`}get rgbaString(){return`rgba(${this.rgba.join(",")})`}get hex(){return`#${this.rgb.map(t=>t.toString(16).padStart(2,"0")).join("")}`.toUpperCase()}get hexa(){return this.rgbaHex}get rgbaHex(){let t=this.rgba;return t[3]=R(t[3]),`#${t.map(e=>e.toString(16).padStart(2,"0")).join("")}`.toUpperCase()}get hsv(){const t=L(this.r),e=L(this.g),s=L(this.b),i=Math.min(t,e,s),r=Math.max(t,e,s);let n;const a=r,l=r-i;l===0?n=0:r===t?n=60*((e-s)/l)%360:r===e?n=60*((s-t)/l)+120:r===s?n=60*((t-e)/l)+240:n=0,n<0&&(n+=360);const h=r===0?0:1-i/r;return{h:Math.round(n),s:Math.round(h*100),v:Math.round(a*100),a:this.alpha}}get hsl(){const t=L(this.r),e=L(this.g),s=L(this.b),i=Math.max(t,e,s),r=Math.min(t,e,s);let n,a;const l=(i+r)/2;if(i===r)n=a=0;else{const h=i-r;switch(a=l>.5?h/(2-i-r):h/(i+r),i){case t:n=(e-s)/h+(e<s?6:0);break;case e:n=(s-t)/h+2;break;case s:n=(t-e)/h+4;break}n/=6}return{h:Math.round(n*360),s:Math.round(a*100),l:Math.round(l*100),a:this.alpha}}get cmyk(){let t,e,s,i;const r=parseFloat(this.r)/255,n=parseFloat(this.g)/255,a=parseFloat(this.b)/255;return i=1-Math.max(r,n,a),i===1?t=e=s=0:(t=(1-r-i)/(1-i),e=(1-n-i)/(1-i),s=(1-a-i)/(1-i)),t=Math.round(100*t),e=Math.round(100*e),s=Math.round(100*s),i=Math.round(100*i),this.alpha?{c:t,m:e,y:s,k:i,a:this.alpha}:{c:t,m:e,y:s,k:i}}get hslString(){const t=this.hsl;return`hsl(${t.h}, ${t.s}%, ${t.l}%)`}get hslaString(){const t=this.hsl;return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`}get cmykString(){const t=this.cmyk;return`cmyk(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%)`}get cmykaString(){const t=this.cmyk;return`cmyka(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%, ${t.a})`}toString(t="rgb"){let e;switch(t){case"rgb":e=this.rgbString;break;case"hex":e=this.hex;break;case"rgbaHex":e=this.hexa;break;case"hsl":e=this.hslString;break;case"hsla":e=this.hslaString;break;case"cmyk":e=this.cmykString;break;case"cmyka":e=this.cmykaString;break;default:e=this.rgbString;break}return e}mix(t,e=.5){const s=this.rgba;s[3]=R(s[3]);const i=new u(t).rgba;i[3]=R(i[3]),e=X(e);const r=s.map((n,a)=>{const l=i[a],h=l<n,d=h?n-l:l-n,c=Math.round(d*e);return h?n-c:c+n});return r[3]=L(r[3]),u.fromArray(r)}adjustSatLum(t,e,s){const i=this.hsl;let r=i[t],n=(s?r:100-r)*e;return i[t]=ft(100,s?r-n:r+n),i.a=this.a,new u(i)}lighten(t,e=!1){return this.adjustSatLum("l",t,e)}darken(t){return this.lighten(t,!0)}saturate(t,e=!1){return this.adjustSatLum("s",t,e)}desaturate(t){return this.saturate(t,!0)}grayscale(){return this.desaturate(1)}rotate(t){return this.hue(t)}hue(t){const e=this.hsl;return e.h=Math.round(e.h+t)%360,e.a=this.a,new u(e)}fadeIn(t,e){let s=this.alpha;const{r:i,g:r,b:n}=this;let a=(1-s)*t;return s=e?s-a:s+a,u({r:i,g:r,b:n,a:s})}fadeOut(t){return this.fadeIn(t,!0)}negate(){let t=this.rgb.map(e=>255-e);return this.a!==void 0&&t.push(this.alpha),u.fromArray(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re={ATTRIBUTE:1},oe=o=>(...t)=>({_$litDirective$:o,values:t});let ne=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=oe(class extends ne{constructor(o){var t;if(super(o),o.type!==re.ATTRIBUTE||o.name!=="class"||((t=o.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var s,i;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((s=this.nt)!=null&&s.has(r))&&this.st.add(r);return this.render(t)}const e=o.element.classList;for(const r of this.st)r in t||(e.remove(r),this.st.delete(r));for(const r in t){const n=!!t[r];n===this.st.has(r)||(i=this.nt)!=null&&i.has(r)||(n?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return H}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le="important",ss=" !"+le,W=oe(class extends ne{constructor(o){var t;if(super(o),o.type!==re.ATTRIBUTE||o.name!=="style"||((t=o.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const s=o[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const i=t[s];if(i!=null){this.ft.add(s);const r=typeof i=="string"&&i.endsWith(ss);s.includes("-")||r?e.setProperty(s,r?i.slice(0,-11):i,r?le:""):e[s]=i}}return H}}),Y=(o,t,e="color-update")=>{const s=e.includes("color")?{color:t}:t;let i=new CustomEvent(e,{bubbles:!0,composed:!0,detail:s});o.dispatchEvent(i)},ae=(o=3,t)=>{let e=0,s=100,i=50,r=null,n=!1;t&&(s=t.s,t.hasOwnProperty("v")?(r=t.v,i=null,n=!0):i=t.l);const a=[];let l,h;const d=(c,p)=>`${c.css} ${(p*100).toFixed(1)}%`;for(;e<360;)l=u.parse(n?{h:e,s,v:r}:{h:e,s,l:i}),h=e/360,a.push(d(l,h)),e+=o;return e=359,l=u.parse(n?{h:e,s,v:r}:{h:e,s,l:i}),h=1,a.push(d(l,h)),a.join(", ")},gt=A`<svg stroke='currentColor' fill='none' stroke-width='0' viewBox='0 0 24 24'>
  <path d='M13 7H7V5H13V7Z' fill='currentColor'></path>
  <path d='M13 11H7V9H13V11Z' fill='currentColor'></path>
  <path d='M7 15H13V13H7V15Z' fill='currentColor'></path>
  <path fill-rule='evenodd' clip-rule='evenodd' d='M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z' fill='currentColor'></path>
</svg>`,dt=class dt extends M{constructor(){super(),this.gradient={backgroundImage:`linear-gradient(90deg, ${ae(24)})`},this.width=400,this.sliderStyle={display:"none"}}firstUpdated(){let t=this.renderRoot.querySelector("lit-movable");t.onmovestart=()=>{Y(this.renderRoot,{sliding:!0},"sliding-hue")},t.onmoveend=()=>{Y(this.renderRoot,{sliding:!1},"sliding-hue")},t.onmove=({posLeft:e})=>this.selectHue({offsetX:e}),this.sliderStyle=this.sliderCss(this.hue)}get sliderBounds(){let t=this.width/360,e=Number(this.hue)*t,s=0-e,i=this.width-e;return{min:s,max:i,posLeft:e}}get sliderCss(){return t=>(this.color.hsx&&(t=this.color.hsx.h),t===void 0&&(t=this.color.hsl.h),{backgroundColor:u.parse({h:t,s:100,l:50}).css})}willUpdate(t){var s;if(t.get("hue")&&isFinite(this.hue)){if((s=this.color)!=null&&s.hsx)return;let i=this.hue;this.sliderStyle=this.sliderCss(i)}}selectHue(t){let e=360/this.width,s=t.offsetX,i=Math.max(0,Math.min(359,Math.round(s*e))),r=this.renderRoot.querySelector("a"),n=new CustomEvent("hue-update",{bubbles:!0,composed:!0,detail:{h:i}});r.dispatchEvent(n),this.sliderStyle=this.sliderCss(i)}render(){return A`
      <div style=${W(this.gradient)} class='bar' @click='${this.selectHue}'>
        <lit-movable horizontal='${this.sliderBounds.min}, ${this.sliderBounds.max}' posLeft='${this.sliderBounds.posLeft}'>
          <a class='slider' style=${W(this.sliderCss(this.h))}></a>
        </lit-movable>

      </div>`}};x(dt,"properties",{hue:{type:Number},color:{type:Object},gradient:{type:String,attribute:!1},sliderStyle:{type:String,attribute:!1},sliderBounds:{type:Object},width:{type:Number,attribute:!1}}),x(dt,"styles",U`
    :host > div {
      display: block;
      width: ${It(dt.width)}px;
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
  `);let Ut=dt;customElements.define("hue-bar",Ut);const he=U`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), #fff;
  background-repeat: repeat, repeat;
  background-position: 0 0, 6px 6px;
  background-size: 12px 12px, 12px 12px;
`,ce=U`
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
`,de=U`
  color: var(--input-active-color);
  background-color: var(--input-active-bg);
  border-color: var(--input-active-border-color);
  outline: 0;
  box-shadow: var(--input-active-box-shadow);
`,is=U`
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
      ${ce}
    }
    :host .form-control:focus {
      ${de}
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
      ${he}
      z-index: 0;
    }
  `,rs=U`
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
    ${ce}
  }

  :host .form-control:focus {
    ${de}
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
    ${he}
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  :host div.active .transparent-checks {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`,os={r:"R (red) channel",g:"G (green) channel",b:"B (blue) channel",h:"H (hue) channel",s:"S (saturation) channel",v:"V (value / brightness) channel",l:"L (luminosity) channel",a:"A (alpha / opacity) channel"};class Ot extends M{constructor(){super();x(this,"valueChange",(e,s=null)=>{s=s??Number(this.renderRoot.querySelector("input").value),this.c[this.channel]=s;let i=u.parse(this.c);this.group!=="rgb"&&(i.hsx=this.c),this.c=this.group==="rgb"?this.color.rgbObj:this.isHsl?this.color.hsl:this.color.hsv,Y(this.renderRoot,i)})}clickPreview(e){const i=Math.max(0,Math.min(e.offsetX,128));let r=Math.round(i/128*this.max);this.channel==="a"&&(r=Number((i/127).toFixed(2))),this.valueChange(null,r),this.setActive(!1)}setActive(e){this.active=e,e&&this.renderRoot.querySelector("input").select()}setPreviewGradient(){let e;this.group==="rgb"?e=this.color.rgbObj:this.color.hsx?e=this.color.hsx:e=this.isHsl?this.color.hsl:this.color.hsv,this.c=e;let s=this.group,i=this.channel;const r=i==="a";this.v=e[i],r&&(this.v=Math.max(0,Math.min(this.v,1)));let n=255,a,l;if(s!=="rgb"||i==="a")if(i==="h"){n=this.max=359,this.previewGradient={"--preview":`linear-gradient(90deg, ${ae(24,e)})`,"--pct":`${100*(e.h/n)}%`};return}else r?n=1:n=100;if(this.max=n,a={...e},l=a,a[this.channel]=0,a=u.parse(a),l[this.channel]=n,l=u.parse(l),this.channel==="l"){let h={...e};h.l=50,this.previewGradient={"--preview":`linear-gradient(90deg, ${a.hex}, ${u.parse(h).hex}, ${l.hex})`,"--pct":`${100*(e[this.channel]/n)}%`}}else this.previewGradient={"--preview":`linear-gradient(90deg, ${r?a.css:a.hex}, ${r?l.css:l.hex})`,"--pct":`${Math.min(100,Math.max(100*(e[this.channel]/n),0))}%`}}willUpdate(e){this.setPreviewGradient()}render(){const e=this.channel==="a"?A`<div class='transparent-checks'></div>`:null,s=this.channel==="a"?1:this.max;return A`
      <div class='${Dt({active:this.active})}'>
        <label for=channel_${this.ch} >${this.channel.toUpperCase()}</label>
        <input id=channel_${this.ch} aria-label='${os[this.channel]}'
          class='form-control' .value='${this.channel==="a"&&this.v<1?Math.min(1,this.v).toFixed(2):Math.round(this.v)}'
          type='number' min='0' max='${s}' .step='${this.channel==="a"?.01:1}'
          @input='${this.valueChange}'
          @focus='${()=>this.setActive(!0)}'
          @blur='${()=>this.setActive(!1)}'
        />
        <div class='preview-bar' style='${W(this.previewGradient)}' @mousedown='${this.clickPreview}'>
          <div class='pct'></div>
          ${e}
        </div>
      </div>`}}x(Ot,"properties",{group:{type:String},channel:{type:String},color:{type:Object},isHsl:{type:Boolean},c:{type:Object,state:!0,attribute:!1},previewGradient:{type:Object,state:!0,attribute:!1},active:{type:Boolean,state:!0,attribute:!1},max:{type:Number,state:!0,attribute:!1},v:{type:Number,state:!0,attribute:!1}}),x(Ot,"styles",rs),customElements.define("color-input-channel",Ot);class Tt extends M{constructor(){super(),this.isHsl=!0,this.circlePos={top:0,left:0,bounds:{x:"",y:""}},this.size=160}setColor(t){Y(this.renderRoot,t)}setCircleCss(t,e){let s=`${t}`,i=`${e}`,r={x:`0, ${this.size}`,y:`0,${this.size}`};this.circlePos={top:i,left:s,bounds:r}}pickCoord({offsetX:t,offsetY:e}){let s=t,i=e;const{size:r,hsw:n,isHsl:a,color:l}=this;let h=(r-i)/r;h=Math.round(h*100);let d=Math.round(s/r*100),c={h:n.h,s:d,[a?"l":"v"]:h},p=a?u.fromHsl(c):u.fromHsv(c);this.setCircleCss(s,i),p.a=l.alpha,p.hsx=c,p.fromHSLCanvas=!0,this.setColor(p)}debouncePaintDetail(t){clearTimeout(this.bouncer),this.bouncer=setTimeout(()=>this.paintHSL(t,!0),50),this.paintHSL(t,!1)}paintHSL(t,e=null){if(this.debounceMode&&e===null)return this.debouncePaintDetail(t);const{ctx:s,color:i,isHsl:r,size:n}=this;if(!s)return;let a=i;t=t??r?a.hsl:a.hsv,t.w=r?t.l:t.v;let{h:l,s:h,w:d}=t,c=this.hsw={h:l,s:h,w:d},p=n/100;const Hs=r?(S,E,Lt)=>`hsl(${S}, ${E}%, ${100-Lt}%)`:(S,E,Lt)=>u.fromHsv({h:S,s:E,v:100-Lt}).hex;let xt=e===!1?4:1;for(let S=0;S<100;S+=xt)for(let E=0;E<100;E+=xt)s.fillStyle=Hs(l,S,E),s.fillRect(S,E,S+xt,E+xt);this.setCircleCss(c.s*p,n-t.w*p)}willUpdate(t){var e;if(t.has("color")||t.has("isHsl")){if((e=this.color)!=null&&e.hsx){if(this.color.fromHSLCanvas){delete this.color.fromHSLCanvas;return}return this.paintHSL(this.color.hsx)}this.paintHSL()}}firstUpdated(t){let e=this.renderRoot.querySelector("canvas");this.ctx=e.getContext("2d"),this.paintHSL()}circleMove({posTop:t,posLeft:e}){this.pickCoord({offsetX:e,offsetY:t})}render(){let t={height:this.size+"p",width:this.size+"px"},{top:e,left:s,bounds:i}=this.circlePos;return A`
      <div class='outer' @click='${this.pickCoord}' style='${W(t)}'>
        <canvas height='100' width='100'></canvas>
        <lit-movable
          boundsX='${i.x}' boundsY='${i.y}'
          posTop='${e}' posLeft='${s}' .onmove='${r=>this.circleMove(r)}'>
          <div class='circle'></div>
        </lit-movable>
      </div>`}}x(Tt,"properties",{color:{type:Object},isHsl:{type:Boolean},size:{type:Number},debounceMode:{type:Boolean},ctx:{type:Object,state:!0,attribute:!1},hsw:{type:Object,state:!0,attribute:!1},circlePos:{type:Object,state:!0,attribute:!1}}),x(Tt,"styles",U`
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
  `),customElements.define("hsl-canvas",Tt);var ns=Object.defineProperty,ls=(o,t,e)=>t in o?ns(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,y=(o,t,e)=>(ls(o,typeof t!="symbol"?t+"":t,e),e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=globalThis,Bt=mt.ShadowRoot&&(mt.ShadyCSS===void 0||mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ue=Symbol(),pe=new WeakMap;let as=class{constructor(o,t,e){if(this._$cssResult$=!0,e!==ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=t}get styleSheet(){let o=this.o;const t=this.t;if(Bt&&o===void 0){const e=t!==void 0&&t.length===1;e&&(o=pe.get(t)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),e&&pe.set(t,o))}return o}toString(){return this.cssText}};const hs=o=>new as(typeof o=="string"?o:o+"",void 0,ue),cs=(o,t)=>{if(Bt)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=mt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},fe=Bt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return hs(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ds,defineProperty:us,getOwnPropertyDescriptor:ps,getOwnPropertyNames:fs,getOwnPropertySymbols:gs,getPrototypeOf:ms}=Object,Z=globalThis,ge=Z.trustedTypes,bs=ge?ge.emptyScript:"",me=Z.reactiveElementPolyfillSupport,rt=(o,t)=>o,Nt={toAttribute(o,t){switch(t){case Boolean:o=o?bs:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},be=(o,t)=>!ds(o,t),$e={attribute:!0,type:String,converter:Nt,reflect:!1,hasChanged:be};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Z.litPropertyMetadata??(Z.litPropertyMetadata=new WeakMap);class G extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$e){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&us(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=ps(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const a=i==null?void 0:i.call(this);r.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$e}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;const t=ms(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){const e=this.properties,s=[...fs(e),...gs(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(fe(i))}else t!==void 0&&e.push(fe(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cs(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Nt).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:Nt;this._$Em=r,this[r]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??be)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[rt("elementProperties")]=new Map,G[rt("finalized")]=new Map,me==null||me({ReactiveElement:G}),(Z.reactiveElementVersions??(Z.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=globalThis,$t=bt.trustedTypes,ve=$t?$t.createPolicy("lit-html",{createHTML:o=>o}):void 0,ye="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,_e="?"+P,$s=`<${_e}>`,j=document,ot=()=>j.createComment(""),nt=o=>o===null||typeof o!="object"&&typeof o!="function",xe=Array.isArray,vs=o=>xe(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Rt=`[
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,we=/>/g,z=RegExp(`>|${Rt}(?:([^\\s"'>=/]+)(${Rt}*=${Rt}*(?:[^
\f\r"'\`<>=]|("|')|))|$)`,"g"),Se=/'/g,Ee=/"/g,Ce=/^(?:script|style|textarea|title)$/i,ys=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),_s=ys(1),K=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Fe=new WeakMap,I=j.createTreeWalker(j,129);function ke(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ve!==void 0?ve.createHTML(t):t}const xs=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":"",n=lt;for(let a=0;a<e;a++){const l=o[a];let h,d,c=-1,p=0;for(;p<l.length&&(n.lastIndex=p,d=n.exec(l),d!==null);)p=n.lastIndex,n===lt?d[1]==="!--"?n=Ae:d[1]!==void 0?n=we:d[2]!==void 0?(Ce.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=z):d[3]!==void 0&&(n=z):n===z?d[0]===">"?(n=i??lt,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?z:d[3]==='"'?Ee:Se):n===Ee||n===Se?n=z:n===Ae||n===we?n=lt:(n=z,i=void 0);const m=n===z&&o[a+1].startsWith("/>")?" ":"";r+=n===lt?l+$s:c>=0?(s.push(h),l.slice(0,c)+ye+l.slice(c)+P+m):l+P+(c===-2?a:m)}return[ke(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class at{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const a=t.length-1,l=this.parts,[h,d]=xs(t,e);if(this.el=at.createElement(h,s),I.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=I.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ye)){const p=d[n++],m=i.getAttribute(c).split(P),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:w[2],strings:m,ctor:w[1]==="."?ws:w[1]==="?"?Ss:w[1]==="@"?Es:vt}),i.removeAttribute(c)}else c.startsWith(P)&&(l.push({type:6,index:r}),i.removeAttribute(c));if(Ce.test(i.tagName)){const c=i.textContent.split(P),p=c.length-1;if(p>0){i.textContent=$t?$t.emptyScript:"";for(let m=0;m<p;m++)i.append(c[m],ot()),I.nextNode(),l.push({type:2,index:++r});i.append(c[p],ot())}}}else if(i.nodeType===8)if(i.data===_e)l.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(P,c+1))!==-1;)l.push({type:7,index:r}),c+=P.length-1}r++}}static createElement(t,e){const s=j.createElement("template");return s.innerHTML=t,s}}function J(o,t,e=o,s){var i,r;if(t===K)return t;let n=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl;const a=nt(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((r=n==null?void 0:n._$AO)==null||r.call(n,!1),a===void 0?n=void 0:(n=new a(o),n._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=n:e._$Cl=n),n!==void 0&&(t=J(o,n._$AS(o,t.values),n,s)),t}class As{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??j).importNode(e,!0);I.currentNode=i;let r=I.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new ht(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Cs(r,this,t)),this._$AV.push(h),l=s[++a]}n!==(l==null?void 0:l.index)&&(r=I.nextNode(),n++)}return I.currentNode=j,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class ht{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),nt(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==K&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vs(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==g&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=at.createElement(ke(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)==null?void 0:e._$AD)===r)this._$AH.p(s);else{const n=new As(r,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let e=Fe.get(t.strings);return e===void 0&&Fe.set(t.strings,e=new at(t)),e}k(t){xe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new ht(this.S(ot()),this.S(ot()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=J(this,t,e,0),n=!nt(t)||t!==this._$AH&&t!==K,n&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=J(this,a[s+l],e,l),h===K&&(h=this._$AH[l]),n||(n=!nt(h)||h!==this._$AH[l]),h===g?t=g:t!==g&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}n&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ws extends vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Ss extends vt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class Es extends vt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??g)===K)return;const s=this._$AH,i=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Cs{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const He=bt.litHtmlPolyfillSupport;He==null||He(at,ht),(bt.litHtmlVersions??(bt.litHtmlVersions=[])).push("3.1.2");const Fs=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new ht(t.insertBefore(ot(),r),r,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Fs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return K}}var Me;ct._$litElement$=!0,ct.finalized=!0,(Me=globalThis.litElementHydrateSupport)==null||Me.call(globalThis,{LitElement:ct});const Pe=globalThis.litElementPolyfillSupport;Pe==null||Pe({LitElement:ct}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");const yt=o=>isFinite(o)?Number(o):Number(o.replace(/[^0-9.\-]/g,"")),De=o=>(o=Number(o),(isNaN(o)||[void 0,null].includes(o))&&(o=0),o);class ${constructor(t,e){this.x=De(t),this.y=De(e)}static fromPointerEvent(t){const{pageX:e,pageY:s}=t;return new $(e,s)}static fromElementStyle(t){let e=yt(t.style.left??0),s=yt(t.style.top??0);return new $(e,s)}static fromObject({x:t,y:e}){return new $(t,e)}get top(){return this.y}set top(t){this.y=t}get left(){return this.x}set left(t){this.x=t}}const ks=o=>{const t=$.fromPointerEvent(o),e=o.target.getBoundingClientRect();let s=t.x-(e.left+document.body.scrollLeft),i=t.y-(e.top+document.body.scrollTop);return new $(s,i)};class D{constructor(t=-1/0,e=1/0){this.min=t,this.max=e,this.attr=""}get constrained(){return this.min===this.max}get unconstrained(){return this.min===-1/0&&this.max===1/0}static fromString(t=null,e=0){if(!t)return new D;if(t==="null")return new D(0,0);let[s,i]=t.split(",").map(n=>Number(n.trim())+e),r=new D(s,i);return r.attr=t,r}}class Ue extends ct{constructor(){super(),y(this,"_target"),y(this,"_targetSelector",null),y(this,"_boundsX",new D),y(this,"_boundsY",new D),y(this,"isMoving",!1),y(this,"moveState",{}),y(this,"_vertical",null),y(this,"_horizontal",null),y(this,"_posTop",null),y(this,"_posLeft",null),y(this,"_grid",1),y(this,"pointerId")}get vertical(){return this._vertical}set vertical(t){this.boundsY=t,this.boundsX="null",this._vertical=t}get horizontal(){return this._horizontal}set horizontal(t){this.boundsX=t,this.boundsY="null",this._horizontal=t}set posTop(t){t=Number(t),this._posTop=t,this.target&&(this.target.style.top=t+"px")}get posTop(){return this._posTop}set posLeft(t){t=Number(t),this._posLeft=t,this.target&&(this.target.style.left=t+"px")}get posLeft(){return this._posLeft}get grid(){return this._grid}set grid(t){t>0&&t<1/0?this._grid=t:this._grid=1}get bounds(){return{left:this._boundsX,top:this._boundsY}}set targetSelector(t){this._targetSelector=t,this._retryTarget=document.querySelector(t)===null,this._target=document.querySelector(t)}get targetSelector(){return this._targetSelector}get target(){return this._target??this}set target(t){this._target=t}get boundsX(){return this._boundsX}set boundsX(t){var e;this._boundsX=D.fromString(t,yt(((e=this.target)==null?void 0:e.style.left)??0)),this.bounds.left=this._boundsX}get boundsY(){return this._boundsY}set boundsY(t){var e;this._boundsY=D.fromString(t,yt(((e=this.target)==null?void 0:e.style.top)??0)),this.bounds.top=this._boundsY}firstUpdated(t){this._retryTarget&&(this.target=document.querySelector(this.targetSelector));let{bounds:e,target:s,posTop:i,posLeft:r}=this,{offsetLeft:n,offsetTop:a,style:{left:l,top:h}}=this.target;s.classList.add("--movable-base"),this.renderRoot.addEventListener("pointerdown",d=>this.pointerdown(d)),s.style.position="absolute",s.style.cursor="pointer",r?s.style.left=r+"px":!l&&n&&(s.style.left=n+"px",e.left.constrained&&(e.left.min=e.left.max=n)),i?s.style.top=i+"px":!h&&a&&(s.style.top=a+"px",e.top.constrained&&(e.top.min=e.top.max=a))}reposition(t){if(typeof t=="object"){const{eventsOnly:e,target:s}=this;this.posTop=t.top,this.posLeft=t.left,s&&!e&&(s.style.left=t.left+"px",s.style.top=t.top+"px")}else this.isMoving=t}moveInit(t){let e=this.moveState,{target:s,bounds:i}=this;e.mouseCoord=$.fromPointerEvent(t),e.startCoord=$.fromElementStyle(s),e.moveDist=new $(0,0),e.totalDist=new $(0,0),e.clickOffset=ks(t),e.coords=$.fromObject(e.startCoord),e.maxX=isFinite(i.left.min)&&isFinite(i.left.max)?i.left.min+i.left.max:1/0,e.maxY=isFinite(i.top.min)&&isFinite(i.top.max)?i.top.min+i.top.max:1/0,this.isMoving=!0,this.reposition(!0),this.eventBroker("movestart",t)}eventBroker(t,e){this.moveState.posTop=this.posTop,this.moveState.posLeft=this.posLeft;let s=new CustomEvent(t,{bubbles:!0,composed:!0,detail:{...e,...this.moveState,element:this}});this.renderRoot.dispatchEvent(s);let i=this[`on${t}`];i&&i({...e,...this.moveState,me:this})}unbind(t){this.pointerId=null,document.body.removeEventListener("pointermove",e=>this.motionHandler(e)),this.moveEnd(t)}moveEnd(t){this.isMoving&&(this.isMoving=this.moveState.isMoving=!1,this.reposition(!1),this.eventBroker("moveend",t))}motionHandler(t){t.stopPropagation();let e=$.fromPointerEvent(t),s=this.moveState,{grid:i,bounds:r,shiftBehavior:n,boundsX:a,boundsY:l}=this;if(s.moveDist=$.fromObject({x:e.x-s.mouseCoord.x,y:e.y-s.mouseCoord.y}),s.mouseCoord=e,s.totalDist=$.fromObject({x:s.totalDist.x+s.moveDist.x,y:s.totalDist.y+s.moveDist.y}),s.coords=$.fromObject({x:Math.round(s.totalDist.x/i)*i+s.startCoord.x,y:Math.round(s.totalDist.y/i)*i+s.startCoord.y}),n&&t.shiftKey&&a.unconstrained&&l.unconstrained){let{x:h,y:d}=s.totalDist;Math.abs(h)>Math.abs(d)?s.coords.top=s.startCoord.y:s.coords.left=s.startCoord.x}else s.coords.y=Math.min(Math.max(r.top.min,s.coords.top),r.top.max),s.coords.x=Math.min(Math.max(r.left.min,s.coords.left),r.left.max);isFinite(s.maxX)&&(s.pctX=Math.max(r.left.min,s.coords.left)/s.maxX),isFinite(s.maxY)&&(s.pctY=Math.max(r.top.min,s.coords.top)/s.maxY),this.reposition(s.coords),this.eventBroker("move",t)}pointerdown(t){document.body.setPointerCapture(t.pointerId),t.preventDefault(),t.stopPropagation(),t.pointerId!==void 0&&(this.pointerId=t.pointerId),this.listening||(document.body.addEventListener("pointerup",e=>{this.isMoving&&this.unbind(e)},!1),document.body.addEventListener("pointermove",e=>{this.pointerId!==void 0&&e.pointerId===this.pointerId&&this.motionHandler(e)},!1)),this.listening=!0,this.moveInit(t)}render(){return _s`<slot></slot>`}}y(Ue,"properties",{posLeft:{type:Number},posTop:{type:Number},target:{type:Object,attribute:!1,state:!0},targetSelector:{type:String},bounds:{type:Object,attribute:!1,state:!0},boundsX:{type:String},boundsY:{type:String},vertical:{type:String},horizontal:{type:String},grid:{type:Number},shiftBehavior:{type:Boolean},disabled:{type:Boolean},eventsOnly:{type:Boolean},listening:{type:Boolean},onmovestart:{type:Object},onmoveend:{type:Object},onmove:{type:Object}}),
window.customElements.get('lit-movable') || window.customElements.define("lit-movable",Ue);
  class _t extends M{constructor(){super();x(this,"_color");this._color=u.parse(Pt.slateblue),this.isHsl=!0}firstUpdated(e){this.debounceMode=!1,e.has("value")&&(this.color=u.parse(this.value))}get color(){return this._color}set color(e){e=e.hsx?e:e.rgba?u.parse(...e.rgba):u.parse(e),e&&(this.hex=e.hex,this._color=e,Y(this.renderRoot,e,"colorchanged"))}updateColor({detail:{color:e}}){this.color=e}setColor(e){const s=this.renderRoot.querySelector("input#hex").value,i=u.parse(s);i?this.color=i:console.log(`ignored unparsable input: ${s}`)}setHue({detail:{h:e}}){let{s,l:i,a:r}=this.color.hsl;r===1&&(r=void 0),this.color={h:e,s,l:i,a:r}}setHsl(e){this.isHsl=e}okColor(){Y(this.renderRoot,this.color,"colorpicked")}showCopyDialog(){if(this.copied=null,this.dlg=this.dlg??this.renderRoot.querySelector("dialog"),this.dlg.open)return this.dlg.classList.remove("open"),this.dlg.close();this.dlg.show(),this.dlg.classList.add("open")}clipboard(e){let s=this.color.toString(e);window.navigator.clipboard.writeText(s).then(()=>{this.hideCopyDialog(s)})}hideCopyDialog(e){if(e){this.copied=e,setTimeout(()=>this.dlg.classList.remove("open"),400),setTimeout(()=>this.hideCopyDialog(),1200);return}this.dlg.classList.remove("open"),this.dlg.close(),this.copied=null}setSliding({detail:e}){this.debounceMode=e.sliding}render(){const e=this.isHsl?["h","s","l"]:["h","s","v"],s={button:!0,active:!this.isHsl,l:!0},i={button:!0,active:this.isHsl,r:!0};let r={backgroundColor:this.color},n=this.copied?{textAlign:"center",display:"block"}:{display:"none"};const a=this.debounceMode;return A`
      <div class='outer'>
        <hue-bar
          @sliding-hue='${this.setSliding}'
          hue='${this.color.hsx?this.color.hsx.h:this.color.hsl.h}'
          @hue-update='${this.setHue}' .color='${this.color}'></hue-bar>
        <div class='d-flex'>
          <div class='col w-30'>
            ${["r","g","b","a"].map(l=>A`
              <color-input-channel
                group='rgb' channel='${l}' isHsl='${this.isHsl}'
                .color='${this.color}' @color-update='${this.updateColor}' />
            `)}
            <div class='hex'>
              <dialog @blur='${()=>this.hideCopyDialog()}' tabindex='0'>
                <sub class='copied' style='${W(n)}'>copied <em>${this.copied}</em></sub>
                ${this.copied?A``:A`
                  <a class='copy-item' @click=${l=>this.clipboard("hex",l)} id='copyHex'>
                    <input class='form-control' disabled='disabled' value='${this.color.hex}'>
                    <button title='Copy HEX String' class='button' tabindex='0'>${gt}</button>
                  </a>
                  <a class='copy-item' @click=${l=>this.clipboard("css",l)} id='copyRgb'>
                    <input class='form-control' disabled='disabled' value='${this.color.css}'>
                    <button title='Copy RGB String' class='button' tabindex='0'>${gt}</button>
                  </a>
                  <a class='copy-item'  id='copyHsl'
                     @click=${l=>this.clipboard(this.color.alpha<1?"hsla":"hsl",l)}>
                    <input class='form-control' disabled='disabled'
                           value='${this.color.toString(this.color.alpha<1?"hsla":"hsl")}'>
                    <button title='Copy HSL String' class='button' tabindex='0'>${gt}</button>
                  </a>
                `}

              </dialog>
              <label for='hex'>#</label>
              <input aria-label='Hexadecimal value (editable - accepts any valid color string)'
                     @input='${this.setColor}' class='form-control' id='hex' placeholder='Set color'
                     value='${this.hex}' /><a title='Show copy to clipboard menu'
                                               @click='${this.showCopyDialog}' class='button copy'>
              ${gt}
              <span>&#11205;</span>
            </a>

            </div>
          </div>
          <div class='col w-30'>
            ${e.map(l=>A`
              <color-input-channel
                group="hsl" channel="${l}" .isHsl="${this.isHsl}"
                .color="${this.color}" @color-update="${this.updateColor}" />
            `)}
            <div class='hsl-mode'>
              <a title='Use hue / saturation / value (brightness) mode'
                 class='${Dt(s)}'
                 @click='${()=>this.setHsl(!1)}'>HSV</a><a
              title='Use hue / saturation / luminosity mode'
              class='${Dt(i)}'
              @click='${()=>this.setHsl(!0)}'>HSL</a>
            </div>
          </div>
          <div class='w-40'>
            <hsl-canvas .debounceMode='${a}'
              size='${160}' .isHsl='${this.isHsl}'
              .color='${this.color}' @color-update='${this.updateColor}'></hsl-canvas>
            <div class='ok'>
              <a class='button' @click='${this.okColor}'>OK
                <span class='swatch'>
                  <span style='${W(r)}'></span>
                  <span class='checky'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>`}}x(_t,"properties",{color:{type:Object,state:!0,attribute:!1},hex:{type:String,state:!0,attribute:!1},value:{type:String},isHsl:{type:Boolean,state:!0,attribute:!1},copied:{type:String},debounceMode:{type:Boolean}}),x(_t,"styles",is),window.customElements.get("color-picker")||window.customElements.define("color-picker",_t),_.ColorPicker=_t,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
