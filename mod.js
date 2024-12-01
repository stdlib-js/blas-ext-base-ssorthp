// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var a=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=t?r+i(n):i(n)+r,a&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=a(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=a(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):n.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,i,a=parseFloat(r.arg);if(!isFinite(a)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);a=r.arg}switch(r.specifier){case"e":case"E":i=a.toExponential(r.precision);break;case"f":case"F":i=a.toFixed(r.precision);break;case"g":case"G":l(a)<1e-4?((e=r.precision)>0&&(e-=1),i=a.toExponential(e)):i=a.toPrecision(r.precision),r.alternate||(i=f.call(i,w,"$1e"),i=f.call(i,v,"e"),i=f.call(i,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,u,"e+0$1"),i=f.call(i,g,"e-0$1"),r.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,y,"$1.e")),a>=0&&r.sign&&(i=r.sign+i),i=r.specifier===p.call(r.specifier)?p.call(i):s.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function A(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,i,n,o,l,s,p,f,u,g,d,y;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,p=0;p<r.length;p++)if(i=r[p],"string"==typeof i)l+=i;else{if(e=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,A(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,A(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!A(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=A(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=b(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(u=i.arg,g=i.width,d=i.padRight,y=void 0,(y=g-u.length)<0?u:u=d?u+m(y):m(y)+u)),l+=i.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,i,a;for(t=[],a=0,i=x.exec(r);i;)(e=r.slice(a,x.lastIndex-i[0].length)).length&&t.push(e),t.push(F(i)),a=x.lastIndex,i=x.exec(r);return(e=r.slice(a)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var T,V=Object.prototype,$=V.toString,O=V.__defineGetter__,U=V.__defineSetter__,C=V.__lookupGetter__,P=V.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,a,n,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(C.call(r,e)||P.call(r,e)?(i=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&O&&O.call(r,e,t.get),o&&U&&U.call(r,e,t.set),r};var R=T;var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var G=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var L,N="function"==typeof Symbol?Symbol:void 0,M="function"==typeof N?N.toStringTag:"";L=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i,a,n;if(null==r)return G.call(r);t=r[M],n=M,e=null!=(a=r)&&W.call(a,n);try{r[M]=void 0}catch(e){return G.call(r)}return i=G.call(r),e?r[M]=t:delete r[M],i}:function(r){return G.call(r)};var X=L,z="function"==typeof Float32Array;var Y=Number.POSITIVE_INFINITY,q="function"==typeof Float32Array?Float32Array:null;var B,D="function"==typeof Float32Array?Float32Array:void 0;B=function(){var r,e,t;if("function"!=typeof q)return!1;try{e=new q([1,3.14,-3.14,5e40]),t=e,r=(z&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Y}catch(e){r=!1}return r}()?D:function(){throw new Error("not implemented")};var H=B,J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(J&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er=Q,tr=new H(1);new er(tr.buffer)[0]=2139095040;var ir=tr[0];function ar(r){return 0===r&&1/r===ir}function nr(r){return r!=r}var or=Math.floor;function cr(r,e,t,i){var a,n,o,c,l,s,p,f,u,g;if(r<=0||0===e)return t;for(e<0&&(i*=-1),a=i<0?(1-r)*i:0,s=r,n=or(r/2);;){if(n>0)p=t[a+(n-=1)*i];else{if(0===(s-=1))return t;p=t[f=a+s*i],t[f]=t[a]}for(o=2*(u=n)+1;o<s&&((g=o+1)<s&&((c=t[a+g*i])>(l=t[a+o*i])||nr(c)||c===l&&ar(c))&&(o+=1),(c=t[a+o*i])>p||nr(c)||c===p&&ar(c));)t[a+u*i]=c,o=2*(u=o)+1;t[a+u*i]=p}}function lr(r,e,t,i,a){var n,o,c,l,s,p,f,u,g;if(r<=0||0===e)return t;for(e<0&&(a-=(r-1)*(i*=-1)),s=r,n=or(r/2);;){if(n>0)p=t[a+(n-=1)*i];else{if(0===(s-=1))return t;p=t[f=a+s*i],t[f]=t[a]}for(o=2*(u=n)+1;o<s&&((g=o+1)<s&&((c=t[a+g*i])>(l=t[a+o*i])||nr(c)||c===l&&ar(c))&&(o+=1),(c=t[a+o*i])>p||nr(c)||c===p&&ar(c));)t[a+u*i]=c,o=2*(u=o)+1;t[a+u*i]=p}}R(cr,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:lr});export{cr as default,lr as ndarray};
//# sourceMappingURL=mod.js.map
