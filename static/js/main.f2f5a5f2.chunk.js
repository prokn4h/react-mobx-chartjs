(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(t,e,o){"use strict";o.r(e);var r,a,n,i,s,l,c=o(0),b=o.n(c),u=o(13),d=o.n(u),p=o(7),y=o(8),h=o(22),g=o(21),x=o(24),f=o(25),O=o(9),j=(o(60),o(1)),C=(r=function(){function t(){Object(p.a)(this,t),this.selectedColor="rgba(55, 55, 55, 0.75)",Object(f.a)(this,"history",a,this),Object(f.a)(this,"addToHistory",n,this),Object(f.a)(this,"undo",i,this),this.annotationKey=1}return Object(y.a)(t,[{key:"getChartOptions",get:function(){var t=this,e="x"+this.annotationKey++,o="y"+this.annotationKey++;return{legend:{display:!0},responsive:!0,spangaps:!0,scales:{xAxes:[{position:"bottom",type:"linear",gridLines:{},scaleLabel:{display:!0,labelString:"x axis"},ticks:{maxRotation:0,reverse:!1}}],yAxes:[{position:"left",gridLines:{},scaleLabel:{display:!0,labelString:"y axis"},ticks:{reverse:!1,beginAtZero:!0,min:0,max:10}}]},annotation:{events:["click","onMouseup"],annotations:[{drawTime:"afterDatasetsDraw",id:e,type:"line",mode:"vertical",scaleID:"x-axis-0",value:this.history[this.history.length-1].x1,borderColor:this.selectedColor,borderWidth:5,draggable:!0,label:{backgroundColor:this.selectedColor,content:"Selector 1",enabled:!0,position:"bottom"},onClick:function(t){},onDrag:function(t){},onDragEnd:function(e){var o=e.subject.element.options.value;t.addToHistory(o,t.history[t.history.length-1].x2)}},{drawTime:"afterDatasetsDraw",id:o,type:"line",mode:"vertical",scaleID:"x-axis-0",value:this.history[this.history.length-1].x2,borderColor:this.selectedColor,borderWidth:5,draggable:!0,label:{backgroundColor:this.selectedColor,content:"Selector 2",enabled:!0,position:"bottom"},onClick:function(t){},onDrag:function(t){},onDragEnd:function(e){var o=e.subject.element.options.value;t.addToHistory(t.history[t.history.length-1].x1,o)}}]}}}},{key:"getData",get:function(){return{labels:["1","2","3","4","5","6","7"],category:"linear",datasets:[{label:"Dataset 1",backgroundColor:"rgba(122, 122, 122, 0.25)",borderColor:"rgba(122, 122, 122, 0.75)",data:[{x:0,y:1},{x:2,y:4},{x:3,y:2}],fill:!0},{label:"Dataset 2",backgroundColor:"rgba(122, 122, 122, 0.25)",borderColor:"rgba(228, 112, 112, 0.75)",data:[{x:4,y:3},{x:5,y:5},{x:6,y:2}],fill:!0},{label:"Dataset 3",backgroundColor:"rgba(122, 122, 122, 0.25)",borderColor:"rgba(255, 0, 0, 0.75)",data:[{x:6,y:2},{x:7,y:3},{x:8,y:4},{x:9,y:2}],fill:!0},{label:"Dataset 4",backgroundColor:"rgba(122, 122, 122, 0.25)",borderColor:"rgba(61, 61, 255, 0.75)",data:[{x:11,y:3},{x:12,y:2},{x:13,y:4},{x:14,y:7}],fill:!0}]}}}]),t}(),a=Object(O.a)(r.prototype,"history",[j.j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{x1:3.5,x2:10}]}}),n=Object(O.a)(r.prototype,"addToHistory",[j.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e,o){t.history.push({x1:e,x2:o})}}}),i=Object(O.a)(r.prototype,"undo",[j.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){1!==t.history.length&&t.history.pop()}}}),Object(O.a)(r.prototype,"getChartOptions",[j.c],Object.getOwnPropertyDescriptor(r.prototype,"getChartOptions"),r.prototype),Object(O.a)(r.prototype,"getData",[j.c],Object.getOwnPropertyDescriptor(r.prototype,"getData"),r.prototype),r),m=o(23),v=o(53),D=(o(154),o(160),Object(m.a)(s=function(t){function e(){return Object(p.a)(this,e),Object(h.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(x.a)(e,t),Object(y.a)(e,[{key:"render",value:function(){return b.a.createElement("div",null,b.a.createElement(v.a,{options:Object(j.l)(this.props.store.getChartOptions),data:Object(j.l)(this.props.store.getData)}),b.a.createElement("button",{onClick:this.props.store.undo},"Revert selectors to previous state"))}}]),e}(c.Component))||s),k=Object(m.a)(l=function(t){function e(){var t,o;Object(p.a)(this,e);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(o=Object(h.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(a)))).store=new C,o}return Object(x.a)(e,t),Object(y.a)(e,[{key:"render",value:function(){return b.a.createElement("div",{style:{position:"relative",width:600,height:550}},b.a.createElement(D,{store:this.store}))}}]),e}(c.Component))||l;d.a.render(b.a.createElement(k,null),document.getElementById("root"))},55:function(t,e,o){t.exports=o(161)}},[[55,1,2]]]);
//# sourceMappingURL=main.f2f5a5f2.chunk.js.map