(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d941de1"],{1601:function(t,e,s){t.exports=s.p+"img/logo-large-horizontal.37472bf1.svg"},2211:function(t,e,s){"use strict";s("4a60")},"4a60":function(t,e,s){},"773a":function(t,e,s){},"9f6c":function(t,e,s){"use strict";s("773a")},c66d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"w-full",attrs:{id:"profile"}},[s("HeaderGeneric",{attrs:{title:"Perfil"}}),t.user.node_id?s("BodyPage",[s("header",{staticClass:"profile.header w-full relative"},[s("section",{staticClass:"profile.header_row relative w-full flex flex-wrap items-end"},[s("section",{staticClass:"px-1 md:mx-0 mx-auto"},[s("figure",{staticClass:"profile.photo rounded-full bg-white p-1 overflow-hidden relative shadow mx-auto"},[s("section",{staticClass:"profile.photo_canvas rounded-full overflow-hidden absolute m-auto top-0 bottom-0 right-0 left-0"},[s("img",{staticClass:"absolute m-auto top-0 bottom-0 right-0 left-0",attrs:{src:t.user.avatar_url,alt:""}})])])]),s("section",{staticClass:"profile.username"},[s("div",{staticClass:"md:pl-8 md:pb-4 inline-block md:w-auto w-full"},[t.user.name?s("h2",{staticClass:"profile.username_name lg:text-2xl text-blue-900 md:text-lg text-sm font-bold md:text-right text-center"},[t._v(" "+t._s(t.user.name)+" ")]):t._e(),t.user.login?s("h4",{staticClass:"lg:text-md text-sm md:text-right text-center text-gray-900 font-light"},[s("i",{staticClass:"fa fa-user"}),t._v(" "+t._s(t.user.login)+" ")]):t._e()])]),s("section",{staticClass:"profile.infos flex flex-wrap justify-end items-center px-2 md:pb-2 md:py-0 py-4"},[s("div",{staticClass:"lg:px-4 md:px-2 md:w-auto w-4/12"},[s("p",{staticClass:"text-center lg:text-xl text-sm text-blue-900 m-0"},[s("i",{staticClass:"fa fa-male"}),s("small",{staticClass:"px-1"},[t._v(t._s(t.user.following))])]),s("p",{staticClass:"text-center lg:text-xl text-sm text-blue-900 m-0"},[t._v(" Seguindo ")])]),s("div",{staticClass:"lg:px-4 md:px-2 md:w-auto w-4/12"},[s("p",{staticClass:"text-center lg:text-xl text-sm text-blue-900 m-0"},[s("i",{staticClass:"fa fa-folder-open"}),s("small",{staticClass:"px-1"},[t._v(t._s(t.user.public_repos))])]),s("p",{staticClass:"text-center lg:text-xl text-sm text-blue-900 m-0"},[t._v(" Projetos ")])]),s("div",{staticClass:"lg:px-4 md:px-2 md:w-auto w-4/12"},[s("p",{staticClass:"text-center lg:text-xl text-sm text-blue-900 m-0"},[s("i",{staticClass:"fa fa-users"}),s("small",{staticClass:"px-1"},[t._v(t._s(t.user.followers))])]),s("p",{staticClass:"text-center lg:text-xl md:text-sm text-sm text-blue-900 m-0"},[t._v(" Seguidores ")])])])])]),s("section",{staticClass:"profile.body w-full flex flex-wrap justify-center items-start"},[s("aside",{staticClass:"profile.aside lg:w-3/12 md:w-4/12 w-full md:shadow"},[s("section",{staticClass:"w-full md:pt-16"},[s("nav",{staticClass:"w-full"},[s("ul",{staticClass:"bg-blueg-100 w-full flex flex-wrap"},[s("li",{staticClass:"profile.navigation md:w-full w-6/12 relative"},[s("router-link",{attrs:{to:"/"}},[s("span",{staticClass:"profile.navigation_button text-lg py-4 text-center w-full block"},[t._v(" Sobre ")])])],1),s("li",{staticClass:"profile.navigation md:w-full w-6/12 relative",attrs:{id:"repos_button"}},[s("router-link",{attrs:{to:"/repos"}},[s("span",{staticClass:"profile.navigation_button text-lg py-4 text-center w-full block"},[t._v(" Projetos ")])])],1),s("li",{staticClass:"profile.navigation w-full relative",attrs:{id:"course_button"}},[s("router-link",{attrs:{to:"/certifications"}},[s("span",{staticClass:"profile.navigation_button text-lg py-4 text-center w-full block"},[t._v(" Certificados ")])])],1)])])])]),s("section",{staticClass:"lg:w-9/12 md:w-8/12 w-full profile.content overflow-y-auto",attrs:{id:"profileviews"}},[s("router-view")],1)])]):t._e(),t.user.node_id?t._e():s("section",{staticClass:"w-3/12 mx-auto"},[s("Loading")],1)],1)},l=[],i=s("5530"),o=s("97a6"),r=s("2f62"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"w-full mx-auto md:shadow-md py-4 bg-white"},[a("section",{staticClass:"headergen.box container mx-auto"},[a("img",{staticClass:"md:block hidden headergen.box_brand",attrs:{src:s("1601"),alt:"Github Search"},on:{click:function(e){return t.goHome()}}}),a("section",{staticClass:"md:hidden w-full flex flex-wrap text-lg px-4 items-center text-gray-900"},[a("i",{staticClass:"fa fa-arrow-left text-gray-400",on:{click:function(e){return t.goBack()}}}),a("span",{staticClass:"block text-sm px-4"},[t._v(t._s(t.title))])])])])},c=[],u={name:"HeaderGenericDesktop",props:["title"],beforeRouteEnter:function(t,e,s){s((function(e){console.log(t,e)}))},methods:{goHome:function(){this.$router.push("/")},goBack:function(){this.$router.back()}}},f=u,d=(s("d14b"),s("2877")),m=Object(d["a"])(f,n,c,!1,null,null,null),x=m.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"body-page container bg-white rounded-sm mx-auto md:shadow md:mt-8"},[t._t("default")],2)},g=[],w={name:"BodyPage"},b=w,C=(s("9f6c"),Object(d["a"])(b,p,g,!1,null,null,null)),h=C.exports,v=s("3a5e"),_=new o["a"],k={name:"Profile",data:function(){return{user:{},routeName:""}},computed:Object(i["a"])({},Object(r["c"])(["getUser"])),methods:{setUserState:function(t){this.$store.commit("setUser",t)}},components:{HeaderGeneric:x,BodyPage:h,Loading:v["a"]},mounted:function(){var t=this;_.getUser(this.username).then((function(e){var s=e.data;t.setUserState(s),t.user=t.getUser}))}},y=k,j=(s("2211"),Object(d["a"])(y,a,l,!1,null,null,null));e["default"]=j.exports},cb70:function(t,e,s){},d14b:function(t,e,s){"use strict";s("cb70")}}]);
//# sourceMappingURL=chunk-2d941de1.eb0f7fdb.js.map