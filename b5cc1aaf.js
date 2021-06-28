function e(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class s{constructor(e,t){if(t!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const r=new Map,o=e=>{let t=r.get(e);return void 0===t&&r.set(e,t=new s(e,i)),t},n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>o("string"==typeof e?e:e+""))(t)})(e):e;var a,l,h,d;const c={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},u=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class _ extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(e){var t;null!==(t=this.v)&&void 0!==t||(this.v=[]),this.v.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this.Πp(i,t);void 0!==s&&(this.Πm.set(s,i),e.push(s))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static"Πp"(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this.Πg=new Promise((e=>this.enableUpdating=e)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(e=this.constructor.v)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this.ΠU)&&void 0!==t?t:this.ΠU=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this.ΠU)||void 0===t||t.splice(this.ΠU.indexOf(e)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this.Πi.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})),this.Πo=new Promise((e=>this.Πl=e))}attributeChangedCallback(e,t,i){this.K(e,i)}"Πj"(e,t,i=p){var s,r;const o=this.constructor.Πp(e,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:c.toAttribute)(t,i.type);this.Πh=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this.Πh=null}}K(e,t){var i,s,r;const o=this.constructor,n=o.Πm.get(e);if(void 0!==n&&this.Πh!==n){const e=o.getPropertyOptions(n),a=e.converter,l=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:c.fromAttribute;this.Πh=n,this[n]=l(t,e.type),this.Πh=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||u)(this[e],t)?(this.L.has(e)||this.L.set(e,t),!0===i.reflect&&this.Πh!==e&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}const e=this.performUpdate();return null!=e&&await e,!this.isUpdatePending}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((e,t)=>this[t]=e)),this.Πi=void 0);let t=!1;const i=this.L;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this.Π$()}catch(e){throw t=!1,this.Π$(),e}t&&this.E(i)}willUpdate(e){}E(e){var t;null===(t=this.ΠU)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(e){return!0}update(e){void 0!==this.Πk&&(this.Πk.forEach(((e,t)=>this.Πj(t,this[t],e))),this.Πk=void 0),this.Π$()}updated(e){}firstUpdated(e){}}var m,f,g,y;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null===(l=(a=globalThis).reactiveElementPlatformSupport)||void 0===l||l.call(a,{ReactiveElement:_}),(null!==(h=(d=globalThis).reactiveElementVersions)&&void 0!==h?h:d.reactiveElementVersions=[]).push("1.0.0-rc.2");const b=globalThis.trustedTypes,v=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,C="?"+w,S=`<${C}>`,x=document,A=(e="")=>x.createComment(e),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,O=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,k=/"/g,R=/^(?:script|style|textarea)$/i,L=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),D=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),F=new WeakMap,H=(e,t,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let n=o._$litPart$;if(void 0===n){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new q(t.insertBefore(A(),e),e,void 0,i)}return n.I(e),n},$=x.createTreeWalker(x,129,null,!1);class B{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const n=e.length-1,a=this.parts,[l,h]=((e,t)=>{const i=e.length-1,s=[];let r,o=2===t?"<svg>":"",n=E;for(let t=0;t<i;t++){const i=e[t];let a,l,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===E?"!--"===l[1]?n=I:void 0!==l[1]?n=O:void 0!==l[2]?(R.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=z):void 0!==l[3]&&(n=z):n===z?">"===l[0]?(n=null!=r?r:E,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?z:'"'===l[3]?k:N):n===k||n===N?n=z:n===I||n===O?n=E:(n=z,r=void 0);const c=n===z&&e[t+1].startsWith("/>")?" ":"";o+=n===E?i+S:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+w+c):i+w+(-2===h?(s.push(void 0),t):c)}const a=o+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==v?v.createHTML(a):a,s]})(e,t);if(this.el=B.createElement(l,i),$.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=$.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){const i=h[o++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?W:"?"===t[1]?G:"@"===t[1]?Y:j})}else a.push({type:6,index:r})}for(const t of e)s.removeAttribute(t)}if(R.test(s.tagName)){const e=s.textContent.split(w),t=e.length-1;if(t>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],A()),$.nextNode(),a.push({type:2,index:++r});s.append(e[t],A())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(w,e+1));)a.push({type:7,index:r}),e+=w.length-1}r++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function V(e,t,i=e,s){var r,o,n,a;if(t===D)return t;let l=void 0!==s?null===(r=i.Σi)||void 0===r?void 0:r[s]:i.Σo;const h=P(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l.O)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(e),l.T(e,i,s)),void 0!==s?(null!==(n=(a=i).Σi)&&void 0!==n?n:a.Σi=[])[s]=l:i.Σo=l),void 0!==l&&(t=V(e,l.S(e,t.values),l,s)),t}class U{constructor(e,t){this.l=[],this.N=void 0,this.D=e,this.M=t}u(e){var t;const{el:{content:i},parts:s}=this.D,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(i,!0);$.currentNode=r;let o=$.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new q(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new J(o,this,e)),this.l.push(t),l=s[++a]}n!==(null==l?void 0:l.index)&&(o=$.nextNode(),n++)}return r}v(e){let t=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(e,i,t),t+=i.strings.length-2):i.I(e[t])),t++}}class q{constructor(e,t,i,s){this.type=2,this.N=void 0,this.A=e,this.B=t,this.M=i,this.options=s}setConnected(e){var t;null===(t=this.P)||void 0===t||t.call(this,e)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(e,t=this){e=V(this,e,t),P(e)?e===M||null==e||""===e?(this.H!==M&&this.R(),this.H=M):e!==this.H&&e!==D&&this.m(e):void 0!==e._$litType$?this._(e):void 0!==e.nodeType?this.$(e):(e=>{var t;return T(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.g(e):this.m(e)}k(e,t=this.B){return this.A.parentNode.insertBefore(e,t)}$(e){this.H!==e&&(this.R(),this.H=this.k(e))}m(e){const t=this.A.nextSibling;null!==t&&3===t.nodeType&&(null===this.B?null===t.nextSibling:t===this.B.previousSibling)?t.data=e:this.$(x.createTextNode(e)),this.H=e}_(e){var t;const{values:i,_$litType$:s}=e,r="number"==typeof s?this.C(e):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(t=this.H)||void 0===t?void 0:t.D)===r)this.H.v(i);else{const e=new U(r,this),t=e.u(this.options);e.v(i),this.$(t),this.H=e}}C(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new B(e)),t}g(e){T(this.H)||(this.H=[],this.R());const t=this.H;let i,s=0;for(const r of e)s===t.length?t.push(i=new q(this.k(A()),this.k(A()),this,this.options)):i=t[s],i.I(r),s++;s<t.length&&(this.R(i&&i.B.nextSibling,s),t.length=s)}R(e=this.A.nextSibling,t){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,t);e&&e!==this.B;){const t=e.nextSibling;e.remove(),e=t}}}class j{constructor(e,t,i,s,r){this.type=1,this.H=M,this.N=void 0,this.V=void 0,this.element=e,this.name=t,this.M=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(M),this.strings=i):this.H=M}get tagName(){return this.element.tagName}I(e,t=this,i,s){const r=this.strings;let o=!1;if(void 0===r)e=V(this,e,t,0),o=!P(e)||e!==this.H&&e!==D,o&&(this.H=e);else{const s=e;let n,a;for(e=r[0],n=0;n<r.length-1;n++)a=V(this,s[i+n],t,n),a===D&&(a=this.H[n]),o||(o=!P(a)||a!==this.H[n]),a===M?e=M:e!==M&&(e+=(null!=a?a:"")+r[n+1]),this.H[n]=a}o&&!s&&this.W(e)}W(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class W extends j{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===M?void 0:e}}class G extends j{constructor(){super(...arguments),this.type=4}W(e){e&&e!==M?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends j{constructor(){super(...arguments),this.type=5}I(e,t=this){var i;if((e=null!==(i=V(this,e,t,0))&&void 0!==i?i:M)===D)return;const s=this.H,r=e===M&&s!==M||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==M&&(s===M||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this.H=e}handleEvent(e){var t,i;"function"==typeof this.H?this.H.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this.H.handleEvent(e)}}class J{constructor(e,t,i){this.element=e,this.type=6,this.N=void 0,this.V=void 0,this.M=t,this.options=i}I(e){V(this,e)}}var X,K,Z,Q,ee,te;null===(f=(m=globalThis).litHtmlPlatformSupport)||void 0===f||f.call(m,B,q),(null!==(g=(y=globalThis).litHtmlVersions)&&void 0!==g?g:y.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(X=(te=globalThis).litElementVersions)&&void 0!==X?X:te.litElementVersions=[]).push("3.0.0-rc.2");class ie extends _{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();super.update(e),this.Φt=H(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this.Φt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.Φt)||void 0===e||e.setConnected(!1)}render(){return D}}ie.finalized=!0,ie._$litElement$=!0,null===(Z=(K=globalThis).litElementHydrateSupport)||void 0===Z||Z.call(K,{LitElement:ie}),null===(ee=(Q=globalThis).litElementPlatformSupport)||void 0===ee||ee.call(Q,{LitElement:ie});const se=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function re(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):se(e,t)}function oe(e){return re({...e,state:!0,attribute:!1})}window.JSCompiler_renameProperty=function(e,t){return e};let ne,ae,le=/(url\()([^)]*)(\))/g,he=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function de(e,t){if(e&&he.test(e))return e;if("//"===e)return e;if(void 0===ne){ne=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",ne="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),ne)try{return new URL(e,t).href}catch(t){return e}return ae||(ae=document.implementation.createHTMLDocument("temp"),ae.base=ae.createElement("base"),ae.head.appendChild(ae.base),ae.anchor=ae.createElement("a"),ae.body.appendChild(ae.anchor)),ae.base.href=t,ae.anchor.href=e,ae.anchor.href||e}function ce(e,t){return e.replace(le,(function(e,i,s,r){return i+"'"+de(s.replace(/["']/g,""),t)+"'"+r}))}function ue(e){return e.substring(0,e.lastIndexOf("/")+1)}const pe=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const _e=pe&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})();let me=window.Polymer&&window.Polymer.rootPath||ue(document.baseURI||window.location.href),fe=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,ge=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,ye=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,be=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,ve=window.Polymer&&window.Polymer.legacyOptimizations||!1,we=window.Polymer&&window.Polymer.legacyWarnings||!1,Ce=window.Polymer&&window.Polymer.syncInitialRender||!1,Se=window.Polymer&&window.Polymer.legacyUndefined||!1,xe=window.Polymer&&window.Polymer.orderedComputed||!1,Ae=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Pe=window.Polymer&&window.Polymer.fastDomIf||!1,Te=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Ee=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Ie=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Oe={},ze={};function Ne(e,t){Oe[e]=ze[e.toLowerCase()]=t}function ke(e){return Oe[e]||ze[e.toLowerCase()]}class Re extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=ke(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,s){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=de(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=ue(t)}return this.__assetpath}register(e){if(e=e||this.id){if(ye&&void 0!==ke(e))throw Ne(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Ne(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}Re.prototype.modules=Oe,customElements.define("dom-module",Re);const Le="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,De=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},Me=`{{lit-${String(Math.random()).slice(2)}}}`,Fe=`\x3c!--${Me}--\x3e`,He=new RegExp(`${Me}|${Fe}`);class $e{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],r=document.createTreeWalker(t.content,133,null,!1);let o=0,n=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=r.nextNode();if(null!==e){if(n++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)Be(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=l[a],i=qe.exec(t)[2],s=i.toLowerCase()+"$lit$",r=e.getAttribute(s);e.removeAttribute(s);const o=r.split(He);this.parts.push({type:"attribute",index:n,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Me)>=0){const s=e.parentNode,r=t.split(He),o=r.length-1;for(let t=0;t<o;t++){let i,o=r[t];if(""===o)i=Ue();else{const e=qe.exec(o);null!==e&&Be(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}s.insertBefore(i,e),this.parts.push({type:"node",index:++n})}""===r[o]?(s.insertBefore(Ue(),e),i.push(e)):e.data=r[o],a+=o}}else if(8===e.nodeType)if(e.data===Me){const t=e.parentNode;null!==e.previousSibling&&n!==o||(n++,t.insertBefore(Ue(),e)),o=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(i.push(e),n--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Me,t+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const Be=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},Ve=e=>-1!==e.index,Ue=()=>document.createComment(""),qe=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function je(e,t){const{element:{content:i},parts:s}=e,r=document.createTreeWalker(i,133,null,!1);let o=Ge(s),n=s[o],a=-1,l=0;const h=[];let d=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(h.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==n&&n.index===a;)n.index=null!==d?-1:n.index-l,o=Ge(s,o),n=s[o]}h.forEach((e=>e.parentNode.removeChild(e)))}const We=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},Ge=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(Ve(t))return i}return-1};const Ye=new WeakMap,Je=e=>"function"==typeof e&&Ye.has(e),Xe={},Ke={};class Ze{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=Le?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let r,o=0,n=0,a=s.nextNode();for(;o<i.length;)if(r=i[o],Ve(r)){for(;n<r.index;)n++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return Le&&(document.adoptNode(e),customElements.upgrade(e)),e}}const Qe=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),et=` ${Me} `;class tt{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Ue()),this.endNode=e.appendChild(Ue())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Ue()),e.__insert(this.endNode=Ue())}insertAfterPart(e){e.__insert(this.startNode=Ue()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Je(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Xe,e(this)}const e=this.__pendingValue;e!==Xe&&((e=>null===e||!("object"==typeof e||"function"==typeof e))(e)?e!==this.value&&this.__commitText(e):e instanceof class{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const o=qe.exec(e);t+=null===o?e+(i?et:Fe):e.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+Me}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==Qe&&(t=Qe.createHTML(t)),e.innerHTML=t,e}}?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):(e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]))(e)?this.__commitIterable(e):e===Ke?(this.value=Ke,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ze&&this.value.template===t)this.value.update(e.values);else{const i=new Ze(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const r of e)i=t[s],void 0===i&&(i=new tt(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(r),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){De(this.startNode.parentNode,e.nextSibling,this.endNode)}}let it=!1;function st(e){let t=rt.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},rt.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(Me);return i=t.keyString.get(s),void 0===i&&(i=new $e(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}(()=>{try{const e={get capture(){return it=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();const rt=new Map,ot=new WeakMap;"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const nt=(e,t)=>`${e}--${t}`;let at=!0;void 0===window.ShadyCSS?at=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),at=!1);const lt=e=>t=>{const i=nt(t.type,e);let s=rt.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},rt.set(i,s));let r=s.stringsArray.get(t.strings);if(void 0!==r)return r;const o=t.strings.join(Me);if(r=s.keyString.get(o),void 0===r){const i=t.getTemplateElement();at&&window.ShadyCSS.prepareTemplateDom(i,e),r=new $e(t,i),s.keyString.set(o,r)}return s.stringsArray.set(t.strings,r),r},ht=["html","svg"],dt=new Set,ct=(e,t,i)=>{dt.add(e);const s=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,e);const n=document.createElement("style");for(let e=0;e<o;e++){const t=r[e];t.parentNode.removeChild(t),n.textContent+=t.textContent}(e=>{ht.forEach((t=>{const i=rt.get(nt(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),je(e,i)}))}))})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:r}=e;if(null==i)return void s.appendChild(t);const o=document.createTreeWalker(s,133,null,!1);let n=Ge(r),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(a=We(t),i.parentNode.insertBefore(t,i));-1!==n&&r[n].index===l;){if(a>0){for(;-1!==n;)r[n].index+=a,n=Ge(r,n);return}n=Ge(r,n)}}(i,n,a.firstChild):a.insertBefore(n,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(n,a.firstChild);const e=new Set;e.add(n),je(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const ut={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},pt=(e,t)=>t!==e&&(t==t||e==e),_t={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:pt};class mt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=_t){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdateInternal(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||_t}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=pt){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||ut,r="function"==typeof s?s:s.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||ut.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=_t){const s=this.constructor,r=s._attributeNameForProperty(e,i);if(void 0!==r){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let s=!0;if(void 0!==e){const r=this.constructor;i=i||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}mt.finalized=!0;const ft=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol();class yt{constructor(e,t){if(t!==gt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ft?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const bt=(e,...t)=>{const i=t.reduce(((t,i,s)=>t+(e=>{if(e instanceof yt)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1]),e[0]);return new yt(i,gt)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const vt={};class wt extends mt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),s=[];i.forEach((e=>s.unshift(e))),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!ft){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new yt(String(t),gt)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ft?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==vt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return vt}}wt.finalized=!0,wt.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=ot.has(t),o=at&&11===t.nodeType&&!!t.host,n=o&&!dt.has(s),a=n?document.createDocumentFragment():t;if(((e,t,i)=>{let s=ot.get(t);void 0===s&&(De(t,t.firstChild),ot.set(t,s=new tt(Object.assign({templateFactory:st},i))),s.appendInto(t)),s.setValue(e),s.commit()})(e,a,Object.assign({templateFactory:lt(s)},i)),n){const e=ot.get(a);ot.delete(a);const i=e.value instanceof Ze?e.value.template:void 0;ct(s,a,i),De(t,t.firstChild),t.appendChild(a),ot.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)},wt.shadowRootOptions={mode:"open"};let Ct=0;const St={},xt=(e,t,i)=>{const s=i&&i.moduleId||"custom-style-module-"+Ct++;Array.isArray(t)||(t=t?[t]:[]),t.forEach((e=>{if(!(e instanceof yt))throw new Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!St[e]){const t=document.createElement("dom-module");t.innerHTML=`\n        <template>\n          <style>${e.toString()}</style>\n        </template>\n      `;const i="custom-style-module-"+Ct++;t.register(i),St[e]=i}}));const r=document.createElement("dom-module");if(e){const t=customElements.get(e);t&&Object.prototype.hasOwnProperty.call(t,"__finalized")&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`),r.setAttribute("theme-for",e)}const o=i&&i.include||[];r.innerHTML=`\n    <template>\n      ${o.map((e=>`<style include=${e}></style>`))}\n      ${t.map((e=>`<style include=${St[e]}></style>`))}\n    </template>\n  `,r.register(s)};class At extends HTMLElement{static get version(){return"20.0.0"}}customElements.define("vaadin-lumo-styles",At);let Pt,Tt,Et,It=e=>e;const Ot=bt(Pt||(Pt=It`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 52%);
    --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);
    --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);
    --lumo-primary-text-color: var(--lumo-primary-color);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 100%, 61%);
    --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);
    --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);
    --lumo-error-text-color: hsl(3, 92%, 53%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
    --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);
    --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);
    --lumo-success-text-color: hsl(145, 100%, 32%);
    --lumo-success-contrast-color: #fff;
  }
