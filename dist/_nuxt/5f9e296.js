(window.webpackJsonp=window.webpackJsonp||[]).push([[24,10],{591:function(e,t,r){"use strict";r.r(t);var n=r(604),l=(r(41),{name:"BaseInput",props:{label:{type:String,default:""},type:{type:String,default:"text"},rules:{type:[String,Array],default:""},name:{type:String,default:""}}}),o=r(36),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("validation-provider",{attrs:{name:e.name,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(r){var l=r.errors;return[e.label?t("label",{attrs:{for:""}},[e._v(e._s(e.label))]):e._e(),e._v(" "),t(n.a,e._g(e._b({attrs:{solo:"",type:e.type,label:e.label,"error-messages":l}},"v-text-field",e.$attrs,!1),e.$listeners))]}}])})}),[],!1,null,null,null);t.default=component.exports},679:function(e,t,r){"use strict";r.r(t);var n=r(588),l=r(5),o=(r(54),r(42)),d={layout:"auth",setup:function(){var e=Object(o.h)(),t=Object(o.e)({password:"",confirmPassword:""}),r=Object(o.f)(null),n=function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.value.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:e.push("/auth/home");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{formValues:t,handleSubmit:n,observer:r}}},c=d,f=r(36),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"change-password h-100 d-flex justify-center"},[t("div",{staticClass:"my-auto"},[t(n.a,[t("BaseCard",{staticClass:"text-center mt-3 pa-15"},[t("div",{staticClass:"change-password-head"},[t("h1",{staticClass:"display-1 font-weight-bold"},[e._v("Ganti Password")]),e._v(" "),t("p",{staticClass:"text-gray mt-3"},[e._v("\n            Masukkan password baru anda untuk mengganti password lama anda\n          ")])]),e._v(" "),t("validation-observer",{ref:"observer"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"change-password-content mt-5 mb-1"},[t("div",{staticClass:"email"},[t("BaseInput",{attrs:{name:"Password",outlined:"",rules:"required","prepend-inner-icon":"mdi-lock",placeholder:"Password*"},model:{value:e.formValues.password,callback:function(t){e.$set(e.formValues,"password",t)},expression:"formValues.password"}})],1),e._v(" "),t("div",{staticClass:"password"},[t("BaseInput",{attrs:{name:"Confirm Password",outlined:"",rules:"required|confirmed:Password","prepend-inner-icon":"mdi-lock",placeholder:"Confirm Password*"},model:{value:e.formValues.confirmPassword,callback:function(t){e.$set(e.formValues,"confirmPassword",t)},expression:"formValues.confirmPassword"}})],1)]),e._v(" "),t("div",{staticClass:"change-password-button"},[t("BaseButton",{attrs:{"x-large":"",block:"",type:"submit"}},[e._v("Submit")])],1)])])],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseInput:r(591).default,BaseButton:r(385).default,BaseCard:r(384).default})}}]);