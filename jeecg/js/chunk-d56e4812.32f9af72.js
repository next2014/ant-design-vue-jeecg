(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d56e4812"],{"88bc":function(e,a,r){(function(a){var r=1/0,t=9007199254740991,o="[object Arguments]",l="[object Function]",n="[object GeneratorFunction]",i="[object Symbol]",s="object"==typeof a&&a&&a.Object===Object&&a,d="object"==typeof self&&self&&self.Object===Object&&self,c=s||d||Function("return this")();function u(e,a,r){switch(r.length){case 0:return e.call(a);case 1:return e.call(a,r[0]);case 2:return e.call(a,r[0],r[1]);case 3:return e.call(a,r[0],r[1],r[2])}return e.apply(a,r)}function p(e,a){var r=-1,t=e?e.length:0,o=Array(t);while(++r<t)o[r]=a(e[r],r,e);return o}function m(e,a){var r=-1,t=a.length,o=e.length;while(++r<t)e[o+r]=a[r];return e}var b=Object.prototype,f=b.hasOwnProperty,h=b.toString,v=c.Symbol,g=b.propertyIsEnumerable,C=v?v.isConcatSpreadable:void 0,w=Math.max;function y(e,a,r,t,o){var l=-1,n=e.length;r||(r=O),o||(o=[]);while(++l<n){var i=e[l];a>0&&r(i)?a>1?y(i,a-1,r,t,o):m(o,i):t||(o[o.length]=i)}return o}function x(e,a){return e=Object(e),j(e,a,(function(a,r){return r in e}))}function j(e,a,r){var t=-1,o=a.length,l={};while(++t<o){var n=a[t],i=e[n];r(i,n)&&(l[n]=i)}return l}function N(e,a){return a=w(void 0===a?e.length-1:a,0),function(){var r=arguments,t=-1,o=w(r.length-a,0),l=Array(o);while(++t<o)l[t]=r[a+t];t=-1;var n=Array(a+1);while(++t<a)n[t]=r[t];return n[a]=l,u(e,this,n)}}function O(e){return S(e)||T(e)||!!(C&&e&&e[C])}function k(e){if("string"==typeof e||E(e))return e;var a=e+"";return"0"==a&&1/e==-r?"-0":a}function T(e){return F(e)&&f.call(e,"callee")&&(!g.call(e,"callee")||h.call(e)==o)}var S=Array.isArray;function D(e){return null!=e&&$(e.length)&&!R(e)}function F(e){return L(e)&&D(e)}function R(e){var a=A(e)?h.call(e):"";return a==l||a==n}function $(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=t}function A(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}function L(e){return!!e&&"object"==typeof e}function E(e){return"symbol"==typeof e||L(e)&&h.call(e)==i}var I=N((function(e,a){return null==e?{}:x(e,p(y(a,1),k))}));e.exports=I}).call(this,r("c8ba"))},c1af:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a-modal",{attrs:{title:e.title,width:800,ok:!1,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称",hidden:!1,hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["departName",e.validatorRules.departName],expression:"['departName', validatorRules.departName ]"}],attrs:{id:"departName",placeholder:"请输入机构/部门名称"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hidden:e.seen,label:"上级部门",hasFeedback:""}},[r("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,placeholder:"请选择上级部门",disabled:e.condition},model:{value:e.model.parentId,callback:function(a){e.$set(e.model,"parentId",a)},expression:"model.parentId"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型"}},[e.seen?[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[r("a-radio",{attrs:{value:"1"}},[e._v("\n            公司\n          ")])],1)]:[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[r("a-radio",{attrs:{value:"2"}},[e._v("\n              部门\n            ")]),r("a-radio",{attrs:{value:"3"}},[e._v("\n              岗位\n            ")])],1)]],2),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"电话"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",e.validatorRules.mobile],expression:"['mobile',validatorRules.mobile]"}],attrs:{placeholder:"请输入电话"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"传真"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["fax",{}],expression:"['fax', {}]"}],attrs:{placeholder:"请输入传真"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{}],expression:"['address', {}]"}],attrs:{placeholder:"请输入地址"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["departOrder",{initialValue:0}],expression:"[ 'departOrder',{'initialValue':0}]"}]})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{}],expression:"['memo', {}]"}],attrs:{placeholder:"请输入备注"}})],1)],1)],1)],1)},o=[],l=(r("3b2b"),r("6b54"),r("0fea")),n=r("4ec3"),i=r("88bc"),s=r.n(i),d=r("261e"),c={name:"SysDepartModal",components:{ATextarea:d["a"]},data:function(){return{departTree:[],orgTypeData:[],phoneWarning:"",departName:"",title:"操作",seen:!1,visible:!1,condition:!0,disableSubmit:!1,model:{},menuhidden:!1,menuusing:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{departName:{rules:[{required:!0,message:"请输入机构/部门名称!"}]},orgCode:{rules:[{required:!0,message:"请输入机构编码!"}]},mobile:{rules:[{validator:this.validateMobile}]}},url:{add:"/sys/sysDepart/add"},dictDisabled:!0}},created:function(){},methods:{loadTreeData:function(){var e=this;Object(n["E"])().then((function(a){if(a.success){e.departTree=[];for(var r=0;r<a.result.length;r++){var t=a.result[r];e.departTree.push(t)}}}))},add:function(e){e?(this.seen=!1,this.dictDisabled=!1):(this.seen=!0,this.dictDisabled=!0),this.edit(e)},edit:function(e){var a=this;this.form.resetFields(),this.model=Object.assign({},{}),this.visible=!0,this.loadTreeData(),this.model.parentId=null!=e?e.toString():null,this.seen?this.model.orgCategory="1":this.model.orgCategory="2",this.$nextTick((function(){a.form.setFieldsValue(s()(a.model,"orgCategory","departName","departNameEn","departNameAbbr","departOrder","description","orgType","orgCode","mobile","fax","address","memo","status","delFlag"))}))},close:function(){this.$emit("close"),this.disableSubmit=!1,this.visible=!1},handleOk:function(){var e=this,a=this;this.form.validateFields((function(r,t){if(!r){a.confirmLoading=!0;var o=Object.assign(e.model,t);Object(l["h"])(e.url.add,o,"post").then((function(e){e.success?(a.$message.success(e.message),a.loadTreeData(),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1,a.close()}))}}))},handleCancel:function(){this.close()},validateMobile:function(e,a,r){!a||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(a)?r():r("您的手机号码格式不正确!")}}},u=c,p=r("2877"),m=Object(p["a"])(u,t,o,!1,null,"156ea8f3",null);a["default"]=m.exports}}]);