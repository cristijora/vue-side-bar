!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSideBar=t():e.VueSideBar=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){e.exports=function(e,t,n,o){var i,r=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,r=e.default);var u="function"==typeof r?r.options:r;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),o){var a=Object.create(u.computed||null);Object.keys(o).forEach(function(e){var t=o[e];a[e]=function(){return t}}),u.computed=a}return{esModule:i,exports:r,options:u}}},function(e,t,n){n(6);var o=n(0)(n(3),n(8),null,null);o.options.__file="C:\\work\\Github\\vue-side-bar\\src\\components\\SidebarItem.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] SidebarItem.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){n(7);var o=n(0)(n(4),n(9),null,null);o.options.__file="C:\\work\\Github\\vue-side-bar\\src\\components\\VueSideBar.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] VueSideBar.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"sidebar-item",props:{active:Boolean,icon:String,menu:Boolean,title:{type:String,default:"Simple link"}},data:function(){return{toggle:!0}},methods:{onClick:function(){this.menu&&(this.toggle=!this.toggle)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:{type:String,default:"Vue sidebar"},color:{type:String,default:"#7f8c8d"},position:{type:String,default:"left"},minimize:Boolean},computed:{sideBarStyle:function(){var e={background:this.color};return"right"===this.position?(e.right=0,e.left="initial"):(e.left=0,e.right="initial"),e},sidebarMiniTitle:function(){return this.title.match(/\b(\w)/g).join("").toUpperCase()}}}},function(e,t,n){e.exports={VueSideBar:n(2),SidebarItem:n(1),install:function(t){t.component("vue-side-bar",e.exports.VueSideBar),t.component("sidebar-item",e.exports.SidebarItem)}}},function(e,t){},function(e,t){},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:{active:e.active}},[e._t("link",[n("a",{on:{click:e.onClick}},[n("i",{class:e.icon}),e._v(" "),n("p",[e._v(e._s(e.title)+"\n        "),e.menu?n("b",{staticClass:"caret"}):e._e()])])]),e._v(" "),e.menu?n("div",{class:{collapse:e.toggle}},[n("ul",{staticClass:"nav"},[e._t("default")],2)]):e._e()],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"sidebar-mini":e.minimize}},[n("div",{staticClass:"sidebar",style:e.sideBarStyle},[n("div",{staticClass:"logo"},[n("a",{staticClass:"logo-text",attrs:{href:"#"}},[e._v("\n        "+e._s(e.title)+"\n      ")])]),e._v(" "),n("div",{staticClass:"logo logo-mini"},[n("a",{staticClass:"logo-text",attrs:{href:"#"}},[e._v("\n        "+e._s(e.sidebarMiniTitle)+"\n      ")])]),e._v(" "),n("div",{staticClass:"sidebar-wrapper"},[n("ul",{staticClass:"nav"},[e._t("default")],2)])])])},staticRenderFns:[]},e.exports.render._withStripped=!0}])});