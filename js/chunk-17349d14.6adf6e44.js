(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17349d14"],{"1b4d":function(e,t,n){},"5b84":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("van-row",{attrs:{gutter:"15"}},[n("van-col",{attrs:{span:"4"}},[n("van-image",{attrs:{width:"60",height:"60",src:e.pic,fit:"fill"}})],1),n("van-col",{attrs:{span:"18"}},[n("span",{staticClass:"title"},[e._v(e._s(e.title))]),n("div",{staticClass:"van-multi-ellipsis--l3 content",domProps:{textContent:e._s(e.content)}})])],1)],1)},a=[],i={name:"VideoInfo",props:["pic","title","content"]},s=i,o=(n("dec2"),n("2877")),c=Object(o["a"])(s,r,a,!1,null,"12ab57ef",null);t["a"]=c.exports},"6b57":function(e,t,n){},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),i=n("a691"),s=n("50c4"),o=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),f=n("ae40"),d=u("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!h},{splice:function(e,t){var n,r,u,f,d,h,b=o(this),x=s(b.length),y=a(e,x),k=arguments.length;if(0===k?n=r=0:1===k?(n=0,r=x-y):(n=k-2,r=v(p(i(t),0),x-y)),x+n-r>m)throw TypeError(g);for(u=c(b,r),f=0;f<r;f++)d=y+f,d in b&&l(u,f,b[d]);if(u.length=r,n<r){for(f=y;f<x-r;f++)d=f+r,h=f+n,d in b?b[h]=b[d]:delete b[h];for(f=x;f>x-r+n;f--)delete b[f-1]}else if(n>r)for(f=x-r;f>y;f--)d=f+r-1,h=f+n-1,d in b?b[h]=b[d]:delete b[h];for(f=0;f<n;f++)b[f+y]=arguments[f+2];return b.length=x-r+n,u}})},a9d8:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"background-color":"#f7f8fa",height:"100vh"}},[n("van-nav-bar",{attrs:{fixed:"",placeholder:"","left-arrow":""},on:{"click-left":e.onClickLeft},scopedSlots:e._u([{key:"title",fn:function(){return[n("span",[e._v("播放记录")])]},proxy:!0}])}),n("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:e.onRefresh},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},[n("van-skeleton",{attrs:{title:"",avatar:"",row:20,loading:e.isSkeletonLoading}},[e.closeableHistoryTips?n("van-notice-bar",{attrs:{mode:"closeable"},on:{close:e.closeTips}},[e._v("左右滑动记录可以播放或者删除记录 ")]):e._e(),n("van-list",{attrs:{finished:e.finished,offset:"1","finished-text":"已加载完毕,下拉可刷新"},on:{load:e.onLoadList},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.list,(function(t,r){return n("div",{key:r},[n("van-divider",{style:{color:"#4fc08d",borderColor:"#4fc08d"}},[e._v(e._s(t.createTime))]),n("van-swipe-cell",{scopedSlots:e._u([{key:"left",fn:function(){return[n("van-button",{staticClass:"delete-button",attrs:{square:"",text:"播放",color:"#4fc08d"},on:{click:function(n){return e.onClickHistoryMovie(t)}}})]},proxy:!0},{key:"right",fn:function(){return[n("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"},on:{click:function(n){return e.onDeleteHistoryMovie(t.id,r)}}})]},proxy:!0}],null,!0)},[n("video-info",{attrs:{title:t.vodName,content:t.vodBlurb,pic:t.vodPic}})],1)],1)})),0)],1)],1)],1)},a=[],i=(n("c975"),n("a434"),n("b85c")),s=n("2909"),o=(n("96cf"),n("1da1")),c=n("5b84"),l={name:"PlayHistory",components:{"video-info":c["a"]},data:function(){return{loading:!1,finished:!0,refreshing:!1,list:[],searchParams:{offset:0,limit:10,totalCount:0}}},computed:{isSkeletonLoading:function(){return 0>=this.list.length},closeableHistoryTips:function(){return!this.$cacheUtil.LOCAL_STORAGE.get("historyTips")}},methods:{onClickLeft:function(){this.$router.go(-1)},closeTips:function(){this.$cacheUtil.LOCAL_STORAGE.set("historyTips","closed")},onRefresh:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.searchParams.offset=0,e.searchParams.limit=10,t.next=4,e.page(!0);case 4:e.refreshing=!1;case 5:case"end":return t.stop()}}),t)})))()},onLoadList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$dexieUtil.getInstance().play_history.count();case 2:if(n=t.sent,e.searchParams.totalCount=n,!(n<=e.list.length)){t.next=7;break}return e.loading=!1,t.abrupt("return");case 7:return e.searchParams.offset=e.searchParams.offset+e.searchParams.limit,t.next=10,e.page(!1);case 10:case"end":return t.stop()}}),t)})))()},page:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$dexieUtil.getInstance().play_history.count();case 2:if(r=n.sent,t.searchParams.totalCount=r,!(r<=t.searchParams.offset)){n.next=8;break}return t.loading=!1,t.finished=!0,n.abrupt("return");case 8:return n.next=10,t.$dexieUtil.getInstance().play_history.toCollection().offset(t.searchParams.offset).limit(t.searchParams.limit).desc().toArray();case 10:a=n.sent,a&&0<a.length&&(0<t.list.length&&!e?(i=t.list).push.apply(i,Object(s["a"])(a)):t.list=a),r<=t.list.length?t.finished=!0:t.finished=!1,t.loading=!1;case 14:case"end":return n.stop()}}),n)})))()},onDeleteHistoryMovie:function(e,t){this.$dexieUtil.getInstance().play_history.where("id").equals(e).delete(),this.list.splice(t,1),this.$toast.success("删除成功！")},onClickHistoryMovie:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o,c,l,u,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log(e.vodName),r=[e],t.$store.commit("updateMovieVOList",r),t.$store.commit("updateRightNowMovieVO",e),a=e.playVOList[0].playDetailVOList[0],s=Object(i["a"])(e.playVOList),n.prev=6,s.s();case 8:if((o=s.n()).done){n.next=30;break}c=o.value,l=Object(i["a"])(c.playDetailVOList),n.prev=11,l.s();case 13:if((u=l.n()).done){n.next=20;break}if(f=u.value,!(-1<f.playUrl.indexOf("m3u8")||-1<f.playUrl.indexOf("mp4"))){n.next=18;break}return a=f,n.abrupt("break",20);case 18:n.next=13;break;case 20:n.next=25;break;case 22:n.prev=22,n.t0=n["catch"](11),l.e(n.t0);case 25:return n.prev=25,l.f(),n.finish(25);case 28:n.next=8;break;case 30:n.next=35;break;case 32:n.prev=32,n.t1=n["catch"](6),s.e(n.t1);case 35:return n.prev=35,s.f(),n.finish(35);case 38:return t.$store.commit("updateRightNowMovieDetailVO",a),n.next=41,t.$router.push("Play");case 41:case"end":return n.stop()}}),n,null,[[6,32,35,38],[11,22,25,28]])})))()}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.onRefresh();case 2:case"end":return t.stop()}}),t)})))()}},u=l,f=(n("c795"),n("2877")),d=Object(f["a"])(u,r,a,!1,null,"014983c2",null);t["default"]=d.exports},c795:function(e,t,n){"use strict";n("6b57")},dec2:function(e,t,n){"use strict";n("1b4d")}}]);