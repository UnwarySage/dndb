// Compiled by ClojureScript 1.10.520 {}
goog.provide('dbnd.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
dbnd.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
dbnd.core.path_for = (function dbnd$core$path_for(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43617 = arguments.length;
var i__4731__auto___43618 = (0);
while(true){
if((i__4731__auto___43618 < len__4730__auto___43617)){
args__4736__auto__.push((arguments[i__4731__auto___43618]));

var G__43619 = (i__4731__auto___43618 + (1));
i__4731__auto___43618 = G__43619;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dbnd.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dbnd.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__43613){
var vec__43614 = p__43613;
var params = cljs.core.nth.call(null,vec__43614,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,dbnd.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,dbnd.core.router,route));
}
});

dbnd.core.path_for.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dbnd.core.path_for.cljs$lang$applyTo = (function (seq43611){
var G__43612 = cljs.core.first.call(null,seq43611);
var seq43611__$1 = cljs.core.next.call(null,seq43611);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43612,seq43611__$1);
});

dbnd.core.path_for.call(null,new cljs.core.Keyword(null,"about","about",1423892543));
dbnd.core.home_page = (function dbnd$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to DnDB"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dbnd.core.path_for.call(null,new cljs.core.Keyword(null,"items","items",1031954938))], null),"Items of dbnd"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/broken/link"], null),"Broken link"], null)], null)], null)], null);
});
});
dbnd.core.items_page = (function dbnd$core$items_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The items of dbnd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dbnd.core.path_for.call(null,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null))], null),"Item: ",item_id], null)], null);
}),cljs.core.range.call(null,(1),(60)))], null)], null);
});
});
dbnd.core.item_page = (function dbnd$core$item_page(){
return (function (){
var routing_data = reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309));
var item = cljs.core.get_in.call(null,routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)," of dbnd"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dbnd.core.path_for.call(null,new cljs.core.Keyword(null,"items","items",1031954938))], null),"Back to the list of items"], null)], null)], null);
});
});
dbnd.core.about_page = (function dbnd$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About dbnd"], null)], null);
});
});
dbnd.core.navbar = (function dbnd$core$navbar(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-wrapper","div.nav-wrapper",2090748862),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#nav-mobile.left.hide-on-med-and-down","ul#nav-mobile.left.hide-on-med-and-down",-764177829),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dbnd.core.path_for.call(null,new cljs.core.Keyword(null,"index","index",-1531685915))], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dbnd.core.path_for.call(null,new cljs.core.Keyword(null,"items","items",1031954938))], null),"Items of DnDB"], null)], null)], null)], null)], null);
});
});
dbnd.core.page_for = (function dbnd$core$page_for(route){
var G__43620 = route;
var G__43620__$1 = (((G__43620 instanceof cljs.core.Keyword))?G__43620.fqn:null);
switch (G__43620__$1) {
case "index":
return new cljs.core.Var(function(){return dbnd.core.home_page;},new cljs.core.Symbol("dbnd.core","home-page","dbnd.core/home-page",571032706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dbnd.core","dbnd.core",-914915381,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/dbnd/core.cljs",16,1,29,29,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dbnd.core.home_page)?dbnd.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return dbnd.core.about_page;},new cljs.core.Symbol("dbnd.core","about-page","dbnd.core/about-page",1476139446,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dbnd.core","dbnd.core",-914915381,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/dbnd/core.cljs",17,1,58,58,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dbnd.core.about_page)?dbnd.core.about_page.cljs$lang$test:null)]));

break;
case "items":
return new cljs.core.Var(function(){return dbnd.core.items_page;},new cljs.core.Symbol("dbnd.core","items-page","dbnd.core/items-page",-1800685187,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dbnd.core","dbnd.core",-914915381,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"src/cljs/dbnd/core.cljs",17,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dbnd.core.items_page)?dbnd.core.items_page.cljs$lang$test:null)]));

break;
case "item":
return new cljs.core.Var(function(){return dbnd.core.item_page;},new cljs.core.Symbol("dbnd.core","item-page","dbnd.core/item-page",1689536539,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dbnd.core","dbnd.core",-914915381,null),new cljs.core.Symbol(null,"item-page","item-page",1282130364,null),"src/cljs/dbnd/core.cljs",16,1,49,49,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dbnd.core.item_page)?dbnd.core.item_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43620__$1)].join('')));

}
});
dbnd.core.current_page = (function dbnd$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dbnd.core.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"dbnd was generated by the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/reagent-project/reagent-template"], null),"Reagent Template"], null),"."], null)], null)], null);
});
});
dbnd.core.mount_root = (function dbnd$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dbnd.core.current_page], null),document.getElementById("app"));
});
dbnd.core.init_BANG_ = (function dbnd$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,dbnd.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),dbnd.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,dbnd.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return dbnd.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1573662974928
