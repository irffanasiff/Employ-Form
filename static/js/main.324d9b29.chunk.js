(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__8eNbc",modal:"ErrorModal_modal__1MqFF",header:"ErrorModal_header__2jcdR",content:"ErrorModal_content__lpLZY",actions:"ErrorModal_actions__GwBb-"}},,,,,function(e,t,n){e.exports={button:"Button_button__2j_YQ"}},function(e,t,n){e.exports={card:"Card_card__2N-0v"}},function(e,t,n){e.exports={input:"AddUser_input__1WjU-"}},function(e,t,n){e.exports={users:"UsersList_users__1mnQD"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),s=n.n(r),i=(n(17),n(12)),o=n(2),l=n(8),d=n.n(l),j=n(0),u=function(e){return Object(j.jsx)("button",{className:d.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},b=n(9),m=n.n(b),h=function(e){return Object(j.jsx)("div",{className:"".concat(e.className," ").concat(m.a.card),children:e.children})},O=n(3),x=n.n(O),p=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:x.a.backdrop,onClick:e.onConfirm}),Object(j.jsxs)(h,{className:x.a.modal,children:[Object(j.jsx)("header",{className:x.a.header,children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsx)("div",{className:x.a.content,children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsx)("footer",{className:x.a.actions,children:Object(j.jsx)(u,{onClick:e.onConfirm,children:"Okay"})})]})]})},f=n(10),_=n.n(f),g=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],d=i[1],b=Object(c.useState)(),m=Object(o.a)(b,2),O=m[0],x=m[1];return Object(j.jsxs)("div",{children:[O&&Object(j.jsx)(p,{title:O.title,message:O.message,onConfirm:function(){x(null)}}),Object(j.jsx)(h,{className:_.a.input,children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==a.trim().length&&0!==l.trim().length?+l<1?x({title:"Invalid age",message:"Please enter a valid age (> 0)."}):(e.onAddUser(a,l),r(""),d("")):x({title:"Invalid input",message:"please enter a valid name and age (non-empty values)."})},children:[Object(j.jsx)("label",{htmlFor:"user",children:"User Name"}),Object(j.jsx)("input",{id:"username",type:"text",value:a,onChange:function(e){r(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(j.jsx)("input",{id:"age",type:"number",value:l,onChange:function(e){d(e.target.value)}}),Object(j.jsx)(u,{type:"submit",children:"Add User"})]})})]})},v=n(11),N=n.n(v),k=function(e){return Object(j.jsx)(h,{className:N.a.users,children:Object(j.jsx)("ul",{children:e.users.map((function(e){return Object(j.jsxs)("li",{children:[e.name," (",e.age," years.old)"]},e.id)}))})})};var C=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{onAddUser:function(e,t){a((function(n){return[].concat(Object(i.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(j.jsx)(k,{users:n})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.324d9b29.chunk.js.map