"use strict";var h=function(i,v){return function(){return v||i((v={exports:{}}).exports,v),v.exports}};var y=h(function(K,w){
var m=require('@stdlib/math-base-assert-is-positive-zerof/dist'),k=require('@stdlib/math-base-assert-is-nanf/dist'),Z=require('@stdlib/math-base-special-floor/dist');function g(i,v,r,e,u){var q,n,a,o,s,p,l,t,c;if(i<=0||v===0)return r;for(v<0&&(e*=-1,u-=(i-1)*e),s=i,q=Z(i/2);;){if(q>0)q-=1,p=r[u+q*e];else{if(s-=1,s===0)return r;l=u+s*e,p=r[l],r[l]=r[u]}for(t=q,n=t*2+1;n<s&&(c=n+1,c<s&&(a=r[u+c*e],o=r[u+n*e],(a>o||k(a)||a===o&&m(a))&&(n+=1)),a=r[u+n*e],a>p||k(a)||a===p&&m(a));)r[u+t*e]=a,t=n,n=t*2+1;r[u+t*e]=p}}w.exports=g
});var _=h(function(L,R){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=y();function B(i,v,r,e){return A(i,v,r,e,z(i,e))}R.exports=B
});var O=h(function(M,E){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),D=y();C(b,"ndarray",D);E.exports=b
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=O(),j,P=G(F(__dirname,"./native.js"));H(P)?j=I:j=P;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
