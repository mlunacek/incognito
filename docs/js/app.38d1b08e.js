(function(e){function n(n){for(var c,u,a=n[0],o=n[1],s=n[2],f=0,d=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);l&&l(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],c=!0,u=1;u<t.length;u++){var o=t[u];0!==r[o]&&(c=!1)}c&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var c={},r={app:0},i=[];function u(e){return a.p+"js/"+({"polyfills-core-js":"polyfills-core-js","polyfills-css-shim":"polyfills-css-shim","polyfills-dom":"polyfills-dom"}[e]||e)+"."+{"chunk-0b3b171e":"bfd47e36","chunk-1e71e770":"99d2fa49","chunk-2d0a4629":"908f36bf","chunk-2d0abfcf":"0c12ea8a","chunk-2d0b722b":"760e099b","chunk-2d0dd0bc":"be47342f","chunk-2d208de0":"69e5c3ca","chunk-2d228cf2":"3f2d8953","chunk-2d22c8fe":"e741ab15","chunk-2d22dbc9":"bbf6aadd","chunk-3200915f":"c7fe69d3","chunk-33ff78c6":"2ab346b6","chunk-35d5ca8f":"f197ed86","chunk-39f98114":"098eb676","chunk-3c209c9a":"283f11e8","chunk-4f1bd8c1":"a37d9cb7","chunk-5f05937e":"b432558e","chunk-648980f2":"19e5c03e","chunk-65a529e0":"0eddb3a2","chunk-749f27c6":"8edbe95a","chunk-2d208840":"0e3ec97c","chunk-2d2105ef":"fcacf5b3","chunk-2d226365":"dad1e8a0","chunk-85738cc8":"cdb6ecde","chunk-85744b60":"e9d394d8","chunk-918585f4":"f06300fd","chunk-b1ca2ae2":"a4baf53e","chunk-e5bcde22":"3ab26b70","chunk-eb358636":"78ae5035","chunk-f96b8456":"5bf8d3bc","polyfills-core-js":"78b455bb","polyfills-css-shim":"176fed6a","polyfills-dom":"a391cc5c"}[e]+".js"}function a(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,c){t=r[e]=[n,c]}));n.push(t[2]=c);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.src=u(e);var s=new Error;i=function(n){o.onerror=o.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+i+")",s.name="ChunkLoadError",s.type=c,s.request=i,t[1](s)}r[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(n)},a.m=e,a.c=c,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)a.d(t,c,function(n){return e[n]}.bind(null,c));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/incognito/",a.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var f=0;f<o.length;f++)n(o[f]);var l=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},10:function(e,n){},11:function(e,n){},12:function(e,n){},13:function(e,n){},14:function(e,n){},2:function(e,n){},"29c9":function(e,n,t){"use strict";t("65e5")},3:function(e,n){},4:function(e,n){},5:function(e,n){},"521b":function(e,n,t){var c={"./amplify-amazon-button_5.entry.js":["77e1","chunk-3c209c9a"],"./amplify-auth-fields_9.entry.js":["2689","chunk-4f1bd8c1"],"./amplify-authenticator.entry.js":["b836","chunk-749f27c6","chunk-2d2105ef"],"./amplify-button_3.entry.js":["efa9","chunk-918585f4"],"./amplify-chatbot.entry.js":["9b2c","chunk-65a529e0"],"./amplify-checkbox.entry.js":["db86","chunk-2d228cf2"],"./amplify-confirm-sign-in_7.entry.js":["e862","chunk-749f27c6","chunk-2d226365"],"./amplify-container.entry.js":["a72f","chunk-2d208de0"],"./amplify-federated-buttons_2.entry.js":["644c","chunk-648980f2"],"./amplify-federated-sign-in.entry.js":["a81f","chunk-35d5ca8f"],"./amplify-form-field_4.entry.js":["f988","chunk-2d22dbc9"],"./amplify-greetings.entry.js":["57dd","chunk-33ff78c6"],"./amplify-icon-button.entry.js":["182d","chunk-2d0abfcf"],"./amplify-icon.entry.js":["b8f5","chunk-e5bcde22"],"./amplify-link.entry.js":["f482","chunk-2d22c8fe"],"./amplify-nav_2.entry.js":["23a0","chunk-b1ca2ae2"],"./amplify-photo-picker.entry.js":["c4f1","chunk-85744b60"],"./amplify-picker.entry.js":["d040","chunk-85738cc8"],"./amplify-radio-button_2.entry.js":["a4b9","chunk-749f27c6","chunk-2d208840"],"./amplify-s3-album.entry.js":["4e6f","chunk-1e71e770"],"./amplify-s3-image-picker.entry.js":["b90a","chunk-5f05937e"],"./amplify-s3-image.entry.js":["76ad","chunk-eb358636"],"./amplify-s3-text-picker.entry.js":["5af2","chunk-0b3b171e"],"./amplify-s3-text.entry.js":["dce0","chunk-3200915f"],"./amplify-select-mfa-type.entry.js":["fef4","chunk-39f98114"],"./amplify-sign-in-button.entry.js":["7358","chunk-f96b8456"],"./amplify-toast.entry.js":["05e3","chunk-2d0a4629"],"./amplify-tooltip.entry.js":["1faa","chunk-2d0b722b"]};function r(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(c)},r.id="521b",e.exports=r},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=t("8c4f"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"tabs"},[t("ul",[t("router-link",{attrs:{tag:"p",to:"/"}},[t("a",[e._v("Home")])]),e.signedIn?t("router-link",{attrs:{tag:"p",to:"/protected"}},[t("a",[e._v("Protected")])]):e._e(),e.signedIn?t("router-link",{attrs:{tag:"p",to:"/profile"}},[t("a",[e._v("Profile")])]):e._e(),e.signedIn?t("li",{attrs:{tag:"p",to:"/auth"},on:{click:e.signOut}},[t("a",[e._v("Sign Out")])]):e._e(),e.signedIn?e._e():t("router-link",{attrs:{tag:"p",to:"/auth"}},[t("a",[e._v("Sign In")])])],1)]),t("router-view")],1)},u=[],a=t("4327"),o=t("bf82"),s={name:"app",data:function(){return{signedIn:!1}},beforeCreate:function(){var e=this;a["a"].listen("auth",(function(n){console.log("data:",n);var t=n.payload;"signIn"===t.event&&(e.signedIn=!0,e.$router.push("/profile")),"signOut"===t.event&&(e.$router.push("/auth"),e.signedIn=!1)})),o["a"].currentAuthenticatedUser().then((function(){e.signedIn=!0})).catch((function(){return e.signedIn=!1}))},methods:{signOut:function(e){var n=this;console.log("trying to sign out",e),o["a"].signOut().then((function(){n.signedIn=!1})).catch((function(){return n.signedIn=!0}))}}},f=s,l=t("2877"),d=Object(l["a"])(f,i,u,!1,null,null,null),h=d.exports,p=(t("45fc"),function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)}),b=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("section",{},[t("div",{staticClass:"container is-fluid"},[t("div",{staticClass:"subtitle"},[e._v(" Home ")])])])])}],m={name:"home"},y=m,k=Object(l["a"])(y,p,b,!1,null,null,null),v=k.exports,g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("section",{},[t("div",{staticClass:"container is-fluid"},[t("div",{staticClass:"subtitle"},[e._v(" Welcome, "+e._s(e.user.username)+" ")])])])])},_=[],j={name:"Profile",data:function(){return{user:{}}},beforeCreate:function(){var e=this;o["a"].currentAuthenticatedUser().then((function(n){e.user=n})).catch((function(){return console.log("not signed in...")}))}},w=j,O=Object(l["a"])(w,g,_,!1,null,null,null),P=O.exports,x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"auth"},[t("amplify-authenticator")],1)},C=[],I={name:"auth"},E=I,$=(t("29c9"),Object(l["a"])(E,x,C,!1,null,null,null)),A=$.exports,S=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("section",{},[t("div",{staticClass:"container is-fluid"},[t("div",{staticClass:"subtitle"},[e._v(" Protected Page ")])])])])}],M={name:"protected"},U=M,q=Object(l["a"])(U,S,T,!1,null,null,null),L=q.exports,D=[{path:"/",component:v},{path:"/auth",component:A},{path:"/protected",component:L,meta:{requiresAuth:!0}},{path:"/profile",component:P,meta:{requiresAuth:!0}}],F=new r["a"]({routes:D});F.beforeResolve((function(e,n,t){e.matched.some((function(e){return e.meta.requiresAuth}))&&o["a"].currentAuthenticatedUser().then((function(){t()})).catch((function(){t({path:"/auth"})})),t()}));var H=F,J=t("00bd"),N=(t("2bbc"),{aws_project_region:"us-west-2",aws_cognito_identity_pool_id:"us-west-2:e5313110-1365-4d29-b413-c21925086c3f",aws_cognito_region:"us-west-2",aws_user_pools_id:"us-west-2_j04aQOGFg",aws_user_pools_web_client_id:"2ean4mfnndcfjhbadugj70u02m",oauth:{}}),z=N;t("b383"),J["default"].configure(z),c["a"].use(r["a"]),c["a"].config.productionTip=!1,new c["a"]({render:function(e){return e(h)},router:H}).$mount("#app")},6:function(e,n){},"65e5":function(e,n,t){},7:function(e,n){},8:function(e,n){},9:function(e,n){},b383:function(e,n,t){}});
//# sourceMappingURL=app.38d1b08e.js.map