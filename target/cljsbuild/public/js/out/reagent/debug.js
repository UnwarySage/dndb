// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30498__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30499__i = 0, G__30499__a = new Array(arguments.length -  0);
while (G__30499__i < G__30499__a.length) {G__30499__a[G__30499__i] = arguments[G__30499__i + 0]; ++G__30499__i;}
  args = new cljs.core.IndexedSeq(G__30499__a,0,null);
} 
return G__30498__delegate.call(this,args);};
G__30498.cljs$lang$maxFixedArity = 0;
G__30498.cljs$lang$applyTo = (function (arglist__30500){
var args = cljs.core.seq(arglist__30500);
return G__30498__delegate(args);
});
G__30498.cljs$core$IFn$_invoke$arity$variadic = G__30498__delegate;
return G__30498;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30501__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30502__i = 0, G__30502__a = new Array(arguments.length -  0);
while (G__30502__i < G__30502__a.length) {G__30502__a[G__30502__i] = arguments[G__30502__i + 0]; ++G__30502__i;}
  args = new cljs.core.IndexedSeq(G__30502__a,0,null);
} 
return G__30501__delegate.call(this,args);};
G__30501.cljs$lang$maxFixedArity = 0;
G__30501.cljs$lang$applyTo = (function (arglist__30503){
var args = cljs.core.seq(arglist__30503);
return G__30501__delegate(args);
});
G__30501.cljs$core$IFn$_invoke$arity$variadic = G__30501__delegate;
return G__30501;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1573661526926