`)),zt=document.createElement("template");zt.innerHTML=`<style>${Ot.toString().replace(":host","html")}</style>`,document.head.appendChild(zt.content);xt("",bt(Tt||(Tt=It`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 86%, 55%);
    --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
    --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
    --lumo-primary-text-color: hsl(214, 100%, 70%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 90%, 63%);
    --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);
    --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);
    --lumo-error-text-color: hsl(3, 100%, 67%);

    /* Success */
    --lumo-success-color: hsl(145, 65%, 42%);
    --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);
    --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 47%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a {
    color: var(--lumo-primary-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`)),{moduleId:"lumo-color"});xt("",bt(Et||(Et=It`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`)),{moduleId:"lumo-color-legacy",include:["lumo-color"]});const Nt=document.createElement("template");Nt.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n',document.head.appendChild(Nt.content);let kt;const Rt=bt(kt||(kt=(e=>e)`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`)),Lt=document.createElement("template");Lt.innerHTML=`<style>${Rt.toString().replace(":host","html")}</style>`,document.head.appendChild(Lt.content);let Dt;const Mt=bt(Dt||(Dt=(e=>e)`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`)),Ft=document.createElement("template");Ft.innerHTML=`<style>${Mt.toString().replace(":host","html")}</style>`,document.head.appendChild(Ft.content);let Ht;const $t=bt(Ht||(Ht=(e=>e)`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`)),Bt=document.createElement("template");Bt.innerHTML=`<style>${$t.toString().replace(":host","html")}</style>`,document.head.appendChild(Bt.content);let Vt,Ut,qt=e=>e;const jt=bt(Vt||(Vt=qt`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`)),Wt=document.createElement("template");Wt.innerHTML=`<style>${jt.toString().replace(":host","html")}</style>`,document.head.appendChild(Wt.content);xt("",bt(Ut||(Ut=qt`
  html {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */

  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`)),{moduleId:"lumo-typography"});let Gt;xt("vaadin-checkbox",bt(Gt||(Gt=(e=>e)`
    :host {
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    [part='label']:not([empty]) {
      margin: 0.1875em 0.875em 0.1875em 0.375em;
    }

    [part='checkbox'] {
      width: calc(1em + 2px);
      height: calc(1em + 2px);
      margin: 0.1875em;
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      pointer-events: none;
      line-height: 1.2;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 0 solid var(--lumo-primary-contrast-color);
      border-width: 0.1875em 0 0 0.1875em;
      box-sizing: border-box;
      transform-origin: 0 0;
      position: absolute;
      top: 0.8125em;
      left: 0.5em;
      transform: scale(0.55) rotate(-135deg);
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
      width: 0.625em;
      height: 1.0625em;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      transform: none;
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
      transition: opacity 0.25s;
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) [part='label'] ::slotted(*) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part='label']:not([empty]) {
      margin: 0.1875em 0.375em 0.1875em 0.875em;
    }

    /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
    :host(:hover) [part='checkbox']::after {
      transition: width 0.1s, height 0.25s;
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `)),{moduleId:"lumo-checkbox"});let Yt=0;const Jt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=Yt++;return function(s){let r=s.__mixinSet;if(r&&r[i])return s;let o=t,n=o.get(s);if(!n){n=e(s),o.set(s,n);let t=Object.create(n.__mixinSet||r||null);t[i]=!0,n.__mixinSet=t}return n}};function Xt(e){return Re.import(e)}function Kt(e){const t=ce((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function Zt(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...Qt(t[e]));return i}function Qt(e){const t=Xt(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...ti(t));const i=t.querySelector("template");i&&e.push(...ei(i,t.assetpath)),t._styles=e}return t._styles}function ei(e,t){if(!e._styles){const i=[],s=e.content.querySelectorAll("style");for(let e=0;e<s.length;e++){let r=s[e],o=r.getAttribute("include");o&&i.push(...Zt(o).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(r.textContent=ce(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function ti(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<i.length;e++){let s=i[e];if(s.import){const e=s.import,i=s.hasAttribute("shady-unscoped");if(i&&!e._unscopedStyle){const t=Kt(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=Kt(e));t.push(i?e._unscopedStyle:e._style)}}return t}function ii(e){let t=Xt(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=ti(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const s=ei(e,t);for(let e=0;e<s.length;e++){let t=s[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const si=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function ri(e){return e.indexOf(".")>=0}function oi(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function ni(e,t){return 0===e.indexOf(t+".")}function ai(e,t){return 0===t.indexOf(e+".")}function li(e,t,i){return t+i.slice(e.length)}function hi(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let s=e[i].toString().split(".");for(let e=0;e<s.length;e++)t.push(s[e])}return t.join(".")}return e}function di(e){return Array.isArray(e)?hi(e).split("."):e.toString().split(".")}function ci(e,t,i){let s=e,r=di(t);for(let e=0;e<r.length;e++){if(!s)return;s=s[r[e]]}return i&&(i.path=r.join(".")),s}function ui(e,t,i){let s=e,r=di(t),o=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(s=s[r[e]],!s)return}s[o]=i}else s[t]=i;return r.join(".")}const pi={},_i=/-[a-z]/g,mi=/([A-Z])/g;function fi(e){return pi[e]||(pi[e]=e.indexOf("-")<0?e:e.replace(_i,(e=>e[1].toUpperCase())))}function gi(e){return pi[e]||(pi[e]=e.replace(mi,"-$1").toLowerCase())}let yi=0,bi=0,vi=[],wi=0,Ci=!1,Si=document.createTextNode("");new window.MutationObserver((function(){Ci=!1;const e=vi.length;for(let t=0;t<e;t++){let e=vi[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}vi.splice(0,e),bi+=e})).observe(Si,{characterData:!0});const xi={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Ai={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},Pi={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Ti={run:e=>(Ci||(Ci=!0,Si.textContent=wi++),vi.push(e),yi++),cancel(e){const t=e-bi;if(t>=0){if(!vi[t])throw new Error("invalid async handle: "+e);vi[t]=null}}},Ei=Ti,Ii=Jt((e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let s=this.__data[e],r=this._shouldPropertyChange(e,t,s);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=s),this.__data[e]=t,this.__dataPending[e]=t),r}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ei.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,s){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,s)}_attributeToProperty(e,t,i){if(!this.__serializing){const s=this.__dataAttributes,r=s&&s[e]||e;this[r]=this._deserializeValue(t,i||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const s=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=si(e)),void 0===s?e.removeAttribute(i):e.setAttribute(i,s)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),Oi={};let zi=HTMLElement.prototype;for(;zi;){let e=Object.getOwnPropertyNames(zi);for(let t=0;t<e.length;t++)Oi[e[t]]=!0;zi=Object.getPrototypeOf(zi)}const Ni=Jt((e=>{const t=Ii(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(fi(e[t]))}static attributeNameForProperty(e){return gi(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!Oi[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),ki={"dom-if":!0,"dom-repeat":!0};let Ri=!1,Li=!1;function Di(e){(function(){if(!Ri){Ri=!0;const e=document.createElement("textarea");e.placeholder="a",Li=e.placeholder===e.textContent}return Li})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function Mi(e){let t=e.getAttribute("is");if(t&&ki[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function Fi(e,t){let i=t.parentInfo&&Fi(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,s=0;e;e=e.nextSibling)if(t.parentIndex===s++)return e}function Hi(e,t,i,s){s.id&&(t[s.id]=i)}function $i(e,t,i){if(i.events&&i.events.length)for(let s,r=0,o=i.events;r<o.length&&(s=o[r]);r++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function Bi(e,t,i,s){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=s)}const Vi=Jt((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let s=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(r,t,i)||s,Di(r),r.firstChild&&this._parseTemplateChildNodes(r,t,i),r.hasAttributes&&r.hasAttributes()&&(s=this._parseTemplateNodeAttributes(r,t,i)||s),s||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let s,r=e.firstChild,o=0;r;r=s){if("template"==r.localName&&(r=Mi(r)),s=r.nextSibling,r.nodeType===Node.TEXT_NODE){let i=s;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,s=i.nextSibling,e.removeChild(i),i=s;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let n={parentIndex:o,parentInfo:i};this._parseTemplateNode(r,t,n)&&(n.infoIndex=t.nodeInfoList.push(n)-1),r.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,i){let s=e,r=this._parseTemplate(s,t);return(r.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),i.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,i){let s=!1,r=Array.from(e.attributes);for(let o,n=r.length-1;o=r[n];n--)s=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||s;return s}static _parseTemplateNodeAttribute(e,t,i,s,r){return"on-"===s.slice(0,3)?(e.removeAttribute(s),i.events=i.events||[],i.events.push({name:s.slice(3),value:r}),!0):"id"===s&&(i.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,s=t.content||e.content,r=document.importNode(s,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let o=r.nodeList=new Array(i.length);r.$={};for(let e,s=0,n=i.length;s<n&&(e=i[s]);s++){let i=o[s]=Fi(r,e);Hi(0,r.$,i,e),Bi(0,i,e,t),$i(this,i,e)}return r=r,r}_addMethodEventListenerToNode(e,t,i,s){let r=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(s=s||e,0,i);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}));let Ui=0;const qi=[],ji={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Wi=/[A-Z]/;function Gi(e,t,i){let s=e[t];if(s){if(!e.hasOwnProperty(t)&&(s=e[t]=Object.create(e[t]),i))for(let e in s){let t=s[e],i=s[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else s=e[t]={};return s}function Yi(e,t,i,s,r,o){if(t){let n=!1;const a=Ui++;for(let l in i){let h=t[r?oi(l):l];if(h)for(let t,d=0,c=h.length;d<c&&(t=h[d]);d++)t.info&&t.info.lastRun===a||r&&!Xi(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,i,s,t.info,r,o),n=!0)}return n}return!1}function Ji(e,t,i,s,r,o,n,a){let l=!1,h=t[n?oi(s):s];if(h)for(let t,d=0,c=h.length;d<c&&(t=h[d]);d++)t.info&&t.info.lastRun===i||n&&!Xi(s,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,s,r,o,t.info,n,a),l=!0);return l}function Xi(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!ni(i,e))||!(!t.wildcard||!ai(i,e))}return!0}function Ki(e,t,i,s,r){let o="string"==typeof r.method?e[r.method]:r.method,n=r.property;o?o.call(e,e.__data[n],s[n]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Zi(e,t,i){let s=oi(t);if(s!==t){return Qi(e,gi(s)+"-changed",i[t],t),!0}return!1}function Qi(e,t,i,s){let r={value:i,queueProperty:!0};s&&(r.path=s),si(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function es(e,t,i,s,r,o){let n=(o?oi(t):t)!=t?t:null,a=n?ci(e,n):e.__data[t];n&&void 0===a&&(a=i[t]),Qi(e,r.eventName,a,n)}function ts(e,t,i,s,r){let o=e.__data[t];fe&&(o=fe(o,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,o)}function is(e,t,i,s){let r=e[ji.COMPUTE];if(r)if(xe){Ui++;const o=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[ji.COMPUTE];let s,{counts:r,ready:o,total:n}=function(e){const t=e.__computeInfo,i={},s=e[ji.COMPUTE],r=[];let o=0;for(let e in t){const s=t[e];o+=i[e]=s.args.filter((e=>!e.literal)).length+(s.dynamicFn?1:0)}for(let e in s)t[e]||r.push(e);return{counts:i,ready:r,total:o}}(e);for(;s=o.shift();){t.set(s,t.size);const e=i[s];e&&e.forEach((e=>{const t=e.info.methodInfo;--n,0==--r[t]&&o.push(t)}))}if(0!==n){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),n=[];for(let e in t)rs(e,r,n,o,s);let a;for(;a=n.shift();)os(e,"",t,i,a)&&rs(a.methodInfo,r,n,o,s);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let o=t;for(;Yi(e,r,o,i,s);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}const ss=(e,t,i)=>{let s=0,r=t.length-1,o=-1;for(;s<=r;){const n=s+r>>1,a=i.get(t[n].methodInfo)-i.get(e.methodInfo);if(a<0)s=n+1;else{if(!(a>0)){o=n;break}r=n-1}}o<0&&(o=r+1),t.splice(o,0,e)},rs=(e,t,i,s,r)=>{const o=t[r?oi(e):e];if(o)for(let t=0;t<o.length;t++){const n=o[t];n.info.lastRun===Ui||r&&!Xi(e,n.trigger)||(n.info.lastRun=Ui,ss(n.info,i,s))}};function os(e,t,i,s,r){let o=us(e,t,i,s,r);if(o===qi)return!1;let n=r.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[n]?e._setPendingProperty(n,o,!0):(e[n]=o,!1)}function ns(e,t,i,s,r,o,n){i.bindings=i.bindings||[];let a={kind:s,target:r,parts:o,literal:n,isCompound:1!==o.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||gi(r)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let s=a.parts[i];s.compoundIndex=i,as(e,t,a,s,l)}}function as(e,t,i,s,r){if(!s.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=s.dependencies,n={index:r,binding:i,part:s,evaluator:e};for(let i=0;i<o.length;i++){let s=o[i];"string"==typeof s&&(s=gs(s),s.wildcard=!0),e._addTemplatePropertyEffect(t,s.rootProperty,{fn:ls,info:n,trigger:s})}}}function ls(e,t,i,s,r,o,n){let a=n[r.index],l=r.binding,h=r.part;if(o&&h.source&&t.length>h.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let s=i[t];t=li(h.source,l.target,t),a._setPendingPropertyOrPath(t,s,!1,!0)&&e._enqueueClient(a)}else{let n=r.evaluator._evaluateBinding(e,h,t,i,s,o);n!==qi&&function(e,t,i,s,r){r=function(e,t,i,s){if(i.isCompound){let r=e.__dataCompoundStorage[i.target];r[s.compoundIndex]=t,t=r.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,r,i,s),fe&&(r=fe(r,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,r,i.target);else{let s=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?t[ji.READ_ONLY]&&t[ji.READ_ONLY][s]||t._setPendingProperty(s,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,r)}}(e,a,l,h,n)}}function hs(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),s=t.parts,r=new Array(s.length);for(let e=0;e<s.length;e++)r[e]=s[e].literal;let o=t.target;i[o]=r,t.literal&&"property"==t.kind&&("className"===o&&(e=si(e)),e[o]=t.literal)}}function ds(e,t,i){if(i.listenerEvent){let s=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,s,r){let o,n=e.detail,a=n&&n.path;a?(s=li(i,s,a),o=n&&n.value):o=e.currentTarget[i],o=r?!o:o,t[ji.READ_ONLY]&&t[ji.READ_ONLY][s]||!t._setPendingPropertyOrPath(s,o,!0,Boolean(a))||n&&n.queueProperty||t._invalidateProperties()}(e,t,i.target,s.source,s.negate)}))}}function cs(e,t,i,s,r,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:o};for(let r,o=0;o<t.args.length&&(r=t.args[o]);o++)r.literal||e._addPropertyEffect(r.rootProperty,i,{fn:s,info:n,trigger:r});return o&&e._addPropertyEffect(t.methodName,i,{fn:s,info:n}),n}function us(e,t,i,s,r){let o=e._methodHost||e,n=o[r.methodName];if(n){let s=e._marshalArgs(r.args,t,i);return s===qi?qi:n.apply(o,s)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const ps=[],_s=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function ms(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function fs(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:ps};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=gs(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function gs(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},s=t[0];switch("-"===s&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=oi(t),i.structured=ri(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function ys(e,t,i){let s=ci(e,i);return void 0===s&&(s=t[i]),s}function bs(e,t,i,s){const r={indexSplices:s};Se&&!e._overrideLegacyUndefined&&(t.splices=r),e.notifyPath(i+".splices",r),e.notifyPath(i+".length",t.length),Se&&!e._overrideLegacyUndefined&&(r.indexSplices=[])}function vs(e,t,i,s,r,o){bs(e,t,i,[{index:s,addedCount:r,removed:o,object:t,type:"splice"}])}const ws=Jt((e=>{const t=Vi(Ni(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return ji}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Cs.length){let e=Cs[Cs.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[ji.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==ji.READ_ONLY);let s=Gi(this,t,!0)[e];s||(s=this[t][e]=[]),s.push(i)}_removePropertyEffect(e,t,i){let s=Gi(this,t,!0)[e],r=s.indexOf(i);r>=0&&s.splice(r,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,ji.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,ji.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,ji.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,ji.COMPUTE)}_setPendingPropertyOrPath(e,t,i,s){if(s||oi(Array.isArray(e)?e[0]:e)!==e){if(!s){let i=ci(this,e);if(!(e=ui(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let s=e.__dataLinkedPaths;if(s){let r;for(let o in s){let n=s[o];ai(o,t)?(r=li(o,n,t),e._setPendingPropertyOrPath(r,i,!0,!0)):ai(n,t)&&(r=li(n,o,t),e._setPendingPropertyOrPath(r,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=si(e)),e[t]=i)}_setPendingProperty(e,t,i){let s=this.__dataHasPaths&&ri(e),r=s?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),s?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(s||this[ji.NOTIFY]&&this[ji.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[ji.READ_ONLY]&&this[ji.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let s,r=this.__dataHasPaths;this.__dataHasPaths=!1,is(this,t,i,r),s=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,r),this._flushClients(),Yi(this,this[ji.REFLECT],t,i,r),Yi(this,this[ji.OBSERVE],t,i,r),s&&function(e,t,i,s,r){let o,n,a=e[ji.NOTIFY],l=Ui++;for(let n in t)t[n]&&(a&&Ji(e,a,l,n,i,s,r)||r&&Zi(e,n,i))&&(o=!0);o&&(n=e.__dataHost)&&n._invalidateProperties&&n._invalidateProperties()}(this,s,t,i,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[ji.PROPAGATE]&&Yi(this,this[ji.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,s){const r=(t,s)=>{Yi(this,e.propertyEffects,t,i,s,e.nodeList);for(let r=e.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,t,i,s)};e.runEffects?e.runEffects(r,t,s):r(t,s)}linkPaths(e,t){e=hi(e),t=hi(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=hi(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};bs(this,ci(this,e,i),i.path,t)}get(e,t){return ci(t||this,e)}set(e,t,i){i?ui(i,e,t):this[ji.READ_ONLY]&&this[ji.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},s=ci(this,e,i),r=s.length,o=s.push(...t);return t.length&&vs(this,s,i.path,r,t.length,[]),o}pop(e){let t={path:""},i=ci(this,e,t),s=Boolean(i.length),r=i.pop();return s&&vs(this,i,t.path,i.length,0,[r]),r}splice(e,t,i,...s){let r,o={path:""},n=ci(this,e,o);return t<0?t=n.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?n.splice(t):n.splice(t,i,...s),(s.length||r.length)&&vs(this,n,o.path,t,s.length,r),r}shift(e){let t={path:""},i=ci(this,e,t),s=Boolean(i.length),r=i.shift();return s&&vs(this,i,t.path,0,0,[r]),r}unshift(e,...t){let i={path:""},s=ci(this,e,i),r=s.unshift(...t);return t.length&&vs(this,s,i.path,0,t.length,[]),r}notifyPath(e,t){let i;if(1==arguments.length){let s={path:""};t=ci(this,e,s),i=s.path}else i=Array.isArray(e)?hi(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,ji.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let s={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,ji.OBSERVE,{fn:Ki,info:s,trigger:{name:e}}),i&&this._addPropertyEffect(t,ji.OBSERVE,{fn:Ki,info:s,trigger:{name:t}})}_createMethodObserver(e,t){let i=fs(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");cs(this,i,ji.OBSERVE,us,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,ji.NOTIFY,{fn:es,info:{eventName:gi(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,ji.REFLECT,{fn:ts,info:{attrName:t}})}_createComputedProperty(e,t,i){let s=fs(t);if(!s)throw new Error("Malformed computed expression '"+t+"'");const r=cs(this,s,ji.COMPUTE,os,e,i);Gi(this,"__computeInfo")[e]=r}_marshalArgs(e,t,i){const s=this.__data,r=[];for(let o=0,n=e.length;o<n;o++){let{name:n,structured:a,wildcard:l,value:h,literal:d}=e[o];if(!d)if(l){const e=ai(n,t),r=ys(s,i,e?t:n);h={path:e?t:n,value:r,base:e?ci(s,n):r}}else h=a?ys(s,i,n):s[n];if(Se&&!this._overrideLegacyUndefined&&void 0===h&&e.length>1)return qi;r[o]=h}return r}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),s=this.__preBoundTemplateInfo==i;if(!s)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=s,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,s=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=s,s?s.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let s=e.propertyEffects=e.propertyEffects||{};(s[t]=s[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),Cs.push(this);let i=super._stampTemplate(e,t);if(Cs.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:s}=t;if(s.length)for(let t=0;t<s.length;t++){let r=s[t],o=i[t],n=r.bindings;if(n)for(let t=0;t<n.length;t++){let i=n[t];hs(o,i),ds(o,e,i)}o.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:s,parent:r}=t;i?i.nextSibling=s:r&&(r.firstChild=s),s?s.previousSibling=i:r&&(r.lastChild=i),t.nextSibling=t.previousSibling=null;let o=t.childNodes;for(let e=0;e<o.length;e++){let t=o[e];si(si(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,s){let r=t._parseTemplateNode.call(this,e,i,s);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=ms(t)||" ",ns(this,i,s,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,i,s,r,o){let n=this._parseBindings(o,i);if(n){let t=r,o="property";Wi.test(r)?o="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),o="attribute");let a=ms(n);return a&&"attribute"==o&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"attribute"==o&&"disable-upgrade$"==t&&e.setAttribute(r,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(r=fi(r)),ns(this,i,s,o,r,n,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,s,r,o)}static _parseTemplateNestedTemplate(e,i,s){let r=t._parseTemplateNestedTemplate.call(this,e,i,s);const o=e.parentNode,n=s.templateInfo,a="dom-if"===o.localName,l="dom-repeat"===o.localName;Ae&&(a||l)&&(o.removeChild(e),(s=s.parentInfo).templateInfo=n,s.noted=!0,r=!1);let h=n.hostProps;if(Pe&&a)h&&(i.hostProps=Object.assign(i.hostProps||{},h),Ae||(s.parentInfo.noted=!0));else{let e="{";for(let t in h){ns(this,i,s,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return r}static _parseBindings(e,t){let i,s=[],r=0;for(;null!==(i=_s.exec(e));){i.index>r&&s.push({literal:e.slice(r,i.index)});let o=i[1][0],n=Boolean(i[2]),a=i[3].trim(),l=!1,h="",d=-1;"{"==o&&(d=a.indexOf("::"))>0&&(h=a.substring(d+2),a=a.substring(0,d),l=!0);let c=fs(a),u=[];if(c){let{args:e,methodName:i}=c;for(let t=0;t<e.length;t++){let i=e[t];i.literal||u.push(i)}let s=t.dynamicFns;(s&&s[i]||c.static)&&(u.push(i),c.dynamicFn=!0)}else u.push(a);s.push({source:a,mode:o,negate:n,customEvent:l,signature:c,dependencies:u,event:h}),r=_s.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&s.push({literal:t})}return s.length?s:null}static _evaluateBinding(e,t,i,s,r,o){let n;return n=t.signature?us(e,i,s,0,t.signature):i!=t.source?ci(e,t.source):o&&ri(i)?ci(e,i):e.__data[i],t.negate&&(n=!n),n}}})),Cs=[];const Ss=Jt((e=>{const t=Ii(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function s(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=function(e){const t={};for(let i in e){const s=e[i];t[i]="function"==typeof s?{type:s}:s}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=s(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,s(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r})),xs=window.ShadyCSS&&window.ShadyCSS.cssBuild,As=Jt((e=>{const t=Ss(ws(e));function i(e,t,i,s){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,s)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,s[i.observer]),e._addPropertyToAttributeMap(t)}function s(e,t,i,s){if(!xs){const r=t.content.querySelectorAll("style"),o=ei(t),n=function(e){let t=Xt(e);return t?ti(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<n.length;i++){let r=n[i];r.textContent=e._processStyleText(r.textContent,s),t.content.insertBefore(r,a)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],n=r[l];n!==i?(i=i.cloneNode(!0),n.parentNode.insertBefore(i,n)):l++,i.textContent=e._processStyleText(i.textContent,s)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),Ie&&xs&&_e){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):ve||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let s=0;s<e.length;s++)i._createMethodObserver(e[s],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!ye||be)&&(t=Re.import(e,"template"),ye&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=ue(e.url);else{const e=Re.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=me,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let s=t[i];"value"in s&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=s)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return ce(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;s(this,t,e,i?de(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=si(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Ce&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=de(this.importPath)),de(e,t)}static _parseTemplateContent(e,i,s){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,s)}static _addTemplatePropertyEffect(e,i,s){return!we||i in this._properties||s.info.part.signature&&s.info.part.signature.static||s.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,s)}}}));class Ps{constructor(e){this.value=e.toString()}toString(){return this.value}}function Ts(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Ps)return function(e){if(e instanceof Ps)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Es=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce(((t,i,s)=>t+Ts(i)+e[s+1]),e[0]),i},Is=As(HTMLElement);class Os{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,zs.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),zs.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Os?e._cancelAsync():e=new Os,e.setConfig(t,i),e}}let zs=new Set;const Ns=function(e){zs.add(e)},ks=function(){const e=Boolean(zs.size);return zs.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};let Rs="string"==typeof document.head.style.touchAction,Ls="__polymerGestures",Ds="__polymerGesturesHandled",Ms="__polymerGesturesTouchAction",Fs=["mousedown","mousemove","mouseup","click"],Hs=[0,1,4,2],$s=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Bs(e){return Fs.indexOf(e)>-1}let Vs=!1;function Us(e){if(!Bs(e)&&"touchend"!==e)return Rs&&Vs&&ge?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){Vs=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let qs=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const js=[],Ws={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Gs={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ys(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let s=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<s.length;e++)t.push(s[e])}}return t}let Js=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[Ds]={skip:!0},"click"===e.type)){let t=!1,s=tr(e);for(let e=0;e<s.length;e++){if(s[e].nodeType===Node.ELEMENT_NODE)if("label"===s[e].localName)js.push(s[e]);else if(i=s[e],Ws[i.localName]){let i=Ys(s[e]);for(let e=0;e<i.length;e++)t=t||js.indexOf(i[e])>-1}if(s[e]===Zs.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Xs(e){let t=qs?["click"]:Fs;for(let i,s=0;s<t.length;s++)i=t[s],e?(js.length=0,document.addEventListener(i,Js,!0)):document.removeEventListener(i,Js,!0)}function Ks(e){let t=e.type;if(!Bs(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!$s&&(t=Hs[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let Zs={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Qs(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function er(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){Zs.mouse.mouseIgnoreJob||Xs(!0),Zs.mouse.target=tr(e)[0],Zs.mouse.mouseIgnoreJob=Os.debounce(Zs.mouse.mouseIgnoreJob,xi.after(2500),(function(){Xs(),Zs.mouse.target=null,Zs.mouse.mouseIgnoreJob=null}))}),!!Vs&&{passive:!0});const tr=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],ir={},sr=[];function rr(e){const t=tr(e);return t.length>0?t[0]:e.target}function or(e){let t,i=e.type,s=e.currentTarget.__polymerGestures;if(!s)return;let r=s[i];if(r){if(!e[Ds]&&(e[Ds]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(Zs.touch.id=t.identifier),Zs.touch.id!==t.identifier)return;Rs||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)Zs.touch.x=t.clientX,Zs.touch.y=t.clientY,Zs.touch.scrollDecided=!1;else if("touchmove"===i){if(Zs.touch.scrollDecided)return;Zs.touch.scrollDecided=!0;let i=function(e){let t="auto",i=tr(e);for(let e,s=0;s<i.length;s++)if(e=i[s],e[Ms]){t=e[Ms];break}return t}(e),s=!1,r=Math.abs(Zs.touch.x-t.clientX),o=Math.abs(Zs.touch.y-t.clientY);e.cancelable&&("none"===i?s=!0:"pan-x"===i?s=o>r:"pan-y"===i&&(s=r>o)),s?e.preventDefault():cr("track")}}(e)}if(t=e[Ds],!t.skip){for(let i,s=0;s<sr.length;s++)i=sr[s],r[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let s,o=0;o<sr.length;o++)s=sr[o],r[s.name]&&!t[s.name]&&(t[s.name]=!0,s[i](e))}}}function nr(e,t,i){return!!ir[t]&&(function(e,t,i){let s=ir[t],r=s.deps,o=s.name,n=e[Ls];n||(e[Ls]=n={});for(let t,i,s=0;s<r.length;s++)t=r[s],qs&&Bs(t)&&"click"!==t||(i=n[t],i||(n[t]=i={_count:0}),0===i._count&&e.addEventListener(t,or,Us(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),s.touchAction&&hr(e,s.touchAction)}(e,t,i),!0)}function ar(e,t,i){return!!ir[t]&&(function(e,t,i){let s=ir[t],r=s.deps,o=s.name,n=e[Ls];if(n)for(let t,i,s=0;s<r.length;s++)t=r[s],i=n[t],i&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,or,Us(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function lr(e){sr.push(e);for(let t=0;t<e.emits.length;t++)ir[e.emits[t]]=e}function hr(e,t){Rs&&e instanceof HTMLElement&&Ti.run((()=>{e.style.touchAction=t})),e[Ms]=t}function dr(e,t,i){let s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,si(e).dispatchEvent(s),s.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function cr(e){let t=function(e){for(let t,i=0;i<sr.length;i++){t=sr[i];for(let i,s=0;s<t.emits.length;s++)if(i=t.emits[s],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function ur(e,t,i,s){t&&dr(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(e){return cr(e)}})}function pr(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let s=Math.abs(e.x-t),r=Math.abs(e.y-i);return s>=5||r>=5}function _r(e,t,i){if(!t)return;let s,r=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],n=o.x-e.x,a=o.y-e.y,l=0;r&&(s=o.x-r.x,l=o.y-r.y),dr(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:n,dy:a,ddx:s,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(e,t),r===s)break;s&&(i=s)}return i}(i.clientX,i.clientY)}})}function mr(e,t,i){let s=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),o=rr(i||t);!o||Gs[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=rr(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),s=e.pageX,r=e.pageY;return!(s>=i.left&&s<=i.right&&r>=i.top&&r<=i.bottom)}return!1}(t))&&(e.prevent||dr(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}lr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){er(this.info)},mousedown:function(e){if(!Ks(e))return;let t=rr(e),i=this;Qs(this.info,(function(e){Ks(e)||(ur("up",t,e),er(i.info))}),(function(e){Ks(e)&&ur("up",t,e),er(i.info)})),ur("down",t,e)},touchstart:function(e){ur("down",rr(e),e.changedTouches[0],e)},touchend:function(e){ur("up",rr(e),e.changedTouches[0],e)}}),lr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,er(this.info)},mousedown:function(e){if(!Ks(e))return;let t=rr(e),i=this,s=function(e){let s=e.clientX,r=e.clientY;pr(i.info,s,r)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&cr("tap"),i.info.addMove({x:s,y:r}),Ks(e)||(i.info.state="end",er(i.info)),t&&_r(i.info,t,e),i.info.started=!0)};Qs(this.info,s,(function(e){i.info.started&&s(e),er(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=rr(e),i=e.changedTouches[0],s=i.clientX,r=i.clientY;pr(this.info,s,r)&&("start"===this.info.state&&cr("tap"),this.info.addMove({x:s,y:r}),_r(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=rr(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),_r(this.info,t,i))}}),lr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Ks(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Ks(e)&&mr(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){mr(this.info,e.changedTouches[0],e)}});const fr=Jt((e=>class extends e{_addEventListenerToNode(e,t,i){nr(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){ar(e,t,i)||super._removeEventListenerFromNode(e,t,i)}})),gr=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._setTheme(i)}},yr=e=>class extends(gr(e)){static finalize(){super.finalize();const e=this.prototype._template,t=Object.getPrototypeOf(this.prototype)._template;t&&Array.from(t.content.querySelectorAll("style[include]")).forEach((t=>{this._includeStyle(t.getAttribute("include"),e)})),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=Re.prototype.modules;let i=!1;const s=this.is+"-default-theme";Object.keys(t).sort(((e,t)=>{const i=0===e.indexOf("vaadin-"),s=0===t.indexOf("vaadin-"),r=["lumo-","material-"],o=r.filter((t=>0===e.indexOf(t))).length>0,n=r.filter((e=>0===t.indexOf(e))).length>0;return i!==s?i?-1:1:o!==n?o?-1:1:0})).forEach((r=>{if(r!==s){const s=t[r].getAttribute("theme-for");s&&s.split(" ").forEach((t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(i=!0,this._includeStyle(r,e))}))}})),!i&&t[s]&&this._includeStyle(s,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const i=document.createElement("style");i.setAttribute("include",e),t.content.appendChild(i)}}};let br=!1;window.addEventListener("keydown",(()=>{br=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{br=!1}),{capture:!0});const vr=e=>class extends((e=>class extends e{static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}}}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",(e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)})),this.addEventListener("focusout",(()=>this._setFocused(!1))),super.ready(),this.addEventListener("keydown",(e=>{!e.defaultPrevented&&9===e.keyCode&&e.shiftKey&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout((()=>this._isShiftTabbing=!1),0))})),this.autofocus&&!this.disabled&&window.requestAnimationFrame((()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&br?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0)}click(){this.disabled||super.click()}},wr=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Cr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Sr(e,t){if("function"!=typeof e)return;const i=wr.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const xr=function(e,t){if(window.Vaadin.developmentMode)return Sr(e,t)};function Ar(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Cr?!(Cr&&Object.keys(Cr).map((e=>Cr[e])).filter((e=>e.productionMode)).length>0):!Sr((function(){return!0})))}catch(e){return!1}}());class Pr{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,i){const{scrollLeft:s}=i;if("rtl"!==t||!e)return s;switch(e){case"negative":return i.scrollWidth-i.clientWidth+s;case"reverse":return i.scrollWidth-i.clientWidth-s}return s}static setNormalizedScrollLeft(e,t,i,s){if("rtl"===t&&e)switch(e){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+s;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-s;break;default:i.scrollLeft=s}else i.scrollLeft=s}}const Tr=[];let Er;new MutationObserver((function(){const e=Or();Tr.forEach((t=>{Ir(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Ir=function(e,t,i=e.getAttribute("dir")){t?e.setAttribute("dir",t):null!=i&&e.removeAttribute("dir")},Or=function(){return document.documentElement.getAttribute("dir")},zr=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0}}}static finalize(){super.finalize(),Er||(Er=Pr.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Ir(this,Or(),null))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"!==e)return;const s=Or(),r=i===s&&-1===Tr.indexOf(this),o=!i&&t&&-1===Tr.indexOf(this),n=i!==s&&t===s;r||o?(this.__subscribe(),Ir(this,s,i)):n&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(e,t,i){("dir"!==i||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,i)}_attributeToProperty(e,t,i){"dir"!==e||t?super._attributeToProperty(e,t,i):this.dir=""}__subscribe(e=!0){e?-1===Tr.indexOf(this)&&Tr.push(this):Tr.indexOf(this)>-1&&Tr.splice(Tr.indexOf(this),1)}__getNormalizedScrollLeft(e){return Pr.getNormalizedScrollLeft(Er,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return Pr.setNormalizedScrollLeft(Er,this.getAttribute("dir")||"ltr",e,t)}};let Nr;window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){xr(Ar)};const kr=new Set,Rr=e=>class extends(zr(e)){static finalize(){super.finalize();const{is:e}=this;e&&!kr.has(e)&&(window.Vaadin.registrations.push(this),kr.add(e),window.Vaadin.developmentModeCallback&&(Nr=Os.debounce(Nr,Pi,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),Ns(Nr)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};let Lr,Dr=e=>e;class Mr extends(Rr(vr(yr(fr(Is))))){static get template(){return Es(Lr||(Lr=Dr`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        label {
          display: inline-flex;
          align-items: baseline;
          outline: none;
        }

        [part='checkbox'] {
          position: relative;
          display: inline-block;
          flex: none;
        }

        input[type='checkbox'] {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }
      </style>

      <label>
        <span part="checkbox">
          <input
            type="checkbox"
            checked="{{checked::change}}"
            disabled$="[[disabled]]"
            indeterminate="{{indeterminate::change}}"
            role="presentation"
            tabindex="-1"
          />
        </span>

        <span part="label">
          <slot></slot>
        </span>
      </label>
    `))}static get is(){return"vaadin-checkbox"}static get version(){return"20.0.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e))}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",(e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")})),this._addEventListenerToNode(this,"up",(()=>this.removeAttribute("active"))),this.addEventListener("keydown",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))})),this.addEventListener("keyup",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))}))}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(Mr.is,Mr);let Fr,Hr,$r=e=>e;xt("vaadin-grid",bt(Fr||(Fr=$r`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
    }

    [part~='row'][dragstart] {
      /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
      border-bottom: 100px solid transparent;
      z-index: 100 !important;
      opacity: 0.9;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    [ios] [part~='row'][dragstart] [part~='cell'] {
      background: var(--lumo-primary-color-50pct);
    }

    #scroller:not([ios]) [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='left']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='right']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }
  `)),{moduleId:"lumo-grid"}),xt("vaadin-checkbox",bt(Hr||(Hr=$r`
    :host(.vaadin-grid-select-all-checkbox) {
      font-size: var(--lumo-font-size-m);
    }
  `)),{moduleId:"vaadin-grid-select-all-checkbox-lumo"});let Br=!1,Vr=[],Ur=[];function qr(){Br=!0,requestAnimationFrame((function(){Br=!1,function(e){for(;e.length;)jr(e.shift())}(Vr),setTimeout((function(){!function(e){for(let t=0,i=e.length;t<i;t++)jr(e.shift())}(Ur)}))}))}function jr(e){const t=e[0],i=e[1],s=e[2];try{i.apply(t,s)}catch(e){setTimeout((()=>{throw e}))}}const Wr=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=ks()}while(e||t)},Gr=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Yr,Jr;function Xr(e){Yr=(!e||!e.shimcssproperties)&&(Gr||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Jr=window.ShadyCSS.cssBuild);const Kr=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Yr=window.ShadyCSS.nativeCss:window.ShadyCSS?(Xr(window.ShadyCSS),window.ShadyCSS=void 0):Xr(window.WebComponents&&window.WebComponents.flags);const Zr=Yr;class Qr{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function eo(e){return to(function(e){let t=new Qr;t.start=0,t.end=e.length;let i=t;for(let s=0,r=e.length;s<r;s++)if(e[s]===ro){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new Qr,i.start=s+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[s]===oo&&(i.end=s+1,i=i.parent||t);return t}(e=e.replace(no.comments,"").replace(no.port,"")),e)}function to(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let s=e.previous?e.previous.end:e.parent.start;i=t.substring(s,e.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(no.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=i.trim();e.atRule=0===r.indexOf(ho),e.atRule?0===r.indexOf(lo)?e.type=so.MEDIA_RULE:r.match(no.keyframesRule)&&(e.type=so.KEYFRAMES_RULE,e.keyframesName=e.selector.split(no.multipleSpaces).pop()):0===r.indexOf(ao)?e.type=so.MIXIN_RULE:e.type=so.STYLE_RULE}let s=e.rules;if(s)for(let e,i=0,r=s.length;i<r&&(e=s[i]);i++)to(e,t);return e}function io(e,t,i=""){let s="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(ao)}(i))for(let e,r=0,o=i.length;r<o&&(e=i[r]);r++)s=io(e,t,s);else s=t?e.cssText:function(e){return function(e){return e.replace(no.mixinApply,"").replace(no.varApply,"")}(e=function(e){return e.replace(no.customProp,"").replace(no.mixinProp,"")}(e))}(e.cssText),s=s.trim(),s&&(s="  "+s+"\n")}return s&&(e.selector&&(i+=e.selector+" "+ro+"\n"),i+=s,e.selector&&(i+=oo+"\n\n")),i}const so={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},ro="{",oo="}",no={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},ao="--",lo="@media",ho="@",co=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,uo=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,po=/@media\s(.*)/,_o=new Set;function mo(e){const t=e.textContent;if(!_o.has(t)){_o.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function fo(e){return e.hasAttribute("shady-unscoped")}function go(e,t){return e?("string"==typeof e&&(e=eo(e)),t&&bo(e,t),io(e,Zr)):""}function yo(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=eo(e.textContent)),e.__cssRules||null}function bo(e,t,i,s){if(!e)return;let r=!1,o=e.type;if(s&&o===so.MEDIA_RULE){let t=e.selector.match(po);t&&(window.matchMedia(t[1]).matches||(r=!0))}o===so.STYLE_RULE?t(e):i&&o===so.KEYFRAMES_RULE?i(e):o===so.MIXIN_RULE&&(r=!0);let n=e.rules;if(n&&!r)for(let e,r=0,o=n.length;r<o&&(e=n[r]);r++)bo(e,t,i,s)}function vo(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let s=function(e,t){let i=0;for(let s=t,r=e.length;s<r;s++)if("("===e[s])i++;else if(")"===e[s]&&0==--i)return s;return-1}(e,i+3),r=e.substring(i+4,s),o=e.substring(0,i),n=vo(e.substring(s+1),t),a=r.indexOf(",");return-1===a?t(o,r.trim(),"",n):t(o,r.substring(0,a).trim(),r.substring(a+1).trim(),n)}window.ShadyDOM&&window.ShadyDOM.wrap;function wo(e){if(void 0!==Jr)return Jr;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function Co(e){return""!==wo(e)}function So(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function xo(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}const Ao=/;\s*/m,Po=/^\s*(initial)|(inherit)\s*$/,To=/\s*!important/;class Eo{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Io=null;class Oo{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Eo}detectMixin(e){return function(e){const t=uo.test(e)||co.test(e);return uo.lastIndex=0,co.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const s=i[e];fo(s)?Gr||(mo(s),s.parentNode.removeChild(s)):(t.push(s.textContent),s.parentNode.removeChild(s))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=yo(e);return this.transformRules(i,t),e.textContent=go(i),i}transformCustomStyle(e){let t=yo(e);return bo(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=go(t),t}transformRules(e,t){this._currentElement=t,bo(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(co,((e,i,s,r)=>this._produceCssProperties(e,i,s,r,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let s=!1;return bo(t,(t=>{s=s||t===e,s||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))})),i}_consumeCssProperties(e,t){let i=null;for(;i=uo.exec(e);){let s=i[0],r=i[1],o=i.index,n=o+s.indexOf("@apply"),a=o+s.length,l=e.slice(0,n),h=e.slice(a),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let c=this._atApplyToCssProperties(r,d);e=`${l}${c}${h}`,uo.lastIndex=o+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Ao,"");let i=[],s=this._map.get(e);if(s||(this._map.set(e,{}),s=this._map.get(e)),s){let r,o,n;this._currentElement&&(s.dependants[this._currentElement]=!0);const a=s.properties;for(r in a)n=t&&t[r],o=[r,": var(",e,"_-_",r],n&&o.push(",",n.replace(To,"")),o.push(")"),To.test(a[r])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=Po.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,s,r=e.split(";"),o={};for(let e,n,a=0;a<r.length;a++)e=r[a],e&&(n=e.split(":"),n.length>1&&(i=n[0].trim(),s=n.slice(1).join(":"),t&&(s=this._replaceInitialOrInherit(i,s)),o[i]=s));return o}_invalidateMixinEntry(e){if(Io)for(let t in e.dependants)t!==this._currentElement&&Io(t)}_produceCssProperties(e,t,i,s,r){if(i&&vo(i,((e,t)=>{t&&this._map.get(t)&&(s=`@apply ${t};`)})),!s)return e;let o=this._consumeCssProperties(""+s,r),n=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,h=this._map.get(t),d=h&&h.properties;d?l=Object.assign(Object.create(d),a):this._map.set(t,l);let c,u,p=[],_=!1;for(c in l)u=a[c],void 0===u&&(u="initial"),d&&!(c in d)&&(_=!0),p.push(`${t}_-_${c}: ${u}`);return _&&this._invalidateMixinEntry(h),h&&(h.properties=l),i&&(n=`${e};${n}`),`${n}${p.join("; ")};`}}Oo.prototype.detectMixin=Oo.prototype.detectMixin,Oo.prototype.transformStyle=Oo.prototype.transformStyle,Oo.prototype.transformCustomStyle=Oo.prototype.transformCustomStyle,Oo.prototype.transformRules=Oo.prototype.transformRules,Oo.prototype.transformRule=Oo.prototype.transformRule,Oo.prototype.transformTemplate=Oo.prototype.transformTemplate,Oo.prototype._separator="_-_",Object.defineProperty(Oo.prototype,"invalidCallback",{get:()=>Io,set(e){Io=e}});const zo={},No="_applyShimCurrentVersion",ko="_applyShimNextVersion",Ro="_applyShimValidatingVersion",Lo=Promise.resolve();function Do(e){let t=zo[e];t&&function(e){e[No]=e[No]||0,e[Ro]=e[Ro]||0,e[ko]=(e[ko]||0)+1}(t)}function Mo(e){return e[No]===e[ko]}let Fo,Ho=null,$o=window.HTMLImports&&window.HTMLImports.whenReady||null;function Bo(e){requestAnimationFrame((function(){$o?$o(e):(Ho||(Ho=new Promise((e=>{Fo=e})),"complete"===document.readyState?Fo():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&Fo()}))),Ho.then((function(){e&&e()})))}))}const Vo="__shadyCSSCachedStyle";let Uo=null,qo=null;class jo{constructor(){this.customStyles=[],this.enqueued=!1,Bo((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&qo&&(this.enqueued=!0,Bo(qo))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Vo])return e[Vo];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[Vo])continue;const s=this.getStyleForCustomStyle(i);if(s){const e=s.__appliedElement||s;Uo&&Uo(e),i[Vo]=e}}return e}}jo.prototype.addCustomStyle=jo.prototype.addCustomStyle,jo.prototype.getStyleForCustomStyle=jo.prototype.getStyleForCustomStyle,jo.prototype.processStyles=jo.prototype.processStyles,Object.defineProperties(jo.prototype,{transformCallback:{get:()=>Uo,set(e){Uo=e}},validateCallback:{get:()=>qo,set(e){let t=!1;qo||(t=!0),qo=e,t&&this.enqueueDocumentValidation()}}});const Wo=new Oo;class Go{constructor(){this.customStyleInterface=null,Wo.invalidCallback=Do}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Wo.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),Co(e))return;zo[t]=e;let i=Wo.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],s=this.customStyleInterface.getStyleForCustomStyle(i);s&&Wo.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&So(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",s="";return t?t.indexOf("-")>-1?i=t:(s=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,s=e.extends),{is:i,typeExtension:s}}(e),i=zo[t];if((!i||!Co(i))&&i&&!Mo(i)){(function(e){return!Mo(e)&&e[Ro]===e[ko]})(i)||(this.prepareTemplate(i,t),function(e){e[Ro]=e[ko],e._validating||(e._validating=!0,Lo.then((function(){e[No]=e[ko],e._validating=!1})))}(i));let s=e.shadowRoot;if(s){let e=s.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=go(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Go;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,s){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>xo(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:Zr,nativeShadow:Gr,cssBuild:Jr,disableRuntime:Kr},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Wo;const Yo=/:host\(:dir\((ltr|rtl)\)\)/g,Jo=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Xo=/:dir\((?:ltr|rtl)\)/,Ko=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Zo=[];let Qo=null,en="";function tn(){en=document.documentElement.getAttribute("dir")}function sn(e){if(!e.__autoDirOptOut){e.setAttribute("dir",en)}}function rn(){tn(),en=document.documentElement.getAttribute("dir");for(let e=0;e<Zo.length;e++)sn(Zo[e])}const on=Jt((e=>{Ko||Qo||(tn(),Qo=new MutationObserver(rn),Qo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Ni(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!Ko&&Xo.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Yo,':host([dir="$1"])'),t=t.replace(Jo,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Qo&&Qo.takeRecords().length&&rn(),Zo.push(this),sn(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Zo.indexOf(this);e>-1&&Zo.splice(e,1)}}}return i.__activateDir=!1,i}));function nn(){document.body.removeAttribute("unresolved")}function an(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?nn():window.addEventListener("DOMContentLoaded",nn);function ln(e,t,i,s,r,o){let n,a=0,l=0,h=Math.min(i-t,o-r);if(0==t&&0==r&&(a=function(e,t,i){for(let s=0;s<i;s++)if(!dn(e[s],t[s]))return s;return i}(e,s,h)),i==e.length&&o==s.length&&(l=function(e,t,i){let s=e.length,r=t.length,o=0;for(;o<i&&dn(e[--s],t[--r]);)o++;return o}(e,s,h-a)),r+=a,o-=l,(i-=l)-(t+=a)==0&&o-r==0)return[];if(t==i){for(n=an(t,[],0);r<o;)n.removed.push(s[r++]);return[n]}if(r==o)return[an(t,[],i-t)];let d=function(e){let t=e.length-1,i=e[0].length-1,s=e[t][i],r=[];for(;t>0||i>0;){if(0==t){r.push(2),i--;continue}if(0==i){r.push(3),t--;continue}let o,n=e[t-1][i-1],a=e[t-1][i],l=e[t][i-1];o=a<l?a<n?a:n:l<n?l:n,o==n?(n==s?r.push(0):(r.push(1),s=n),t--,i--):o==a?(r.push(3),t--,s=a):(r.push(2),i--,s=l)}return r.reverse(),r}(function(e,t,i,s,r,o){let n=o-r+1,a=i-t+1,l=new Array(n);for(let e=0;e<n;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let i=1;i<n;i++)for(let o=1;o<a;o++)if(dn(e[t+o-1],s[r+i-1]))l[i][o]=l[i-1][o-1];else{let e=l[i-1][o]+1,t=l[i][o-1]+1;l[i][o]=e<t?e:t}return l}(e,t,i,s,r,o));n=void 0;let c=[],u=t,p=r;for(let e=0;e<d.length;e++)switch(d[e]){case 0:n&&(c.push(n),n=void 0),u++,p++;break;case 1:n||(n=an(u,[],0)),n.addedCount++,u++,n.removed.push(s[p]),p++;break;case 2:n||(n=an(u,[],0)),n.addedCount++,u++;break;case 3:n||(n=an(u,[],0)),n.removed.push(s[p]),p++}return n&&c.push(n),c}function hn(e,t){return ln(e,0,e.length,t,0,t.length)}function dn(e,t){return e===t}function cn(e){return"slot"===e.localName}let un=class{static getFlattenedNodes(e){const t=si(e);return cn(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map((e=>cn(e)?si(e=e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){cn(this._target)?this._listenSlots([this._target]):si(this._target).children&&(this._listenSlots(si(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){cn(this._target)?this._unlistenSlots([this._target]):si(this._target).children&&(this._unlistenSlots(si(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ti.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=hn(t,this._effectiveNodes);for(let t,s=0;s<i.length&&(t=i[s]);s++)for(let i,s=0;s<t.removed.length&&(i=t.removed[s]);s++)e.removedNodes.push(i);for(let s,r=0;r<i.length&&(s=i[r]);r++)for(let i=s.index;i<s.index+s.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let s=!1;return(e.addedNodes.length||e.removedNodes.length)&&(s=!0,this.callback.call(this._target,e)),s}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];cn(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];cn(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};const pn=Element.prototype,_n=pn.matches||pn.matchesSelector||pn.mozMatchesSelector||pn.msMatchesSelector||pn.oMatchesSelector||pn.webkitMatchesSelector,mn=function(e,t){return _n.call(e,t)};class fn{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new un(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(si(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=si(t).parentNode||si(t).host;return t===this.node}getOwnerRoot(){return si(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?si(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=si(this.node).assignedSlot;for(;t;)e.push(t),t=si(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return si(i).importNode(e,t)}getEffectiveChildNodes(){return un.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let s,r=0,o=t.length;r<o&&(s=t[r]);r++)s.nodeType===Node.ELEMENT_NODE&&mn(s,e)&&i.push(s);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function gn(e,t){for(let i=0;i<t.length;i++){let s=t[i];Object.defineProperty(e,s,{get:function(){return this.node[s]},configurable:!0})}}class yn{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}fn.prototype.cloneNode,fn.prototype.appendChild,fn.prototype.insertBefore,fn.prototype.removeChild,fn.prototype.replaceChild,fn.prototype.setAttribute,fn.prototype.removeAttribute,fn.prototype.querySelector,fn.prototype.querySelectorAll,fn.prototype.parentNode,fn.prototype.firstChild,fn.prototype.lastChild,fn.prototype.nextSibling,fn.prototype.previousSibling,fn.prototype.firstElementChild,fn.prototype.lastElementChild,fn.prototype.nextElementSibling,fn.prototype.previousElementSibling,fn.prototype.childNodes,fn.prototype.children,fn.prototype.classList,fn.prototype.textContent,fn.prototype.innerHTML;let bn=fn;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(fn.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=fn.prototype[t])})),gn(e.prototype,["classList"]),bn=e,Object.defineProperties(yn.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&vn(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const s=i[e];if(vn(s).getOwnerRoot()===t)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let s=t[i];e[s]=function(){return this.node[s].apply(this.node,arguments)}}}(fn.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),gn(fn.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let s=t[i];Object.defineProperty(e,s,{get:function(){return this.node[s]},set:function(e){this.node[s]=e},configurable:!0})}}(fn.prototype,["textContent","innerHTML","className"]);const vn=function(e){if((e=e||document)instanceof bn)return e;if(e instanceof yn)return e;let t=e.__domApi;return t||(t=e instanceof Event?new yn(e):new bn(e),e.__domApi=t),t},wn=window.ShadyDOM,Cn=window.ShadyCSS;function Sn(e,t){return si(e).getRootNode()===t}const xn=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};Jt((e=>{const t=As(e);let i=xn(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,i,s){"disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,si(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,i,s)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}}));let An=window.ShadyCSS;const Pn=Jt((e=>{const t=fr(As(e)),i=xs?t:on(t),s=xn(i),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,i){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,t,i,null)}setAttribute(e,t){if(Ee&&!this._legacyForceObservedAttributes){const i=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,i,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(Ee&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return Ee&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):s.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,i,s){t!==i&&("disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,si(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,i,s),this.attributeChanged(e,t,i)))}attributeChanged(e,t,i){}_initializeProperties(){if(ve&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Ee&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let s,r=0;r<i.length&&(s=i[r]);r++){let i=Object.getOwnPropertyDescriptor(t,s);i&&Object.defineProperty(e,s,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let s=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});s.detail=t;let r=i.node||this;return si(r).dispatchEvent(s),s}listen(e,t,i){e=e||this;let s=this.__boundListeners||(this.__boundListeners=new WeakMap),r=s.get(e);r||(r={},s.set(e,r));let o=t+i;r[o]||(r[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let s=this.__boundListeners&&this.__boundListeners.get(e),r=t+i,o=s&&s[r];o&&(this._removeEventListenerFromNode(e,t,o),s[r]=null)}setScrollDirection(e,t){hr(t||this,r[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=si(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=vn(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return vn(this).getEffectiveChildNodes()}queryDistributedElements(e){return vn(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,s=0;i=e[s];s++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?vn(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){const t=this;return t!==e&&si(t).contains(e)&&si(t).getRootNode()===si(e).getRootNode()}isLocalDescendant(e){return this.root===si(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!wn||!Cn)return null;if(!wn.handlesDynamicScoping)return null;const i=Cn.ScopingShim;if(!i)return null;const s=i.scopeForNode(e),r=si(e).getRootNode(),o=e=>{if(!Sn(e,r))return;const t=Array.from(wn.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!Sn(o,r))continue;const n=i.currentScopeForNode(o);n!==s&&(""!==n&&i.unscopeNode(o,n),i.scopeNode(o,s))}};if(o(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return An.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=Os.debounce(this._debouncers[e],i>0?xi.after(i):Ti,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?xi.run(e.bind(this),t):~Ti.run(e.bind(this))}cancelAsync(e){e<0?Ti.cancel(~e):xi.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return mn(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(si(i).setAttribute(e,""),!0):(si(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,s){s=s||this,this.transform("translate3d("+e+","+t+","+i+")",s)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=ci(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return o.prototype.is="",o})),Tn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},En={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},In=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},En);function On(e,t,i,s){!function(e,t,i){const s=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let o=0;o<r.length;o++){let n=r[o];if(!(n in i))if(s)t[n]=e[n];else{let i=Object.getOwnPropertyDescriptor(e,n);i&&(i.configurable=!0,Object.defineProperty(t,n,i))}}}(t,e,s);for(let e in Tn)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function zn(e,t,i){t=t||[];for(let s=e.length-1;s>=0;s--){let r=e[s];r?Array.isArray(r)?zn(r,t):t.indexOf(r)<0&&(!i||i.indexOf(r)<0)&&t.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return t}function Nn(e,t){for(const i in t){const s=e[i],r=t[i];e[i]=!("value"in r)&&s&&"value"in s?Object.assign({value:s.value},r):r}}const kn=Pn(HTMLElement);function Rn(e,t,i){let s;const r={};class o extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(s)for(let e,t=0;t<s.length;t++)e=s[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(s)for(let e=0;e<s.length;e++)Nn(t,s[e].properties);return Nn(t,e.properties),t}static get observers(){let t=[];if(s)for(let e,i=0;i<s.length;i++)e=s[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=o.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),ve&&n(e);const t=Object.getPrototypeOf(this);let i=r.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=r.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let s=r.attributeChanged;if(s)for(let r=0;r<s.length;r++)s[r].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;s=zn(i,null,e),o.prototype.behaviors=e?e.concat(i):s}const n=t=>{s&&function(e,t,i){for(let s=0;s<t.length;s++)On(e,t[s],i,In)}(t,s,r),On(t,e,r,En)};return ve||n(o.prototype),o.generatedFrom=e,o}function Ln(e,t,i,s,r){let o;r&&(o="object"==typeof i&&null!==i,o&&(s=e.__dataTemp[t]));let n=s!==i&&(s==s||i==i);return o&&n&&(e.__dataTemp[t]=i),n}const Dn=Jt((e=>class extends e{_shouldPropertyChange(e,t,i){return Ln(this,e,t,i,!0)}})),Mn=Jt((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return Ln(this,e,t,i,this.mutableData)}}));Dn._mutablePropertyChange=Ln;let Fn=null;function Hn(){return Fn}Hn.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Hn,writable:!0}});const $n=ws(Hn),Bn=Dn($n);const Vn=ws(class{});function Un(e,t){for(let i=0;i<t.length;i++){let s=t[i];if(Boolean(e)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)e?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if("slot"===s.localName)if(e)s.__polymerReplaced__=document.createComment("hidden-slot"),si(si(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{const e=s.__polymerReplaced__;e&&si(si(e).parentNode).replaceChild(s,e)}else s.style&&(e?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=e,s._showHideChildren&&s._showHideChildren(e)}}class qn extends Vn{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,i(e)}));else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(e,t,i)}}_showHideChildren(e){Un(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}qn.prototype.__dataHost,qn.prototype.__templatizeOptions,qn.prototype._methodHost,qn.prototype.__templatizeOwner,qn.prototype.__hostProps;const jn=Dn(qn);function Wn(e){let t=e.__dataHost;return t&&t._methodHost||t}function Gn(e,t,i){let s=i.mutableData?jn:qn;Kn.mixin&&(s=Kn.mixin(s));let r=class extends s{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(e),function(e,t,i,s){let r=i.hostProps||{};for(let t in s.instanceProps){delete r[t];let i=s.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Xn(t,i)})}if(s.forwardHostProp&&t.__dataHost)for(let t in r)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(r,e,t,i),r}function Yn(e,t,i,s){let r=i.forwardHostProp;if(r&&t.hasHostProps){const a="template"==e.localName;let l=t.templatizeTemplateClass;if(!l){if(a){let e=i.mutableData?Bn:$n;class s extends e{}l=t.templatizeTemplateClass=s}else{const i=e.constructor;class s extends i{}l=t.templatizeTemplateClass=s}let o=t.hostProps;for(let e in o)l.prototype._addPropertyEffect("_host_"+e,l.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Jn(e,r)}),l.prototype._createNotifyingProperty("_host_"+e);we&&s&&function(e,t,i){const s=i.constructor._properties,{propertyEffects:r}=e,{instanceProps:o}=t;for(let e in r)if(!(s[e]||o&&o[e])){const t=r[e];for(let i=0;i<t.length;i++){const{part:s}=t[i].info;if(!s.signature||!s.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,i,s)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),a)n=l,Fn=o=e,Object.setPrototypeOf(o,n.prototype),new n,Fn=null,e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,l.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i}}}var o,n}function Jn(e,t){return function(e,i,s){t.call(e.__templatizeOwner,i.substring("_host_".length),s[i])}}function Xn(e,t){return function(e,i,s){t.call(e.__templatizeOwner,e,i,s[i])}}function Kn(e,t,i){if(ye&&!Wn(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let s=(t?t.constructor:qn)._parseTemplate(e),r=s.templatizeInstanceClass;r||(r=Gn(e,s,i),s.templatizeInstanceClass=r);const o=Wn(e);Yn(e,s,i,o);let n=class extends r{};return n.prototype._methodHost=o,n.prototype.__dataHost=e,n.prototype.__templatizeOwner=t,n.prototype.__hostProps=s.hostProps,n=n,n}let Zn=!1;function Qn(){if(ve&&!pe){if(!Zn){Zn=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const ea=fr(Mn(ws(HTMLElement)));customElements.define("dom-bind",class extends ea{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),ye)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,s){this.mutableData=!0}connectedCallback(){Qn()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){si(si(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});const ta=Mn(Is);class ia extends ta{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Te,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),Qn()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=si(si(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Kn(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let s,r=0;r<i.length&&(s=i[r]);r++)s.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((s=this.as)===(r=t)||ni(s,r)||ai(s,r)){let s=e[this.itemsIndexAs];t==this.as&&(this.items[s]=i);let r=li(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,t);this.notifyPath(r,i)}var s,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Os.debounce(this.__renderDebouncer,t>0?xi.after(t):Ti,e.bind(this)),Ns(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Wr()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>this.__continueChunking()))),this._setRenderedItemCount(this.__instances.length),Te&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter(((t,i,s)=>this.__filterFn(e[t],i,s)))),this.__sortFn&&t.sort(((t,i)=>this.__sortFn(e[t],e[i]))),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let s;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),s=Math.max(t-i,0),this.__chunkCount=s||1):(s=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+s,e)),this.__shouldMeasureChunk=s===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const s=this.__itemsIdxToInstIdx={};let r;for(r=0;r<t;r++){let t=this.__instances[r],o=i[r],n=e[o];s[o]=r,t?(t._setPendingProperty(this.as,n),t._setPendingProperty(this.indexAs,r),t._setPendingProperty(this.itemsIndexAs,o),t._flushProperties()):this.__insertInstance(n,r,o)}for(let e=this.__instances.length-1;e>=r;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=si(t.root);for(let e=0;e<t.children.length;e++){let s=t.children[e];i.appendChild(s)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let s={};return s[this.as]=e,s[this.indexAs]=t,s[this.itemsIndexAs]=i,new this.__ctor(s)}__insertInstance(e,t,i){const s=this.__stampInstance(e,t,i);let r=this.__instances[t+1],o=r?r.children[0]:this;return si(si(this).parentNode).insertBefore(s.root,o),this.__instances[t]=s,s}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),s=i.indexOf("."),r=s<0?i:i.substring(0,s);if(r==parseInt(r,10)){let e=s<0?"":i.substring(s+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[r],n=this.__instances[o];if(n){let i=this.as+(e?"."+e:"");n._setPendingPropertyOrPath(i,t,!1,!0),n._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=si(t).parentNode;return null}(this.template,e)}}customElements.define(ia.is,ia);class sa extends Is{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Os.debounce(this.__renderDebouncer,Ti,(()=>this.__render())),Ns(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=si(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||si(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Qn()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:si(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!si(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=si(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(si(this).previousSibling!==t[t.length-1])for(let i,s=0;s<t.length&&(i=t[s]);s++)si(e).insertBefore(i,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Wr()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),Te&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const ra=Pe?class extends sa{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(ye&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(e,t,i)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(s.changedProps,t)),e(t,i);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:e,changedProps:{}}),i)for(const e in t){const t=oi(e);s.changedProps[t]=this.__dataHost[t]}else Object.assign(s.changedProps,t)},this.__instance=t._stampTemplate(this.__template,i),si(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Un(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends sa{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Kn(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[oi(e)]=!0))}})),this.__instance=new this.__ctor,si(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=si(e[0]).parentNode;if(t){t=si(t);for(let i,s=0;s<e.length&&(i=e[s]);s++)t.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(ra.is,ra);let oa=Jt((e=>{let t=As(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],s=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),s){let e=hn(i,s);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let s=e[i];t.forEach(((e,i)=>{e<s.index||(e>=s.index+s.removed.length?t.set(i,e+s.addedCount-s.removed.length):t.set(i,-1))}));for(let e=0;e<s.addedCount;e++){let i=s.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach(((e,s)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(s)):i++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((i,s)=>{t==e++&&this.deselect(s)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}}))(Is);class na extends oa{static get is(){return"array-selector"}static get template(){return null}}customElements.define(na.is,na);const aa=new jo;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){aa.processStyles(),So(e,t)},styleElement(e){aa.processStyles()},styleDocument(e){aa.processStyles(),So(document.body,e)},getComputedStyleValue:(e,t)=>xo(e,t),flushCustomStyles(){},nativeCss:Zr,nativeShadow:Gr,cssBuild:Jr,disableRuntime:Kr}),window.ShadyCSS.CustomStyleInterface=aa;const la=window.ShadyCSS.CustomStyleInterface;class ha extends HTMLElement{constructor(){super(),this._style=null,la.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=ii(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",ha);const da=Pn(HTMLElement).prototype;var ca=new Set;const ua={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ca.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():pe||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=vn(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(ca.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ca.delete(this):ca.add(this)}},pa={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:vn(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}},_a=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),ma=_a&&_a[1]>=8,fa=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(kn):kn;return i=Rn(e,i,e.behaviors),i.is=i.prototype.is=e.is,i}({behaviors:[ua,pa],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){return Math.max(0,this._virtualCount-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let e=this._firstVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){if(t+=this._physicalSizes[e],t>this._scrollPosition)return i}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){let e=this._lastVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,s){t<this._scrollBottom&&(e=s),t+=this._physicalSizes[i]})),this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,Ai),this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){const e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight},_scrollHandler:function(){const e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=e-this._scrollPosition;const i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const e=Math.round(t/this._physicalAverage);this._virtualStart=this._virtualStart+e,this._physicalStart=this._physicalStart+e,this._physicalTop=Math.floor(this._virtualStart)*this._physicalAverage,this._update()}else if(this._physicalCount>0){const{physicalTop:e,indexes:t}=this._getReusables(i);i?(this._physicalTop=e,this._virtualStart=this._virtualStart+t.length,this._physicalStart=this._physicalStart+t.length):(this._virtualStart=this._virtualStart-t.length,this._physicalStart=this._physicalStart-t.length),this._update(t,i?null:t),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ti)}},_getReusables:function(e){let t,i,s;const r=[],o=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let h=this._physicalTop+this._scrollOffset;const d=this._physicalBottom+this._scrollOffset,c=this._scrollTop,u=this._scrollBottom;for(e?(t=this._physicalStart,i=c-h):(t=this._physicalEnd,i=d-u);s=this._physicalSizes[t],i-=s,!(r.length>=l||i<=o);)if(e){if(a+r.length+1>=this._virtualCount)break;if(h+s>=c-this._scrollOffset)break;r.push(t),h+=s,t=(t+1)%l}else{if(n-r.length<=0)break;if(h+this._physicalSize-s<=u)break;r.push(t),h-=s,t=0===t?l-1:t-1}return{indexes:r,physicalTop:h-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._physicalSizes[e]}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){const t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(.5*this._physicalCount);if(!(t<0)){if(t>0){const e=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let e=0;e<t;e++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+t),this._update(),this._templateCost=(window.performance.now()-e)/t,i=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===i||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),Pi):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),Ti))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const{physicalTop:e,indexes:t}=this._getReusables(!0);this._physicalTop=e,this._virtualStart=this._virtualStart+t.length,this._physicalStart=this._physicalStart+t.length,this._update(t),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged:function(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Ai))},_iterateItems:function(e,t){let i,s,r,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(i=t[o],s=this._computeVidx(i),null!=(r=e.call(this,i,s)))return r}else{for(i=this._physicalStart,s=this._virtualStart;i<this._physicalCount;i++,s++)if(null!=(r=e.call(this,i,s)))return r;for(i=0;i<this._physicalStart;i++,s++)if(null!=(r=e.call(this,i,s)))return r}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){Wr();let t=0,i=0;const s=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((function(e){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this._physicalSize=this._physicalSize+t-i,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((r*s+t)/this._physicalAverageCount))},_positionItems:function(){this._adjustScrollPosition();let e=this._physicalTop;this._iterateItems((function(t){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_adjustScrollPosition:function(){const e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;const t=this._scrollTop;!ma&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(e){if("number"!=typeof e||e<0||e>this.items.length-1)return;if(Wr(),0===this._physicalCount)return;e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=e-1),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart)*this._physicalAverage;let t=this._physicalStart,i=this._virtualStart,s=0;const r=this._hiddenContentSize;for(;i<e&&s<=r;)s+=this._physicalSizes[t],t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+s),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),Ai)},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=Os.debounce(this._debouncers[e],i,t.bind(this)),Ns(this._debouncers[e])}});class ga extends fa{static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{type:Number,value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback(),this._scrollHandler()}_updateScrollerItem(){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(e){this._warnPrivateAPIAccess("scrollToIndex"),this._scrollingToIndex=!0,e=Math.min(Math.max(e,0),this._effectiveSize-1),this.$.table.scrollTop=e/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight),this._scrollHandler(),this._accessIronListAPI((()=>this._maxScrollTop))&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1e6),this._accessIronListAPI((()=>super.scrollToIndex(e-this._vidxOffset))),this._scrollHandler();const t=Array.from(this.$.items.children).filter((t=>t.index===e))[0];if(t){const e=t.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(e)>1&&(this.$.table.scrollTop+=e,this._scrollHandler())}this._scrollingToIndex=!1}_effectiveSizeChanged(e){let t,i=0;if(this._iterateItems(((e,s)=>{if(s===this._firstVisibleIndex){const s=this._physicalItems[e];t=s.index,i=s.getBoundingClientRect().top}})),this.items&&e<this.items.length&&(this._scrollTop=0),!Array.isArray(this.items)){const t=1e5;this.items={length:Math.min(e,t)}}this._accessIronListAPI((()=>super._itemsChanged({path:"items"}))),this._virtualCount=Math.min(this.items.length,e)||0,0===this._scrollTop&&(this._accessIronListAPI((()=>this._scrollToIndex(Math.min(e-1,t)))),this._iterateItems((e=>{const s=this._physicalItems[e];if(s.index===t&&(this.$.table.scrollTop+=Math.round(s.getBoundingClientRect().top-i)),s.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const e=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);s.children[e].focus()}}))),this._assignModels(),requestAnimationFrame((()=>this._update())),this.__updateFooterPositioning()}_positionItems(){let e;this._adjustScrollPosition(),isNaN(this._physicalTop)&&(e=!0,this._physicalTop=0);let t=this._physicalTop;this._iterateItems((e=>{this._physicalItems[e].style.transform=`translateY(${t}px)`,t+=this._physicalSizes[e]})),e&&this._scrollToIndex(0)}_increasePoolIfNeeded(e){0===e&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?this._optPhysicalSize!==1/0&&(this._debounceIncreasePool=Os.debounce(this._debounceIncreasePool,Ai,(()=>{this._updateMetrics();const e=this._optPhysicalSize-this._physicalSize;let t=Math.ceil(e/this._physicalAverage);this._physicalCount+t>this._effectiveSize&&(t=Math.max(0,this._effectiveSize-this._physicalCount)),this._physicalSize&&t>0&&this._optPhysicalSize!==1/0&&(super._increasePoolIfNeeded(t),this.__reorderChildNodes())}))):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)))}__reorderChildNodes(){const e=Array.from(this.$.items.childNodes);!!e.reduce(((e,t,i,s)=>{if(0===i||s[i-1].index===t.index-1)return e}),!0)||e.sort(((e,t)=>e.index-t.index)).forEach((e=>this.$.items.appendChild(e)))}_createPool(e){const t=document.createDocumentFragment(),i=this._createScrollerRows(e);i.forEach((e=>t.appendChild(e))),this._getRowTarget().appendChild(t);const s=this.querySelector("[slot]");if(s){const e=s.getAttribute("slot");s.setAttribute("slot","foo-bar"),s.setAttribute("slot",e)}var r,o,n;return r=this,o=()=>this.notifyResize(),Br||qr(),Ur.push([r,o,n]),i}_assignModels(e){this._iterateItems(((e,t)=>{const i=this._physicalItems[e];this._toggleAttribute("hidden",t>=this._effectiveSize,i),this._updateScrollerItem(i,t+(this._vidxOffset||0))}),e)}_scrollHandler(){const e=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const t=this._vidxOffset;this._accessIronListAPI((()=>this._maxScrollTop))&&this._virtualCount<this._effectiveSize?this._adjustVirtualIndexOffset(e):this._vidxOffset=0,this._vidxOffset!==t&&this._update(),this._afterScroll()}_adjustVirtualIndexOffset(e){if(Math.abs(e)>1e4){if(this._noScale)return void(this._noScale=!1);const e=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),t=e*this._effectiveSize;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset||0,t=1e3,i=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)),this._noScale=!0);const s=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=s,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<s&&(this._vidxOffset+=Math.min(s-this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)),this._noScale=!0)}}_accessIronListAPI(e){this._warnPrivateAPIAccessAsyncEnabled=!1;const t=e.apply(this);return this._debouncerWarnPrivateAPIAccess=Os.debounce(this._debouncerWarnPrivateAPIAccess,Ai,(()=>this._warnPrivateAPIAccessAsyncEnabled=!0)),t}_debounceRender(e,t){super._debounceRender((()=>this._accessIronListAPI(e)),t)}_warnPrivateAPIAccess(e){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${e})!`)}_render(){this._accessIronListAPI(super._render)}_itemsChanged(){}get _firstVisibleIndex(){return this._accessIronListAPI((()=>super.firstVisibleIndex))}get _lastVisibleIndex(){return this._accessIronListAPI((()=>super.lastVisibleIndex))}_scrollToIndex(e){this._accessIronListAPI((()=>this.scrollToIndex(e)))}get firstVisibleIndex(){return this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex}set firstVisibleIndex(e){this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex=e}get lastVisibleIndex(){return this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex}set lastVisibleIndex(e){this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex=e}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries"),super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler(),Wr()}}const ya=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter((e=>e.some((e=>e._headerTemplate||e.headerRenderer||e.path||e.header)))).length}_a11yGetFooterRowCount(e){return e.filter((e=>e.some((e=>e._headerTemplate||e.headerRenderer)))).length}_a11yUpdateGridSize(e,t){if(void 0===e||void 0===t)return;const i=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",t+1)))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach((e=>e.setAttribute("aria-selected",Boolean(t))))}_a11yUpdateRowLevel(e,t){e.setAttribute("aria-level",t+1)}_a11yUpdateRowDetailsOpened(e,t){Array.from(e.children).forEach((e=>{"boolean"==typeof t?e.setAttribute("aria-expanded",t):e.hasAttribute("aria-expanded")&&e.removeAttribute("aria-expanded")}))}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach((e=>{e!==t&&e.setAttribute("aria-controls",t.id)}))}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((e=>{let t=e.parentNode;for(;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;if(t&&t.assignedSlot){t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")}}))}},ba=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,i=t?t.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),i=t[t.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const s=i._content,r=this.getRootNode().activeElement;s.contains(r)||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(e){return va(e)}},va=e=>{if(!e.parentNode)return!1;const t=-1!==Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter((e=>"cell body-cell"!==e.getAttribute("part"))).indexOf(e);return!e.disabled&&t},wa=e=>class extends e{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(e,t,i){if(i){if(!Array.isArray(e))return null==e&&(this.size=0),void(this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0));this.size=e.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded()}}_arrayDataProvider(e,t){let i=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",i)&&(i=this._filter(i)),this.size=i.length,e.sortOrders.length&&this._checkPaths(this._sorters,"sorting",i)&&(i=i.sort(this._multiSort.bind(this)));const s=e.page*e.pageSize,r=s+e.pageSize;t(i.slice(s,r),i.length)}_checkPaths(e,t,i){if(!i.length)return!1;let s=!0;for(let r in e){const o=e[r].path;if(!o||-1===o.indexOf("."))continue;const n=o.replace(/\.[^.]*$/,"");void 0===da.get(n,i[0])&&(console.warn(`Path "${o}" used for ${t} does not exist in all of the items, ${t} is disabled.`),s=!1)}return s}_multiSort(e,t){return this._sorters.map((i=>"asc"===i.direction?this._compare(da.get(i.path,e),da.get(i.path,t)):"desc"===i.direction?this._compare(da.get(i.path,t),da.get(i.path,e)):0)).reduce(((e,t)=>e||t),0)}_normalizeEmptyValue(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}_compare(e,t){return(e=this._normalizeEmptyValue(e))<(t=this._normalizeEmptyValue(t))?-1:e>t?1:0}_filter(e){return e.filter((e=>0===this._filters.filter((t=>{const i=this._normalizeEmptyValue(da.get(t.path,e)),s=this._normalizeEmptyValue(t.value).toString().toLowerCase();return-1===i.toString().toLowerCase().indexOf(s)})).length))}},Ca=e=>class extends(fr(e)){ready(){super.ready();const e=this.$.scroller;nr(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",(t=>e.hasAttribute("column-resizing")&&t.preventDefault())),e.addEventListener("contextmenu",(e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault())),e.addEventListener("mousedown",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault()))}_onHeaderTrack(e){const t=e.target;if("resize-handle"===t.getAttribute("part")){let i=t.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===i.localName;)i=Array.prototype.slice.call(i._childColumns,0).sort((function(e,t){return e._order-t._order})).filter((function(e){return!e.hidden})).pop();const s=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),r=s.filter((e=>e._column===i))[0];if(r.offsetWidth){const t=window.getComputedStyle(r),s=10+parseInt(t.paddingLeft)+parseInt(t.paddingRight)+parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth)+parseInt(t.marginLeft)+parseInt(t.marginRight),o=r.offsetWidth+(this.__isRTL?r.getBoundingClientRect().left-e.detail.x:e.detail.x-r.getBoundingClientRect().right);i.width=Math.max(s,o)+"px",i.flexGrow=0}s.sort((function(e,t){return e._column._order-t._column._order})).forEach((function(e,t,i){t<i.indexOf(r)&&(e._column.width=e.offsetWidth+"px",e._column.flexGrow=0)})),"end"===e.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:i}}))),this._resizeHandler()}}},Sa=class e{constructor(e,t,i){this.grid=e,this.parentCache=t,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter((e=>this.itemCaches[e].isLoading()))[0])}getItemForIndex(e){const{cache:t,scaledIndex:i}=this.getCacheAndIndex(e);return t.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce(((e,t)=>{const i=this.itemCaches[t];return i.updateSize(),e+i.effectiveSize}),0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const i=new e(this.grid,this,this.items[t]);this.itemCaches[t]=i,this.grid._loadPage(0,i)}}getCacheAndIndex(e){let t=e;const i=Object.keys(this.itemCaches);for(let e=0;e<i.length;e++){const s=Number(i[e]),r=this.itemCaches[s];if(t<=s)return{cache:this,scaledIndex:t};if(t<=s+r.effectiveSize)return r.getCacheAndIndex(t-s-1);t-=r.effectiveSize}return{cache:this,scaledIndex:t}}},xa=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new Sa(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize,this._increasePoolIfNeeded(0),this._debounceIncreasePool&&this._debounceIncreasePool.flush()}_getItem(e,t){if(e>=this._effectiveSize)return;t.index=e;const{cache:i,scaledIndex:s}=this._cache.getCacheAndIndex(e),r=i.items[s];r?(this._toggleAttribute("loading",!1,t),this._updateItem(t,r),this._isExpanded(r)&&i.ensureSubCacheForScaledIndex(s)):(this._toggleAttribute("loading",!0,t),this._loadPage(this._getPageForIndex(s),i))}_expandedInstanceChangedCallback(e,t){void 0!==e.item&&(t?this.expandItem(e.item):this.collapseItem(e.item))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._assignModels()}_itemIdPathChanged(){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach((e=>{this.__expandedKeys.add(this.getItemId(e))})))}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter((t=>!this._itemsEqual(t,e))))}_getIndexLevel(e){let{cache:t}=this._cache.getCacheAndIndex(e),i=0;for(;t.parentCache;)t=t.parentCache,i++;return i}_canPopulate(){return Boolean(this._hasData&&this._columnTree)}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;const i={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this._debounceIncreasePool&&this._debounceIncreasePool.flush(),this.dataProvider(i,((s,r)=>{void 0!==r?t.size=r:i.parentItem&&(t.size=s.length);const o=Array.from(this.$.items.children).map((e=>e._item));s.forEach(((i,s)=>{const r=e*this.pageSize+s;t.items[r]=i,this._isExpanded(i)&&o.indexOf(i)>-1&&t.ensureSubCacheForScaledIndex(r)})),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=Os.debounce(this._debouncerApplyCachedData,xi.after(0),(()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._cache.getItemForIndex(e.index)&&this._getItem(e.index,e)})),this._increasePoolIfNeeded(0),this.__scrollToPendingIndex()})),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()}))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new Sa(this),Array.from(this.$.items.children).forEach((e=>{Array.from(e.children).forEach((e=>{e._instance&&e._instance._setPendingProperty("item",{},!1)}))})),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this._assignModels(),this._effectiveSize&&this._initialPoolCreated||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),e&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex),this._ensureFirstPageLoaded(),this._debouncerCheckSize=Os.debounce(this._debouncerCheckSize,xi.after(2e3),this._checkSize.bind(this)),this._scrollHandler()}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let i=-1;return t.forEach(((t,s)=>{this._itemsEqual(t,e)&&(i=s)})),i}scrollToIndex(e){super.scrollToIndex(e),isNaN(e)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this._debounceIncreasePool&&this._debounceIncreasePool.flush(),this.scrollToIndex(e)}}},Aa=e=>class extends e{ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return!0;return!1}_getChildColumns(e){return un.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map((e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e])).reduce(((e,t)=>e.concat(t)),[])}_getColumnTree(){const e=[];for(let t=un.getFlattenedNodes(this).filter(this._isColumnElement);e.push(t),this._hasColumnGroups(t);)t=this._flattenColumnGroups(t);return e}_updateColumnTree(){const e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new un(this,(e=>{const t=e.addedNodes.filter((e=>"template"===e.localName&&e.classList.contains("row-details")))[0];t&&this._rowDetailsTemplate!==t&&(this._rowDetailsTemplate=t);const i=e=>e.filter(this._isColumnElement).length>0;if(i(e.addedNodes)||i(e.removedNodes)){const t=e.removedNodes.flatMap((e=>e._allCells)),i=e=>t.filter((t=>t._content.contains(e))).length;this.__removeSorters(this._sorters.filter(i)),this.__removeFilters(this._filters.filter(i)),this._updateColumnTree()}this._debouncerCheckImports=Os.debounce(this._debouncerCheckImports,xi.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()}))}_arrayEquals(e,t){if(!e||!t||e.length!=t.length)return!1;for(let i=0,s=e.length;i<s;i++)if(e[i]instanceof Array&&t[i]instanceof Array){if(!this._arrayEquals(e[i],t[i]))return!1}else if(e[i]!=t[i])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach((e=>{const t=this.querySelector(e);!t||t instanceof Is||console.warn(`Make sure you have imported the required module for <${e}> element.`)}))}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((e=>this._updateFirstAndLastColumnForRow(e)))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,i)=>{this._toggleAttribute("first-column",0===t,e),this._toggleAttribute("last-column",t===i.length-1,e)}))}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}},Pa=e=>class extends e{getEventContext(e){const t={},i=e.composedPath(),s=i[i.indexOf(this.$.table)-3];return s?(t.section=["body","header","footer","details"].filter((e=>s.getAttribute("part").indexOf(e)>-1))[0],s._column&&(t.column=s._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(s.parentElement)),t):t}},Ta=e=>class extends e{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){0!=e.length&&(this._filters=this._filters.filter((t=>e.indexOf(t)<0)),this.__applyFilters())}__addFilter(e){-1===this._filters.indexOf(e)&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map((e=>({path:e.path,value:e.value})))}};class Ea extends Is{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();const e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame((()=>this.notifyPath("_templateInstances.*",this._templateInstances))))}removeInstance(e){const t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=Kn(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach((i=>i.notifyPath(e,t)))},notifyInstanceProp:function(e,t,i){if("index"===t||"item"===t)return;const s=`__${t}__`;if(e[s]===i)return;e[s]=i;const r=Array.from(this._grid.$.items.children).filter((t=>this._grid._itemsEqual(t._item,e.item)))[0];r&&Array.from(r.children).forEach((e=>{e._instance&&(e._instance[s]=i,e._instance.notifyPath(t,i))}));const o="item.";if(Array.isArray(this._grid.items)&&0===t.indexOf(o)){const s=this._grid.items.indexOf(e.item),r=t.slice(o.length);this._grid.notifyPath(`items.${s}.${r}`,i)}const n=`_${t}InstanceChangedCallback`;this._grid&&this._grid[n]&&this._grid[n](e,i)}}))}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach((i=>i.notifyPath(e,t)))}_templateInstancesChanged(e){let t,i;if("_templateInstances"===e.path)t=0,i=this._templateInstances.length;else{if("_templateInstances.splices"!==e.path)return;t=e.value.index,i=e.value.addedCount}Object.keys(this._parentPathValues||{}).forEach((e=>{for(let s=t;s<t+i;s++)this._templateInstances[s].set(e,this._parentPathValues[e])}))}}customElements.define(Ea.is,Ea);const Ia=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(e,t){if(e&&t)throw new Error("You should only use either a renderer or a template for row details");if(e||t){if(e&&!e.templatizer){const t=new Ea;t._grid=this,t.dataHost=this.dataHost,t.template=e,e.templatizer=t}this._columnTree&&Array.from(this.$.items.children).forEach((e=>{e.querySelector("[part~=details-cell]")||(this._updateRow(e,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(e,!1)),delete e.querySelector("[part~=details-cell]")._instance})),this.detailsOpenedItems.length&&(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update())}}_detailsOpenedItemsChanged(e){"detailsOpenedItems.length"!==e.path&&e.value&&Array.from(this.$.items.children).forEach((e=>{this._toggleDetailsCell(e,e._item),this._a11yUpdateRowDetailsOpened(e,this._isDetailsOpened(e._item)),this._toggleAttribute("details-opened",this._isDetailsOpened(e._item),e)}))}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e)}_toggleDetailsCell(e,t){const i=e.querySelector('[part~="details-cell"]');if(!i)return;const s=!this._isDetailsOpened(t),r=!!i.hidden!==s;(i._instance||i._renderer)&&i.hidden===s||(i.hidden=s,s?e.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(i._renderer=this.rowDetailsRenderer,i._renderer.call(this,i._content,this,{index:e.index,item:t})):this._rowDetailsTemplate&&!i._instance&&(i._instance=this._rowDetailsTemplate.templatizer.createInstance(),i._content.innerHTML="",i._content.appendChild(i._instance.root),this._updateItem(e,t)),Wr(),e.style.setProperty("padding-bottom",`${i.offsetHeight}px`),requestAnimationFrame((()=>this.notifyResize())))),r&&(this._updateMetrics(),this._positionItems())}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach((e=>{e.parentElement.style.setProperty("padding-bottom",`${e.offsetHeight}px`)}))}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter((t=>!this._itemsEqual(t,e))))}_detailsOpenedInstanceChangedCallback(e,t){t?this.openItemDetails(e.item):this.closeItemDetails(e.item)}},Oa=500,za=500,Na=e=>class extends e{static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0},_useSticky:{type:Boolean,value:window.CSS&&window.CSS.supports&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"))}}}static get observers(){return["_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollTop(){return this.$.table.scrollTop}constructor(){super(),this._scrollLineHeight=this._getScrollLineHeight()}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}_scrollViewportHeightUpdated(e){this._scrollPageHeight=e-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.addEventListener("wheel",this._onWheel),this.$.items.addEventListener("focusin",(e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]})),this.$.items.addEventListener("focusout",(()=>this._rowWithFocusedElement=void 0)),this.scrollTarget.addEventListener("mousedown",(()=>this.__mouseDown=!0)),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&(this.__pendingReorder=!1,setTimeout((()=>this._reorderRows()),Oa))}))}scrollToIndex(e){this._accessIronListAPI((()=>super.scrollToIndex(e)))}_onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;const t=this.$.table;let i=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?i*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(i*=this._scrollPageHeight),this._wheelAnimationFrame)return this._deltaYAcc+=i,void e.preventDefault();i+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this._debouncerWheelAnimationFrame=Os.debounce(this._debouncerWheelAnimationFrame,Ai,(()=>this._wheelAnimationFrame=!1));const s=Math.abs(e.deltaX)+Math.abs(i);this._canScroll(t,e.deltaX,i)?(e.preventDefault(),t.scrollTop+=i,t.scrollLeft+=e.deltaX,this._scrollHandler(),this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Os.debounce(this._debouncerIgnoreNewWheel,xi.after(za),(()=>this._ignoreNewWheel=!1))):this._hasResidualMomentum&&s<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():s>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=s}_hasScrolledAncestor(e,t,i){return"vaadin-grid-cell-content"!==e.localName&&(!(!this._canScroll(e,t,i)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,i):void 0))}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame((()=>this._toggleAttribute("scrolling",!0,this.$.scroller)))),this._debounceScrolling=Os.debounce(this._debounceScrolling,xi.after(Oa),(()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller),this._reorderRows()}))}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top"),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=Os.debounce(this._debounceOverflow,Ai,(()=>{const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0==t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}))}_reorderRows(){if(this.__mouseDown)return void(this.__pendingReorder=!0);const e=this.$.items,t=e.querySelectorAll("tr");if(!t.length)return;const i=this._virtualStart+this._vidxOffset,s=this._rowWithFocusedElement||Array.from(t).filter((e=>!e.hidden))[0];if(!s)return;const r=s.index-i,o=Array.from(t).indexOf(s)-r;if(o>0)for(let i=0;i<o;i++)e.appendChild(t[i]);else if(o<0)for(let i=t.length+o;i<t.length;i++)e.insertBefore(t[i],t[0]);if(this._safari){const{transform:e}=this.$.header.style;this.$.header.style.transform="",setTimeout((()=>this.$.header.style.transform=e))}}_frozenCellsChanged(){this._debouncerCacheElements=Os.debounce(this._debouncerCacheElements,Ti,(()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((function(e){e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._updateScrollerMeasurements(),this._translateStationaryElements()})),this._updateLastFrozen()}_updateScrollerMeasurements(){this._frozenCells.length>0&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.table.scrollWidth,clientWidth:this.$.table.clientWidth})}_updateLastFrozen(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort(((e,t)=>e._order-t._order));const t=e.reduce(((e,t,i)=>(t._lastFrozen=!1,t.frozen&&!t.hidden?i:e)),void 0);void 0!==t&&(e[t]._lastFrozen=!0)}_translateStationaryElements(){const e=Math.max(0,this._scrollLeft),t=Math.max(0,this._scrollTop);let i=0,s=0,r=0;if(this._useSticky||(i=e,s=t,r=this.$.table.clientHeight-this.$.footer.offsetHeight-this.$.footer.offsetTop),this.$.header.style.transform=this._getTranslate(-e+i,s),this.$.footer.style.transform=this._getTranslate(-e+i,s+r),this.$.items.style.transform=this._getTranslate(-e+i,0),this._frozenCells.length>0){const e=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft,t=this._getTranslate(e,0);for(let e=0;e<this._frozenCells.length;e++)this._frozenCells[e].style.transform=t}}_getTranslate(e,t){return`translate(${e}px, ${t}px)`}},ka=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter((t=>!this._itemsEqual(t,e))))}_toggleItem(e){-1===this._getItemIndexInArray(e,this.selectedItems)?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(e){!this.$.items.children.length||"selectedItems"!==e.path&&"selectedItems.splices"!==e.path||Array.from(this.$.items.children).forEach((e=>{this._updateItem(e,e._item)}))}_selectedInstanceChangedCallback(e,t){t?this.selectItem(e.item):this.deselectItem(e.item)}},Ra=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),this.__updateSorter(t),this.__applySorters()}__removeSorters(e){0!=e.length&&(this._sorters=this._sorters.filter((t=>e.indexOf(t)<0)),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(((e,t)=>e._order=this._sorters.length>1?t:null),this)}__updateSorter(e){if(e.direction||-1!==this._sorters.indexOf(e))if(e._order=null,this.multiSort)this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders();else if(e.direction){const t=this._sorters.filter((t=>t!=e));this._sorters=[e],t.forEach((e=>{e._order=null,e.direction=null}))}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map((e=>({path:e.path,direction:e.direction})))}_removeArrayItem(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}},La=e=>class extends e{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>this._generateCellClassNames(e,this.__getRowModel(e))))}_generateCellClassNames(e,t){Array.from(e.children).forEach((e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.remove(t))),this.cellClassNameGenerator){const i=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=i&&i.split(" ").filter((e=>e.length>0)),e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.add(t)))}}))}},Da="between",Ma="on-top-or-between",Fa="on-grid",Ha="on-top",$a="above",Ba="below",Va="empty",Ua=e=>class extends e{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",(e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())}))}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){const e=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(e)[1],t.style.transform="none",requestAnimationFrame((()=>{t.style.top="",t.style.transform=e}))}const i=t.getBoundingClientRect();this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-i.left,e.clientY-i.top);let s=[t];this._isSelected(t._item)&&(s=this.__getViewportRows().filter((e=>this._isSelected(e._item))).filter((e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e))))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(s)),t.setAttribute("dragstart",s.length>1?s.length:""),this.updateStyles({"--_grid-drag-start-x":e.clientX-i.left+20+"px","--_grid-drag-start-y":e.clientY-i.top+10+"px"}),requestAnimationFrame((()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})}));const r=new CustomEvent("grid-dragstart",{detail:{draggedItems:s.map((e=>e._item)),setDragData:(t,i)=>e.dataTransfer.setData(t,i),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});r.originalEvent=e,this.dispatchEvent(r)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();let t=e.composedPath().filter((e=>"tr"===e.localName))[0];if(this._effectiveSize&&this.dropMode!==Fa)if(t&&t.parentNode===this.$.items){const i=t.getBoundingClientRect();if(this._dropLocation=Ha,this.dropMode===Da){const t=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=t?$a:Ba}else this.dropMode===Ma&&(e.clientY-i.top<i.height/3?this._dropLocation=$a:e.clientY-i.top>i.height/3*2&&(this._dropLocation=Ba))}else{if(t)return;if(this.dropMode!==Da&&this.dropMode!==Ma)return;t=Array.from(this.$.items.children).filter((e=>!e.hidden)).pop(),this._dropLocation=Ba}else this._dropLocation=Va;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===Va?this._toggleAttribute("dragover",!0,this):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,s=t-e+this.__dndAutoScrollThreshold,r=e-i+this.__dndAutoScrollThreshold;let o=0;if(r>0?o=2*r:s>0&&(o=2*-s),o){const e=this.$.table.scrollTop;this.$.table.scrollTop+=o;if(e!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout((()=>this.__dndAutoScrolling=!1),20),this._scrollHandler(),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter((i=>{const s=i.getBoundingClientRect();return s.bottom>e&&s.top<t}))}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach((e=>e.removeAttribute("dragover")))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map((t=>({type:t,data:e.dataTransfer.getData(t)})));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});i.originalEvent=e,this.dispatchEvent(i)}}__formatDefaultTransferData(e){return e.map((e=>Array.from(e.children).filter((e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell"))).sort(((e,t)=>e._column._order>t._column._order?1:-1)).map((e=>e._content.textContent.trim())).filter((e=>e)).join("\t"))).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._filterDragAndDrop(e,this.__getRowModel(e))}))}_filterDragAndDrop(e,t){const i=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(t),s=!this.dropMode||this.dropFilter&&!this.dropFilter(t);Array.from(e.children).map((e=>e._content)).forEach((e=>{i?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)})),this._toggleAttribute("drag-disabled",i,e),this._toggleAttribute("drop-disabled",s,e)}},qa=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",(()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0})),this.addEventListener("mouseup",(()=>this._isMousedown=!1)))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}_onKeyDown(e){const t=e.key;let i;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":i="Navigation";break;case"Enter":case"Escape":case"F2":i="Interaction";break;case"Tab":i="Tab";break;case" ":i="Space"}this._detectInteracting(e),this.interacting&&"Interaction"!==i&&(i=void 0),i&&this[`_on${i}KeyDown`](e,t)}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter((t=>t.index===e))[0]||this._scrollToIndex(e)}_onNavigationKeyDown(e,t){function i(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}this._scrollHandler(),e.preventDefault();const s=this._lastVisibleIndex-this._firstVisibleIndex-1;let r=0,o=0;switch(t){case"ArrowRight":r=this.__isRTL?-1:1;break;case"ArrowLeft":r=this.__isRTL?1:-1;break;case"Home":r=-1/0,e.ctrlKey&&(o=-1/0);break;case"End":r=1/0,e.ctrlKey&&(o=1/0);break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=s;break;case"PageUp":o=-s}const n=e.composedPath()[0],a=i(n),l=this._elementMatches(n,'[part~="details-cell"]'),h=n.parentNode,d=h.parentNode,c=(d===this.$.items?this._effectiveSize:d.children.length)-1,u=d===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:h.index:i(h);let p=Math.max(0,Math.min(u+o,c)),_=!1;if(d===this.$.items){const e=h._item,t=this._cache.getItemForIndex(p);_=l?0===o:1===o&&this._isDetailsOpened(e)||-1===o&&p!==u&&this._isDetailsOpened(t),_!==l&&(1===o&&_||-1===o&&!_)&&(p=u)}if(d!==this.$.items)if(p>u)for(;p<c&&d.children[p].hidden;)p++;else if(p<u)for(;p>0&&d.children[p].hidden;)p--;void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=l?0:this._getColumns(d,u).filter((e=>!e.hidden))[a]._order);const m=this._getColumns(d,p).filter((e=>!e.hidden)),f=m.map((e=>e._order)).sort(((e,t)=>e-t)),g=f.length-1,y=f.indexOf(f.slice(0).sort(((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder)))[0]),b=0===o&&l?y:Math.max(0,Math.min(y+r,g));b!==y&&(this._focusedColumnOrder=void 0),d===this.$.items&&this._ensureScrolledToIndex(p),this._toggleAttribute("navigating",!0,this);const v=m.reduce(((e,t,i)=>(e[t._order]=i,e)),{})[f[b]],w=d===this.$.items?Array.from(d.children).filter((e=>e.index===p))[0]:d.children[p];if(!w)return;const C=_?Array.from(w.children).filter((e=>this._elementMatches(e,'[part~="details-cell"]')))[0]:w.children[v];if(this._scrollHorizontallyToCell(C),d===this.$.items&&(this._focusedItemIndex=p),d===this.$.items){const e=C.getBoundingClientRect(),t=this.$.footer.getBoundingClientRect().top,i=this.$.header.getBoundingClientRect().bottom;e.bottom>t?(this.$.table.scrollTop+=e.bottom-t,this._scrollHandler()):e.top<i&&(this.$.table.scrollTop-=i-e.top,this._scrollHandler())}C.focus()}_parseEventPath(e){const t=e.indexOf(this.$.table);return{rowGroup:e[t-1],row:e[t-2],cell:e[t-3]}}_onInteractionKeyDown(e,t){const i=e.composedPath()[0],s="input"===i.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(i.type);let r;switch(t){case"Enter":r=!this.interacting||!s;break;case"Escape":r=!1;break;case"F2":r=!this.interacting}const{cell:o}=this._parseEventPath(e.composedPath());if(this.interacting!==r)if(r){const t=o._content.querySelector("[focus-target]")||o._content.firstElementChild;t&&(e.preventDefault(),t.focus(),this._setInteracting(!0),this._toggleAttribute("navigating",!1,this))}else e.preventDefault(),this._focusedColumnOrder=void 0,o.focus(),this._setInteracting(!1),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(e,t){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let s=i.indexOf(e);for(s+=t;s>=0&&s<=i.length-1&&(!i[s]||i[s].parentNode.hidden);)s+=t;return i[s]}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let i=t;const s=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),s.index!==this._focusedItemIndex){const e=Array.from(s.children).indexOf(this._itemsFocusable),t=Array.from(this.$.items.children).filter((e=>e.index===this._focusedItemIndex))[0];t&&(i=t.children[e])}e.preventDefault(),i.focus()}else e.preventDefault(),t.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0];t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key))return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const e=this.hasAttribute("navigating");t._content.firstElementChild.click(),this._toggleAttribute("navigating",e,this)}}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e)}_onCellFocusIn(e){const t=this._getCellFocusEventLocation(e);if(this._detectInteracting(e),t){const{section:e,cell:i}=t;this._activeRowGroup=e,this.$.header===e?this._headerFocusable=i:this.$.items===e?this._itemsFocusable=i:this.$.footer===e&&(this._footerFocusable=i),i._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1})),i.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}}_detectInteracting(e){const t=e.composedPath().some((e=>"vaadin-grid-cell-content"===e.localName));this._setInteracting(t)}_detectFocusedItemIndex(e){const{rowGroup:t,row:i}=this._parseEventPath(e.composedPath());t===this.$.items&&(this._focusedItemIndex=i.index)}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),i=this.interacting&&t===this._activeRowGroup;e.tabIndex=i?-1:0}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(e,t){let i=this._columnTree.length-1;return e===this.$.header?i=t:e===this.$.footer&&(i=this._columnTree.length-1-t),this._columnTree[i]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter((e=>!e.hidden))[0]),this.$.items.firstElementChild){const e=this._iterateItems(((e,t)=>{if(this._firstVisibleIndex===t)return this.$.items.children[e]}));e&&(this._itemsFocusable=Array.from(e.children).filter((e=>!e.hidden))[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter((e=>!e.hidden))[0])}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||this._elementMatches(e,'[part~="details-cell"]'))return;const t=e.getBoundingClientRect(),i=e.parentNode,s=Array.from(i.children).indexOf(e),r=this.$.table.getBoundingClientRect();let o=r.left,n=r.right;for(let e=s-1;e>=0;e--){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){o=t.getBoundingClientRect().right;break}}for(let e=s+1;e<i.children.length;e++){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){n=t.getBoundingClientRect().left;break}}t.left<o&&(this.$.table.scrollLeft+=Math.round(t.left-o)),t.right>n&&(this.$.table.scrollLeft+=Math.round(t.right-n))}_elementMatches(e,t){return e.matches?e.matches(t):-1!==Array.from(e.parentNode.querySelectorAll(t)).indexOf(e)}_getCellFocusEventLocation(e){const t=e.composedPath(),i=t.indexOf(this.$.table),s=i>=2?t[i-1]:null,r=i>=3?t[i-3]:null;return s&&r?{section:s,cell:r}:null}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}},ja=e=>class extends(fr(e)){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),nr(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout((()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})}),100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const t=e.composedPath(),i=t[t.indexOf(this.$.header)-2];if(!i||!i._content)return;if(i._content.contains(this.getRootNode().activeElement))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.filter((e=>e.hasAttribute&&e.hasAttribute("draggable")))[0])return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(i&&-1!==i.getAttribute("part").indexOf("header-cell")){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=i._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const i=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,i),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter((e=>!e.hidden)).sort(((e,t)=>e._order-t._order))}_cellFromPoint(e,t){e=e||0,t=t||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller);const i=this.shadowRoot.elementFromPoint(e,t);if(this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),i&&i._column)return i}_updateGhostPosition(e,t){const i=this._reorderGhost.getBoundingClientRect(),s=e-i.width/2,r=t-i.height/2,o=parseInt(this._reorderGhost._left||0),n=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=o-(i.left-s),this._reorderGhost._top=n-(i.top-r),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const i=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach((e=>t.style[e]=i[e])),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach((e=>e._order=0)),e[0].forEach(((e,t)=>e._order=(t+1)*this._orderBaseScope)))}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter((t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e))).forEach((e=>e._reorderStatus=t))}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10),this._scrollHandler()}this._draggedColumn&&this.async(this._autoScroller,10)}_isSwapAllowed(e,t){if(e&&t){const i=e!==t,s=e.parentElement===t.parentElement,r=e.frozen===t.frozen;return i&&s&&r}}_isSwappableByPosition(e,t){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter((t=>e.contains(t._column)))[0],s=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),r=i.getBoundingClientRect();return r.left>s.left?t>r.right-s.width:t<r.left+s.width}_swapColumnOrders(e,t){const i=e._order;e._order=t._order,t._order=i,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let i=e._column;for(;i.parentElement!==t.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===t.parentElement?i:e._column}}},Wa=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame((()=>{this._allCells.forEach((e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content)}))}))}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame((()=>{this._findHostGrid()||this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}))})),this._gridValue=void 0}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter((e=>e))}constructor(){super(),this._templateObserver=new un(this,(()=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate()}))}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){const i=new Ea;i._grid=this._grid,i.dataHost=this.dataHost,i._instanceProps=t||i._instanceProps,i.template=e,e.templatizer=i}return e}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(e,t,i){const s=[t._content,this];i&&i.item&&s.push(i),e.apply(this,s)}__setColumnTemplateOrRenderer(e,t,i){if(!this.hidden){if(e&&t)throw new Error("You should only use either a renderer or a template");i.forEach((i=>{const s=this._grid.__getRowModel(i.parentElement);if(t)i._renderer=t,(s.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,i,s);else if(i._template!==e){i._template=e,i._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;const t=e.templatizer.createInstance();i._content.appendChild(t.root),i._instance=t,s.item&&i._instance.setProperties(s)}}))}}_setBodyTemplateOrRenderer(e,t,i){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,i)}_setHeaderTemplateOrRenderer(e,t,i){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,[i])}_setFooterTemplateOrRenderer(e,t,i){(e||t)&&i&&(this.__setColumnTemplateOrRenderer(e,t,[i]),this._grid.__updateHeaderFooterRowVisibility(i.parentElement))}_selectFirstTemplate(e=!1,t=!1){return un.getFlattenedNodes(this).filter((i=>"template"===i.localName&&i.classList.contains("header")===e&&i.classList.contains("footer")===t))[0]}_findTemplate(e,t){const i=this._selectFirstTemplate(e,t);return i&&this.dataHost&&(i._rootDataHost=this.dataHost._rootDataHost||this.dataHost),i}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach((t=>t.style.flexGrow=e))}_orderChanged(e){this._allCells.forEach((t=>t.style.order=e))}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach((t=>t.style.width=e)),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach((t=>this._toggleAttribute("frozen",e,t))),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach((t=>this._toggleAttribute("last-frozen",e,t))),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_pathOrHeaderChanged(e,t,i,s,r,o,n,a,l){const h=void 0!==t;if(!n&&!l&&h&&i&&this.__setTextContent(i._content,t),e&&r.value){if(!o&&!a){const t=(t,i,{item:s})=>this.__setTextContent(t,this.get(e,s));this.__setColumnTemplateOrRenderer(void 0,t,r.value)}n||l||h||!i||null===t||this.__setTextContent(i._content,this._generateHeader(e))}i&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,(e=>e.toUpperCase()))}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}_reorderStatusChanged(e){this._allCells.forEach((t=>t.setAttribute("reorder-status",e)))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach((t=>{if(t){const i=t.querySelector('[part~="resize-handle"]');if(i&&t.removeChild(i),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e)}}}))}_textAlignChanged(e){if(void 0===e)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let t;"ltr"===getComputedStyle(this._grid).direction?"start"===e?t="left":"end"===e&&(t="right"):"start"===e?t="right":"end"===e&&(t="left"),this._allCells.forEach((i=>{i._content.style.textAlign=e,getComputedStyle(i._content).textAlign!==e&&(i._content.style.textAlign=t)}))}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})),this._grid._debouncerHiddenChanged=Os.debounce(this._grid._debouncerHiddenChanged,Ai,(()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)})),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}};class Ga extends(Wa(zr(Is))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(Ga.is,Ga);let Ya;xt("vaadin-grid",bt(Ya||(Ya=(e=>e)`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 1em;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }
  `)),{moduleId:"vaadin-grid-styles"});let Ja,Xa=e=>e;const Ka=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class Za extends(Rr(yr(xa(wa(Aa(ba(Na(ka(Ra(Ia(qa(ya(Ta(ja(Ca(Pa(Ua(La(ga))))))))))))))))))){static get template(){return Es(Ja||(Ja=Xa`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `))}static get is(){return"vaadin-grid"}static get version(){return"20.0.0"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:Ka},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.recalculateColumnWidths()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"dir"===e&&(this.__isRTL="rtl"===i,this._updateScrollerMeasurements())}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter((e=>e.clientHeight)).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(e){e.forEach((e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0})),e.forEach((e=>{e._currentWidth=0,e._allCells.forEach((t=>{const i=t.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,i)}))})),e.forEach((e=>{e.width=`${e._currentWidth}px`,e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0}))}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const e=this._getColumns().filter((e=>!e.hidden&&e.autoWidth));this._recalculateColumnWidths(e)}}_createScrollerRows(e){const t=[];for(let i=0;i<e;i++){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e)}var i,s,r;return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((e=>e.isConnected&&e.notifyPath&&e.notifyPath("_cells.*",e._cells))),i=this,s=()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation()},Br||qr(),Vr.push([i,s,r]),t}_getRowTarget(){return this.$.items}_createCell(e){const t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",t);const s=document.createElement(e);s.id=t.replace("-content-","-"),s.setAttribute("tabindex","-1"),s.setAttribute("role","td"===e?"gridcell":"columnheader");const r=document.createElement("slot");return r.setAttribute("name",t),s.appendChild(r),s._content=i,i.addEventListener("mousedown",(()=>{if(window.chrome){const e=()=>{i.contains(this.getRootNode().activeElement)||s.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout((()=>{i.contains(this.getRootNode().activeElement)||s.focus()}))})),s}_updateRow(e,t,i,s,r){i=i||"body";const o=document.createDocumentFragment();Array.from(e.children).forEach((e=>e._vacant=!0)),e.innerHTML="","sizer"!==e.id&&(e.hidden=!0),t.filter((e=>!e.hidden)).forEach(((t,n,a)=>{let l;if("body"===i){if(t._cells=t._cells||[],l=t._cells.filter((e=>e._vacant))[0],l||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),n===a.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];const t=this._detailsCells.filter((e=>e._vacant))[0]||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||o.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),this._a11ySetRowDetailsCell(e,t),t._vacant=!1}t.notifyPath&&!r&&t.notifyPath("_cells.*",t._cells)}else{const r="header"===i?"th":"td";s||"vaadin-grid-column-group"===t.localName?(l=t[`_${i}Cell`]||this._createCell(r),l._column=t,e.appendChild(l),t[`_${i}Cell`]=l):(t._emptyCells=t._emptyCells||[],l=t._emptyCells.filter((e=>e._vacant))[0]||this._createCell(r),l._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||o.appendChild(l._content),l._vacant=!1,l._column=t})),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter((t=>{const i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(i.headerRenderer||i._headerTemplate)return!0;if(null===i.header)return!1;if(i.path||void 0!==i.header)return!0}else if(i.footerRenderer||i._footerTemplate)return!0}));e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize())}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach((t=>this._updateRow(t,e[e.length-1],null,!1,!0)));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach(((t,i)=>this._updateRow(t,e[i],"header",i===e.length-1))),Array.from(this.$.footer.children).forEach(((t,i)=>this._updateRow(t,e[e.length-1-i],"footer",0===i))),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning()}__updateFooterPositioning(){if(this._firefox&&(this.$.items.style.paddingBottom=0,this.heightByRows||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`)),this._ios){!window.CSS.supports("position","sticky")&&(this.$.table.style.height="",this.$.table.style.minHeight="100%",this.$.table.style.maxHeight="100%",setTimeout((()=>this.$.table.style.height=`${this.$.scroller.offsetHeight}px`)))}}_updateItem(e,t){e._item=t;const i=this.__getRowModel(e);this._toggleAttribute("selected",i.selected,e),this._a11yUpdateRowSelected(e,i.selected),this._a11yUpdateRowLevel(e,i.level),this._toggleAttribute("expanded",i.expanded,e),this._toggleAttribute("details-opened",this._isDetailsOpened(t),e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,i),this._filterDragAndDrop(e,i),Array.from(e.children).forEach((e=>{if(e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,i)}else e._instance&&(e._instance.__detailsOpened__=i.detailsOpened,e._instance.__selected__=i.selected,e._instance.__level__=i.level,e._instance.__expanded__=i.expanded,e._instance.setProperties(i))})),this._debouncerUpdateHeights=Os.debounce(this._debouncerUpdateHeights,xi.after(1),(()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize()}))}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateScrollerMeasurements(),this.__updateFooterPositioning()}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),e.stopPropagation(),this.notifyResize(),this.__itemsReceived(),requestAnimationFrame((()=>{this.__scrollToPendingIndex(),this.$.table.style.webkitOverflowScrolling="touch"})))}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach((e=>{e.forEach((e=>e._renderHeaderAndFooter()))})),this._update())}notifyResize(){super.notifyResize()}_heightByRowsChanged(e,t){(e||t)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=Os.debounce(this._debouncerForceReflow,Ai,(()=>{this.$.scroller.style.overflow="hidden",setTimeout((()=>this.$.scroller.style.overflow=""))}))}}customElements.define(Za.is,Za);let Qa;xt("",bt(Qa||(Qa=(e=>e)`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([required]) [part='label'] {
    padding-right: 1em;
  }

  [part='label']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--lumo-primary-text-color);
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([required]:not([has-value])) [part='label']::after {
    opacity: 1;
  }

  :host([invalid]) [part='label']::after {
    color: var(--lumo-error-text-color);
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  /* Margin that doesn’t reserve space when there’s no error message */
  [part='error-message']:not(:empty)::before,
  [part='error-message']:not(:empty)::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([required][dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='label']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`)),{moduleId:"lumo-required-field"});let el;xt("",bt(el||(el=(e=>e)`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  :host(:not([readonly])) [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`)),{moduleId:"lumo-field-button"});let tl;xt("vaadin-text-field",bt(tl||(tl=(e=>e)`
    :host {
      --lumo-text-field-size: var(--lumo-size-m);
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      padding: var(--lumo-space-xs) 0;
    }

    :host::before {
      height: var(--lumo-text-field-size);
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
    }

    :host([focused]:not([readonly])) [part='label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([has-helper]) [part='helper-text']::before {
      content: '';
      display: block;
      height: 0.4em;
    }

    [part='helper-text'],
    [part='helper-text'] ::slotted(*) {
      display: block;
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-xs);
      line-height: var(--lumo-line-height-xs);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      transition: color 0.2s;
    }

    [part='value'],
    [part='input-field'] ::slotted(input),
    [part='input-field'] ::slotted(textarea),
    [part='input-field'] ::slotted([part='value']) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size);
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    [part='value']:focus,
    :host([focused]) [part='input-field'] ::slotted(input),
    :host([focused]) [part='input-field'] ::slotted(textarea) {
      -webkit-mask-image: none;
      mask-image: none;
    }

    [part='value']::placeholder {
      color: inherit;
      transition: opacity 0.175s 0.1s;
      opacity: 0.5;
    }

    [part='input-field'] {
      border-radius: var(--lumo-border-radius);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    [part='input-field']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    /* Hover */

    :host(:hover:not([readonly]):not([focused])) [part='label'],
    :host(:hover:not([readonly])) [part='helper-text'],
    :host(:hover:not([readonly])) [part='helper-text'] ::slotted(*) {
      color: var(--lumo-body-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.1;
    }

    /* Touch device adjustment */
    @media (pointer: coarse) {
      :host(:hover:not([readonly]):not([focused])) [part='label'] {
        color: var(--lumo-secondary-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
        opacity: 0;
      }

      :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
        opacity: 0.2;
      }
    }

    /* Trigger when not focusing using the keyboard */
    :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
      transform: scaleX(0);
      transition-duration: 0.15s, 1s;
    }

    /* Focus-ring */

    :host([focus-ring]) [part='input-field'] {
      box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    /* Read-only and disabled */
    :host([readonly]) [part='value']::placeholder,
    :host([disabled]) [part='value']::placeholder {
      opacity: 0;
    }

    /* Read-only */

    :host([readonly]) [part='input-field'] {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly]) [part='input-field']::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled style */

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) [part='input-field'] {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) [part='label'],
    :host([disabled]) [part='helper-text'],
    :host([disabled]) [part='value'],
    :host([disabled]) [part='input-field'] ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid style */

    :host([invalid]) [part='input-field'] {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid]) [part='input-field']::after {
      background-color: var(--lumo-error-color-50pct);
    }

    :host([invalid][focus-ring]) [part='input-field'] {
      box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
    }

    :host([input-prevented]) [part='input-field'] {
      color: var(--lumo-error-text-color);
    }

    /* Small theme */

    :host([theme~='small']) {
      font-size: var(--lumo-font-size-s);
      --lumo-text-field-size: var(--lumo-size-s);
    }

    :host([theme~='small'][has-label]) [part='label'] {
      font-size: var(--lumo-font-size-xs);
    }

    :host([theme~='small'][has-label]) [part='error-message'] {
      font-size: var(--lumo-font-size-xxs);
    }

    /* Text align */

    :host([theme~='align-left']) [part='value'] {
      text-align: left;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) [part='value'] {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) [part='value'] {
      text-align: right;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
    /* helper-text position */

    :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
      display: none;
    }

    :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
      content: '';
      display: block;
      height: 0.4em;
    }

    :host([has-helper][theme~='helper-above-field']) [part='label'] {
      order: 0;
      padding-bottom: 0.4em;
    }

    :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
      order: 1;
    }

    :host([has-helper][theme~='helper-above-field']) [part='input-field'] {
      order: 2;
    }

    :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
      order: 3;
    }

    /* Slotted content */

    [part='input-field'] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
      color: var(--lumo-secondary-text-color);
      font-weight: 400;
    }

    /* Slotted icons */

    [part='input-field'] ::slotted(iron-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    [part='input-field'] ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    [part='clear-button']::before {
      content: var(--lumo-icons-cross);
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='input-field']::after {
      transform-origin: 0% 0;
    }

    :host([dir='rtl']) [part='value'],
    :host([dir='rtl']) [part='input-field'] ::slotted(input),
    :host([dir='rtl']) [part='input-field'] ::slotted(textarea) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    :host([dir='rtl']) [part='value']:focus,
    :host([focused][dir='rtl']) [part='input-field'] ::slotted(input),
    :host([focused][dir='rtl']) [part='input-field'] ::slotted(textarea) {
      -webkit-mask-image: none;
      mask-image: none;
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) [part='value'],
      :host([dir='rtl']) [part='input-field'] ::slotted(input),
      :host([dir='rtl']) [part='input-field'] ::slotted(textarea),
      :host([dir='rtl']) [part='input-field'] ::slotted([part='value']) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left'][dir='rtl']) [part='value'] {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) [part='value'] {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) [part='value'] {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `)),{moduleId:"lumo-text-field",include:["lumo-required-field","lumo-field-button"]});let il;xt("",bt(il||(il=(e=>e)`
    :host {
      display: inline-flex;
      outline: none;
    }

    :host::before {
      content: '\\2003';
      width: 0;
      display: inline-block;
      /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
    }

    :host([hidden]) {
      display: none !important;
    }

    .vaadin-text-field-container,
    .vaadin-text-area-container {
      display: flex;
      flex-direction: column;
      min-width: 100%;
      max-width: 100%;
      width: var(--vaadin-text-field-default-width, 12em);
    }

    [part='label']:empty {
      display: none;
    }

    [part='input-field'] {
      display: flex;
      align-items: center;
      flex: auto;
    }

    .vaadin-text-field-container [part='input-field'] {
      flex-grow: 0;
    }

    /* Reset the native input styles */
    [part='value'],
    [part='input-field'] ::slotted(input),
    [part='input-field'] ::slotted(textarea) {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      min-width: 0;
      font: inherit;
      font-size: 1em;
      line-height: normal;
      color: inherit;
      background-color: transparent;
      /* Disable default invalid style in Firefox */
      box-shadow: none;
    }

    [part='input-field'] ::slotted(*) {
      flex: none;
    }

    [part='value'],
    [part='input-field'] ::slotted(input),
    [part='input-field'] ::slotted(textarea),
    [part='input-field'] ::slotted([part='value']) {
      flex: auto;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    [part='input-field'] ::slotted(textarea) {
      resize: none;
    }

    [part='clear-button'] {
      display: none;
      cursor: default;
    }

    [part='clear-button']::before {
      content: '✕';
    }

    :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
      display: block;
    }
  `)),{moduleId:"vaadin-text-field-shared-styles"});const sl={default:["autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},rl={DEFAULT:"default",ACCESSIBLE:"accessible"},ol=e=>class extends e{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_hostPropsChanged("+sl.default.join(", ")+")","_hostAccessiblePropsChanged("+sl.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(!this.shadowRoot)return;const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.preventInvalidInput){const e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=Os.debounce(this._inputDebouncer,xi.after(200),(()=>{this.removeAttribute("input-prevented")})))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value,this.__userInput=!1}_onChange(e){if(this._valueClearing)return;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(""!==e&&null!=e?this.setAttribute("has-value",""):this.removeAttribute("has-value"),this.__userInput||(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e,this)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e,this)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e,this)}_onHelperSlotChange(){const e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=e.filter((e=>3!==e.nodeType)).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(rl).map((e=>rl[e])).forEach((e=>this._propagateHostAttributes(sl[e].map((e=>this[e])),e)))}_hostPropsChanged(...e){this._propagateHostAttributes(e,rl.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,rl.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){const i=this.inputElement,s=sl[t];t===rl.ACCESSIBLE?s.forEach(((t,s)=>{this._setOrToggleAttribute(t,e[s],i),this._setOrToggleAttribute(`aria-${t}`,!!e[s]&&"true",i)})):s.forEach(((t,s)=>{this._setOrToggleAttribute(t,e[s],i)}))}_setOrToggleAttribute(e,t,i){e&&i&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}_constraintsChanged(e,t,i,s){this.invalid&&(e||t||i||s?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);const e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._slottedInput&&this._addInputListeners(this._slottedInput),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),this.$.clearButton.addEventListener("mousedown",(()=>this._valueClearing=!0)),this.$.clearButton.addEventListener("mouseleave",(()=>this._valueClearing=!1)),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=ol._uniqueId=1+ol._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._helperTextId=`${this.constructor.is}-helper-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",(()=>{this.__observeOffsetHeight()}))}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout((()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}})))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1;const t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;const i=new Event("change",{bubbles:!this._slottedInput});i.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(i)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault()}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){const t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){const t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}__enabledCharPatternChanged(e){this.__enabledCharRegExp=e&&new RegExp("^"+e+"$"),this.__enabledTextRegExp=e&&new RegExp("^"+e+"*$")}_getActiveErrorId(e,t,i,s,r,o){const n=[];(s||o)&&n.push(r),t&&e&&n.push(i),this._setOrToggleAttribute("aria-describedby",n.join(" "),this.focusElement)}_getActiveLabelId(e,t,i){let s=i;e&&(s=`${t} ${i}`),this.focusElement.setAttribute("aria-labelledby",s)}_getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){const i="__previous"+e;void 0!==this[i]&&this[i]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0})),this[i]=t}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=Os.debounce(this.__observeOffsetHeightDebouncer,Ai,(()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}))}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}};let nl,al=e=>e;class ll extends(Rr(ol(vr(yr(Is))))){static get template(){return Es(nl||(nl=al`
      <style include="vaadin-text-field-shared-styles"></style>

      <div class="vaadin-text-field-container">
        <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

        <div part="input-field" id="[[_inputId]]">
          <slot name="prefix"></slot>

          <slot name="input">
            <input part="value" />
          </slot>

          <div part="clear-button" id="clearButton" role="button" aria-label$="[[i18n.clear]]"></div>
          <slot name="suffix"></slot>
        </div>

        <div part="helper-text" on-click="focus" id="[[_helperTextId]]">
          <slot name="helper">[[helperText]]</slot>
        </div>

        <div
          part="error-message"
          id="[[_errorId]]"
          aria-live="assertive"
          aria-hidden$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]"
          >[[errorMessage]]</div
        >
      </div>
    `))}static get is(){return"vaadin-text-field"}static get version(){return"20.0.0"}static get properties(){return{pattern:{type:String},title:{type:String}}}}customElements.define(ll.is,ll);let hl,dl,cl,ul,pl,_l,ml=e=>e;class fl extends ie{constructor(){super(...arguments),this.title="Search Github Users",this._userDetailsKeys=["login","id","node_id","avatar_url","gravatar_id","url","html_url","followers_url","following_url","gists_url","starred_url","subscriptions_url","organizations_url","repos_url","events_url","received_events_url","type","site_admin","score"],this._displayKeys=["avatar_url","login"],this._userDetails=[],this._searchQuery="",this._numResults=0,this.getData=async(e,t)=>{if(""===this._searchQuery)console.info("Empty searchQuery so not calling API"),t([],0);else{const i=async(e,s,r)=>{const o=await fetch(`https://api.github.com/search/users?q=${e}&page=${s}&per_page=${r}`);if(o.ok){const e=await o.json();console.log("fetchResult:",e),this._numResults=Math.min(e.total_count,1e3),t(e.items,this._numResults)}else{const t=await o.json();console.info("fetch not ok",t);if(t.message.startsWith("API rate limit exceeded")){console.log(o.headers);const t=o.headers.get("X-RateLimit-Reset");if(t){const o=new Date,n=1e3,a=new Date(+t*n),l=n,h=a.getTime()-o.getTime()+l,d=setTimeout((async()=>{await i(e,s,r)}),h);console.log("queuing new fetch:",d,a)}else console.info("failed for some other reason, so not trying again")}}},{page:s,pageSize:r}=e,o=s+1,n=this._searchQuery;console.log("getData:oneBasedPage:",o),console.log("getData:pageSize:",r),await i(n,o,r)}},this._onChangeQuery=()=>{var e,t;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#query"),s=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#grid");s&&(this._searchQuery=i.value,s.clearCache())},this.columnRenderer=(e,t,i)=>{const{item:s}=i,r=t.getAttribute("header"),o="avatar_url"===r;let n=L(hl||(hl=ml``));if(o){const e=new Image;e.classList.add("avatar_url"),e.src="";const t=new Image;t.addEventListener("load",(async()=>{e.setAttribute("alt",`Visit profile for ${s.login} (opens in new tab)`),e.src=s.avatar_url})),t.src=s.avatar_url,n=L(dl||(dl=ml`
        <a class="image_anchor" href="${0}"> ${0} </a>
      `),s.html_url,e)}else n=L(cl||(cl=ml`<div>${0}</div>`),s[r]);e.classList.add("grid_cell"),H(n,e)}}render(){return L(ul||(ul=ml`
      <main>
        <h1>${0}</h1>

        <vaadin-text-field
          id="query"
          label="Search query (hit enter)"
          required
          clear-button-visible
          @change="${0}"
        >
        </vaadin-text-field>

        <div id="num_results">Number of results: ${0}</div>

        <div id="grid_container">
          <vaadin-grid id="grid" .dataProvider=${0}>
            ${0}
          </vaadin-grid>
        </div>
      </main>
    `),this.title,this._onChangeQuery,this._numResults,this.getData,this._userDetailsKeys.filter((e=>this._displayKeys.includes(e))).map((e=>L(pl||(pl=ml`
                  <vaadin-grid-column
                    .renderer=${0}
                    header="${0}"
                  >
                    <vaadin-grid-column> </vaadin-grid-column
                  ></vaadin-grid-column>
                `),this.columnRenderer,e))))}}fl.styles=((e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,r)=>t+(e=>{if(e instanceof s)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1]),e[0]);return o(i)})(_l||(_l=ml`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      min-height: 100vh;
      width: 100%;
      margin: 0 auto;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      text-align: center;
      background-color: var(--dmw-gh-users-background-color);

      --grid-row-height: 50px;
      --grid-anchor-border-width: 1px;
    }

    main {
      display: flex;
      flex-direction: column;

      --main-padding: 10px;
      width: calc(100% - var(--main-padding) * 2);
      margin: 0 var(--main-padding);

      flex-grow: 1;
    }

    #grid_container {
      flex-grow: 1;

      display: flex;
      flex-direction: column;
    }

    #num_results {
      width: fit-content;
    }

    .grid_cell {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(
        var(--grid-row-height) + var(--grid-anchor-border-width) * 2
      );
      margin: 10px 0;
    }

    .image_anchor {
      --image-anchor-size: var(--grid-row-height);
      height: var(--image-anchor-size);
      width: var(--image-anchor-size);
      outline: var(--grid-anchor-border-width) solid blue;
    }

    img.avatar_url {
      height: var(--grid-row-height);
    }
  `)),e([re({type:String})],fl.prototype,"title",void 0),e([oe()],fl.prototype,"_displayKeys",void 0),e([oe()],fl.prototype,"_userDetails",void 0),e([oe()],fl.prototype,"_searchQuery",void 0),e([oe()],fl.prototype,"_numResults",void 0),customElements.define("dmw-gh-users",fl);
