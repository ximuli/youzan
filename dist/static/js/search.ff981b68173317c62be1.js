webpackJsonp([5],{"035s":function(t,e){},"0mhr":function(t,e){},"97Sy":function(t,e){},TFhR:function(t,e,a){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMrremove:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var n in s)s.hasOwnProperty(n)&&(s[n]="http://rap2api.taobao.org/app/mock/7058"+s[n]);e.a=s},"U/rD":function(t,e,a){"use strict";var s={filters:{currency:function(t){var e=String(t);if(e.indexOf(".")>-1){var a=e.split(".");return a[0]+"."+(a[1]+"0").substr(0,2)}return e+".00"}},components:{Foot:a("nq5D").a}};e.a=s},nq5D:function(t,e,a){"use strict";var s=a("mw3O"),n=a.n(s).a.parse(location.search.substr(1)).index,r=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],i={data:function(){return{bottomNavData:r,curIndex:parseInt(n)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.bottomNavData,function(e,s){return a("li",{class:{active:s===t.curIndex},on:{click:function(a){t.changeNav(e,s)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var c=a("VU/8")(i,o,!1,function(t){a("yS9R")},null,null);e.a=c.exports},sSMw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("97Sy"),n=(a.n(s),a("bCKv")),r=a.n(n),i=a("035s"),o=(a.n(i),a("0mhr")),c=(a.n(o),a("7+uW")),d=a("mtWM"),u=a.n(d),h=a("TFhR"),l=a("mw3O"),m=a.n(l),f=a("U/rD"),v=a("9qgI"),p=a.n(v);c.default.use(r.a);var g=m.a.parse(location.search.substr(1)),L=g.keyword,S=g.id;new c.default({el:".container",data:{keyword:L,searchList:null,isShow:!1,loading:!1,pageNum:1,pageSize:8},created:function(){this.getSearchList()},methods:{getSearchList:function(){var t=this;this.loading=!0,u.a.post(h.a.searchList,{keyword:L,id:S,pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;t.searchList?t.searchList=t.searchList.concat(a):t.searchList=a,t.loading=!1,t.pageNum++})},move:function(){document.documentElement.scrollTop>100?this.isShow=!0:this.isShow=!1},toTop:function(){p()(document.documentElement,"scroll",{duration:500}),this.isShow=!1}},mixins:[f.a]})},yS9R:function(t,e){}},["sSMw"]);
//# sourceMappingURL=search.ff981b68173317c62be1.js.map