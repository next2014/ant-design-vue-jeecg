(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c45fa"],{"3b0e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{style:e.modalStyle,attrs:{width:e.modalWidth,visible:e.visible,maskClosable:!1},on:{cancel:e.handleCancel}},[a("template",{slot:"footer"},[a("a-button",{on:{click:e.handleCancel}},[e._v("关闭")])],1),a("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",columns:e.columns,loading:e.loading,dataSource:e.dataSource,pagination:!1},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.handleBack(n.id)}}},[a("a-icon",{attrs:{type:"redo"}}),e._v("字典取回")],1),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.handleDelete(n.id)}}},[a("a-icon",{attrs:{type:"scissor"}}),e._v("彻底删除")],1)],1)}}])})],2)},s=[],i=a("0fea"),c={name:"DictDeleteList",data:function(){return{modalWidth:"90%",modalStyle:{top:"20px"},title:"操作",visible:!1,loading:!1,dataSource:[],columns:[{title:"#",dataIndex:"",key:"rowIndex",width:120,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"字典名称",align:"left",dataIndex:"dictName"},{title:"字典编号",align:"left",dataIndex:"dictCode"},{title:"描述",align:"left",dataIndex:"description"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}]}},methods:{handleCancel:function(){this.visible=!1},show:function(){this.visible=!0,this.loadData()},loadData:function(){var e=this;this.loading=!0,Object(i["c"])("/sys/dict/deleteList").then((function(t){e.loading=!1,t.success?e.dataSource=t.result:e.$message.warning(t.message)}))},handleBack:function(e){var t=this;Object(i["j"])("/sys/dict/back/"+e).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},handleDelete:function(e){var t=this;Object(i["a"])("/sys/dict/deletePhysic/"+e).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}}},l=c,o=a("2877"),d=Object(o["a"])(l,n,s,!1,null,"14752d5c",null);t["default"]=d.exports}}]);