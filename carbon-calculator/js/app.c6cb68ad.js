(function(e){function t(t){for(var n,r,c=t[0],o=t[1],d=t[2],f=0,u=[];f<c.length;f++)r=c[f],a[r]&&u.push(a[r][0]),a[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(u.length)u.shift()();return i.push.apply(i,d||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,c=1;c<s.length;c++){var o=s[c];0!==a[o]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=o;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("1356"),a=s.n(n);a.a},1356:function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=i(e);return s(t)}function i(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=s("bb71");s("da64");n["a"].use(a["a"],{iconfont:"md",theme:{primary:"#7000bb"}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("Results",{attrs:{msg:"Caesar salad"}})],1)},r=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{style:e.containerStyle,attrs:{id:"container"}},[s("h2",[e._v("carbon check")]),s("h1",[e._v(e._s(e.msg))]),s("div",{style:e.container2Style},[s("div",{style:e.valueContainerStyle},[s("div",{style:e.valueTitleStyle},[e._v("Total")]),s("div",{style:e.valueStyle,attrs:{id:""}},[e._v(" 21.5")]),s("div",{style:e.unitStyle},[e._v("kG of CO"),s("sub",[e._v("2")]),e._v("e")])]),s("div",{style:e.valueContainerStyle},[s("div",{style:e.valueTitleStyle},[e._v("Average")]),s("div",{style:e.valueStyle},[e._v("12.3")]),s("div",{style:e.unitStyle},[e._v("kg of CO"),s("sub",[e._v("2")]),e._v("e"),s("br"),e._v("per kg food")])])]),s("div",{attrs:{id:"chart-container"}},[s("canvas",{style:e.chart,attrs:{id:"myChart"}})]),s("v-switch",{attrs:{color:"primary",label:e.switchUnit},on:{change:function(t){return e.changeSwitchState()}},model:{value:e.switch1,callback:function(t){e.switch1=t},expression:"switch1"}})],1)])},o=[],d=s("30ef"),l=s.n(d),f={name:"Results",props:{msg:String},data:function(){return{chartSize:0,maxChartSize:600,chartMargin:14,windowWidth:0,containerStyle:"padding:14px;padding-top:28px;",container2Style:"margin-top:28px;height:100px;padding-bottom:45px;",valueContainerStyle:"width:50%;float:left;",valueTitleStyle:"fontSize:20px",valueStyle:"fontSize:40px",unitStyle:"fontSize:12px",chart:"margin-top:54px;margin-bottom:30px;",accuracyStyle:"fontSize:14px;margin-right:12px;",switch1:!0,switchUnit:"Metric units",metricLabels:["50g Lettuce","15g Croutons","140g Chicken","5g Anchovies"],imperialLabels:["5oz Lettuce","1.5oz Croutons","14oz Chicken","0.5oz Anchovies"]}},created:function(){window.addEventListener("resize",this.handleResize),document.body.style.backgroundColor="#fdf2d8"},mounted:function(){this.handleResize(),this.createChart()},methods:{changeSwitchState:function(){this.switch1?this.switchUnit="Metric units":this.switchUnit="Imperial units",this.createChart()},createChart:function(){var e=document.getElementById("myChart");null!=this.myDoughnutChart&&(console.log("destroy"),this.myDoughnutChart.destroy());var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height);var s=[];s=1==this.switch1?this.metricLabels:this.imperialLabels;var n={datasets:[{label:"CO2e",data:[10,20,30,30],backgroundColor:["#fdd378","#b9a2ff","#ff93f9","#7000bb"]}],labels:s};this.myDoughnutChart=new l.a(e,{type:"doughnut",data:n,options:{legend:{labels:{padding:10,fontSize:14,fontColor:"#434343"},position:"left",usePointStyle:!0},layout:{padding:{left:0,right:0,top:0,bottom:0}},animation:{animateScale:!0},cutoutPercentage:50,tooltips:{xPadding:10,yPadding:10,callbacks:{title:function(e,t){return[t.labels[e[0].index]]},label:function(e,t){return[" "+t.datasets[0].data[e.index]+" kg CO2e"]}}}}}),this.myDoughnutChart.canvas.parentNode.style.width=this.chartSize+"px"},handleResize:function(){this.windowWidth=window.innerWidth,this.windowWidth>this.maxChartSize?(this.chartSize=this.maxChartSize,document.getElementById("chart-container").style.width=this.chartSize+"px",document.getElementById("container").style.width=this.chartSize+"px"):(this.chartSize=window.innerWidth,document.getElementById("chart-container").style.width=this.chartSize+"px",document.getElementById("container").style.width=this.chartSize+"px"),document.getElementById("container").style.marginLeft=this.windowWidth/2-this.chartSize/2+"px"},destroyed:function(){window.removeEventListener("resize",this.handleResize)}}},u=f,h=(s("5a1a"),s("2877")),b=s("6544"),j=s.n(b),p=s("b73d"),m=Object(h["a"])(u,c,o,!1,null,"38b7a2a8",null),y=m.exports;j()(m,{VSwitch:p["a"]});var v={name:"App",components:{Results:y},data:function(){return{}}},g=v,w=(s("034f"),s("7496")),z=Object(h["a"])(g,i,r,!1,null,null,null),S=z.exports;j()(z,{VApp:w["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(S)}}).$mount("#app")},"5a1a":function(e,t,s){"use strict";var n=s("a483"),a=s.n(n);a.a},a483:function(e,t,s){}});
//# sourceMappingURL=app.c6cb68ad.js.map