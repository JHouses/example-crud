(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{2402:function(t,r,o){"use strict";o.r(r);var e=o(16),a=o(17),n=o(22),i=o(21),d=o(23),l=o(0),u=o.n(l),s=o(1334),b={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]},{label:"My Second dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(72,166,242,0.4)",borderColor:"rgba(72,166,242,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(72,166,242,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(72,166,242,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[55,49,70,71,46,45,30]}]};o.d(r,"default",function(){return p});var c=function(t){function r(){return Object(e.a)(this,r),Object(n.a)(this,Object(i.a)(r).apply(this,arguments))}return Object(d.a)(r,t),Object(a.a)(r,[{key:"componentWillMount",value:function(){this.setState(b)}},{key:"componentDidMount",value:function(){var t=this;setInterval(function(){for(var r=t.state.datasets,o=[],e=[],a=0;a<t.state.labels.length;a++)o.push(Math.floor(100*Math.random())),e.push(Math.floor(100*Math.random()));r[0].data=o,r[1].data=e,t.setState({datasets:r})},3e3)}},{key:"render",value:function(){return u.a.createElement(s.e,{data:this.state})}}]),r}(l.Component),p=function(t){function r(){return Object(e.a)(this,r),Object(n.a)(this,Object(i.a)(r).apply(this,arguments))}return Object(d.a)(r,t),Object(a.a)(r,[{key:"render",value:function(){return u.a.createElement(c,null)}}]),r}(l.Component)}}]);
//# sourceMappingURL=ReactChart2-randomizedLine.c3f8b496.chunk.js.map