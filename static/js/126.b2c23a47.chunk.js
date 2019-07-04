(window.webpackJsonp=window.webpackJsonp||[]).push([[126,28,30,33,36],{1220:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(30);function i(){var t=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return t},t}var c=n(27).c.div(i());e.default=function(t){return r.a.createElement(c,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1221:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(30),i=n(27),c=n(6);function o(){var t=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return o=function(){return t},t}function u(){var t=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return u=function(){return t},t}var s=i.c.h3(u(),Object(c.palette)("text",0)),d=i.c.p(o(),Object(c.palette)("text",3)),m=function(t){return r.a.createElement("div",null,t.title?r.a.createElement(s,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?r.a.createElement(d,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function p(){var t=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return p=function(){return t},t}var f=i.c.div(p(),Object(c.palette)("border",0),"");e.default=function(t){return r.a.createElement(f,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},r.a.createElement(m,{title:t.title,subtitle:t.subtitle}),t.children)}},1222:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(30),i=n(27),c=n(6),o=n(42);function u(){var t=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return u=function(){return t},t}var s=i.c.h1(u(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),d=Object(o.a)(s);e.default=function(t){return r.a.createElement(d,{className:"isoComponentTitle"},t.children)}},1224:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(30),i=n(27),c=n(6),o=n(42);function u(){var t=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return u=function(){return t},t}var s=i.c.div(u(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),d=Object(o.a)(s);e.default=function(t){return r.a.createElement(d,{className:"isoExampleWrapper",style:t.style},t.children)}},1227:function(t,e,n){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};e.a=a},2465:function(t,e,n){"use strict";n.r(e);var a=n(16),r=n(17),l=n(22),i=n(21),c=n(23),o=n(0),u=n.n(o),s=n(31),d=n(1235),m=n(1236),p=n(1222),f=n(1221),g=n(1220),x=n(1224),h=n(1227),b=n(28),E=n(30),w=n(2404).a,y=n(27),j=n(6),v=n(9),O=n(42);function k(){var t=Object(E.a)(["\n  display: inline-block;\n\n  &:not(.ant-badge-status) {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  i {\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    font-size: 16px;\n  }\n\n  a {\n    font-size: 13px;\n    color: ",";\n  }\n\n  .isoBadgeLink {\n    width: 42px;\n    height: 42px;\n    ",";\n    background: ",";\n    display: inline-block;\n  }\n\n  .ant-badge-count {\n    z-index: 1;\n    background: ",";\n    font-family: ",";\n    ",";\n  }\n  .ant-badge-status-text {\n    margin-left: ",";\n    margin-right: ",";\n  }\n"]);return k=function(){return t},t}var B=Object(y.c)(function(t){return u.a.createElement(w,t)})(k(),function(t){return"rtl"===t["data-rtl"]?"0":"16px"},function(t){return"rtl"===t["data-rtl"]?"16px":"0"},Object(j.palette)("primary",0),Object(v.a)("6px"),Object(j.palette)("grayscale",8),Object(j.palette)("primary",0),Object(j.font)("primary",0),Object(v.b)("0 0 0 1px #fff"),function(t){return"rtl"===t["data-rtl"]?"inherit":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"inherit"}),N=Object(O.a)(B);n.d(e,"default",function(){return S});var S=function(t){function e(){return Object(a.a)(this,e),Object(l.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=h.a.rowStyle,e=h.a.colStyle,n=h.a.gutter;return u.a.createElement(g.default,null,u.a.createElement(p.default,null,u.a.createElement(b.a,{id:"uiElements.badge.badge"})),u.a.createElement(d.a,{style:t,gutter:n,justify:"start"},u.a.createElement(m.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(f.default,{title:u.a.createElement(b.a,{id:"uiElements.badge.basicExample"}),subtitle:u.a.createElement(b.a,{id:"uiElements.badge.basicExampleSubTitle"})},u.a.createElement(x.default,null,u.a.createElement(N,{count:5},u.a.createElement("a",{className:"isoBadgeLink",href:"# "}," ")),u.a.createElement(N,{count:0,showZero:!0},u.a.createElement("a",{className:"isoBadgeLink",href:"# "}," "))))),u.a.createElement(m.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(f.default,{title:u.a.createElement(b.a,{id:"uiElements.badge.overflowCount"}),subtitle:u.a.createElement(b.a,{id:"uiElements.badge.overflowCountSubTitle"})},u.a.createElement(x.default,null,u.a.createElement(N,{count:99},u.a.createElement("a",{className:"isoBadgeLink",href:"# "}," ")),u.a.createElement(N,{count:100},u.a.createElement("a",{className:"isoBadgeLink",href:"# "}," ")),u.a.createElement(N,{count:99,overflowCount:10},u.a.createElement("a",{className:"isoBadgeLink",href:"# "}," ")),u.a.createElement(N,{count:1e3,overflowCount:999},u.a.createElement("a",{className:"isoBadgeLink",href:"# "}," ")))))),u.a.createElement(d.a,{style:t,gutter:n,justify:"start"},u.a.createElement(m.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(f.default,{title:u.a.createElement(b.a,{id:"uiElements.badge.status"}),subtitle:u.a.createElement(b.a,{id:"uiElements.badge.statusSubTitle"})},u.a.createElement(x.default,null,u.a.createElement(N,{status:"success"}),u.a.createElement(N,{status:"error"}),u.a.createElement(N,{status:"default"}),u.a.createElement(N,{status:"processing"}),u.a.createElement(N,{status:"warning"}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(N,{status:"success",text:u.a.createElement(b.a,{id:"uiElements.badge.success"})}),u.a.createElement("br",null),u.a.createElement(N,{status:"error",text:u.a.createElement(b.a,{id:"uiElements.badge.error"})}),u.a.createElement("br",null),u.a.createElement(N,{status:"default",text:u.a.createElement(b.a,{id:"uiElements.badge.default"})}),u.a.createElement("br",null),u.a.createElement(N,{status:"processing",text:u.a.createElement(b.a,{id:"uiElements.badge.processing"})}),u.a.createElement("br",null),u.a.createElement(N,{status:"warning",text:u.a.createElement(b.a,{id:"uiElements.badge.warning"})})))),u.a.createElement(m.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(f.default,{title:u.a.createElement(b.a,{id:"uiElements.badge.redBadge"}),subtitle:u.a.createElement(b.a,{id:"uiElements.badge.redBadgeSubTitle"})},u.a.createElement(x.default,null,u.a.createElement(N,{dot:!0},u.a.createElement(s.a,{type:"notification"})),u.a.createElement(N,{dot:!0},u.a.createElement("a",{href:"."},u.a.createElement(b.a,{id:"uiElements.badge.linkSomething"}))))))))}}]),e}(o.Component)}}]);
//# sourceMappingURL=126.b2c23a47.chunk.js.map