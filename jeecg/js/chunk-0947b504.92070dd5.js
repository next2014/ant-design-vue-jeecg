(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0947b504","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"25f0":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?n("a-button",{attrs:{ghost:"",type:"primary",icon:"delete"},on:{click:e.batchDel}},[e._v("批量删除\n    ")]):e._e()],1),n("div",[n("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[n("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v("已选择 "),n("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项  \n      "),n("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),n("a-table",{attrs:{columns:e.columns,size:"middle",pagination:!1,dataSource:e.dataSource,loading:e.loading,expandedRowKeys:e.expandedRowKeys,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{expandedRowsChange:e.handleExpandedRowsChange},scopedSlots:e._u([{key:"action",fn:function(t,s){return n("span",{},[n("a",{on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(s)}}},[e._v("详情")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleAddSub(s)}}},[e._v("添加子菜单")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDataRule(s)}}},[e._v("数据规则")])]),n("a-menu-item",[n("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[n("a",[e._v("删除")])])],1)],1)],1)],1)}},{key:"url",fn:function(e){return n("span",{},[n("j-ellipsis",{attrs:{value:e,length:25}})],1)}},{key:"component",fn:function(e){return n("span",{},[n("j-ellipsis",{attrs:{value:e}})],1)}}])})],1),n("permission-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),n("permission-data-rule-list",{ref:"PermissionDataRuleList",on:{ok:e.modalFormOk}})],1)},a=[],i=n("b90e"),o=n("4ec3"),r=n("b65a"),l=n("56cd1"),c=n("d579"),d=[{title:"菜单名称",dataIndex:"name",key:"name"},{title:"菜单类型",dataIndex:"menuType",key:"menuType",customRender:function(e){return 0==e||1==e?"菜单":2==e?"按钮/权限":e}},{title:"icon",dataIndex:"icon",key:"icon"},{title:"组件",dataIndex:"component",key:"component",scopedSlots:{customRender:"component"}},{title:"路径",dataIndex:"url",key:"url",scopedSlots:{customRender:"url"}},{title:"排序",dataIndex:"sortNo",key:"sortNo"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:150}],u={name:"PermissionList",mixins:[r["a"]],components:{PermissionDataRuleList:l["default"],PermissionModal:i["default"],JEllipsis:c["default"]},data:function(){return{description:"这是菜单管理页面",columns:d,loading:!1,expandedRowKeys:[],url:{list:"/sys/permission/list",delete:"/sys/permission/delete",deleteBatch:"/sys/permission/deleteBatch"}}},methods:{loadData:function(){var e=this;this.dataSource=[],Object(o["u"])().then((function(t){t.success&&(e.dataSource=t.result)}))},handleDataRule:function(e){this.$refs.PermissionDataRuleList.edit(e)},handleAddSub:function(e){this.$refs.modalForm.title="添加子菜单",this.$refs.modalForm.localMenuType=1,this.$refs.modalForm.disableSubmit=!1,this.$refs.modalForm.edit({status:"1",permsType:"1",route:!0,parentId:e.id})},handleExpandedRowsChange:function(e){this.expandedRowKeys=e}}},h=u,f=(n("401d"),n("2877")),m=Object(f["a"])(h,s,a,!1,null,"2ecff8ca",null);t["default"]=m.exports},"401d":function(e,t,n){"use strict";var s=n("ec9b"),a=n.n(s);a.a},b65a:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("8e6e"),n("7f7f");var s=n("bd86"),a=(n("456d"),n("ac6a"),n("ca00")),i=n("0fea"),o=n("2b0e"),r=n("9fb0");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={data:function(){return{tokenHeader:{"X-Access-Token":o["default"].ls.get(r["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var n=this.getQueryParams();this.loading=!0,Object(i["c"])(this.url.list,n).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(a["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var n=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){n.loading=!0,Object(i["a"])(n.url.deleteBatch,{ids:e}).then((function(e){e.success?(n.$message.success(e.message),n.loadData(),n.onClearSelected()):n.$message.warning(e.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(i["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,n){Object.keys(n).length>0&&(this.isorter.column=n.field,this.isorter.order="ascend"==n.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var n=c({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(n["selections"]=this.selectedRowKeys.join(",")),Object(i["b"])(this.url.exportXlsUrl,n).then((function(n){if(n)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([n],{type:"application/vnd.ms-excel"}),e+".xls");else{var s=window.URL.createObjectURL(new Blob([n],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.style.display="none",a.href=s,a.setAttribute("download",e+".xls"),document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(s)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var n=e.file.response,s=n.message,a=n.result,i=a.msg,o=a.fileUrl,r=a.fileName,l=window._CONFIG["domianURL"]+o;this.$warning({title:s,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:r}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},d579:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-tooltip",{attrs:{placement:"topLeft"}},[n("template",{slot:"title"},[n("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},a=[],i=(n("c5f6"),{name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}}),o=i,r=n("2877"),l=Object(r["a"])(o,s,a,!1,null,"51aeca46",null);t["default"]=l.exports},ec9b:function(e,t,n){}}]);