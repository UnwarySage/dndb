// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35403_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35403_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35404 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35405 = null;
var count__35406 = (0);
var i__35407 = (0);
while(true){
if((i__35407 < count__35406)){
var n = cljs.core._nth.call(null,chunk__35405,i__35407);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35408 = seq__35404;
var G__35409 = chunk__35405;
var G__35410 = count__35406;
var G__35411 = (i__35407 + (1));
seq__35404 = G__35408;
chunk__35405 = G__35409;
count__35406 = G__35410;
i__35407 = G__35411;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35404);
if(temp__5735__auto__){
var seq__35404__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35404__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35404__$1);
var G__35412 = cljs.core.chunk_rest.call(null,seq__35404__$1);
var G__35413 = c__4550__auto__;
var G__35414 = cljs.core.count.call(null,c__4550__auto__);
var G__35415 = (0);
seq__35404 = G__35412;
chunk__35405 = G__35413;
count__35406 = G__35414;
i__35407 = G__35415;
continue;
} else {
var n = cljs.core.first.call(null,seq__35404__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35416 = cljs.core.next.call(null,seq__35404__$1);
var G__35417 = null;
var G__35418 = (0);
var G__35419 = (0);
seq__35404 = G__35416;
chunk__35405 = G__35417;
count__35406 = G__35418;
i__35407 = G__35419;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__35420){
var vec__35421 = p__35420;
var _ = cljs.core.nth.call(null,vec__35421,(0),null);
var v = cljs.core.nth.call(null,vec__35421,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__35424){
var vec__35425 = p__35424;
var k = cljs.core.nth.call(null,vec__35425,(0),null);
var v = cljs.core.nth.call(null,vec__35425,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35437_35445 = cljs.core.seq.call(null,deps);
var chunk__35438_35446 = null;
var count__35439_35447 = (0);
var i__35440_35448 = (0);
while(true){
if((i__35440_35448 < count__35439_35447)){
var dep_35449 = cljs.core._nth.call(null,chunk__35438_35446,i__35440_35448);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_35449;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35449));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35449,(depth + (1)),state);
} else {
}


var G__35450 = seq__35437_35445;
var G__35451 = chunk__35438_35446;
var G__35452 = count__35439_35447;
var G__35453 = (i__35440_35448 + (1));
seq__35437_35445 = G__35450;
chunk__35438_35446 = G__35451;
count__35439_35447 = G__35452;
i__35440_35448 = G__35453;
continue;
} else {
var temp__5735__auto___35454 = cljs.core.seq.call(null,seq__35437_35445);
if(temp__5735__auto___35454){
var seq__35437_35455__$1 = temp__5735__auto___35454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35437_35455__$1)){
var c__4550__auto___35456 = cljs.core.chunk_first.call(null,seq__35437_35455__$1);
var G__35457 = cljs.core.chunk_rest.call(null,seq__35437_35455__$1);
var G__35458 = c__4550__auto___35456;
var G__35459 = cljs.core.count.call(null,c__4550__auto___35456);
var G__35460 = (0);
seq__35437_35445 = G__35457;
chunk__35438_35446 = G__35458;
count__35439_35447 = G__35459;
i__35440_35448 = G__35460;
continue;
} else {
var dep_35461 = cljs.core.first.call(null,seq__35437_35455__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_35461;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35461));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35461,(depth + (1)),state);
} else {
}


var G__35462 = cljs.core.next.call(null,seq__35437_35455__$1);
var G__35463 = null;
var G__35464 = (0);
var G__35465 = (0);
seq__35437_35445 = G__35462;
chunk__35438_35446 = G__35463;
count__35439_35447 = G__35464;
i__35440_35448 = G__35465;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35441){
var vec__35442 = p__35441;
var seq__35443 = cljs.core.seq.call(null,vec__35442);
var first__35444 = cljs.core.first.call(null,seq__35443);
var seq__35443__$1 = cljs.core.next.call(null,seq__35443);
var x = first__35444;
var xs = seq__35443__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35442,seq__35443,first__35444,seq__35443__$1,x,xs,get_deps__$1){
return (function (p1__35428_SHARP_){
return clojure.set.difference.call(null,p1__35428_SHARP_,x);
});})(vec__35442,seq__35443,first__35444,seq__35443__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35466 = cljs.core.seq.call(null,provides);
var chunk__35467 = null;
var count__35468 = (0);
var i__35469 = (0);
while(true){
if((i__35469 < count__35468)){
var prov = cljs.core._nth.call(null,chunk__35467,i__35469);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35478_35486 = cljs.core.seq.call(null,requires);
var chunk__35479_35487 = null;
var count__35480_35488 = (0);
var i__35481_35489 = (0);
while(true){
if((i__35481_35489 < count__35480_35488)){
var req_35490 = cljs.core._nth.call(null,chunk__35479_35487,i__35481_35489);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35490,prov);


var G__35491 = seq__35478_35486;
var G__35492 = chunk__35479_35487;
var G__35493 = count__35480_35488;
var G__35494 = (i__35481_35489 + (1));
seq__35478_35486 = G__35491;
chunk__35479_35487 = G__35492;
count__35480_35488 = G__35493;
i__35481_35489 = G__35494;
continue;
} else {
var temp__5735__auto___35495 = cljs.core.seq.call(null,seq__35478_35486);
if(temp__5735__auto___35495){
var seq__35478_35496__$1 = temp__5735__auto___35495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35478_35496__$1)){
var c__4550__auto___35497 = cljs.core.chunk_first.call(null,seq__35478_35496__$1);
var G__35498 = cljs.core.chunk_rest.call(null,seq__35478_35496__$1);
var G__35499 = c__4550__auto___35497;
var G__35500 = cljs.core.count.call(null,c__4550__auto___35497);
var G__35501 = (0);
seq__35478_35486 = G__35498;
chunk__35479_35487 = G__35499;
count__35480_35488 = G__35500;
i__35481_35489 = G__35501;
continue;
} else {
var req_35502 = cljs.core.first.call(null,seq__35478_35496__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35502,prov);


var G__35503 = cljs.core.next.call(null,seq__35478_35496__$1);
var G__35504 = null;
var G__35505 = (0);
var G__35506 = (0);
seq__35478_35486 = G__35503;
chunk__35479_35487 = G__35504;
count__35480_35488 = G__35505;
i__35481_35489 = G__35506;
continue;
}
} else {
}
}
break;
}


