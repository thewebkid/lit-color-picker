(function(_,b){typeof exports=="object"&&typeof module<"u"?b(exports):typeof define=="function"&&define.amd?define(["exports"],b):(_=typeof globalThis<"u"?globalThis:_||self,b(_["color-picker"]={}))})(this,function(_){"use strict";var Hs=Object.defineProperty;var Ms=(_,b,S)=>b in _?Hs(_,b,{enumerable:!0,configurable:!0,writable:!0,value:S}):_[b]=S;var A=(_,b,S)=>(Ms(_,typeof b!="symbol"?b+"":b,S),S);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const b=globalThis,S=b.ShadowRoot&&(b.ShadyCSS===void 0||b.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),Rt=new WeakMap;let Lt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(S&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Rt.set(e,t))}return t}toString(){return this.cssText}};const jt=o=>new Lt(typeof o=="string"?o:o+"",void 0,At),D=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Lt(e,o,At)},Ne=(o,t)=>{if(S)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=b.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},zt=S?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return jt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Oe,defineProperty:Re,getOwnPropertyDescriptor:Le,getOwnPropertyNames:je,getOwnPropertySymbols:ze,getPrototypeOf:Ie}=Object,F=globalThis,It=F.trustedTypes,Ve=It?It.emptyScript:"",xt=F.reactiveElementPolyfillSupport,J=(o,t)=>o,wt={toAttribute(o,t){switch(t){case Boolean:o=o?Ve:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Vt=(o,t)=>!Oe(o,t),qt={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:Vt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);let I=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Re(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=Le(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const a=i==null?void 0:i.call(this);r.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qt}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const t=Ie(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const e=this.properties,s=[...je(e),...ze(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(zt(i))}else t!==void 0&&e.push(zt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:wt).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:wt;this._$Em=i,this[i]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??Vt)(this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$E_)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$Ej()}catch(i){throw t=!1,this._$Ej(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(e=>this._$EO(e,this[e]))),this._$Ej()}updated(t){}firstUpdated(t){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[J("elementProperties")]=new Map,I[J("finalized")]=new Map,xt==null||xt({ReactiveElement:I}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=globalThis,dt=Q.trustedTypes,Xt=dt?dt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Yt="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,Wt="?"+k,qe=`<${Wt}>`,U=document,tt=()=>U.createComment(""),et=o=>o===null||typeof o!="object"&&typeof o!="function",Zt=Array.isArray,Xe=o=>Zt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",St=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gt=/-->/g,Kt=/>/g,B=RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jt=/'/g,Qt=/"/g,te=/^(?:script|style|textarea|title)$/i,Ye=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),x=Ye(1),H=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ee=new WeakMap,N=U.createTreeWalker(U,129);function se(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xt!==void 0?Xt.createHTML(t):t}const We=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":"",n=st;for(let a=0;a<e;a++){const l=o[a];let h,d,c=-1,u=0;for(;u<l.length&&(n.lastIndex=u,d=n.exec(l),d!==null);)u=n.lastIndex,n===st?d[1]==="!--"?n=Gt:d[1]!==void 0?n=Kt:d[2]!==void 0?(te.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=B):d[3]!==void 0&&(n=B):n===B?d[0]===">"?(n=i??st,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?B:d[3]==='"'?Qt:Jt):n===Qt||n===Jt?n=B:n===Gt||n===Kt?n=st:(n=B,i=void 0);const m=n===B&&o[a+1].startsWith("/>")?" ":"";r+=n===st?l+qe:c>=0?(s.push(h),l.slice(0,c)+Yt+l.slice(c)+k+m):l+k+(c===-2?a:m)}return[se(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};let Et=class Ue{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const a=t.length-1,l=this.parts,[h,d]=We(t,e);if(this.el=Ue.createElement(h,s),N.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=N.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Yt)){const u=d[n++],m=i.getAttribute(c).split(k),w=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:w[2],strings:m,ctor:w[1]==="."?Ge:w[1]==="?"?Ke:w[1]==="@"?Je:pt}),i.removeAttribute(c)}else c.startsWith(k)&&(l.push({type:6,index:r}),i.removeAttribute(c));if(te.test(i.tagName)){const c=i.textContent.split(k),u=c.length-1;if(u>0){i.textContent=dt?dt.emptyScript:"";for(let m=0;m<u;m++)i.append(c[m],tt()),N.nextNode(),l.push({type:2,index:++r});i.append(c[u],tt())}}}else if(i.nodeType===8)if(i.data===Wt)l.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(k,c+1))!==-1;)l.push({type:7,index:r}),c+=k.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}};function V(o,t,e=o,s){var n,a;if(t===H)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const r=et(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=V(o,i._$AS(o,t.values),i,s)),t}let Ze=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??U).importNode(e,!0);N.currentNode=i;let r=N.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new Ct(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Qe(r,this,t)),this._$AV.push(h),l=s[++a]}n!==(l==null?void 0:l.index)&&(r=N.nextNode(),n++)}return N.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},Ct=class Be{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),et(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Xe(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==g&&et(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Et.createElement(se(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const n=new Ze(i,this),a=n.u(this.options);n.p(e),this.$(a),this._$AH=n}}_$AC(t){let e=ee.get(t.strings);return e===void 0&&ee.set(t.strings,e=new Et(t)),e}T(t){Zt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Be(this.k(tt()),this.k(tt()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=V(this,t,e,0),n=!et(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=V(this,a[s+l],e,l),h===H&&(h=this._$AH[l]),n||(n=!et(h)||h!==this._$AH[l]),h===g?t=g:t!==g&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}n&&!i&&this.O(t)}O(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ge=class extends pt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===g?void 0:t}};class Ke extends pt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}let Je=class extends pt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??g)===H)return;const s=this._$AH,i=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},Qe=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}};const Ft=Q.litHtmlPolyfillSupport;Ft==null||Ft(Et,Ct),(Q.litHtmlVersions??(Q.litHtmlVersions=[])).push("3.1.1");const ts=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new Ct(t.insertBefore(tt(),r),r,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class M extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ts(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return H}}M._$litElement$=!0,M.finalized=!0,(De=globalThis.litElementHydrateSupport)==null||De.call(globalThis,{LitElement:M});const kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:M}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");const v=o=>ut(255,Math.round(Number(o))),O=o=>v(o*255),R=o=>ut(1,o/255),ut=(o,t)=>Math.max(0,Math.min(o,t)),q=o=>o===void 0?1:(typeof o=="string"&&o.indexOf("%")>0&&(o=Number(o.split("%")[0])/100),o=Number(Number(o).toFixed(3)),isNaN(o)?1:ut(1,o)),Ht={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};class p{constructor(t,e,s,i){return p.isBaseConstructor(t)?(this.r=v(t.r),this.g=v(t.g),this.b=v(t.b),t.a!==void 0&&(this.a=q(t.a)),this):p.parse(t,e,s,i)}static parse(t,e,s,i){if(p.isBaseConstructor(t))return new p(t);if(e!==void 0&&s!==void 0){let r=v(t);return e=v(e),s=v(s),i!==void 0&&(i=q(i)),new p({r,g:e,b:s,a:i})}if(Array.isArray(t))return p.fromArray(t);if(typeof t=="string"){let r;if(e!==void 0&&Number(e)<=1&&Number(e)>=0&&(r=Number(e)),t.startsWith("#"))return p.fromHex(t,r);if(Ht[t.toLowerCase()])return p.fromNamed(t,r);if(t.startsWith("rgb"))return p.fromRgbString(t);if(t==="transparent"){let n,a,l,h;return n=a=l=h=0,new p({r:n,g:a,b:l,a:h})}else return null}else if(typeof t=="object"){if(t.a!==void 0&&(this.a=q(t.a)),t.h!==void 0){let r={};if(t.v!==void 0)r=p.fromHsv(t);else if(t.l!==void 0)r=p.fromHsl(t);else return p.fromArray([0,0,0]);return r.a=t.a!==void 0?q(t.a):void 0,new p(r)}return t.c!==void 0?p.fromCMYK(t):this}return p.fromArray([0,0,0])}static isBaseConstructor(t){return typeof t=="object"&&t.r!==void 0&&t.g!==void 0&&t.b!==void 0}static fromNamed(t,e){return p.fromHex(Ht[t.toLowerCase()],e)}static fromArray(t){t=t.filter(s=>s!==""&&isFinite(s));const e={r:v(t[0]),g:v(t[1]),b:v(t[2])};return t[3]!==void 0&&(e.a=q(t[3])),new p(e)}static fromHex(t,e){t=t.replace("#",""),(t.length===3||t.length===4)&&(t=t.split("").map(i=>i+i).join(""));let s=t.match(/[A-Za-z0-9]{2}/g).map(i=>parseInt(i,16));return s.length===4?s[3]/=255:e!==void 0&&(s[3]=e),p.fromArray(s)}static fromRgbString(t){if(t.includes(","))return p.fromArray(t.split("(")[1].split(")")[0].split(","));const e=t.replace("/"," ").split("(")[1].replace(")","").split(" ").filter(s=>s!==""&&isFinite(Number(s)));return p.fromArray(e)}static fromHsv({h:t,s:e,v:s}){e=e/100,s=s/100;const i=Math.floor(t/60%6),r=t/60-i,n=s*(1-e),a=s*(1-r*e),l=s*(1-(1-r)*e),d=[[s,l,n],[a,s,n],[n,s,l],[n,a,s],[l,n,s],[s,n,a]][i].map(c=>Math.round(c*256));return new p({r:v(d[0]),g:v(d[1]),b:v(d[2])})}static fromHsl({h:t,s:e,l:s}){e/=100,s/=100;const i=(1-Math.abs(2*s-1))*e,r=i*(1-Math.abs(t/60%2-1)),n=s-i/2;let a=0,l=0,h=0;return 0<=t&&t<60?(a=i,l=r,h=0):60<=t&&t<120?(a=r,l=i,h=0):120<=t&&t<180?(a=0,l=i,h=r):180<=t&&t<240?(a=0,l=r,h=i):240<=t&&t<300?(a=r,l=0,h=i):300<=t&&t<360&&(a=i,l=0,h=r),new p({r:O(n+a),g:O(n+l),b:O(n+h)})}static fromCMYK({c:t,m:e,y:s,k:i,a:r}){const n=a=>O(1-Math.min(1,a/100*(1-i)+i));return new p({r:n(t),b:n(e),g:n(s),a:r})}get alpha(){return this.a===void 0?1:this.a}get rgb(){return[this.r,this.g,this.b]}get rgba(){return[this.r,this.g,this.b,this.alpha]}get rgbObj(){let{r:t,g:e,b:s}=this;return{r:t,g:e,b:s,a:this.alpha}}get css(){return this.rgbString}get rgbString(){return this.a===void 0?`rgb(${this.rgb.join(",")})`:`rgba(${this.rgba.join(",")})`}get rgbaString(){return`rgba(${this.rgba.join(",")})`}get hex(){return`#${this.rgb.map(t=>t.toString(16).padStart(2,"0")).join("")}`.toUpperCase()}get hexa(){return this.rgbaHex}get rgbaHex(){let t=this.rgba;return t[3]=O(t[3]),`#${t.map(e=>e.toString(16).padStart(2,"0")).join("")}`.toUpperCase()}get hsv(){const t=R(this.r),e=R(this.g),s=R(this.b),i=Math.min(t,e,s),r=Math.max(t,e,s);let n;const a=r,l=r-i;l===0?n=0:r===t?n=60*((e-s)/l)%360:r===e?n=60*((s-t)/l)+120:r===s?n=60*((t-e)/l)+240:n=0,n<0&&(n+=360);const h=r===0?0:1-i/r;return{h:Math.round(n),s:Math.round(h*100),v:Math.round(a*100),a:this.alpha}}get hsl(){const t=R(this.r),e=R(this.g),s=R(this.b),i=Math.max(t,e,s),r=Math.min(t,e,s);let n,a;const l=(i+r)/2;if(i===r)n=a=0;else{const h=i-r;switch(a=l>.5?h/(2-i-r):h/(i+r),i){case t:n=(e-s)/h+(e<s?6:0);break;case e:n=(s-t)/h+2;break;case s:n=(t-e)/h+4;break}n/=6}return{h:Math.round(n*360),s:Math.round(a*100),l:Math.round(l*100),a:this.alpha}}get cmyk(){let t,e,s,i;const r=parseFloat(this.r)/255,n=parseFloat(this.g)/255,a=parseFloat(this.b)/255;return i=1-Math.max(r,n,a),i===1?t=e=s=0:(t=(1-r-i)/(1-i),e=(1-n-i)/(1-i),s=(1-a-i)/(1-i)),t=Math.round(100*t),e=Math.round(100*e),s=Math.round(100*s),i=Math.round(100*i),this.alpha?{c:t,m:e,y:s,k:i,a:this.alpha}:{c:t,m:e,y:s,k:i}}get hslString(){const t=this.hsl;return`hsl(${t.h}, ${t.s}%, ${t.l}%)`}get hslaString(){const t=this.hsl;return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`}get cmykString(){const t=this.cmyk;return`cmyk(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%)`}get cmykaString(){const t=this.cmyk;return`cmyka(${t.c}%, ${t.m}%, ${t.y}%, ${t.k}%, ${t.a})`}toString(t="rgb"){let e;switch(t){case"rgb":e=this.rgbString;break;case"hex":e=this.hex;break;case"rgbaHex":e=this.hexa;break;case"hsl":e=this.hslString;break;case"hsla":e=this.hslaString;break;case"cmyk":e=this.cmykString;break;case"cmyka":e=this.cmykaString;break;default:e=this.rgbString;break}return e}mix(t,e=.5){const s=this.rgba;s[3]=O(s[3]);const i=new p(t).rgba;i[3]=O(i[3]),e=q(e);const r=s.map((n,a)=>{const l=i[a],h=l<n,d=h?n-l:l-n,c=Math.round(d*e);return h?n-c:c+n});return r[3]=R(r[3]),p.fromArray(r)}adjustSatLum(t,e,s){const i=this.hsl;let r=i[t],n=(s?r:100-r)*e;return i[t]=ut(100,s?r-n:r+n),i.a=this.a,new p(i)}lighten(t,e=!1){return this.adjustSatLum("l",t,e)}darken(t){return this.lighten(t,!0)}saturate(t,e=!1){return this.adjustSatLum("s",t,e)}desaturate(t){return this.saturate(t,!0)}grayscale(){return this.desaturate(1)}rotate(t){return this.hue(t)}hue(t){const e=this.hsl;return e.h=Math.round(e.h+t)%360,e.a=this.a,new p(e)}fadeIn(t,e){let s=this.alpha;const{r:i,g:r,b:n}=this;let a=(1-s)*t;return s=e?s-a:s+a,p({r:i,g:r,b:n,a:s})}fadeOut(t){return this.fadeIn(t,!0)}negate(){let t=this.rgb.map(e=>255-e);return this.a!==void 0&&t.push(this.alpha),p.fromArray(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},re=o=>(...t)=>({_$litDirective$:o,values:t});let oe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=re(class extends oe{constructor(o){var t;if(super(o),o.type!==ie.ATTRIBUTE||o.name!=="class"||((t=o.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var s,i;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((s=this.st)!=null&&s.has(r))&&this.it.add(r);return this.render(t)}const e=o.element.classList;for(const r of this.it)r in t||(e.remove(r),this.it.delete(r));for(const r in t){const n=!!t[r];n===this.it.has(r)||(i=this.st)!=null&&i.has(r)||(n?(e.add(r),this.it.add(r)):(e.remove(r),this.it.delete(r)))}return H}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne="important",es=" !"+ne,X=re(class extends oe{constructor(o){var t;if(super(o),o.type!==ie.ATTRIBUTE||o.name!=="style"||((t=o.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const s=o[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const s of this.ut)t[s]==null&&(this.ut.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const i=t[s];if(i!=null){this.ut.add(s);const r=typeof i=="string"&&i.endsWith(es);s.includes("-")||r?e.setProperty(s,r?i.slice(0,-11):i,r?ne:""):e[s]=i}}return H}}),Y=(o,t,e="color-update")=>{const s=e.includes("color")?{color:t}:t;let i=new CustomEvent(e,{bubbles:!0,composed:!0,detail:s});o.dispatchEvent(i)},le=(o=3,t)=>{let e=0,s=100,i=50,r=null,n=!1;t&&(s=t.s,t.hasOwnProperty("v")?(r=t.v,i=null,n=!0):i=t.l);const a=[];let l,h;const d=(c,u)=>`${c.css} ${(u*100).toFixed(1)}%`;for(;e<360;)l=p.parse(n?{h:e,s,v:r}:{h:e,s,l:i}),h=e/360,a.push(d(l,h)),e+=o;return e=359,l=p.parse(n?{h:e,s,v:r}:{h:e,s,l:i}),h=1,a.push(d(l,h)),a.join(", ")},gt=x`<svg stroke='currentColor' fill='none' stroke-width='0' viewBox='0 0 24 24'>
  <path d='M13 7H7V5H13V7Z' fill='currentColor'></path>
  <path d='M13 11H7V9H13V11Z' fill='currentColor'></path>
  <path d='M7 15H13V13H7V15Z' fill='currentColor'></path>
  <path fill-rule='evenodd' clip-rule='evenodd' d='M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z' fill='currentColor'></path>
</svg>`,ct=class ct extends M{constructor(){super(),this.gradient={backgroundImage:`linear-gradient(90deg, ${le(24)})`},this.width=400,this.sliderStyle={display:"none"}}firstUpdated(){let t=this.renderRoot.querySelector("lit-movable");t.onmovestart=()=>{Y(this.renderRoot,{sliding:!0},"sliding-hue")},t.onmoveend=()=>{Y(this.renderRoot,{sliding:!1},"sliding-hue")},t.onmove=({posLeft:e})=>this.selectHue({offsetX:e}),this.sliderStyle=this.sliderCss(this.hue)}get sliderBounds(){let t=this.width/360,e=Number(this.hue)*t,s=0-e,i=this.width-e;return{min:s,max:i,posLeft:e}}get sliderCss(){return t=>(this.color.hsx&&(t=this.color.hsx.h),t===void 0&&(t=this.color.hsl.h),{backgroundColor:p.parse({h:t,s:100,l:50}).css})}willUpdate(t){var s;if(t.get("hue")&&isFinite(this.hue)){if((s=this.color)!=null&&s.hsx)return;let i=this.hue;this.sliderStyle=this.sliderCss(i)}}selectHue(t){let e=360/this.width,s=t.offsetX,i=Math.max(0,Math.min(359,Math.round(s*e))),r=this.renderRoot.querySelector("a"),n=new CustomEvent("hue-update",{bubbles:!0,composed:!0,detail:{h:i}});r.dispatchEvent(n),this.sliderStyle=this.sliderCss(i)}render(){return x`
      <div style=${X(this.gradient)} class='bar' @click='${this.selectHue}'>
        <lit-movable horizontal='${this.sliderBounds.min}, ${this.sliderBounds.max}' posLeft='${this.sliderBounds.posLeft}'>
          <a class='slider' style=${X(this.sliderCss(this.h))}></a>
        </lit-movable>

      </div>`}};A(ct,"properties",{hue:{type:Number},color:{type:Object},gradient:{type:String,attribute:!1},sliderStyle:{type:String,attribute:!1},sliderBounds:{type:Object},width:{type:Number,attribute:!1}}),A(ct,"styles",D`
    :host > div {
      display: block;
      width: ${jt(ct.width)}px;
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
  `);let Pt=ct;customElements.define("hue-bar",Pt);const ae=D`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), #fff;
  background-repeat: repeat, repeat;
  background-position: 0 0, 6px 6px;
  background-size: 12px 12px, 12px 12px;
`,he=D`
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
`,ce=D`
  color: var(--input-active-color);
  background-color: var(--input-active-bg);
  border-color: var(--input-active-border-color);
  outline: 0;
  box-shadow: var(--input-active-box-shadow);
`,ss=D`
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
      ${he}
    }
    :host .form-control:focus {
      ${ce}
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
      ${ae}
      z-index: 0;
    }
  `,is=D`
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
    ${he}
  }

  :host .form-control:focus {
    ${ce}
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
    ${ae}
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  :host div.active .transparent-checks {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`,rs={r:"R (red) channel",g:"G (green) channel",b:"B (blue) channel",h:"H (hue) channel",s:"S (saturation) channel",v:"V (value / brightness) channel",l:"L (luminosity) channel",a:"A (alpha / opacity) channel"};class Tt extends M{constructor(){super();A(this,"valueChange",(e,s=null)=>{s=s??Number(this.renderRoot.querySelector("input").value),this.channel==="a"&&(s/=100),this.c[this.channel]=s;let i=p.parse(this.c);this.group!=="rgb"&&(i.hsx=this.c),this.c=this.group==="rgb"?this.color.rgbObj:this.isHsl?this.color.hsl:this.color.hsv,Y(this.renderRoot,i)})}clickPreview(e){const i=Math.max(0,Math.min(e.offsetX,128));let r=Math.round(i/128*this.max);this.channel==="a"&&(r=Number((i/127).toFixed(2))),this.valueChange(null,r),this.setActive(!1)}setActive(e){this.active=e,e&&this.renderRoot.querySelector("input").select()}setPreviewGradient(){let e;this.group==="rgb"?e=this.color.rgbObj:this.color.hsx?e=this.color.hsx:e=this.isHsl?this.color.hsl:this.color.hsv,this.c=e;let s=this.group,i=this.channel;const r=i==="a";this.v=e[i],r&&(this.v*=100);let n=255,a,l;if(s!=="rgb"||i==="a")if(i==="h"){n=this.max=359,this.previewGradient={"--preview":`linear-gradient(90deg, ${le(24,e)})`,"--pct":`${100*(e.h/n)}%`};return}else r?n=1:n=100;if(this.max=n,a={...e},l=a,a[this.channel]=0,a=p.parse(a),l[this.channel]=n,l=p.parse(l),this.channel==="l"){let h={...e};h.l=50,this.previewGradient={"--preview":`linear-gradient(90deg, ${a.hex}, ${p.parse(h).hex}, ${l.hex})`,"--pct":`${100*(e[this.channel]/n)}%`}}else this.previewGradient={"--preview":`linear-gradient(90deg, ${r?a.css:a.hex}, ${r?l.css:l.hex})`,"--pct":`${100*(e[this.channel]/n)}%`}}willUpdate(e){this.setPreviewGradient()}render(){const e=this.channel==="a"?x`<div class='transparent-checks'></div>`:null,s=this.channel==="a"?100:this.max;return x`
      <div class='${Mt({active:this.active})}'>
        <label for=channel_${this.ch} >${this.channel.toUpperCase()}</label>
        <input id=channel_${this.ch} aria-label='${rs[this.channel]}'
          class='form-control' .value='${Math.round(this.v)}'
          type='number' min='0' max='${s}'
          @input='${this.valueChange}'
          @focus='${()=>this.setActive(!0)}'
          @blur='${()=>this.setActive(!1)}'
        />
        <div class='preview-bar' style='${X(this.previewGradient)}' @mousedown='${this.clickPreview}'>
          <div class='pct'></div>
          ${e}
        </div>
      </div>`}}A(Tt,"properties",{group:{type:String},channel:{type:String},color:{type:Object},isHsl:{type:Boolean},c:{type:Object,state:!0,attribute:!1},previewGradient:{type:Object,state:!0,attribute:!1},active:{type:Boolean,state:!0,attribute:!1},max:{type:Number,state:!0,attribute:!1},v:{type:Number,state:!0,attribute:!1}}),A(Tt,"styles",is),customElements.define("color-input-channel",Tt);class Dt extends M{constructor(){super(),this.isHsl=!0,this.circlePos={top:0,left:0,bounds:{x:"",y:""}},this.size=160}setColor(t){Y(this.renderRoot,t)}setCircleCss(t,e){let s=`${t}`,i=`${e}`,r={x:`0, ${this.size}`,y:`0,${this.size}`};this.circlePos={top:i,left:s,bounds:r}}pickCoord({offsetX:t,offsetY:e}){let s=t,i=e;const{size:r,hsw:n,isHsl:a,color:l}=this;let h=(r-i)/r;h=Math.round(h*100);let d=Math.round(s/r*100),c={h:n.h,s:d,[a?"l":"v"]:h},u=a?p.fromHsl(c):p.fromHsv(c);this.setCircleCss(s,i),u.a=l.alpha,u.hsx=c,u.fromHSLCanvas=!0,this.setColor(u)}debouncePaintDetail(t){clearTimeout(this.bouncer),this.bouncer=setTimeout(()=>this.paintHSL(t,!0),50),this.paintHSL(t,!1)}paintHSL(t,e=null){if(this.debounceMode&&e===null)return this.debouncePaintDetail(t);const{ctx:s,color:i,isHsl:r,size:n}=this;if(!s)return;let a=i;t=t??r?a.hsl:a.hsv,t.w=r?t.l:t.v;let{h:l,s:h,w:d}=t,c=this.hsw={h:l,s:h,w:d},u=n/100;const ks=r?(E,C,Ot)=>`hsl(${E}, ${C}%, ${100-Ot}%)`:(E,C,Ot)=>p.fromHsv({h:E,s:C,v:100-Ot}).hex;let _t=e===!1?4:1;for(let E=0;E<100;E+=_t)for(let C=0;C<100;C+=_t)s.fillStyle=ks(l,E,C),s.fillRect(E,C,E+_t,C+_t);this.setCircleCss(c.s*u,n-t.w*u)}willUpdate(t){var e;if(t.has("color")||t.has("isHsl")){if((e=this.color)!=null&&e.hsx){if(this.color.fromHSLCanvas){delete this.color.fromHSLCanvas;return}return this.paintHSL(this.color.hsx)}this.paintHSL()}}firstUpdated(t){let e=this.renderRoot.querySelector("canvas");this.ctx=e.getContext("2d"),this.paintHSL()}circleMove({posTop:t,posLeft:e}){this.pickCoord({offsetX:e,offsetY:t})}render(){let t={height:this.size+"p",width:this.size+"px"},{top:e,left:s,bounds:i}=this.circlePos;return x`
      <div class='outer' @click='${this.pickCoord}' style='${X(t)}'>
        <canvas height='100' width='100'></canvas>
        <lit-movable
          boundsX='${i.x}' boundsY='${i.y}'
          posTop='${e}' posLeft='${s}' .onmove='${r=>this.circleMove(r)}'>
          <div class='circle'></div>
        </lit-movable>
      </div>`}}A(Dt,"properties",{color:{type:Object},isHsl:{type:Boolean},size:{type:Number},debounceMode:{type:Boolean},ctx:{type:Object,state:!0,attribute:!1},hsw:{type:Object,state:!0,attribute:!1},circlePos:{type:Object,state:!0,attribute:!1}}),A(Dt,"styles",D`
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
  `),customElements.define("hsl-canvas",Dt);var os=Object.defineProperty,ns=(o,t,e)=>t in o?os(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,y=(o,t,e)=>(ns(o,typeof t!="symbol"?t+"":t,e),e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=globalThis,Ut=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),pe=new WeakMap;let ls=class{constructor(o,t,e){if(this._$cssResult$=!0,e!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=t}get styleSheet(){let o=this.o;const t=this.t;if(Ut&&o===void 0){const e=t!==void 0&&t.length===1;e&&(o=pe.get(t)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),e&&pe.set(t,o))}return o}toString(){return this.cssText}};const as=o=>new ls(typeof o=="string"?o:o+"",void 0,de),hs=(o,t)=>{if(Ut)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=ft.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},ue=Ut?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return as(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:cs,defineProperty:ds,getOwnPropertyDescriptor:ps,getOwnPropertyNames:us,getOwnPropertySymbols:gs,getPrototypeOf:fs}=Object,W=globalThis,ge=W.trustedTypes,ms=ge?ge.emptyScript:"",fe=W.reactiveElementPolyfillSupport,it=(o,t)=>o,Bt={toAttribute(o,t){switch(t){case Boolean:o=o?ms:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},me=(o,t)=>!cs(o,t),be={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:me};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),W.litPropertyMetadata??(W.litPropertyMetadata=new WeakMap);class Z extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=be){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ds(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=ps(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const a=i==null?void 0:i.call(this);r.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??be}static _$Ei(){if(this.hasOwnProperty(it("elementProperties")))return;const t=fs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(it("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(it("properties"))){const e=this.properties,s=[...us(e),...gs(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(ue(i))}else t!==void 0&&e.push(ue(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hs(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Bt).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:Bt;this._$Em=r,this[r]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??me)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[it("elementProperties")]=new Map,Z[it("finalized")]=new Map,fe==null||fe({ReactiveElement:Z}),(W.reactiveElementVersions??(W.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=globalThis,bt=mt.trustedTypes,$e=bt?bt.createPolicy("lit-html",{createHTML:o=>o}):void 0,ve="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,ye="?"+P,bs=`<${ye}>`,L=document,rt=()=>L.createComment(""),ot=o=>o===null||typeof o!="object"&&typeof o!="function",_e=Array.isArray,$s=o=>_e(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Nt=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,xe=/>/g,j=RegExp(`>|${Nt}(?:([^\\s"'>=/]+)(${Nt}*=${Nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,Se=/"/g,Ee=/^(?:script|style|textarea|title)$/i,vs=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),ys=vs(1),G=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ce=new WeakMap,z=L.createTreeWalker(L,129);function Fe(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return $e!==void 0?$e.createHTML(t):t}const _s=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":"",n=nt;for(let a=0;a<e;a++){const l=o[a];let h,d,c=-1,u=0;for(;u<l.length&&(n.lastIndex=u,d=n.exec(l),d!==null);)u=n.lastIndex,n===nt?d[1]==="!--"?n=Ae:d[1]!==void 0?n=xe:d[2]!==void 0?(Ee.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=j):d[3]!==void 0&&(n=j):n===j?d[0]===">"?(n=i??nt,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?j:d[3]==='"'?Se:we):n===Se||n===we?n=j:n===Ae||n===xe?n=nt:(n=j,i=void 0);const m=n===j&&o[a+1].startsWith("/>")?" ":"";r+=n===nt?l+bs:c>=0?(s.push(h),l.slice(0,c)+ve+l.slice(c)+P+m):l+P+(c===-2?a:m)}return[Fe(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class lt{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const a=t.length-1,l=this.parts,[h,d]=_s(t,e);if(this.el=lt.createElement(h,s),z.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=z.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ve)){const u=d[n++],m=i.getAttribute(c).split(P),w=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:w[2],strings:m,ctor:w[1]==="."?xs:w[1]==="?"?ws:w[1]==="@"?Ss:$t}),i.removeAttribute(c)}else c.startsWith(P)&&(l.push({type:6,index:r}),i.removeAttribute(c));if(Ee.test(i.tagName)){const c=i.textContent.split(P),u=c.length-1;if(u>0){i.textContent=bt?bt.emptyScript:"";for(let m=0;m<u;m++)i.append(c[m],rt()),z.nextNode(),l.push({type:2,index:++r});i.append(c[u],rt())}}}else if(i.nodeType===8)if(i.data===ye)l.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(P,c+1))!==-1;)l.push({type:7,index:r}),c+=P.length-1}r++}}static createElement(t,e){const s=L.createElement("template");return s.innerHTML=t,s}}function K(o,t,e=o,s){var i,r;if(t===G)return t;let n=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl;const a=ot(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((r=n==null?void 0:n._$AO)==null||r.call(n,!1),a===void 0?n=void 0:(n=new a(o),n._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=n:e._$Cl=n),n!==void 0&&(t=K(o,n._$AS(o,t.values),n,s)),t}class As{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??L).importNode(e,!0);z.currentNode=i;let r=z.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new at(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Es(r,this,t)),this._$AV.push(h),l=s[++a]}n!==(l==null?void 0:l.index)&&(r=z.nextNode(),n++)}return z.currentNode=L,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class at{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),ot(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==G&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):$s(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==f&&ot(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=lt.createElement(Fe(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)==null?void 0:e._$AD)===r)this._$AH.p(s);else{const n=new As(r,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let e=Ce.get(t.strings);return e===void 0&&Ce.set(t.strings,e=new lt(t)),e}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new at(this.S(rt()),this.S(rt()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class $t{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=K(this,t,e,0),n=!ot(t)||t!==this._$AH&&t!==G,n&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=K(this,a[s+l],e,l),h===G&&(h=this._$AH[l]),n||(n=!ot(h)||h!==this._$AH[l]),h===f?t=f:t!==f&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}n&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xs extends $t{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class ws extends $t{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Ss extends $t{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??f)===G)return;const s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Es{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const ke=mt.litHtmlPolyfillSupport;ke==null||ke(lt,at),(mt.litHtmlVersions??(mt.litHtmlVersions=[])).push("3.1.2");const Cs=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new at(t.insertBefore(rt(),r),r,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ht extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Cs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return G}}var He;ht._$litElement$=!0,ht.finalized=!0,(He=globalThis.litElementHydrateSupport)==null||He.call(globalThis,{LitElement:ht});const Me=globalThis.litElementPolyfillSupport;Me==null||Me({LitElement:ht}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");const vt=o=>isFinite(o)?Number(o):Number(o.replace(/[^0-9.\-]/g,"")),Pe=o=>(o=Number(o),(isNaN(o)||[void 0,null].includes(o))&&(o=0),o);class ${constructor(t,e){this.x=Pe(t),this.y=Pe(e)}static fromPointerEvent(t){const{pageX:e,pageY:s}=t;return new $(e,s)}static fromElementStyle(t){let e=vt(t.style.left??0),s=vt(t.style.top??0);return new $(e,s)}static fromObject({x:t,y:e}){return new $(t,e)}get top(){return this.y}set top(t){this.y=t}get left(){return this.x}set left(t){this.x=t}}const Fs=o=>{const t=$.fromPointerEvent(o),e=o.target.getBoundingClientRect();let s=t.x-(e.left+document.body.scrollLeft),i=t.y-(e.top+document.body.scrollTop);return new $(s,i)};class T{constructor(t=-1/0,e=1/0){this.min=t,this.max=e,this.attr=""}get constrained(){return this.min===this.max}get unconstrained(){return this.min===-1/0&&this.max===1/0}static fromString(t=null,e=0){if(!t)return new T;if(t==="null")return new T(0,0);let[s,i]=t.split(",").map(n=>Number(n.trim())+e),r=new T(s,i);return r.attr=t,r}}class Te extends ht{constructor(){super(),y(this,"_target"),y(this,"_targetSelector",null),y(this,"_boundsX",new T),y(this,"_boundsY",new T),y(this,"isMoving",!1),y(this,"moveState",{}),y(this,"_vertical",null),y(this,"_horizontal",null),y(this,"_posTop",null),y(this,"_posLeft",null),y(this,"_grid",1),y(this,"pointerId")}get vertical(){return this._vertical}set vertical(t){this.boundsY=t,this.boundsX="null",this._vertical=t}get horizontal(){return this._horizontal}set horizontal(t){this.boundsX=t,this.boundsY="null",this._horizontal=t}set posTop(t){t=Number(t),this._posTop=t,this.target&&(this.target.style.top=t+"px")}get posTop(){return this._posTop}set posLeft(t){t=Number(t),this._posLeft=t,this.target&&(this.target.style.left=t+"px")}get posLeft(){return this._posLeft}get grid(){return this._grid}set grid(t){t>0&&t<1/0?this._grid=t:this._grid=1}get bounds(){return{left:this._boundsX,top:this._boundsY}}set targetSelector(t){this._targetSelector=t,this._retryTarget=document.querySelector(t)===null,this._target=document.querySelector(t)}get targetSelector(){return this._targetSelector}get target(){return this._target??this}set target(t){this._target=t}get boundsX(){return this._boundsX}set boundsX(t){var e;this._boundsX=T.fromString(t,vt(((e=this.target)==null?void 0:e.style.left)??0)),this.bounds.left=this._boundsX}get boundsY(){return this._boundsY}set boundsY(t){var e;this._boundsY=T.fromString(t,vt(((e=this.target)==null?void 0:e.style.top)??0)),this.bounds.top=this._boundsY}firstUpdated(t){this._retryTarget&&(this.target=document.querySelector(this.targetSelector));let{bounds:e,target:s,posTop:i,posLeft:r}=this,{offsetLeft:n,offsetTop:a,style:{left:l,top:h}}=this.target;s.classList.add("--movable-base"),this.renderRoot.addEventListener("pointerdown",d=>this.pointerdown(d)),s.style.position="absolute",s.style.cursor="pointer",r?s.style.left=r+"px":!l&&n&&(s.style.left=n+"px",e.left.constrained&&(e.left.min=e.left.max=n)),i?s.style.top=i+"px":!h&&a&&(s.style.top=a+"px",e.top.constrained&&(e.top.min=e.top.max=a))}reposition(t){if(typeof t=="object"){const{eventsOnly:e,target:s}=this;this.posTop=t.top,this.posLeft=t.left,s&&!e&&(s.style.left=t.left+"px",s.style.top=t.top+"px")}else this.isMoving=t}moveInit(t){let e=this.moveState,{target:s,bounds:i}=this;e.mouseCoord=$.fromPointerEvent(t),e.startCoord=$.fromElementStyle(s),e.moveDist=new $(0,0),e.totalDist=new $(0,0),e.clickOffset=Fs(t),e.coords=$.fromObject(e.startCoord),e.maxX=isFinite(i.left.min)&&isFinite(i.left.max)?i.left.min+i.left.max:1/0,e.maxY=isFinite(i.top.min)&&isFinite(i.top.max)?i.top.min+i.top.max:1/0,this.isMoving=!0,this.reposition(!0),this.eventBroker("movestart",t)}eventBroker(t,e){this.moveState.posTop=this.posTop,this.moveState.posLeft=this.posLeft;let s=new CustomEvent(t,{bubbles:!0,composed:!0,detail:{...e,...this.moveState,element:this}});this.renderRoot.dispatchEvent(s);let i=this[`on${t}`];i&&i({...e,...this.moveState,me:this})}unbind(t){this.pointerId=null,document.body.removeEventListener("pointermove",e=>this.motionHandler(e)),this.moveEnd(t)}moveEnd(t){this.isMoving&&(this.isMoving=this.moveState.isMoving=!1,this.reposition(!1),this.eventBroker("moveend",t))}motionHandler(t){t.stopPropagation();let e=$.fromPointerEvent(t),s=this.moveState,{grid:i,bounds:r,shiftBehavior:n,boundsX:a,boundsY:l}=this;if(s.moveDist=$.fromObject({x:e.x-s.mouseCoord.x,y:e.y-s.mouseCoord.y}),s.mouseCoord=e,s.totalDist=$.fromObject({x:s.totalDist.x+s.moveDist.x,y:s.totalDist.y+s.moveDist.y}),s.coords=$.fromObject({x:Math.round(s.totalDist.x/i)*i+s.startCoord.x,y:Math.round(s.totalDist.y/i)*i+s.startCoord.y}),n&&t.shiftKey&&a.unconstrained&&l.unconstrained){let{x:h,y:d}=s.totalDist;Math.abs(h)>Math.abs(d)?s.coords.top=s.startCoord.y:s.coords.left=s.startCoord.x}else s.coords.y=Math.min(Math.max(r.top.min,s.coords.top),r.top.max),s.coords.x=Math.min(Math.max(r.left.min,s.coords.left),r.left.max);isFinite(s.maxX)&&(s.pctX=Math.max(r.left.min,s.coords.left)/s.maxX),isFinite(s.maxY)&&(s.pctY=Math.max(r.top.min,s.coords.top)/s.maxY),this.reposition(s.coords),this.eventBroker("move",t)}pointerdown(t){document.body.setPointerCapture(t.pointerId),t.preventDefault(),t.stopPropagation(),t.pointerId!==void 0&&(this.pointerId=t.pointerId),this.listening||(document.body.addEventListener("pointerup",e=>{this.isMoving&&this.unbind(e)},!1),document.body.addEventListener("pointermove",e=>{this.pointerId!==void 0&&e.pointerId===this.pointerId&&this.motionHandler(e)},!1)),this.listening=!0,this.moveInit(t)}render(){return ys`<slot></slot>`}}y(Te,"properties",{posLeft:{type:Number},posTop:{type:Number},target:{type:Object,attribute:!1,state:!0},targetSelector:{type:String},bounds:{type:Object,attribute:!1,state:!0},boundsX:{type:String},boundsY:{type:String},vertical:{type:String},horizontal:{type:String},grid:{type:Number},shiftBehavior:{type:Boolean},disabled:{type:Boolean},eventsOnly:{type:Boolean},listening:{type:Boolean},onmovestart:{type:Object},onmoveend:{type:Object},onmove:{type:Object}}),window.customElements.define("lit-movable",Te);class yt extends M{constructor(){super();A(this,"_color");this._color=p.parse(Ht.slateblue),this.isHsl=!0}firstUpdated(e){this.debounceMode=!1,e.has("value")&&(this.color=p.parse(this.value))}get color(){return this._color}set color(e){e=e.hsx?e:e.rgba?p.parse(...e.rgba):p.parse(e),e&&(this.hex=e.hex,this._color=e,Y(this.renderRoot,e,"colorchanged"))}updateColor({detail:{color:e}}){this.color=e}setColor(e){const s=this.renderRoot.querySelector("input#hex").value,i=p.parse(s);i?this.color=i:console.log(`ignored unparsable input: ${s}`)}setHue({detail:{h:e}}){let{s,l:i,a:r}=this.color.hsl;r===1&&(r=void 0),this.color={h:e,s,l:i,a:r}}setHsl(e){this.isHsl=e}okColor(){Y(this.renderRoot,this.color,"colorpicked")}showCopyDialog(){if(this.copied=null,this.dlg=this.dlg??this.renderRoot.querySelector("dialog"),this.dlg.open)return this.dlg.classList.remove("open"),this.dlg.close();this.dlg.show(),this.dlg.classList.add("open")}clipboard(e){let s=this.color.toString(e);window.navigator.clipboard.writeText(s).then(()=>{this.hideCopyDialog(s)})}hideCopyDialog(e){if(e){this.copied=e,setTimeout(()=>this.dlg.classList.remove("open"),400),setTimeout(()=>this.hideCopyDialog(),1200);return}this.dlg.classList.remove("open"),this.dlg.close(),this.copied=null}setSliding({detail:e}){this.debounceMode=e.sliding}render(){const e=this.isHsl?["h","s","l"]:["h","s","v"],s={button:!0,active:!this.isHsl,l:!0},i={button:!0,active:this.isHsl,r:!0};let r={backgroundColor:this.color},n=this.copied?{textAlign:"center",display:"block"}:{display:"none"};const a=this.debounceMode;return x`
      <div class='outer'>
        <hue-bar
          @sliding-hue='${this.setSliding}'
          hue='${this.color.hsx?this.color.hsx.h:this.color.hsl.h}'
          @hue-update='${this.setHue}' .color='${this.color}'></hue-bar>
        <div class='d-flex'>
          <div class='col w-30'>
            ${["r","g","b","a"].map(l=>x`
              <color-input-channel
                group='rgb' channel='${l}' isHsl='${this.isHsl}'
                .color='${this.color}' @color-update='${this.updateColor}' />
            `)}
            <div class='hex'>
              <dialog @blur='${()=>this.hideCopyDialog()}' tabindex='0'>
                <sub class='copied' style='${X(n)}'>copied <em>${this.copied}</em></sub>
                ${this.copied?x``:x`
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
            ${e.map(l=>x`
              <color-input-channel
                group="hsl" channel="${l}" .isHsl="${this.isHsl}"
                .color="${this.color}" @color-update="${this.updateColor}" />
            `)}
            <div class='hsl-mode'>
              <a title='Use hue / saturation / value (brightness) mode'
                 class='${Mt(s)}'
                 @click='${()=>this.setHsl(!1)}'>HSV</a><a
              title='Use hue / saturation / luminosity mode'
              class='${Mt(i)}'
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
                  <span style='${X(r)}'></span>
                  <span class='checky'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>`}}A(yt,"properties",{color:{type:Object,state:!0,attribute:!1},hex:{type:String,state:!0,attribute:!1},value:{type:String},isHsl:{type:Boolean,state:!0,attribute:!1},copied:{type:String},debounceMode:{type:Boolean}}),A(yt,"styles",ss),window.customElements.define("color-picker",yt),_.ColorPicker=yt,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
