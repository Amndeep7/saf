(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2aded96"],{"1f4f":function(e,t,s){"use strict";s("8e6e"),s("ac6a"),s("456d");var a=s("bd86"),n=(s("c5f6"),s("8b37"),s("80d2")),r=s("7560"),o=s("58df");function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(s,!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}t["a"]=Object(o["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return l({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"262f":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{md:"12",sm:"12",cols:"12"}},[s("p",{staticClass:"google-font break-word",staticStyle:{color:"#1a73e8","font-weight":"350","font-size":"200%"}},[e._t("title")],2),e._t("subtitle")],2)],1)],1)},n=[],r=s("2877"),o=s("6544"),i=s.n(o),l=s("62ad"),c=s("a523"),d=s("0fd9"),p={},u=Object(r["a"])(p,a,n,!1,null,null,null);t["a"]=u.exports;i()(u,{VCol:l["a"],VContainer:c["a"],VRow:d["a"]})},"379e":function(e){e.exports=JSON.parse('{"pilots":[{"name":"ACT","scope":"Uses security testing data and Heimdall from this framework to support Assessments"},{"name":"IUSG","scope":"Incorporates tools from this framework into their CMS DevSecOps guidance"},{"name":"BCDA","scope":"Uses the AWS CIS Foundations and Red Hat InSpec profiles and Heimdall in their DevOps pipeline"},{"name":"CFACTS","scope":"Uses these InSpec profiles and Heimdall to routinely assess and remediate their supporting operating systems, databases, web servers, and COTS software"},{"name":"T-MSIS","scope":"Uses Red Hat InSpec profiles and Heimdall in their DevOps pipeline"},{"name":"IDM","scope":"Uses the AWS CIS Foundations and Red Hat InSpec profiles and Heimdall in their DevOps pipeline"},{"name":"MACFin","scope":"Uses the AWS CIS Foundations, Red Hat, CVE, JBoss, Oracle RDS, Heimdall tools in their DevOps pipeline"},{"name":"Lewin Group","scope":"Uses the Red Hat InSpec profile and Ansible hardening to routinely assess and remediate their servers, and support their ACT"}]}')},"8b37":function(e,t,s){},e28f:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-content",{staticClass:"pa-0"},[s("v-container",{staticClass:"pa-0 mt-2",attrs:{fluid:""}},[s("v-row",{staticClass:"py-0 my-0",class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{justify:"center",align:"center"}},[s("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[s("Header",[s("h3",{attrs:{slot:"title"},slot:"title"},[e._v("ACT Support, DevOps Pilots and Onboarding")])])],1)],1)],1),s("v-container",{staticClass:"pa-0 py-2",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"10",xs:"12"}},[s("pilotsInfo")],1)],1)],1)],1)},n=[],r=s("262f"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left google-font title"},[e._v("Team")]),s("th",{staticClass:"text-left google-font title"},[e._v("Scope")])])]),s("tbody",e._l(e.pilots.pilots,(function(t){return s("tr",{key:t.name,staticClass:"google-font"},[s("td",{staticClass:"subtitle-1"},[e._v(e._s(t.name))]),s("td",{staticClass:"body-2"},[e._v(e._s(t.scope))])])})),0)]},proxy:!0}])})],1)},i=[],l=(s("a481"),s("d67c")),c=s("379e"),d={name:"App",data:function(){return{communityData:l,pilots:c,dialog:!1,dialogData:{name:"",date:"",link:""}}},computed:{color_mode:function(){return this.$vuetify.theme.dark?"darkModeContainer":"lightModeContainer"},moveForBottomNavStyle:function(){return this.$vuetify.breakpoint.smAndDown?"z-index: 10; bottom: 60px":""}},methods:{make_linkable:function(e){return e.replace(/\s+/g,"-").toLowerCase()},passItemData:function(e){this.dialogData=e}}},p=d,u=s("2877"),f=s("6544"),m=s.n(f),h=s("a523"),v=s("1f4f"),b=Object(u["a"])(p,o,i,!1,null,null,null),g=b.exports;m()(b,{VContainer:h["a"],VSimpleTable:v["a"]});var y={components:{Header:r["a"],pilotsInfo:g},created:function(){var e=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?e.setAttribute("content","#212121"):e.setAttribute("content","#0277bd")}},C=y,O=s("62ad"),S=s("a75b"),w=s("0fd9"),_=Object(u["a"])(C,a,n,!1,null,null,null);t["default"]=_.exports;m()(_,{VCol:O["a"],VContainer:h["a"],VContent:S["a"],VRow:w["a"]})}}]);