// Compiled by ClojureScript 1.10.520 {}
goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('meta_merge.core');
goog.require('reitit.trie');
goog.require('reitit.exception');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.impl.Route = (function (path,path_parts,path_params,__meta,__extmap,__hash){
this.path = path;
this.path_parts = path_parts;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27897,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27901 = k27897;
var G__27901__$1 = (((G__27901 instanceof cljs.core.Keyword))?G__27901.fqn:null);
switch (G__27901__$1) {
case "path":
return self__.path;

break;
case "path-parts":
return self__.path_parts;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27897,else__4388__auto__);

}
});

reitit.impl.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27902){
var vec__27903 = p__27902;
var k__4408__auto__ = cljs.core.nth.call(null,vec__27903,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__27903,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.impl.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#reitit.impl.Route{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27896){
var self__ = this;
var G__27896__$1 = this;
return (new cljs.core.RecordIter((0),G__27896__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.impl.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.impl.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (573096325 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.impl.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27898,other27899){
var self__ = this;
var this27898__$1 = this;
return (((!((other27899 == null)))) && ((this27898__$1.constructor === other27899.constructor)) && (cljs.core._EQ_.call(null,this27898__$1.path,other27899.path)) && (cljs.core._EQ_.call(null,this27898__$1.path_parts,other27899.path_parts)) && (cljs.core._EQ_.call(null,this27898__$1.path_params,other27899.path_params)) && (cljs.core._EQ_.call(null,this27898__$1.__extmap,other27899.__extmap)));
});

reitit.impl.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

reitit.impl.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27896){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27906 = cljs.core.keyword_identical_QMARK_;
var expr__27907 = k__4393__auto__;
if(cljs.core.truth_(pred__27906.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__27907))){
return (new reitit.impl.Route(G__27896,self__.path_parts,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27906.call(null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),expr__27907))){
return (new reitit.impl.Route(self__.path,G__27896,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27906.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__27907))){
return (new reitit.impl.Route(self__.path,self__.path_parts,G__27896,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__27896),null));
}
}
}
});

reitit.impl.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27896){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,G__27896,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.impl.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"path-parts","path-parts",-1708612875,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null)], null);
});

reitit.impl.Route.cljs$lang$type = true;

reitit.impl.Route.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.impl/Route",null,(1),null));
});

reitit.impl.Route.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reitit.impl/Route");
});

/**
 * Positional factory function for reitit.impl/Route.
 */
reitit.impl.__GT_Route = (function reitit$impl$__GT_Route(path,path_parts,path_params){
return (new reitit.impl.Route(path,path_parts,path_params,null,null,null));
});

/**
 * Factory function for reitit.impl/Route, taking a map of keywords to field values.
 */
reitit.impl.map__GT_Route = (function reitit$impl$map__GT_Route(G__27900){
var extmap__4424__auto__ = (function (){var G__27909 = cljs.core.dissoc.call(null,G__27900,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597));
if(cljs.core.record_QMARK_.call(null,G__27900)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27909);
} else {
return G__27909;
}
})();
return (new reitit.impl.Route(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__27900),new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(G__27900),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__27900),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

