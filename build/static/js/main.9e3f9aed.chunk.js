(window.webpackJsonppart7=window.webpackJsonppart7||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(13),r=t(3),c=t(0),o=t.n(c),u=t(14),i=t.n(u),l=function(e){var n=e.persons,t=e.newSearch,a=e.deletePerson;return""!==t?o.a.createElement("div",null,n.map((function(e){return t.toLowerCase()===e.name.toLowerCase()?o.a.createElement("li",{className:"note",key:e.id},e.name," ",e.number):o.a.createElement("div",{key:e.name},"  ")}))):o.a.createElement("div",null,n.map((function(e){return o.a.createElement("li",{className:"note",key:e.id}," ",e.name," ",e.number,"  ",o.a.createElement("button",{key:e.id,onClick:function(n){return a(e.id)}},"delete"))})))},m=function(e){e.setNewName,e.setNewNum;var n=e.addNote,t=e.newName,a=e.newNum,r=e.handleNameChange,c=e.handleNumChange;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:t,onChange:r})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:a,onChange:c})),o.a.createElement("button",{type:"submit"},"add")," "))},f={color:"grey",fontStyle:"italic",fontSize:16},d=function(e){var n=e.newSearch,t=e.handleSearch;return o.a.createElement("div",{style:f},"filter shown with ",o.a.createElement("input",{value:n,onChange:t}))},s=t(2),p=t.n(s),b="/api/persons",h=function(){return p.a.get(b)},w=function(e){return p.a.post(b,e)},E=function(e){return p.a.delete("".concat(b,"/").concat(e))},v=function(e,n){return p.a.put("".concat(b,"/").concat(e),n)};t(37);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}i.a.render(o.a.createElement((function(){var e=Object(c.useState)([{}]),n=Object(r.a)(e,2),t=n[0],u=n[1],i=Object(c.useState)(""),f=Object(r.a)(i,2),s=f[0],p=f[1],b=Object(c.useState)(""),N=Object(r.a)(b,2),y=N[0],g=N[1],j=Object(c.useState)(""),S=Object(r.a)(j,2),C=S[0],P=S[1];Object(c.useEffect)((function(){h().then((function(e){u(e.data)}))}),[]);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(d,{newSearch:C,handleSearch:function(e){P(e.target.value)}}),o.a.createElement("h3",null,"Add a New"),o.a.createElement(m,{setNewName:p,setNewNum:g,addNote:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(s)){var n=t.find((function(e){return e.name===s})),r=n.id,c=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n,{number:"".concat(y)});window.confirm("".concat(s," is already added to phonebook, replace the older number with a new one?"))&&v(r,c).then((function(e){u(t.map((function(n){return n.id!==r?n:e.data})))}))}else{var o={name:s,number:y};w(o).then((function(e){u(t.concat(o)),p(""),g("")}))}p(""),g(""),P("")},newName:s,newNum:y,handleNameChange:function(e){p(e.target.value)},handleNumChange:function(e){g(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(l,{persons:t,newSearch:C,deletePerson:function(e){window.confirm("Confirm?")&&E(e).then((function(n){u(t.filter((function(n){return n.id!==e})))}))}}))}),null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9e3f9aed.chunk.js.map