var G__35507 = seq__35466;
var G__35508 = chunk__35467;
var G__35509 = count__35468;
var G__35510 = (i__35469 + (1));
seq__35466 = G__35507;
chunk__35467 = G__35508;
count__35468 = G__35509;
i__35469 = G__35510;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35466);
if(temp__5735__auto__){
var seq__35466__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35466__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35466__$1);
var G__35511 = cljs.core.chunk_rest.call(null,seq__35466__$1);
var G__35512 = c__4550__auto__;
var G__35513 = cljs.core.count.call(null,c__4550__auto__);
var G__35514 = (0);
seq__35466 = G__35511;
chunk__35467 = G__35512;
count__35468 = G__35513;
i__35469 = G__35514;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35466__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35482_35515 = cljs.core.seq.call(null,requires);
var chunk__35483_35516 = null;
var count__35484_35517 = (0);
var i__35485_35518 = (0);
while(true){
if((i__35485_35518 < count__35484_35517)){
var req_35519 = cljs.core._nth.call(null,chunk__35483_35516,i__35485_35518);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35519,prov);


var G__35520 = seq__35482_35515;
var G__35521 = chunk__35483_35516;
var G__35522 = count__35484_35517;
var G__35523 = (i__35485_35518 + (1));
seq__35482_35515 = G__35520;
chunk__35483_35516 = G__35521;
count__35484_35517 = G__35522;
i__35485_35518 = G__35523;
continue;
} else {
var temp__5735__auto___35524__$1 = cljs.core.seq.call(null,seq__35482_35515);
if(temp__5735__auto___35524__$1){
var seq__35482_35525__$1 = temp__5735__auto___35524__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35482_35525__$1)){
var c__4550__auto___35526 = cljs.core.chunk_first.call(null,seq__35482_35525__$1);
var G__35527 = cljs.core.chunk_rest.call(null,seq__35482_35525__$1);
var G__35528 = c__4550__auto___35526;
var G__35529 = cljs.core.count.call(null,c__4550__auto___35526);
var G__35530 = (0);
seq__35482_35515 = G__35527;
chunk__35483_35516 = G__35528;
count__35484_35517 = G__35529;
i__35485_35518 = G__35530;
continue;
} else {
var req_35531 = cljs.core.first.call(null,seq__35482_35525__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35531,prov);


var G__35532 = cljs.core.next.call(null,seq__35482_35525__$1);
var G__35533 = null;
var G__35534 = (0);
var G__35535 = (0);
seq__35482_35515 = G__35532;
chunk__35483_35516 = G__35533;
count__35484_35517 = G__35534;
i__35485_35518 = G__35535;
continue;
}
} else {
}
}
break;
}