reitit.impl.parse = (function reitit$impl$parse(path){
var path__$1 = reitit.trie.normalize.call(null,path);
var path_parts = reitit.trie.split_path.call(null,path__$1);
var path_params = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.call(null,cljs.core.string_QMARK_,path_parts)));
return reitit.impl.map__GT_Route.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),path_parts,new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null));
});
reitit.impl.wild_route_QMARK_ = (function reitit$impl$wild_route_QMARK_(p__27911){
var vec__27912 = p__27911;
var path = cljs.core.nth.call(null,vec__27912,(0),null);
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse.call(null,path))));
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv.call(null,(function (coll__$1,k,v){
var temp__5737__auto__ = f.call(null,v);
if((temp__5737__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5737__auto__;
return cljs.core.assoc.call(null,coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__27917){
var map__27918 = p__27917;
var map__27918__$1 = (((((!((map__27918 == null))))?(((((map__27918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27918):map__27918);
var opts = map__27918__$1;
var path = cljs.core.get.call(null,map__27918__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__27918__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.call(null,map__27918__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.call(null,map__27918__$1,new cljs.core.Keyword(null,"expand","expand",595248157));
var walk_many = ((function (map__27918,map__27918__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.call(null,((function (map__27918,map__27918__$1,opts,path,data,routes,expand){
return (function (p1__27915_SHARP_,p2__27916_SHARP_){
return cljs.core.into.call(null,p1__27915_SHARP_,walk_one.call(null,p,m,p2__27916_SHARP_));
});})(map__27918,map__27918__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__27918,map__27918__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__27918,map__27918__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,routes__$1))){
return walk_many.call(null,pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first.call(null,routes__$1) === 'string'){
var vec__27929 = routes__$1;
var seq__27930 = cljs.core.seq.call(null,vec__27929);
var first__27931 = cljs.core.first.call(null,seq__27930);
var seq__27930__$1 = cljs.core.next.call(null,seq__27930);
var path__$1 = first__27931;
var vec__27932 = seq__27930__$1;
var maybe_arg = cljs.core.nth.call(null,vec__27932,(0),null);
var args = vec__27932;
var vec__27935 = ((((cljs.core.vector_QMARK_.call(null,maybe_arg)) || (((cljs.core.sequential_QMARK_.call(null,maybe_arg)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest.call(null,args)], null));
var data__$1 = cljs.core.nth.call(null,vec__27935,(0),null);
var childs = cljs.core.nth.call(null,vec__27935,(1),null);
var macc__$1 = cljs.core.into.call(null,macc,expand.call(null,data__$1,opts));
var child_routes = walk_many.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.call(null,cljs.core.identity,childs));
if(cljs.core.seq.call(null,childs)){
return cljs.core.seq.call(null,child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__27918,map__27918__$1,opts,path,data,routes,expand))
;
return walk_one.call(null,path,cljs.core.mapv.call(null,cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.call(null,(function (p__27938){
var vec__27939 = p__27938;
var p = cljs.core.nth.call(null,vec__27939,(0),null);
var ds = cljs.core.nth.call(null,vec__27939,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,f.call(null,p,ds)], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.call(null,(function (acc,p__27942){
var vec__27943 = p__27942;
var k = cljs.core.nth.call(null,vec__27943,(0),null);
var v = cljs.core.nth.call(null,vec__27943,(1),null);
try{return meta_merge.core.meta_merge.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e27946){if((e27946 instanceof Error)){
var e = e27946;
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
} else {
throw e27946;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__27948){
var map__27949 = p__27948;
var map__27949__$1 = (((((!((map__27949 == null))))?(((((map__27949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27949):map__27949);
var opts = map__27949__$1;
var coerce = cljs.core.get.call(null,map__27949__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__27951 = reitit.impl.map_data.call(null,reitit.impl.merge_data,reitit.impl.walk.call(null,raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,((function (G__27951,map__27949,map__27949__$1,opts,coerce){
return (function (p1__27947_SHARP_){
return coerce.call(null,p1__27947_SHARP_,opts);
});})(G__27951,map__27949,map__27949__$1,opts,coerce))
),G__27951);
} else {
return G__27951;
}
});
reitit.impl.conflicting_routes_QMARK_ = (function reitit$impl$conflicting_routes_QMARK_(route1,route2){
return reitit.trie.conflicting_paths_QMARK_.call(null,cljs.core.first.call(null,route1),cljs.core.first.call(null,route2));
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes){
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map_indexed.call(null,(function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,reitit.impl.conflicting_routes_QMARK_,route)),cljs.core.subvec.call(null,routes,(index + (1))))], null);
})),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second))),routes));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function reitit$impl$conflicting_paths_$_iter__27952(s__27953){
return (new cljs.core.LazySeq(null,(function (){
var s__27953__$1 = s__27953;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__27953__$1);
if(temp__5735__auto__){
var s__27953__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27953__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27953__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27955 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27954 = (0);
while(true){
if((i__27954 < size__4522__auto__)){
var vec__27956 = cljs.core._nth.call(null,c__4521__auto__,i__27954);
var p = cljs.core.nth.call(null,vec__27956,(0),null);
var pc = cljs.core.nth.call(null,vec__27956,(1),null);
cljs.core.chunk_append.call(null,b__27955,cljs.core.conj.call(null,cljs.core.map.call(null,cljs.core.first,pc),cljs.core.first.call(null,p)));

var G__27962 = (i__27954 + (1));
i__27954 = G__27962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27955),reitit$impl$conflicting_paths_$_iter__27952.call(null,cljs.core.chunk_rest.call(null,s__27953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27955),null);
}
} else {
var vec__27959 = cljs.core.first.call(null,s__27953__$2);
var p = cljs.core.nth.call(null,vec__27959,(0),null);
var pc = cljs.core.nth.call(null,vec__27959,(1),null);
return cljs.core.cons.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,cljs.core.first,pc),cljs.core.first.call(null,p)),reitit$impl$conflicting_paths_$_iter__27952.call(null,cljs.core.rest.call(null,s__27953__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__27963 = routes;
var G__27963__$1 = (((G__27963 == null))?null:cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__27963));
var G__27963__$2 = (((G__27963__$1 == null))?null:cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.first),G__27963__$1));
var G__27963__$3 = (((G__27963__$2 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.second),G__27963__$2));
var G__27963__$4 = (((G__27963__$3 == null))?null:cljs.core.seq.call(null,G__27963__$3));
var G__27963__$5 = (((G__27963__$4 == null))?null:cljs.core.map.call(null,((function (G__27963,G__27963__$1,G__27963__$2,G__27963__$3,G__27963__$4){
return (function (p__27964){
var vec__27965 = p__27964;
var k = cljs.core.nth.call(null,vec__27965,(0),null);
var v = cljs.core.nth.call(null,vec__27965,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set.call(null,v)], null);
});})(G__27963,G__27963__$1,G__27963__$2,G__27963__$3,G__27963__$4))
,G__27963__$4));
if((G__27963__$5 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27963__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__27968_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27968_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__27969,p__27970){
var vec__27971 = p__27969;
var p = cljs.core.nth.call(null,vec__27971,(0),null);
var m = cljs.core.nth.call(null,vec__27971,(1),null);
var route = vec__27971;
var map__27974 = p__27970;
var map__27974__$1 = (((((!((map__27974 == null))))?(((((map__27974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27974):map__27974);
var opts = map__27974__$1;
var compile = cljs.core.get.call(null,map__27974__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?compile.call(null,route,opts):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__27976_SHARP_){
return reitit.impl.compile_route.call(null,p1__27976_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))){
var temp__5733__auto__ = cljs.core.reduce.call(null,(function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.call(null,acc,part);
} else {
var temp__5733__auto__ = cljs.core.get.call(null,path_params,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5733__auto__)){
var p = temp__5733__auto__;
return cljs.core.conj.call(null,acc,p);
} else {
return cljs.core.reduced.call(null,null);
}
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5733__auto__)){
var parts = temp__5733__auto__;
return cljs.core.apply.call(null,cljs.core.str,parts);
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_.call(null,(function (p1__27977_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__27977_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set.call(null,cljs.core.keys.call(null,path_params));
var missing = clojure.set.difference.call(null,required,defined);
return reitit.exception.fail_BANG_.call(null,["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.call(null,a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return m.call(null,k);
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4131__auto__ = reitit.impl.maybe_url_decode.call(null,s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace.call(null,s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values.call(null,reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (reitit.impl.into_string[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (reitit.impl.into_string["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

goog.object.set(reitit.impl.into_string,"string",(function (this$){
return this$;
}));

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace.call(null,this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name.call(null,this$__$1)].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

goog.object.set(reitit.impl.into_string,"boolean",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"number",true);

goog.object.set(reitit.impl.into_string,"number",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"object",true);

goog.object.set(reitit.impl.into_string,"object",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"null",true);

goog.object.set(reitit.impl.into_string,"null",(function (_){
return null;
}));
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values.call(null,(function (p1__27979_SHARP_){
return reitit.impl.url_encode.call(null,reitit.impl.into_string.call(null,p1__27979_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27980){
var vec__27981 = p__27980;
var k = cljs.core.nth.call(null,vec__27981,(0),null);
var v = cljs.core.nth.call(null,vec__27981,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,v)))].join('');
}),params));
});
var ret__4776__auto___27990 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27991 = arguments.length;
var i__4731__auto___27992 = (0);
while(true){
if((i__4731__auto___27992 < len__4730__auto___27991)){
args__4736__auto__.push((arguments[i__4731__auto___27992]));

var G__27993 = (i__4731__auto___27992 + (1));
i__4731__auto___27992 = G__27993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((5) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((5)),(0),null)):null);
return reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4737__auto__);
});

reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,base_type,ctor,methods$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),ctor))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","inherits","goog/inherits",1191617838,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,base_type,null,(1),null))))),null,(1),null)),cljs.core.map.call(null,(function (method){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("reitit.impl","-prototype","reitit.impl/-prototype",-650268084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,method))].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.rest.call(null,method)))),null,(1),null)))));
}),methods$))));
});

reitit.impl.goog_extend.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq27984){
var G__27985 = cljs.core.first.call(null,seq27984);
var seq27984__$1 = cljs.core.next.call(null,seq27984);
var G__27986 = cljs.core.first.call(null,seq27984__$1);
var seq27984__$2 = cljs.core.next.call(null,seq27984__$1);
var G__27987 = cljs.core.first.call(null,seq27984__$2);
var seq27984__$3 = cljs.core.next.call(null,seq27984__$2);
var G__27988 = cljs.core.first.call(null,seq27984__$3);
var seq27984__$4 = cljs.core.next.call(null,seq27984__$3);
var G__27989 = cljs.core.first.call(null,seq27984__$4);
var seq27984__$5 = cljs.core.next.call(null,seq27984__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27985,G__27986,G__27987,G__27988,G__27989,seq27984__$5);
});

return null;
})()
;
reitit.impl.goog_extend.cljs$lang$macro = true;


//# sourceMappingURL=impl.js.map?rel=1573661522885
