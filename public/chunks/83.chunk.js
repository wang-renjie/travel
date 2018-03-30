webpackJsonp([83],{497:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a(86),s=a.n(e);i.default={name:"theme_attraction",data:function(){return{list:[],listLoading:!1,listQuery:{}}},components:{Breadcrumb:s.a},created:function(){this.initData()},methods:{handleSizeChange:function(t){this.$router.push({path:"/attraction/list",query:{limit:t}})},handleCurrentChange:function(t){this.$router.push({path:"/attraction/list",query:{page:t}})},initData:function(){var t=this;this.listLoading=!0,this.currentPageId?this.$http.get("/attraction/list?pid="+this.currentPageId+"&page="+this.currentPage+"&limit="+this.currentLimit).then(function(i){var a=i.data;a.data.length>0?t.list=a.data:t.$message({type:"info",message:"没有数据"}),t.listQuery=a.meta.pagination,t.listLoading=!1}):this.$http.get("/attraction/list?page="+this.currentPage+"&limit="+this.currentLimit).then(function(i){var a=i.data;a.data.length>0?t.list=a.data:t.$message({type:"info",message:"没有数据"}),t.listQuery=a.meta.pagination,t.listLoading=!1})}},watch:{currentPage:"initData",currentLimit:"initData"},computed:{currentPageId:function(){return parseInt(this.$route.query.pid)},dataList:function(){return this.list},currentPage:function(){return parseInt(this.$route.query.page,10)||1},currentLimit:function(){return parseInt(this.$route.query.limit,10)||10},listCount:function(){return this.list.length}}}},498:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"unit-title-blk bg-slash"},[a("Breadcrumb",{staticClass:"breadcrumb"}),t._v(" "),a("h2",{staticClass:"unit-title icon-unit-attraction"},[t._v(t._s(t.$route.name))])],1),t._v(" "),t.listLoading?t._e():a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.listLoading,expression:"listLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"page-content-wrapper"},[a("p",{staticClass:"total-nums-blk"},[t._v(" 共有"),a("span",{staticClass:"nums"},[t._v(t._s(t.listCount))]),t._v("个景点")]),t._v(" "),a("ul",{staticClass:"event-news-card-list"},t._l(t.dataList,function(i,e){return a("li",{key:e,staticClass:"item news"},[a("div",{staticClass:"info-card-item"},[a("router-link",{staticClass:"link",attrs:{to:"/attraction/detail/"+i.id,title:i.title}},[a("span",{staticClass:"thumb-frame"},[a("img",{staticClass:"thumb lazyloaded",attrs:{src:i.imgUrl,alt:i.title}})]),t._v(" "),a("div",{staticClass:"info-blk"},[a("span",{staticClass:"date"},[t._v("开放时间:"+t._s(i.date))]),t._v(" "),a("h3",{staticClass:"info-title"},[t._v(t._s(i.content_short))])])]),t._v(" "),a("div",{staticClass:"func-blk"},[a("span",{staticClass:"icon-view-1"},[t._v("最后编辑时间:"+t._s(i.date_time))]),t._v(" "),a("span",{staticClass:"icon-view"},[t._v(t._s(i.view_count))])])],1)])})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.current_page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.per_page,layout:"total, sizes, prev, pager, next, jumper",total:t.listQuery.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])},staticRenderFns:[]}},833:function(t,i,a){var e=a(1)(a(497),a(498),!1,null,null,null);t.exports=e.exports}});