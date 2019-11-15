// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37280){if((e37280 instanceof Error)){
var e = e37280;
return "Error: Unable to stringify";
} else {
throw e37280;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37283 = arguments.length;
switch (G__37283) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37281_SHARP_){
if(typeof p1__37281_SHARP_ === 'string'){
return p1__37281_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37281_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37286 = arguments.length;
var i__4731__auto___37287 = (0);
while(true){
if((i__4731__auto___37287 < len__4730__auto___37286)){
args__4736__auto__.push((arguments[i__4731__auto___37287]));

var G__37288 = (i__4731__auto___37287 + (1));
i__4731__auto___37287 = G__37288;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37285){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37285));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37290 = arguments.length;
var i__4731__auto___37291 = (0);
while(true){
if((i__4731__auto___37291 < len__4730__auto___37290)){
args__4736__auto__.push((arguments[i__4731__auto___37291]));

var G__37292 = (i__4731__auto___37291 + (1));
i__4731__auto___37291 = G__37292;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37289){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37289));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37293){
var map__37294 = p__37293;
var map__37294__$1 = (((((!((map__37294 == null))))?(((((map__37294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37294):map__37294);
var message = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31978__auto___37373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___37373,ch){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___37373,ch){
return (function (state_37345){
var state_val_37346 = (state_37345[(1)]);
if((state_val_37346 === (7))){
var inst_37341 = (state_37345[(2)]);
var state_37345__$1 = state_37345;
var statearr_37347_37374 = state_37345__$1;
(statearr_37347_37374[(2)] = inst_37341);

(statearr_37347_37374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (1))){
var state_37345__$1 = state_37345;
var statearr_37348_37375 = state_37345__$1;
(statearr_37348_37375[(2)] = null);

(statearr_37348_37375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (4))){
var inst_37298 = (state_37345[(7)]);
var inst_37298__$1 = (state_37345[(2)]);
var state_37345__$1 = (function (){var statearr_37349 = state_37345;
(statearr_37349[(7)] = inst_37298__$1);

return statearr_37349;
})();
if(cljs.core.truth_(inst_37298__$1)){
var statearr_37350_37376 = state_37345__$1;
(statearr_37350_37376[(1)] = (5));

} else {
var statearr_37351_37377 = state_37345__$1;
(statearr_37351_37377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (15))){
var inst_37305 = (state_37345[(8)]);
var inst_37320 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37305);
var inst_37321 = cljs.core.first.call(null,inst_37320);
var inst_37322 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37321);
var inst_37323 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37322)].join('');
var inst_37324 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37323);
var state_37345__$1 = state_37345;
var statearr_37352_37378 = state_37345__$1;
(statearr_37352_37378[(2)] = inst_37324);

(statearr_37352_37378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (13))){
var inst_37329 = (state_37345[(2)]);
var state_37345__$1 = state_37345;
var statearr_37353_37379 = state_37345__$1;
(statearr_37353_37379[(2)] = inst_37329);

(statearr_37353_37379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (6))){
var state_37345__$1 = state_37345;
var statearr_37354_37380 = state_37345__$1;
(statearr_37354_37380[(2)] = null);

(statearr_37354_37380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (17))){
var inst_37327 = (state_37345[(2)]);
var state_37345__$1 = state_37345;
var statearr_37355_37381 = state_37345__$1;
(statearr_37355_37381[(2)] = inst_37327);

(statearr_37355_37381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (3))){
var inst_37343 = (state_37345[(2)]);
var state_37345__$1 = state_37345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37345__$1,inst_37343);
} else {
if((state_val_37346 === (12))){
var inst_37304 = (state_37345[(9)]);
var inst_37318 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37304,opts);
var state_37345__$1 = state_37345;
if(inst_37318){
var statearr_37356_37382 = state_37345__$1;
(statearr_37356_37382[(1)] = (15));

} else {
var statearr_37357_37383 = state_37345__$1;
(statearr_37357_37383[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (2))){
var state_37345__$1 = state_37345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37345__$1,(4),ch);
} else {
if((state_val_37346 === (11))){
var inst_37305 = (state_37345[(8)]);
var inst_37310 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37311 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37305);
var inst_37312 = cljs.core.async.timeout.call(null,(1000));
var inst_37313 = [inst_37311,inst_37312];
var inst_37314 = (new cljs.core.PersistentVector(null,2,(5),inst_37310,inst_37313,null));
var state_37345__$1 = state_37345;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37345__$1,(14),inst_37314);
} else {
if((state_val_37346 === (9))){
var inst_37305 = (state_37345[(8)]);
var inst_37331 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37332 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37305);
var inst_37333 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37332);
var inst_37334 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37333)].join('');
var inst_37335 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37334);
var state_37345__$1 = (function (){var statearr_37358 = state_37345;
(statearr_37358[(10)] = inst_37331);

return statearr_37358;
})();
var statearr_37359_37384 = state_37345__$1;
(statearr_37359_37384[(2)] = inst_37335);

(statearr_37359_37384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (5))){
var inst_37298 = (state_37345[(7)]);
var inst_37300 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37301 = (new cljs.core.PersistentArrayMap(null,2,inst_37300,null));
var inst_37302 = (new cljs.core.PersistentHashSet(null,inst_37301,null));
var inst_37303 = figwheel.client.focus_msgs.call(null,inst_37302,inst_37298);
var inst_37304 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37303);
var inst_37305 = cljs.core.first.call(null,inst_37303);
var inst_37306 = figwheel.client.autoload_QMARK_.call(null);
var state_37345__$1 = (function (){var statearr_37360 = state_37345;
(statearr_37360[(8)] = inst_37305);

(statearr_37360[(9)] = inst_37304);

return statearr_37360;
})();
if(cljs.core.truth_(inst_37306)){
var statearr_37361_37385 = state_37345__$1;
(statearr_37361_37385[(1)] = (8));

} else {
var statearr_37362_37386 = state_37345__$1;
(statearr_37362_37386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (14))){
var inst_37316 = (state_37345[(2)]);
var state_37345__$1 = state_37345;
var statearr_37363_37387 = state_37345__$1;
(statearr_37363_37387[(2)] = inst_37316);

(statearr_37363_37387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (16))){
var state_37345__$1 = state_37345;
var statearr_37364_37388 = state_37345__$1;
(statearr_37364_37388[(2)] = null);

(statearr_37364_37388[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (10))){
var inst_37337 = (state_37345[(2)]);
var state_37345__$1 = (function (){var statearr_37365 = state_37345;
(statearr_37365[(11)] = inst_37337);

return statearr_37365;
})();
var statearr_37366_37389 = state_37345__$1;
(statearr_37366_37389[(2)] = null);

(statearr_37366_37389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37346 === (8))){
var inst_37304 = (state_37345[(9)]);
var inst_37308 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37304,opts);
var state_37345__$1 = state_37345;
if(cljs.core.truth_(inst_37308)){
var statearr_37367_37390 = state_37345__$1;
(statearr_37367_37390[(1)] = (11));

} else {
var statearr_37368_37391 = state_37345__$1;
(statearr_37368_37391[(1)] = (12));

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
});})(c__31978__auto___37373,ch))
;
return ((function (switch__31883__auto__,c__31978__auto___37373,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31884__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31884__auto____0 = (function (){
var statearr_37369 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37369[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31884__auto__);

(statearr_37369[(1)] = (1));

return statearr_37369;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31884__auto____1 = (function (state_37345){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_37345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e37370){if((e37370 instanceof Object)){
var ex__31887__auto__ = e37370;
var statearr_37371_37392 = state_37345;
(statearr_37371_37392[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37393 = state_37345;
state_37345 = G__37393;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31884__auto__ = function(state_37345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31884__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31884__auto____1.call(this,state_37345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31884__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31884__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___37373,ch))
})();
var state__31980__auto__ = (function (){var statearr_37372 = f__31979__auto__.call(null);
(statearr_37372[(6)] = c__31978__auto___37373);

return statearr_37372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___37373,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37394_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37394_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37400 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37400){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37396 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37397 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37398 = true;
var _STAR_print_fn_STAR__temp_val__37399 = ((function (_STAR_print_newline_STAR__orig_val__37396,_STAR_print_fn_STAR__orig_val__37397,_STAR_print_newline_STAR__temp_val__37398,sb,base_path_37400){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__37396,_STAR_print_fn_STAR__orig_val__37397,_STAR_print_newline_STAR__temp_val__37398,sb,base_path_37400))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37398;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37399;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37397;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37396;
}}catch (e37395){if((e37395 instanceof Error)){
var e = e37395;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37400], null));
} else {
var e = e37395;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37400))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37401){
var map__37402 = p__37401;
var map__37402__$1 = (((((!((map__37402 == null))))?(((((map__37402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37402):map__37402);
var opts = map__37402__$1;
var build_id = cljs.core.get.call(null,map__37402__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37402,map__37402__$1,opts,build_id){
return (function (p__37404){
var vec__37405 = p__37404;
var seq__37406 = cljs.core.seq.call(null,vec__37405);
var first__37407 = cljs.core.first.call(null,seq__37406);
var seq__37406__$1 = cljs.core.next.call(null,seq__37406);
var map__37408 = first__37407;
var map__37408__$1 = (((((!((map__37408 == null))))?(((((map__37408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37408):map__37408);
var msg = map__37408__$1;
var msg_name = cljs.core.get.call(null,map__37408__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37406__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37405,seq__37406,first__37407,seq__37406__$1,map__37408,map__37408__$1,msg,msg_name,_,map__37402,map__37402__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37405,seq__37406,first__37407,seq__37406__$1,map__37408,map__37408__$1,msg,msg_name,_,map__37402,map__37402__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37402,map__37402__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37410){
var vec__37411 = p__37410;
var seq__37412 = cljs.core.seq.call(null,vec__37411);
var first__37413 = cljs.core.first.call(null,seq__37412);
var seq__37412__$1 = cljs.core.next.call(null,seq__37412);
var map__37414 = first__37413;
var map__37414__$1 = (((((!((map__37414 == null))))?(((((map__37414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37414):map__37414);
var msg = map__37414__$1;
var msg_name = cljs.core.get.call(null,map__37414__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37412__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37416){
var map__37417 = p__37416;
var map__37417__$1 = (((((!((map__37417 == null))))?(((((map__37417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37417):map__37417);
var on_compile_warning = cljs.core.get.call(null,map__37417__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37417__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37417,map__37417__$1,on_compile_warning,on_compile_fail){
return (function (p__37419){
var vec__37420 = p__37419;
var seq__37421 = cljs.core.seq.call(null,vec__37420);
var first__37422 = cljs.core.first.call(null,seq__37421);
var seq__37421__$1 = cljs.core.next.call(null,seq__37421);
var map__37423 = first__37422;
var map__37423__$1 = (((((!((map__37423 == null))))?(((((map__37423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37423):map__37423);
var msg = map__37423__$1;
var msg_name = cljs.core.get.call(null,map__37423__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37421__$1;
var pred__37425 = cljs.core._EQ_;
var expr__37426 = msg_name;
if(cljs.core.truth_(pred__37425.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37426))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37425.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37426))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37417,map__37417__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__,msg_hist,msg_names,msg){
return (function (state_37515){
var state_val_37516 = (state_37515[(1)]);
if((state_val_37516 === (7))){
var inst_37435 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
if(cljs.core.truth_(inst_37435)){
var statearr_37517_37564 = state_37515__$1;
(statearr_37517_37564[(1)] = (8));

} else {
var statearr_37518_37565 = state_37515__$1;
(statearr_37518_37565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (20))){
var inst_37509 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37519_37566 = state_37515__$1;
(statearr_37519_37566[(2)] = inst_37509);

(statearr_37519_37566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (27))){
var inst_37505 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37520_37567 = state_37515__$1;
(statearr_37520_37567[(2)] = inst_37505);

(statearr_37520_37567[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (1))){
var inst_37428 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37515__$1 = state_37515;
if(cljs.core.truth_(inst_37428)){
var statearr_37521_37568 = state_37515__$1;
(statearr_37521_37568[(1)] = (2));

} else {
var statearr_37522_37569 = state_37515__$1;
(statearr_37522_37569[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (24))){
var inst_37507 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37523_37570 = state_37515__$1;
(statearr_37523_37570[(2)] = inst_37507);

(statearr_37523_37570[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (4))){
var inst_37513 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37515__$1,inst_37513);
} else {
if((state_val_37516 === (15))){
var inst_37511 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37524_37571 = state_37515__$1;
(statearr_37524_37571[(2)] = inst_37511);

(statearr_37524_37571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (21))){
var inst_37464 = (state_37515[(2)]);
var inst_37465 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37466 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37465);
var state_37515__$1 = (function (){var statearr_37525 = state_37515;
(statearr_37525[(7)] = inst_37464);

return statearr_37525;
})();
var statearr_37526_37572 = state_37515__$1;
(statearr_37526_37572[(2)] = inst_37466);

(statearr_37526_37572[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (31))){
var inst_37494 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37515__$1 = state_37515;
if(inst_37494){
var statearr_37527_37573 = state_37515__$1;
(statearr_37527_37573[(1)] = (34));

} else {
var statearr_37528_37574 = state_37515__$1;
(statearr_37528_37574[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (32))){
var inst_37503 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37529_37575 = state_37515__$1;
(statearr_37529_37575[(2)] = inst_37503);

(statearr_37529_37575[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (33))){
var inst_37490 = (state_37515[(2)]);
var inst_37491 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37492 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37491);
var state_37515__$1 = (function (){var statearr_37530 = state_37515;
(statearr_37530[(8)] = inst_37490);

return statearr_37530;
})();
var statearr_37531_37576 = state_37515__$1;
(statearr_37531_37576[(2)] = inst_37492);

(statearr_37531_37576[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (13))){
var inst_37449 = figwheel.client.heads_up.clear.call(null);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(16),inst_37449);
} else {
if((state_val_37516 === (22))){
var inst_37470 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37471 = figwheel.client.heads_up.append_warning_message.call(null,inst_37470);
var state_37515__$1 = state_37515;
var statearr_37532_37577 = state_37515__$1;
(statearr_37532_37577[(2)] = inst_37471);

(statearr_37532_37577[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (36))){
var inst_37501 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37533_37578 = state_37515__$1;
(statearr_37533_37578[(2)] = inst_37501);

(statearr_37533_37578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (29))){
var inst_37481 = (state_37515[(2)]);
var inst_37482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37483 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37482);
var state_37515__$1 = (function (){var statearr_37534 = state_37515;
(statearr_37534[(9)] = inst_37481);

return statearr_37534;
})();
var statearr_37535_37579 = state_37515__$1;
(statearr_37535_37579[(2)] = inst_37483);

(statearr_37535_37579[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (6))){
var inst_37430 = (state_37515[(10)]);
var state_37515__$1 = state_37515;
var statearr_37536_37580 = state_37515__$1;
(statearr_37536_37580[(2)] = inst_37430);

(statearr_37536_37580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (28))){
var inst_37477 = (state_37515[(2)]);
var inst_37478 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37479 = figwheel.client.heads_up.display_warning.call(null,inst_37478);
var state_37515__$1 = (function (){var statearr_37537 = state_37515;
(statearr_37537[(11)] = inst_37477);

return statearr_37537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(29),inst_37479);
} else {
if((state_val_37516 === (25))){
var inst_37475 = figwheel.client.heads_up.clear.call(null);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(28),inst_37475);
} else {
if((state_val_37516 === (34))){
var inst_37496 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(37),inst_37496);
} else {
if((state_val_37516 === (17))){
var inst_37455 = (state_37515[(2)]);
var inst_37456 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37457 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37456);
var state_37515__$1 = (function (){var statearr_37538 = state_37515;
(statearr_37538[(12)] = inst_37455);

return statearr_37538;
})();
var statearr_37539_37581 = state_37515__$1;
(statearr_37539_37581[(2)] = inst_37457);

(statearr_37539_37581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (3))){
var inst_37447 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37515__$1 = state_37515;
if(inst_37447){
var statearr_37540_37582 = state_37515__$1;
(statearr_37540_37582[(1)] = (13));

} else {
var statearr_37541_37583 = state_37515__$1;
(statearr_37541_37583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (12))){
var inst_37443 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37542_37584 = state_37515__$1;
(statearr_37542_37584[(2)] = inst_37443);

(statearr_37542_37584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (2))){
var inst_37430 = (state_37515[(10)]);
var inst_37430__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37515__$1 = (function (){var statearr_37543 = state_37515;
(statearr_37543[(10)] = inst_37430__$1);

return statearr_37543;
})();
if(cljs.core.truth_(inst_37430__$1)){
var statearr_37544_37585 = state_37515__$1;
(statearr_37544_37585[(1)] = (5));

} else {
var statearr_37545_37586 = state_37515__$1;
(statearr_37545_37586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (23))){
var inst_37473 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37515__$1 = state_37515;
if(inst_37473){
var statearr_37546_37587 = state_37515__$1;
(statearr_37546_37587[(1)] = (25));

} else {
var statearr_37547_37588 = state_37515__$1;
(statearr_37547_37588[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (35))){
var state_37515__$1 = state_37515;
var statearr_37548_37589 = state_37515__$1;
(statearr_37548_37589[(2)] = null);

(statearr_37548_37589[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (19))){
var inst_37468 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37515__$1 = state_37515;
if(inst_37468){
var statearr_37549_37590 = state_37515__$1;
(statearr_37549_37590[(1)] = (22));

} else {
var statearr_37550_37591 = state_37515__$1;
(statearr_37550_37591[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (11))){
var inst_37439 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37551_37592 = state_37515__$1;
(statearr_37551_37592[(2)] = inst_37439);

(statearr_37551_37592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (9))){
var inst_37441 = figwheel.client.heads_up.clear.call(null);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(12),inst_37441);
} else {
if((state_val_37516 === (5))){
var inst_37432 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37515__$1 = state_37515;
var statearr_37552_37593 = state_37515__$1;
(statearr_37552_37593[(2)] = inst_37432);

(statearr_37552_37593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (14))){
var inst_37459 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37515__$1 = state_37515;
if(inst_37459){
var statearr_37553_37594 = state_37515__$1;
(statearr_37553_37594[(1)] = (18));

} else {
var statearr_37554_37595 = state_37515__$1;
(statearr_37554_37595[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (26))){
var inst_37485 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37515__$1 = state_37515;
if(inst_37485){
var statearr_37555_37596 = state_37515__$1;
(statearr_37555_37596[(1)] = (30));

} else {
var statearr_37556_37597 = state_37515__$1;
(statearr_37556_37597[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (16))){
var inst_37451 = (state_37515[(2)]);
var inst_37452 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37453 = figwheel.client.heads_up.display_exception.call(null,inst_37452);
var state_37515__$1 = (function (){var statearr_37557 = state_37515;
(statearr_37557[(13)] = inst_37451);

return statearr_37557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(17),inst_37453);
} else {
if((state_val_37516 === (30))){
var inst_37487 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37488 = figwheel.client.heads_up.display_warning.call(null,inst_37487);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(33),inst_37488);
} else {
if((state_val_37516 === (10))){
var inst_37445 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37558_37598 = state_37515__$1;
(statearr_37558_37598[(2)] = inst_37445);

(statearr_37558_37598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (18))){
var inst_37461 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37462 = figwheel.client.heads_up.display_exception.call(null,inst_37461);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(21),inst_37462);
} else {
if((state_val_37516 === (37))){
var inst_37498 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37559_37599 = state_37515__$1;
(statearr_37559_37599[(2)] = inst_37498);

(statearr_37559_37599[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (8))){
var inst_37437 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(11),inst_37437);
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
});})(c__31978__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31883__auto__,c__31978__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto____0 = (function (){
var statearr_37560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37560[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto__);

(statearr_37560[(1)] = (1));

return statearr_37560;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto____1 = (function (state_37515){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_37515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e37561){if((e37561 instanceof Object)){
var ex__31887__auto__ = e37561;
var statearr_37562_37600 = state_37515;
(statearr_37562_37600[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37601 = state_37515;
state_37515 = G__37601;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto__ = function(state_37515){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto____1.call(this,state_37515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__,msg_hist,msg_names,msg))
})();
var state__31980__auto__ = (function (){var statearr_37563 = f__31979__auto__.call(null);
(statearr_37563[(6)] = c__31978__auto__);

return statearr_37563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,msg_hist,msg_names,msg))
);

return c__31978__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31978__auto___37630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___37630,ch){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___37630,ch){
return (function (state_37616){
var state_val_37617 = (state_37616[(1)]);
if((state_val_37617 === (1))){
var state_37616__$1 = state_37616;
var statearr_37618_37631 = state_37616__$1;
(statearr_37618_37631[(2)] = null);

(statearr_37618_37631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (2))){
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(4),ch);
} else {
if((state_val_37617 === (3))){
var inst_37614 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37616__$1,inst_37614);
} else {
if((state_val_37617 === (4))){
var inst_37604 = (state_37616[(7)]);
var inst_37604__$1 = (state_37616[(2)]);
var state_37616__$1 = (function (){var statearr_37619 = state_37616;
(statearr_37619[(7)] = inst_37604__$1);

return statearr_37619;
})();
if(cljs.core.truth_(inst_37604__$1)){
var statearr_37620_37632 = state_37616__$1;
(statearr_37620_37632[(1)] = (5));

} else {
var statearr_37621_37633 = state_37616__$1;
(statearr_37621_37633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (5))){
var inst_37604 = (state_37616[(7)]);
var inst_37606 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37604);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(8),inst_37606);
} else {
if((state_val_37617 === (6))){
var state_37616__$1 = state_37616;
var statearr_37622_37634 = state_37616__$1;
(statearr_37622_37634[(2)] = null);

(statearr_37622_37634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (7))){
var inst_37612 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37623_37635 = state_37616__$1;
(statearr_37623_37635[(2)] = inst_37612);

(statearr_37623_37635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (8))){
var inst_37608 = (state_37616[(2)]);
var state_37616__$1 = (function (){var statearr_37624 = state_37616;
(statearr_37624[(8)] = inst_37608);

return statearr_37624;
})();
var statearr_37625_37636 = state_37616__$1;
(statearr_37625_37636[(2)] = null);

(statearr_37625_37636[(1)] = (2));


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
});})(c__31978__auto___37630,ch))
;
return ((function (switch__31883__auto__,c__31978__auto___37630,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31884__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31884__auto____0 = (function (){
var statearr_37626 = [null,null,null,null,null,null,null,null,null];
(statearr_37626[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31884__auto__);

(statearr_37626[(1)] = (1));

return statearr_37626;
});
var figwheel$client$heads_up_plugin_$_state_machine__31884__auto____1 = (function (state_37616){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_37616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e37627){if((e37627 instanceof Object)){
var ex__31887__auto__ = e37627;
var statearr_37628_37637 = state_37616;
(statearr_37628_37637[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37638 = state_37616;
state_37616 = G__37638;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31884__auto__ = function(state_37616){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31884__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31884__auto____1.call(this,state_37616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31884__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31884__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___37630,ch))
})();
var state__31980__auto__ = (function (){var statearr_37629 = f__31979__auto__.call(null);
(statearr_37629[(6)] = c__31978__auto___37630);

return statearr_37629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___37630,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__){
return (function (state_37644){
var state_val_37645 = (state_37644[(1)]);
if((state_val_37645 === (1))){
var inst_37639 = cljs.core.async.timeout.call(null,(3000));
var state_37644__$1 = state_37644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37644__$1,(2),inst_37639);
} else {
if((state_val_37645 === (2))){
var inst_37641 = (state_37644[(2)]);
var inst_37642 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37644__$1 = (function (){var statearr_37646 = state_37644;
(statearr_37646[(7)] = inst_37641);

return statearr_37646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37644__$1,inst_37642);
} else {
return null;
}
}
});})(c__31978__auto__))
;
return ((function (switch__31883__auto__,c__31978__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31884__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31884__auto____0 = (function (){
var statearr_37647 = [null,null,null,null,null,null,null,null];
(statearr_37647[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31884__auto__);

(statearr_37647[(1)] = (1));

return statearr_37647;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31884__auto____1 = (function (state_37644){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_37644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e37648){if((e37648 instanceof Object)){
var ex__31887__auto__ = e37648;
var statearr_37649_37651 = state_37644;
(statearr_37649_37651[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37652 = state_37644;
state_37644 = G__37652;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31884__auto__ = function(state_37644){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31884__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31884__auto____1.call(this,state_37644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31884__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31884__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_37650 = f__31979__auto__.call(null);
(statearr_37650[(6)] = c__31978__auto__);

return statearr_37650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__,figwheel_version,temp__5735__auto__){
return (function (state_37659){
var state_val_37660 = (state_37659[(1)]);
if((state_val_37660 === (1))){
var inst_37653 = cljs.core.async.timeout.call(null,(2000));
var state_37659__$1 = state_37659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37659__$1,(2),inst_37653);
} else {
if((state_val_37660 === (2))){
var inst_37655 = (state_37659[(2)]);
var inst_37656 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37657 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37656);
var state_37659__$1 = (function (){var statearr_37661 = state_37659;
(statearr_37661[(7)] = inst_37655);

return statearr_37661;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37659__$1,inst_37657);
} else {
return null;
}
}
});})(c__31978__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__31883__auto__,c__31978__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto____0 = (function (){
var statearr_37662 = [null,null,null,null,null,null,null,null];
(statearr_37662[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto__);

(statearr_37662[(1)] = (1));

return statearr_37662;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto____1 = (function (state_37659){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_37659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e37663){if((e37663 instanceof Object)){
var ex__31887__auto__ = e37663;
var statearr_37664_37666 = state_37659;
(statearr_37664_37666[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37667 = state_37659;
state_37659 = G__37667;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto__ = function(state_37659){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto____1.call(this,state_37659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__,figwheel_version,temp__5735__auto__))
})();
var state__31980__auto__ = (function (){var statearr_37665 = f__31979__auto__.call(null);
(statearr_37665[(6)] = c__31978__auto__);

return statearr_37665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,figwheel_version,temp__5735__auto__))
);

return c__31978__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37668){
var map__37669 = p__37668;
var map__37669__$1 = (((((!((map__37669 == null))))?(((((map__37669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37669):map__37669);
var file = cljs.core.get.call(null,map__37669__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37669__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37669__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37671 = "";
var G__37671__$1 = (cljs.core.truth_(file)?[G__37671,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37671);
var G__37671__$2 = (cljs.core.truth_(line)?[G__37671__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37671__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__37671__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37671__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37672){
var map__37673 = p__37672;
var map__37673__$1 = (((((!((map__37673 == null))))?(((((map__37673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37673):map__37673);
var ed = map__37673__$1;
var exception_data = cljs.core.get.call(null,map__37673__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37673__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37676 = (function (){var G__37675 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37675)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__37675;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37676);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37677){
var map__37678 = p__37677;
var map__37678__$1 = (((((!((map__37678 == null))))?(((((map__37678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37678):map__37678);
var w = map__37678__$1;
var message = cljs.core.get.call(null,map__37678__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37680 = cljs.core.seq.call(null,plugins);
var chunk__37681 = null;
var count__37682 = (0);
var i__37683 = (0);
while(true){
if((i__37683 < count__37682)){
var vec__37690 = cljs.core._nth.call(null,chunk__37681,i__37683);
var k = cljs.core.nth.call(null,vec__37690,(0),null);
var plugin = cljs.core.nth.call(null,vec__37690,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37696 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37680,chunk__37681,count__37682,i__37683,pl_37696,vec__37690,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37696.call(null,msg_hist);
});})(seq__37680,chunk__37681,count__37682,i__37683,pl_37696,vec__37690,k,plugin))
);
} else {
}


var G__37697 = seq__37680;
var G__37698 = chunk__37681;
var G__37699 = count__37682;
var G__37700 = (i__37683 + (1));
seq__37680 = G__37697;
chunk__37681 = G__37698;
count__37682 = G__37699;
i__37683 = G__37700;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__37680);
if(temp__5735__auto__){
var seq__37680__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37680__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__37680__$1);
var G__37701 = cljs.core.chunk_rest.call(null,seq__37680__$1);
var G__37702 = c__4550__auto__;
var G__37703 = cljs.core.count.call(null,c__4550__auto__);
var G__37704 = (0);
seq__37680 = G__37701;
chunk__37681 = G__37702;
count__37682 = G__37703;
i__37683 = G__37704;
continue;
} else {
var vec__37693 = cljs.core.first.call(null,seq__37680__$1);
var k = cljs.core.nth.call(null,vec__37693,(0),null);
var plugin = cljs.core.nth.call(null,vec__37693,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37705 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37680,chunk__37681,count__37682,i__37683,pl_37705,vec__37693,k,plugin,seq__37680__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37705.call(null,msg_hist);
});})(seq__37680,chunk__37681,count__37682,i__37683,pl_37705,vec__37693,k,plugin,seq__37680__$1,temp__5735__auto__))
);
} else {
}


var G__37706 = cljs.core.next.call(null,seq__37680__$1);
var G__37707 = null;
var G__37708 = (0);
var G__37709 = (0);
seq__37680 = G__37706;
chunk__37681 = G__37707;
count__37682 = G__37708;
i__37683 = G__37709;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37711 = arguments.length;
switch (G__37711) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37712_37717 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37713_37718 = null;
var count__37714_37719 = (0);
var i__37715_37720 = (0);
while(true){
if((i__37715_37720 < count__37714_37719)){
var msg_37721 = cljs.core._nth.call(null,chunk__37713_37718,i__37715_37720);
figwheel.client.socket.handle_incoming_message.call(null,msg_37721);


var G__37722 = seq__37712_37717;
var G__37723 = chunk__37713_37718;
var G__37724 = count__37714_37719;
var G__37725 = (i__37715_37720 + (1));
seq__37712_37717 = G__37722;
chunk__37713_37718 = G__37723;
count__37714_37719 = G__37724;
i__37715_37720 = G__37725;
continue;
} else {
var temp__5735__auto___37726 = cljs.core.seq.call(null,seq__37712_37717);
if(temp__5735__auto___37726){
var seq__37712_37727__$1 = temp__5735__auto___37726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37712_37727__$1)){
var c__4550__auto___37728 = cljs.core.chunk_first.call(null,seq__37712_37727__$1);
var G__37729 = cljs.core.chunk_rest.call(null,seq__37712_37727__$1);
var G__37730 = c__4550__auto___37728;
var G__37731 = cljs.core.count.call(null,c__4550__auto___37728);
var G__37732 = (0);
seq__37712_37717 = G__37729;
chunk__37713_37718 = G__37730;
count__37714_37719 = G__37731;
i__37715_37720 = G__37732;
continue;
} else {
var msg_37733 = cljs.core.first.call(null,seq__37712_37727__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37733);


var G__37734 = cljs.core.next.call(null,seq__37712_37727__$1);
var G__37735 = null;
var G__37736 = (0);
var G__37737 = (0);
seq__37712_37717 = G__37734;
chunk__37713_37718 = G__37735;
count__37714_37719 = G__37736;
i__37715_37720 = G__37737;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37742 = arguments.length;
var i__4731__auto___37743 = (0);
while(true){
if((i__4731__auto___37743 < len__4730__auto___37742)){
args__4736__auto__.push((arguments[i__4731__auto___37743]));

var G__37744 = (i__4731__auto___37743 + (1));
i__4731__auto___37743 = G__37744;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37739){
var map__37740 = p__37739;
var map__37740__$1 = (((((!((map__37740 == null))))?(((((map__37740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37740):map__37740);
var opts = map__37740__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37738){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37738));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37745){if((e37745 instanceof Error)){
var e = e37745;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37745;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37746){
var map__37747 = p__37746;
var map__37747__$1 = (((((!((map__37747 == null))))?(((((map__37747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37747):map__37747);
var msg_name = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1573661535786
