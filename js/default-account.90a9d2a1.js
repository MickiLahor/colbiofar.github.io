(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default-account"],{"38ef":function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-menu",{attrs:{bottom:"",left:"","min-width":"200","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.attrs,a=n.on;return[o("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""},on:{click:function(n){return t.logout()}}},"v-btn",e,!1),a),[o("v-icon",[t._v("mdi-logout")])],1)]}}])})},a=[],i={name:"DefaultAccount",data:function(){return{profile:[{title:"Cerrar Sesión"}]}},methods:{logout:function(){localStorage.clear(),this.$router.push({name:"Login"}).catch((function(t){}))}}},c=i,r=o("0c7c"),u=o("6544"),l=o.n(u),s=o("8336"),f=o("132d"),d=o("e449"),m=Object(r["a"])(c,e,a,!1,null,null,null);n["default"]=m.exports;l()(m,{VBtn:s["a"],VIcon:f["a"],VMenu:d["a"]})}}]);
//# sourceMappingURL=default-account.90a9d2a1.js.map