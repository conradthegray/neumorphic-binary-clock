(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Zttt"),c=n("wtQ5");var u=function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},l=(n("a1Th"),n("Btvt"),n("KKXr"),n("xfY5"),n("L7d9"),function(e){var t,n,r=e.digit;return a.a.createElement("div",{className:"BinaryDigit"},(t=r,n=Number(t).toString(2),new Array(4-n.length+1).join(0)+n).split("").map((function(e,t){return a.a.createElement("div",{className:"BinaryDigit-digit "+("1"===e?"BinaryDigit-digit-on":"BinaryDigit-digit-off"),key:"binary-digit-"+t})})))}),o=(n("QaLj"),function(e){var t,n=e.value;return a.a.createElement("div",{className:"BinaryBlock"},(t=n,t<=9?"0"+t:t).toString().split("").map((function(e,t){return a.a.createElement(l,{digit:e,key:"binary-digit-"+t})})))}),s=(n("iPG0"),function(){var e=new Date;return{hour:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}}),f=function(){var e=Object(r.useState)(s()),t=e[0],n=e[1];return u((function(){n(s())}),1e3),a.a.createElement("div",{className:"BinaryClock"},a.a.createElement(o,{value:t.hour}),a.a.createElement(o,{value:t.minutes}),a.a.createElement(o,{value:t.seconds}))},m=n("Fzi1"),E=n("Rnav"),N=n("aAma");t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(c.a,{title:"Neumorphic Binary Clock #Neumorphism"}),a.a.createElement(N.a,null,a.a.createElement(E.a,null),a.a.createElement(f,null),a.a.createElement(m.a,null)))}},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),c=n("Xbzi"),u=n("apmT"),l=n("eeVq"),o=n("kJMx").f,s=n("EemH").f,f=n("hswa").f,m=n("qncB").trim,E=r.Number,N=E,g=E.prototype,v="Number"==i(n("Kuth")(g)),d="trim"in String.prototype,p=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=d?t.trim():m(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var c,l=t.slice(2),o=0,s=l.length;o<s;o++)if((c=l.charCodeAt(o))<48||c>a)return NaN;return parseInt(l,r)}}return+t};if(!E(" 0o1")||!E("0b1")||E("+0x1")){E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(v?l((function(){g.valueOf.call(n)})):"Number"!=i(n))?c(new N(p(t)),n,E):p(t)};for(var I,h=n("nh4g")?o(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;h.length>b;b++)a(N,I=h[b])&&!a(E,I)&&f(E,I,s(N,I));E.prototype=g,g.constructor=E,n("KroJ")(r,"Number",E)}}}]);
//# sourceMappingURL=component---src-pages-index-js-08159b086e84639b4299.js.map