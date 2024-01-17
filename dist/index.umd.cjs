(function(B,j){typeof exports=="object"&&typeof module<"u"?j(exports):typeof define=="function"&&define.amd?define(["exports"],j):(B=typeof globalThis<"u"?globalThis:B||self,j(B["color-picker"]={}))})(this,function(B){"use strict";var j=Object.defineProperty,It=(r,t,e)=>t in r?j(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,u=(r,t,e)=>(It(r,typeof t!="symbol"?t+"":t,e),e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,it=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),ct=new WeakMap;let pt=class{constructor(r,t,e){if(this._$cssResult$=!0,e!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o;const t=this.t;if(it&&r===void 0){const e=t!==void 0&&t.length===1;e&&(r=ct.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),e&&ct.set(t,r))}return r}toString(){return this.cssText}};const ut=r=>new pt(typeof r=="string"?r:r+"",void 0,st),E=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new pt(e,r,st)},Vt=(r,t)=>{if(it)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},gt=it?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ut(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xt,defineProperty:Yt,getOwnPropertyDescriptor:qt,getOwnPropertyNames:Wt,getOwnPropertySymbols:Zt,getPrototypeOf:Gt}=Object,T=globalThis,bt=T.trustedTypes,Kt=bt?bt.emptyScript:"",mt=T.reactiveElementPolyfillSupport,R=(r,t)=>r,ot={toAttribute(r,t){switch(t){case Boolean:r=r?Kt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},vt=(r,t)=>!Xt(r,t),ft={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:vt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),T.litPropertyMetadata??(T.litPropertyMetadata=new WeakMap);class P extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ft){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=qt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ft}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=Gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const e=this.properties,i=[...Wt(e),...Zt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(gt(s))}else t!==void 0&&e.push(gt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){var i;const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const n=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:ot).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const n=s.getPropertyOptions(o),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:ot;this._$Em=o,this[o]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??vt)(s?o:this[t],e))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)==null||t.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(i)):this._$ET()}catch(s){throw e=!1,this._$ET(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[R("elementProperties")]=new Map,P[R("finalized")]=new Map,mt==null||mt({ReactiveElement:P}),(T.reactiveElementVersions??(T.reactiveElementVersions=[])).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,Z=W.trustedTypes,yt=Z?Z.createPolicy("lit-html",{createHTML:r=>r}):void 0,$t="$lit$",F=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+F,Jt=`<${xt}>`,C=document,z=()=>C.createComment(""),I=r=>r===null||typeof r!="object"&&typeof r!="function",wt=Array.isArray,Qt=r=>wt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",rt=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,Ft=/>/g,k=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,St=/"/g,Et=/^(?:script|style|textarea|title)$/i,te=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=te(1),_=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Ct=new WeakMap,H=C.createTreeWalker(C,129);function kt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}const ee=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=V;for(let l=0;l<e;l++){const a=r[l];let h,p,c=-1,g=0;for(;g<a.length&&(n.lastIndex=g,p=n.exec(a),p!==null);)g=n.lastIndex,n===V?p[1]==="!--"?n=At:p[1]!==void 0?n=Ft:p[2]!==void 0?(Et.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=k):p[3]!==void 0&&(n=k):n===k?p[0]===">"?(n=s??V,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?k:p[3]==='"'?St:_t):n===St||n===_t?n=k:n===At||n===Ft?n=V:(n=k,s=void 0);const y=n===k&&r[l+1].startsWith("/>")?" ":"";o+=n===V?a+Jt:c>=0?(i.push(h),a.slice(0,c)+$t+a.slice(c)+F+y):a+F+(c===-2?l:y)}return[kt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[h,p]=ee(t,e);if(this.el=X.createElement(h,i),H.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=H.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith($t)){const g=p[n++],y=s.getAttribute(c).split(F),x=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:x[2],strings:y,ctor:x[1]==="."?se:x[1]==="?"?oe:x[1]==="@"?re:G}),s.removeAttribute(c)}else c.startsWith(F)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(Et.test(s.tagName)){const c=s.textContent.split(F),g=c.length-1;if(g>0){s.textContent=Z?Z.emptyScript:"";for(let y=0;y<g;y++)s.append(c[y],z()),H.nextNode(),a.push({type:2,index:++o});s.append(c[g],z())}}}else if(s.nodeType===8)if(s.data===xt)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(F,c+1))!==-1;)a.push({type:7,index:o}),c+=F.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function O(r,t,e=r,i){var s,o;if(t===_)return t;let n=i!==void 0?(s=e._$Co)==null?void 0:s[i]:e._$Cl;const l=I(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==l&&((o=n==null?void 0:n._$AO)==null||o.call(n,!1),l===void 0?n=void 0:(n=new l(r),n._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=n:e._$Cl=n),n!==void 0&&(t=O(r,n._$AS(r,t.values),n,i)),t}class ie{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??C).importNode(e,!0);H.currentNode=s;let o=H.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new Y(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new ne(o,this,t)),this._$AV.push(h),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=H.nextNode(),n++)}return H.currentNode=C,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),I(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==b&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=X.createElement(kt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)==null?void 0:e._$AD)===o)this._$AH.p(i);else{const n=new ie(o,this),l=n.u(this.options);n.p(i),this.$(l),this._$AH=n}}_$AC(t){let e=Ct.get(t.strings);return e===void 0&&Ct.set(t.strings,e=new X(t)),e}T(t){wt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Y(this.k(z()),this.k(z()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=O(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==_,n&&(this._$AH=t);else{const l=t;let a,h;for(t=o[0],a=0;a<o.length-1;a++)h=O(this,l[i+a],e,a),h===_&&(h=this._$AH[a]),n||(n=!I(h)||h!==this._$AH[a]),h===b?t=b:t!==b&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!s&&this.O(t)}O(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class se extends G{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===b?void 0:t}}class oe extends G{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class re extends G{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??b)===_)return;const i=this._$AH,s=t===b&&i!==b||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==b&&(i===b||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ne{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Ht=W.litHtmlPolyfillSupport;Ht==null||Ht(X,Y),(W.litHtmlVersions??(W.litHtmlVersions=[])).push("3.1.0");const le=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new Y(t.insertBefore(z(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=le(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return _}}var Mt;$._$litElement$=!0,$.finalized=!0,(Mt=globalThis.litElementHydrateSupport)==null||Mt.call(globalThis,{LitElement:$});const Dt=globalThis.litElementPolyfillSupport;Dt==null||Dt({LitElement:$}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");const v=r=>K(255,Math.round(Number(r))),M=r=>v(r*255),D=r=>K(1,r/255),K=(r,t)=>Math.max(0,Math.min(r,t)),N=r=>r===void 0?1:(typeof r=="string"&&r.indexOf("%")>0&&(r=Number(r.split("%")[0])/100),r=Number(Number(r).toFixed(3)),isNaN(r)?1:K(1,r)),nt={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};class d{constructor(t,e,i,s){return d.isBaseConstructor(t)?(this.r=v(t.r),this.g=v(t.g),this.b=v(t.b),t.a!==void 0&&(this.a=N(t.a)),this):d.parse(t,e,i,s)}static parse(t,e,i,s){if(d.isBaseConstructor(t))return new d(t);if(e!==void 0&&i!==void 0){let o=v(t);return e=v(e),i=v(i),s!==void 0&&(s=N(s)),new d({r:o,g:e,b:i,a:s})}if(Array.isArray(t))return d.fromArray(t);if(typeof t=="string"){let o;if(e!==void 0&&Number(e)<=1&&Number(e)>=0&&(o=Number(e)),t.startsWith("#"))return d.fromHex(t,o);if(nt[t.toLowerCase()])return d.fromNamed(t,o);if(t.startsWith("rgb"))return d.fromRgbString(t);if(t==="transparent"){let n,l,a,h;return n=l=a=h=0,new d({r:n,g:l,b:a,a:h})}else return null}else if(typeof t=="object"){if(t.a!==void 0&&(this.a=N(t.a)),t.h!==void 0){let o={};if(t.v!==void 0)o=d.fromHsv(t);else if(t.l!==void 0)o=d.fromHsl(t);else return d.fromArray([0,0,0]);return o.a=t.a!==void 0?N(t.a):void 0,new d(o)}return t.c!==void 0?d.fromCMYK(t):this}return d.fromArray([0,0,0])}static isBaseConstructor(t){return typeof t=="object"&&t.r!==void 0&&t.g!==void 0&&t.b!==void 0}static fromNamed(t,e){return d.fromHex(nt[t.toLowerCase()],e)}static fromArray(t){t=t.filter(i=>i!==""&&isFinite(i));const e={r:v(t[0]),g:v(t[1]),b:v(t[2])};return t[3]!==void 0&&(e.a=N(t[3])),new d(e)}static fromHex(t,e){t=t.replace("#",""),(t.length===3||t.length===4)&&(t=t.split("").map(s=>s+s).join(""));let i=t.match(/[A-Za-z0-9]{2}/g).map(s=>parseInt(s,16));return i.length===4?i[3]/=255:e!==void 0&&(i[3]=e),d.fromArray(i)}static fromRgbString(t){if(t.includes(","))return d.fromArray(t.split("(")[1].split(")")[0].split(","));const e=t.replace("/"," ").split("(")[1].replace(")","").split(" ").filter(i=>i!==""&&isFinite(Number(i)));return d.fromArray(e)}static fromHsv({h:t,s:e,v:i}){e=e/100,i=i/100;const s=Math.floor(t/60%6),o=t/60-s,n=i*(1-e),l=i*(1-o*e),a=i*(1-(1-o)*e),h=[[i,a,n],[l,i,n],[n,i,a],[n,l,i],[a,n,i],[i,n,l]][s].map(p=>Math.round(p*256));return new d({r:v(h[0]),g:v(h[1]),b:v(h[2])})}static fromHsl({h:t,s:e,l:i}){e/=100,i/=100;const s=(1-Math.abs(2*i-1))*e,o=s*(1-Math.abs(t/60%2-1)),n=i-s/2;let l=0,a=0,h=0;return 0<=t&&t<60?(l=s,a=o,h=0):60<=t&&t<120?(l=o,a=s,h=0):120<=t&&t<180?(l=0,a=s,h=o):180<=t&&t<240?(l=0,a=o,h=s):240<=t&&t<300?(l=o,a=0,h=s):300<=t&&t<360&&(l=s,a=0,h=o),new d({r:M(n+l),g:M(n+a),b:M(n+h)})}static fromCMYK({c:t,m:e,y:i,k:s,a:o}){const n=l=>M(1-Math.min(1,l/100*(1-s)+s));return new d({r:n(t),b:n(e),g:n(i),a:o})}get alpha(){return this.a===void 0?1:this.a}get rgb(){return[this.r,this.g,this.b]}get rgba(){return[this.r,this.g,this.b,this.alpha]}get rgbObj(){let{r:t,g:e,b:i}=this;return{r:t,g:e,b:i,a:this.alpha}}get css(){return this.rgbString}get rgbString(){return this.a===void 0?`rgb(${this.rgb.join(",")})`:`rgba(${this.rgba.join(",")})`}get rgbaString(){return`rgba(${this.rgba.join(",")})`}get hex(){return`#${this.rgb.map(t=>t.toString(16).padStart(2,"0")).join("")}`.toUpperCase()}get hexa(){return this.rgbaHex}get rgbaHex(){let t=this.rgba;return t[3]=M(t[3]),`#${t.map(e=>e.toString(16).padStart(2,"0")).join("")}`.toUpperCase()}get hsv(){const t=D(this.r),e=D(this.g),i=D(this.b),s=Math.min(t,e,i),o=Math.max(t,e,i);let n;const l=o,a=o-s;a===0?n=0:o===t?n=60*((e-i)/a)%360:o===e?n=60*((i-t)/a)+120:o===i?n=60*((t-e)/a)+240:n=0,n<0&&(n+=360);const h=o===0?0:1-s/o;return{h:Math.round(n),s:Math.round(h*100),v:Math.round(l*100),a:this.alpha}}get hsl(){const t=D(this.r),e=D(this.g),i=D(this.b),s=Math.max(t,e,i),o=Math.min(t,e,i);let n,l;const a=(s+o)/2;if(s===o)n=l=0;else{const h=s-o;switch(l=a>.5?h/(2-s-o):h/(s+o),s){case t:n=(e-i)/h+(e<i?6:0);break;case e:n=(i-t)/h+2;break;case i:n=(t-e)/h+4;break}n/=6}return{h:Math.round(n*360),s:Math.round(l*100),l:Math.round(a*100),a:this.alpha}}get cmyk(){let t,e,i,s;const o=parseFloat(this.r)/255,n=parseFloat(this.g)/255,l=parseFloat(this.b)/255;return s=1-Math.max(o,n,l),s===1?t=e=i=0:(t=(1-o-s)/(1-s),e=(1-n-s)/(1-s),i=(1-l-s)/(1-s)),t=Math.round(100*t),e=Math.round(100*e),i=Math.round(100*i),s=Math.round(100*s),this.alpha?{c:t,m:e,y:i,k:s,a:this.alpha}:{c:t,m:e,y:i,k:s}}get hslString(){const t=this.hsl;return`hsl(${t.h}, ${t.s}%, ${t.l}%)`}get hslaString(){const t=this.hsl;return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`}get cmykString(){const t=this.cmyk;return`cmyk(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%)`}get cmykaString(){const t=this.cmyk;return`cmyka(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%, ${t.a})`}toString(t="rgb"){let e;switch(t){case"rgb":e=this.rgbString;break;case"hex":e=this.hex;break;case"rgbaHex":e=this.hexa;break;case"hsl":e=this.hslString;break;case"hsla":e=this.hslaString;break;case"cmyk":e=this.cmykString;break;case"cmyka":e=this.cmykaString;break;default:e=this.rgbString;break}return e}mix(t,e=.5){const i=this.rgba;i[3]=M(i[3]);const s=new d(t).rgba;s[3]=M(s[3]),e=N(e);const o=i.map((n,l)=>{const a=s[l],h=a<n,p=h?n-a:a-n,c=Math.round(p*e);return h?n-c:c+n});return o[3]=D(o[3]),d.fromArray(o)}adjustSatLum(t,e,i){const s=this.hsl;let o=s[t],n=(i?o:100-o)*e;return s[t]=K(100,i?o-n:o+n),s.a=this.a,new d(s)}lighten(t,e=!1){return this.adjustSatLum("l",t,e)}darken(t){return this.lighten(t,!0)}saturate(t,e=!1){return this.adjustSatLum("s",t,e)}desaturate(t){return this.saturate(t,!0)}grayscale(){return this.desaturate(1)}rotate(t){return this.hue(t)}hue(t){const e=this.hsl;return e.h=Math.round(e.h+t)%360,e.a=this.a,new d(e)}fadeIn(t,e){let i=this.alpha;const{r:s,g:o,b:n}=this;let l=(1-i)*t;return i=e?i-l:i+l,d({r:s,g:o,b:n,a:i})}fadeOut(t){return this.fadeIn(t,!0)}negate(){let t=this.rgb.map(e=>255-e);return this.a!==void 0&&t.push(this.alpha),d.fromArray(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tt=r=>(...t)=>({_$litDirective$:r,values:t});let Pt=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,e){this._$Ct=r,this._$AM=t,this._$Ci=e}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=Tt(class extends Pt{constructor(r){var t;if(super(r),r.type!==Bt.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var e,i;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((e=this.st)!=null&&e.has(o))&&this.it.add(o);return this.render(t)}const s=r.element.classList;for(const o of this.it)o in t||(s.remove(o),this.it.delete(o));for(const o in t){const n=!!t[o];n===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(n?(s.add(o),this.it.add(o)):(s.remove(o),this.it.delete(o)))}return _}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot="important",ae=" !"+Ot,L=Tt(class extends Pt{constructor(r){var t;if(super(r),r.type!==Bt.ATTRIBUTE||r.name!=="style"||((t=r.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{const i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){const{style:e}=r.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const i of this.ut)t[i]==null&&(this.ut.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ut.add(i);const o=typeof s=="string"&&s.endsWith(ae);i.includes("-")||o?e.setProperty(i,o?s.slice(0,-11):s,o?Ot:""):e[i]=s}}return _}}),U=(r,t,e="color-update")=>{const i=e.includes("color")?{color:t}:t;let s=new CustomEvent(e,{bubbles:!0,composed:!0,detail:i});r.dispatchEvent(s)},Nt=(r=3,t)=>{let e=0,i=100,s=50,o=null,n=!1;t&&(i=t.s,t.hasOwnProperty("v")?(o=t.v,s=null,n=!0):s=t.l);const l=[];let a,h;const p=(c,g)=>`${c.css} ${(g*100).toFixed(1)}%`;for(;e<360;)a=d.parse(n?{h:e,s:i,v:o}:{h:e,s:i,l:s}),h=e/360,l.push(p(a,h)),e+=r;return e=359,a=d.parse(n?{h:e,s:i,v:o}:{h:e,s:i,l:s}),h=1,l.push(p(a,h)),l.join(", ")},J=f`<svg stroke='currentColor' fill='none' stroke-width='0' viewBox='0 0 24 24'>
  <path d='M13 7H7V5H13V7Z' fill='currentColor'></path>
  <path d='M13 11H7V9H13V11Z' fill='currentColor'></path>
  <path d='M7 15H13V13H7V15Z' fill='currentColor'></path>
  <path fill-rule='evenodd' clip-rule='evenodd' d='M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z' fill='currentColor'></path>
</svg>`,Q=class extends ${constructor(){super(),this.gradient={backgroundImage:`linear-gradient(90deg, ${Nt(24)})`},this.width=400,this.sliderStyle={display:"none"}}firstUpdated(){let t=this.renderRoot.querySelector("lit-movable");t.onmovestart=()=>{U(this.renderRoot,{sliding:!0},"sliding-hue")},t.onmoveend=()=>{U(this.renderRoot,{sliding:!1},"sliding-hue")},t.onmove=({posLeft:e})=>this.selectHue({offsetX:e}),this.sliderStyle=this.sliderCss(this.hue)}get sliderBounds(){let t=this.width/360,e=Number(this.hue)*t,i=0-e,s=this.width-e;return{min:i,max:s,posLeft:e}}get sliderCss(){return t=>(this.color.hsx&&(t=this.color.hsx.h),t===void 0&&(t=this.color.hsl.h),{backgroundColor:d.parse({h:t,s:100,l:50}).css})}willUpdate(t){var e;if(t.get("hue")&&isFinite(this.hue)){if((e=this.color)!=null&&e.hsx)return;let i=this.hue;this.sliderStyle=this.sliderCss(i)}}selectHue(t){let e=360/this.width,i=t.offsetX,s=Math.max(0,Math.min(359,Math.round(i*e))),o=this.renderRoot.querySelector("a"),n=new CustomEvent("hue-update",{bubbles:!0,composed:!0,detail:{h:s}});o.dispatchEvent(n),this.sliderStyle=this.sliderCss(s)}render(){return f`
      <div style=${L(this.gradient)} class='bar' @click='${this.selectHue}'>
        <lit-movable horizontal='${this.sliderBounds.min}, ${this.sliderBounds.max}' posLeft='${this.sliderBounds.posLeft}'>
          <a class='slider' style=${L(this.sliderCss(this.h))}></a>
        </lit-movable>

      </div>`}};u(Q,"properties",{hue:{type:Number},color:{type:Object},gradient:{type:String,attribute:!1},sliderStyle:{type:String,attribute:!1},sliderBounds:{type:Object},width:{type:Number,attribute:!1}}),u(Q,"styles",E`
    :host > div {
      display: block;
      width: ${ut(Q.width)}px;
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
  `);let he=Q;customElements.define("hue-bar",he);const Lt=E`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), #fff;
  background-repeat: repeat, repeat;
  background-position: 0 0, 6px 6px;
  background-size: 12px 12px, 12px 12px;
`,Ut=E`
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
`,jt=E`
  color: var(--input-active-color);
  background-color: var(--input-active-bg);
  border-color: var(--input-active-border-color);
  outline: 0;
  box-shadow: var(--input-active-box-shadow);
`,de=E`
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
      ${Ut}
    }
    :host .form-control:focus {
      ${jt}
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
      ${Lt}
      z-index: 0;
    }
  `,ce=E`
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
    ${Ut}
  }

  :host .form-control:focus {
    ${jt}
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
    ${Lt}
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  :host div.active .transparent-checks {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`,pe={r:"R (red) channel",g:"G (green) channel",b:"B (blue) channel",h:"H (hue) channel",s:"S (saturation) channel",v:"V (value / brightness) channel",l:"L (luminosity) channel",a:"A (alpha / opacity) channel"};class at extends ${constructor(){super(),u(this,"valueChange",(t,e=null)=>{e=e??Number(this.renderRoot.querySelector("input").value),this.channel==="a"&&(e/=100),this.c[this.channel]=e;let i=d.parse(this.c);this.group!=="rgb"&&(i.hsx=this.c),this.c=this.group==="rgb"?this.color.rgbObj:this.isHsl?this.color.hsl:this.color.hsv,U(this.renderRoot,i)})}clickPreview(t){const e=Math.max(0,Math.min(t.offsetX,128));let i=Math.round(e/128*this.max);this.channel==="a"&&(i=Number((e/127).toFixed(2))),this.valueChange(null,i),this.setActive(!1)}setActive(t){this.active=t,t&&this.renderRoot.querySelector("input").select()}setPreviewGradient(){let t;this.group==="rgb"?t=this.color.rgbObj:this.color.hsx?t=this.color.hsx:t=this.isHsl?this.color.hsl:this.color.hsv,this.c=t;let e=this.group,i=this.channel;const s=i==="a";this.v=t[i],s&&(this.v*=100);let o=255,n,l;if(e!=="rgb"||i==="a")if(i==="h"){o=this.max=359,this.previewGradient={"--preview":`linear-gradient(90deg, ${Nt(24,t)})`,"--pct":`${100*(t.h/o)}%`};return}else s?o=1:o=100;if(this.max=o,n={...t},l=n,n[this.channel]=0,n=d.parse(n),l[this.channel]=o,l=d.parse(l),this.channel==="l"){let a={...t};a.l=50,this.previewGradient={"--preview":`linear-gradient(90deg, ${n.hex}, ${d.parse(a).hex}, ${l.hex})`,"--pct":`${100*(t[this.channel]/o)}%`}}else this.previewGradient={"--preview":`linear-gradient(90deg, ${s?n.css:n.hex}, ${s?l.css:l.hex})`,"--pct":`${100*(t[this.channel]/o)}%`}}willUpdate(t){this.setPreviewGradient()}render(){const t=this.channel==="a"?f`<div class='transparent-checks'></div>`:null,e=this.channel==="a"?100:this.max;return f`
      <div class='${lt({active:this.active})}'>
        <label for=channel_${this.ch} >${this.channel.toUpperCase()}</label>
        <input id=channel_${this.ch} aria-label='${pe[this.channel]}'
          class='form-control' .value='${Math.round(this.v)}'
          type='number' min='0' max='${e}'
          @input='${this.valueChange}'
          @focus='${()=>this.setActive(!0)}'
          @blur='${()=>this.setActive(!1)}'
        />
        <div class='preview-bar' style='${L(this.previewGradient)}' @mousedown='${this.clickPreview}'>
          <div class='pct'></div>
          ${t}
        </div>
      </div>`}}u(at,"properties",{group:{type:String},channel:{type:String},color:{type:Object},isHsl:{type:Boolean},c:{type:Object,state:!0,attribute:!1},previewGradient:{type:Object,state:!0,attribute:!1},active:{type:Boolean,state:!0,attribute:!1},max:{type:Number,state:!0,attribute:!1},v:{type:Number,state:!0,attribute:!1}}),u(at,"styles",ce),customElements.define("color-input-channel",at);class ht extends ${constructor(){super(),this.isHsl=!0,this.circlePos={top:0,left:0,bounds:{x:"",y:""}},this.size=160}setColor(t){U(this.renderRoot,t)}setCircleCss(t,e){let i=`${t}`,s=`${e}`,o={x:`0, ${this.size}`,y:`0,${this.size}`};this.circlePos={top:s,left:i,bounds:o}}pickCoord({offsetX:t,offsetY:e}){let i=t,s=e;const{size:o,hsw:n,isHsl:l,color:a}=this;let h=(o-s)/o;h=Math.round(h*100);let p=Math.round(i/o*100),c={h:n.h,s:p,[l?"l":"v"]:h},g=l?d.fromHsl(c):d.fromHsv(c);this.setCircleCss(i,s),g.a=a.alpha,g.hsx=c,g.fromHSLCanvas=!0,this.setColor(g)}debouncePaintDetail(t){clearTimeout(this.bouncer),this.bouncer=setTimeout(()=>this.paintHSL(t,!0),50),this.paintHSL(t,!1)}paintHSL(t,e=null){if(this.debounceMode&&e===null)return this.debouncePaintDetail(t);const{ctx:i,color:s,isHsl:o,size:n}=this;if(!i)return;let l=s;t=t??o?l.hsl:l.hsv,t.w=o?t.l:t.v;let{h:a,s:h,w:p}=t,c=this.hsw={h:a,s:h,w:p},g=n/100;const y=o?(w,A,dt)=>`hsl(${w}, ${A}%, ${100-dt}%)`:(w,A,dt)=>d.fromHsv({h:w,s:A,v:100-dt}).hex;let x=e===!1?4:1;for(let w=0;w<100;w+=x)for(let A=0;A<100;A+=x)i.fillStyle=y(a,w,A),i.fillRect(w,A,w+x,A+x);this.setCircleCss(c.s*g,n-t.w*g)}willUpdate(t){var e;if(t.has("color")||t.has("isHsl")){if((e=this.color)!=null&&e.hsx){if(this.color.fromHSLCanvas){delete this.color.fromHSLCanvas;return}return this.paintHSL(this.color.hsx)}this.paintHSL()}}firstUpdated(t){let e=this.renderRoot.querySelector("canvas");this.ctx=e.getContext("2d"),this.paintHSL()}circleMove({posTop:t,posLeft:e}){this.pickCoord({offsetX:e,offsetY:t})}render(){let t={height:this.size+"p",width:this.size+"px"},{top:e,left:i,bounds:s}=this.circlePos;return f`
      <div class='outer' @click='${this.pickCoord}' style='${L(t)}'>
        <canvas height='100' width='100'></canvas>
        <lit-movable
          boundsX='${s.x}' boundsY='${s.y}'
          posTop='${e}' posLeft='${i}' .onmove='${o=>this.circleMove(o)}'>
          <div class='circle'></div>
        </lit-movable>
      </div>`}}u(ht,"properties",{color:{type:Object},isHsl:{type:Boolean},size:{type:Number},debounceMode:{type:Boolean},ctx:{type:Object,state:!0,attribute:!1},hsw:{type:Object,state:!0,attribute:!1},circlePos:{type:Object,state:!0,attribute:!1}}),u(ht,"styles",E`
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
  `),customElements.define("hsl-canvas",ht);const tt=r=>isFinite(r)?Number(r):Number(r.replace(/[^0-9.\-]/g,"")),Rt=r=>(r=Number(r),(isNaN(r)||[void 0,null].includes(r))&&(r=0),r);class m{constructor(t,e){this.x=Rt(t),this.y=Rt(e)}static fromPointerEvent(t){const{pageX:e,pageY:i}=t;return new m(e,i)}static fromElementStyle(t){let e=tt(t.style.left??0),i=tt(t.style.top??0);return new m(e,i)}static fromObject({x:t,y:e}){return new m(t,e)}get top(){return this.y}set top(t){this.y=t}get left(){return this.x}set left(t){this.x=t}}const ue=r=>{const t=m.fromPointerEvent(r),e=r.target.getBoundingClientRect();let i=t.x-(e.left+document.body.scrollLeft),s=t.y-(e.top+document.body.scrollTop);return new m(i,s)};class S{constructor(t=-1/0,e=1/0){this.min=t,this.max=e,this.attr=""}get constrained(){return this.min===this.max}get unconstrained(){return this.min===-1/0&&this.max===1/0}static fromString(t=null,e=0){if(!t)return new S;if(t==="null")return new S(0,0);let[i,s]=t.split(",").map(n=>Number(n.trim())+e),o=new S(i,s);return o.attr=t,o}}class zt extends ${constructor(){super(),u(this,"_target"),u(this,"_targetSelector",null),u(this,"_boundsX",new S),u(this,"_boundsY",new S),u(this,"isMoving",!1),u(this,"moveState",{}),u(this,"_vertical",null),u(this,"_horizontal",null),u(this,"_posTop",null),u(this,"_posLeft",null),u(this,"_grid",1),u(this,"pointerId")}get vertical(){return this._vertical}set vertical(t){this.boundsY=t,this.boundsX="null",this._vertical=t}get horizontal(){return this._horizontal}set horizontal(t){this.boundsX=t,this.boundsY="null",this._horizontal=t}set posTop(t){t=Number(t),this._posTop=t,this.target&&(this.target.style.top=t+"px")}get posTop(){return this._posTop}set posLeft(t){t=Number(t),this._posLeft=t,this.target&&(this.target.style.left=t+"px")}get posLeft(){return this._posLeft}get grid(){return this._grid}set grid(t){t>0&&t<1/0?this._grid=t:this._grid=1}get bounds(){return{left:this._boundsX,top:this._boundsY}}set targetSelector(t){this._targetSelector=t,this._retryTarget=document.querySelector(t)===null,this._target=document.querySelector(t)}get targetSelector(){return this._targetSelector}get target(){return this._target??this}set target(t){this._target=t}get boundsX(){return this._boundsX}set boundsX(t){var e;this._boundsX=S.fromString(t,tt(((e=this.target)==null?void 0:e.style.left)??0)),this.bounds.left=this._boundsX}get boundsY(){return this._boundsY}set boundsY(t){var e;this._boundsY=S.fromString(t,tt(((e=this.target)==null?void 0:e.style.top)??0)),this.bounds.top=this._boundsY}firstUpdated(t){this._retryTarget&&(this.target=document.querySelector(this.targetSelector));let{bounds:e,target:i,posTop:s,posLeft:o}=this,{offsetLeft:n,offsetTop:l,style:{left:a,top:h}}=this.target;i.classList.add("--movable-base"),i.addEventListener("pointerdown",p=>this.pointerdown(p)),i.style.position="absolute",i.style.cursor="pointer",o?i.style.left=o+"px":!a&&n&&(i.style.left=n+"px",e.left.constrained&&(e.left.min=e.left.max=n)),s?i.style.top=s+"px":!h&&l&&(i.style.top=l+"px",e.top.constrained&&(e.top.min=e.top.max=l))}reposition(t){if(typeof t=="object"){const{eventsOnly:e,target:i}=this;this.posTop=t.top,this.posLeft=t.left,i&&!e&&(i.style.left=t.left+"px",i.style.top=t.top+"px")}else this.isMoving=t}moveInit(t){let e=this.moveState,{target:i,bounds:s}=this;e.mouseCoord=m.fromPointerEvent(t),e.startCoord=m.fromElementStyle(i),e.moveDist=new m(0,0),e.totalDist=new m(0,0),e.clickOffset=ue(t),e.coords=m.fromObject(e.startCoord),e.maxX=isFinite(s.left.min)&&isFinite(s.left.max)?s.left.min+s.left.max:1/0,e.maxY=isFinite(s.top.min)&&isFinite(s.top.max)?s.top.min+s.top.max:1/0,this.isMoving=!0,this.reposition(!0),this.eventBroker("movestart",t)}eventBroker(t,e){this.moveState.posTop=this.posTop,this.moveState.posLeft=this.posLeft;let i=new CustomEvent(t,{bubbles:!0,composed:!0,detail:{...e,...this.moveState,element:this}});this.renderRoot.dispatchEvent(i);let s=this[`on${t}`];s&&s({...e,...this.moveState,me:this})}unbind(t){this.pointerId=null,this.isMoving=!1,document.body.removeEventListener("pointermove",e=>this.motionHandler(e)),this.moveEnd(t)}moveEnd(t){document.body.removeEventListener("pointerup",e=>this.unbind(e)),this.isMoving=this.moveState.isMoving=!1,this.reposition(!1),this.eventBroker("moveend",t)}motionHandler(t){t.stopPropagation();let e=m.fromPointerEvent(t),i=this.moveState,{grid:s,bounds:o,shiftBehavior:n,boundsX:l,boundsY:a}=this;if(i.moveDist=m.fromObject({x:e.x-i.mouseCoord.x,y:e.y-i.mouseCoord.y}),i.mouseCoord=e,i.totalDist=m.fromObject({x:i.totalDist.x+i.moveDist.x,y:i.totalDist.y+i.moveDist.y}),i.coords=m.fromObject({x:Math.round(i.totalDist.x/s)*s+i.startCoord.x,y:Math.round(i.totalDist.y/s)*s+i.startCoord.y}),n&&t.shiftKey&&l.unconstrained&&a.unconstrained){let{x:h,y:p}=i.totalDist;Math.abs(h)>Math.abs(p)?i.coords.top=i.startCoord.y:i.coords.left=i.startCoord.x}else i.coords.y=Math.min(Math.max(o.top.min,i.coords.top),o.top.max),i.coords.x=Math.min(Math.max(o.left.min,i.coords.left),o.left.max);isFinite(i.maxX)&&(i.pctX=Math.max(o.left.min,i.coords.left)/i.maxX),isFinite(i.maxY)&&(i.pctY=Math.max(o.top.min,i.coords.top)/i.maxY),this.reposition(i.coords),this.eventBroker("move",t)}pointerdown(t){document.body.setPointerCapture(t.pointerId),t.preventDefault(),t.stopPropagation(),t.pointerId!==void 0&&(this.pointerId=t.pointerId),document.body.addEventListener("pointerup",e=>this.unbind(e),!1),document.body.addEventListener("pointermove",e=>{this.pointerId!==void 0&&e.pointerId===this.pointerId&&this.motionHandler(e)},!1),this.moveInit(t)}render(){return f`<slot></slot>`}}u(zt,"properties",{posLeft:{type:Number},posTop:{type:Number},target:{type:Object,attribute:!1,state:!0},targetSelector:{type:String},bounds:{type:Object,attribute:!1,state:!0},boundsX:{type:String},boundsY:{type:String},vertical:{type:String},horizontal:{type:String},grid:{type:Number},shiftBehavior:{type:Boolean},disabled:{type:Boolean},eventsOnly:{type:Boolean},onmovestart:{type:Object},onmoveend:{type:Object},onmove:{type:Object}}),window.customElements.define("lit-movable",zt);class et extends ${constructor(){super(),u(this,"_color"),this._color=d.parse(nt.slateblue),this.isHsl=!0}firstUpdated(t){this.debounceMode=!1,t.has("value")&&(this.color=d.parse(this.value))}get color(){return this._color}set color(t){t=t.hsx?t:t.rgba?d.parse(...t.rgba):d.parse(t),t&&(this.hex=t.hex,this._color=t,U(this.renderRoot,t,"colorchanged"))}updateColor({detail:{color:t}}){this.color=t}setColor(t){const e=this.renderRoot.querySelector("input#hex").value,i=d.parse(e);i?this.color=i:console.log(`ignored unparsable input: ${e}`)}setHue({detail:{h:t}}){let{s:e,l:i,a:s}=this.color.hsl;s===1&&(s=void 0),this.color={h:t,s:e,l:i,a:s}}setHsl(t){this.isHsl=t}okColor(){U(this.renderRoot,this.color,"colorpicked")}showCopyDialog(){if(this.copied=null,this.dlg=this.dlg??this.renderRoot.querySelector("dialog"),this.dlg.open)return this.dlg.classList.remove("open"),this.dlg.close();this.dlg.show(),this.dlg.classList.add("open")}clipboard(t){let e=this.color.toString(t);window.navigator.clipboard.writeText(e).then(()=>{this.hideCopyDialog(e)})}hideCopyDialog(t){if(t){this.copied=t,setTimeout(()=>this.dlg.classList.remove("open"),400),setTimeout(()=>this.hideCopyDialog(),1200);return}this.dlg.classList.remove("open"),this.dlg.close(),this.copied=null}setSliding({detail:t}){this.debounceMode=t.sliding}render(){const t=this.isHsl?["h","s","l"]:["h","s","v"],e={button:!0,active:!this.isHsl,l:!0},i={button:!0,active:this.isHsl,r:!0};let s={backgroundColor:this.color},o=this.copied?{textAlign:"center",display:"block"}:{display:"none"};const n=this.debounceMode;return f`
      <div class='outer'>
        <hue-bar
          @sliding-hue='${this.setSliding}'
          hue='${this.color.hsx?this.color.hsx.h:this.color.hsl.h}'
          @hue-update='${this.setHue}' .color='${this.color}'></hue-bar>
        <div class='d-flex'>
          <div class='col w-30'>
            ${["r","g","b","a"].map(l=>f`
              <color-input-channel
                group='rgb' channel='${l}' isHsl='${this.isHsl}'
                .color='${this.color}' @color-update='${this.updateColor}' />
            `)}
            <div class='hex'>
              <dialog @blur='${()=>this.hideCopyDialog()}' tabindex='0'>
                <sub class='copied' style='${L(o)}'>copied <em>${this.copied}</em></sub>
                ${this.copied?f``:f`
                  <a class='copy-item' @click=${l=>this.clipboard("hex",l)} id='copyHex'>
                    <input class='form-control' disabled='disabled' value='${this.color.hex}'>
                    <button title='Copy HEX String' class='button' tabindex='0'>${J}</button>
                  </a>
                  <a class='copy-item' @click=${l=>this.clipboard("css",l)} id='copyRgb'>
                    <input class='form-control' disabled='disabled' value='${this.color.css}'>
                    <button title='Copy RGB String' class='button' tabindex='0'>${J}</button>
                  </a>
                  <a class='copy-item'  id='copyHsl'
                     @click=${l=>this.clipboard(this.color.alpha<1?"hsla":"hsl",l)}>
                    <input class='form-control' disabled='disabled'
                           value='${this.color.toString(this.color.alpha<1?"hsla":"hsl")}'>
                    <button title='Copy HSL String' class='button' tabindex='0'>${J}</button>
                  </a>
                `}

              </dialog>
              <label for='hex'>#</label>
              <input aria-label='Hexadecimal value (editable - accepts any valid color string)'
                     @input='${this.setColor}' class='form-control' id='hex' placeholder='Set color'
                     value='${this.hex}' /><a title='Show copy to clipboard menu'
                                               @click='${this.showCopyDialog}' class='button copy'>
              ${J}
              <span>&#11205;</span>
            </a>

            </div>
          </div>
          <div class='col w-30'>
            ${t.map(l=>f`
              <color-input-channel
                group="hsl" channel="${l}" .isHsl="${this.isHsl}"
                .color="${this.color}" @color-update="${this.updateColor}" />
            `)}
            <div class='hsl-mode'>
              <a title='Use hue / saturation / value (brightness) mode'
                 class='${lt(e)}'
                 @click='${()=>this.setHsl(!1)}'>HSV</a><a
              title='Use hue / saturation / luminosity mode'
              class='${lt(i)}'
              @click='${()=>this.setHsl(!0)}'>HSL</a>
            </div>
          </div>
          <div class='w-40'>
            <hsl-canvas .debounceMode='${n}'
              size='${160}' .isHsl='${this.isHsl}'
              .color='${this.color}' @color-update='${this.updateColor}'></hsl-canvas>
            <div class='ok'>
              <a class='button' @click='${this.okColor}'>OK
                <span class='swatch'>
                  <span style='${L(s)}'></span>
                  <span class='checky'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>`}}u(et,"properties",{color:{type:Object,state:!0,attribute:!1},hex:{type:String,state:!0,attribute:!1},value:{type:String},isHsl:{type:Boolean,state:!0,attribute:!1},copied:{type:String},debounceMode:{type:Boolean}}),u(et,"styles",de),window.customElements.define("color-picker",et),B.ColorPicker=et,Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});
