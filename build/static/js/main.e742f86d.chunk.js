(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(t,e,n){t.exports=n.p+"static/media/message.75f5a918.svg"},119:function(t,e,n){t.exports=n.p+"static/media/exit.dbfb607c.svg"},122:function(t,e,n){t.exports=n(238)},129:function(t,e,n){},130:function(t,e,n){},134:function(t,e,n){},135:function(t,e,n){},136:function(t,e){},142:function(t,e){},144:function(t,e){},155:function(t,e){},157:function(t,e){},182:function(t,e){},184:function(t,e){},185:function(t,e){},190:function(t,e){},192:function(t,e){},198:function(t,e){},200:function(t,e){},219:function(t,e){},231:function(t,e){},234:function(t,e){},238:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),a=n(117),i=n(10),c=n(118),u=n.n(c),l=n(119),s=n.n(l);n(129);var f=function(t){var e=t.status,n=t.handle,r=o.a.createElement("img",{src:e?s.a:u.a,alt:"Icono de chatbot"}),a=o.a.createElement("span",{className:"tooltip"},e?"Salir":"Chatbot");return o.a.createElement("button",{className:"buttonChat",onClick:n},r,a)},h=n(63),p=n(120),v=n(240);n(130);function m(){m=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),c=new P(r||[]);return o(i,"_invoke",{value:k(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function g(){}function b(){}function w(){}var E={};l(E,i,function(){return this});var x=Object.getPrototypeOf,L=x&&x(x(F([])));L&&L!==n&&r.call(L,i)&&(E=L);var O=w.prototype=g.prototype=Object.create(E);function j(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function N(t,e){function n(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(s).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e(function(e,o){n(t,r,e,o)})}return a=a?a.then(o,o):o()}})}function k(e,n,r){var o=h;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=_(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?d:p,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function _(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},j(N.prototype),l(N.prototype,c,function(){return this}),e.AsyncIterator=N,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new N(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(O),l(O,u,"Generator"),l(O,i,function(){return this}),l(O,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=F,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}var d=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),u=Object(i.a)(c,2),l=u[0],s=u[1],f=function(){var t=Object(p.a)(m().mark(function t(){var e,n,r;return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""===l){t.next=16;break}return t.prev=1,a(function(t){return[].concat(Object(h.a)(t),[{text:l,isUser:!0}])}),t.next=5,v.a.post("http://localhost:4000/api/knowledge/search",{question:l});case 5:e=t.sent,n=e.data,r={text:n,isUser:!1},s(""),a(function(t){return[].concat(Object(h.a)(t),[r])}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}},t,null,[[1,13]])}));return function(){return t.apply(this,arguments)}}(),d=n&&o.a.createElement("div",{className:"message incoming"},o.a.createElement("p",null,"\xa1Bienvenido al chatbot!"));return o.a.createElement("div",{className:"chat-card"},o.a.createElement("div",{className:"chat-header"},o.a.createElement("h2",null,"Chatbot")),o.a.createElement("div",{className:"chat-body"},d,n.map(function(t,e){return o.a.createElement("div",{key:e,className:t.isUser?"message outgoing":"message incoming"},o.a.createElement("p",null,t.text))})),o.a.createElement("div",{className:"chat-footer"},o.a.createElement("input",{placeholder:"Escribe tu mensaje",value:l,onChange:function(t){s(t.target.value)},type:"text"}),o.a.createElement("button",{onClick:f},"Enviar")))};n(134);var y=function(){var t=Object(r.useState)(!1),e=Object(i.a)(t,2),n=e[0],a=e[1],c=n&&o.a.createElement(d,null);return o.a.createElement("div",{className:"chatbot"},o.a.createElement(f,{status:n,handle:function(){a(!n)}}),c)},g=(n(135),n(121));n.n(g).a.config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}));var b=function(){return o.a.createElement("main",{className:"app-container"},o.a.createElement(y,null))},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,241)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})};Object(a.createRoot)(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),w()}},[[122,1,2]]]);
//# sourceMappingURL=main.e742f86d.chunk.js.map