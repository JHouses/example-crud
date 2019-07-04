(window.webpackJsonp=window.webpackJsonp||[]).push([[88,28,30,33,36],{1220:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(30);function i(){var t=Object(o.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return t},t}var c=e(27).c.div(i());n.default=function(t){return a.a.createElement(c,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1221:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(30),i=e(27),c=e(6);function l(){var t=Object(o.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return l=function(){return t},t}function s(){var t=Object(o.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return s=function(){return t},t}var u=i.c.h3(s(),Object(c.palette)("text",0)),p=i.c.p(l(),Object(c.palette)("text",3)),f=function(t){return a.a.createElement("div",null,t.title?a.a.createElement(u,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?a.a.createElement(p,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function d(){var t=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return d=function(){return t},t}var h=i.c.div(d(),Object(c.palette)("border",0),"");n.default=function(t){return a.a.createElement(h,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},a.a.createElement(f,{title:t.title,subtitle:t.subtitle}),t.children)}},1222:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(30),i=e(27),c=e(6),l=e(42);function s(){var t=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return t},t}var u=i.c.h1(s(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),p=Object(l.a)(u);n.default=function(t){return a.a.createElement(p,{className:"isoComponentTitle"},t.children)}},1224:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(30),i=e(27),c=e(6),l=e(42);function s(){var t=Object(o.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return s=function(){return t},t}var u=i.c.div(s(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),p=Object(l.a)(u);n.default=function(t){return a.a.createElement(p,{className:"isoExampleWrapper",style:t.style},t.children)}},1225:function(t,n,e){"use strict";var r=e(116),a=e.n(r)()({});n.a=a},1226:function(t,n){t.exports={isFunction:function(t){return"function"===typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,n){for(var e=0,r=t.length;e<r&&!1!==n(t[e],e);e++);}}},1230:function(t,n,e){var r=e(1231);t.exports=new r},1231:function(t,n,e){var r=e(1232),a=e(1226),o=a.each,i=a.isFunction,c=a.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(t,n,e){var a=this.queries,l=e&&this.browserIsIncapable;return a[t]||(a[t]=new r(t,l)),i(n)&&(n={match:n}),c(n)||(n=[n]),o(n,function(n){i(n)&&(n={match:n}),a[t].addHandler(n)}),this},unregister:function(t,n){var e=this.queries[t];return e&&(n?e.removeHandler(n):(e.clear(),delete this.queries[t])),this}},t.exports=l},1232:function(t,n,e){var r=e(1233),a=e(1226).each;function o(t,n){this.query=t,this.isUnconditional=n,this.handlers=[],this.mql=window.matchMedia(t);var e=this;this.listener=function(t){e.mql=t.currentTarget||t,e.assess()},this.mql.addListener(this.listener)}o.prototype={constuctor:o,addHandler:function(t){var n=new r(t);this.handlers.push(n),this.matches()&&n.on()},removeHandler:function(t){var n=this.handlers;a(n,function(e,r){if(e.equals(t))return e.destroy(),!n.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){a(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";a(this.handlers,function(n){n[t]()})}},t.exports=o},1233:function(t,n){function e(t){this.options=t,!t.deferSetup&&this.setup()}e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=e},1235:function(t,n,e){"use strict";var r=e(1238);n.a=r.a},1236:function(t,n,e){"use strict";var r=e(1237);n.a=r.a},1237:function(t,n,e){"use strict";e.d(n,"a",function(){return y});var r=e(0),a=e(1),o=e(15),i=e.n(o),c=e(1225),l=e(34);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,n){return(m=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var b=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(e[r[a]]=t[r[a]])}return e},g=a.oneOfType([a.object,a.number]),y=function(t){function n(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=d(this,h(n).apply(this,arguments))).renderCol=function(n){var e,a=n.getPrefixCls,o=t.props,l=o.prefixCls,f=o.span,d=o.order,h=o.offset,m=o.push,g=o.pull,y=o.className,x=o.children,v=b(o,["prefixCls","span","order","offset","push","pull","className","children"]),w=a("col",l),O={};["xs","sm","md","lg","xl","xxl"].forEach(function(t){var n,e={};"number"===typeof o[t]?e.span=o[t]:"object"===p(o[t])&&(e=o[t]||{}),delete v[t],O=u({},O,(s(n={},"".concat(w,"-").concat(t,"-").concat(e.span),void 0!==e.span),s(n,"".concat(w,"-").concat(t,"-order-").concat(e.order),e.order||0===e.order),s(n,"".concat(w,"-").concat(t,"-offset-").concat(e.offset),e.offset||0===e.offset),s(n,"".concat(w,"-").concat(t,"-push-").concat(e.push),e.push||0===e.push),s(n,"".concat(w,"-").concat(t,"-pull-").concat(e.pull),e.pull||0===e.pull),n))});var j=i()(w,(s(e={},"".concat(w,"-").concat(f),void 0!==f),s(e,"".concat(w,"-order-").concat(d),d),s(e,"".concat(w,"-offset-").concat(h),h),s(e,"".concat(w,"-push-").concat(m),m),s(e,"".concat(w,"-pull-").concat(g),g),e),y,O);return r.createElement(c.a.Consumer,null,function(t){var n=t.gutter,e=v.style;return n>0&&(e=u({paddingLeft:n/2,paddingRight:n/2},e)),r.createElement("div",u({},v,{style:e,className:j}),x)})},t}var e,a,o;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&m(t,n)}(n,r["Component"]),e=n,(a=[{key:"render",value:function(){return r.createElement(l.a,null,this.renderCol)}}])&&f(e.prototype,a),o&&f(e,o),n}();y.propTypes={span:a.number,order:a.number,offset:a.number,push:a.number,pull:a.number,className:a.string,children:a.node,xs:g,sm:g,md:g,lg:g,xl:g,xxl:g}},1238:function(t,n,e){"use strict";var r,a=e(34),o=e(0),i=e(15),c=e.n(i),l=e(1),s=e(1225),u=e(134);function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function f(){return(f=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}if("undefined"!==typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},r=e(1230)}var d=["xxl","xl","lg","md","sm","xs"],h={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},m=[],b=-1,g={},y={dispatch:function(t){return g=t,!(m.length<1)&&(m.forEach(function(t){t.func(g)}),!0)},subscribe:function(t){0===m.length&&this.register();var n=(++b).toString();return m.push({token:n,func:t}),t(g),n},unsubscribe:function(t){0===(m=m.filter(function(n){return n.token!==t})).length&&this.unregister()},unregister:function(){Object.keys(h).map(function(t){return r.unregister(h[t])})},register:function(){var t=this;Object.keys(h).map(function(n){return r.register(h[n],{match:function(){var e=f({},g,p({},n,!0));t.dispatch(e)},unmatch:function(){var e=f({},g,p({},n,!1));t.dispatch(e)},destroy:function(){}})})}};function x(t){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function w(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function O(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,n){return!n||"object"!==x(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,n){return(P=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}e.d(n,"a",function(){return _});var k=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(e[r[a]]=t[r[a]])}return e},C=Object(u.a)("top","middle","bottom"),S=Object(u.a)("start","end","center","space-around","space-between"),_=function(t){function n(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=j(this,E(n).apply(this,arguments))).state={screens:{}},t.renderRow=function(n){var e,r=n.getPrefixCls,a=t.props,i=a.prefixCls,l=a.type,u=a.justify,p=a.align,f=a.className,d=a.style,h=a.children,m=k(a,["prefixCls","type","justify","align","className","style","children"]),b=r("row",i),g=t.getGutter(),y=c()((w(e={},b,!l),w(e,"".concat(b,"-").concat(l),l),w(e,"".concat(b,"-").concat(l,"-").concat(u),l&&u),w(e,"".concat(b,"-").concat(l,"-").concat(p),l&&p),e),f),x=g>0?v({marginLeft:g/-2,marginRight:g/-2},d):d,O=v({},m);return delete O.gutter,o.createElement(s.a.Provider,{value:{gutter:g}},o.createElement("div",v({},O,{className:y,style:x}),h))},t}var e,r,i;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&P(t,n)}(n,o["Component"]),e=n,(r=[{key:"componentDidMount",value:function(){var t=this;this.token=y.subscribe(function(n){"object"===x(t.props.gutter)&&t.setState({screens:n})})}},{key:"componentWillUnmount",value:function(){y.unsubscribe(this.token)}},{key:"getGutter",value:function(){var t=this.props.gutter;if("object"===x(t))for(var n=0;n<d.length;n++){var e=d[n];if(this.state.screens[e]&&void 0!==t[e])return t[e]}return t}},{key:"render",value:function(){return o.createElement(a.a,null,this.renderRow)}}])&&O(e.prototype,r),i&&O(e,i),n}();_.defaultProps={gutter:0},_.propTypes={type:l.oneOf(["flex"]),align:l.oneOf(C),justify:l.oneOf(S),className:l.string,children:l.node,gutter:l.oneOfType([l.object,l.number]),prefixCls:l.string}},1274:function(t,n,e){"use strict";var r=e(1406),a=e(30),o=e(27),i=e(6),c=e(9);function l(){var t=Object(a.a)(["\n  &.ant-select {\n    box-sizing: border-box;\n    display: inline-block;\n    position: relative;\n    color: ",";\n    font-size: 13px;\n\n    .ant-select-selection {\n      background-color: #fff;\n      border-radius: 4px;\n      border: 1px solid ",";\n      ",";\n\n      &.ant-select-selection--single {\n        height: 35px;\n        position: relative;\n        cursor: pointer;\n      }\n\n      .ant-select-selection__rendered {\n        margin-left: 10px;\n        margin-right: 10px;\n        line-height: 33px;\n\n        .ant-select-selection-selected-value {\n          float: ",";\n          padding: ",";\n        }\n      }\n\n      .ant-select-arrow {\n        right: ",";\n        left: ",";\n      }\n\n      &:hover {\n        border-color: ",";\n      }\n    }\n\n    &.ant-select-focused {\n      .ant-select-selection {\n        &:focus,\n        &:active {\n          border-color: ",";\n          outline: 0;\n          box-shadow: 0 0 0 2px ",";\n        }\n      }\n    }\n\n    &.ant-select-open {\n      .ant-select-selection {\n        border-color: ",";\n        outline: 0;\n        box-shadow: 0 0 0 2px ",";\n      }\n    }\n\n    .ant-select-selection--multiple > ul > li,\n    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n      margin-top: 4px;\n      height: 26px;\n      line-height: 26px;\n    }\n\n    .ant-select-selection--multiple .ant-select-selection__choice {\n      background-color: ",";\n      color: ",";\n    }\n\n    .ant-select-tree li a {\n      font-size: 13px;\n      color: ",";\n    }\n  }\n"]);return l=function(){return t},t}var s=e(42);e.d(n,"a",function(){return d});var u,p=(u=r.a,Object(o.c)(u)(l(),Object(i.palette)("text",1),Object(i.palette)("border",0),Object(c.c)(),function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0 0 0 14px":"0 14px 0 0"},function(t){return"rtl"===t["data-rtl"]?"inherit":"7px"},function(t){return"rtl"===t["data-rtl"]?"7px":"inherit"},Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",3),Object(i.palette)("primary",0),Object(i.palette)("primary",3),Object(i.palette)("grayscale",4),Object(i.palette)("text",1),Object(i.palette)("text",1))),f=Object(s.a)(p),d=r.a.Option;n.b=f},1546:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return v});for(var r=e(16),a=e(17),o=e(22),i=e(21),c=e(23),l=e(0),s=e.n(l),u=e(1235),p=e(1236),f=e(1274),d=e(1222),h=e(1221),m=e(1220),b=e(1224),g=f.a,y=[],x=10;x<36;x++)y.push(s.a.createElement(g,{key:x.toString(36)+x},x.toString(36)+x));var v=function(t){function n(){var t,e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=Object(o.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(c)))).handleChange=function(t){},e}return Object(c.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){var t={width:"100%",display:"flex",flexFlow:"row wrap"},n={marginBottom:"16px"};return s.a.createElement(m.default,null,s.a.createElement(d.default,null,"Select"),s.a.createElement(u.a,{style:t,gutter:16,justify:"start"},s.a.createElement(p.a,{md:24,sm:24,xs:24,style:n},s.a.createElement(h.default,{title:"Multiple selection",subtitle:"Multiple selection, selecting from existing items (scroll the menu)"},s.a.createElement(b.default,null,s.a.createElement(f.b,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],onChange:this.handleChange},y))))),s.a.createElement(u.a,{style:t,gutter:16,justify:"start"},s.a.createElement(p.a,{md:12,sm:12,xs:24,style:n},s.a.createElement(h.default,{title:"Basic usage",subtitle:"Basic usage"},s.a.createElement(b.default,null,s.a.createElement(f.b,{defaultValue:"lucy",onChange:this.handleChange,style:{width:"120px"}},s.a.createElement(g,{value:"jack"},"Jack"),s.a.createElement(g,{value:"lucy"},"Lucy"),s.a.createElement(g,{value:"disabled",disabled:!0},"Disabled"),s.a.createElement(g,{value:"Yiminghe"},"yiminghe"))))),s.a.createElement(p.a,{md:12,sm:12,xs:24,style:n},s.a.createElement(h.default,{title:"Disabled",subtitle:"Select Disabled"},s.a.createElement(b.default,null,s.a.createElement(f.b,{defaultValue:"lucy",style:{width:"120px"},allowClear:!0,disabled:!0},s.a.createElement(g,{value:"lucy"},"Lucy")))))),s.a.createElement(u.a,{style:t,gutter:16,justify:"start"},s.a.createElement(p.a,{md:24,sm:24,xs:24,style:n},s.a.createElement(h.default,{title:"Tags",subtitle:"Select with tags, transform input to tag (scroll the menu)"},s.a.createElement(b.default,null,s.a.createElement(f.b,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:this.handleChange},y))))))}}]),n}(l.Component)}}]);
//# sourceMappingURL=88.28ac3dbd.chunk.js.map