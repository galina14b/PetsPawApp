/*! For license information please see 550.2c4a6cd5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkPetsPawApp=self.webpackChunkPetsPawApp||[]).push([[550],{8052:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(5861),i=r(9439),a=r(2791),o=r(7689),c=r(1087),s=r(1243),u="BreedsPage_breedsPage__ZyI82",l="BreedsPage_breedsPage__wrapper__WzFQO",h="BreedsPage_breedsPage__navigationBlock__UtD5O",f="BreedsPage_breedsPage__backLinkBlock__NSIci",d="BreedsPage_breedsPage__backLink__mTQ07",p="BreedsPage_breedsPage__nameOfPage__-lB1A",v="BreedsPage_selectBreed__yzs8f",g="BreedsPage_selectLimit__bkrbM",y="BreedsPage_sortIcon__XHUNF",m="BreedsPage_breedsPage__selectLimit__09pzy",x="BreedsPage_breedsPage__selectBreed__tjAEM",w=r(5809),_=r(1150),b=r(184);function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(Z){s=function(e,t,r){return e[t]=r}}function u(e,t,r,i){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),c=new P(i||[]);return n(o,"_invoke",{value:_(e,r,c)}),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(Z){return{type:"throw",arg:Z}}}e.wrap=u;var h={};function f(){}function d(){}function p(){}var v={};s(v,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(E([])));y&&y!==t&&r.call(y,a)&&(v=y);var m=p.prototype=f.prototype=Object.create(v);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function i(n,a,o,c){var s=l(e[n],e,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){i("next",e,o,c)}),(function(e){i("throw",e,o,c)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return i("throw",e,o,c)}))}c(s.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){i(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function _(e,t,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return C()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var c=b(o,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function b(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=l(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function E(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=p,n(m,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=s(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,c,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},x(w.prototype),s(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new w(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(m),s(m,c,"Generator"),s(m,a,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=E,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var j=function(){var e,t;s.Z.defaults.baseURL="https://api.thecatapi.com/v1";s.Z.defaults.headers.common["x-api-key"]="live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";var r=(0,o.TH)(),j=(0,a.useRef)(null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),k=(0,a.useState)(""),P=(0,i.Z)(k,2),E=P[0],C=P[1],Z=(0,a.useState)(),N=(0,i.Z)(Z,2),O=N[0],B=N[1],S=(0,a.useState)(),H=(0,i.Z)(S,2),V=H[0],F=H[1],M=(0,a.useState)(10),A=(0,i.Z)(M,2),G=A[0],T=A[1],R=(0,a.useState)(),z=(0,i.Z)(R,2),I=z[0],U=z[1];(0,a.useEffect)((function(){function e(){return(e=(0,n.Z)(L().mark((function e(){var t;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("/breeds");case 3:t=e.sent,F(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),Q("",10)}),[]),(0,a.useEffect)((function(){B(I)}),[I]);var Q=function(){var e=(0,n.Z)(L().mark((function e(t,r){var n,i;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=13;break}return e.prev=1,e.next=4,s.Z.get("/images/search",{params:{limit:r,has_breeds:1}});case 4:n=e.sent,B(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:e.next=17;break;case 13:return e.next=15,s.Z.get("/images/search",{params:{limit:r,breed_ids:t}});case 15:i=e.sent,B(i.data);case 17:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),D=function(){var e=(0,n.Z)(L().mark((function e(t){var r;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.target.value,C(r),"all"!==r){e.next=7;break}return e.next=5,Q("",G);case 5:e.next=9;break;case 7:return e.next=9,Q(r,G);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=(0,n.Z)(L().mark((function e(t){var r;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.target.value,T(r),""!==E){e.next=7;break}return e.next=5,Q("",r);case 5:e.next=9;break;case 7:return e.next=9,Q(E,r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=(0,n.Z)(L().mark((function e(t){var r;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.slice().sort(q("breeds[0].name"));case 2:r=e.sent,U(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function q(e){return function(t,r){return t[e]-r[e]?1:-1}}return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:u,children:[(0,b.jsx)(w.a,{}),(0,b.jsxs)("div",{className:l,children:[(0,b.jsxs)("div",{className:h,children:[(0,b.jsx)("div",{className:f,children:(0,b.jsx)(c.rU,{to:j.current,className:d,children:(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[(0,b.jsx)("g",{clipPath:"url(#clip0_1_1332)",children:(0,b.jsx)("path",{d:"M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z",fill:""})}),(0,b.jsx)("defs",{children:(0,b.jsx)("clipPath",{id:"clip0_1_1332",children:(0,b.jsx)("rect",{width:"20",height:"20",fill:"white"})})})]})})}),(0,b.jsx)("div",{className:p,children:"BREEDS"}),V&&(0,b.jsx)("div",{className:x,children:(0,b.jsxs)("select",{className:v,onChange:D,id:"breeds",children:[(0,b.jsx)("option",{value:"all",children:"All breeds"}),V.map((function(e){return(0,b.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),(0,b.jsx)("div",{className:m,children:(0,b.jsxs)("select",{className:g,defaultValue:"10",id:"limit",onChange:W,children:[(0,b.jsx)("option",{value:"5",children:"Limit: 5"}),(0,b.jsx)("option",{value:"10",children:"Limit: 10"}),(0,b.jsx)("option",{value:"15",children:"Limit: 15"}),(0,b.jsx)("option",{value:"20",children:"Limit: 20"})]})}),(0,b.jsx)("div",{className:y,onClick:function(){return Y(O)},children:(0,b.jsx)("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z",fill:""})})})]}),O&&(0,b.jsx)(_.g,{list:O,isGallery:!1,isAction:!1,limit:G})]})]})})}}}]);
//# sourceMappingURL=550.2c4a6cd5.chunk.js.map