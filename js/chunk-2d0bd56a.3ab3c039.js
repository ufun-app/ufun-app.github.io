(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd56a"],{"2c25":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"background-color":"#f7f8fa",height:"100vh"}},[n("van-sticky",[n("van-nav-bar",{attrs:{fixed:"",border:!1,placeholder:"","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v("设置")])]},proxy:!0}])})],1),n("div",[n("div",[n("van-cell",{attrs:{title:"反馈","is-link":""},on:{click:t.onCopyEmail}}),n("van-cell",{attrs:{title:"关于","is-link":"",to:"About"},scopedSlots:t._u([t.hasNewVersion?{key:"default",fn:function(){return[n("van-badge",{attrs:{content:"有新版本"}})]},proxy:!0}:null],null,!0)})],1)])],1)},a=[],c={name:"Setting",data:function(){return{}},computed:{hasNewVersion:function(){return!!localStorage.getItem("hasNewVersion")}},methods:{onCopyEmail:function(){var t=document.createElement("input");t.value="ufun-app@yandex.com",document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),this.$toast("邮箱地址复制成功：ufun-app@yandex.com！")}}},r=c,l=n("2877"),u=Object(l["a"])(r,o,a,!1,null,"4cd25260",null);e["default"]=u.exports}}]);