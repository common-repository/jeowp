!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./src/js/build/",r(r.s=670)}({12:function(e,t,r){var n=r(87),o=r(120),u=r(40),i=r(88);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},120:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return u}},e.exports.__esModule=!0,e.exports.default=e.exports},13:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},14:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},33:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},40:function(e,t,r){var n=r(33);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},670:function(e,t,r){"use strict";r.r(t);var n=r(13),o=r.n(n),u=r(14),i=r.n(u),a=r(12),s=r.n(a),l=new(function(){function e(){o()(this,e),this.layerTypes={}}return i()(e,[{key:"getLayerTypes",value:function(){return Object.keys(this.layerTypes)}},{key:"getLayerTypesLabels",value:function(){return Object.entries(this.layerTypes).map((function(e){var t=s()(e,2),r=t[0];return t[1].label||r}))}},{key:"registerLayerType",value:function(e,t){this.layerTypes[e]=t}},{key:"getLayerType",value:function(e){return this.layerTypes[e]}},{key:"getLayerTypeSchema",value:function(e){return this.getLayerType(e.type).getSchema(e)}}]),e}());window.JeoLayerTypes=l;var y=l,f=function(){function e(t,r){o()(this,e),this.layerType=y.getLayerType(t),this.attributes=r}return i()(e,[{key:"addStyle",value:function(e){return this.layerType.addStyle(e,this.attributes)}},{key:"addLayer",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.layerType.addLayer(e,this.attributes,t)}},{key:"getSchema",value:function(){return this.layerType.getSchema(this.attributes)}},{key:"addInteractions",value:function(e){if("function"==typeof this.layerType.addInteractions)return this.layerType.addInteractions(e,this.attributes)}},{key:"layer_name",get:function(){return this.attributes.layer_name}},{key:"layer_id",get:function(){return this.attributes.layer_id}},{key:"attribution",get:function(){return this.attributes.attribution}},{key:"options",get:function(){return this.attributes.layer_type_options}},{key:"source_url",get:function(){return this.attributes.source_url}},{key:"attribution_name",get:function(){return this.attributes.attribution_name}}]),e}();window.JeoLayer=f;t.default=f},87:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},88:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports}});