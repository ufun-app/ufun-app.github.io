(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8a498dc"],{"070c":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%",height:"100vh","background-color":"#f7f8fa"}},[n("van-sticky",[n("van-nav-bar",{attrs:{fixed:"",placeholder:"","left-arrow":""},on:{"click-left":function(t){return e.$router.go(-1)}},scopedSlots:e._u([{key:"title",fn:function(){return[n("span",[e._v(e._s(e.title))])]},proxy:!0}])}),n("van-cell-group",[n("van-field",{attrs:{readonly:"",clickable:"",value:e.typeName,"input-align":"center",placeholder:"选择分类"},on:{click:function(t){e.showPicker=!0}}}),n("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.typeList,"value-key":"typeName"},on:{cancel:function(t){e.showPicker=!1},confirm:e.onConfirm}})],1)],1)],1),n("div",[n("div",[n("van-list",{staticStyle:{padding:"5px","background-color":"#f7f8fa"},attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoadResc},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.tableData.list,(function(t,a){return n("span",{key:a,staticStyle:{display:"block","text-align":"center",padding:"10px",color:"grey"},on:{click:function(n){return e.onOkRescDetail(t)}}},[e._v(" "+e._s(t.vod_name)+" ")])})),0)],1)])],1)},r=[],i=(n("c975"),n("ac1f"),n("1276"),n("2909")),o=(n("96cf"),n("1da1")),c=n("b85c"),l={OK:[{typeId:1,typeName:"电影"},{typeId:2,typeName:"连续剧"},{typeId:3,typeName:"综艺"},{typeId:4,typeName:"动漫"},{typeId:5,typeName:"资讯"},{typeId:6,typeName:"动作片"},{typeId:7,typeName:"喜剧片"},{typeId:8,typeName:"爱情片"},{typeId:9,typeName:"科幻片"},{typeId:10,typeName:"恐怖片"},{typeId:11,typeName:"剧情片"},{typeId:12,typeName:"战争片"},{typeId:13,typeName:"国产剧"},{typeId:14,typeName:"香港剧"},{typeId:15,typeName:"韩国剧"},{typeId:16,typeName:"欧美剧"},{typeId:20,typeName:"纪录片"},{typeId:21,typeName:"微电影"},{typeId:22,typeName:"台湾剧"},{typeId:23,typeName:"日本剧"},{typeId:24,typeName:"海外剧"},{typeId:25,typeName:"内地综艺"},{typeId:26,typeName:"港台综艺"},{typeId:27,typeName:"日韩综艺"},{typeId:28,typeName:"欧美综艺"},{typeId:29,typeName:"国产动漫"},{typeId:30,typeName:"日韩动漫"},{typeId:31,typeName:"欧美动漫"},{typeId:32,typeName:"港台动漫"},{typeId:33,typeName:"海外动漫"},{typeId:35,typeName:"解说"},{typeId:36,typeName:"电影解说"},{typeId:37,typeName:"伦理片",roleType:["adultContent"]},{typeId:34,typeName:"福利片",roleType:["adultContent"]}]},s=l,p={name:"OkMovCategoryPage",data:function(){return{title:this.$httpApi.BASE.OK.title,showPicker:!1,typeName:"",typeId:"",vodName:"",loading:!1,finished:!0,searchPageParams:{ac:"list",pg:1,t:""},tableData:""}},computed:{typeList:function(){var e,t=this.$activeUtil.isActiveAdultContent(),n=[],a=Object(c["a"])(s.OK);try{for(a.s();!(e=a.n()).done;){var r=e.value;r.roleType&&!t||n.push(r)}}catch(i){a.e(i)}finally{a.f()}return n}},methods:{onConfirm:function(e){this.typeId=e.typeId,this.typeName=e.typeName,this.showPicker=!1,this.onSearch(!1)},onLoadResc:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.searchPageParams.pg<e.tableData.pagecount)){t.next=4;break}return e.searchPageParams.pg=e.searchPageParams.pg+1,t.next=4,e.onSearch(!0);case 4:case"end":return t.stop()}}),t)})))()},onSearch:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.typeId){n.next=2;break}return n.abrupt("return");case 2:return t.searchPageParams.t=t.typeId,n.next=5,t.$httpUtil.http(t.$httpApi.SERVICE.OK.page,t.searchPageParams);case 5:a=n.sent,a.list?e?(r=t.tableData.list).push.apply(r,Object(i["a"])(a.list)):t.tableData=a:t.finished=!0,t.searchPageParams.pg>=a.pagecount?t.finished=!0:t.finished=!1,t.loading=!1;case 9:case"end":return n.stop()}}),n)})))()},onOkRescDetail:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o,l,s,p,u,d,y,f,v,h,m,g,x,I,b,N,k,_,P,E,R,w,O,$,S,C;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$httpUtil.http(t.$httpApi.SERVICE.OK.detail,{ac:"detail",ids:e.vod_id});case 2:a=n.sent,1!==a.code&&t.$toast.fail("请求失败！"),r=[],i=Object(c["a"])(a.list);try{for(i.s();!(o=i.n()).done;){for(l=o.value,s={},s.vodId=l.vod_id,s.vodName=l.vod_name,s.vodClass=l.vod_class,s.vodPic=l.vod_pic,s.vodActor=l.vod_actor,s.vodBlurb=l.vod_blurb,s.vodRemarks=l.vod_remarks,s.vodArea=l.vod_area,s.vodLang=l.vod_lang,s.vodYear=l.vod_year,s.vodTime=l.vod_time,s.vodContent=l.vod_content,s.vodPlayFrom=l.vod_play_from,s.vodPlayServer=l.vod_play_server,s.typeName=l.type_name,s.isCollected=!1,p=l.vod_play_from,u=l.vod_play_note,d=l.vod_play_url.split(u),y=p.split(u),s.playVOList=[],f=0;f<d.length;f++){v=y[f],-1<v.indexOf("m3u8")&&(v="m3u8"),h={},h.vodPlayFrom=v,m=[],g=Object(c["a"])(d[f].split("#"));try{for(g.s();!(x=g.n()).done;)I=x.value,b={},N=I.split("$"),b.vodPlayFrom=v,b.playName=N[0],b.playUrl=N[1],m.push(b)}catch(D){g.e(D)}finally{g.f()}h.playDetailVOList=m,s.rescPlatform="ok",s.rescPlatformDesc="ok资源网",s.playVOList.push(h)}r.push(s)}}catch(D){i.e(D)}finally{i.f()}return k=r[0],n.next=10,t.$dexieUtil.getInstance().play_collection.where("vodName").equals(k.vodName).and((function(e){return e.rescPlatform===k.rescPlatform})).and((function(e){return e.vodId===k.vodId})).count();case 10:_=n.sent,0<_&&(k.isCollected=!0),t.$store.commit("updateMovieVOList",r),t.$store.commit("updateRightNowMovieVO",r[0]),P=r[0].playVOList[0].playDetailVOList[0],E=Object(c["a"])(r[0].playVOList),n.prev=16,E.s();case 18:if((R=E.n()).done){n.next=40;break}w=R.value,O=Object(c["a"])(w.playDetailVOList),n.prev=21,O.s();case 23:if(($=O.n()).done){n.next=30;break}if(S=$.value,!(-1<S.playUrl.indexOf("m3u8")||-1<S.playUrl.indexOf("mp4"))){n.next=28;break}return P=S,n.abrupt("break",30);case 28:n.next=23;break;case 30:n.next=35;break;case 32:n.prev=32,n.t0=n["catch"](21),O.e(n.t0);case 35:return n.prev=35,O.f(),n.finish(35);case 38:n.next=18;break;case 40:n.next=45;break;case 42:n.prev=42,n.t1=n["catch"](16),E.e(n.t1);case 45:return n.prev=45,E.f(),n.finish(45);case 48:return t.$store.commit("updateRightNowMovieDetailVO",P),n.next=51,t.$dexieUtil.getInstance().play_history.where("vodName").equals(k.vodName).and((function(e){return e.vodId===k.vodId})).and((function(e){return e.rescPlatform===k.rescPlatform})).count();case 51:if(C=n.sent,0!==C){n.next=56;break}return k.createTime=t.$dayjs().format("YYYY-MM-DD HH:mm:ss"),n.next=56,t.$dexieUtil.getInstance().play_history.add(k);case 56:return n.next=58,t.$router.push("/Play");case 58:case"end":return n.stop()}}),n,null,[[16,42,45,48],[21,32,35,38]])})))()}}},u=p,d=n("2877"),y=Object(d["a"])(u,a,r,!1,null,"55ad1d02",null);t["default"]=y.exports},1276:function(e,t,n){"use strict";var a=n("d784"),r=n("44e7"),i=n("825a"),o=n("1d80"),c=n("4840"),l=n("8aa5"),s=n("50c4"),p=n("14c3"),u=n("9263"),d=n("d039"),y=[].push,f=Math.min,v=4294967295,h=!d((function(){return!RegExp(v,"y")}));a("split",2,(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=String(o(this)),i=void 0===n?v:n>>>0;if(0===i)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,i);var c,l,s,p=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=new RegExp(e.source,d+"g");while(c=u.call(h,a)){if(l=h.lastIndex,l>f&&(p.push(a.slice(f,c.index)),c.length>1&&c.index<a.length&&y.apply(p,c.slice(1)),s=c[0].length,f=l,p.length>=i))break;h.lastIndex===c.index&&h.lastIndex++}return f===a.length?!s&&h.test("")||p.push(""):p.push(a.slice(f)),p.length>i?p.slice(0,i):p}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=o(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,r,n):a.call(String(r),t,n)},function(e,r){var o=n(a,e,this,r,a!==t);if(o.done)return o.value;var u=i(e),d=String(this),y=c(u,RegExp),m=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),x=new y(h?u:"^(?:"+u.source+")",g),I=void 0===r?v:r>>>0;if(0===I)return[];if(0===d.length)return null===p(x,d)?[d]:[];var b=0,N=0,k=[];while(N<d.length){x.lastIndex=h?N:0;var _,P=p(x,h?d:d.slice(N));if(null===P||(_=f(s(x.lastIndex+(h?0:N)),d.length))===b)N=l(d,N,m);else{if(k.push(d.slice(b,N)),k.length===I)return k;for(var E=1;E<=P.length-1;E++)if(k.push(P[E]),k.length===I)return k;N=b=_}}return k.push(d.slice(b)),k}]}),!h)},"14c3":function(e,t,n){var a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"44e7":function(e,t,n){var a=n("861d"),r=n("c6b6"),i=n("b622"),o=i("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},9263:function(e,t,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=r.UNSUPPORTED_Y||r.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],u=l||p||s;u&&(c=function(e){var t,n,r,c,u=this,d=s&&u.sticky,y=a.call(u),f=u.source,v=0,h=e;return d&&(y=y.replace("y",""),-1===y.indexOf("g")&&(y+="g"),h=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(f="(?: "+f+")",h=" "+h,v++),n=new RegExp("^(?:"+f+")",y)),p&&(n=new RegExp("^"+f+"$(?!\\s)",y)),l&&(t=u.lastIndex),r=i.call(d?n:u,h),d?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:l&&r&&(u.lastIndex=u.global?r.index+r[0].length:t),p&&r&&r.length>1&&o.call(r[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),e.exports=c},"9f7f":function(e,t,n){"use strict";var a=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),o=n("9263"),c=n("9112"),l=i("species"),s=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){return"$0"==="a".replace(/./,"$0")}(),u=i("replace"),d=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),y=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,u){var f=i(e),v=!r((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),h=v&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!v||!h||"replace"===e&&(!s||!p||d)||"split"===e&&!y){var m=/./[f],g=n(f,""[e],(function(e,t,n,a,r){return t.exec===o?v&&!r?{done:!0,value:m.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=g[0],I=g[1];a(String.prototype,e,x),a(RegExp.prototype,f,2==t?function(e,t){return I.call(e,this,t)}:function(e){return I.call(e,this)})}u&&c(RegExp.prototype[f],"sham",!0)}}}]);