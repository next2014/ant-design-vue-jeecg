(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1179b979","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"1e6c":function(e,t,a){"use strict";var n=a("2b6d"),i=a.n(n);i.a},"2b6d":function(e,t,a){},b16a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{centered:"",title:e.name+"选择",width:e.width,visible:e.visible,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.close}},[a("a-row",{attrs:{gutter:18}},[a("a-col",{attrs:{span:16}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:14}},[a("a-form-item",{attrs:{label:e.queryParamText||e.name}},[a("a-input",{attrs:{placeholder:"请输入"+(e.queryParamText||e.name)},on:{pressEnter:e.searchQuery},model:{value:e.queryParam[e.queryParamCode||e.valueKey],callback:function(t){e.$set(e.queryParam,e.queryParamCode||e.valueKey,t)},expression:"queryParam[queryParamCode||valueKey]"}})],1)],1),a("a-col",{attrs:{span:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("a-table",{attrs:{size:"small",bordered:"",rowKey:e.rowKey,columns:e.innerColumns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,scroll:{y:240},rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.multiple?"checkbox":"radio"},customRow:e.customRowFn},on:{change:e.handleTableChange}})],1),a("a-col",{attrs:{span:8}},[a("a-card",{attrs:{title:"已选"+e.name,bordered:!1,"head-style":{padding:0},"body-style":{padding:0}}},[a("a-table",e._b({attrs:{size:"small",rowKey:e.rowKey,bordered:""},scopedSlots:e._u([{key:"action",fn:function(t,n,i){return a("span",{},[a("a",{on:{click:function(t){return e.handleDeleteSelected(n,i)}}},[e._v("删除")])])}}])},"a-table",e.selectedTable,!1))],1)],1)],1)],1)},i=[],r=(a("8e6e"),a("456d"),a("ac4d"),a("8a81"),a("ac6a"),a("bd86")),s=(a("c5f6"),a("0fea")),l=a("b65a"),o=a("ca00");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"JSelectBizComponentModal",mixins:[l["a"]],props:{value:{type:Array,default:function(){return[]}},visible:{type:Boolean,default:!1},valueKey:{type:String,required:!0},multiple:{type:Boolean,default:!0},width:{type:Number,default:900},name:{type:String,default:""},listUrl:{type:String,required:!0,default:""},valueUrl:{type:String,default:""},displayKey:{type:String,default:null},columns:{type:Array,required:!0,default:function(){return[]}},queryParamCode:{type:String,default:null},queryParamText:{type:String,default:null},rowKey:{type:String,default:"id"}},data:function(){return{innerValue:[],innerColumns:this.columns,selectedTable:{pagination:!1,scroll:{y:240},columns:[u({},this.columns[0],{width:this.columns[0].widthRight||this.columns[0].width}),{title:"操作",dataIndex:"action",align:"center",width:60,scopedSlots:{customRender:"action"}}],dataSource:[]},url:{list:this.listUrl},ipagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},options:[],dataSourceMap:{}}},watch:{value:{deep:!0,immediate:!0,handler:function(e){this.innerValue=Object(o["b"])(e),this.selectedRowKeys=[],this.valueWatchHandler(e),this.queryOptionsByValue(e)}},dataSource:{deep:!0,handler:function(e){this.emitOptions(e),this.valueWatchHandler(this.innerValue)}},selectedRowKeys:{immediate:!0,deep:!0,handler:function(e){var t=this;this.selectedTable.dataSource=e.map((function(e){var a=!0,n=!1,i=void 0;try{for(var r,s=t.dataSource[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var l=r.value;if(l[t.rowKey]===e)return Object(o["f"])(t.innerValue,l[t.valueKey]),l}}catch(y){n=!0,i=y}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}var c=!0,u=!1,d=void 0;try{for(var h,f=t.selectedTable.dataSource[Symbol.iterator]();!(c=(h=f.next()).done);c=!0){var p=h.value;if(p[t.rowKey]===e)return Object(o["f"])(t.innerValue,p[t.valueKey]),p}}catch(y){u=!0,d=y}finally{try{c||null==f.return||f.return()}finally{if(u)throw d}}return{}}))}}},methods:{close:function(){this.$emit("update:visible",!1)},valueWatchHandler:function(e){var t=this;e.forEach((function(e){t.dataSource.concat(t.selectedTable.dataSource).forEach((function(a){a[t.valueKey]===e&&Object(o["f"])(t.selectedRowKeys,a[t.rowKey])}))}))},queryOptionsByValue:function(e){var t,a=this;if(e&&0!==e.length){var n=!1,i=!0,l=!1,c=void 0;try{for(var u,d=e[Symbol.iterator]();!(i=(u=d.next()).done);i=!0){var h=u.value,f=!1,p=!0,y=!1,m=void 0;try{for(var b,g=this.options[Symbol.iterator]();!(p=(b=g.next()).done);p=!0){var v=b.value;if(h===v.value){f=!0;break}}}catch(w){y=!0,m=w}finally{try{p||null==g.return||g.return()}finally{if(y)throw m}}if(!f){n=!0;break}}}catch(w){l=!0,c=w}finally{try{i||null==d.return||d.return()}finally{if(l)throw c}}n&&Object(s["c"])(this.valueUrl||this.listUrl,(t={},Object(r["a"])(t,this.valueKey,e.join(",")+","),Object(r["a"])(t,"pageNo",1),Object(r["a"])(t,"pageSize",e.length),t)).then((function(e){if(e.success){var t=e.result;t instanceof Array||(t=e.result.records),a.emitOptions(t,(function(e){Object(o["f"])(a.innerValue,e[a.valueKey]),Object(o["f"])(a.selectedRowKeys,e[a.rowKey]),Object(o["f"])(a.selectedTable.dataSource,e,a.rowKey)}))}}))}},emitOptions:function(e,t){var a=this;e.forEach((function(e){var n=e[a.valueKey];a.dataSourceMap[n]=e,Object(o["f"])(a.options,{label:e[a.displayKey||a.valueKey],value:n},"value"),"function"===typeof t&&t(e)})),this.$emit("options",this.options,this.dataSourceMap)},handleOk:function(){var e=this,t=this.selectedTable.dataSource.map((function(t){return t[e.valueKey]}));this.$emit("input",t),this.close()},handleDeleteSelected:function(e,t){this.selectedRowKeys.splice(this.selectedRowKeys.indexOf(e[this.rowKey]),1),this.selectedTable.dataSource.splice(t,1)},customRowFn:function(e){var t=this;return{on:{click:function(){var a=e[t.rowKey];if(t.multiple){var n=t.selectedRowKeys.indexOf(a);-1===n?(t.selectedRowKeys.push(a),t.selectedTable.dataSource.push(e)):t.handleDeleteSelected(e,n)}else t.selectedRowKeys=[a],t.selectedTable.dataSource=[e]}}}}}},h=d,f=a("2877"),p=Object(f["a"])(h,n,i,!1,null,"633b6d61",null);t["default"]=p.exports},b296:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{staticClass:"j-select-biz-component-box",attrs:{type:"flex",gutter:8}},[a("a-col",{staticClass:"left",class:{full:!e.buttons}},[e._t("left",[a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:e.placeholder,options:e.selectOptions,allowClear:"",disabled:e.disabled,open:!1},nativeOn:{click:function(t){e.visible=!e.buttons||e.visible}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}})])],2),e.buttons?a("a-col",{staticClass:"right"},[a("a-button",{attrs:{type:"primary",icon:"search",disabled:e.disabled},on:{click:function(t){e.visible=!0}}},[e._v(e._s(e.selectButtonText))])],1):e._e(),a("j-select-biz-component-modal",e._b({attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t},options:e.handleOptions},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},"j-select-biz-component-modal",e.modalProps,!1))],1)},i=[],r=(a("28a5"),a("b16a")),s={name:"JSelectBizComponent",components:{JSelectBizComponentModal:r["default"]},props:{value:{type:String,default:""},returnId:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!0},buttons:{type:Boolean,default:!0},displayKey:{type:String,default:null},returnKeys:{type:Array,default:function(){return["id","id"]}},selectButtonText:{type:String,default:"选择"}},data:function(){return{selectValue:[],selectOptions:[],dataSourceMap:{},visible:!1}},computed:{valueKey:function(){return this.returnId?this.returnKeys[0]:this.returnKeys[1]},modalProps:function(){return Object.assign({valueKey:this.valueKey,multiple:this.multiple,returnKeys:this.returnKeys,displayKey:this.displayKey||this.valueKey},this.$attrs)}},watch:{value:{immediate:!0,handler:function(e){this.selectValue=e?e.split(","):[]}},selectValue:{deep:!0,handler:function(e){var t=this,a=e.map((function(e){return t.dataSourceMap[e]}));this.$emit("select",a);var n=e.join(",");this.$emit("input",n),this.$emit("change",n)}}},methods:{handleOptions:function(e,t){this.selectOptions=e,this.dataSourceMap=t}}},l=s,o=(a("1e6c"),a("2877")),c=Object(o["a"])(l,n,i,!1,null,"0e3e6a15",null);t["default"]=c.exports},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a("8e6e"),a("7f7f");var n=a("bd86"),i=(a("456d"),a("ac6a"),a("ca00")),r=a("0fea"),s=a("2b0e"),l=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{tokenHeader:{"X-Access-Token":s["default"].ls.get(l["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(r["c"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(i["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(r["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(r["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=c({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(r["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var n=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=n,i.setAttribute("download",e+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(n)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,n=a.message,i=a.result,r=i.msg,s=i.fileUrl,l=i.fileName,o=window._CONFIG["domianURL"]+s;this.$warning({title:n,content:t("div",[t("span",[r]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:o,target:"_blank",download:l}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}}}]);