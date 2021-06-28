!function(){"use strict";const e=Symbol("solid-proxy"),t={equals:(e,t)=>e===t};let n=S;const r={},o={owned:null,cleanups:null,context:null,owner:null};var l=null;let s=null,i=null,u=null,c=null,f=null,a=0;function d(e,t){t&&(l=t);const n=i,r=l,s=0===e.length?o:{owned:null,cleanups:null,context:null,owner:r,attached:!!t};let u;l=s,i=null;try{C(()=>u=e(()=>x(s)),!0)}finally{i=n,l=r}return u}function h(e,n){n=n?Object.assign({},t,n):t;const o={value:e,observers:null,observerSlots:null,pending:r,comparator:n.equals||void 0};return[y.bind(o),e=>("function"==typeof e&&(e=e(o.pending!==r?o.pending:o.value)),b(o,e))]}function p(e,t,n){m(w(e,t,!1))}function g(e){if(u)return e();let t;const n=u=[];try{t=e()}finally{u=null}return C(()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==r){const e=t.pending;t.pending=r,b(t,e)}}},!1),t}function v(e){let t,n=i;return i=null,t=e(),i=n,t}function y(){if(this.state&&this.sources){const e=c;c=null,1===this.state?m(this):_(this),c=e}if(i){const e=this.observers?this.observers.length:0;i.sources?(i.sources.push(this),i.sourceSlots.push(e)):(i.sources=[this],i.sourceSlots=[e]),this.observers?(this.observers.push(i),this.observerSlots.push(i.sources.length-1)):(this.observers=[i],this.observerSlots=[i.sources.length-1])}return this.value}function b(e,t,n){return e.comparator&&e.comparator(e.value,t)?t:u?(e.pending===r&&u.push(e),e.pending=t,t):(e.value=t,!e.observers||c&&!e.observers.length||C(()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];s,n.observers&&2!==n.state&&O(n),n.state=1,n.pure?c.push(n):f.push(n)}if(c.length>1e6)throw c=[],new Error},!1),t)}function m(e){if(!e.fn)return;x(e);const t=l,n=i,r=a;i=l=e,function(e,t,n){let r;try{r=e.fn(t)}catch(e){j(e)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?b(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),i=n,l=t}function w(e,t,n,r){const s={fn:e,state:1,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:l,context:null,pure:n};return null===l||l!==o&&(l.owned?l.owned.push(s):l.owned=[s]),s}function A(e){let t,n=1===e.state&&e;if(e.suspense&&v(e.suspense.inFallback))return e.suspense.effects.push(e);for(;e.fn&&(e=e.owner);)2===e.state?t=e:1===e.state&&(n=e,t=void 0);if(t){const e=c;if(c=null,_(t),c=e,!n||1!==n.state)return}n&&m(n)}function C(e,t){if(c)return e();let r=!1;t||(c=[]),f?r=!0:f=[],a++;try{e()}catch(e){j(e)}finally{!function(e){c&&(S(c),c=null);if(e)return;f.length?g(()=>{n(f),f=null}):f=null}(r)}}function S(e){for(let t=0;t<e.length;t++)A(e[t])}function _(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?A(n):2===n.state&&_(n))}}function O(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.observers&&O(n))}}function x(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)x(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function j(e){throw e}const N=Symbol("fallback");function $(e){for(let t=0;t<e.length;t++)e[t]()}function k(e,t,n={}){let r=[],o=[],s=[],i=0,u=t.length>1?[]:null,c=l;var f;return f=()=>$(s),null===l||(null===l.cleanups?l.cleanups=[f]:l.cleanups.push(f)),()=>{let l,f,a=e()||[];return v(()=>{let e,t,h,g,v,y,b,m,w,A=a.length;if(0===A)0!==i&&($(s),s=[],r=[],o=[],i=0,u&&(u=[])),n.fallback&&(r=[N],o[0]=d(e=>(s[0]=e,n.fallback()),c),i=1);else if(0===i){for(o=new Array(A),f=0;f<A;f++)r[f]=a[f],o[f]=d(p,c);i=A}else{for(h=new Array(A),g=new Array(A),u&&(v=new Array(A)),y=0,b=Math.min(i,A);y<b&&r[y]===a[y];y++);for(b=i-1,m=A-1;b>=y&&m>=y&&r[b]===a[m];b--,m--)h[m]=o[b],g[m]=s[b],u&&(v[m]=u[b]);for(e=new Map,t=new Array(m+1),f=m;f>=y;f--)w=a[f],l=e.get(w),t[f]=void 0===l?-1:l,e.set(w,f);for(l=y;l<=b;l++)w=r[l],f=e.get(w),void 0!==f&&-1!==f?(h[f]=o[l],g[f]=s[l],u&&(v[f]=u[l]),f=t[f],e.set(w,f)):s[l]();for(f=y;f<A;f++)f in h?(o[f]=h[f],s[f]=g[f],u&&(u[f]=v[f],u[f](f))):o[f]=d(p,c);o=o.slice(0,i=A),r=a.slice(0)}return o});function p(e){if(s[f]=e,u){const[e,n]=h(f);return u[f]=n,t(a[f],e)}return t(a[f])}}}function P(e,t){return v(()=>e(t))}function B(e){const n="fallback"in e&&{fallback:()=>e.fallback};return function(e,n,o){o=o?Object.assign({},t,o):t;const l=w(e,n,!0);return l.pending=r,l.observers=null,l.observerSlots=null,l.state=0,l.comparator=o.equals||void 0,m(l),y.bind(l)}(k(()=>e.each,e.children,n||void 0))}function T(e,t,n){let r=n.length,o=t.length,l=r,s=0,i=0,u=t[o-1].nextSibling,c=null;for(;s<o||i<l;)if(t[s]!==n[i]){for(;t[o-1]===n[l-1];)o--,l--;if(o===s){const t=l<r?i?n[i-1].nextSibling:n[l-i]:u;for(;i<l;)e.insertBefore(n[i++],t)}else if(l===i)for(;s<o;)c&&c.has(t[s])||e.removeChild(t[s]),s++;else if(t[s]===n[l-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[s++].nextSibling),e.insertBefore(n[--l],r),t[o]=n[l]}else{if(!c){c=new Map;let e=i;for(;e<l;)c.set(n[e],e++)}const r=c.get(t[s]);if(null!=r)if(i<r&&r<l){let u,f=s,a=1;for(;++f<o&&f<l&&null!=(u=c.get(t[f]))&&u===r+a;)a++;if(a>r-i){const o=t[s];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[s++])}else s++;else e.removeChild(t[s++])}}else s++,i++}function q(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function M(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return E(e,t,r,n);p(r=>E(e,t(),r,n),r)}function E(e,t,n,r,o){for(;"function"==typeof n;)n=n();if(t===n)return n;const l=typeof t,s=void 0!==r;if(e=s&&n[0]&&n[0].parentNode||e,"string"===l||"number"===l)if("number"===l&&(t=t.toString()),s){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=Q(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===l)n=Q(e,n,r);else{if("function"===l)return p(()=>{let o=t();for(;"function"==typeof o;)o=o();n=E(e,o,n,r)}),()=>n;if(Array.isArray(t)){const l=[];if(D(l,t,o))return p(()=>n=E(e,l,n,r,!0)),()=>n;if(0===l.length){if(n=Q(e,n,r),s)return n}else Array.isArray(n)?0===n.length?F(e,l,r):T(e,n,l):null==n||""===n?F(e,l):T(e,s&&n||[e.firstChild],l);n=l}else if(t instanceof Node){if(Array.isArray(n)){if(s)return n=Q(e,n,r,t);Q(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function D(e,t,n){let r=!1;for(let o=0,l=t.length;o<l;o++){let l,s=t[o];if(s instanceof Node)e.push(s);else if(null==s||!0===s||!1===s);else if(Array.isArray(s))r=D(e,s)||r;else if("string"==(l=typeof s))e.push(document.createTextNode(s));else if("function"===l)if(n){for(;"function"==typeof s;)s=s();r=D(e,Array.isArray(s)?s:[s])||r}else e.push(s),r=!0;else e.push(document.createTextNode(s.toString()))}return r}function F(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function Q(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const t=s.parentNode===e;r||l?t&&e.removeChild(s):t?e.replaceChild(o,s):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}const z=Symbol("store-raw"),R=Symbol("store-node"),V=Symbol("store-name");function H(t,n){let r=t[e];if(!r){Object.defineProperty(t,e,{value:r=new Proxy(t,K)});const n=Object.keys(t),o=Object.getOwnPropertyDescriptors(t);for(let e=0,l=n.length;e<l;e++){const l=n[e];if(o[l].get){const e=o[l].get.bind(r);Object.defineProperty(t,l,{get:e})}}}return r}function I(e){return null!=e&&"object"==typeof e&&(!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function L(e,t=new Set){let n,r,o,l;if(n=null!=e&&e[z])return n;if(!I(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,l=e.length;n<l;n++)o=e[n],(r=L(o,t))!==o&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,u=n.length;i<u;i++)l=n[i],s[l].get||(o=e[l],(r=L(o,t))!==o&&(e[l]=r))}return e}function G(e){let t=e[R];return t||Object.defineProperty(e,R,{value:t={}}),t}function J(){const[e,t]=h(void 0,{equals:!1});return e.$=t,e}const K={get(t,n,r){if(n===z)return t;if(n===e)return r;const o=t[n];if(n===R||"__proto__"===n)return o;const l=I(o);if(i&&("function"!=typeof o||t.hasOwnProperty(n))){let e,r;l&&(e=G(o))&&(r=e._||(e._=J()),r()),e=G(t),r=e[n]||(e[n]=J()),r()}return l?H(o):o},set:()=>!0,deleteProperty:()=>!0,getOwnPropertyDescriptor:function(t,n){const r=Reflect.getOwnPropertyDescriptor(t,n);return!r||r.get||n===e||n===R||n===V||(delete r.value,delete r.writable,r.get=()=>t[e][n]),r}};function U(e,t,n){if(e[t]===n)return;const r=Array.isArray(e),o=e.length,l=void 0===n,s=r||l===t in e;l?delete e[t]:e[t]=n;let i,u=G(e);(i=u[t])&&i.$(),r&&e.length!==o&&(i=u.length)&&i.$(i,void 0),s&&(i=u._)&&i.$(i,void 0)}function W(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const l=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let o=0;o<r.length;o++)W(e,[r[o]].concat(t),[r[o]].concat(n));return}if(s&&"function"===l){for(let o=0;o<e.length;o++)r(e[o],o)&&W(e,[o].concat(t),[o].concat(n));return}if(s&&"object"===l){const{from:o=0,to:l=e.length-1,by:s=1}=r;for(let r=o;r<=l;r+=s)W(e,[r].concat(t),[r].concat(n));return}if(t.length>1)return void W(e[r],t,[r].concat(n));o=e[r],n=[r].concat(n)}let l=t[0];"function"==typeof l&&(l=l(o,n),l===o)||void 0===r&&null==l||(l=L(l),void 0===r||I(o)&&I(l)&&!Array.isArray(l)?function(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const o=n[r];U(e,o,t[o])}}(o,l):U(e,r,l))}function X(e,t,n,r,o){const l=t[n];if(e===l)return;if(!I(e)||!I(l)||o&&e[o]!==l[o])return void(e!==l&&U(t,n,e));if(Array.isArray(e)){if(e.length&&l.length&&(!r||o&&null!=e[0][o])){let t,n,s,i,u,c,f,a;for(s=0,i=Math.min(l.length,e.length);s<i&&(l[s]===e[s]||o&&l[s][o]===e[s][o]);s++)X(e[s],l,s,r,o);const d=new Array(e.length),h=new Map;for(i=l.length-1,u=e.length-1;i>=s&&u>=s&&(l[i]===e[u]||o&&l[i][o]===e[u][o]);i--,u--)d[u]=l[i];if(s>u||s>i){for(n=s;n<=u;n++)U(l,n,e[n]);for(;n<e.length;n++)U(l,n,d[n]),X(e[n],l,n,r,o);return void(l.length>e.length&&U(l,"length",e.length))}for(f=new Array(u+1),n=u;n>=s;n--)c=e[n],a=o?c[o]:c,t=h.get(a),f[n]=void 0===t?-1:t,h.set(a,n);for(t=s;t<=i;t++)c=l[t],a=o?c[o]:c,n=h.get(a),void 0!==n&&-1!==n&&(d[n]=l[t],n=f[n],h.set(a,n));for(n=s;n<e.length;n++)n in d?(U(l,n,d[n]),X(e[n],l,n,r,o)):U(l,n,e[n])}else for(let t=0,n=e.length;t<n;t++)X(e[t],l,t,r,o);return void(l.length>e.length&&U(l,"length",e.length))}const s=Object.keys(e);for(let t=0,n=s.length;t<n;t++)X(e[s[t]],l,s[t],r,o);const i=Object.keys(l);for(let t=0,n=i.length;t<n;t++)void 0===e[i[t]]&&U(l,i[t],void 0)}function Y(e,t={}){const{merge:n,key:r="id"}=t,o=L(e);return e=>{const t=e;return I(t)&&I(o)?(X(o,{state:t},"state",n,r),t):o}}const Z=q('<table class="table table-striped latest-data"><tbody></tbody></table>'),ee=q('<tr><td class="dbname"></td><td class="query-count"><span></span></td></tr>'),te=q('<td><div class="popover left"><div class="popover-content"></div><div class="arrow"></div></div></td>');!function(e,t,n){let r;d(o=>{r=o,M(t,e(),t.firstChild?null:void 0,n)})}(()=>{const[e,t]=function(e,t){const n=L(e||{});return[H(n),function(...e){g(()=>W(n,e))}]}({databases:[]}),n=()=>{Monitoring.renderRate.ping();const e=ENV.generateData().toArray();Promise.resolve(e).then(e=>t("databases",Y(e,{merge:!0,key:null}))),setTimeout(n,ENV.timeout)};return setTimeout(n,0),(()=>{const t=Z.cloneNode(!0);return M(t.firstChild,P(B,{get each(){return e.databases},children:e=>{const t=e.dbName;return(()=>{const n=ee.cloneNode(!0),r=n.firstChild,o=r.nextSibling.firstChild;r.textContent=t,o.textContent=e.lastSample.nbQueries;const l=o.firstChild;return M(n,P(B,{get each(){return e.lastSample.topFiveQueries},children:e=>(()=>{const t=te.cloneNode(!0),n=t.firstChild,r=n.firstChild;M(t,()=>e.formatElapsed,n),r.textContent=e.query;const o=r.firstChild;return p(n=>{const r=e.elapsedClassName,l=e.query;return r!==n._v$3&&(t.className=n._v$3=r),l!==n._v$4&&(o.data=n._v$4=l),n},{_v$3:void 0,_v$4:void 0}),t})()}),null),p(t=>{const n=e.lastSample.countClassName,r=e.lastSample.nbQueries;return n!==t._v$&&(o.className=t._v$=n),r!==t._v$2&&(l.data=t._v$2=r),t},{_v$:void 0,_v$2:void 0}),n})()}})),t})()},document.getElementById("dbmon"))}();
