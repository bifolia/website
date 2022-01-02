/*! For license information please see 031b7757272d24884c94137c261a50764f859066-91095ef04b1e64048702.js.LICENSE.txt */
(self.webpackChunkbifolia=self.webpackChunkbifolia||[]).push([[149],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!o(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!o(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!o(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},6840:function(e,t,n){"use strict";n.d(t,{A:function(){return w}});var r,a=n(7294),o=n(5900),i=n.n(o),c="allowedCookies",u=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,a.useEffect)((function(){return n("true"!==localStorage.getItem(c))}),[n]);var r=(0,a.useCallback)((function(){localStorage.setItem(c,"true"),n(!1)}),[n]);return a.createElement("div",{className:i()("AnalyticsConsent",{active:t})},"Wir nutzen Cookies, um sicherzustellen, dass Du die bestmögliche Erfahrung auf unserer Seite machst. Nutzt Du unsere Seite weiter, nehmen wir an, dass Du damit einverstanden bist.",a.createElement("span",{className:"AnalyticsConsent__action"},a.createElement("span",{className:"link",onClick:r},"Einverstanden"),a.createElement("a",{href:"/datenschutz",target:"_blank"},"Datenschutzerklärung")))},l=n(5444),s=function(){var e=(0,l.useStaticQuery)("3983591273").strapiFooter.data.attributes,t=e.email,n=e.tel,r=e.address,o=e.tax_id,i=e.social;return a.createElement("footer",{className:"Footer"},a.createElement("div",{className:"Footer__copyright"},"© bifolia GbR ",(new Date).getFullYear()),a.createElement("div",{className:"Footer__address"},a.createElement("h4",null,r.title),a.createElement("p",null,r.line_1,a.createElement("br",null),r.line_2&&a.createElement(a.Fragment,null,r.line_2,a.createElement("br",null)),r.line_3&&a.createElement(a.Fragment,null,r.line_3,a.createElement("br",null)),r.code," ",r.city,a.createElement("br",null)),o&&a.createElement("p",null,"USt-IdNr. ",o)),a.createElement("div",{className:"Footer__contact"},a.createElement("h4",null,"Kontakt"),a.createElement("p",null,"Telefon ",n,a.createElement("br",null),"Email ",a.createElement("a",{href:"mailto:"+t},t),a.createElement("br",null)),i&&i.length>0&&a.createElement("p",null,i.map((function(e,t){var n=e.title,r=e.url;return a.createElement("span",{key:t},a.createElement("a",{href:r,target:"_blank",rel:"noreferrer"},n),a.createElement("br",null))})))))},f=function(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24",className:"Arrow"},a.createElement("g",{strokeLinecap:"square",fill:"none",stroke:"#0D0D0D",strokeLinejoin:"miter",className:"nc-icon-wrapper",strokeMiterlimit:"10"},a.createElement("line",{"data-cap":"butt",x1:"2",y1:"12",x2:"22",y2:"12",strokeLinecap:"butt",stroke:"#0D0D0D"}),a.createElement("polyline",{points:"15,5 22,12 15,19 "})))},p=function(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1378.512 379.739",className:"Logo"},a.createElement("path",{id:"Path_4","data-name":"Path 4",d:"M35.308-126.977q0-7.83.245-14.925t1.223-16.883q-8.808.489-17.372.979t-17.372.979v-20.553q21.532,0,33.521-1.957t18.106-4.894a34.6,34.6,0,0,0,9.542-6.362H77.393V-44.765a96.3,96.3,0,0,1,32.542-21.287,109.733,109.733,0,0,1,41.35-7.585q31.319,0,56.52,15.17T247.688-15.4q14.681,27.893,14.681,66.063,0,41.6-18.106,72.18t-46.978,47.223A122.4,122.4,0,0,1,135.137,186.7q-16.638,0-36.457-6.117T63.2,156.849L51.457,178.87H34.329ZM77.393,102.041q0,25.936,8.319,39.882t21.532,19.33a73.218,73.218,0,0,0,27.893,5.383q23.489,0,40.616-13.213t26.67-36.457q9.542-23.244,9.542-54.074,0-33.276-8.319-58.478T178.689-35.223Q162.051-49.659,136.6-49.659a73.828,73.828,0,0,0-32.053,7.585A84.2,84.2,0,0,0,77.393-21.766Zm227.061,62.148q15.17,0,21.042-7.585t6.851-21.042q.979-13.457.979-31.074V-7.085q0-7.83.489-14.925t1.468-16.883q-8.808.489-17.372.979t-17.372.979V-57.489q21.532,0,33.276-1.957t17.861-4.894a34.6,34.6,0,0,0,9.542-6.362H375.41V127q0,9.787-.245,17.372a112.5,112.5,0,0,1-1.713,15.9q7.83-.489,15.415-.734t15.415-.734V178.87H304.453Zm47.467-283.336q-10.276,0-18.106-8.319t-7.83-20.553a29.207,29.207,0,0,1,8.074-20.8q8.074-8.564,18.351-8.564a24.153,24.153,0,0,1,18.84,8.564,30.267,30.267,0,0,1,7.585,20.8,28.364,28.364,0,0,1-8.074,20.553Q362.686-119.147,351.921-119.147ZM472.791-76.084q0-54.318,19.819-85.637t68.265-31.319a77.791,77.791,0,0,1,22.755,3.67,53.5,53.5,0,0,1,20.8,11.745q8.808,8.074,8.808,20.8a24.121,24.121,0,0,1-5.138,15.659q-5.138,6.362-14.925,6.362-11.744.489-16.393-7.1T572.13-154.87a35.662,35.662,0,0,1,.489-5.872,27.992,27.992,0,0,1,1.958-6.362,19.052,19.052,0,0,0-9.542-6.362,37.815,37.815,0,0,0-11.5-1.957q-15.17,0-23.489,8.808A49.487,49.487,0,0,0,518.3-144.594a108.757,108.757,0,0,0-3.425,27.4v51.382h66.063v19.085l-66.063,1.468L515.365,127q0,9.787-.245,17.372a112.522,112.522,0,0,1-1.713,15.9q7.83-.489,15.415-.734t15.415-.734V178.87H444.409V164.189q15.17,0,21.042-7.585t6.851-21.042q.979-13.457.979-31.074l-.489-149.253-40.127.979V-65.808h40.127ZM726.277,186.7q-34.255,0-62.148-15.9a118.311,118.311,0,0,1-44.287-44.042Q603.449,98.615,603.449,62.4q0-38.659,16.149-69.488T663.64-55.776q27.893-17.861,62.637-17.861,34.255,0,62.148,16.393a124.578,124.578,0,0,1,44.531,44.287q16.638,27.893,16.638,63.616,0,37.68-16.393,68.754t-44.287,49.18Q761.021,186.7,726.277,186.7Zm3.915-19.574q25.936,0,41.106-14.681t21.776-38.17A181.723,181.723,0,0,0,799.68,64.85a225.3,225.3,0,0,0-4.159-43.308,147.677,147.677,0,0,0-12.968-38.659Q773.744-34.489,759.8-44.765T726.277-55.042q-25.447,0-41.6,14.681T660.948-2.192a163.093,163.093,0,0,0-7.585,50.4,195.267,195.267,0,0,0,8.319,57.5Q670,132.87,687.129,150T730.192,167.125Zm156.1-2.936q15.17,0,21.042-7.585t6.851-21.042q.979-13.457.979-31.074V-126.977q0-7.83.245-14.925t1.223-16.883q-8.808.489-17.372.979t-17.372.979v-20.553q21.532,0,33.521-1.957t18.106-4.894a34.6,34.6,0,0,0,9.542-6.362h14.191L957.742,127q0,9.787-.489,17.372a145.619,145.619,0,0,1-1.957,15.9q7.83-.489,15.415-.734t15.415-.734V178.87H886.3Zm138,0q15.17,0,21.042-7.585t6.851-21.042q.979-13.457.979-31.074V-7.085q0-7.83.49-14.925t1.468-16.883q-8.808.489-17.372.979t-17.372.979V-57.489q21.532,0,33.276-1.957t17.861-4.894a34.6,34.6,0,0,0,9.542-6.362h14.191V127q0,9.787-.245,17.372a112.513,112.513,0,0,1-1.713,15.9q7.83-.489,15.415-.734t15.415-.734V178.87h-99.828Zm47.468-283.336q-10.277,0-18.106-8.319t-7.83-20.553a29.208,29.208,0,0,1,8.075-20.8q8.074-8.564,18.351-8.564a24.153,24.153,0,0,1,18.84,8.564,30.266,30.266,0,0,1,7.585,20.8,28.363,28.363,0,0,1-8.074,20.553Q1082.528-119.147,1071.762-119.147ZM1310.567,178.87q-1.468-8.319-1.958-14.681t-1.468-13.213a136.02,136.02,0,0,1-35.968,26.18,91.117,91.117,0,0,1-40.861,9.542q-37.191,0-55.3-16.883t-18.106-41.35q0-22.51,13.947-38.9t36.212-26.915a205.594,205.594,0,0,1,48.446-15.659,238.007,238.007,0,0,1,50.648-4.649V12a169.841,169.841,0,0,0-2.936-32.3q-2.936-15.17-12.723-24.957t-31.319-10.276a72.3,72.3,0,0,0-29.117,5.383,39.273,39.273,0,0,0-21.776,20.064,18.766,18.766,0,0,1,5.138,9.053,41.37,41.37,0,0,1,1.223,9.542q0,5.872-4.894,13.457t-17.127,7.1q-10.276,0-15.659-7.1a27.13,27.13,0,0,1-5.383-16.883q0-16.638,12.479-29.851t34.5-21.042q22.021-7.83,49.914-7.83,41.106,0,60.68,21.776t19.085,68.754V53.35q0,18.351-.245,36.7T1347.758,127q0,7.83-.489,15.659t-1.468,17.617q8.808-.489,17.372-.979t17.372-.979V178.87Zm-4.4-119.892a210.161,210.161,0,0,0-34.989,4.16,143.818,143.818,0,0,0-33.765,11.01,69.377,69.377,0,0,0-24.957,19.33q-9.543,11.989-9.053,29.117.979,18.106,11.989,27.159t26.18,9.053q20.064,0,34.989-7.585a130.486,130.486,0,0,0,29.606-21.287q-.49-5.383-.49-11.745V104.977q0-2.447.245-15.659T1306.163,58.978Z",transform:"translate(-2.032 193.04)",fill:"#0d0d0d"}))},d=n(7006);var m=function(){if(void 0!==r)return r;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),r=e,e},h=a.useLayoutEffect,y=function(e){var t=(0,a.useRef)(e);return h((function(){t.current=e})),t},v="touchstart",b=["mousedown",v],g=document;var T=function(e,t,n){var r=(void 0===n?{}:n).document,o=void 0===r?g:r,i=y(t);(0,a.useEffect)((function(){if(t){var n=function(t){e.current&&i.current&&!e.current.contains(t.target)&&i.current(t)};return b.forEach((function(e){o.addEventListener(e,n,function(e){if(e===v&&m())return{passive:!0}}(e))})),function(){b.forEach((function(e){o.removeEventListener(e,n)}))}}}),[!t])},E=function(e){var t=e.page,n=(0,a.useState)(!1),r=n[0],o=n[1],c=(0,a.useCallback)((function(){return o(!1)}),[o]),u=(0,a.useCallback)((function(){return o(!r)}),[r,o]),s=(0,a.useState)(!0),m=s[0],h=s[1];(0,a.useEffect)((function(){var e=function(){return h(window.scrollY<=50)};return e(),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[h]);var y=(0,a.useState)(),v=y[0],b=y[1],g=(0,a.useState)(!1),E=g[0],w=g[1];(0,a.useEffect)((function(){var e=function(){b(window.innerWidth>=1e3&&(r||m)),setTimeout((function(){return w(!0)}),0)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[r,m,b,w]);var A=(0,a.useRef)(null);return T(A,c),a.createElement("header",{className:i()("Header",{expanded:r,peek:m})},a.createElement("div",{className:"Header__backdrop"}),a.createElement("div",{className:i()("Header__logo",{pad:v,transition:E})},a.createElement(l.Link,{to:"/"},a.createElement(p,null))),a.createElement("div",{className:"Header__menu",ref:A},a.createElement("span",{className:"Header__menu__toggle link",onClick:u},a.createElement(f,null)),a.createElement("div",{className:"Header__menu__wrapper"},a.createElement(l.Link,{to:"/raumgestaltung",className:i()({active:t===d.T3.Raumgestaltung}),onClick:c},"Raumgestaltung"),a.createElement("br",null),a.createElement(l.Link,{to:"/pflanzplanung",className:i()({active:t===d.T3.Pflanzplanung}),onClick:c},"Pflanzplanung"),a.createElement("br",null),a.createElement(l.Link,{to:"/gartenentwicklung",className:i()({active:t===d.T3.Gartenentwicklung}),onClick:c},"Gartenentwicklung"),a.createElement("br",null),a.createElement("div",{className:"Header__menu__wrapper__expanded"},a.createElement(l.Link,{to:"/wir",className:i()({active:t===d.T3.Wir}),onClick:c},"Wir"),a.createElement("br",null),a.createElement(l.Link,{to:"/projekte",className:i()({active:t===d.T3.Projekte}),onClick:c},"Projekte"),a.createElement("br",null),a.createElement(l.Link,{to:"/journal",className:i()({active:t===d.T3.Journal}),onClick:c},"Journal"),a.createElement("br",null)))))},w=function(e){var t=e.page,n=e.className,r=e.children;return a.createElement("div",{className:i()("Layout",n)},a.createElement(u,null),a.createElement(E,{page:t}),a.createElement("main",null,r),a.createElement(s,null))}},280:function(e,t,n){"use strict";n.d(t,{H:function(){return ye}});var r,a,o,i,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),f=n(2993),p=n.n(f),d=n(7294),m=n(6494),h=n.n(m),y="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),E="cssText",w="href",A="http-equiv",C="innerHTML",k="itemprop",S="name",q="property",O="rel",L="src",j="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",N="defer",x="encodeSpecialCharacters",I="onChangeClientState",M="titleTemplate",R=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),H=[g.NOSCRIPT,g.SCRIPT,g.STYLE],D="data-react-helmet",V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=$(e,g.TITLE),n=$(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,P);return t||r||void 0},Q=function(e){return $(e,I)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===O&&"canonical"===e[n].toLowerCase()||u===O&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==E&&c!==k||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=h()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,a),ce(f,p);var d={baseTag:le(g.BASE,n),linkTags:le(g.LINK,o),metaTags:le(g.META,i),noscriptTags:le(g.NOSCRIPT,c),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(D):n.getAttribute(D)!==i.join(",")&&n.setAttribute(D,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(D,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,a=fe(n,r),[d.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(v,a,r),link:pe(g.LINK,o,r),meta:pe(g.META,i,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,u,r),style:pe(g.STYLE,l,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},me=s()((function(e){return{baseTag:G([w,j],e),bodyAttributes:K(y,e),defer:$(e,N),encode:$(e,x),htmlAttributes:K(v,e),linkTags:J(g.LINK,[O,w],e),metaTags:J(g.META,[S,T,A,q,k],e),noscriptTags:J(g.NOSCRIPT,[C],e),onChangeClientState:Q(e),scriptTags:J(g.SCRIPT,[L,C],e),styleTags:J(g.STYLE,[E],e),title:W(e),titleAttributes:K(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return z(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return B({},a,((t={})[r.type]=i,t.titleAttributes=B({},o),t));case g.BODY:return B({},a,{bodyAttributes:B({},o)});case g.HTML:return B({},a,{htmlAttributes:B({},o)})}return B({},a,((n={})[r.type]=B({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(a,r)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=function(e){var t=e.description,n=e.meta,r=void 0===n?[]:n,a=e.title;return d.createElement(he,{htmlAttributes:{lang:"de"},title:a?a+" | bifolia":"bifolia",meta:r.concat([{name:"description",content:t},{property:"og:title",content:a},{property:"og:description",content:t},{property:"og:type",content:"website"}])})}},7006:function(e,t,n){"use strict";var r,a,o;n.d(t,{T3:function(){return r},Ly:function(){return a},T4:function(){return o}}),function(e){e[e.Raumgestaltung=0]="Raumgestaltung",e[e.Pflanzplanung=1]="Pflanzplanung",e[e.Gartenentwicklung=2]="Gartenentwicklung",e[e.Wir=3]="Wir",e[e.Projekte=4]="Projekte",e[e.Journal=5]="Journal"}(r||(r={})),function(e){e.Left="left",e.SemiLeft="semi_left",e.SemiRight="semi_right",e.Right="right"}(a||(a={})),function(e){e.Image="base.image",e.Table="base.table",e.Text="base.text"}(o||(o={}))}}]);
//# sourceMappingURL=031b7757272d24884c94137c261a50764f859066-91095ef04b1e64048702.js.map