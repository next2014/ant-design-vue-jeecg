(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27a93f60"],{"48f7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-skeleton",{attrs:{active:"",loading:t.loading,paragraph:{rows:17}}},[a("a-card",{attrs:{bordered:!1}},[a("a-alert",{attrs:{type:"info",showIcon:!0}},[a("div",{attrs:{slot:"message"},slot:"message"},[t._v("\n        上次更新时间："+t._s(this.time)+"\n        "),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:t.handleClickUpdate}},[t._v("立即更新")])],1)]),a("a-table",{staticStyle:{"margin-top":"20px"},attrs:{rowKey:"id",size:"middle",columns:t.columns,dataSource:t.dataSource,pagination:!1,loading:t.tableLoading},scopedSlots:t._u([{key:"param",fn:function(e,n){return[a("a-tag",{attrs:{color:t.textInfo[n.param].color}},[t._v(t._s(e))])]}},{key:"text",fn:function(e,a){return[t._v("\n        "+t._s(t.textInfo[a.param].text)+"\n      ")]}},{key:"value",fn:function(e,a){return[t._v("\n        "+t._s(e)+" "+t._s(t.textInfo[a.param].unit)+"\n      ")]}}])})],1)],1)},o=[],r=(a("c5f6"),a("7f7f"),a("ac6a"),a("5df3"),a("c1df")),s=a.n(r),c=a("0fea");s.a.locale("zh-cn");var i={data:function(){return{time:"",loading:!0,tableLoading:!0,columns:[{title:"参数",width:"30%",dataIndex:"param",scopedSlots:{customRender:"param"}},{title:"描述",width:"40%",dataIndex:"text",scopedSlots:{customRender:"text"}},{title:"当前值",width:"30%",dataIndex:"value",scopedSlots:{customRender:"value"}}],dataSource:[],textInfo:{"system.cpu.count":{color:"green",text:"CPU 数量",unit:"核"},"system.cpu.usage":{color:"green",text:"系统 CPU 使用率",unit:"%"},"process.start.time":{color:"purple",text:"应用启动时间点",unit:""},"process.uptime":{color:"purple",text:"应用已运行时间",unit:"秒"},"process.cpu.usage":{color:"purple",text:"当前应用 CPU 使用率",unit:"%"}},moreInfo:{}}},mounted:function(){this.loadTomcatInfo()},methods:{handleClickUpdate:function(){this.loadTomcatInfo()},loadTomcatInfo:function(){var t=this;this.tableLoading=!0,this.time=s()().format("YYYY年MM月DD日 HH时mm分ss秒"),Promise.all([Object(c["c"])("actuator/metrics/system.cpu.count"),Object(c["c"])("actuator/metrics/system.cpu.usage"),Object(c["c"])("actuator/metrics/process.start.time"),Object(c["c"])("actuator/metrics/process.uptime"),Object(c["c"])("actuator/metrics/process.cpu.usage")]).then((function(e){var a=[];e.forEach((function(e,n){var o=t.moreInfo[e.name];o instanceof Array||(o=[""]),o.forEach((function(o,r){var s=e.name+o,c=e.measurements[r].value;"system.cpu.usage"!==s&&"process.cpu.usage"!==s||(c=t.convert(c,Number)),"process.start.time"===s&&(c=t.convert(c,Date)),a.push({id:s+n,param:s,text:"false value",value:c})}))})),t.dataSource=a})).catch((function(e){t.$message.error("获取服务器信息失败")})).finally((function(){t.loading=!1,t.tableLoading=!1}))},convert:function(t,e){return e===Number?Number(100*t).toFixed(2):e===Date?s()(1e3*t).format("YYYY-MM-DD HH:mm:ss"):t}}},u=i,l=a("2877"),d=Object(l["a"])(u,n,o,!1,null,null,null);e["default"]=d.exports},"5df3":function(t,e,a){"use strict";var n=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=n(e,a),this._i+=t.length,{value:t,done:!1})}))}}]);