(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25aab88f"],{"4bde":function(e,a,t){},"4ea1":function(e,a,t){"use strict";var r=t("4bde"),s=t.n(r);s.a},"5c9c":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"main-content p-0",attrs:{fluid:""}},[t("v-row",{staticClass:"side-banner",attrs:{justify:"center","no-gutters":"",align:"center"}},[t("v-overlay",{attrs:{absolute:!0,"z-index":"0"}}),t("v-col",{attrs:{cols:"10",sm:"5",xs:"5"}},[t("v-card",{staticClass:"p-3 mx-auto mt-2",attrs:{elevation:"5",outlined:""}},[t("form",{staticClass:"w-100",on:{submit:function(a){return a.preventDefault(),a.stopPropagation(),e.handleSubmit(a)}}},[t("div",{staticClass:"text-center mb-4"},[t("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign Up")])]),t("div",{staticClass:"form-label-group mb-2"},[t("label",{attrs:{for:"name"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-2"},[t("label",{attrs:{for:"email"}},[e._v("email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",required:""},domProps:{value:e.passwordCheck},on:{input:function(a){a.target.composing||(e.passwordCheck=a.target.value)}}})]),t("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v("Submit")]),t("div",{staticClass:"text-center mb-3"},[t("p",[t("router-link",{attrs:{to:"/signin"}},[e._v("Sign In")])],1)])])])],1)],1)],1)},s=[],n=(t("b0c0"),t("96cf"),t("1da1")),o=t("4cce"),i=t("2fa3"),l={name:"SignUp",data:function(){return{name:"",email:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t,r,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.isProcessing=!0,e.name){a.next=7;break}return i["a"].fire({icon:"warning",title:"請填寫名字"}),a.abrupt("return");case 7:if(e.email){a.next=12;break}return i["a"].fire({icon:"warning",title:"請填寫email"}),a.abrupt("return");case 12:if(e.password){a.next=17;break}return i["a"].fire({icon:"warning",title:"請填寫密碼"}),a.abrupt("return");case 17:if(e.passwordCheck){a.next=22;break}return i["a"].fire({icon:"warning",title:"請重複輸入密碼"}),a.abrupt("return");case 22:if(e.password===e.passwordCheck){a.next=25;break}return i["a"].fire({icon:"warning",title:"兩次輸入密碼不同，請再輸入一次"}),a.abrupt("return");case 25:return t={name:e.name,email:e.email,password:e.password,passwordCheck:e.passwordCheck},console.log("data",t),a.next=29,o["a"].signUp(t);case 29:if(r=a.sent,s=r.data,n=r.statusText,"OK"===n&&"success"===s.status){a.next=34;break}throw new Error(n);case 34:console.log("response",s),e.$router.push({name:"sign-in"}),a.next=43;break;case 38:a.prev=38,a.t0=a["catch"](0),i["a"].fire({icon:"error",title:"輸入資料有誤"}),e.isProcessing=!1,console.log("error",a.t0);case 43:case"end":return a.stop()}}),a,null,[[0,38]])})))()}}},c=l,u=(t("4ea1"),t("2877")),m=t("6544"),d=t.n(m),p=t("b0af"),w=t("62ad"),b=t("a523"),f=t("a797"),v=t("0fd9"),g=Object(u["a"])(c,r,s,!1,null,"db388a4c",null);a["default"]=g.exports;d()(g,{VCard:p["a"],VCol:w["a"],VContainer:b["a"],VOverlay:f["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-25aab88f.26cda501.js.map