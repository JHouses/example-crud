(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{2448:function(e,t,n){"use strict";n.r(t);var r=n(16),o=n(17),i=n(22),a=n(21),f=n(23),l=n(0),u=n.n(l),c=n(52),s=n(15),p=n.n(s),d=n(90),h=n(34),m=n(120),y=n.n(m);function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){var t,n=function(){if(null==t){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];t=y()(function(n){return function(){t=null,e.apply(void 0,v(n))}}(r))}};return n.cancel=function(){return y.a.cancel(t)},n}function g(){return function(e,t,n){var r=n.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(t))return r;var n=b(r.bind(this));return o=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),o=!1,n}}}}var w=n(464),x=n(47),E=n(103);function O(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function P(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function j(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n)return n+(window.innerHeight-t.bottom)}var S=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],A=[];function N(e,t){if(e){var n=A.find(function(t){return t.target===e});n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},A.push(n),S.forEach(function(t){n.eventHandlers[t]=Object(E.a)(e,t,function(e){n.affixList.forEach(function(t){t.lazyUpdatePosition(e)})})}))}}function T(e){var t=A.find(function(t){var n=t.affixList.some(function(t){return t===e});return n&&(t.affixList=t.affixList.filter(function(t){return t!==e})),n});t&&0===t.affixList.length&&(A=A.filter(function(e){return e!==t}),S.forEach(function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()}))}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return!t||"object"!==R(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var z,H=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":R(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var f=e.length-1;f>=0;f--)(o=e[f])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};!function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"}(z||(z={}));var U=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=B(this,_(t).apply(this,arguments))).state={status:z.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props,n=t.offset,r=t.offsetBottom,o=e.props.offsetTop;return"undefined"===typeof o&&(o=n,Object(x.a)("undefined"===typeof n,"Affix","`offset` is deprecated. Please use `offsetTop` instead.")),void 0===r&&void 0===o&&(o=0),o},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.prepareMeasure=function(t){e.setState({status:z.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.measure=function(){var t=e.state,n=t.status,r=t.lastAffix,o=e.props,i=o.target,a=o.onChange;if(n===z.Prepare&&e.fixedNode&&e.placeholderNode&&i){var f=e.getOffsetTop(),l=e.getOffsetBottom(),u=i();if(u){var c={status:z.None},s=O(u),p=O(e.placeholderNode),d=P(p,s,f),h=j(p,s,l);void 0!==d?(c.affixStyle={position:"fixed",top:d,width:p.width,height:p.height},c.placeholderStyle={width:p.width,height:p.height}):void 0!==h&&(c.affixStyle={position:"fixed",bottom:h,width:p.width,height:p.height},c.placeholderStyle={width:p.width,height:p.height}),c.lastAffix=!!c.affixStyle,a&&r!==c.lastAffix&&a(c.lastAffix),e.setState(c)}}},e.renderAffix=function(t){var n,r,o,i=t.getPrefixCls,a=e.state,f=a.affixStyle,u=a.placeholderStyle,c=a.status,s=e.props,h=s.prefixCls,m=s.style,y=s.children,v=p()((n={},r=i("affix",h),o=f,r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n)),b=Object(d.a)(e.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);var g=k({},c===z.None?u:null,m);return l.createElement("div",k({},b,{style:g,ref:e.savePlaceholderNode}),l.createElement("div",{className:v,ref:e.saveFixedNode,style:e.state.affixStyle},l.createElement(w.a,{onResize:function(){e.updatePosition()}},y)))},e}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,l["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props.target;t&&(this.timeout=setTimeout(function(){N(t(),e),e.updatePosition({})}))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.props.target,r=null;n&&(r=n()||null),t!==r&&(T(this),r&&(N(r,this),this.updatePosition({})),this.setState({prevTarget:r})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition({}),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),T(this),this.updatePosition.cancel()}},{key:"updatePosition",value:function(e){this.prepareMeasure(e)}},{key:"lazyUpdatePosition",value:function(e){var t=this.props.target,n=this.state.affixStyle;if(t&&n){var r=this.getOffsetTop(),o=this.getOffsetBottom(),i=t();if(i){var a=O(i),f=O(this.placeholderNode),l=P(f,a,r),u=j(f,a,o);if(void 0!==l&&n.top===l||void 0!==u&&n.bottom===u)return}}this.prepareMeasure(e)}},{key:"render",value:function(){return l.createElement(h.a,null,this.renderAffix)}}])&&C(n.prototype,r),o&&C(n,o),t}();U.defaultProps={target:function(){return"undefined"!==typeof window?window:null}},H([g()],U.prototype,"updatePosition",null),H([g()],U.prototype,"lazyUpdatePosition",null),Object(c.polyfill)(U);var M=U,D=n(79);n.d(t,"default",function(){return F});var F=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("h2",null," Basic Affix "),u.a.createElement(M,null,u.a.createElement(D.a,{type:"primary"},"Affix top")),u.a.createElement("br",null),u.a.createElement(M,{offsetBottom:0},u.a.createElement(D.a,{type:"primary"},"Affix bottom")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h2",null," Containter to Scroll Affix "),u.a.createElement("div",{className:"scrollable-container",ref:function(t){e.container=t}},u.a.createElement("div",{className:"background"},u.a.createElement(M,{target:function(){return e.container}},u.a.createElement(D.a,{type:"primary"},"Fixed at the top of container")))),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h2",null," Affix with Callback "),u.a.createElement(M,{offsetTop:120,onChange:function(e){}},u.a.createElement(D.a,null,"120px to affix top")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null))}}]),t}(l.Component)}}]);
//# sourceMappingURL=158.5266e4bb.chunk.js.map