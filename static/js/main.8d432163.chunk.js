(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={button:"ContactForm_button__tr8ul",form:"ContactForm_form__33tbA"}},,,function(e,t,n){e.exports={list:"ContactsList_list__1sLYc",contacts:"ContactsList_contacts__3gGrW",button:"ContactsList_button__2BTbI"}},,function(e,t,n){e.exports={label:"Filter_label__DTePZ",filter:"Filter_filter__ZM8Sn"}},function(e,t,n){e.exports={section:"Section_section__KbdIH",title:"Section_title__3QQdD"}},function(e,t,n){e.exports={cotainer:"Container_cotainer__1RkcW"}},,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n(7),o=n.n(r),i=(n(20),n(21),n(14)),s=n(3),l=n(4),u=n(27),b=n(6),d=n.n(b);var m=function(e){var t=e.handelAddContact,n=e.isExistContact,r=Object(c.useState)(""),o=Object(s.a)(r,2),i=o[0],b=o[1],m=Object(c.useState)(""),j=Object(s.a)(m,2),f=j[0],h=j[1],p=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":b(a);break;case"number":h(a);break;default:l.b.error('There are no type input "'.concat(n,'"'))}},O=function(){b(""),h("")};return Object(a.jsxs)("form",{className:d.a.form,onSubmit:function(e){e.preventDefault();var a=i.trim();return n(i)?l.b.error("".concat(a," Contact already exists")):a?(t({name:a,number:f,id:Object(u.a)()}),void O()):l.b.error("Please enter contact name")},children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{className:d.a.input,type:"text",name:"name",placeholder:"Enter name",value:i,onChange:p})}),Object(a.jsx)("label",{children:Object(a.jsx)("input",{className:d.a.input,type:"tell",name:"number",placeholder:"Enter phone number",value:f,onChange:p})}),Object(a.jsxs)("button",{className:d.a.button,type:"submit",children:[" ","Add Contact"," "]})]})},j=n(2),f=n.n(j),h=n(9),p=n.n(h),O=function(e){var t=e.contacts,n=e.onRemove;return 0===t.length?null:Object(a.jsx)("div",{className:p.a.contacts,children:Object(a.jsx)("ul",{className:p.a.list,children:t.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[c,": ",r]}),Object(a.jsx)("button",{className:p.a.button,type:"button",onClick:function(){return n(t)},children:"delete"})]},t)}))})})};O.protoTypes={contacts:f.a.arrayOf(f.a.shape({id:f.a.string.isRequired,name:f.a.string.isRequired,number:f.a.string.isRequired})).isRequired,onRemove:f.a.func.isRequired};var x=O,v=n(11),_=n.n(v),C=function(e){var t=e.filter,n=e.onChange;return Object(a.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:_.a.input,type:"text",name:"filter",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Enter name for Search"})]})},g=n(13),N=n.n(g);var S=function(e){var t=e.children;return Object(a.jsx)("div",{className:N.a.container,children:t})},y=n(12),R=n.n(y);var k=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{className:R.a.section,children:[Object(a.jsx)("h2",{className:R.a.title,children:t}),n]})},w=(n(24),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]);var E=function(){var e=Object(c.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[w]})),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var o=Object(c.useState)(""),u=Object(s.a)(o,2),b=u[0],d=u[1],j=function(){var e=b.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(a.jsxs)(S,{children:[Object(a.jsx)(k,{title:"Phonebook",children:Object(a.jsx)(m,{onAdd:function(e){r([].concat(Object(i.a)(n),[e]))},onCheckContact:function(e){return n.some((function(t){return t.name===e}))}})}),Object(a.jsxs)(k,{title:"Contacts",children:[n.length>1&&Object(a.jsx)(C,{filter:b,onChange:function(e){d(e)}}),n.length>0?Object(a.jsx)(x,{contacts:j,onRemove:function(e){r(n.filter((function(t){return t.id!==e})))}}):Object(a.jsx)("p",{children:"Your phonebook is empty. Please add contact"}),Object(a.jsx)(l.a,{autoClose:3e3})]})]})};o.a.render(Object(a.jsx)(E,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.8d432163.chunk.js.map