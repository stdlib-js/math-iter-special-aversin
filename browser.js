// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,v,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,u,l,f,s,p,g,d,b;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,f=0;f<r.length;f++)if("string"==typeof(n=r[f]))u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),u+=n.arg||"",l+=1}return u}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,o;for(t=[],o=0,n=O.exec(r);n;)(e=r.slice(o,O.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=O.lastIndex,n=O.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var A,F=Object.prototype,N=F.toString,P=F.__defineGetter__,$=F.__defineSetter__,C=F.__lookupGetter__,I=F.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(r,e)||I.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var B=A;function R(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L=/./;function G(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&U.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",D=M()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[z],e=X(r,z);try{r[z]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[z]=t:delete r[z],n}:function(r){return W.call(r)},H=Boolean,J=Boolean.prototype.toString,K=M();function Q(r){return"object"==typeof r&&(r instanceof H||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function Y(r){return G(r)||Q(r)}R(Y,"isPrimitive",G),R(Y,"isObject",Q);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!G(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(tr)return tr;if(rr)return rr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;R(ar,"REGEXP",cr);var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function lr(r){return null!==r&&"object"==typeof r}function fr(r){var e,t,n,o;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=cr.exec(n.toString()))return e[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}R(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lr));var sr="function"==typeof L||"object"==typeof ir||"function"==typeof or?function(r){return fr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?fr(r).toLowerCase():e};function pr(r){return"function"===sr(r)}function gr(r){return"number"==typeof r}var dr=Number,br=dr.prototype.toString,yr=M();function vr(r){return"object"==typeof r&&(r instanceof dr||(yr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function hr(r){return gr(r)||vr(r)}R(hr,"isPrimitive",gr),R(hr,"isObject",vr);var wr,mr="function"==typeof q&&"symbol"==typeof q("foo")&&X(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,jr=Object,_r=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=wr,Sr=Object.prototype;function xr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!ur(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),Er(r))}(r),!e||!X(r,"constructor")&&X(e,"constructor")&&pr(e.constructor)&&"[object Function]"===D(e.constructor)&&X(e,"isPrototypeOf")&&pr(e.isPrototypeOf)&&(e===Sr||function(r){var e;for(e in r)if(!X(r,e))return!1;return!0}(r)))}function Or(r,e,t){var n,o,i,a,c,u;if(u=typeof(c=r),null===c||"object"!==u&&"function"!==u||!pr(c.next))throw new TypeError(V("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(e))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return xr(e)?(X(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return R(o={},"next",(function(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:gr(t.value)?e(t.value):n.invalid,done:!1}})),R(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&R(o,mr,(function(){return Or(r[mr](),e,n)})),o}function kr(r){return r!=r}var Tr=Math.sqrt,Vr=.7853981633974483,Ar=6123233995736766e-32;function Fr(r){var e,t,n,o,i;if(kr(r))return NaN;if(r>0?n=r:(e=!0,n=-r),n>1)return NaN;if(n>.625)o=(t=1-n)*function(r){var e,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(e=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(e=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),e/t)}(t),t=Tr(t+t),i=Vr-t,i-=t=t*o-Ar,i+=Vr;else{if(n<1e-8)return r;i=(t=n*n)*function(r){var e,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(e=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(e=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),e/t)}(t),i=n*i+n}return e?-i:i}var Nr=6123233995736766e-32;function Pr(r){return function(r){var e;return kr(r)||r<-1||r>1?NaN:r>.5?2*Fr(Tr(.5-.5*r)):(e=Vr-Fr(r),e+=Nr,e+=Vr)}(1-r)}return function(r){return Or(r,Pr)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAversin=e();
//# sourceMappingURL=browser.js.map