var G__35536 = cljs.core.next.call(null,seq__35466__$1);
var G__35537 = null;
var G__35538 = (0);
var G__35539 = (0);
seq__35466 = G__35536;
chunk__35467 = G__35537;
count__35468 = G__35538;
i__35469 = G__35539;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35540_35544 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35541_35545 = null;
var count__35542_35546 = (0);
var i__35543_35547 = (0);
while(true){
if((i__35543_35547 < count__35542_35546)){
var ns_35548 = cljs.core._nth.call(null,chunk__35541_35545,i__35543_35547);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35548);


var G__35549 = seq__35540_35544;
var G__35550 = chunk__35541_35545;
var G__35551 = count__35542_35546;
var G__35552 = (i__35543_35547 + (1));
seq__35540_35544 = G__35549;
chunk__35541_35545 = G__35550;
count__35542_35546 = G__35551;
i__35543_35547 = G__35552;
continue;
} else {
var temp__5735__auto___35553 = cljs.core.seq.call(null,seq__35540_35544);
if(temp__5735__auto___35553){
var seq__35540_35554__$1 = temp__5735__auto___35553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35540_35554__$1)){
var c__4550__auto___35555 = cljs.core.chunk_first.call(null,seq__35540_35554__$1);
var G__35556 = cljs.core.chunk_rest.call(null,seq__35540_35554__$1);
var G__35557 = c__4550__auto___35555;
var G__35558 = cljs.core.count.call(null,c__4550__auto___35555);
var G__35559 = (0);
seq__35540_35544 = G__35556;
chunk__35541_35545 = G__35557;
count__35542_35546 = G__35558;
i__35543_35547 = G__35559;
continue;
} else {
var ns_35560 = cljs.core.first.call(null,seq__35540_35554__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35560);


var G__35561 = cljs.core.next.call(null,seq__35540_35554__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__35540_35544 = G__35561;
chunk__35541_35545 = G__35562;
count__35542_35546 = G__35563;
i__35543_35547 = G__35564;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35565__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35566__i = 0, G__35566__a = new Array(arguments.length -  0);
while (G__35566__i < G__35566__a.length) {G__35566__a[G__35566__i] = arguments[G__35566__i + 0]; ++G__35566__i;}
  args = new cljs.core.IndexedSeq(G__35566__a,0,null);
} 
return G__35565__delegate.call(this,args);};
G__35565.cljs$lang$maxFixedArity = 0;
G__35565.cljs$lang$applyTo = (function (arglist__35567){
var args = cljs.core.seq(arglist__35567);
return G__35565__delegate(args);
});
G__35565.cljs$core$IFn$_invoke$arity$variadic = G__35565__delegate;
return G__35565;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35568_SHARP_,p2__35569_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35568_SHARP_)),p2__35569_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35570_SHARP_,p2__35571_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35570_SHARP_),p2__35571_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35572 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35572.addCallback(((function (G__35572){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35572))
);

G__35572.addErrback(((function (G__35572){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35572))
);

return G__35572;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35573){if((e35573 instanceof Error)){
var e = e35573;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35573;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35574){if((e35574 instanceof Error)){
var e = e35574;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35574;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35575 = cljs.core._EQ_;
var expr__35576 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35575.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35576))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35575.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35576))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35575.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35576))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35575,expr__35576){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35575,expr__35576))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35578,callback){
var map__35579 = p__35578;
var map__35579__$1 = (((((!((map__35579 == null))))?(((((map__35579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35579):map__35579);
var file_msg = map__35579__$1;
var request_url = cljs.core.get.call(null,map__35579__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35579,map__35579__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35579,map__35579__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__){
return (function (state_35617){
var state_val_35618 = (state_35617[(1)]);
if((state_val_35618 === (7))){
var inst_35613 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35619_35645 = state_35617__$1;
(statearr_35619_35645[(2)] = inst_35613);

(statearr_35619_35645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (1))){
var state_35617__$1 = state_35617;
var statearr_35620_35646 = state_35617__$1;
(statearr_35620_35646[(2)] = null);

(statearr_35620_35646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (4))){
var inst_35583 = (state_35617[(7)]);
var inst_35583__$1 = (state_35617[(2)]);
var state_35617__$1 = (function (){var statearr_35621 = state_35617;
(statearr_35621[(7)] = inst_35583__$1);

return statearr_35621;
})();
if(cljs.core.truth_(inst_35583__$1)){
var statearr_35622_35647 = state_35617__$1;
(statearr_35622_35647[(1)] = (5));

} else {
var statearr_35623_35648 = state_35617__$1;
(statearr_35623_35648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (15))){
var inst_35598 = (state_35617[(8)]);
var inst_35596 = (state_35617[(9)]);
var inst_35600 = inst_35598.call(null,inst_35596);
var state_35617__$1 = state_35617;
var statearr_35624_35649 = state_35617__$1;
(statearr_35624_35649[(2)] = inst_35600);

(statearr_35624_35649[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (13))){
var inst_35607 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35625_35650 = state_35617__$1;
(statearr_35625_35650[(2)] = inst_35607);

(statearr_35625_35650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (6))){
var state_35617__$1 = state_35617;
var statearr_35626_35651 = state_35617__$1;
(statearr_35626_35651[(2)] = null);

(statearr_35626_35651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (17))){
var inst_35604 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35627_35652 = state_35617__$1;
(statearr_35627_35652[(2)] = inst_35604);

(statearr_35627_35652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (3))){
var inst_35615 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35617__$1,inst_35615);
} else {
if((state_val_35618 === (12))){
var state_35617__$1 = state_35617;
var statearr_35628_35653 = state_35617__$1;
(statearr_35628_35653[(2)] = null);

(statearr_35628_35653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (2))){
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35617__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35618 === (11))){
var inst_35588 = (state_35617[(10)]);
var inst_35594 = figwheel.client.file_reloading.blocking_load.call(null,inst_35588);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35617__$1,(14),inst_35594);
} else {
if((state_val_35618 === (9))){
var inst_35588 = (state_35617[(10)]);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35588)){
var statearr_35629_35654 = state_35617__$1;
(statearr_35629_35654[(1)] = (11));

} else {
var statearr_35630_35655 = state_35617__$1;
(statearr_35630_35655[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (5))){
var inst_35583 = (state_35617[(7)]);
var inst_35589 = (state_35617[(11)]);
var inst_35588 = cljs.core.nth.call(null,inst_35583,(0),null);
var inst_35589__$1 = cljs.core.nth.call(null,inst_35583,(1),null);
var state_35617__$1 = (function (){var statearr_35631 = state_35617;
(statearr_35631[(11)] = inst_35589__$1);

(statearr_35631[(10)] = inst_35588);

return statearr_35631;
})();
if(cljs.core.truth_(inst_35589__$1)){
var statearr_35632_35656 = state_35617__$1;
(statearr_35632_35656[(1)] = (8));

} else {
var statearr_35633_35657 = state_35617__$1;
(statearr_35633_35657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (14))){
var inst_35598 = (state_35617[(8)]);
var inst_35588 = (state_35617[(10)]);
var inst_35596 = (state_35617[(2)]);
var inst_35597 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35598__$1 = cljs.core.get.call(null,inst_35597,inst_35588);
var state_35617__$1 = (function (){var statearr_35634 = state_35617;
(statearr_35634[(8)] = inst_35598__$1);

(statearr_35634[(9)] = inst_35596);

return statearr_35634;
})();
if(cljs.core.truth_(inst_35598__$1)){
var statearr_35635_35658 = state_35617__$1;
(statearr_35635_35658[(1)] = (15));

} else {
var statearr_35636_35659 = state_35617__$1;
(statearr_35636_35659[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (16))){
var inst_35596 = (state_35617[(9)]);
var inst_35602 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35596);
var state_35617__$1 = state_35617;
var statearr_35637_35660 = state_35617__$1;
(statearr_35637_35660[(2)] = inst_35602);

(statearr_35637_35660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (10))){
var inst_35609 = (state_35617[(2)]);
var state_35617__$1 = (function (){var statearr_35638 = state_35617;
(statearr_35638[(12)] = inst_35609);

return statearr_35638;
})();
var statearr_35639_35661 = state_35617__$1;
(statearr_35639_35661[(2)] = null);

(statearr_35639_35661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (8))){
var inst_35589 = (state_35617[(11)]);
var inst_35591 = eval(inst_35589);
var state_35617__$1 = state_35617;
var statearr_35640_35662 = state_35617__$1;
(statearr_35640_35662[(2)] = inst_35591);

(statearr_35640_35662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto__))
;
return ((function (switch__31883__auto__,c__31978__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31884__auto__ = null;
var figwheel$client$file_reloading$state_machine__31884__auto____0 = (function (){
var statearr_35641 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35641[(0)] = figwheel$client$file_reloading$state_machine__31884__auto__);

(statearr_35641[(1)] = (1));

return statearr_35641;
});
var figwheel$client$file_reloading$state_machine__31884__auto____1 = (function (state_35617){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_35617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e35642){if((e35642 instanceof Object)){
var ex__31887__auto__ = e35642;
var statearr_35643_35663 = state_35617;
(statearr_35643_35663[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35664 = state_35617;
state_35617 = G__35664;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31884__auto__ = function(state_35617){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31884__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31884__auto____1.call(this,state_35617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31884__auto____0;
figwheel$client$file_reloading$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31884__auto____1;
return figwheel$client$file_reloading$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_35644 = f__31979__auto__.call(null);
(statearr_35644[(6)] = c__31978__auto__);

return statearr_35644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35666 = arguments.length;
switch (G__35666) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35668,callback){
var map__35669 = p__35668;
var map__35669__$1 = (((((!((map__35669 == null))))?(((((map__35669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35669):map__35669);
var file_msg = map__35669__$1;
var namespace = cljs.core.get.call(null,map__35669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35669,map__35669__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35669,map__35669__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35671){
var map__35672 = p__35671;
var map__35672__$1 = (((((!((map__35672 == null))))?(((((map__35672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35672):map__35672);
var file_msg = map__35672__$1;
var namespace = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35674){
var map__35675 = p__35674;
var map__35675__$1 = (((((!((map__35675 == null))))?(((((map__35675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35675):map__35675);
var file_msg = map__35675__$1;
var namespace = cljs.core.get.call(null,map__35675__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35677,callback){
var map__35678 = p__35677;
var map__35678__$1 = (((((!((map__35678 == null))))?(((((map__35678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35678):map__35678);
var file_msg = map__35678__$1;
var request_url = cljs.core.get.call(null,map__35678__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31978__auto___35728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___35728,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___35728,out){
return (function (state_35713){
var state_val_35714 = (state_35713[(1)]);
if((state_val_35714 === (1))){
var inst_35687 = cljs.core.seq.call(null,files);
var inst_35688 = cljs.core.first.call(null,inst_35687);
var inst_35689 = cljs.core.next.call(null,inst_35687);
var inst_35690 = files;
var state_35713__$1 = (function (){var statearr_35715 = state_35713;
(statearr_35715[(7)] = inst_35688);

(statearr_35715[(8)] = inst_35689);

(statearr_35715[(9)] = inst_35690);

return statearr_35715;
})();
var statearr_35716_35729 = state_35713__$1;
(statearr_35716_35729[(2)] = null);

(statearr_35716_35729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (2))){
var inst_35690 = (state_35713[(9)]);
var inst_35696 = (state_35713[(10)]);
var inst_35695 = cljs.core.seq.call(null,inst_35690);
var inst_35696__$1 = cljs.core.first.call(null,inst_35695);
var inst_35697 = cljs.core.next.call(null,inst_35695);
var inst_35698 = (inst_35696__$1 == null);
var inst_35699 = cljs.core.not.call(null,inst_35698);
var state_35713__$1 = (function (){var statearr_35717 = state_35713;
(statearr_35717[(11)] = inst_35697);

(statearr_35717[(10)] = inst_35696__$1);

return statearr_35717;
})();
if(inst_35699){
var statearr_35718_35730 = state_35713__$1;
(statearr_35718_35730[(1)] = (4));

} else {
var statearr_35719_35731 = state_35713__$1;
(statearr_35719_35731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (3))){
var inst_35711 = (state_35713[(2)]);
var state_35713__$1 = state_35713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35713__$1,inst_35711);
} else {
if((state_val_35714 === (4))){
var inst_35696 = (state_35713[(10)]);
var inst_35701 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35696);
var state_35713__$1 = state_35713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35713__$1,(7),inst_35701);
} else {
if((state_val_35714 === (5))){
var inst_35707 = cljs.core.async.close_BANG_.call(null,out);
var state_35713__$1 = state_35713;
var statearr_35720_35732 = state_35713__$1;
(statearr_35720_35732[(2)] = inst_35707);

(statearr_35720_35732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (6))){
var inst_35709 = (state_35713[(2)]);
var state_35713__$1 = state_35713;
var statearr_35721_35733 = state_35713__$1;
(statearr_35721_35733[(2)] = inst_35709);

(statearr_35721_35733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (7))){
var inst_35697 = (state_35713[(11)]);
var inst_35703 = (state_35713[(2)]);
var inst_35704 = cljs.core.async.put_BANG_.call(null,out,inst_35703);
var inst_35690 = inst_35697;
var state_35713__$1 = (function (){var statearr_35722 = state_35713;
(statearr_35722[(9)] = inst_35690);

(statearr_35722[(12)] = inst_35704);

return statearr_35722;
})();
var statearr_35723_35734 = state_35713__$1;
(statearr_35723_35734[(2)] = null);

(statearr_35723_35734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31978__auto___35728,out))
;
return ((function (switch__31883__auto__,c__31978__auto___35728,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto____0 = (function (){
var statearr_35724 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35724[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto__);

(statearr_35724[(1)] = (1));

return statearr_35724;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto____1 = (function (state_35713){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_35713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e35725){if((e35725 instanceof Object)){
var ex__31887__auto__ = e35725;
var statearr_35726_35735 = state_35713;
(statearr_35726_35735[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35736 = state_35713;
state_35713 = G__35736;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto__ = function(state_35713){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto____1.call(this,state_35713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___35728,out))
})();
var state__31980__auto__ = (function (){var statearr_35727 = f__31979__auto__.call(null);
(statearr_35727[(6)] = c__31978__auto___35728);

return statearr_35727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___35728,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35737,opts){
var map__35738 = p__35737;
var map__35738__$1 = (((((!((map__35738 == null))))?(((((map__35738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35738):map__35738);
var eval_body = cljs.core.get.call(null,map__35738__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35738__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35740){var e = e35740;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35741_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35741_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35742){
var vec__35743 = p__35742;
var k = cljs.core.nth.call(null,vec__35743,(0),null);
var v = cljs.core.nth.call(null,vec__35743,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35746){
var vec__35747 = p__35746;
var k = cljs.core.nth.call(null,vec__35747,(0),null);
var v = cljs.core.nth.call(null,vec__35747,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35753,p__35754){
var map__35755 = p__35753;
var map__35755__$1 = (((((!((map__35755 == null))))?(((((map__35755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35755):map__35755);
var opts = map__35755__$1;
var before_jsload = cljs.core.get.call(null,map__35755__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35755__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35755__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35756 = p__35754;
var map__35756__$1 = (((((!((map__35756 == null))))?(((((map__35756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35756):map__35756);
var msg = map__35756__$1;
var files = cljs.core.get.call(null,map__35756__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35756__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35756__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35910){
var state_val_35911 = (state_35910[(1)]);
if((state_val_35911 === (7))){
var inst_35771 = (state_35910[(7)]);
var inst_35773 = (state_35910[(8)]);
var inst_35772 = (state_35910[(9)]);
var inst_35770 = (state_35910[(10)]);
var inst_35778 = cljs.core._nth.call(null,inst_35771,inst_35773);
var inst_35779 = figwheel.client.file_reloading.eval_body.call(null,inst_35778,opts);
var inst_35780 = (inst_35773 + (1));
var tmp35912 = inst_35771;
var tmp35913 = inst_35772;
var tmp35914 = inst_35770;
var inst_35770__$1 = tmp35914;
var inst_35771__$1 = tmp35912;
var inst_35772__$1 = tmp35913;
var inst_35773__$1 = inst_35780;
var state_35910__$1 = (function (){var statearr_35915 = state_35910;
(statearr_35915[(7)] = inst_35771__$1);

(statearr_35915[(8)] = inst_35773__$1);

(statearr_35915[(9)] = inst_35772__$1);

(statearr_35915[(11)] = inst_35779);

(statearr_35915[(10)] = inst_35770__$1);

return statearr_35915;
})();
var statearr_35916_35999 = state_35910__$1;
(statearr_35916_35999[(2)] = null);

(statearr_35916_35999[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (20))){
var inst_35813 = (state_35910[(12)]);
var inst_35821 = figwheel.client.file_reloading.sort_files.call(null,inst_35813);
var state_35910__$1 = state_35910;
var statearr_35917_36000 = state_35910__$1;
(statearr_35917_36000[(2)] = inst_35821);

(statearr_35917_36000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (27))){
var state_35910__$1 = state_35910;
var statearr_35918_36001 = state_35910__$1;
(statearr_35918_36001[(2)] = null);

(statearr_35918_36001[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (1))){
var inst_35762 = (state_35910[(13)]);
var inst_35759 = before_jsload.call(null,files);
var inst_35760 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35761 = (function (){return ((function (inst_35762,inst_35759,inst_35760,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35750_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35750_SHARP_);
});
;})(inst_35762,inst_35759,inst_35760,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35762__$1 = cljs.core.filter.call(null,inst_35761,files);
var inst_35763 = cljs.core.not_empty.call(null,inst_35762__$1);
var state_35910__$1 = (function (){var statearr_35919 = state_35910;
(statearr_35919[(13)] = inst_35762__$1);

(statearr_35919[(14)] = inst_35760);

(statearr_35919[(15)] = inst_35759);

return statearr_35919;
})();
if(cljs.core.truth_(inst_35763)){
var statearr_35920_36002 = state_35910__$1;
(statearr_35920_36002[(1)] = (2));

} else {
var statearr_35921_36003 = state_35910__$1;
(statearr_35921_36003[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (24))){
var state_35910__$1 = state_35910;
var statearr_35922_36004 = state_35910__$1;
(statearr_35922_36004[(2)] = null);

(statearr_35922_36004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (39))){
var inst_35863 = (state_35910[(16)]);
var state_35910__$1 = state_35910;
var statearr_35923_36005 = state_35910__$1;
(statearr_35923_36005[(2)] = inst_35863);

(statearr_35923_36005[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (46))){
var inst_35905 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
var statearr_35924_36006 = state_35910__$1;
(statearr_35924_36006[(2)] = inst_35905);

(statearr_35924_36006[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (4))){
var inst_35807 = (state_35910[(2)]);
var inst_35808 = cljs.core.List.EMPTY;
var inst_35809 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35808);
var inst_35810 = (function (){return ((function (inst_35807,inst_35808,inst_35809,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35751_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35751_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35751_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35751_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_35807,inst_35808,inst_35809,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35811 = cljs.core.filter.call(null,inst_35810,files);
var inst_35812 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35813 = cljs.core.concat.call(null,inst_35811,inst_35812);
var state_35910__$1 = (function (){var statearr_35925 = state_35910;
(statearr_35925[(12)] = inst_35813);

(statearr_35925[(17)] = inst_35809);

(statearr_35925[(18)] = inst_35807);

return statearr_35925;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35926_36007 = state_35910__$1;
(statearr_35926_36007[(1)] = (16));

} else {
var statearr_35927_36008 = state_35910__$1;
(statearr_35927_36008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (15))){
var inst_35797 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
var statearr_35928_36009 = state_35910__$1;
(statearr_35928_36009[(2)] = inst_35797);

(statearr_35928_36009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (21))){
var inst_35823 = (state_35910[(19)]);
var inst_35823__$1 = (state_35910[(2)]);
var inst_35824 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35823__$1);
var state_35910__$1 = (function (){var statearr_35929 = state_35910;
(statearr_35929[(19)] = inst_35823__$1);

return statearr_35929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35910__$1,(22),inst_35824);
} else {
if((state_val_35911 === (31))){
var inst_35908 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35910__$1,inst_35908);
} else {
if((state_val_35911 === (32))){
var inst_35863 = (state_35910[(16)]);
var inst_35868 = inst_35863.cljs$lang$protocol_mask$partition0$;
var inst_35869 = (inst_35868 & (64));
var inst_35870 = inst_35863.cljs$core$ISeq$;
var inst_35871 = (cljs.core.PROTOCOL_SENTINEL === inst_35870);
var inst_35872 = ((inst_35869) || (inst_35871));
var state_35910__$1 = state_35910;
if(cljs.core.truth_(inst_35872)){
var statearr_35930_36010 = state_35910__$1;
(statearr_35930_36010[(1)] = (35));

} else {
var statearr_35931_36011 = state_35910__$1;
(statearr_35931_36011[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (40))){
var inst_35885 = (state_35910[(20)]);
var inst_35884 = (state_35910[(2)]);
var inst_35885__$1 = cljs.core.get.call(null,inst_35884,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35886 = cljs.core.get.call(null,inst_35884,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35887 = cljs.core.not_empty.call(null,inst_35885__$1);
var state_35910__$1 = (function (){var statearr_35932 = state_35910;
(statearr_35932[(21)] = inst_35886);

(statearr_35932[(20)] = inst_35885__$1);

return statearr_35932;
})();
if(cljs.core.truth_(inst_35887)){
var statearr_35933_36012 = state_35910__$1;
(statearr_35933_36012[(1)] = (41));

} else {
var statearr_35934_36013 = state_35910__$1;
(statearr_35934_36013[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (33))){
var state_35910__$1 = state_35910;
var statearr_35935_36014 = state_35910__$1;
(statearr_35935_36014[(2)] = false);

(statearr_35935_36014[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (13))){
var inst_35783 = (state_35910[(22)]);
var inst_35787 = cljs.core.chunk_first.call(null,inst_35783);
var inst_35788 = cljs.core.chunk_rest.call(null,inst_35783);
var inst_35789 = cljs.core.count.call(null,inst_35787);
var inst_35770 = inst_35788;
var inst_35771 = inst_35787;
var inst_35772 = inst_35789;
var inst_35773 = (0);
var state_35910__$1 = (function (){var statearr_35936 = state_35910;
(statearr_35936[(7)] = inst_35771);

(statearr_35936[(8)] = inst_35773);

(statearr_35936[(9)] = inst_35772);

(statearr_35936[(10)] = inst_35770);

return statearr_35936;
})();
var statearr_35937_36015 = state_35910__$1;
(statearr_35937_36015[(2)] = null);

(statearr_35937_36015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (22))){
var inst_35823 = (state_35910[(19)]);
var inst_35831 = (state_35910[(23)]);
var inst_35826 = (state_35910[(24)]);
var inst_35827 = (state_35910[(25)]);
var inst_35826__$1 = (state_35910[(2)]);
var inst_35827__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35826__$1);
var inst_35828 = (function (){var all_files = inst_35823;
var res_SINGLEQUOTE_ = inst_35826__$1;
var res = inst_35827__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35823,inst_35831,inst_35826,inst_35827,inst_35826__$1,inst_35827__$1,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35752_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35752_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35823,inst_35831,inst_35826,inst_35827,inst_35826__$1,inst_35827__$1,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35829 = cljs.core.filter.call(null,inst_35828,inst_35826__$1);
var inst_35830 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35831__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35830);
var inst_35832 = cljs.core.not_empty.call(null,inst_35831__$1);
var state_35910__$1 = (function (){var statearr_35938 = state_35910;
(statearr_35938[(26)] = inst_35829);

(statearr_35938[(23)] = inst_35831__$1);

(statearr_35938[(24)] = inst_35826__$1);

(statearr_35938[(25)] = inst_35827__$1);

return statearr_35938;
})();
if(cljs.core.truth_(inst_35832)){
var statearr_35939_36016 = state_35910__$1;
(statearr_35939_36016[(1)] = (23));

} else {
var statearr_35940_36017 = state_35910__$1;
(statearr_35940_36017[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (36))){
var state_35910__$1 = state_35910;
var statearr_35941_36018 = state_35910__$1;
(statearr_35941_36018[(2)] = false);

(statearr_35941_36018[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (41))){
var inst_35885 = (state_35910[(20)]);
var inst_35889 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35890 = cljs.core.map.call(null,inst_35889,inst_35885);
var inst_35891 = cljs.core.pr_str.call(null,inst_35890);
var inst_35892 = ["figwheel-no-load meta-data: ",inst_35891].join('');
var inst_35893 = figwheel.client.utils.log.call(null,inst_35892);
var state_35910__$1 = state_35910;
var statearr_35942_36019 = state_35910__$1;
(statearr_35942_36019[(2)] = inst_35893);

(statearr_35942_36019[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (43))){
var inst_35886 = (state_35910[(21)]);
var inst_35896 = (state_35910[(2)]);
var inst_35897 = cljs.core.not_empty.call(null,inst_35886);
var state_35910__$1 = (function (){var statearr_35943 = state_35910;
(statearr_35943[(27)] = inst_35896);

return statearr_35943;
})();
if(cljs.core.truth_(inst_35897)){
var statearr_35944_36020 = state_35910__$1;
(statearr_35944_36020[(1)] = (44));

} else {
var statearr_35945_36021 = state_35910__$1;
(statearr_35945_36021[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (29))){
var inst_35829 = (state_35910[(26)]);
var inst_35823 = (state_35910[(19)]);
var inst_35831 = (state_35910[(23)]);
var inst_35826 = (state_35910[(24)]);
var inst_35863 = (state_35910[(16)]);
var inst_35827 = (state_35910[(25)]);
var inst_35859 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35862 = (function (){var all_files = inst_35823;
var res_SINGLEQUOTE_ = inst_35826;
var res = inst_35827;
var files_not_loaded = inst_35829;
var dependencies_that_loaded = inst_35831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35829,inst_35823,inst_35831,inst_35826,inst_35863,inst_35827,inst_35859,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35861){
var map__35946 = p__35861;
var map__35946__$1 = (((((!((map__35946 == null))))?(((((map__35946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35946):map__35946);
var namespace = cljs.core.get.call(null,map__35946__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35829,inst_35823,inst_35831,inst_35826,inst_35863,inst_35827,inst_35859,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35863__$1 = cljs.core.group_by.call(null,inst_35862,inst_35829);
var inst_35865 = (inst_35863__$1 == null);
var inst_35866 = cljs.core.not.call(null,inst_35865);
var state_35910__$1 = (function (){var statearr_35948 = state_35910;
(statearr_35948[(16)] = inst_35863__$1);

(statearr_35948[(28)] = inst_35859);

return statearr_35948;
})();
if(inst_35866){
var statearr_35949_36022 = state_35910__$1;
(statearr_35949_36022[(1)] = (32));

} else {
var statearr_35950_36023 = state_35910__$1;
(statearr_35950_36023[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (44))){
var inst_35886 = (state_35910[(21)]);
var inst_35899 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35886);
var inst_35900 = cljs.core.pr_str.call(null,inst_35899);
var inst_35901 = ["not required: ",inst_35900].join('');
var inst_35902 = figwheel.client.utils.log.call(null,inst_35901);
var state_35910__$1 = state_35910;
var statearr_35951_36024 = state_35910__$1;
(statearr_35951_36024[(2)] = inst_35902);

(statearr_35951_36024[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (6))){
var inst_35804 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
var statearr_35952_36025 = state_35910__$1;
(statearr_35952_36025[(2)] = inst_35804);

(statearr_35952_36025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (28))){
var inst_35829 = (state_35910[(26)]);
var inst_35856 = (state_35910[(2)]);
var inst_35857 = cljs.core.not_empty.call(null,inst_35829);
var state_35910__$1 = (function (){var statearr_35953 = state_35910;
(statearr_35953[(29)] = inst_35856);

return statearr_35953;
})();
if(cljs.core.truth_(inst_35857)){
var statearr_35954_36026 = state_35910__$1;
(statearr_35954_36026[(1)] = (29));

} else {
var statearr_35955_36027 = state_35910__$1;
(statearr_35955_36027[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (25))){
var inst_35827 = (state_35910[(25)]);
var inst_35843 = (state_35910[(2)]);
var inst_35844 = cljs.core.not_empty.call(null,inst_35827);
var state_35910__$1 = (function (){var statearr_35956 = state_35910;
(statearr_35956[(30)] = inst_35843);

return statearr_35956;
})();
if(cljs.core.truth_(inst_35844)){
var statearr_35957_36028 = state_35910__$1;
(statearr_35957_36028[(1)] = (26));

} else {
var statearr_35958_36029 = state_35910__$1;
(statearr_35958_36029[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (34))){
var inst_35879 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
if(cljs.core.truth_(inst_35879)){
var statearr_35959_36030 = state_35910__$1;
(statearr_35959_36030[(1)] = (38));

} else {
var statearr_35960_36031 = state_35910__$1;
(statearr_35960_36031[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (17))){
var state_35910__$1 = state_35910;
var statearr_35961_36032 = state_35910__$1;
(statearr_35961_36032[(2)] = recompile_dependents);

(statearr_35961_36032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (3))){
var state_35910__$1 = state_35910;
var statearr_35962_36033 = state_35910__$1;
(statearr_35962_36033[(2)] = null);

(statearr_35962_36033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (12))){
var inst_35800 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
var statearr_35963_36034 = state_35910__$1;
(statearr_35963_36034[(2)] = inst_35800);

(statearr_35963_36034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (2))){
var inst_35762 = (state_35910[(13)]);
var inst_35769 = cljs.core.seq.call(null,inst_35762);
var inst_35770 = inst_35769;
var inst_35771 = null;
var inst_35772 = (0);
var inst_35773 = (0);
var state_35910__$1 = (function (){var statearr_35964 = state_35910;
(statearr_35964[(7)] = inst_35771);

(statearr_35964[(8)] = inst_35773);

(statearr_35964[(9)] = inst_35772);

(statearr_35964[(10)] = inst_35770);

return statearr_35964;
})();
var statearr_35965_36035 = state_35910__$1;
(statearr_35965_36035[(2)] = null);

(statearr_35965_36035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (23))){
var inst_35829 = (state_35910[(26)]);
var inst_35823 = (state_35910[(19)]);
var inst_35831 = (state_35910[(23)]);
var inst_35826 = (state_35910[(24)]);
var inst_35827 = (state_35910[(25)]);
var inst_35834 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35836 = (function (){var all_files = inst_35823;
var res_SINGLEQUOTE_ = inst_35826;
var res = inst_35827;
var files_not_loaded = inst_35829;
var dependencies_that_loaded = inst_35831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35829,inst_35823,inst_35831,inst_35826,inst_35827,inst_35834,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35835){
var map__35966 = p__35835;
var map__35966__$1 = (((((!((map__35966 == null))))?(((((map__35966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35966):map__35966);
var request_url = cljs.core.get.call(null,map__35966__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35829,inst_35823,inst_35831,inst_35826,inst_35827,inst_35834,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35837 = cljs.core.reverse.call(null,inst_35831);
var inst_35838 = cljs.core.map.call(null,inst_35836,inst_35837);
var inst_35839 = cljs.core.pr_str.call(null,inst_35838);
var inst_35840 = figwheel.client.utils.log.call(null,inst_35839);
var state_35910__$1 = (function (){var statearr_35968 = state_35910;
(statearr_35968[(31)] = inst_35834);

return statearr_35968;
})();
var statearr_35969_36036 = state_35910__$1;
(statearr_35969_36036[(2)] = inst_35840);

(statearr_35969_36036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (35))){
var state_35910__$1 = state_35910;
var statearr_35970_36037 = state_35910__$1;
(statearr_35970_36037[(2)] = true);

(statearr_35970_36037[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (19))){
var inst_35813 = (state_35910[(12)]);
var inst_35819 = figwheel.client.file_reloading.expand_files.call(null,inst_35813);
var state_35910__$1 = state_35910;
var statearr_35971_36038 = state_35910__$1;
(statearr_35971_36038[(2)] = inst_35819);

(statearr_35971_36038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (11))){
var state_35910__$1 = state_35910;
var statearr_35972_36039 = state_35910__$1;
(statearr_35972_36039[(2)] = null);

(statearr_35972_36039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (9))){
var inst_35802 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
var statearr_35973_36040 = state_35910__$1;
(statearr_35973_36040[(2)] = inst_35802);

(statearr_35973_36040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (5))){
var inst_35773 = (state_35910[(8)]);
var inst_35772 = (state_35910[(9)]);
var inst_35775 = (inst_35773 < inst_35772);
var inst_35776 = inst_35775;
var state_35910__$1 = state_35910;
if(cljs.core.truth_(inst_35776)){
var statearr_35974_36041 = state_35910__$1;
(statearr_35974_36041[(1)] = (7));

} else {
var statearr_35975_36042 = state_35910__$1;
(statearr_35975_36042[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (14))){
var inst_35783 = (state_35910[(22)]);
var inst_35792 = cljs.core.first.call(null,inst_35783);
var inst_35793 = figwheel.client.file_reloading.eval_body.call(null,inst_35792,opts);
var inst_35794 = cljs.core.next.call(null,inst_35783);
var inst_35770 = inst_35794;
var inst_35771 = null;
var inst_35772 = (0);
var inst_35773 = (0);
var state_35910__$1 = (function (){var statearr_35976 = state_35910;
(statearr_35976[(7)] = inst_35771);

(statearr_35976[(8)] = inst_35773);

(statearr_35976[(9)] = inst_35772);

(statearr_35976[(32)] = inst_35793);

(statearr_35976[(10)] = inst_35770);

return statearr_35976;
})();
var statearr_35977_36043 = state_35910__$1;
(statearr_35977_36043[(2)] = null);

(statearr_35977_36043[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (45))){
var state_35910__$1 = state_35910;
var statearr_35978_36044 = state_35910__$1;
(statearr_35978_36044[(2)] = null);

(statearr_35978_36044[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (26))){
var inst_35829 = (state_35910[(26)]);
var inst_35823 = (state_35910[(19)]);
var inst_35831 = (state_35910[(23)]);
var inst_35826 = (state_35910[(24)]);
var inst_35827 = (state_35910[(25)]);
var inst_35846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35848 = (function (){var all_files = inst_35823;
var res_SINGLEQUOTE_ = inst_35826;
var res = inst_35827;
var files_not_loaded = inst_35829;
var dependencies_that_loaded = inst_35831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35829,inst_35823,inst_35831,inst_35826,inst_35827,inst_35846,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35847){
var map__35979 = p__35847;
var map__35979__$1 = (((((!((map__35979 == null))))?(((((map__35979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35979):map__35979);
var namespace = cljs.core.get.call(null,map__35979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35979__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35829,inst_35823,inst_35831,inst_35826,inst_35827,inst_35846,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35849 = cljs.core.map.call(null,inst_35848,inst_35827);
var inst_35850 = cljs.core.pr_str.call(null,inst_35849);
var inst_35851 = figwheel.client.utils.log.call(null,inst_35850);
var inst_35852 = (function (){var all_files = inst_35823;
var res_SINGLEQUOTE_ = inst_35826;
var res = inst_35827;
var files_not_loaded = inst_35829;
var dependencies_that_loaded = inst_35831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35829,inst_35823,inst_35831,inst_35826,inst_35827,inst_35846,inst_35848,inst_35849,inst_35850,inst_35851,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35829,inst_35823,inst_35831,inst_35826,inst_35827,inst_35846,inst_35848,inst_35849,inst_35850,inst_35851,state_val_35911,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35853 = setTimeout(inst_35852,(10));
var state_35910__$1 = (function (){var statearr_35981 = state_35910;
(statearr_35981[(33)] = inst_35851);

(statearr_35981[(34)] = inst_35846);

return statearr_35981;
})();
var statearr_35982_36045 = state_35910__$1;
(statearr_35982_36045[(2)] = inst_35853);

(statearr_35982_36045[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (16))){
var state_35910__$1 = state_35910;
var statearr_35983_36046 = state_35910__$1;
(statearr_35983_36046[(2)] = reload_dependents);

(statearr_35983_36046[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (38))){
var inst_35863 = (state_35910[(16)]);
var inst_35881 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35863);
var state_35910__$1 = state_35910;
var statearr_35984_36047 = state_35910__$1;
(statearr_35984_36047[(2)] = inst_35881);

(statearr_35984_36047[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (30))){
var state_35910__$1 = state_35910;
var statearr_35985_36048 = state_35910__$1;
(statearr_35985_36048[(2)] = null);

(statearr_35985_36048[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (10))){
var inst_35783 = (state_35910[(22)]);
var inst_35785 = cljs.core.chunked_seq_QMARK_.call(null,inst_35783);
var state_35910__$1 = state_35910;
if(inst_35785){
var statearr_35986_36049 = state_35910__$1;
(statearr_35986_36049[(1)] = (13));

} else {
var statearr_35987_36050 = state_35910__$1;
(statearr_35987_36050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (18))){
var inst_35817 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
if(cljs.core.truth_(inst_35817)){
var statearr_35988_36051 = state_35910__$1;
(statearr_35988_36051[(1)] = (19));

} else {
var statearr_35989_36052 = state_35910__$1;
(statearr_35989_36052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (42))){
var state_35910__$1 = state_35910;
var statearr_35990_36053 = state_35910__$1;
(statearr_35990_36053[(2)] = null);

(statearr_35990_36053[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (37))){
var inst_35876 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
var statearr_35991_36054 = state_35910__$1;
(statearr_35991_36054[(2)] = inst_35876);

(statearr_35991_36054[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (8))){
var inst_35783 = (state_35910[(22)]);
var inst_35770 = (state_35910[(10)]);
var inst_35783__$1 = cljs.core.seq.call(null,inst_35770);
var state_35910__$1 = (function (){var statearr_35992 = state_35910;
(statearr_35992[(22)] = inst_35783__$1);

return statearr_35992;
})();
if(inst_35783__$1){
var statearr_35993_36055 = state_35910__$1;
(statearr_35993_36055[(1)] = (10));

} else {
var statearr_35994_36056 = state_35910__$1;
(statearr_35994_36056[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31883__auto__,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto____0 = (function (){
var statearr_35995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35995[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto__);

(statearr_35995[(1)] = (1));

return statearr_35995;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto____1 = (function (state_35910){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_35910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e35996){if((e35996 instanceof Object)){
var ex__31887__auto__ = e35996;
var statearr_35997_36057 = state_35910;
(statearr_35997_36057[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36058 = state_35910;
state_35910 = G__36058;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto__ = function(state_35910){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto____1.call(this,state_35910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31980__auto__ = (function (){var statearr_35998 = f__31979__auto__.call(null);
(statearr_35998[(6)] = c__31978__auto__);

return statearr_35998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,map__35755,map__35755__$1,opts,before_jsload,on_jsload,reload_dependents,map__35756,map__35756__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31978__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36061,link){
var map__36062 = p__36061;
var map__36062__$1 = (((((!((map__36062 == null))))?(((((map__36062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36062):map__36062);
var file = cljs.core.get.call(null,map__36062__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__36062,map__36062__$1,file){
return (function (p1__36059_SHARP_,p2__36060_SHARP_){
if(cljs.core._EQ_.call(null,p1__36059_SHARP_,p2__36060_SHARP_)){
return p1__36059_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__36062,map__36062__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36065){
var map__36066 = p__36065;
var map__36066__$1 = (((((!((map__36066 == null))))?(((((map__36066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36066):map__36066);
var match_length = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36064_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36064_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36068_SHARP_,p2__36069_SHARP_){
return cljs.core.assoc.call(null,p1__36068_SHARP_,cljs.core.get.call(null,p2__36069_SHARP_,key),p2__36069_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36070 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36070);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36070);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36071,p__36072){
var map__36073 = p__36071;
var map__36073__$1 = (((((!((map__36073 == null))))?(((((map__36073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36073):map__36073);
var on_cssload = cljs.core.get.call(null,map__36073__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36074 = p__36072;
var map__36074__$1 = (((((!((map__36074 == null))))?(((((map__36074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36074):map__36074);
var files_msg = map__36074__$1;
var files = cljs.core.get.call(null,map__36074__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1573661532849
