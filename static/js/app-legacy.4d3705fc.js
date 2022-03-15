(function(){"use strict";var e={166:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var n=r(144),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e.$route.path.includes("login")?e._e():r("app-bar"),e.$route.path.includes("login")?e._e():r("side-bar"),r("v-main",[r("router-view")],1),r("fooster-bar")],1)},s=[],a=r(4367),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""},scopedSlots:e._u([{key:"extension",fn:function(){return[r("v-tabs",{attrs:{"align-with-title":""}},e._l(e.tabitems,(function(t,n){return r("v-tab",{key:n,attrs:{link:"",to:t.to}},[e._v(" "+e._s(t.name)+" ")])})),1)]},proxy:!0}])},[r("div",{staticClass:"d-flex align-center"},[e.$route.path.includes("dashboard")?e._e():r("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.drawerClick.apply(null,arguments)}}}),r("h1",[e._v("KT OneView")])],1),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-magnify")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-heart")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-dots-vertical")])],1)],1)},c=[],l=new n.Z,u={name:"AppBar",data:function(){return{drawer:!1,tabitems:[{name:"OneView",to:"/"},{name:"대쉬보드",to:"/dashboard"},{name:"지도분석",to:"/map"},{name:"상세분석",to:"/detail"},{name:"게시판",to:"/notice"}]}},methods:{drawerClick:function(){l.$emit("DRAWER_CLICK",this.drawer)}}},d=u,m=r(1001),f=r(3453),p=r.n(f),v=r(426),h=r(5206),g=r(680),b=r(6428),w=r(9762),x=r(4227),y=r(5090),_=(0,m.Z)(d,i,c,!1,null,null,null),Z=_.exports;p()(_,{VAppBar:v.Z,VAppBarNavIcon:h.Z,VBtn:g.Z,VIcon:b.Z,VSpacer:w.Z,VTab:x.Z,VTabs:y.Z});var k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{app:"",absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[e._v(" Application ")]),r("v-list-item-subtitle",[e._v(" subtext ")])],1)],1),r("v-divider"),r("v-divider"),r("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)},C=[],F={data:function(){return{items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}],right:null,drawer:!1}},created:function(){var e=this;console.log("created..."),l.$on("DRAWER_CLICK",(function(t){e.drawer=!t})),console.log(this.drawer)}},I=F,V=r(1418),E=r(6816),A=r(7620),S=r(352),P=r(459),$=r(7806),O=(0,m.Z)(I,k,C,!1,null,null,null),T=O.exports;p()(O,{VDivider:V.Z,VIcon:b.Z,VList:E.Z,VListItem:A.Z,VListItemContent:S.km,VListItemIcon:P.Z,VListItemSubtitle:S.oZ,VListItemTitle:S.V9,VNavigationDrawer:$.Z});var D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{padless:"",color:"primary"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),r("strong",[e._v("OneView")])])],1)},R=[],j=r(2102),N=r(899),L={},B=(0,m.Z)(L,D,R,!1,null,null,null),W=B.exports;p()(B,{VCol:j.Z,VFooter:N.Z});var q=r(629),z={name:"App",components:{AppBar:Z,SideBar:T,FoosterBar:W},data:function(){return{}},beforeCreate:function(){this.initializeStore;var e=this.aceess;this.$axios.default.headers.common["Authorization"]=e?"JWT"+e:""},mounted:function(){var e=this;setInterval((function(){e.getAccess()}),29e4)},computed:(0,a.Z)({},(0,q.rn)("auth",["access","refresh"])),methods:(0,a.Z)((0,a.Z)({},(0,q.OI)("auth",["setAccess","initializeStore"])),{},{getAccess:function(){var e=this,t={refresh:this.refresh};this.$axios.post("/api/jwt/refresh/",t).then((function(t){var r=t.data.access;console.log(r),localStorage.setItem("access",r),e.setAccess(r)})).catch((function(e){console.log(e)}))}})},K=z,M=r(7524),G=r(7877),U=(0,m.Z)(K,o,s,!1,null,null,null),H=U.exports;p()(U,{VApp:M.Z,VMain:G.Z});r(1539),r(8783),r(3948);var J=r(8345),X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{attrs:{src:e.userInfo}},[e._v(e._s(e.userInfo))])},Y=[],Q={name:"HomeView",components:{},data:function(){return{userInfo:{}}},mounted:function(){this.getUserInfo()},methods:{getUserInfo:function(){var e=this;this.$axios.get("/api/users/me").then((function(t){console.log(t),e.userInfo=t.data})).catch((function(e){console.log(e)}))}}},ee=Q,te=(0,m.Z)(ee,X,Y,!1,null,null,null),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[r("v-card",{staticClass:"elevation-12"},[r("v-window",{model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[r("v-window-item",{attrs:{value:1}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card-text",{staticClass:"mt-12"},[r("h1",{staticClass:"text-center display-2 primary--text text--accent-3"},[e._v(" KDAP-OneView ")]),r("h4",{staticClass:"text-center mt-4"},[e._v(" Ensure your kate id for registration ")]),r("v-form",{attrs:{id:"login-form"},on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("v-text-field",{attrs:{id:"username",label:"Kate 사번",name:"username","prepend-icon":"mdi-account",type:"text",color:"primary accent-3"},model:{value:e.loginForm.userID,callback:function(t){e.$set(e.loginForm,"userID",t)},expression:"loginForm.userID"}}),r("v-text-field",{attrs:{id:"password",label:"비밀번호",name:"password","prepend-icon":"mdi-lock",type:"password",color:"primary accent-3"},model:{value:e.loginForm.userPassword,callback:function(t){e.$set(e.loginForm,"userPassword",t)},expression:"loginForm.userPassword"}})],1)],1),r("div",{staticClass:"text-center mt-3"},[r("v-btn",{attrs:{rounded:"",color:"primary accent-3",dark:""},on:{click:e.login}},[e._v("로그인")])],1)],1),r("v-col",{staticClass:"primary accent-3",attrs:{cols:"12",md:"4"}},[r("v-card-text",{staticClass:"white--text mt-12"},[r("h1",{staticClass:"text-center display-1"},[e._v("Welcome to OneView!")]),r("h5",{staticClass:"text-center"},[e._v(" KDAP-OneView 접속 시, 계정권한 신청이 필요합니다. ")])]),r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{rounded:"",outlined:"",dark:""},on:{click:function(t){e.step++}}},[e._v("권한 신청")])],1)],1)],1)],1),r("v-window-item",{attrs:{value:2}},[r("v-row",{staticClass:"fill-height"},[r("v-col",{staticClass:"primary accent-3",attrs:{cols:"12",md:"4"}},[r("v-card-text",{staticClass:"white--text mt-12"},[r("h1",{staticClass:"text-center display-1"},[e._v("Welcome Back!")]),r("h5",{staticClass:"text-center"},[e._v(" 계정권한이 있으시면, 로그인 해주세요! ")])]),r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{rounded:"",outlined:"",dark:""},on:{click:function(t){e.step--}}},[e._v(" 로그인 페이지 ")])],1)],1),r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card-text",{staticClass:"mt-12"},[r("h1",{staticClass:"text-center display-2 primary--text text--accent-3"},[e._v(" Create Account ")]),r("h4",{staticClass:"text-center mt-4"},[e._v(" Ensure your email for registration ")]),r("v-form",{attrs:{id:"register-form"}},[r("v-text-field",{attrs:{label:"사번",name:"username","prepend-icon":"mdi-account-clock",rules:[function(e){return!!e||"ID is required"}],type:"text",color:"primary accent-3"},model:{value:e.registerForm.userID,callback:function(t){e.$set(e.registerForm,"userID",t)},expression:"registerForm.userID"}}),r("v-text-field",{attrs:{label:"이름",name:"first_name",rules:[function(e){return!!e||"Name is required"}],"prepend-icon":"mdi-account",type:"text",color:"primary accent-3"},model:{value:e.registerForm.userName,callback:function(t){e.$set(e.registerForm,"userName",t)},expression:"registerForm.userName"}}),r("v-text-field",{attrs:{label:"이메일",name:"email",rules:[function(e){return!!e||"Email is required"}],"prepend-icon":"mdi-email",color:"primary accent-3"},model:{value:e.registerForm.userEmail,callback:function(t){e.$set(e.registerForm,"userEmail",t)},expression:"registerForm.userEmail"}}),r("v-select",{attrs:{items:e.authList,"item-text":"name","item-value":"value",rules:[function(e){return!!e||"Auth is required"}],label:"요청권한","prepend-icon":"mdi-account-lock","return-object":""},model:{value:e.registerForm.userAuth,callback:function(t){e.$set(e.registerForm,"userAuth",t)},expression:"registerForm.userAuth"}}),r("v-text-field",{attrs:{label:"비밀번호",name:"password",rules:[function(e){return!!e||"Password is required"}],"prepend-icon":"mdi-lock",type:"password",color:"primary accent-3"},model:{value:e.registerForm.userPassword,callback:function(t){e.$set(e.registerForm,"userPassword",t)},expression:"registerForm.userPassword"}}),r("v-text-field",{attrs:{label:"비밀번호 확인",name:"password2",rules:[function(e){return!!e||"Password-confirm is required"}],"prepend-icon":"mdi-lock-plus",type:"password",color:"primary accent-3"},model:{value:e.registerForm.userPassword2,callback:function(t){e.$set(e.registerForm,"userPassword2",t)},expression:"registerForm.userPassword2"}})],1)],1),r("div",{staticClass:"text-center mt-n5"},[r("v-btn",{attrs:{rounded:"",color:"primary accent-3",dark:""},on:{click:e.registerSubmit}},[e._v("권한 요청")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},oe=[],se=(r(8309),{data:function(){return{authList:[{name:"관리자",value:"ADMIN"},{name:"스탭",value:"STAFF"},{name:"임원",value:"EXECE"},{name:"직원",value:"USER"}],step:1,items:["관리자","임원","스탭","직원"],registerForm:{userID:"",userName:"",userEmail:"",userAuth:"",userPassword:"",userPassword2:""},loginForm:{userID:"",userPassword:""}}},props:{source:String},setup:function(){},created:function(){},mounted:function(){},unmounted:function(){},methods:(0,a.Z)((0,a.Z)({},(0,q.OI)("auth",["setAccess","setRefresh"])),{},{login:function(){var e=this;console.log("login() ..."),this.$axios.defaults.headers.common["Authorization"]="",localStorage.removeItem("access");var t={user_id:this.loginForm.userID,password:this.loginForm.userPassword};console.log(t),this.$axios.post("/api/jwt/create/",t).then((function(t){console.log(t);var r=t.data.access,n=t.data.refresh;e.setAccess(r),e.setRefresh(n),e.$axios.defaults.headers.common["Authorization"]="JWT "+r,localStorage.setItem("access",r),localStorage.setItem("refresh",n),e.$router.push("/")})).catch((function(e){console.log(e)}))},registerSubmit:function(){var e=this;console.log("register init...");var t={name:this.registerForm.userName,email:this.registerForm.userEmail,organization:this.registerForm.userAuth.value,user_id:this.registerForm.userID,password:this.registerForm.userPassword,re_password:this.registerForm.userPassword2};console.log(t),this.$axios.post("/api/users/",t).then((function(t){console.log("REGISTER POST RES",t),alert("user ".concat(t.data.name," register OK")),e.me=t.data})).catch((function(e){console.log("REGISTER POST ERR.RESPONSE",e.response),alert("REGISTER Fail ")}))}})}),ae=se,ie=r(3237),ce=r(7118),le=r(9846),ue=r(6232),de=r(2877),me=r(2982),fe=r(5978),pe=r(6924),ve=r(7864),he=(0,m.Z)(ae,ne,oe,!1,null,null,null),ge=he.exports;p()(he,{VBtn:g.Z,VCard:ie.Z,VCardText:ce.ZB,VCol:j.Z,VContainer:le.Z,VForm:ue.Z,VRow:de.Z,VSelect:me.Z,VTextField:fe.Z,VWindow:pe.Z,VWindowItem:ve.Z}),n.Z.use(J.Z);var be=[{path:"/login",name:"login",component:ge},{path:"/",name:"home",component:re},{path:"/about",name:"about",component:function(){return r.e(443).then(r.bind(r,9030))}},{path:"/map",name:"map",component:function(){return r.e(842).then(r.bind(r,1040))}},{path:"/dashboard",name:"dashboard",component:function(){return r.e(966).then(r.bind(r,1811))}}],we=new J.Z({routes:be}),xe=we,ye={namespaced:!0,state:{access:"",refresh:""},getters:{},mutations:{initializeStore:function(e){localStorage.getItem("access")?(e.access=localStorage.getItem("access"),e.refresh=localStorage.getItem("refresh")):(e.access="",e.refresh="")},setAccess:function(e,t){e.access=t},setRefresh:function(e,t){e.refresh=t}},actions:{}},_e=ye;n.Z.use(q.ZP);var Ze=new q.ZP.Store({strict:!0,modules:{auth:_e}}),ke=Ze,Ce=r(9132);n.Z.use(Ce.Z);var Fe=new Ce.Z({}),Ie=r(9669),Ve=r.n(Ie);Ve().defaults.xsrfCookieName="csrftoken",Ve().defaults.xsrfHeaderName="X-CSRFToken",n.Z.prototype.$axios=Ve(),n.Z.config.productionTip=!1,new n.Z({router:xe,store:ke,vuetify:Fe,render:function(e){return e(H)}}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,s){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"static/js/"+{443:"about",842:"map",966:"dashboard"}[e]+"-legacy."+{443:"9d6e4dab",842:"a317df7c",966:"c221dd27"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="front-end:";r.l=function(n,o,s,a){if(e[n])e[n].push(o);else{var i,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[o];var m=function(t,r){i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var s=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=s);var a=r.p+r.u(t),i=new Error,c=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,o[1](i)}};r.l(a,c,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,a=n[0],i=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var u=c(r)}for(t&&t(n);l<a.length;l++)s=a[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(166)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.4d3705fc.js.map