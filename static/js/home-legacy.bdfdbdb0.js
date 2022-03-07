(function(){"use strict";var t={514:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.$route.path.includes("login")?t._e():[n("app-bar"),n("side-bar")],n("v-main",[n("router-view")],1),n("fooster-bar")],2)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""}},t._l(t.tabitems,(function(e,r){return n("v-tab",{key:r,attrs:{link:"",to:e.to}},[t._v(" "+t._s(e.name)+" ")])})),1)]},proxy:!0}])},[n("div",{staticClass:"d-flex align-center"},[t.$route.path.includes("dashboard")?t._e():n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.drawerClick.apply(null,arguments)}}}),n("h1",[t._v("KT OneView")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1)},s=[],l=new r.Z,c={name:"AppBar",data:function(){return{drawer:!1,tabitems:[{name:"OneView",to:"/"},{name:"대쉬보드",to:"/dashboard"},{name:"지도분석",to:"/map"},{name:"상세분석",to:"/detail"},{name:"게시판",to:"/notice"}]}},methods:{drawerClick:function(){l.$emit("DRAWER_CLICK",this.drawer)}}},u=c,m=n(1001),d=n(3453),v=n.n(d),f=n(426),p=n(5206),h=n(680),b=n(6428),y=n(9762),g=n(4227),x=n(5090),w=(0,m.Z)(u,i,s,!1,null,null,null),_=w.exports;v()(w,{VAppBar:f.Z,VAppBarNavIcon:p.Z,VBtn:h.Z,VIcon:b.Z,VSpacer:y.Z,VTab:g.Z,VTabs:x.Z});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v(" Application ")]),n("v-list-item-subtitle",[t._v(" subtext ")])],1)],1),n("v-divider"),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)},k=[],Z={data:function(){return{items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}],right:null,drawer:!1}},created:function(){var t=this;console.log("created..."),l.$on("DRAWER_CLICK",(function(e){t.drawer=!e})),console.log(this.drawer)}},V=Z,j=n(1418),A=n(6816),O=n(7620),E=n(352),N=n(459),P=n(7806),S=(0,m.Z)(V,C,k,!1,null,null,null),T=S.exports;v()(S,{VDivider:j.Z,VIcon:b.Z,VList:A.Z,VListItem:O.Z,VListItemContent:E.km,VListItemIcon:N.Z,VListItemSubtitle:E.oZ,VListItemTitle:E.V9,VNavigationDrawer:P.Z});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{padless:"",color:"primary"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("OneView")])])],1)},L=[],$=n(2102),R=n(899),B={},D=(0,m.Z)(B,I,L,!1,null,null,null),F=D.exports;v()(D,{VCol:$.Z,VFooter:R.Z});var W={name:"App",components:{AppBar:_,SideBar:T,FoosterBar:F},data:function(){return{}},computed:{}},K=W,M=n(7524),q=n(7877),H=(0,m.Z)(K,a,o,!1,null,null,null),G=H.exports;v()(H,{VApp:M.Z,VMain:q.Z});n(1539),n(8783),n(3948);var Q=n(8345),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world")},X=[],Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},z=[],J={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},tt=J,et=n(9846),nt=n(7047),rt=n(2877),at=(0,m.Z)(tt,Y,z,!1,null,null,null),ot=at.exports;v()(at,{VCol:$.Z,VContainer:et.Z,VImg:nt.Z,VRow:rt.Z});var it={name:"HomeView",components:{HelloWorld:ot}},st=it,lt=(0,m.Z)(st,U,X,!1,null,null,null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[n("v-card",{staticClass:"elevation-12"},[n("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-window-item",{attrs:{value:1}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-text",{staticClass:"mt-12"},[n("h1",{staticClass:"text-center display-2 primary--text text--accent-3"},[t._v(" KDAP-OneView ")]),n("h4",{staticClass:"text-center mt-4"},[t._v(" Ensure your kate id for registration ")]),n("v-form",{attrs:{id:"login-form"}},[n("v-text-field",{attrs:{label:"Kate 사번",name:"username","prepend-icon":"mdi-account",type:"text",color:"primary accent-3"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),n("v-text-field",{attrs:{id:"password",label:"비밀번호",name:"password","prepend-icon":"mdi-lock",type:"password",color:"primary accent-3"},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}})],1)],1),n("div",{staticClass:"text-center mt-3"},[n("v-btn",{attrs:{rounded:"",color:"primary accent-3",dark:""},on:{click:t.login}},[t._v("로그인")])],1)],1),n("v-col",{staticClass:"primary accent-3",attrs:{cols:"12",md:"4"}},[n("v-card-text",{staticClass:"white--text mt-12"},[n("h1",{staticClass:"text-center display-1"},[t._v("Welcome to OneView!")]),n("h5",{staticClass:"text-center"},[t._v(" KDAP-OneView 접속 시, 계정권한 신청이 필요합니다. ")])]),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",outlined:"",dark:""},on:{click:function(e){t.step++}}},[t._v("권한 신청")])],1)],1)],1)],1),n("v-window-item",{attrs:{value:2}},[n("v-row",{staticClass:"fill-height"},[n("v-col",{staticClass:"primary accent-3",attrs:{cols:"12",md:"4"}},[n("v-card-text",{staticClass:"white--text mt-12"},[n("h1",{staticClass:"text-center display-1"},[t._v("Welcome Back!")]),n("h5",{staticClass:"text-center"},[t._v(" 계정권한이 있으시면, 로그인 해주세요! ")])]),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",outlined:"",dark:""},on:{click:function(e){t.step--}}},[t._v(" 로그인 페이지 ")])],1)],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-text",{staticClass:"mt-12"},[n("h1",{staticClass:"text-center display-2 primary--text text--accent-3"},[t._v(" Create Account ")]),n("h4",{staticClass:"text-center mt-4"},[t._v(" Ensure your email for registration ")]),n("v-form",[n("v-text-field",{attrs:{label:"사번",name:"code","prepend-icon":"mdi-account-clock",type:"text",color:"primary accent-3"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),n("v-text-field",{attrs:{label:"이름",name:"name","prepend-icon":"mdi-account",type:"text",color:"primary accent-3"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),n("v-text-field",{attrs:{label:"전화번호",name:"phone-number","prepend-icon":"mdi-phone",type:"password",color:"primary accent-3"},model:{value:t.userPhone,callback:function(e){t.userPhone=e},expression:"userPhone"}}),n("v-select",{attrs:{items:t.authList,"item-text":"name","item-value":"value",rules:[function(t){return!!t||"Auth is required"}],label:"요청권한","prepend-icon":"mdi-lock","return-object":""},model:{value:t.userAuth,callback:function(e){t.userAuth=e},expression:"userAuth"}})],1)],1),n("div",{staticClass:"text-center mt-n5"},[n("v-btn",{attrs:{rounded:"",color:"primary accent-3",dark:""},on:{click:t.registerSubmit}},[t._v("권한 요청")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},mt=[],dt={data:function(){return{authList:[{name:"관리자",value:"ADMIN"},{name:"스탭",value:"STAP"},{name:"임원",value:"MASTER"},{name:"직원",value:"USER"}],userAuth:null,step:1,items:["관리자","임원","스탭","직원"],userName:null,userPhone:null,userPassword:null,me:{}}},props:{source:String},setup:function(){},created:function(){},mounted:function(){},unmounted:function(){},methods:{login:function(){var t=this;console.log("login() ...");var e=new FormData(document.getElementById("login-form"));this.$axios.post("/api/login/",e).then((function(e){console.log("LOGIN POST RES",e),alert("user ".concat(e.data.username," login OK")),t.me=e.data})).catch((function(t){console.log("LOGIN POST ERR.RESPONSE",t.response),alert("LOGIN Fail")}))}}},vt=dt,ft=n(3237),pt=n(7118),ht=n(6232),bt=n(2982),yt=n(5978),gt=n(6924),xt=n(7864),wt=(0,m.Z)(vt,ut,mt,!1,null,null,null),_t=wt.exports;v()(wt,{VBtn:h.Z,VCard:ft.Z,VCardText:pt.ZB,VCol:$.Z,VContainer:et.Z,VForm:ht.Z,VRow:rt.Z,VSelect:bt.Z,VTextField:yt.Z,VWindow:gt.Z,VWindowItem:xt.Z}),r.Z.use(Q.Z);var Ct=[{path:"/login",name:"login",component:_t},{path:"/home",name:"home",component:ct},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,9030))}}],kt=new Q.Z({routes:Ct}),Zt=kt,Vt=n(629);r.Z.use(Vt.ZP);var jt=new Vt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),At=n(9132);r.Z.use(At.Z);var Ot=new At.Z({}),Et=n(9669),Nt=n.n(Et);Nt().defaults.xsrfCookieName="csrftoken",Nt().defaults.xsrfHeaderName="X-CSRFToken",r.Z.prototype.$axios=Nt(),r.Z.config.productionTip=!1,new r.Z({router:Zt,store:jt,vuetify:Ot,render:function(t){return t(G)}}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"static/img/logo.4d6033c9.svg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],o=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"static/js/about-legacy.9d6e4dab.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="front-end:";n.l=function(r,a,o,i){if(t[r])t[r].push(a);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==e+o){s=m;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[a];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(v);var a=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={177:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(e),s=new Error,l=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(e&&e(r);c<i.length;c++)o=i[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(514)}));r=n.O(r)})();
//# sourceMappingURL=home-legacy.bdfdbdb0.js.map