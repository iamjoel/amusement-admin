webpackJsonp([2],{125:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{logout:function(){location.href="login.html"}}}},126:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(197),i=n.n(r),u=n(198),a=n.n(u),o=n(196),c=n.n(o);e.default={name:"app",components:{"j-siderbar":i.a,"j-topbar":a.a,"j-breadcrumb":c.a},mounted:function(){this.$store.dispatch("fetchMenuAndLimit")}}},128:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={list:"列表",update:"编辑",view:"详情"};e.default={props:{menu:{type:Array}},computed:{pathArr:function(){return this.$route.path.split("/").filter(function(t){return""!==t})},currMenu:function(){var t=!1,e=this.pathArr,n=this.menu;return e.length>=3&&n.length>0&&n.forEach(function(n){if(!t&&n.children.length>0){var r=n.children[0];if(!r.path)return void console.error(r);r.path.split("/")[1]===e[0]&&(t=n)}}),t},menuName:function(){return this.currMenu?this.currMenu.name:""},subMenuName:function(){var t,e=this.currMenu,n=this.pathArr;if(e){var i="";e.children.forEach(function(t){t.path.split("/")[2]===n[1]&&(i=t.name)}),t=i+(r[this.pathArr[2]]||"未知"+this.pathArr[2])}return t}},mounted:function(){}}},129:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{menu:{type:Array}},computed:{pathArr:function(){return this.$route.path.split("/").filter(function(t){return""!==t})},currMenu:function(){var t=this.menu,e=!1,n=this.pathArr;return n.length>=3&&t.length>0&&t.forEach(function(t){if(!e&&t.children.length>0){var r=t.children[0];if(!r.path)return void console.error(r);r.path.split("/")[1]===n[0]&&(e=t)}}),e},currMenuId:function(){return this.currMenu?this.currMenu.innerid:""},currSubMenuId:function(){var t,e=this.currMenu,n=this.pathArr;return e&&e.children.forEach(function(e){e.path.split("/")[2]===n[1]&&(t=e.innerid)}),t}},data:function(){return{}},methods:{},mounted:function(){}}},130:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(79),u=n.n(i),a=n(26),o=n(17),c=(n.n(o),n(16)),s=n.n(c),l=n(78);r.default.use(s.a),r.default.config.productionTip=!1,r.default.prototype.developing=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"backend",e="backend"===t?"后端接口":"前端";s.a.Message({showClose:!0,message:e+"开发中",type:"info"})},new r.default({el:"#app",router:a.a,store:l.a,template:"<App/>",components:{App:u.a}})},132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"setUser",function(){return c}),n.d(e,"fetchMenuAndLimit",function(){return s});var r=n(54),i=(n(18),n(45)),u=(n.n(i),n(84)),a=n.n(u),o=a.a.Random,c=function(t,e){(0,t.commit)(r.a,e)},s=function(t){var e=t.commit;t.state,t.getters;e(r.b,{data:{menu:[{innerid:o.guid(),name:"音乐",icon:"message",children:[{innerid:o.guid(),name:"歌曲",path:"/music/song/list"}]}],limit:{}}})}},133:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"placeHolder",function(){return r});var r=function(t){return"xxx"}},134:function(t,e,n){"use strict";var r,i=n(137),u=n.n(i),a=n(55),o=n.n(a),c=n(54),s=(n(18),n(1),r={},u()(r,c.a,function(t,e){t.user=e,localStorage.setItem("sc-user-info",o()(t.user))}),u()(r,c.b,function(t,e){t.menu=e.data.menu,t.limit=e.data.limit}),r);e.a=s},17:function(t,e){},18:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return u});var r={song:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["list","detail","del","add","edit"],n={};return e.forEach(function(e){n[e]=t+"/"+e}),n}(void 0+"/song")},i={appid:"xxx",appsecret:"xxx"},u={19:"没有权限"}},187:function(t,e){},188:function(t,e){},189:function(t,e){},193:function(t,e){},196:function(t,e,n){var r=n(13)(n(128),n(199),null,null,null);t.exports=r.exports},197:function(t,e,n){function r(t){n(187)}var i=n(13)(n(129),n(200),r,"data-v-50476240",null);t.exports=i.exports},198:function(t,e,n){function r(t){n(193)}var i=n(13)(n(125),n(203),r,null,null);t.exports=i.exports},199:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb",{staticStyle:{padding:"20px 0 20px 30px"},attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),t.menuName?n("el-breadcrumb-item",[t._v(t._s(t.menuName))]):t._e(),t._v(" "),t.subMenuName?n("el-breadcrumb-item",[t._v(t._s(t.subMenuName))]):t._e()],1)},staticRenderFns:[]}},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"j-siderbar"},[n("el-menu",{staticStyle:{height:"100%","overflow-y":"auto"},attrs:{theme:"dark","default-openeds":[t.currMenuId],"default-active":t.currSubMenuId}},t._l(t.menu,function(e){return n("el-submenu",{key:e.innerid,attrs:{index:e.innerid}},[n("template",{slot:"title"},[n("i",{class:"el-icon-"+e.icon}),t._v(t._s(e.name)+"\n      ")]),t._v(" "),n("el-menu-item-group",{attrs:{title:""}},t._l(e.children,function(e){return n("el-menu-item",{key:e.innerid,attrs:{index:e.innerid}},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)}))],2)}))],1)},staticRenderFns:[]}},201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("j-topbar"),t._v(" "),n("el-row",{staticStyle:{"margin-top":"65px"},attrs:{gutter:20}},[n("el-col",{staticStyle:{"min-height":"100px"},attrs:{span:4}},[n("j-siderbar",{attrs:{menu:t.$store.state.menu}})],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("j-breadcrumb",{attrs:{menu:t.$store.state.menu}}),t._v(" "),n("router-view",{attrs:{id:"main-content"}})],1)],1)],1)},staticRenderFns:[]}},203:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"topbar"}},[n("el-menu",{attrs:{theme:"dark","default-active":"2",mode:"horizontal",id:"sc-menu"}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("娱乐")]),t._v(" "),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"2"},on:{click:function(e){t.logout()}}},[t._v("登出")])],1)],1)},staticRenderFns:[]}},26:function(t,e,n){"use strict";var r=n(20),i=n.n(r),u=n(1),a=n(76),o=n(29);u.default.use(a.a),e.a=new a.a({routes:[].concat(i()(o.a),[{path:"*",redirect:"/"}])})},29:function(t,e,n){"use strict";var r=n(20),i=n.n(r),u={system:"system",music:"music"},a=[{path:"/",component:function(t){o(t,"dashboard",!1)}}].concat(i()(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["list","update","view"];if(!Array.isArray(n))throw"type should be array";return n.map(function(n){var r="/"+u[e]+"/"+t+"/"+("list"===n?"list":n+"/:id"),i=n;return"view"===n&&(i="update"),{path:r,component:function(n){o(n,u[e]+"/"+t+"/"+i)}}})}("song","music"))),o=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n.e(0).then(function(i){t(n(85)("./"+e+(r?"/Index":"")+".vue"))}.bind(null,n)).catch(n.oe)};e.a=a},54:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r="user/fetch",i="member-and-limit"},78:function(t,e,n){"use strict";var r=n(1),i=n(205),u=n(134),a=n(132),o=n(133);r.default.use(i.a);var c={user:{id:null,name:null},menu:[],limit:{}};e.a=new i.a.Store({state:c,mutations:u.a,actions:a,getters:o,strict:!1})},79:function(t,e,n){function r(t){n(189),n(188)}var i=n(13)(n(126),n(201),r,null,null);t.exports=i.exports}},[130]);
//# sourceMappingURL=index.49aa08a792eed0109446.js.map