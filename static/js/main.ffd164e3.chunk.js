(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(5),a=c.n(r),s=(c(10),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),r(e),a(e)}))}),j=c(3),l=c(2),b=c(0),o={id:"circle1",cx:50,cy:50,r:48,stroke:"#eee",strokeWidth:2,fill:"none"},d={id:"circle2",cx:50,cy:50,r:45,stroke:"blue",strokeWidth:5,fill:"none",strokeDasharray:"0 ".concat(Math.ceil(2*Math.PI*45)),style:{transform:"rotate(-90deg)",transformOrigin:"center"}},O={x:"50%",y:"50%",fill:"blue",style:{fontSize:"22px",fontWeight:"700"},alignmentBaseline:"middle",textAnchor:"middle"},u=2*Math.PI*d.r,h=function(e){var t=e.initValue,c=void 0===t?0:t,i=Object(n.useState)(c),r=Object(l.a)(i,2),a=r[0],s=r[1],h=Object(n.useState)(d),m=Object(l.a)(h,2),x=m[0],f=m[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"demo1"}),Object(b.jsxs)("svg",{width:"100",height:"100",children:[Object(b.jsx)("circle",Object(j.a)({},o)),Object(b.jsx)("circle",Object(j.a)({},x)),Object(b.jsx)("text",Object(j.a)(Object(j.a)({},O),{},{children:a}))]}),Object(b.jsx)("input",{onChange:function(e){var t=e.target.value;s(t);var c=t/100,n=(1-c)*u,i="".concat(c*u," ").concat(n);f(Object(j.a)(Object(j.a)({},x),{},{strokeDasharray:i}))},value:a,type:"range",min:"0",max:"100",step:"0.01"})]})},m=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){}),[]),Object(b.jsxs)("div",{children:["demo2",Object(b.jsx)("br",{}),Object(b.jsx)("img",{ref:e,id:"img",width:"200",src:"https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png",alt:""})]})},x=function(){var e=Object(n.useState)(120),t=Object(l.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(400),a=Object(l.a)(r,2),s=a[0],j=a[1],o=Object(n.useState)(50),d=Object(l.a)(o,2),O=d[0],u=d[1],h=Object(n.useState)(90),m=Object(l.a)(h,2),x=m[0],f=m[1],g=Object(n.useState)(!0),v=Object(l.a)(g,2),y=v[0],p=v[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"demo3"}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){var e=document.getElementById("move"),t=document.getElementById("scale");y?(i(120),j(400),u(50),f(90),e.beginElement(),t.beginElement(),p(!1)):(i(400),j(120),u(90),f(50),e.beginElement(),t.beginElement(),p(!0))},children:"\u6309\u94ae"})}),Object(b.jsx)("svg",{width:"100%",height:"400",children:Object(b.jsxs)("circle",{cx:"120",cy:"100",r:"50",fill:"none",stroke:"red",children:[Object(b.jsx)("animate",{id:"move",attributeType:"XML",attributeName:"cx",from:c,to:s,begin:"click",dur:"1s",fill:"freeze"}),Object(b.jsx)("animate",{id:"scale",attributeType:"XML",attributeName:"r",from:O,to:x,begin:"click",dur:"1s",fill:"freeze"})]})})]})};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(m,{}),Object(b.jsx)(x,{})]})}),document.getElementById("root")),s()}},[[12,1,2]]]);
//# sourceMappingURL=main.ffd164e3.chunk.js.map