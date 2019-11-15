// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36933){
var map__36934 = p__36933;
var map__36934__$1 = (((((!((map__36934 == null))))?(((((map__36934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36934):map__36934);
var m = map__36934__$1;
var n = cljs.core.get.call(null,map__36934__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36936_36968 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36937_36969 = null;
var count__36938_36970 = (0);
var i__36939_36971 = (0);
while(true){
if((i__36939_36971 < count__36938_36970)){
var f_36972 = cljs.core._nth.call(null,chunk__36937_36969,i__36939_36971);
cljs.core.println.call(null,"  ",f_36972);


var G__36973 = seq__36936_36968;
var G__36974 = chunk__36937_36969;
var G__36975 = count__36938_36970;
var G__36976 = (i__36939_36971 + (1));
seq__36936_36968 = G__36973;
chunk__36937_36969 = G__36974;
count__36938_36970 = G__36975;
i__36939_36971 = G__36976;
continue;
} else {
var temp__5735__auto___36977 = cljs.core.seq.call(null,seq__36936_36968);
if(temp__5735__auto___36977){
var seq__36936_36978__$1 = temp__5735__auto___36977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36936_36978__$1)){
var c__4550__auto___36979 = cljs.core.chunk_first.call(null,seq__36936_36978__$1);
var G__36980 = cljs.core.chunk_rest.call(null,seq__36936_36978__$1);
var G__36981 = c__4550__auto___36979;
var G__36982 = cljs.core.count.call(null,c__4550__auto___36979);
var G__36983 = (0);
seq__36936_36968 = G__36980;
chunk__36937_36969 = G__36981;
count__36938_36970 = G__36982;
i__36939_36971 = G__36983;
continue;
} else {
var f_36984 = cljs.core.first.call(null,seq__36936_36978__$1);
cljs.core.println.call(null,"  ",f_36984);


var G__36985 = cljs.core.next.call(null,seq__36936_36978__$1);
var G__36986 = null;
var G__36987 = (0);
var G__36988 = (0);
seq__36936_36968 = G__36985;
chunk__36937_36969 = G__36986;
count__36938_36970 = G__36987;
i__36939_36971 = G__36988;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36989 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36989);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36989)))?cljs.core.second.call(null,arglists_36989):arglists_36989));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36940_36990 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36941_36991 = null;
var count__36942_36992 = (0);
var i__36943_36993 = (0);
while(true){
if((i__36943_36993 < count__36942_36992)){
var vec__36954_36994 = cljs.core._nth.call(null,chunk__36941_36991,i__36943_36993);
var name_36995 = cljs.core.nth.call(null,vec__36954_36994,(0),null);
var map__36957_36996 = cljs.core.nth.call(null,vec__36954_36994,(1),null);
var map__36957_36997__$1 = (((((!((map__36957_36996 == null))))?(((((map__36957_36996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36957_36996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36957_36996):map__36957_36996);
var doc_36998 = cljs.core.get.call(null,map__36957_36997__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36999 = cljs.core.get.call(null,map__36957_36997__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36995);

cljs.core.println.call(null," ",arglists_36999);

if(cljs.core.truth_(doc_36998)){
cljs.core.println.call(null," ",doc_36998);
} else {
}


var G__37000 = seq__36940_36990;
var G__37001 = chunk__36941_36991;
var G__37002 = count__36942_36992;
var G__37003 = (i__36943_36993 + (1));
seq__36940_36990 = G__37000;
chunk__36941_36991 = G__37001;
count__36942_36992 = G__37002;
i__36943_36993 = G__37003;
continue;
} else {
var temp__5735__auto___37004 = cljs.core.seq.call(null,seq__36940_36990);
if(temp__5735__auto___37004){
var seq__36940_37005__$1 = temp__5735__auto___37004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36940_37005__$1)){
var c__4550__auto___37006 = cljs.core.chunk_first.call(null,seq__36940_37005__$1);
var G__37007 = cljs.core.chunk_rest.call(null,seq__36940_37005__$1);
var G__37008 = c__4550__auto___37006;
var G__37009 = cljs.core.count.call(null,c__4550__auto___37006);
var G__37010 = (0);
seq__36940_36990 = G__37007;
chunk__36941_36991 = G__37008;
count__36942_36992 = G__37009;
i__36943_36993 = G__37010;
continue;
} else {
var vec__36959_37011 = cljs.core.first.call(null,seq__36940_37005__$1);
var name_37012 = cljs.core.nth.call(null,vec__36959_37011,(0),null);
var map__36962_37013 = cljs.core.nth.call(null,vec__36959_37011,(1),null);
var map__36962_37014__$1 = (((((!((map__36962_37013 == null))))?(((((map__36962_37013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36962_37013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36962_37013):map__36962_37013);
var doc_37015 = cljs.core.get.call(null,map__36962_37014__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37016 = cljs.core.get.call(null,map__36962_37014__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37012);

cljs.core.println.call(null," ",arglists_37016);

if(cljs.core.truth_(doc_37015)){
cljs.core.println.call(null," ",doc_37015);
} else {
}


var G__37017 = cljs.core.next.call(null,seq__36940_37005__$1);
var G__37018 = null;
var G__37019 = (0);
var G__37020 = (0);
seq__36940_36990 = G__37017;
chunk__36941_36991 = G__37018;
count__36942_36992 = G__37019;
i__36943_36993 = G__37020;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__36964 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36965 = null;
var count__36966 = (0);
var i__36967 = (0);
while(true){
if((i__36967 < count__36966)){
var role = cljs.core._nth.call(null,chunk__36965,i__36967);
var temp__5735__auto___37021__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37021__$1)){
var spec_37022 = temp__5735__auto___37021__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37022));
} else {
}


var G__37023 = seq__36964;
var G__37024 = chunk__36965;
var G__37025 = count__36966;
var G__37026 = (i__36967 + (1));
seq__36964 = G__37023;
chunk__36965 = G__37024;
count__36966 = G__37025;
i__36967 = G__37026;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__36964);
if(temp__5735__auto____$1){
var seq__36964__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36964__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36964__$1);
var G__37027 = cljs.core.chunk_rest.call(null,seq__36964__$1);
var G__37028 = c__4550__auto__;
var G__37029 = cljs.core.count.call(null,c__4550__auto__);
var G__37030 = (0);
seq__36964 = G__37027;
chunk__36965 = G__37028;
count__36966 = G__37029;
i__36967 = G__37030;
continue;
} else {
var role = cljs.core.first.call(null,seq__36964__$1);
var temp__5735__auto___37031__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37031__$2)){
var spec_37032 = temp__5735__auto___37031__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37032));
} else {
}


var G__37033 = cljs.core.next.call(null,seq__36964__$1);
var G__37034 = null;
var G__37035 = (0);
var G__37036 = (0);
seq__36964 = G__37033;
chunk__36965 = G__37034;
count__36966 = G__37035;
i__36967 = G__37036;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37037 = cljs.core.conj.call(null,via,t);
var G__37038 = cljs.core.ex_cause.call(null,t);
via = G__37037;
t = G__37038;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37041 = datafied_throwable;
var map__37041__$1 = (((((!((map__37041 == null))))?(((((map__37041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37041):map__37041);
var via = cljs.core.get.call(null,map__37041__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__37041__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__37041__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37042 = cljs.core.last.call(null,via);
var map__37042__$1 = (((((!((map__37042 == null))))?(((((map__37042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37042):map__37042);
var type = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37043 = data;
var map__37043__$1 = (((((!((map__37043 == null))))?(((((map__37043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37043):map__37043);
var problems = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37044 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__37044__$1 = (((((!((map__37044 == null))))?(((((map__37044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37044):map__37044);
var top_data = map__37044__$1;
var source = cljs.core.get.call(null,map__37044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__37049 = phase;
var G__37049__$1 = (((G__37049 instanceof cljs.core.Keyword))?G__37049.fqn:null);
switch (G__37049__$1) {
case "read-source":
var map__37050 = data;
var map__37050__$1 = (((((!((map__37050 == null))))?(((((map__37050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37050):map__37050);
var line = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37052 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__37052__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__37052,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37052);
var G__37052__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__37052__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37052__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__37052__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37052__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37053 = top_data;
var G__37053__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__37053,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37053);
var G__37053__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__37053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37053__$1);
var G__37053__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__37053__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37053__$2);
var G__37053__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__37053__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37053__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__37053__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37053__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37054 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__37054,(0),null);
var method = cljs.core.nth.call(null,vec__37054,(1),null);
var file = cljs.core.nth.call(null,vec__37054,(2),null);
var line = cljs.core.nth.call(null,vec__37054,(3),null);
var G__37057 = top_data;
var G__37057__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__37057,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37057);
var G__37057__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__37057__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37057__$1);
var G__37057__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__37057__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37057__$2);
var G__37057__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__37057__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37057__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__37057__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37057__$4;
}

break;
case "execution":
var vec__37058 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__37058,(0),null);
var method = cljs.core.nth.call(null,vec__37058,(1),null);
var file = cljs.core.nth.call(null,vec__37058,(2),null);
var line = cljs.core.nth.call(null,vec__37058,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__37058,source__$1,method,file,line,G__37049,G__37049__$1,map__37041,map__37041__$1,via,trace,phase,map__37042,map__37042__$1,type,message,data,map__37043,map__37043__$1,problems,fn,caller,map__37044,map__37044__$1,top_data,source){
return (function (p1__37040_SHARP_){
var or__4131__auto__ = (p1__37040_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__37040_SHARP_);
}
});})(vec__37058,source__$1,method,file,line,G__37049,G__37049__$1,map__37041,map__37041__$1,via,trace,phase,map__37042,map__37042__$1,type,message,data,map__37043,map__37043__$1,problems,fn,caller,map__37044,map__37044__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__37061 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37061__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__37061,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37061);
var G__37061__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__37061__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37061__$1);
var G__37061__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__37061__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37061__$2);
var G__37061__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__37061__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37061__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__37061__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37061__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37049__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37065){
var map__37066 = p__37065;
var map__37066__$1 = (((((!((map__37066 == null))))?(((((map__37066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37066):map__37066);
var triage_data = map__37066__$1;
var phase = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37068 = phase;
var G__37068__$1 = (((G__37068 instanceof cljs.core.Keyword))?G__37068.fqn:null);
switch (G__37068__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37069_37078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37070_37079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37071_37080 = true;
var _STAR_print_fn_STAR__temp_val__37072_37081 = ((function (_STAR_print_newline_STAR__orig_val__37069_37078,_STAR_print_fn_STAR__orig_val__37070_37079,_STAR_print_newline_STAR__temp_val__37071_37080,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__37069_37078,_STAR_print_fn_STAR__orig_val__37070_37079,_STAR_print_newline_STAR__temp_val__37071_37080,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37071_37080;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37072_37081;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__37069_37078,_STAR_print_fn_STAR__orig_val__37070_37079,_STAR_print_newline_STAR__temp_val__37071_37080,_STAR_print_fn_STAR__temp_val__37072_37081,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__37069_37078,_STAR_print_fn_STAR__orig_val__37070_37079,_STAR_print_newline_STAR__temp_val__37071_37080,_STAR_print_fn_STAR__temp_val__37072_37081,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__37063_SHARP_){
return cljs.core.dissoc.call(null,p1__37063_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__37069_37078,_STAR_print_fn_STAR__orig_val__37070_37079,_STAR_print_newline_STAR__temp_val__37071_37080,_STAR_print_fn_STAR__temp_val__37072_37081,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__37069_37078,_STAR_print_fn_STAR__orig_val__37070_37079,_STAR_print_newline_STAR__temp_val__37071_37080,_STAR_print_fn_STAR__temp_val__37072_37081,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37070_37079;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37069_37078;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37073_37082 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37074_37083 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37075_37084 = true;
var _STAR_print_fn_STAR__temp_val__37076_37085 = ((function (_STAR_print_newline_STAR__orig_val__37073_37082,_STAR_print_fn_STAR__orig_val__37074_37083,_STAR_print_newline_STAR__temp_val__37075_37084,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__37073_37082,_STAR_print_fn_STAR__orig_val__37074_37083,_STAR_print_newline_STAR__temp_val__37075_37084,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37075_37084;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37076_37085;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__37073_37082,_STAR_print_fn_STAR__orig_val__37074_37083,_STAR_print_newline_STAR__temp_val__37075_37084,_STAR_print_fn_STAR__temp_val__37076_37085,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__37073_37082,_STAR_print_fn_STAR__orig_val__37074_37083,_STAR_print_newline_STAR__temp_val__37075_37084,_STAR_print_fn_STAR__temp_val__37076_37085,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__37064_SHARP_){
return cljs.core.dissoc.call(null,p1__37064_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__37073_37082,_STAR_print_fn_STAR__orig_val__37074_37083,_STAR_print_newline_STAR__temp_val__37075_37084,_STAR_print_fn_STAR__temp_val__37076_37085,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__37073_37082,_STAR_print_fn_STAR__orig_val__37074_37083,_STAR_print_newline_STAR__temp_val__37075_37084,_STAR_print_fn_STAR__temp_val__37076_37085,sb__4661__auto__,G__37068,G__37068__$1,loc,class_name,simple_class,cause_type,format,map__37066,map__37066__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37074_37083;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37073_37082;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37068__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1573661534915
