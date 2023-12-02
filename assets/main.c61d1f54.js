import Ue from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const lt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};lt();const ut=document.querySelector("#menu"),fe=document.querySelector("#links"),ft=document.querySelector("#close");function dt(){fe.style.width="100vw"}function pt(){fe.style.width="0vw"}const j=document.querySelector("#header");let oe=window.scrollY;const ht=()=>{window.addEventListener("scroll",()=>{const e=window.scrollY;oe>e?j.style.top="0":j.style.top="-85px",oe=e}),window.addEventListener("DOMContentLoaded",()=>{j.style.top="0"})},k={menu:ut,links:fe,close:ft,header:j,prevScrollPos:oe,menuDisplayToggle:dt,closeDisplayToggle:pt,scrollChange:ht};function _e(e,t){return function(){return e.apply(t,arguments)}}const{toString:mt}=Object.prototype,{getPrototypeOf:de}=Object,W=(e=>t=>{const n=mt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>W(t)===e),K=e=>t=>typeof t===e,{isArray:P}=Array,B=K("undefined");function yt(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ie=A("ArrayBuffer");function gt(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ie(e.buffer),t}const wt=K("string"),R=K("function"),qe=K("number"),X=e=>e!==null&&typeof e=="object",Et=e=>e===!0||e===!1,M=e=>{if(W(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},St=A("Date"),bt=A("File"),Rt=A("Blob"),Ot=A("FileList"),At=e=>X(e)&&R(e.pipe),Tt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=W(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},xt=A("URLSearchParams"),vt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function U(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,o;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function je(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Me=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),He=e=>!B(e)&&e!==Me;function se(){const{caseless:e}=He(this)&&this||{},t={},n=(r,o)=>{const s=e&&je(t,o)||o;M(t[s])&&M(r)?t[s]=se(t[s],r):M(r)?t[s]=se({},r):P(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&U(arguments[r],n);return t}const Lt=(e,t,n,{allOwnKeys:r}={})=>(U(t,(o,s)=>{n&&R(o)?e[s]=_e(o,n):e[s]=o},{allOwnKeys:r}),e),Nt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ct=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Pt=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Dt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ft=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!qe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},kt=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&de(Uint8Array)),Bt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},_t=A("HTMLFormElement"),It=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),qt=A("RegExp"),$e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};U(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},jt=e=>{$e(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Mt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return P(e)?r(e):r(String(e).split(t)),n},Ht=()=>{},$t=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",Re="0123456789",ze={DIGIT:Re,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+Re},zt=(e=16,t=ze.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Jt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Vt=e=>{const t=new Array(10),n=(r,o)=>{if(X(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=P(r)?[]:{};return U(r,(i,l)=>{const d=n(i,o+1);!B(d)&&(s[l]=d)}),t[o]=void 0,s}}return r};return n(e,0)},Wt=A("AsyncFunction"),Kt=e=>e&&(X(e)||R(e))&&R(e.then)&&R(e.catch);var a={isArray:P,isArrayBuffer:Ie,isBuffer:yt,isFormData:Tt,isArrayBufferView:gt,isString:wt,isNumber:qe,isBoolean:Et,isObject:X,isPlainObject:M,isUndefined:B,isDate:St,isFile:bt,isBlob:Rt,isRegExp:qt,isFunction:R,isStream:At,isURLSearchParams:xt,isTypedArray:kt,isFileList:Ot,forEach:U,merge:se,extend:Lt,trim:vt,stripBOM:Nt,inherits:Ct,toFlatObject:Pt,kindOf:W,kindOfTest:A,endsWith:Dt,toArray:Ft,forEachEntry:Bt,matchAll:Ut,isHTMLForm:_t,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:$e,freezeMethods:jt,toObjectSet:Mt,toCamelCase:It,noop:Ht,toFiniteNumber:$t,findKey:je,global:Me,isContextDefined:He,ALPHABET:ze,generateString:zt,isSpecCompliantForm:Jt,toJSONObject:Vt,isAsyncFn:Wt,isThenable:Kt};function y(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Je=y.prototype,Ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ve[e]={value:e}});Object.defineProperties(y,Ve);Object.defineProperty(Je,"isAxiosError",{value:!0});y.from=(e,t,n,r,o,s)=>{const i=Object.create(Je);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),y.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var Xt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function We(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Oe(e,t,n){return e?e.concat(t).map(function(o,s){return o=We(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Gt(e){return a.isArray(e)&&!e.some(ie)}const Yt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(u,w){return!a.isUndefined(w[u])});const r=n.metaTokens,o=n.visitor||f,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function h(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function f(p,u,w){let E=p;if(p&&!w&&typeof p=="object"){if(a.endsWith(u,"{}"))u=r?u:u.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Gt(p)||(a.isFileList(p)||a.endsWith(u,"[]"))&&(E=a.toArray(p)))return u=We(u),E.forEach(function(x,ct){!(a.isUndefined(x)||x===null)&&t.append(i===!0?Oe([u],ct,s):i===null?u:u+"[]",h(x))}),!1}return ie(p)?!0:(t.append(Oe(w,u,s),h(p)),!1)}const c=[],m=Object.assign(Yt,{defaultVisitor:f,convertValue:h,isVisitable:ie});function g(p,u){if(!a.isUndefined(p)){if(c.indexOf(p)!==-1)throw Error("Circular reference detected in "+u.join("."));c.push(p),a.forEach(p,function(E,S){(!(a.isUndefined(E)||E===null)&&o.call(t,E,a.isString(S)?S.trim():S,u,m))===!0&&g(E,u?u.concat(S):[S])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&G(e,this,t)}const Ke=pe.prototype;Ke.append=function(t,n){this._pairs.push([t,n])};Ke.toString=function(t){const n=t?function(r){return t.call(this,r,Ae)}:Ae;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Qt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xe(e,t,n){if(!t)return e;const r=n&&n.encode||Qt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Zt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var Te=Zt,Ge={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},en=typeof URLSearchParams!="undefined"?URLSearchParams:pe,tn=typeof FormData!="undefined"?FormData:null,nn=typeof Blob!="undefined"?Blob:null,rn={isBrowser:!0,classes:{URLSearchParams:en,FormData:tn,Blob:nn},protocols:["http","https","file","blob","url","data"]};const Ye=typeof window!="undefined"&&typeof document!="undefined",on=(e=>Ye&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!="undefined"&&navigator.product),sn=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var an=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ye,hasStandardBrowserWebWorkerEnv:sn,hasStandardBrowserEnv:on},Symbol.toStringTag,{value:"Module"})),O={...an,...rn};function cn(e,t){return G(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function ln(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function un(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Qe(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=un(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(ln(r),o,n,0)}),n}return null}function fn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const he={transitional:Ge,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return G(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),fn(t)):t}],transformResponse:[function(t){const n=this.transitional||he.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{he.headers[e]={}});var me=he;const dn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var pn=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&dn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const xe=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function H(e){return e===!1||e==null?e:a.isArray(e)?e.map(H):String(e)}function hn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const mn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function yn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function gn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class Y{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,d,h){const f=D(d);if(!f)throw new Error("header name must be a non-empty string");const c=a.findKey(o,f);(!c||o[c]===void 0||h===!0||h===void 0&&o[c]!==!1)&&(o[c||d]=H(l))}const i=(l,d)=>a.forEach(l,(h,f)=>s(h,f,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!mn(t)?i(pn(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return hn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=D(i),i){const l=a.findKey(r,i);l&&(!n||Z(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||Z(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=H(o),delete n[s];return}const l=t?yn(s):String(s).trim();l!==s&&delete n[s],n[l]=H(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=D(i);r[l]||(gn(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}Y.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Y.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Y);var T=Y;function ee(e,t){const n=this||me,r=t||n,o=T.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Ze(e){return!!(e&&e.__CANCEL__)}function _(e,t,n){y.call(this,e==null?"canceled":e,y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,y,{__CANCEL__:!0});function wn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var En=O.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Sn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function et(e,t){return e&&!Sn(t)?bn(e,t):t}var Rn=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function On(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function An(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const h=Date.now(),f=r[s];i||(i=h),n[o]=d,r[o]=h;let c=s,m=0;for(;c!==o;)m+=n[c++],c=c%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),h-i<t)return;const g=f&&h-f;return g?Math.round(m*1e3/g):void 0}}function ve(e,t){let n=0;const r=An(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,d=r(l),h=s<=i;n=s;const f={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&h?(i-s)/d:void 0,event:o};f[t?"download":"upload"]=!0,e(f)}}const Tn=typeof XMLHttpRequest!="undefined";var xn=Tn&&function(e){return new Promise(function(n,r){let o=e.data;const s=T.from(e.headers).normalize();let{responseType:i,withXSRFToken:l}=e,d;function h(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}let f;if(a.isFormData(o)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((f=s.getContentType())!==!1){const[u,...w]=f?f.split(";").map(E=>E.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...w].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(u+":"+w))}const m=et(e.baseURL,e.url);c.open(e.method.toUpperCase(),Xe(m,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function g(){if(!c)return;const u=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};wn(function(x){n(x),h()},function(x){r(x),h()},E),c=null}if("onloadend"in c?c.onloadend=g:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(g)},c.onabort=function(){!c||(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Ge;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new y(w,E.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},O.hasStandardBrowserEnv&&(l&&a.isFunction(l)&&(l=l(e)),l||l!==!1&&Rn(m))){const u=e.xsrfHeaderName&&e.xsrfCookieName&&En.read(e.xsrfCookieName);u&&s.set(e.xsrfHeaderName,u)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(w,E){c.setRequestHeader(E,w)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ve(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ve(e.onUploadProgress)),(e.cancelToken||e.signal)&&(d=u=>{!c||(r(!u||u.type?new _(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d)));const p=On(m);if(p&&O.protocols.indexOf(p)===-1){r(new y("Unsupported protocol "+p+":",y.ERR_BAD_REQUEST,e));return}c.send(o||null)})};const ae={http:Xt,xhr:xn};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Le=e=>`- ${e}`,vn=e=>a.isFunction(e)||e===null||e===!1;var tt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!vn(n)&&(r=ae[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(Le).join(`
`):" "+Le(s[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ae};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function Ne(e){return te(e),e.headers=T.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tt.getAdapter(e.adapter||me.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return Ze(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Ce=e=>e instanceof T?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(h,f,c){return a.isPlainObject(h)&&a.isPlainObject(f)?a.merge.call({caseless:c},h,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function o(h,f,c){if(a.isUndefined(f)){if(!a.isUndefined(h))return r(void 0,h,c)}else return r(h,f,c)}function s(h,f){if(!a.isUndefined(f))return r(void 0,f)}function i(h,f){if(a.isUndefined(f)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,f)}function l(h,f,c){if(c in t)return r(h,f);if(c in e)return r(void 0,h)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(h,f)=>o(Ce(h),Ce(f),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=d[f]||o,m=c(e[f],t[f],f);a.isUndefined(m)&&c!==l||(n[f]=m)}),n}const nt="1.6.2",ye={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ye[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Pe={};ye.transitional=function(t,n,r){function o(s,i){return"[Axios v"+nt+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new y(o(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Pe[i]&&(Pe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function Ln(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],d=l===void 0||i(l,s,e);if(d!==!0)throw new y("option "+s+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+s,y.ERR_BAD_OPTION)}}var ce={assertOptions:Ln,validators:ye};const v=ce.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&ce.assertOptions(r,{silentJSONParsing:v.transitional(v.boolean),forcedJSONParsing:v.transitional(v.boolean),clarifyTimeoutError:v.transitional(v.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:ce.assertOptions(o,{encode:v.function,serialize:v.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=T.concat(i,s);const l=[];let d=!0;this.interceptors.request.forEach(function(u){typeof u.runWhen=="function"&&u.runWhen(n)===!1||(d=d&&u.synchronous,l.unshift(u.fulfilled,u.rejected))});const h=[];this.interceptors.response.forEach(function(u){h.push(u.fulfilled,u.rejected)});let f,c=0,m;if(!d){const p=[Ne.bind(this),void 0];for(p.unshift.apply(p,l),p.push.apply(p,h),m=p.length,f=Promise.resolve(n);c<m;)f=f.then(p[c++],p[c++]);return f}m=l.length;let g=n;for(c=0;c<m;){const p=l[c++],u=l[c++];try{g=p(g)}catch(w){u.call(this,w);break}}try{f=Ne.call(this,g)}catch(p){return Promise.reject(p)}for(c=0,m=h.length;c<m;)f=f.then(h[c++],h[c++]);return f}getUri(t){t=C(this.defaults,t);const n=et(t.baseURL,t.url);return Xe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(C(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});var $=z;class ge{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new _(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ge(function(o){t=o}),cancel:t}}}var Nn=ge;function Cn(e){return function(n){return e.apply(null,n)}}function Pn(e){return a.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});var Dn=le;function rt(e){const t=new $(e),n=_e($.prototype.request,t);return a.extend(n,$.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return rt(C(e,o))},n}const b=rt(me);b.Axios=$;b.CanceledError=_;b.CancelToken=Nn;b.isCancel=Ze;b.VERSION=nt;b.toFormData=G;b.AxiosError=y;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Cn;b.isAxiosError=Pn;b.mergeConfig=C;b.AxiosHeaders=T;b.formToJSON=e=>Qe(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=tt.getAdapter;b.HttpStatusCode=Dn;b.default=b;var Fn=b;const F=Fn.create({baseURL:"https://yameiproject.onrender.com"}),q={rating:function(){document.querySelectorAll(".swiper-card").forEach((t,n)=>{const r=n+1,o=t.querySelectorAll('.star-rating [type="radio"]'),s=5;o.forEach((i,l)=>{const d=l+1;i.checked=d<=s,i.id=`rate-${d}-${r}`,i.name=`rating-${r}`})})},getRatingDatabase:async function(){const e=document.querySelector(".swiper-content");try{const t=await F.get("/Review");for(const[n,r]of Object.entries(t.data)){const o=document.createElement("div");o.className="swiper-card";const s=document.createElement("div");s.classList.add("avatar");const i=document.createElement("img");i.src=`https://picsum.photos/300/200/?random=${1+n}`,s.appendChild(i);const l=document.createElement("div");l.className="name",l.textContent=r.name,s.appendChild(l);const d=document.createElement("span");d.className="star-rating flex text-primary-200";for(let m=1;m<=5;m++){const g=document.createElement("label");g.setAttribute("for",`rate-${m}`),g.style=`--i:${m}`;const p=document.createElement("i");p.className="fa-solid fa-star";const u=document.createElement("input");u.type="radio",u.value=m,g.appendChild(p),g.appendChild(u),d.appendChild(g)}d.querySelectorAll(".star-rating input").forEach((m,g)=>{if(m.checked=g+1<=r.rating,m.id=`rate-${g+1}-${parseInt(n+10)}`,m.name=`rating-${parseInt(n+10)}`,m.checked){const u=m.parentElement.querySelector("i");u.style.color="#faec1b",u.style.textShadow="0 0 2px #ffffff, 0 0 10px #ffee58"}}),l.appendChild(d);const f=document.createElement("div");f.classList.add("card-content"),f.innerText=r.content;const c=document.createElement("a");c.className="more text-primary-400",c.innerText="\u95B1\u8B80\u66F4\u591A",o.appendChild(s),o.appendChild(f),e.appendChild(o),o.appendChild(c)}console.log(e)}catch(t){console.error("Error fetching reviews:",t)}},clickMore:async function(){document.querySelectorAll(".more").forEach(t=>{t.addEventListener("click",n=>{const r=n.target.closest(".swiper-card");if(r){r.classList.toggle("expanded");const o=r.querySelector(".card-content");o&&o.classList.toggle("expanded")}})})},init:function(){const e=document.querySelector(".swiper-content");let t=!1,n,r;e.addEventListener("mousedown",o),e.addEventListener("touchstart",s),e.addEventListener("mouseleave",i),e.addEventListener("touchend",l),e.addEventListener("mouseup",d),e.addEventListener("touchmove",h),e.addEventListener("mousemove",f);function o(c){t=!0,n=c.pageX-e.offsetLeft,r=e.scrollLeft}function s(c){t=!0,n=c.pageX-e.offsetLeft,r=e.scrollLeft}function i(){t=!1}function l(){t=!1}function d(){t=!1}function h(c){if(!t)return;c.preventDefault();const g=(c.touches[0].pageX-e.offsetLeft-n)*2;e.scrollLeft=r-g}function f(c){if(!t)return;c.preventDefault();const g=(c.pageX-e.offsetLeft-n)*2;e.scrollLeft=r-g}}},De={init:function(){console.log(localStorage);const e=document.getElementById("dialog"),t=document.getElementById("closeBtn"),n=document.querySelector(".recieve");let r=!1;n.addEventListener("click",o=>{o.preventDefault(),r=!0,r&&(e.style.display="block")}),t.addEventListener("click",o=>{r=!1,o.preventDefault(),e.style.display="none"})},submit:async function(){const e=document.querySelectorAll('.input-rating [type="radio"]'),t=document.querySelector(".submit"),r=document.querySelector(".dialog-name").children[0].children[0].innerText,o=document.querySelector(".dialog-content").children[0],s=new Date,i=s.getFullYear(),l=(s.getMonth()+1).toString().padStart(2,"0"),d=s.getDate().toString().padStart(2,"0"),h=`${i}-${l}-${d}`,f={};let c=0;try{const u=await F.get("/Review");p(u.data,e)}catch(u){console.error("Error fetching reviews:",u)}function m(u,w){const S=u.previousElementSibling.querySelector("i");parseInt(u.value)<=w?(S.style.color="#faec1b",S.style.textShadow="0 0 2px #ffffff, 0 0 10px #ffee58"):(S.style.color="",S.style.textShadow="")}function g(u,w){u.forEach(E=>{m(E,w)})}e.forEach(u=>{u.addEventListener("change",function(){c=parseInt(u.value),g(e,c),console.log(c)})});function p(u,w){for(const E of u)if(E.name===r){o.value=E.content;const S=parseInt(E.rating);c=S,g(w,S);break}}t.addEventListener("click",async u=>{u.preventDefault(),f.name=r,f.rating=c,f.content=o.value,f.date=h;try{const E=(await F.get("/Review")).data.find(S=>S.name===r);if(E){const S=await F.put(`/Review/${E.id}`,f);console.log("Review updated successfully:",S.data)}else{const S=await F.post("/Review",f);console.log("Review submitted successfully:",S.data)}}catch(w){console.error("Error submitting/updating review:",w)}})}},I="http://localhost:3001";let ne="",re=[];const ot=document.querySelector("#signup-form"),st=document.querySelector("#login-form"),kn=document.querySelector("#adminLogin-form"),J=document.querySelector("#login-name"),N=document.querySelector("#email"),L=document.querySelector("#password"),V=document.querySelector("#checkPassword"),we=document.querySelector("#name"),Ee=document.querySelector("#phone"),it=async()=>{try{const e=await Ue.post(`${I}/signup`,{email:N.value,password:L.value,checkPawword:V.value,name:we.value,phone:Ee.value,role:"user"});console.log("\u8A3B\u518A\u6210\u529F"),console.log(e.data),setTimeout('location.assign("/yaMeiProject//src/pages/back/login.html")',1500),Swal.fire({position:"top",title:"\u8A3B\u518A\u6210\u529F\uFF01\u5373\u53EF\u767B\u5165",timer:1e3,icon:"success",showConfirmButton:!1});return}catch(e){if(console.log("\u8A3B\u518A\u5931\u6557"),console.error("signUp:",e),e.response.data==="Email already exists"){Swal.fire({icon:"error",title:"\u8A3B\u518A\u5931\u6557",text:"\u300Eemail\u300F\u5DF2\u91CD\u8907\u8A3B\u518A\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165"});return}}},Se=async()=>{try{const e=await Ue.post(`${I}/login`,{email:N.value,password:L.value});console.log("\u767B\u5165\u6210\u529F"),console.log(e.data),ne=e.data.accessToken,ne&&(localStorage.setItem("authToken",ne),re.push(e.data.user),localStorage.setItem("userInfo",JSON.stringify(re))),re[0].role==="user"&&setTimeout(()=>{location.assign("/yaMeiProject//src/pages/front/index.html")},1500),Swal.fire({position:"top",title:"\u767B\u5165\u6210\u529F\uFF01",timer:1e3,icon:"success",showConfirmButton:!1});return}catch(e){console.log("\u767B\u5165\u5931\u6557"),console.log("login:",e),Swal.fire({position:"top",title:"\u767B\u5165\u5931\u6557\uFF01",timer:1e3,icon:"error",showConfirmButton:!1});return}},Bn=()=>{localStorage.removeItem("userInfo"),localStorage.removeItem("authToken"),J.innerHTML=`
        <span class="block absolute w-[82px] h-3 group-hover:bg-accent-100 top-4 z-[-1]"></span>
          <a href="../../pages/back/login.html">\u767B\u5165/\u8A3B\u518A</a>
      `},Un=()=>{localStorage.getItem("userInfo")&&(JSON.parse(localStorage.getItem("userInfo"))[0].role==="user"?(J.innerHTML=`
        <span class="block absolute w-[45px] h-3 group-hover:bg-accent-100 top-4 z-[-1]"></span>
          <a href="../../pages/back/login.html">\u767B\u51FA</a>
      `,console.log("\u5DF2\u63DB\u6210\u767B\u51FA")):(J.innerHTML=`
        <span class="block absolute w-[90px] h-3 group-hover:bg-accent-100 top-4 z-[-1]"></span>
          <a href="../../pages/back/login.html">\u767B\u5165/\u8A3B\u518A</a>
      `,console.log("\u5DF2\u63DB\u6210\u767B\u5165/\u8A3B\u518A")))},_n=()=>{ot.addEventListener("submit",e=>{if(e.preventDefault(),N.value.trim().length===0||L.value.trim().length===0||V.value.trim().length===0||we.value.trim().length===0||Ee.value.trim().length===0){console.log("\u6C92\u6709\u5B8C\u6574\u8F38\u5165"),Swal.fire({icon:"error",title:"\u8A3B\u518A\u5931\u6557",text:"\u8F38\u5165\u6846\u52FF\u7A7A\u767D\uFF0C\u8ACB\u8F38\u5165\u5B57\u3002"});return}if(L.value!==V.value){Swal.fire({icon:"error",title:"\u8A3B\u518A\u5931\u6557",text:"\u8F38\u5165\u5169\u7D44\u5BC6\u78BC\u4E0D\u76F8\u7B26\uFF0C\u8ACB\u518D\u91CD\u65B0\u78BA\u8A8D\u3002"});return}console.log("\u6709\u5B8C\u6574\u8F38\u5165"),it()})},at=()=>{st.addEventListener("submit",e=>{if(e.preventDefault(),N.value.trim().length===0||L.value.trim().length===0){console.log("\u6C92\u6709\u5B8C\u6574\u8F38\u5165"),Swal.fire({icon:"error",title:"\u767B\u5165\u5931\u6557",text:"\u8F38\u5165\u6846\u52FF\u7A7A\u767D\uFF0C\u8ACB\u8F38\u5165\u5B57\u3002"});return}Se()})},Fe={authURL:I,signForm:ot,emailInput:N,passwordInput:L,checkPasswordInput:V,nameInput:we,phoneInput:Ee,signUp:it,signAddEvent:_n},ke={authURL:I,loginForm:st,emailInput:N,passwordInput:L,login:Se,loginEvent:at},Be={authURL:I,adminLoginForm:kn,emailInput:N,passwordInput:L,login:Se,loginEvent:at},ue={loginName:J,logOut:Bn,toggleLoginName:Un};k.menu.addEventListener("click",k.menuDisplayToggle);k.close.addEventListener("click",k.closeDisplayToggle);k.scrollChange();document.addEventListener("DOMContentLoaded",async function(){await q.getRatingDatabase(),q.rating(),q.clickMore(),q.init(),De.submit(),De.init()});Fe.signForm?Fe.signAddEvent():ke.loginForm?ke.loginEvent():Be.adminLoginForm&&Be.loginEvent();ue.toggleLoginName();ue.loginName.addEventListener("click",ue.logOut);
