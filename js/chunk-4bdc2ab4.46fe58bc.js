(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bdc2ab4"],{"18ee":function(t,n,e){},"3adc":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"background-color":"#f7f8fa",height:"100vh"}},[e("van-nav-bar",{attrs:{fixed:"",placeholder:""},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",[t._v("个人中心")])]},proxy:!0}])}),e("van-cell",{attrs:{title:"播放记录",center:"","is-link":"",to:"PlayHistory"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("van-icon",{staticClass:"cell-icon",attrs:{name:"notes-o",color:"#4FC08D"}})]},proxy:!0}])}),e("van-cell",{attrs:{title:"我的收藏",center:"","is-link":"",to:"PlayCollection"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("van-icon",{staticClass:"cell-icon",attrs:{name:"star",color:"#4FC08D"}})]},proxy:!0}])}),e("van-cell",{staticClass:"vip-parse",attrs:{title:"VIP解析",center:"","is-link":"",to:"VipParse"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("van-icon",{staticClass:"cell-icon",attrs:{name:"live",color:"#4FC08D"}})]},proxy:!0}])}),e("van-cell",{attrs:{title:"电视直播",center:"","is-link":"",to:"TV"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("van-icon",{staticClass:"cell-icon",attrs:{name:"play",color:"#4FC08D"}})]},proxy:!0}])}),e("van-cell",{staticClass:"active-fun",attrs:{title:"功能激活",center:"","is-link":""},on:{click:t.onClickActive},scopedSlots:t._u([{key:"icon",fn:function(){return[e("van-icon",{staticClass:"cell-icon",attrs:{name:"flag-o",color:"#4FC08D"}})]},proxy:!0}])}),e("div",[e("van-popup",{style:{height:"30%"},attrs:{round:"",position:"bottom",closeable:""},model:{value:t.showActiveFun,callback:function(n){t.showActiveFun=n},expression:"showActiveFun"}},[e("div",{staticClass:"active-fun-panel"},[e("van-field",{attrs:{name:"功能KEY",label:"功能KEY",placeholder:"功能KEY",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.activationCode,callback:function(n){t.activationCode=n},expression:"activationCode"}}),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info"},on:{click:t.onSubmitActiveCode}},[t._v("提交")])],1)],1)])],1)],1)},i=[],c={name:"Mine",data:function(){return{showActiveFun:!1,activationCode:""}},methods:{onClickActive:function(){this.showActiveFun=!0},onSubmitActiveCode:function(){this.activationCode?"涛哥欧巴最帅"===this.activationCode?(this.$cacheUtil.LOCAL_STORAGE.set(this.$cacheConstant.ACTIVE.ADULT_CONTENT,"ok"),this.$toast.success("已为你开启隐藏内容，退出重新进入应用后生效！"),this.showActiveFun=!1):this.$toast.fail("输入KEY有误！"):this.$toast.fail("不能为空！")}}},a=c,s=(e("9a29"),e("2877")),l=Object(s["a"])(a,o,i,!1,null,"5f6529d3",null);n["default"]=l.exports},"9a29":function(t,n,e){"use strict";e("18ee")}}]);