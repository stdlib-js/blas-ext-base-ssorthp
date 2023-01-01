// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var u,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(l.call(t,r)||f.call(t,r)?(u=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=u):t[r]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var u,c=t,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"";u=y&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n,o,a;if(null==t)return p.call(t);e=t[d],a=d,r=null!=(o=t)&&b.call(o,a);try{t[d]=void 0}catch(r){return p.call(t)}return n=p.call(t),r?t[d]=e:delete t[d],n}:function(t){return p.call(t)};var _,s=u,v="function"==typeof Float32Array,m=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null,h="function"==typeof Float32Array?Float32Array:void 0;_=function(){var t,r,e;if("function"!=typeof w)return!1;try{r=new w([1,3.14,-3.14,5e40]),e=r,t=(v&&e instanceof Float32Array||"[object Float32Array]"===s(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===m}catch(r){t=!1}return t}()?h:function(){throw new Error("not implemented")};var A,g=_,j="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,F="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var t,r,e;if("function"!=typeof S)return!1;try{r=new S(r=[1,3.14,-3.14,4294967296,4294967297]),e=r,t=(j&&e instanceof Uint32Array||"[object Uint32Array]"===s(e))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?F:function(){throw new Error("not implemented")};var O=A,T=new g(1);new O(T.buffer)[0]=2139095040;var U=T[0];function E(t){return 0===t&&1/t===U}function P(t){return t!=t}var I=Math.floor;function x(t,r,e,n){var o,a,i,l,f,u,c,y,p,b;if(t<=0||0===r)return e;for(r<0&&(n*=-1),o=n<0?(1-t)*n:0,u=t,a=I(t/2);;){if(a>0)c=e[o+(a-=1)*n];else{if(0==(u-=1))return e;c=e[y=o+u*n],e[y]=e[o]}for(i=2*(p=a)+1;i<u&&((b=i+1)<u&&((l=e[o+b*n])>(f=e[o+i*n])||P(l)||l===f&&E(l))&&(i+=1),(l=e[o+i*n])>c||P(l)||l===c&&E(l));)e[o+p*n]=l,i=2*(p=i)+1;e[o+p*n]=c}}return c(x,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(t,r,e,n,o){var a,i,l,f,u,c,y,p,b;if(t<=0||0===r)return e;for(r<0&&(o-=(t-1)*(n*=-1)),u=t,a=I(t/2);;){if(a>0)c=e[o+(a-=1)*n];else{if(0==(u-=1))return e;c=e[y=o+u*n],e[y]=e[o]}for(i=2*(p=a)+1;i<u&&((b=i+1)<u&&((l=e[o+b*n])>(f=e[o+i*n])||P(l)||l===f&&E(l))&&(i+=1),(l=e[o+i*n])>c||P(l)||l===c&&E(l));)e[o+p*n]=l,i=2*(p=i)+1;e[o+p*n]=c}}}),x},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).ssorthp=r();
//# sourceMappingURL=index.js.map
