/*! For license information please see 24.93ac07d2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkPetsPawApp=self.webpackChunkPetsPawApp||[]).push([[24],{4067:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(5861),a=r(9439),o=r(2791),i=r(7689),l=r(1087),c={galleryPage:"GalleryPage_galleryPage__96uqP",galleryPage__wrapper:"GalleryPage_galleryPage__wrapper__Kpvq-",galleryPage__navigationBlock:"GalleryPage_galleryPage__navigationBlock__1czhf",galleryPage__backLinkBlock:"GalleryPage_galleryPage__backLinkBlock__Kj1vY",galleryPage__backLink:"GalleryPage_galleryPage__backLink__0eP0I",galleryPage__nameOfPage:"GalleryPage_galleryPage__nameOfPage__ElTsy",upload:"GalleryPage_upload__tkHy1",selectBlock:"GalleryPage_selectBlock__h6w+F",selectBlock__item:"GalleryPage_selectBlock__item__yDEb7",selectOrder:"GalleryPage_selectOrder__6GPLn",selectType:"GalleryPage_selectType__OELDe",selectBreed:"GalleryPage_selectBreed__yRc0A",selectLimit:"GalleryPage_selectLimit__UFz3f",loadBtn:"GalleryPage_loadBtn__0k+6W"},s=r(1243),u=r(5809),h=r(1150),d=r(3110),p={modal:"Modal_modal__DJDMv",modal__wrapper:"Modal_modal__wrapper__9DOJk",closeBtn:"Modal_closeBtn__mlOa4",modal__title:"Modal_modal__title__9kvYK",modal__text:"Modal_modal__text__j4GXz",modal__uploader:"Modal_modal__uploader__I866E",modal__uploader_err:"Modal_modal__uploader_err__zFFRO",uploader__text:"Modal_uploader__text__O2XiX",uploader__content:"Modal_uploader__content__m1xdy",uploader__img:"Modal_uploader__img__xxdrd",uploader__btn:"Modal_uploader__btn__6+p44",loaded:"Modal_loaded__GL9x9",error:"Modal_error__q8-IG",comments:"Modal_comments__nUqix",imageBlock:"Modal_imageBlock__5fnNj"},f=r(184);function v(){v=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(E){c=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),l=new P(a||[]);return n(i,"_invoke",{value:L(e,r,l)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(E){return{type:"throw",arg:E}}}e.wrap=s;var h={};function d(){}function p(){}function f(){}var g={};c(g,o,(function(){return this}));var m=Object.getPrototypeOf,_=m&&m(m(N([])));_&&_!==t&&r.call(_,o)&&(g=_);var y=f.prototype=d.prototype=Object.create(g);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function a(n,o,i,l){var c=u(e[n],e,o);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,l)}))}l(c.arg)}var o;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}})}function L(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return C()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,n(y,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},x(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var g=function(e){var t=e.onClick,r=(0,o.useState)(null),i=(0,a.Z)(r,2),l=i[0],c=i[1],u=(0,o.useState)(),h=(0,a.Z)(u,2),g=h[0],m=h[1],_=(0,o.useState)(!1),y=(0,a.Z)(_,2),x=y[0],w=y[1],L=(0,o.useState)(!1),j=(0,a.Z)(L,2),b=j[0],k=j[1];s.Z.defaults.baseURL="https://api.thecatapi.com/v1";s.Z.defaults.headers.common["x-api-key"]="live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";var P=function(){var e=(0,n.Z)(v().mark((function e(){var t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",l),console.log("formData",t.getAll("file")),e.prev=3,e.next=6,s.Z.post("/images/upload",t,{headers:{"Content-Type":"multipart/form-data"}});case 6:r=e.sent,console.log(r.data),c(null),m(null),w(!0),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0.response.data.message),k(!0);case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}(),N=(0,f.jsxs)("div",{className:b?p.modal__uploader+" "+p.modal__uploader_err:p.modal__uploader,children:[!g&&(0,f.jsxs)("div",{className:p.uploader__content,children:[(0,f.jsxs)("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsx)("path",{d:"M140 40C128.954 40 120 48.9543 120 59.9999C120 71.0456 128.954 79.9999 140 79.9999C151.046 79.9999 160 71.0456 160 59.9999C160 48.9543 151.046 40 140 40Z",fill:"#F8F8F7"}),(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 20C0 8.9543 8.9543 0 20 0H180C191.046 0 200 8.9543 200 20V180C200 181.38 199.86 182.729 199.594 184.031C199.199 185.958 198.528 187.784 197.623 189.465C194.247 195.737 187.621 200 180 200H20C8.95431 200 0 191.046 0 180V20ZM64.6564 41.8952L60 37.2387L13.3333 83.9054V20C13.3333 16.3181 16.3181 13.3333 20 13.3333H180C183.682 13.3333 186.667 16.3181 186.667 20V133.333H156.095L64.7145 41.9526C64.6953 41.9333 64.6759 41.9142 64.6564 41.8952Z",fill:"#F8F8F7"})]}),(0,f.jsxs)("p",{className:p.uploader__text,children:[(0,f.jsx)("span",{children:"Drag here"})," your file or ",(0,f.jsx)("span",{children:"Click here"})," to upload"]})]}),g&&(0,f.jsxs)("div",{className:p.uploader__content,children:[(0,f.jsx)("img",{className:p.uploader__img,src:g,alt:""}),(0,f.jsxs)("p",{className:p.comments,children:["Image File Name: ",l.name]})]})]});return(0,f.jsx)("div",{className:p.modal__background,children:(0,f.jsx)("div",{className:p.modal,children:(0,f.jsxs)("div",{className:p.modal__wrapper,children:[(0,f.jsx)("button",{className:p.closeBtn,onClick:t,children:(0,f.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z",fill:""})})}),(0,f.jsx)("h1",{className:p.modal__title,children:"Upload a .jpg or .png Cat Image"}),(0,f.jsxs)("p",{className:p.modal__text,children:["Any uploads must comply with the ",(0,f.jsx)("span",{children:"upload guidelines"})," or face deletion."]}),(0,f.jsx)(d.b,{classes:"".concat(p.modal__uploader),children:N,handleChange:function(e){c(null),w(!1),k(!1);var t=function(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result),m(n.result)},n.onerror=function(e){return r(e)}}))},r=function(){var e=(0,n.Z)(v().mark((function e(r){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();r(e),c(e)},name:"file",types:["JPG","PNG","GIF"]}),!l&&(0,f.jsx)("p",{className:p.comments,children:"No file selected"}),g&&!b&&(0,f.jsx)("button",{className:p.uploader__btn,onClick:P,children:"UPLOAD PHOTO"}),x&&(0,f.jsxs)("div",{className:p.loaded,children:[(0,f.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z",fill:"#97EAB9"})}),(0,f.jsx)("p",{className:p.comments,children:"Thanks for the Upload - Cat found!"})]}),b&&(0,f.jsxs)("div",{className:p.error,children:[(0,f.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z",fill:"#FF868E"})}),(0,f.jsx)("p",{className:p.comments,children:"No Cat found - try a different one"})]})]})})})};function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(E){c=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),l=new P(a||[]);return n(i,"_invoke",{value:L(e,r,l)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(E){return{type:"throw",arg:E}}}e.wrap=s;var h={};function d(){}function p(){}function f(){}var v={};c(v,o,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(N([])));_&&_!==t&&r.call(_,o)&&(v=_);var y=f.prototype=d.prototype=Object.create(v);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function a(n,o,i,l){var c=u(e[n],e,o);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,l)}))}l(c.arg)}var o;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}})}function L(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return C()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,n(y,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},x(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var _=function(){var e,t;s.Z.defaults.baseURL="https://api.thecatapi.com/v1";s.Z.defaults.headers.common["x-api-key"]="live_7Rzkwjrh3OQ8HzQ07RaEAqL8UQr3UfdtzTp9O9T9vVaFIktzDSMnFjrOtFmrW5R8";var r=(0,i.TH)(),d=(0,o.useRef)(null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),p=(0,o.useState)(!1),v=(0,a.Z)(p,2),_=v[0],y=v[1],x=(0,o.useState)(),w=(0,a.Z)(x,2),L=w[0],j=w[1],b=(0,o.useState)(),k=(0,a.Z)(b,2),P=k[0],N=k[1],C=(0,o.useState)("RAND"),E=(0,a.Z)(C,2),O=E[0],Z=E[1],G=(0,o.useState)("jpg,png"),B=(0,a.Z)(G,2),F=B[0],M=B[1],S=(0,o.useState)(""),R=(0,a.Z)(S,2),A=R[0],T=R[1],D=(0,o.useState)(5),H=(0,a.Z)(D,2),I=H[0],U=H[1];(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(m().mark((function e(){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("/breeds");case 3:t=e.sent,j(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}();var t=function(){var e=(0,n.Z)(m().mark((function e(){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/images/search",{params:{limit:5,order:"RAND",page:5,mime_types:"jpg,png,gif"}});case 3:t=e.sent,N(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();t()}),[]);var V=function(){var e=(0,n.Z)(m().mark((function e(t,r,n,a){var o,i;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=13;break}return e.prev=1,e.next=4,s.Z.get("/images/search",{params:{limit:I,order:r,page:n,mime_types:a}});case 4:o=e.sent,N(o.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:e.next=17;break;case 13:return e.next=15,s.Z.get("/images/search",{params:{limit:I,breed_ids:t,order:r,page:n,mime_types:a}});case 15:i=e.sent,N(i.data);case 17:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r,n,a){return e.apply(this,arguments)}}(),z=function(){var e=(0,n.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,V(A,O,I,F);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:c.galleryPage,children:[(0,f.jsx)(u.a,{}),(0,f.jsxs)("div",{className:c.galleryPage__wrapper,children:[(0,f.jsxs)("div",{className:c.galleryPage__navigationBlock,children:[(0,f.jsx)("div",{className:c.galleryPage__backLinkBlock,children:(0,f.jsx)(l.rU,{to:d.current,className:c.galleryPage__backLink,children:(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[(0,f.jsx)("g",{clipPath:"url(#clip0_1_1332)",children:(0,f.jsx)("path",{d:"M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z",fill:""})}),(0,f.jsx)("defs",{children:(0,f.jsx)("clipPath",{id:"clip0_1_1332",children:(0,f.jsx)("rect",{width:"20",height:"20",fill:"white"})})})]})})}),(0,f.jsx)("div",{className:c.galleryPage__nameOfPage,children:"GALLERY"}),(0,f.jsxs)("div",{className:c.upload,onClick:function(){return y(!0)},children:[(0,f.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z",fill:""})}),"UPLOAD"]})]}),_&&(0,f.jsx)(g,{onClick:function(){return y(!1)}}),(0,f.jsx)("form",{onSubmit:z,children:(0,f.jsxs)("div",{className:c.selectBlock,children:[(0,f.jsxs)("div",{className:c.selectBlock__item,children:[(0,f.jsxs)("div",{className:c.selectBlock__wrapper,children:[(0,f.jsx)("h6",{children:"Order"}),(0,f.jsxs)("select",{className:c.selectOrder,onChange:function(e){return Z(e.target.value)},children:[(0,f.jsx)("option",{value:"RAND",children:"Random"}),(0,f.jsx)("option",{value:"DESC",children:"Desc"}),(0,f.jsx)("option",{value:"ASC",children:"Asc"})]})]}),(0,f.jsxs)("div",{className:c.selectBlock__wrapper,children:[(0,f.jsx)("h6",{children:"Type"}),(0,f.jsxs)("select",{className:c.selectType,onChange:function(e){return M(e.target.value)},children:[(0,f.jsx)("option",{value:"jpg,png,gif",children:"All"}),(0,f.jsx)("option",{value:"jpg,png",children:"Static"}),(0,f.jsx)("option",{value:"gif",children:"Animated"})]})]})]}),(0,f.jsxs)("div",{className:c.selectBlock__item,children:[L&&(0,f.jsxs)("div",{className:c.selectBlock__wrapper,children:[(0,f.jsx)("h6",{children:"Breed"}),(0,f.jsxs)("select",{className:c.selectBreed,onChange:function(e){return T(e.target.value)},id:"breeds",children:[(0,f.jsx)("option",{value:"all",children:"None"}),L.map((function(e){return(0,f.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),(0,f.jsxs)("div",{className:c.selectBlock__wrapper,children:[(0,f.jsx)("h6",{children:"Limit"}),(0,f.jsxs)("select",{className:c.selectLimit,onChange:function(e){return U(e.target.value)},children:[(0,f.jsx)("option",{value:"5",children:"5 items per page"}),(0,f.jsx)("option",{value:"10",children:"10 items per page"}),(0,f.jsx)("option",{value:"15",children:"15 items per page"}),(0,f.jsx)("option",{value:"20",children:"20 items per page"})]})]}),(0,f.jsx)("button",{type:"submit",className:c.loadBtn,children:(0,f.jsx)("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z",fill:""})})})]})]})}),P&&(0,f.jsx)(h.g,{list:P,isGallery:!0,isAction:!1,limit:I})]})]})}}}]);
//# sourceMappingURL=24.93ac07d2.chunk.js.map