(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/bg.5371ea85.jpg"},20:function(e,t,a){e.exports=a(48)},25:function(e,t,a){},26:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),u=(a(25),a(26),a(16)),s=a.n(u),i=a(4),o=a(3),m=a.n(o),p=a(17),E=a(18),b=a.n(E),d=a(19),f=a.n(d),v=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!1),E(!1),t=d.current.value,a=v.current.value,n=h.current.value,d.current.value="",v.current.value="",h.current.value="",t&&a&&n&&f()(t)){e.next=10;break}return e.abrupt("return",l(!0));case 10:return e.prev=10,e.next=13,b.a.post("https://email-sending-server.herokuapp.com/send-mail",{email:t,subject:a,message:n});case 13:if(200!==e.sent.status){e.next=16;break}return e.abrupt("return",E(!0));case 16:l(!0),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(10),E(!1),l(!0);case 23:case"end":return e.stop()}}),e,null,[[10,19]])})));return function(){return e.apply(this,arguments)}}(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),o=s[0],E=s[1],d=Object(n.useRef)(),v=Object(n.useRef)(),h=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-box"},r.a.createElement("h2",null,"Send me an email"),r.a.createElement("form",null,r.a.createElement("div",{className:"user-box"},r.a.createElement("input",{type:"text",ref:d,required:!0}),r.a.createElement("label",null,"Email")),r.a.createElement("div",{className:"user-box"},r.a.createElement("input",{type:"text",ref:v,required:!0}),r.a.createElement("label",null,"Subject")),r.a.createElement("div",{className:"user-box"},r.a.createElement("input",{type:"text",ref:h,required:!0}),r.a.createElement("label",null,"Message")),c&&r.a.createElement("h3",{className:"error"},"Fields are badly formatted!"),o&&r.a.createElement("h3",{className:"success"},"Email sent successfully!"),r.a.createElement("a",{onClick:function(){return e()}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"Send"))))},h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:s.a,alt:"background"}),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e954ed0c.chunk.js.map