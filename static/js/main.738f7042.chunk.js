(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(1),l=a.n(c),s=a(18),n=a.n(s),r=(a(47),a(23),a(24),a(3)),i=a(6),o=a.n(i),b=a(0);var d=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],l=t[1],s=Object(c.useState)(""),n=Object(r.a)(s,2),i=n[0],d=n[1],j=Object(c.useState)(""),u=Object(r.a)(j,2),h=u[0],x=u[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{class:"text-light fw-light landing-text",children:h}),Object(b.jsx)("p",{class:"text-light",children:"fact number"}),Object(b.jsx)("hr",{class:"text-light"}),Object(b.jsxs)("h1",{class:"text-light fw-light landing-text",children:['"',a,'"']}),Object(b.jsx)("a",{class:"text-light text-decoration-none",href:i,target:"_blank",rel:"noopener noreferrer",children:"source"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{class:"btn btn-lg btn-outline-light",onClick:function(){o.a.get("https://coolcowfacts.herokuapp.com/",{crossdomain:!0}).then((function(e){l(e.data[0].fact),d(e.data[0].sources),x(e.data[0].id)}))},children:"Next Fact"})]})};var j=function(){return Object(b.jsx)("nav",{class:"navbar navbar-expand-lg sticky-top navbar-light bg-light",children:Object(b.jsxs)("div",{class:"container-fluid",children:[Object(b.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{class:"navbar-toggler-icon"})}),Object(b.jsx)("a",{class:"navbar-brand",href:"#",children:"Cool Cow Facts"}),Object(b.jsx)("div",{class:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:Object(b.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("button",{type:"button",class:"btn btn-link nav-link active","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Submit Fact"})})]})})]})})};var u=function(){return Object(b.jsx)("footer",{class:"footer mt-auto py-3 bg-light",children:Object(b.jsx)("div",{class:"container",children:Object(b.jsxs)("p",{class:"text-muted text-center",children:[" Copyright \xa9 ",(new Date).getFullYear()," Cool Cow Facts"]})})})};a(44);var h=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],l=t[1],s=Object(c.useState)(""),n=Object(r.a)(s,2),i=n[0],d=n[1],j=Object(c.useState)(""),u=Object(r.a)(j,2),h=u[0],x=u[1];return Object(b.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{class:"modal-dialog",children:Object(b.jsxs)("div",{class:"modal-content",children:[Object(b.jsxs)("div",{class:"modal-header",children:[Object(b.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Add a Fact"}),Object(b.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{class:"modal-body",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={Email:a,Fact:i,Source:h};o()({method:"post",url:"https://coolcowfacts.herokuapp.com/create",data:{title:t},headers:{"Content-Type":"text/plain;charset=utf-8"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:[Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"InputEmail",class:"form-label",children:"Email address"}),Object(b.jsx)("input",{type:"email",class:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"enter your email...",value:a,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"InputFact",class:"form-label",children:"Fact"}),Object(b.jsx)("input",{type:"text",class:"form-control",id:"InputFact","aria-describedby":"emailHelp",placeholder:"enter your fact...",value:i,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"InputSource",class:"form-label",children:"Source"}),Object(b.jsx)("input",{type:"url",class:"form-control",id:"InputSource","aria-describedby":"emailHelp",placeholder:"enter your source...",value:h,onChange:function(e){return x(e.target.value)},required:!0})]}),Object(b.jsx)("div",{class:"modal-footer",children:Object(b.jsx)("button",{class:"btn btn-outline-dark",children:"Submit"})})]})})]})})})};var x=function(){return Object(b.jsxs)("div",{className:"App",class:"app",children:[Object(b.jsx)(j,{}),Object(b.jsxs)("div",{class:"main",children:[Object(b.jsx)(d,{}),Object(b.jsx)(h,{})]}),Object(b.jsx)(u,{})]})};n.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.738f7042.chunk.js.map