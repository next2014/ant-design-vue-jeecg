(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1751e799"],{"0467":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{rowKey:"id",bordered:"",columns:e.columns,dataSource:e.dataSource,pagination:!1}})],1)},r=[],d=(a("ee1d"),a("c5f6"),a("04ff"),a("6762"),a("2fdb"),a("ac6a"),a("bd86")),i={name:"TableTotal",data:function(){return{columns:[{title:"#",width:"180px",align:"center",dataIndex:"rowIndex",customRender:function(e,t,a){return"合计"!==e?parseInt(a)+1:e}},{title:"姓名",dataIndex:"name"},{title:"贡献点",dataIndex:"point"},{title:"等级",dataIndex:"level"},{title:"更新时间",dataIndex:"updateTime"}],dataSource:[{name:"张三",point:23,level:3,updateTime:"2019-8-14"},{name:"小王",point:6,level:1,updateTime:"2019-8-13"},{name:"李四",point:53,level:8,updateTime:"2019-8-12"},{name:"小红",point:44,level:5,updateTime:"2019-8-11"},{name:"王五",point:97,level:10,updateTime:"2019-8-10"},{name:"小明",point:33,level:2,updateTime:"2019-8-10"}]}},mounted:function(){this.tableAddTotalRow(this.columns,this.dataSource)},methods:{tableAddTotalRow:function(e,t){var a="rowIndex",n=Object(d["a"])({},a,"合计");e.forEach((function(e){var r=e.key,d=e.dataIndex;if(![r,d].includes(a)){var i=0;t.forEach((function(e){i+=/^\d+\.?\d?$/.test(e[d])?Number.parseInt(e[d]):Number.NaN})),Number.isNaN(i)&&(i="-"),n[d]=i}})),t.push(n)}}},o=i,u=a("2877"),c=Object(u["a"])(o,n,r,!1,null,"4d0f0e08",null);t["default"]=c.exports},"04ff":function(e,t,a){var n=a("5ca1"),r=a("3ca5");n(n.S+n.F*(Number.parseInt!=r),"Number",{parseInt:r})},"3ca5":function(e,t,a){var n=a("7726").parseInt,r=a("aa77").trim,d=a("fdef"),i=/^[-+]?0[xX]/;e.exports=8!==n(d+"08")||22!==n(d+"0x16")?function(e,t){var a=r(String(e),3);return n(a,t>>>0||(i.test(a)?16:10))}:n},ee1d:function(e,t,a){var n=a("5ca1");n(n.S,"Number",{isNaN:function(e){return e!=e}})}}]);