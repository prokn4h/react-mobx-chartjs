(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(12),l=n.n(r),i=n(7),c=n(8),s=n(22),b=n(21),d=n(23),u=n(1),g=function(){function e(){Object(i.a)(this,e),this.colors=["rgba(55, 55, 55, 0.75)","rgba(155, 155, 0, 0.75)","rgba(0, 66, 55, 0.75)"],this.selectedColor="rgba(55, 55, 55, 0.75)",this.randomScalingFactor=function(){return(Math.random()>.5?1:-1)*Math.round(100*Math.random())}}return Object(c.a)(e,[{key:"selectColor",value:function(e){this.selectedColor=e}},{key:"getChartOptions",get:function(){return{responsive:!0,spangaps:!0,scales:{xAxes:[{position:"bottom",type:"linear",gridLines:{},scaleLabel:{display:!0,labelString:"x axis"},ticks:{maxRotation:0,reverse:!1}}],yAxes:[{position:"left",gridLines:{},scaleLabel:{display:!0,labelString:"y axis"},ticks:{reverse:!1}}]},annotation:{events:["click","onMouseup"],annotations:[{drawTime:"afterDatasetsDraw",id:"hline",type:"line",mode:"vertical",scaleID:"x-axis-0",value:3,borderColor:this.selectedColor,borderWidth:5,draggable:!0,label:{backgroundColor:this.selectedColor,content:"Selector 1",enabled:!0,position:"bottom"},onClick:function(e){},onDrag:function(e){},onDragEnd:function(e){}},{drawTime:"afterDatasetsDraw",id:"hline2",type:"line",mode:"vertical",scaleID:"x-axis-0",value:6,borderColor:this.selectedColor,borderWidth:5,draggable:!0,label:{backgroundColor:this.selectedColor,content:"Selector 2",enabled:!0,position:"bottom"},onClick:function(e){},onDrag:function(e){},onDragEnd:function(e){}}]}}}},{key:"getData",get:function(){return{labels:["1","2","3","4","5","6","7"],category:"linear",datasets:[{label:"Dataset 1",backgroundColor:"rgba(122, 122, 122, 0.25)",borderColor:this.selectedColor,data:[{x:0,y:2},{x:2,y:4},{x:4,y:3},{x:7,y:3},{x:null,y:null},{x:9,y:3},{x:10,y:3}],fill:!0}]}}}]),e}();Object(u.f)(g,{colors:u.k,selectedColor:u.k,selectColor:u.b,getData:u.c,getChartOptions:u.c});var h,p,f=n(13),y=n(51),C=(n(151),n(157),Object(f.b)(h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).store=new g,n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(y.a,{options:Object(u.m)(this.store.getChartOptions),data:Object(u.m)(this.store.getData)})}}]),t}(o.Component))||h),m=Object(f.b)(p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).store=new g,n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(f.a,{store:this.store},a.a.createElement("div",{style:{position:"relative",width:600,height:550}},a.a.createElement(C,null)))}}]),t}(o.Component))||p;l.a.render(a.a.createElement(m,null),document.getElementById("root"))},53:function(e,t,n){e.exports=n(158)}},[[53,1,2]]]);
//# sourceMappingURL=main.e48ddefc.chunk.js.map