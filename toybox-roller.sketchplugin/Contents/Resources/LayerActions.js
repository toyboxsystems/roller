!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.setLayers=function(e){return{type:"SET_LAYERS",data:e}},t.clearLayer=function(e){return{type:"CLEAR_LAYER",data:e}},t.selectLayer=function(e){return{type:"SET_ACTIVE_LAYER",data:e}},t.selectLayerFromSketch=function(e){return{type:"SET_ACTIVE_LAYER_SKETCH",data:e}},t.setActiveLayer=function(e){return{type:"SET_ACTIVE_LAYER_ID",data:e}},t.nextPage=function(){return{type:"NEXT_PAGE"}},t.prevPage=function(){return{type:"PREV_PAGE"}}}]);