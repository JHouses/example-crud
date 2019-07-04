(window.webpackJsonp=window.webpackJsonp||[]).push([[128,28,30,33,36],{1220:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30);function i(){var e=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return e},e}var c=n(27).c.div(i());t.default=function(e){return r.a.createElement(c,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1221:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30),i=n(27),c=n(6);function d(){var e=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return d=function(){return e},e}function o(){var e=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return o=function(){return e},e}var m=i.c.h3(o(),Object(c.palette)("text",0)),s=i.c.p(d(),Object(c.palette)("text",3)),u=function(e){return r.a.createElement("div",null,e.title?r.a.createElement(m,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?r.a.createElement(s,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function p(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return p=function(){return e},e}var f=i.c.div(p(),Object(c.palette)("border",0),"");t.default=function(e){return r.a.createElement(f,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},r.a.createElement(u,{title:e.title,subtitle:e.subtitle}),e.children)}},1222:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30),i=n(27),c=n(6),d=n(42);function o(){var e=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return o=function(){return e},e}var m=i.c.h1(o(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),s=Object(d.a)(m);t.default=function(e){return r.a.createElement(s,{className:"isoComponentTitle"},e.children)}},1224:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30),i=n(27),c=n(6),d=n(42);function o(){var e=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return o=function(){return e},e}var m=i.c.div(o(),function(e){return"rtl"===e["data-rtl"]?"0":"10px"},function(e){return"rtl"===e["data-rtl"]?"10px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0":"295px"},function(e){return"rtl"===e["data-rtl"]?"295px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"},function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"},function(e){return"rtl"===e["data-rtl"]?"0":"8px"},function(e){return"rtl"===e["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(e){return"rtl"===e["data-rtl"]?"auto":"6px"},function(e){return"rtl"===e["data-rtl"]?"6px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"15px"},function(e){return"rtl"===e["data-rtl"]?"15px":"0"},function(e){return e["data-rtl"],"0"},function(e){return e["data-rtl"],"0"}),s=Object(d.a)(m);t.default=function(e){return r.a.createElement(s,{className:"isoExampleWrapper",style:e.style},e.children)}},1227:function(e,t,n){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.a=a},2457:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(17),l=n(22),i=n(21),c=n(23),d=n(0),o=n.n(d),m=n(1235),s=n(1236),u=n(1222),p=n(1221),f=n(1220),x=n(1224),E=n(1227),g=n(28),h=n(30),b=n(2400).a,w=n(27),y=n(6);function j(){var e=Object(h.a)(["\n  .ant-card-head {\n    background-color: ",";\n    "," border-bottom: 0;\n\n    .ant-card-head-title {\n      color: ",";\n    }\n  }\n\n  .ant-card-extra {\n    a {\n      color: ",";\n      text-decoration: none;\n\n      &:focus {\n        text-decoration: none;\n      }\n    }\n  }\n\n  .ant-card-body {\n    p {\n      font-size: 13px;\n      color: ",";\n      line-height: 1.5;\n      margin-bottom: 14px;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  &.ant-card-bordered {\n    border: 1px solid ",";\n\n    .ant-card-head {\n      border-bottom: 1px solid ",";\n    }\n\n    &:hover {\n      border: 1px solid "," !important;\n    }\n  }\n\n  &.ant-card-loading {\n    .ant-card-body {\n      p {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  .custom-card {\n    padding: 10px 16px;\n    h3 {\n      color: ",";\n      font-weight: 500;\n    }\n    p {\n      color: ",";\n    }\n  }\n\n  .custom-image img {\n    display: block;\n  }\n"]);return j=function(){return e},e}var O=Object(w.c)(function(e){return o.a.createElement(b,e)})(j(),Object(y.palette)("grayscale",4),"",Object(y.palette)("text",0),Object(y.palette)("primary",0),Object(y.palette)("text",3),Object(y.palette)("border",0),Object(y.palette)("border",0),Object(y.palette)("border",0),Object(y.palette)("text",1),Object(y.palette)("grayscale",0));n.d(t,"default",function(){return v});var v=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=E.a.rowStyle,t=E.a.colStyle,n=E.a.gutter;return o.a.createElement(f.default,null,o.a.createElement(u.default,null,o.a.createElement(g.a,{id:"uiElements.cards.cards"})),o.a.createElement(m.a,{style:e,gutter:n,justify:"start"},o.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},o.a.createElement(p.default,{title:o.a.createElement(g.a,{id:"uiElements.cards.basicCard"}),subtitle:o.a.createElement(g.a,{id:"uiElements.cards.basicCardSubTitle"})},o.a.createElement(x.default,null,o.a.createElement(O,{title:o.a.createElement(g.a,{id:"uiElements.cards.cardTitle"}),extra:o.a.createElement("a",{href:"# "},o.a.createElement(g.a,{id:"uiElements.cards.more"})),style:{width:"100%"}},o.a.createElement("p",null,o.a.createElement(g.a,{id:"uiElements.cards.lorem"})),o.a.createElement("p",null,o.a.createElement(g.a,{id:"uiElements.cards.cardContent"})))))),o.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},o.a.createElement(p.default,{title:o.a.createElement(g.a,{id:"uiElements.cards.noBorder"}),subtitle:o.a.createElement(g.a,{id:"uiElements.cards.noBorderSubTitle"})},o.a.createElement(x.default,null,o.a.createElement(O,{title:o.a.createElement(g.a,{id:"uiElements.cards.cardTitle"}),bordered:!1,style:{width:"100%"}},o.a.createElement("p",null,o.a.createElement(g.a,{id:"uiElements.cards.lorem"})),o.a.createElement("p",null,o.a.createElement(g.a,{id:"uiElements.cards.cardContent"}))))))),o.a.createElement(m.a,{style:e,gutter:n,justify:"start"},o.a.createElement(s.a,{span:24,style:t},o.a.createElement(p.default,{title:o.a.createElement(g.a,{id:"uiElements.cards.gridCard"}),subtitle:o.a.createElement(g.a,{id:"uiElements.cards.gridCardSubTitle"})},o.a.createElement(m.a,null,o.a.createElement(x.default,{style:{overflow:"hidden"}},o.a.createElement(s.a,{md:8,sm:8,xs:24,style:{padding:"0 8px"}},o.a.createElement(O,{title:o.a.createElement(g.a,{id:"uiElements.cards.cardTitle"})},o.a.createElement(g.a,{id:"uiElements.cards.cardContent"}))),o.a.createElement(s.a,{md:8,sm:8,xs:24,style:{padding:"0 8px"}},o.a.createElement(O,{title:o.a.createElement(g.a,{id:"uiElements.cards.cardTitle"})},o.a.createElement(g.a,{id:"uiElements.cards.cardContent"}))),o.a.createElement(s.a,{md:8,sm:8,xs:24,style:{padding:"0 8px"}},o.a.createElement(O,{title:o.a.createElement(g.a,{id:"uiElements.cards.cardTitle"})},o.a.createElement(g.a,{id:"uiElements.cards.cardContent"})))))))),o.a.createElement(m.a,{style:e,gutter:n,justify:"start"},o.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},o.a.createElement(p.default,{title:o.a.createElement(g.a,{id:"uiElements.cards.loadingCard"}),subtitle:o.a.createElement(g.a,{id:"uiElements.cards.loadingCardSubTitle"})},o.a.createElement(x.default,null,o.a.createElement(O,{loading:!0,title:o.a.createElement(g.a,{id:"uiElements.cards.cardTitle"}),style:{width:"100%"}},o.a.createElement(g.a,{id:"uiElements.cards.whateverContent"}))))),o.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},o.a.createElement(p.default,{title:o.a.createElement(g.a,{id:"uiElements.cards.customizedContentTitle"}),subtitle:o.a.createElement(g.a,{id:"uiElements.cards.customizedContent"})},o.a.createElement(x.default,null,o.a.createElement(O,{bodyStyle:{padding:0}},o.a.createElement("div",{className:"custom-image"},o.a.createElement("img",{alt:"example",width:"100%",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})),o.a.createElement("div",{className:"custom-card"},o.a.createElement("h3",null,o.a.createElement(g.a,{id:"uiElements.cards.europeStreetBeat"})),o.a.createElement("p",null,o.a.createElement(g.a,{id:"uiElements.cards.instagram"})))))))))}}]),t}(d.Component)}}]);
//# sourceMappingURL=128.61a21188.chunk.js.map