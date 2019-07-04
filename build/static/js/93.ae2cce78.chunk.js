(window.webpackJsonp=window.webpackJsonp||[]).push([[93,28,30,33,36],{1220:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(30);function i(){var e=Object(o.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return e},e}var c=n(27).c.div(i());t.default=function(e){return a.a.createElement(c,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1221:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(30),i=n(27),c=n(6);function l(){var e=Object(o.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return l=function(){return e},e}function s(){var e=Object(o.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return s=function(){return e},e}var u=i.c.h3(s(),Object(c.palette)("text",0)),p=i.c.p(l(),Object(c.palette)("text",3)),m=function(e){return a.a.createElement("div",null,e.title?a.a.createElement(u,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?a.a.createElement(p,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function f(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return e},e}var d=i.c.div(f(),Object(c.palette)("border",0),"");t.default=function(e){return a.a.createElement(d,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},a.a.createElement(m,{title:e.title,subtitle:e.subtitle}),e.children)}},1222:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(30),i=n(27),c=n(6),l=n(42);function s(){var e=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return e},e}var u=i.c.h1(s(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),p=Object(l.a)(u);t.default=function(e){return a.a.createElement(p,{className:"isoComponentTitle"},e.children)}},1224:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(30),i=n(27),c=n(6),l=n(42);function s(){var e=Object(o.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return s=function(){return e},e}var u=i.c.div(s(),function(e){return"rtl"===e["data-rtl"]?"0":"10px"},function(e){return"rtl"===e["data-rtl"]?"10px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0":"295px"},function(e){return"rtl"===e["data-rtl"]?"295px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"},function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"},function(e){return"rtl"===e["data-rtl"]?"0":"8px"},function(e){return"rtl"===e["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(e){return"rtl"===e["data-rtl"]?"auto":"6px"},function(e){return"rtl"===e["data-rtl"]?"6px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"15px"},function(e){return"rtl"===e["data-rtl"]?"15px":"0"},function(e){return e["data-rtl"],"0"},function(e){return e["data-rtl"],"0"}),p=Object(l.a)(u);t.default=function(e){return a.a.createElement(p,{className:"isoExampleWrapper",style:e.style},e.children)}},1225:function(e,t,n){"use strict";var r=n(116),a=n.n(r)()({});t.a=a},1226:function(e,t){e.exports={isFunction:function(e){return"function"===typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}},1227:function(e,t,n){"use strict";var r={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.a=r},1230:function(e,t,n){var r=n(1231);e.exports=new r},1231:function(e,t,n){var r=n(1232),a=n(1226),o=a.each,i=a.isFunction,c=a.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,n){var a=this.queries,l=n&&this.browserIsIncapable;return a[e]||(a[e]=new r(e,l)),i(t)&&(t={match:t}),c(t)||(t=[t]),o(t,function(t){i(t)&&(t={match:t}),a[e].addHandler(t)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l},1232:function(e,t,n){var r=n(1233),a=n(1226).each;function o(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}o.prototype={constuctor:o,addHandler:function(e){var t=new r(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;a(t,function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){a(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";a(this.handlers,function(t){t[e]()})}},e.exports=o},1233:function(e,t){function n(e){this.options=e,!e.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=n},1235:function(e,t,n){"use strict";var r=n(1238);t.a=r.a},1236:function(e,t,n){"use strict";var r=n(1237);t.a=r.a},1237:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var r=n(0),a=n(1),o=n(15),i=n.n(o),c=n(1225),l=n(34);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},g=a.oneOfType([a.object,a.number]),E=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,d(t).apply(this,arguments))).renderCol=function(t){var n,a=t.getPrefixCls,o=e.props,l=o.prefixCls,m=o.span,f=o.order,d=o.offset,h=o.push,g=o.pull,E=o.className,y=o.children,v=b(o,["prefixCls","span","order","offset","push","pull","className","children"]),x=a("col",l),w={};["xs","sm","md","lg","xl","xxl"].forEach(function(e){var t,n={};"number"===typeof o[e]?n.span=o[e]:"object"===p(o[e])&&(n=o[e]||{}),delete v[e],w=u({},w,(s(t={},"".concat(x,"-").concat(e,"-").concat(n.span),void 0!==n.span),s(t,"".concat(x,"-").concat(e,"-order-").concat(n.order),n.order||0===n.order),s(t,"".concat(x,"-").concat(e,"-offset-").concat(n.offset),n.offset||0===n.offset),s(t,"".concat(x,"-").concat(e,"-push-").concat(n.push),n.push||0===n.push),s(t,"".concat(x,"-").concat(e,"-pull-").concat(n.pull),n.pull||0===n.pull),t))});var O=i()(x,(s(n={},"".concat(x,"-").concat(m),void 0!==m),s(n,"".concat(x,"-order-").concat(f),f),s(n,"".concat(x,"-offset-").concat(d),d),s(n,"".concat(x,"-push-").concat(h),h),s(n,"".concat(x,"-pull-").concat(g),g),n),E,w);return r.createElement(c.a.Consumer,null,function(e){var t=e.gutter,n=v.style;return t>0&&(n=u({paddingLeft:t/2,paddingRight:t/2},n)),r.createElement("div",u({},v,{style:n,className:O}),y)})},e}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return r.createElement(l.a,null,this.renderCol)}}])&&m(n.prototype,a),o&&m(n,o),t}();E.propTypes={span:a.number,order:a.number,offset:a.number,push:a.number,pull:a.number,className:a.string,children:a.node,xs:g,sm:g,md:g,lg:g,xl:g,xxl:g}},1238:function(e,t,n){"use strict";var r,a=n(34),o=n(0),i=n(15),c=n.n(i),l=n(1),s=n(1225),u=n(134);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}if("undefined"!==typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}},r=n(1230)}var f=["xxl","xl","lg","md","sm","xs"],d={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},h=[],b=-1,g={},E={dispatch:function(e){return g=e,!(h.length<1)&&(h.forEach(function(e){e.func(g)}),!0)},subscribe:function(e){0===h.length&&this.register();var t=(++b).toString();return h.push({token:t,func:e}),e(g),t},unsubscribe:function(e){0===(h=h.filter(function(t){return t.token!==e})).length&&this.unregister()},unregister:function(){Object.keys(d).map(function(e){return r.unregister(d[e])})},register:function(){var e=this;Object.keys(d).map(function(t){return r.register(d[t],{match:function(){var n=m({},g,p({},t,!0));e.dispatch(n)},unmatch:function(){var n=m({},g,p({},t,!1));e.dispatch(n)},destroy:function(){}})})}};function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return S});var k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},B=Object(u.a)("top","middle","bottom"),N=Object(u.a)("start","end","center","space-around","space-between"),S=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=O(this,j(t).apply(this,arguments))).state={screens:{}},e.renderRow=function(t){var n,r=t.getPrefixCls,a=e.props,i=a.prefixCls,l=a.type,u=a.justify,p=a.align,m=a.className,f=a.style,d=a.children,h=k(a,["prefixCls","type","justify","align","className","style","children"]),b=r("row",i),g=e.getGutter(),E=c()((x(n={},b,!l),x(n,"".concat(b,"-").concat(l),l),x(n,"".concat(b,"-").concat(l,"-").concat(u),l&&u),x(n,"".concat(b,"-").concat(l,"-").concat(p),l&&p),n),m),y=g>0?v({marginLeft:g/-2,marginRight:g/-2},f):f,w=v({},h);return delete w.gutter,o.createElement(s.a.Provider,{value:{gutter:g}},o.createElement("div",v({},w,{className:E,style:y}),d))},e}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,o["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.token=E.subscribe(function(t){"object"===y(e.props.gutter)&&e.setState({screens:t})})}},{key:"componentWillUnmount",value:function(){E.unsubscribe(this.token)}},{key:"getGutter",value:function(){var e=this.props.gutter;if("object"===y(e))for(var t=0;t<f.length;t++){var n=f[t];if(this.state.screens[n]&&void 0!==e[n])return e[n]}return e}},{key:"render",value:function(){return o.createElement(a.a,null,this.renderRow)}}])&&w(n.prototype,r),i&&w(n,i),t}();S.defaultProps={gutter:0},S.propTypes={type:l.oneOf(["flex"]),align:l.oneOf(B),justify:l.oneOf(N),className:l.string,children:l.node,gutter:l.oneOfType([l.object,l.number]),prefixCls:l.string}},2480:function(e,t,n){"use strict";n.r(t);var r=n(16),a=n(17),o=n(22),i=n(21),c=n(23),l=n(0),s=n.n(l),u=n(1235),p=n(1236),m=n(177),f=n(187),d=n(1222),h=n(1221),b=n(1220),g=n(1224),E=n(1227),y=n(28),v=n(30),x=n(27),w=n(6),O=n(42);function j(){var e=Object(v.a)(["\n  font-size: 13px;\n  color: ",";\n  text-align: ",";\n"]);return j=function(){return e},e}var P=x.c.div(j(),Object(w.palette)("text",1),function(e){return"rtl"===e["data-rtl"]?"right":"left"}),k=Object(O.a)(P);n.d(t,"default",function(){return N});var B=s.a.createElement(k,null,s.a.createElement("p",null,"The most basic example. ",s.a.createElement("br",null),"The size of the floating layer depends",s.a.createElement("br",null)," on the contents region."),s.a.createElement("p",null,"Content")),N=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={visible:!1},n.hide=function(){n.setState({visible:!1})},n.handleVisibleChange=function(e){n.setState({visible:e})},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=E.a.rowStyle,t=E.a.colStyle,n=E.a.gutter;return s.a.createElement(b.default,null,s.a.createElement(d.default,null,s.a.createElement(y.a,{id:"uiElements.popover.popover"})),s.a.createElement(u.a,{style:e,gutter:n,justify:"start"},s.a.createElement(p.a,{md:12,sm:12,xs:24,style:t},s.a.createElement(h.default,{title:s.a.createElement(y.a,{id:"uiElements.popover.basicExample"}),subtitle:s.a.createElement(y.a,{id:"uiElements.popover.basicExampleSubTitle"})},s.a.createElement(g.default,null,s.a.createElement(m.a,{content:B,title:s.a.createElement(y.a,{id:"uiElements.popover.title"})},s.a.createElement(f.b,{type:"primary"},s.a.createElement(y.a,{id:"uiElements.popover.hoverMe"})))))),s.a.createElement(p.a,{md:12,sm:12,xs:24,style:t},s.a.createElement(h.default,{title:s.a.createElement(y.a,{id:"uiElements.popover.titleTrigger"}),subtitle:s.a.createElement(y.a,{id:"uiElements.popover.titleTriggerSubTitle"})},s.a.createElement(g.default,null,s.a.createElement(m.a,{content:B,title:s.a.createElement(y.a,{id:"uiElements.popover.title"}),trigger:"hover"},s.a.createElement(f.b,{className:"demoBtn"},s.a.createElement(y.a,{id:"uiElements.popover.hoverMe"}))),s.a.createElement(m.a,{content:B,title:s.a.createElement(y.a,{id:"uiElements.popover.title"}),trigger:"focus"},s.a.createElement(f.b,{className:"demoBtn"},s.a.createElement(y.a,{id:"uiElements.popover.focusMe"}))),s.a.createElement(m.a,{content:B,title:s.a.createElement(y.a,{id:"uiElements.popover.title"}),trigger:"click"},s.a.createElement(f.b,{className:"demoBtn"},s.a.createElement(y.a,{id:"uiElements.popover.clickMe"}))))))),s.a.createElement(u.a,{style:e,gutter:n,justify:"start"},s.a.createElement(p.a,{md:12,sm:12,xs:24,style:t},s.a.createElement(h.default,{title:s.a.createElement(y.a,{id:"uiElements.popover.placement"}),subtitle:s.a.createElement(y.a,{id:"uiElements.popover.placementSubTitle"})},s.a.createElement(g.default,null,s.a.createElement("div",{className:"demoBtnsWrapper"},s.a.createElement(m.a,{placement:"topLeft",title:s.a.createElement(y.a,{id:"uiElements.popover.topLeft"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.TL"}))),s.a.createElement(m.a,{placement:"top",title:s.a.createElement(y.a,{id:"uiElements.popover.top"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.top"}))),s.a.createElement(m.a,{placement:"topRight",title:s.a.createElement(y.a,{id:"uiElements.popover.topRight"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.TR"})))),s.a.createElement("div",{className:"demoBtnsWrapper"},s.a.createElement(m.a,{placement:"leftTop",title:s.a.createElement(y.a,{id:"uiElements.popover.leftTop"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.LT"}))),s.a.createElement(m.a,{placement:"left",title:s.a.createElement(y.a,{id:"uiElements.popover.left"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.left"}))),s.a.createElement(m.a,{placement:"leftBottom",title:s.a.createElement(y.a,{id:"uiElements.popover.leftBottom"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.LB"})))),s.a.createElement("div",{className:"demoBtnsWrapper"},s.a.createElement(m.a,{placement:"rightTop",title:s.a.createElement(y.a,{id:"uiElements.popover.rightTop"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.RT"}))),s.a.createElement(m.a,{placement:"right",title:s.a.createElement(y.a,{id:"uiElements.popover.right"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.right"}))),s.a.createElement(m.a,{placement:"rightBottom",title:"Right Bottom",content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.RB"})))),s.a.createElement("div",{className:"demoBtnsWrapper"},s.a.createElement(m.a,{placement:"bottomLeft",title:s.a.createElement(y.a,{id:"uiElements.popover.bottomLeft"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.BL"}))),s.a.createElement(m.a,{placement:"bottom",title:s.a.createElement(y.a,{id:"uiElements.popover.bottom"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.bottom"}))),s.a.createElement(m.a,{placement:"bottomRight",title:s.a.createElement(y.a,{id:"uiElements.popover.bottomRight"}),content:B,trigger:"click"},s.a.createElement(f.b,{className:"demoPosBtn"},s.a.createElement(y.a,{id:"uiElements.popover.BR"}))))))),s.a.createElement(p.a,{md:12,sm:12,xs:24,style:t},s.a.createElement(h.default,{title:s.a.createElement(y.a,{id:"uiElements.popover.boxTitle"}),subtitle:s.a.createElement(y.a,{id:"uiElements.popover.boxSubTitle"})},s.a.createElement(g.default,null,s.a.createElement(m.a,{content:s.a.createElement("a",{onClick:this.hide,href:"# "},s.a.createElement(y.a,{id:"uiElements.popover.close"})),title:s.a.createElement(y.a,{id:"uiElements.popover.title"}),trigger:"click",visible:this.state.visible,onVisibleChange:this.handleVisibleChange},s.a.createElement(f.b,{type:"primary"},s.a.createElement(y.a,{id:"uiElements.popover.clickMe"}))))))))}}]),t}(l.Component)}}]);
//# sourceMappingURL=93.ae2cce78.chunk.js.map