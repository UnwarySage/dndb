// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32038 = arguments.length;
switch (G__32038) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32039 = (function (f,blockable,meta32040){
this.f = f;
this.blockable = blockable;
this.meta32040 = meta32040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32041,meta32040__$1){
var self__ = this;
var _32041__$1 = this;
return (new cljs.core.async.t_cljs$core$async32039(self__.f,self__.blockable,meta32040__$1));
});

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32041){
var self__ = this;
var _32041__$1 = this;
return self__.meta32040;
});

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32040","meta32040",721592877,null)], null);
});

cljs.core.async.t_cljs$core$async32039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32039";

cljs.core.async.t_cljs$core$async32039.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32039");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32039.
 */
cljs.core.async.__GT_t_cljs$core$async32039 = (function cljs$core$async$__GT_t_cljs$core$async32039(f__$1,blockable__$1,meta32040){
return (new cljs.core.async.t_cljs$core$async32039(f__$1,blockable__$1,meta32040));
});

}

return (new cljs.core.async.t_cljs$core$async32039(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32045 = arguments.length;
switch (G__32045) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32048 = arguments.length;
switch (G__32048) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32051 = arguments.length;
switch (G__32051) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32053 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32053);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32053,ret){
return (function (){
return fn1.call(null,val_32053);
});})(val_32053,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32055 = arguments.length;
switch (G__32055) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___32057 = n;
var x_32058 = (0);
while(true){
if((x_32058 < n__4607__auto___32057)){
(a[x_32058] = (0));

var G__32059 = (x_32058 + (1));
x_32058 = G__32059;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32060 = (i + (1));
i = G__32060;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32061 = (function (flag,meta32062){
this.flag = flag;
this.meta32062 = meta32062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32063,meta32062__$1){
var self__ = this;
var _32063__$1 = this;
return (new cljs.core.async.t_cljs$core$async32061(self__.flag,meta32062__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32063){
var self__ = this;
var _32063__$1 = this;
return self__.meta32062;
});})(flag))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32061.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32062","meta32062",178431361,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32061";

cljs.core.async.t_cljs$core$async32061.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32061");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32061.
 */
cljs.core.async.__GT_t_cljs$core$async32061 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32061(flag__$1,meta32062){
return (new cljs.core.async.t_cljs$core$async32061(flag__$1,meta32062));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32061(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32064 = (function (flag,cb,meta32065){
this.flag = flag;
this.cb = cb;
this.meta32065 = meta32065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32066,meta32065__$1){
var self__ = this;
var _32066__$1 = this;
return (new cljs.core.async.t_cljs$core$async32064(self__.flag,self__.cb,meta32065__$1));
});

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32066){
var self__ = this;
var _32066__$1 = this;
return self__.meta32065;
});

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32065","meta32065",-21910967,null)], null);
});

cljs.core.async.t_cljs$core$async32064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32064";

cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32064");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32064.
 */
cljs.core.async.__GT_t_cljs$core$async32064 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32064(flag__$1,cb__$1,meta32065){
return (new cljs.core.async.t_cljs$core$async32064(flag__$1,cb__$1,meta32065));
});

}

return (new cljs.core.async.t_cljs$core$async32064(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32067_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32067_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32068_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32068_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32069 = (i + (1));
i = G__32069;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32075 = arguments.length;
var i__4731__auto___32076 = (0);
while(true){
if((i__4731__auto___32076 < len__4730__auto___32075)){
args__4736__auto__.push((arguments[i__4731__auto___32076]));

var G__32077 = (i__4731__auto___32076 + (1));
i__4731__auto___32076 = G__32077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32072){
var map__32073 = p__32072;
var map__32073__$1 = (((((!((map__32073 == null))))?(((((map__32073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32073):map__32073);
var opts = map__32073__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32070){
var G__32071 = cljs.core.first.call(null,seq32070);
var seq32070__$1 = cljs.core.next.call(null,seq32070);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32071,seq32070__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32079 = arguments.length;
switch (G__32079) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31978__auto___32125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32125){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___32125){
return (function (state_32103){
var state_val_32104 = (state_32103[(1)]);
if((state_val_32104 === (7))){
var inst_32099 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32105_32126 = state_32103__$1;
(statearr_32105_32126[(2)] = inst_32099);

(statearr_32105_32126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (1))){
var state_32103__$1 = state_32103;
var statearr_32106_32127 = state_32103__$1;
(statearr_32106_32127[(2)] = null);

(statearr_32106_32127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (4))){
var inst_32082 = (state_32103[(7)]);
var inst_32082__$1 = (state_32103[(2)]);
var inst_32083 = (inst_32082__$1 == null);
var state_32103__$1 = (function (){var statearr_32107 = state_32103;
(statearr_32107[(7)] = inst_32082__$1);

return statearr_32107;
})();
if(cljs.core.truth_(inst_32083)){
var statearr_32108_32128 = state_32103__$1;
(statearr_32108_32128[(1)] = (5));

} else {
var statearr_32109_32129 = state_32103__$1;
(statearr_32109_32129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (13))){
var state_32103__$1 = state_32103;
var statearr_32110_32130 = state_32103__$1;
(statearr_32110_32130[(2)] = null);

(statearr_32110_32130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (6))){
var inst_32082 = (state_32103[(7)]);
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32103__$1,(11),to,inst_32082);
} else {
if((state_val_32104 === (3))){
var inst_32101 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32103__$1,inst_32101);
} else {
if((state_val_32104 === (12))){
var state_32103__$1 = state_32103;
var statearr_32111_32131 = state_32103__$1;
(statearr_32111_32131[(2)] = null);

(statearr_32111_32131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (2))){
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32103__$1,(4),from);
} else {
if((state_val_32104 === (11))){
var inst_32092 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
if(cljs.core.truth_(inst_32092)){
var statearr_32112_32132 = state_32103__$1;
(statearr_32112_32132[(1)] = (12));

} else {
var statearr_32113_32133 = state_32103__$1;
(statearr_32113_32133[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (9))){
var state_32103__$1 = state_32103;
var statearr_32114_32134 = state_32103__$1;
(statearr_32114_32134[(2)] = null);

(statearr_32114_32134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (5))){
var state_32103__$1 = state_32103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32115_32135 = state_32103__$1;
(statearr_32115_32135[(1)] = (8));

} else {
var statearr_32116_32136 = state_32103__$1;
(statearr_32116_32136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (14))){
var inst_32097 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32117_32137 = state_32103__$1;
(statearr_32117_32137[(2)] = inst_32097);

(statearr_32117_32137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (10))){
var inst_32089 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32118_32138 = state_32103__$1;
(statearr_32118_32138[(2)] = inst_32089);

(statearr_32118_32138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (8))){
var inst_32086 = cljs.core.async.close_BANG_.call(null,to);
var state_32103__$1 = state_32103;
var statearr_32119_32139 = state_32103__$1;
(statearr_32119_32139[(2)] = inst_32086);

(statearr_32119_32139[(1)] = (10));


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
});})(c__31978__auto___32125))
;
return ((function (switch__31883__auto__,c__31978__auto___32125){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_32120 = [null,null,null,null,null,null,null,null];
(statearr_32120[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_32120[(1)] = (1));

return statearr_32120;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_32103){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32121){if((e32121 instanceof Object)){
var ex__31887__auto__ = e32121;
var statearr_32122_32140 = state_32103;
(statearr_32122_32140[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32141 = state_32103;
state_32103 = G__32141;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_32103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_32103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___32125))
})();
var state__31980__auto__ = (function (){var statearr_32123 = f__31979__auto__.call(null);
(statearr_32123[(6)] = c__31978__auto___32125);

return statearr_32123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32125))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32142){
var vec__32143 = p__32142;
var v = cljs.core.nth.call(null,vec__32143,(0),null);
var p = cljs.core.nth.call(null,vec__32143,(1),null);
var job = vec__32143;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31978__auto___32314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32314,res,vec__32143,v,p,job,jobs,results){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___32314,res,vec__32143,v,p,job,jobs,results){
return (function (state_32150){
var state_val_32151 = (state_32150[(1)]);
if((state_val_32151 === (1))){
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32150__$1,(2),res,v);
} else {
if((state_val_32151 === (2))){
var inst_32147 = (state_32150[(2)]);
var inst_32148 = cljs.core.async.close_BANG_.call(null,res);
var state_32150__$1 = (function (){var statearr_32152 = state_32150;
(statearr_32152[(7)] = inst_32147);

return statearr_32152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32150__$1,inst_32148);
} else {
return null;
}
}
});})(c__31978__auto___32314,res,vec__32143,v,p,job,jobs,results))
;
return ((function (switch__31883__auto__,c__31978__auto___32314,res,vec__32143,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0 = (function (){
var statearr_32153 = [null,null,null,null,null,null,null,null];
(statearr_32153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__);

(statearr_32153[(1)] = (1));

return statearr_32153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1 = (function (state_32150){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32154){if((e32154 instanceof Object)){
var ex__31887__auto__ = e32154;
var statearr_32155_32315 = state_32150;
(statearr_32155_32315[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32316 = state_32150;
state_32150 = G__32316;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = function(state_32150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1.call(this,state_32150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___32314,res,vec__32143,v,p,job,jobs,results))
})();
var state__31980__auto__ = (function (){var statearr_32156 = f__31979__auto__.call(null);
(statearr_32156[(6)] = c__31978__auto___32314);

return statearr_32156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32314,res,vec__32143,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32157){
var vec__32158 = p__32157;
var v = cljs.core.nth.call(null,vec__32158,(0),null);
var p = cljs.core.nth.call(null,vec__32158,(1),null);
var job = vec__32158;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___32317 = n;
var __32318 = (0);
while(true){
if((__32318 < n__4607__auto___32317)){
var G__32161_32319 = type;
var G__32161_32320__$1 = (((G__32161_32319 instanceof cljs.core.Keyword))?G__32161_32319.fqn:null);
switch (G__32161_32320__$1) {
case "compute":
var c__31978__auto___32322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32318,c__31978__auto___32322,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (__32318,c__31978__auto___32322,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async){
return (function (state_32174){
var state_val_32175 = (state_32174[(1)]);
if((state_val_32175 === (1))){
var state_32174__$1 = state_32174;
var statearr_32176_32323 = state_32174__$1;
(statearr_32176_32323[(2)] = null);

(statearr_32176_32323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (2))){
var state_32174__$1 = state_32174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32174__$1,(4),jobs);
} else {
if((state_val_32175 === (3))){
var inst_32172 = (state_32174[(2)]);
var state_32174__$1 = state_32174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32174__$1,inst_32172);
} else {
if((state_val_32175 === (4))){
var inst_32164 = (state_32174[(2)]);
var inst_32165 = process.call(null,inst_32164);
var state_32174__$1 = state_32174;
if(cljs.core.truth_(inst_32165)){
var statearr_32177_32324 = state_32174__$1;
(statearr_32177_32324[(1)] = (5));

} else {
var statearr_32178_32325 = state_32174__$1;
(statearr_32178_32325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (5))){
var state_32174__$1 = state_32174;
var statearr_32179_32326 = state_32174__$1;
(statearr_32179_32326[(2)] = null);

(statearr_32179_32326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (6))){
var state_32174__$1 = state_32174;
var statearr_32180_32327 = state_32174__$1;
(statearr_32180_32327[(2)] = null);

(statearr_32180_32327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32175 === (7))){
var inst_32170 = (state_32174[(2)]);
var state_32174__$1 = state_32174;
var statearr_32181_32328 = state_32174__$1;
(statearr_32181_32328[(2)] = inst_32170);

(statearr_32181_32328[(1)] = (3));


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
});})(__32318,c__31978__auto___32322,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async))
;
return ((function (__32318,switch__31883__auto__,c__31978__auto___32322,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0 = (function (){
var statearr_32182 = [null,null,null,null,null,null,null];
(statearr_32182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__);

(statearr_32182[(1)] = (1));

return statearr_32182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1 = (function (state_32174){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32183){if((e32183 instanceof Object)){
var ex__31887__auto__ = e32183;
var statearr_32184_32329 = state_32174;
(statearr_32184_32329[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32330 = state_32174;
state_32174 = G__32330;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = function(state_32174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1.call(this,state_32174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__;
})()
;})(__32318,switch__31883__auto__,c__31978__auto___32322,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async))
})();
var state__31980__auto__ = (function (){var statearr_32185 = f__31979__auto__.call(null);
(statearr_32185[(6)] = c__31978__auto___32322);

return statearr_32185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(__32318,c__31978__auto___32322,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async))
);


break;
case "async":
var c__31978__auto___32331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32318,c__31978__auto___32331,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (__32318,c__31978__auto___32331,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async){
return (function (state_32198){
var state_val_32199 = (state_32198[(1)]);
if((state_val_32199 === (1))){
var state_32198__$1 = state_32198;
var statearr_32200_32332 = state_32198__$1;
(statearr_32200_32332[(2)] = null);

(statearr_32200_32332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (2))){
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32198__$1,(4),jobs);
} else {
if((state_val_32199 === (3))){
var inst_32196 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32198__$1,inst_32196);
} else {
if((state_val_32199 === (4))){
var inst_32188 = (state_32198[(2)]);
var inst_32189 = async.call(null,inst_32188);
var state_32198__$1 = state_32198;
if(cljs.core.truth_(inst_32189)){
var statearr_32201_32333 = state_32198__$1;
(statearr_32201_32333[(1)] = (5));

} else {
var statearr_32202_32334 = state_32198__$1;
(statearr_32202_32334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (5))){
var state_32198__$1 = state_32198;
var statearr_32203_32335 = state_32198__$1;
(statearr_32203_32335[(2)] = null);

(statearr_32203_32335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (6))){
var state_32198__$1 = state_32198;
var statearr_32204_32336 = state_32198__$1;
(statearr_32204_32336[(2)] = null);

(statearr_32204_32336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (7))){
var inst_32194 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
var statearr_32205_32337 = state_32198__$1;
(statearr_32205_32337[(2)] = inst_32194);

(statearr_32205_32337[(1)] = (3));


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
});})(__32318,c__31978__auto___32331,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async))
;
return ((function (__32318,switch__31883__auto__,c__31978__auto___32331,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0 = (function (){
var statearr_32206 = [null,null,null,null,null,null,null];
(statearr_32206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__);

(statearr_32206[(1)] = (1));

return statearr_32206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1 = (function (state_32198){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32207){if((e32207 instanceof Object)){
var ex__31887__auto__ = e32207;
var statearr_32208_32338 = state_32198;
(statearr_32208_32338[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32339 = state_32198;
state_32198 = G__32339;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = function(state_32198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1.call(this,state_32198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__;
})()
;})(__32318,switch__31883__auto__,c__31978__auto___32331,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async))
})();
var state__31980__auto__ = (function (){var statearr_32209 = f__31979__auto__.call(null);
(statearr_32209[(6)] = c__31978__auto___32331);

return statearr_32209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(__32318,c__31978__auto___32331,G__32161_32319,G__32161_32320__$1,n__4607__auto___32317,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32161_32320__$1)].join('')));

}

var G__32340 = (__32318 + (1));
__32318 = G__32340;
continue;
} else {
}
break;
}

var c__31978__auto___32341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32341,jobs,results,process,async){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___32341,jobs,results,process,async){
return (function (state_32231){
var state_val_32232 = (state_32231[(1)]);
if((state_val_32232 === (7))){
var inst_32227 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32233_32342 = state_32231__$1;
(statearr_32233_32342[(2)] = inst_32227);

(statearr_32233_32342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (1))){
var state_32231__$1 = state_32231;
var statearr_32234_32343 = state_32231__$1;
(statearr_32234_32343[(2)] = null);

(statearr_32234_32343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (4))){
var inst_32212 = (state_32231[(7)]);
var inst_32212__$1 = (state_32231[(2)]);
var inst_32213 = (inst_32212__$1 == null);
var state_32231__$1 = (function (){var statearr_32235 = state_32231;
(statearr_32235[(7)] = inst_32212__$1);

return statearr_32235;
})();
if(cljs.core.truth_(inst_32213)){
var statearr_32236_32344 = state_32231__$1;
(statearr_32236_32344[(1)] = (5));

} else {
var statearr_32237_32345 = state_32231__$1;
(statearr_32237_32345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (6))){
var inst_32217 = (state_32231[(8)]);
var inst_32212 = (state_32231[(7)]);
var inst_32217__$1 = cljs.core.async.chan.call(null,(1));
var inst_32218 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32219 = [inst_32212,inst_32217__$1];
var inst_32220 = (new cljs.core.PersistentVector(null,2,(5),inst_32218,inst_32219,null));
var state_32231__$1 = (function (){var statearr_32238 = state_32231;
(statearr_32238[(8)] = inst_32217__$1);

return statearr_32238;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32231__$1,(8),jobs,inst_32220);
} else {
if((state_val_32232 === (3))){
var inst_32229 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32231__$1,inst_32229);
} else {
if((state_val_32232 === (2))){
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32231__$1,(4),from);
} else {
if((state_val_32232 === (9))){
var inst_32224 = (state_32231[(2)]);
var state_32231__$1 = (function (){var statearr_32239 = state_32231;
(statearr_32239[(9)] = inst_32224);

return statearr_32239;
})();
var statearr_32240_32346 = state_32231__$1;
(statearr_32240_32346[(2)] = null);

(statearr_32240_32346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (5))){
var inst_32215 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32231__$1 = state_32231;
var statearr_32241_32347 = state_32231__$1;
(statearr_32241_32347[(2)] = inst_32215);

(statearr_32241_32347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (8))){
var inst_32217 = (state_32231[(8)]);
var inst_32222 = (state_32231[(2)]);
var state_32231__$1 = (function (){var statearr_32242 = state_32231;
(statearr_32242[(10)] = inst_32222);

return statearr_32242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32231__$1,(9),results,inst_32217);
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
});})(c__31978__auto___32341,jobs,results,process,async))
;
return ((function (switch__31883__auto__,c__31978__auto___32341,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0 = (function (){
var statearr_32243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__);

(statearr_32243[(1)] = (1));

return statearr_32243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1 = (function (state_32231){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32244){if((e32244 instanceof Object)){
var ex__31887__auto__ = e32244;
var statearr_32245_32348 = state_32231;
(statearr_32245_32348[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32349 = state_32231;
state_32231 = G__32349;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = function(state_32231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1.call(this,state_32231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___32341,jobs,results,process,async))
})();
var state__31980__auto__ = (function (){var statearr_32246 = f__31979__auto__.call(null);
(statearr_32246[(6)] = c__31978__auto___32341);

return statearr_32246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32341,jobs,results,process,async))
);


var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,jobs,results,process,async){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__,jobs,results,process,async){
return (function (state_32284){
var state_val_32285 = (state_32284[(1)]);
if((state_val_32285 === (7))){
var inst_32280 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32286_32350 = state_32284__$1;
(statearr_32286_32350[(2)] = inst_32280);

(statearr_32286_32350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (20))){
var state_32284__$1 = state_32284;
var statearr_32287_32351 = state_32284__$1;
(statearr_32287_32351[(2)] = null);

(statearr_32287_32351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (1))){
var state_32284__$1 = state_32284;
var statearr_32288_32352 = state_32284__$1;
(statearr_32288_32352[(2)] = null);

(statearr_32288_32352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (4))){
var inst_32249 = (state_32284[(7)]);
var inst_32249__$1 = (state_32284[(2)]);
var inst_32250 = (inst_32249__$1 == null);
var state_32284__$1 = (function (){var statearr_32289 = state_32284;
(statearr_32289[(7)] = inst_32249__$1);

return statearr_32289;
})();
if(cljs.core.truth_(inst_32250)){
var statearr_32290_32353 = state_32284__$1;
(statearr_32290_32353[(1)] = (5));

} else {
var statearr_32291_32354 = state_32284__$1;
(statearr_32291_32354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (15))){
var inst_32262 = (state_32284[(8)]);
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32284__$1,(18),to,inst_32262);
} else {
if((state_val_32285 === (21))){
var inst_32275 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32292_32355 = state_32284__$1;
(statearr_32292_32355[(2)] = inst_32275);

(statearr_32292_32355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (13))){
var inst_32277 = (state_32284[(2)]);
var state_32284__$1 = (function (){var statearr_32293 = state_32284;
(statearr_32293[(9)] = inst_32277);

return statearr_32293;
})();
var statearr_32294_32356 = state_32284__$1;
(statearr_32294_32356[(2)] = null);

(statearr_32294_32356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (6))){
var inst_32249 = (state_32284[(7)]);
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32284__$1,(11),inst_32249);
} else {
if((state_val_32285 === (17))){
var inst_32270 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
if(cljs.core.truth_(inst_32270)){
var statearr_32295_32357 = state_32284__$1;
(statearr_32295_32357[(1)] = (19));

} else {
var statearr_32296_32358 = state_32284__$1;
(statearr_32296_32358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (3))){
var inst_32282 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32284__$1,inst_32282);
} else {
if((state_val_32285 === (12))){
var inst_32259 = (state_32284[(10)]);
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32284__$1,(14),inst_32259);
} else {
if((state_val_32285 === (2))){
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32284__$1,(4),results);
} else {
if((state_val_32285 === (19))){
var state_32284__$1 = state_32284;
var statearr_32297_32359 = state_32284__$1;
(statearr_32297_32359[(2)] = null);

(statearr_32297_32359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (11))){
var inst_32259 = (state_32284[(2)]);
var state_32284__$1 = (function (){var statearr_32298 = state_32284;
(statearr_32298[(10)] = inst_32259);

return statearr_32298;
})();
var statearr_32299_32360 = state_32284__$1;
(statearr_32299_32360[(2)] = null);

(statearr_32299_32360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (9))){
var state_32284__$1 = state_32284;
var statearr_32300_32361 = state_32284__$1;
(statearr_32300_32361[(2)] = null);

(statearr_32300_32361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (5))){
var state_32284__$1 = state_32284;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32301_32362 = state_32284__$1;
(statearr_32301_32362[(1)] = (8));

} else {
var statearr_32302_32363 = state_32284__$1;
(statearr_32302_32363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (14))){
var inst_32262 = (state_32284[(8)]);
var inst_32264 = (state_32284[(11)]);
var inst_32262__$1 = (state_32284[(2)]);
var inst_32263 = (inst_32262__$1 == null);
var inst_32264__$1 = cljs.core.not.call(null,inst_32263);
var state_32284__$1 = (function (){var statearr_32303 = state_32284;
(statearr_32303[(8)] = inst_32262__$1);

(statearr_32303[(11)] = inst_32264__$1);

return statearr_32303;
})();
if(inst_32264__$1){
var statearr_32304_32364 = state_32284__$1;
(statearr_32304_32364[(1)] = (15));

} else {
var statearr_32305_32365 = state_32284__$1;
(statearr_32305_32365[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (16))){
var inst_32264 = (state_32284[(11)]);
var state_32284__$1 = state_32284;
var statearr_32306_32366 = state_32284__$1;
(statearr_32306_32366[(2)] = inst_32264);

(statearr_32306_32366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (10))){
var inst_32256 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32307_32367 = state_32284__$1;
(statearr_32307_32367[(2)] = inst_32256);

(statearr_32307_32367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (18))){
var inst_32267 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32308_32368 = state_32284__$1;
(statearr_32308_32368[(2)] = inst_32267);

(statearr_32308_32368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (8))){
var inst_32253 = cljs.core.async.close_BANG_.call(null,to);
var state_32284__$1 = state_32284;
var statearr_32309_32369 = state_32284__$1;
(statearr_32309_32369[(2)] = inst_32253);

(statearr_32309_32369[(1)] = (10));


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
});})(c__31978__auto__,jobs,results,process,async))
;
return ((function (switch__31883__auto__,c__31978__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0 = (function (){
var statearr_32310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__);

(statearr_32310[(1)] = (1));

return statearr_32310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1 = (function (state_32284){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32311){if((e32311 instanceof Object)){
var ex__31887__auto__ = e32311;
var statearr_32312_32370 = state_32284;
(statearr_32312_32370[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32371 = state_32284;
state_32284 = G__32371;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__ = function(state_32284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1.call(this,state_32284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__,jobs,results,process,async))
})();
var state__31980__auto__ = (function (){var statearr_32313 = f__31979__auto__.call(null);
(statearr_32313[(6)] = c__31978__auto__);

return statearr_32313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,jobs,results,process,async))
);

return c__31978__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32373 = arguments.length;
switch (G__32373) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32376 = arguments.length;
switch (G__32376) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32379 = arguments.length;
switch (G__32379) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31978__auto___32428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32428,tc,fc){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___32428,tc,fc){
return (function (state_32405){
var state_val_32406 = (state_32405[(1)]);
if((state_val_32406 === (7))){
var inst_32401 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32407_32429 = state_32405__$1;
(statearr_32407_32429[(2)] = inst_32401);

(statearr_32407_32429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (1))){
var state_32405__$1 = state_32405;
var statearr_32408_32430 = state_32405__$1;
(statearr_32408_32430[(2)] = null);

(statearr_32408_32430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (4))){
var inst_32382 = (state_32405[(7)]);
var inst_32382__$1 = (state_32405[(2)]);
var inst_32383 = (inst_32382__$1 == null);
var state_32405__$1 = (function (){var statearr_32409 = state_32405;
(statearr_32409[(7)] = inst_32382__$1);

return statearr_32409;
})();
if(cljs.core.truth_(inst_32383)){
var statearr_32410_32431 = state_32405__$1;
(statearr_32410_32431[(1)] = (5));

} else {
var statearr_32411_32432 = state_32405__$1;
(statearr_32411_32432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (13))){
var state_32405__$1 = state_32405;
var statearr_32412_32433 = state_32405__$1;
(statearr_32412_32433[(2)] = null);

(statearr_32412_32433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (6))){
var inst_32382 = (state_32405[(7)]);
var inst_32388 = p.call(null,inst_32382);
var state_32405__$1 = state_32405;
if(cljs.core.truth_(inst_32388)){
var statearr_32413_32434 = state_32405__$1;
(statearr_32413_32434[(1)] = (9));

} else {
var statearr_32414_32435 = state_32405__$1;
(statearr_32414_32435[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (3))){
var inst_32403 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32405__$1,inst_32403);
} else {
if((state_val_32406 === (12))){
var state_32405__$1 = state_32405;
var statearr_32415_32436 = state_32405__$1;
(statearr_32415_32436[(2)] = null);

(statearr_32415_32436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (2))){
var state_32405__$1 = state_32405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32405__$1,(4),ch);
} else {
if((state_val_32406 === (11))){
var inst_32382 = (state_32405[(7)]);
var inst_32392 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32405__$1,(8),inst_32392,inst_32382);
} else {
if((state_val_32406 === (9))){
var state_32405__$1 = state_32405;
var statearr_32416_32437 = state_32405__$1;
(statearr_32416_32437[(2)] = tc);

(statearr_32416_32437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (5))){
var inst_32385 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32386 = cljs.core.async.close_BANG_.call(null,fc);
var state_32405__$1 = (function (){var statearr_32417 = state_32405;
(statearr_32417[(8)] = inst_32385);

return statearr_32417;
})();
var statearr_32418_32438 = state_32405__$1;
(statearr_32418_32438[(2)] = inst_32386);

(statearr_32418_32438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (14))){
var inst_32399 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32419_32439 = state_32405__$1;
(statearr_32419_32439[(2)] = inst_32399);

(statearr_32419_32439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (10))){
var state_32405__$1 = state_32405;
var statearr_32420_32440 = state_32405__$1;
(statearr_32420_32440[(2)] = fc);

(statearr_32420_32440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (8))){
var inst_32394 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
if(cljs.core.truth_(inst_32394)){
var statearr_32421_32441 = state_32405__$1;
(statearr_32421_32441[(1)] = (12));

} else {
var statearr_32422_32442 = state_32405__$1;
(statearr_32422_32442[(1)] = (13));

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
});})(c__31978__auto___32428,tc,fc))
;
return ((function (switch__31883__auto__,c__31978__auto___32428,tc,fc){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_32423 = [null,null,null,null,null,null,null,null,null];
(statearr_32423[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_32423[(1)] = (1));

return statearr_32423;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_32405){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32424){if((e32424 instanceof Object)){
var ex__31887__auto__ = e32424;
var statearr_32425_32443 = state_32405;
(statearr_32425_32443[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32444 = state_32405;
state_32405 = G__32444;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_32405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_32405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___32428,tc,fc))
})();
var state__31980__auto__ = (function (){var statearr_32426 = f__31979__auto__.call(null);
(statearr_32426[(6)] = c__31978__auto___32428);

return statearr_32426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32428,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__){
return (function (state_32465){
var state_val_32466 = (state_32465[(1)]);
if((state_val_32466 === (7))){
var inst_32461 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32467_32485 = state_32465__$1;
(statearr_32467_32485[(2)] = inst_32461);

(statearr_32467_32485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (1))){
var inst_32445 = init;
var state_32465__$1 = (function (){var statearr_32468 = state_32465;
(statearr_32468[(7)] = inst_32445);

return statearr_32468;
})();
var statearr_32469_32486 = state_32465__$1;
(statearr_32469_32486[(2)] = null);

(statearr_32469_32486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (4))){
var inst_32448 = (state_32465[(8)]);
var inst_32448__$1 = (state_32465[(2)]);
var inst_32449 = (inst_32448__$1 == null);
var state_32465__$1 = (function (){var statearr_32470 = state_32465;
(statearr_32470[(8)] = inst_32448__$1);

return statearr_32470;
})();
if(cljs.core.truth_(inst_32449)){
var statearr_32471_32487 = state_32465__$1;
(statearr_32471_32487[(1)] = (5));

} else {
var statearr_32472_32488 = state_32465__$1;
(statearr_32472_32488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (6))){
var inst_32448 = (state_32465[(8)]);
var inst_32445 = (state_32465[(7)]);
var inst_32452 = (state_32465[(9)]);
var inst_32452__$1 = f.call(null,inst_32445,inst_32448);
var inst_32453 = cljs.core.reduced_QMARK_.call(null,inst_32452__$1);
var state_32465__$1 = (function (){var statearr_32473 = state_32465;
(statearr_32473[(9)] = inst_32452__$1);

return statearr_32473;
})();
if(inst_32453){
var statearr_32474_32489 = state_32465__$1;
(statearr_32474_32489[(1)] = (8));

} else {
var statearr_32475_32490 = state_32465__$1;
(statearr_32475_32490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (3))){
var inst_32463 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32465__$1,inst_32463);
} else {
if((state_val_32466 === (2))){
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32465__$1,(4),ch);
} else {
if((state_val_32466 === (9))){
var inst_32452 = (state_32465[(9)]);
var inst_32445 = inst_32452;
var state_32465__$1 = (function (){var statearr_32476 = state_32465;
(statearr_32476[(7)] = inst_32445);

return statearr_32476;
})();
var statearr_32477_32491 = state_32465__$1;
(statearr_32477_32491[(2)] = null);

(statearr_32477_32491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (5))){
var inst_32445 = (state_32465[(7)]);
var state_32465__$1 = state_32465;
var statearr_32478_32492 = state_32465__$1;
(statearr_32478_32492[(2)] = inst_32445);

(statearr_32478_32492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (10))){
var inst_32459 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32479_32493 = state_32465__$1;
(statearr_32479_32493[(2)] = inst_32459);

(statearr_32479_32493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (8))){
var inst_32452 = (state_32465[(9)]);
var inst_32455 = cljs.core.deref.call(null,inst_32452);
var state_32465__$1 = state_32465;
var statearr_32480_32494 = state_32465__$1;
(statearr_32480_32494[(2)] = inst_32455);

(statearr_32480_32494[(1)] = (10));


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
});})(c__31978__auto__))
;
return ((function (switch__31883__auto__,c__31978__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31884__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31884__auto____0 = (function (){
var statearr_32481 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32481[(0)] = cljs$core$async$reduce_$_state_machine__31884__auto__);

(statearr_32481[(1)] = (1));

return statearr_32481;
});
var cljs$core$async$reduce_$_state_machine__31884__auto____1 = (function (state_32465){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32482){if((e32482 instanceof Object)){
var ex__31887__auto__ = e32482;
var statearr_32483_32495 = state_32465;
(statearr_32483_32495[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32496 = state_32465;
state_32465 = G__32496;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31884__auto__ = function(state_32465){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31884__auto____1.call(this,state_32465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31884__auto____0;
cljs$core$async$reduce_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31884__auto____1;
return cljs$core$async$reduce_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_32484 = f__31979__auto__.call(null);
(statearr_32484[(6)] = c__31978__auto__);

return statearr_32484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,f__$1){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__,f__$1){
return (function (state_32502){
var state_val_32503 = (state_32502[(1)]);
if((state_val_32503 === (1))){
var inst_32497 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32502__$1 = state_32502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32502__$1,(2),inst_32497);
} else {
if((state_val_32503 === (2))){
var inst_32499 = (state_32502[(2)]);
var inst_32500 = f__$1.call(null,inst_32499);
var state_32502__$1 = state_32502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32502__$1,inst_32500);
} else {
return null;
}
}
});})(c__31978__auto__,f__$1))
;
return ((function (switch__31883__auto__,c__31978__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31884__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31884__auto____0 = (function (){
var statearr_32504 = [null,null,null,null,null,null,null];
(statearr_32504[(0)] = cljs$core$async$transduce_$_state_machine__31884__auto__);

(statearr_32504[(1)] = (1));

return statearr_32504;
});
var cljs$core$async$transduce_$_state_machine__31884__auto____1 = (function (state_32502){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32505){if((e32505 instanceof Object)){
var ex__31887__auto__ = e32505;
var statearr_32506_32508 = state_32502;
(statearr_32506_32508[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32509 = state_32502;
state_32502 = G__32509;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31884__auto__ = function(state_32502){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31884__auto____1.call(this,state_32502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31884__auto____0;
cljs$core$async$transduce_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31884__auto____1;
return cljs$core$async$transduce_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__,f__$1))
})();
var state__31980__auto__ = (function (){var statearr_32507 = f__31979__auto__.call(null);
(statearr_32507[(6)] = c__31978__auto__);

return statearr_32507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,f__$1))
);

return c__31978__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32511 = arguments.length;
switch (G__32511) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__){
return (function (state_32536){
var state_val_32537 = (state_32536[(1)]);
if((state_val_32537 === (7))){
var inst_32518 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
var statearr_32538_32559 = state_32536__$1;
(statearr_32538_32559[(2)] = inst_32518);

(statearr_32538_32559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (1))){
var inst_32512 = cljs.core.seq.call(null,coll);
var inst_32513 = inst_32512;
var state_32536__$1 = (function (){var statearr_32539 = state_32536;
(statearr_32539[(7)] = inst_32513);

return statearr_32539;
})();
var statearr_32540_32560 = state_32536__$1;
(statearr_32540_32560[(2)] = null);

(statearr_32540_32560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (4))){
var inst_32513 = (state_32536[(7)]);
var inst_32516 = cljs.core.first.call(null,inst_32513);
var state_32536__$1 = state_32536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32536__$1,(7),ch,inst_32516);
} else {
if((state_val_32537 === (13))){
var inst_32530 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
var statearr_32541_32561 = state_32536__$1;
(statearr_32541_32561[(2)] = inst_32530);

(statearr_32541_32561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (6))){
var inst_32521 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
if(cljs.core.truth_(inst_32521)){
var statearr_32542_32562 = state_32536__$1;
(statearr_32542_32562[(1)] = (8));

} else {
var statearr_32543_32563 = state_32536__$1;
(statearr_32543_32563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (3))){
var inst_32534 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32536__$1,inst_32534);
} else {
if((state_val_32537 === (12))){
var state_32536__$1 = state_32536;
var statearr_32544_32564 = state_32536__$1;
(statearr_32544_32564[(2)] = null);

(statearr_32544_32564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (2))){
var inst_32513 = (state_32536[(7)]);
var state_32536__$1 = state_32536;
if(cljs.core.truth_(inst_32513)){
var statearr_32545_32565 = state_32536__$1;
(statearr_32545_32565[(1)] = (4));

} else {
var statearr_32546_32566 = state_32536__$1;
(statearr_32546_32566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (11))){
var inst_32527 = cljs.core.async.close_BANG_.call(null,ch);
var state_32536__$1 = state_32536;
var statearr_32547_32567 = state_32536__$1;
(statearr_32547_32567[(2)] = inst_32527);

(statearr_32547_32567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (9))){
var state_32536__$1 = state_32536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32548_32568 = state_32536__$1;
(statearr_32548_32568[(1)] = (11));

} else {
var statearr_32549_32569 = state_32536__$1;
(statearr_32549_32569[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (5))){
var inst_32513 = (state_32536[(7)]);
var state_32536__$1 = state_32536;
var statearr_32550_32570 = state_32536__$1;
(statearr_32550_32570[(2)] = inst_32513);

(statearr_32550_32570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (10))){
var inst_32532 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
var statearr_32551_32571 = state_32536__$1;
(statearr_32551_32571[(2)] = inst_32532);

(statearr_32551_32571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (8))){
var inst_32513 = (state_32536[(7)]);
var inst_32523 = cljs.core.next.call(null,inst_32513);
var inst_32513__$1 = inst_32523;
var state_32536__$1 = (function (){var statearr_32552 = state_32536;
(statearr_32552[(7)] = inst_32513__$1);

return statearr_32552;
})();
var statearr_32553_32572 = state_32536__$1;
(statearr_32553_32572[(2)] = null);

(statearr_32553_32572[(1)] = (2));


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
});})(c__31978__auto__))
;
return ((function (switch__31883__auto__,c__31978__auto__){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_32554 = [null,null,null,null,null,null,null,null];
(statearr_32554[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_32554[(1)] = (1));

return statearr_32554;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_32536){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32555){if((e32555 instanceof Object)){
var ex__31887__auto__ = e32555;
var statearr_32556_32573 = state_32536;
(statearr_32556_32573[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32574 = state_32536;
state_32536 = G__32574;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_32536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_32536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_32557 = f__31979__auto__.call(null);
(statearr_32557[(6)] = c__31978__auto__);

return statearr_32557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32575 = (function (ch,cs,meta32576){
this.ch = ch;
this.cs = cs;
this.meta32576 = meta32576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32577,meta32576__$1){
var self__ = this;
var _32577__$1 = this;
return (new cljs.core.async.t_cljs$core$async32575(self__.ch,self__.cs,meta32576__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32577){
var self__ = this;
var _32577__$1 = this;
return self__.meta32576;
});})(cs))
;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32575.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32576","meta32576",1581254247,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32575";

cljs.core.async.t_cljs$core$async32575.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32575");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32575.
 */
cljs.core.async.__GT_t_cljs$core$async32575 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32575(ch__$1,cs__$1,meta32576){
return (new cljs.core.async.t_cljs$core$async32575(ch__$1,cs__$1,meta32576));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32575(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31978__auto___32797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32797,cs,m,dchan,dctr,done){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___32797,cs,m,dchan,dctr,done){
return (function (state_32712){
var state_val_32713 = (state_32712[(1)]);
if((state_val_32713 === (7))){
var inst_32708 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32714_32798 = state_32712__$1;
(statearr_32714_32798[(2)] = inst_32708);

(statearr_32714_32798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (20))){
var inst_32611 = (state_32712[(7)]);
var inst_32623 = cljs.core.first.call(null,inst_32611);
var inst_32624 = cljs.core.nth.call(null,inst_32623,(0),null);
var inst_32625 = cljs.core.nth.call(null,inst_32623,(1),null);
var state_32712__$1 = (function (){var statearr_32715 = state_32712;
(statearr_32715[(8)] = inst_32624);

return statearr_32715;
})();
if(cljs.core.truth_(inst_32625)){
var statearr_32716_32799 = state_32712__$1;
(statearr_32716_32799[(1)] = (22));

} else {
var statearr_32717_32800 = state_32712__$1;
(statearr_32717_32800[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (27))){
var inst_32655 = (state_32712[(9)]);
var inst_32580 = (state_32712[(10)]);
var inst_32653 = (state_32712[(11)]);
var inst_32660 = (state_32712[(12)]);
var inst_32660__$1 = cljs.core._nth.call(null,inst_32653,inst_32655);
var inst_32661 = cljs.core.async.put_BANG_.call(null,inst_32660__$1,inst_32580,done);
var state_32712__$1 = (function (){var statearr_32718 = state_32712;
(statearr_32718[(12)] = inst_32660__$1);

return statearr_32718;
})();
if(cljs.core.truth_(inst_32661)){
var statearr_32719_32801 = state_32712__$1;
(statearr_32719_32801[(1)] = (30));

} else {
var statearr_32720_32802 = state_32712__$1;
(statearr_32720_32802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (1))){
var state_32712__$1 = state_32712;
var statearr_32721_32803 = state_32712__$1;
(statearr_32721_32803[(2)] = null);

(statearr_32721_32803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (24))){
var inst_32611 = (state_32712[(7)]);
var inst_32630 = (state_32712[(2)]);
var inst_32631 = cljs.core.next.call(null,inst_32611);
var inst_32589 = inst_32631;
var inst_32590 = null;
var inst_32591 = (0);
var inst_32592 = (0);
var state_32712__$1 = (function (){var statearr_32722 = state_32712;
(statearr_32722[(13)] = inst_32589);

(statearr_32722[(14)] = inst_32592);

(statearr_32722[(15)] = inst_32630);

(statearr_32722[(16)] = inst_32591);

(statearr_32722[(17)] = inst_32590);

return statearr_32722;
})();
var statearr_32723_32804 = state_32712__$1;
(statearr_32723_32804[(2)] = null);

(statearr_32723_32804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (39))){
var state_32712__$1 = state_32712;
var statearr_32727_32805 = state_32712__$1;
(statearr_32727_32805[(2)] = null);

(statearr_32727_32805[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (4))){
var inst_32580 = (state_32712[(10)]);
var inst_32580__$1 = (state_32712[(2)]);
var inst_32581 = (inst_32580__$1 == null);
var state_32712__$1 = (function (){var statearr_32728 = state_32712;
(statearr_32728[(10)] = inst_32580__$1);

return statearr_32728;
})();
if(cljs.core.truth_(inst_32581)){
var statearr_32729_32806 = state_32712__$1;
(statearr_32729_32806[(1)] = (5));

} else {
var statearr_32730_32807 = state_32712__$1;
(statearr_32730_32807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (15))){
var inst_32589 = (state_32712[(13)]);
var inst_32592 = (state_32712[(14)]);
var inst_32591 = (state_32712[(16)]);
var inst_32590 = (state_32712[(17)]);
var inst_32607 = (state_32712[(2)]);
var inst_32608 = (inst_32592 + (1));
var tmp32724 = inst_32589;
var tmp32725 = inst_32591;
var tmp32726 = inst_32590;
var inst_32589__$1 = tmp32724;
var inst_32590__$1 = tmp32726;
var inst_32591__$1 = tmp32725;
var inst_32592__$1 = inst_32608;
var state_32712__$1 = (function (){var statearr_32731 = state_32712;
(statearr_32731[(18)] = inst_32607);

(statearr_32731[(13)] = inst_32589__$1);

(statearr_32731[(14)] = inst_32592__$1);

(statearr_32731[(16)] = inst_32591__$1);

(statearr_32731[(17)] = inst_32590__$1);

return statearr_32731;
})();
var statearr_32732_32808 = state_32712__$1;
(statearr_32732_32808[(2)] = null);

(statearr_32732_32808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (21))){
var inst_32634 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32736_32809 = state_32712__$1;
(statearr_32736_32809[(2)] = inst_32634);

(statearr_32736_32809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (31))){
var inst_32660 = (state_32712[(12)]);
var inst_32664 = done.call(null,null);
var inst_32665 = cljs.core.async.untap_STAR_.call(null,m,inst_32660);
var state_32712__$1 = (function (){var statearr_32737 = state_32712;
(statearr_32737[(19)] = inst_32664);

return statearr_32737;
})();
var statearr_32738_32810 = state_32712__$1;
(statearr_32738_32810[(2)] = inst_32665);

(statearr_32738_32810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (32))){
var inst_32655 = (state_32712[(9)]);
var inst_32654 = (state_32712[(20)]);
var inst_32652 = (state_32712[(21)]);
var inst_32653 = (state_32712[(11)]);
var inst_32667 = (state_32712[(2)]);
var inst_32668 = (inst_32655 + (1));
var tmp32733 = inst_32654;
var tmp32734 = inst_32652;
var tmp32735 = inst_32653;
var inst_32652__$1 = tmp32734;
var inst_32653__$1 = tmp32735;
var inst_32654__$1 = tmp32733;
var inst_32655__$1 = inst_32668;
var state_32712__$1 = (function (){var statearr_32739 = state_32712;
(statearr_32739[(22)] = inst_32667);

(statearr_32739[(9)] = inst_32655__$1);

(statearr_32739[(20)] = inst_32654__$1);

(statearr_32739[(21)] = inst_32652__$1);

(statearr_32739[(11)] = inst_32653__$1);

return statearr_32739;
})();
var statearr_32740_32811 = state_32712__$1;
(statearr_32740_32811[(2)] = null);

(statearr_32740_32811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (40))){
var inst_32680 = (state_32712[(23)]);
var inst_32684 = done.call(null,null);
var inst_32685 = cljs.core.async.untap_STAR_.call(null,m,inst_32680);
var state_32712__$1 = (function (){var statearr_32741 = state_32712;
(statearr_32741[(24)] = inst_32684);

return statearr_32741;
})();
var statearr_32742_32812 = state_32712__$1;
(statearr_32742_32812[(2)] = inst_32685);

(statearr_32742_32812[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (33))){
var inst_32671 = (state_32712[(25)]);
var inst_32673 = cljs.core.chunked_seq_QMARK_.call(null,inst_32671);
var state_32712__$1 = state_32712;
if(inst_32673){
var statearr_32743_32813 = state_32712__$1;
(statearr_32743_32813[(1)] = (36));

} else {
var statearr_32744_32814 = state_32712__$1;
(statearr_32744_32814[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (13))){
var inst_32601 = (state_32712[(26)]);
var inst_32604 = cljs.core.async.close_BANG_.call(null,inst_32601);
var state_32712__$1 = state_32712;
var statearr_32745_32815 = state_32712__$1;
(statearr_32745_32815[(2)] = inst_32604);

(statearr_32745_32815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (22))){
var inst_32624 = (state_32712[(8)]);
var inst_32627 = cljs.core.async.close_BANG_.call(null,inst_32624);
var state_32712__$1 = state_32712;
var statearr_32746_32816 = state_32712__$1;
(statearr_32746_32816[(2)] = inst_32627);

(statearr_32746_32816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (36))){
var inst_32671 = (state_32712[(25)]);
var inst_32675 = cljs.core.chunk_first.call(null,inst_32671);
var inst_32676 = cljs.core.chunk_rest.call(null,inst_32671);
var inst_32677 = cljs.core.count.call(null,inst_32675);
var inst_32652 = inst_32676;
var inst_32653 = inst_32675;
var inst_32654 = inst_32677;
var inst_32655 = (0);
var state_32712__$1 = (function (){var statearr_32747 = state_32712;
(statearr_32747[(9)] = inst_32655);

(statearr_32747[(20)] = inst_32654);

(statearr_32747[(21)] = inst_32652);

(statearr_32747[(11)] = inst_32653);

return statearr_32747;
})();
var statearr_32748_32817 = state_32712__$1;
(statearr_32748_32817[(2)] = null);

(statearr_32748_32817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (41))){
var inst_32671 = (state_32712[(25)]);
var inst_32687 = (state_32712[(2)]);
var inst_32688 = cljs.core.next.call(null,inst_32671);
var inst_32652 = inst_32688;
var inst_32653 = null;
var inst_32654 = (0);
var inst_32655 = (0);
var state_32712__$1 = (function (){var statearr_32749 = state_32712;
(statearr_32749[(9)] = inst_32655);

(statearr_32749[(20)] = inst_32654);

(statearr_32749[(21)] = inst_32652);

(statearr_32749[(11)] = inst_32653);

(statearr_32749[(27)] = inst_32687);

return statearr_32749;
})();
var statearr_32750_32818 = state_32712__$1;
(statearr_32750_32818[(2)] = null);

(statearr_32750_32818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (43))){
var state_32712__$1 = state_32712;
var statearr_32751_32819 = state_32712__$1;
(statearr_32751_32819[(2)] = null);

(statearr_32751_32819[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (29))){
var inst_32696 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32752_32820 = state_32712__$1;
(statearr_32752_32820[(2)] = inst_32696);

(statearr_32752_32820[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (44))){
var inst_32705 = (state_32712[(2)]);
var state_32712__$1 = (function (){var statearr_32753 = state_32712;
(statearr_32753[(28)] = inst_32705);

return statearr_32753;
})();
var statearr_32754_32821 = state_32712__$1;
(statearr_32754_32821[(2)] = null);

(statearr_32754_32821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (6))){
var inst_32644 = (state_32712[(29)]);
var inst_32643 = cljs.core.deref.call(null,cs);
var inst_32644__$1 = cljs.core.keys.call(null,inst_32643);
var inst_32645 = cljs.core.count.call(null,inst_32644__$1);
var inst_32646 = cljs.core.reset_BANG_.call(null,dctr,inst_32645);
var inst_32651 = cljs.core.seq.call(null,inst_32644__$1);
var inst_32652 = inst_32651;
var inst_32653 = null;
var inst_32654 = (0);
var inst_32655 = (0);
var state_32712__$1 = (function (){var statearr_32755 = state_32712;
(statearr_32755[(9)] = inst_32655);

(statearr_32755[(20)] = inst_32654);

(statearr_32755[(29)] = inst_32644__$1);

(statearr_32755[(21)] = inst_32652);

(statearr_32755[(30)] = inst_32646);

(statearr_32755[(11)] = inst_32653);

return statearr_32755;
})();
var statearr_32756_32822 = state_32712__$1;
(statearr_32756_32822[(2)] = null);

(statearr_32756_32822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (28))){
var inst_32671 = (state_32712[(25)]);
var inst_32652 = (state_32712[(21)]);
var inst_32671__$1 = cljs.core.seq.call(null,inst_32652);
var state_32712__$1 = (function (){var statearr_32757 = state_32712;
(statearr_32757[(25)] = inst_32671__$1);

return statearr_32757;
})();
if(inst_32671__$1){
var statearr_32758_32823 = state_32712__$1;
(statearr_32758_32823[(1)] = (33));

} else {
var statearr_32759_32824 = state_32712__$1;
(statearr_32759_32824[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (25))){
var inst_32655 = (state_32712[(9)]);
var inst_32654 = (state_32712[(20)]);
var inst_32657 = (inst_32655 < inst_32654);
var inst_32658 = inst_32657;
var state_32712__$1 = state_32712;
if(cljs.core.truth_(inst_32658)){
var statearr_32760_32825 = state_32712__$1;
(statearr_32760_32825[(1)] = (27));

} else {
var statearr_32761_32826 = state_32712__$1;
(statearr_32761_32826[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (34))){
var state_32712__$1 = state_32712;
var statearr_32762_32827 = state_32712__$1;
(statearr_32762_32827[(2)] = null);

(statearr_32762_32827[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (17))){
var state_32712__$1 = state_32712;
var statearr_32763_32828 = state_32712__$1;
(statearr_32763_32828[(2)] = null);

(statearr_32763_32828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (3))){
var inst_32710 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32712__$1,inst_32710);
} else {
if((state_val_32713 === (12))){
var inst_32639 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32764_32829 = state_32712__$1;
(statearr_32764_32829[(2)] = inst_32639);

(statearr_32764_32829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (2))){
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32712__$1,(4),ch);
} else {
if((state_val_32713 === (23))){
var state_32712__$1 = state_32712;
var statearr_32765_32830 = state_32712__$1;
(statearr_32765_32830[(2)] = null);

(statearr_32765_32830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (35))){
var inst_32694 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32766_32831 = state_32712__$1;
(statearr_32766_32831[(2)] = inst_32694);

(statearr_32766_32831[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (19))){
var inst_32611 = (state_32712[(7)]);
var inst_32615 = cljs.core.chunk_first.call(null,inst_32611);
var inst_32616 = cljs.core.chunk_rest.call(null,inst_32611);
var inst_32617 = cljs.core.count.call(null,inst_32615);
var inst_32589 = inst_32616;
var inst_32590 = inst_32615;
var inst_32591 = inst_32617;
var inst_32592 = (0);
var state_32712__$1 = (function (){var statearr_32767 = state_32712;
(statearr_32767[(13)] = inst_32589);

(statearr_32767[(14)] = inst_32592);

(statearr_32767[(16)] = inst_32591);

(statearr_32767[(17)] = inst_32590);

return statearr_32767;
})();
var statearr_32768_32832 = state_32712__$1;
(statearr_32768_32832[(2)] = null);

(statearr_32768_32832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (11))){
var inst_32589 = (state_32712[(13)]);
var inst_32611 = (state_32712[(7)]);
var inst_32611__$1 = cljs.core.seq.call(null,inst_32589);
var state_32712__$1 = (function (){var statearr_32769 = state_32712;
(statearr_32769[(7)] = inst_32611__$1);

return statearr_32769;
})();
if(inst_32611__$1){
var statearr_32770_32833 = state_32712__$1;
(statearr_32770_32833[(1)] = (16));

} else {
var statearr_32771_32834 = state_32712__$1;
(statearr_32771_32834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (9))){
var inst_32641 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32772_32835 = state_32712__$1;
(statearr_32772_32835[(2)] = inst_32641);

(statearr_32772_32835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (5))){
var inst_32587 = cljs.core.deref.call(null,cs);
var inst_32588 = cljs.core.seq.call(null,inst_32587);
var inst_32589 = inst_32588;
var inst_32590 = null;
var inst_32591 = (0);
var inst_32592 = (0);
var state_32712__$1 = (function (){var statearr_32773 = state_32712;
(statearr_32773[(13)] = inst_32589);

(statearr_32773[(14)] = inst_32592);

(statearr_32773[(16)] = inst_32591);

(statearr_32773[(17)] = inst_32590);

return statearr_32773;
})();
var statearr_32774_32836 = state_32712__$1;
(statearr_32774_32836[(2)] = null);

(statearr_32774_32836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (14))){
var state_32712__$1 = state_32712;
var statearr_32775_32837 = state_32712__$1;
(statearr_32775_32837[(2)] = null);

(statearr_32775_32837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (45))){
var inst_32702 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32776_32838 = state_32712__$1;
(statearr_32776_32838[(2)] = inst_32702);

(statearr_32776_32838[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (26))){
var inst_32644 = (state_32712[(29)]);
var inst_32698 = (state_32712[(2)]);
var inst_32699 = cljs.core.seq.call(null,inst_32644);
var state_32712__$1 = (function (){var statearr_32777 = state_32712;
(statearr_32777[(31)] = inst_32698);

return statearr_32777;
})();
if(inst_32699){
var statearr_32778_32839 = state_32712__$1;
(statearr_32778_32839[(1)] = (42));

} else {
var statearr_32779_32840 = state_32712__$1;
(statearr_32779_32840[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (16))){
var inst_32611 = (state_32712[(7)]);
var inst_32613 = cljs.core.chunked_seq_QMARK_.call(null,inst_32611);
var state_32712__$1 = state_32712;
if(inst_32613){
var statearr_32780_32841 = state_32712__$1;
(statearr_32780_32841[(1)] = (19));

} else {
var statearr_32781_32842 = state_32712__$1;
(statearr_32781_32842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (38))){
var inst_32691 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32782_32843 = state_32712__$1;
(statearr_32782_32843[(2)] = inst_32691);

(statearr_32782_32843[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (30))){
var state_32712__$1 = state_32712;
var statearr_32783_32844 = state_32712__$1;
(statearr_32783_32844[(2)] = null);

(statearr_32783_32844[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (10))){
var inst_32592 = (state_32712[(14)]);
var inst_32590 = (state_32712[(17)]);
var inst_32600 = cljs.core._nth.call(null,inst_32590,inst_32592);
var inst_32601 = cljs.core.nth.call(null,inst_32600,(0),null);
var inst_32602 = cljs.core.nth.call(null,inst_32600,(1),null);
var state_32712__$1 = (function (){var statearr_32784 = state_32712;
(statearr_32784[(26)] = inst_32601);

return statearr_32784;
})();
if(cljs.core.truth_(inst_32602)){
var statearr_32785_32845 = state_32712__$1;
(statearr_32785_32845[(1)] = (13));

} else {
var statearr_32786_32846 = state_32712__$1;
(statearr_32786_32846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (18))){
var inst_32637 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32787_32847 = state_32712__$1;
(statearr_32787_32847[(2)] = inst_32637);

(statearr_32787_32847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (42))){
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32712__$1,(45),dchan);
} else {
if((state_val_32713 === (37))){
var inst_32671 = (state_32712[(25)]);
var inst_32680 = (state_32712[(23)]);
var inst_32580 = (state_32712[(10)]);
var inst_32680__$1 = cljs.core.first.call(null,inst_32671);
var inst_32681 = cljs.core.async.put_BANG_.call(null,inst_32680__$1,inst_32580,done);
var state_32712__$1 = (function (){var statearr_32788 = state_32712;
(statearr_32788[(23)] = inst_32680__$1);

return statearr_32788;
})();
if(cljs.core.truth_(inst_32681)){
var statearr_32789_32848 = state_32712__$1;
(statearr_32789_32848[(1)] = (39));

} else {
var statearr_32790_32849 = state_32712__$1;
(statearr_32790_32849[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (8))){
var inst_32592 = (state_32712[(14)]);
var inst_32591 = (state_32712[(16)]);
var inst_32594 = (inst_32592 < inst_32591);
var inst_32595 = inst_32594;
var state_32712__$1 = state_32712;
if(cljs.core.truth_(inst_32595)){
var statearr_32791_32850 = state_32712__$1;
(statearr_32791_32850[(1)] = (10));

} else {
var statearr_32792_32851 = state_32712__$1;
(statearr_32792_32851[(1)] = (11));

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
});})(c__31978__auto___32797,cs,m,dchan,dctr,done))
;
return ((function (switch__31883__auto__,c__31978__auto___32797,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31884__auto__ = null;
var cljs$core$async$mult_$_state_machine__31884__auto____0 = (function (){
var statearr_32793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32793[(0)] = cljs$core$async$mult_$_state_machine__31884__auto__);

(statearr_32793[(1)] = (1));

return statearr_32793;
});
var cljs$core$async$mult_$_state_machine__31884__auto____1 = (function (state_32712){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e32794){if((e32794 instanceof Object)){
var ex__31887__auto__ = e32794;
var statearr_32795_32852 = state_32712;
(statearr_32795_32852[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32853 = state_32712;
state_32712 = G__32853;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31884__auto__ = function(state_32712){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31884__auto____1.call(this,state_32712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31884__auto____0;
cljs$core$async$mult_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31884__auto____1;
return cljs$core$async$mult_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___32797,cs,m,dchan,dctr,done))
})();
var state__31980__auto__ = (function (){var statearr_32796 = f__31979__auto__.call(null);
(statearr_32796[(6)] = c__31978__auto___32797);

return statearr_32796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32797,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32855 = arguments.length;
switch (G__32855) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32867 = arguments.length;
var i__4731__auto___32868 = (0);
while(true){
if((i__4731__auto___32868 < len__4730__auto___32867)){
args__4736__auto__.push((arguments[i__4731__auto___32868]));

var G__32869 = (i__4731__auto___32868 + (1));
i__4731__auto___32868 = G__32869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32861){
var map__32862 = p__32861;
var map__32862__$1 = (((((!((map__32862 == null))))?(((((map__32862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32862):map__32862);
var opts = map__32862__$1;
var statearr_32864_32870 = state;
(statearr_32864_32870[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__32862,map__32862__$1,opts){
return (function (val){
var statearr_32865_32871 = state;
(statearr_32865_32871[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32862,map__32862__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32866_32872 = state;
(statearr_32866_32872[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32857){
var G__32858 = cljs.core.first.call(null,seq32857);
var seq32857__$1 = cljs.core.next.call(null,seq32857);
var G__32859 = cljs.core.first.call(null,seq32857__$1);
var seq32857__$2 = cljs.core.next.call(null,seq32857__$1);
var G__32860 = cljs.core.first.call(null,seq32857__$2);
var seq32857__$3 = cljs.core.next.call(null,seq32857__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32858,G__32859,G__32860,seq32857__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32873 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32874){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32874 = meta32874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32875,meta32874__$1){
var self__ = this;
var _32875__$1 = this;
return (new cljs.core.async.t_cljs$core$async32873(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32874__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32875){
var self__ = this;
var _32875__$1 = this;
return self__.meta32874;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32873.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32874","meta32874",1473211415,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32873";

cljs.core.async.t_cljs$core$async32873.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32873");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32873.
 */
cljs.core.async.__GT_t_cljs$core$async32873 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32873(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32874){
return (new cljs.core.async.t_cljs$core$async32873(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32874));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32873(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31978__auto___33037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___33037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32977){
var state_val_32978 = (state_32977[(1)]);
if((state_val_32978 === (7))){
var inst_32892 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
var statearr_32979_33038 = state_32977__$1;
(statearr_32979_33038[(2)] = inst_32892);

(statearr_32979_33038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (20))){
var inst_32904 = (state_32977[(7)]);
var state_32977__$1 = state_32977;
var statearr_32980_33039 = state_32977__$1;
(statearr_32980_33039[(2)] = inst_32904);

(statearr_32980_33039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (27))){
var state_32977__$1 = state_32977;
var statearr_32981_33040 = state_32977__$1;
(statearr_32981_33040[(2)] = null);

(statearr_32981_33040[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (1))){
var inst_32879 = (state_32977[(8)]);
var inst_32879__$1 = calc_state.call(null);
var inst_32881 = (inst_32879__$1 == null);
var inst_32882 = cljs.core.not.call(null,inst_32881);
var state_32977__$1 = (function (){var statearr_32982 = state_32977;
(statearr_32982[(8)] = inst_32879__$1);

return statearr_32982;
})();
if(inst_32882){
var statearr_32983_33041 = state_32977__$1;
(statearr_32983_33041[(1)] = (2));

} else {
var statearr_32984_33042 = state_32977__$1;
(statearr_32984_33042[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (24))){
var inst_32951 = (state_32977[(9)]);
var inst_32928 = (state_32977[(10)]);
var inst_32937 = (state_32977[(11)]);
var inst_32951__$1 = inst_32928.call(null,inst_32937);
var state_32977__$1 = (function (){var statearr_32985 = state_32977;
(statearr_32985[(9)] = inst_32951__$1);

return statearr_32985;
})();
if(cljs.core.truth_(inst_32951__$1)){
var statearr_32986_33043 = state_32977__$1;
(statearr_32986_33043[(1)] = (29));

} else {
var statearr_32987_33044 = state_32977__$1;
(statearr_32987_33044[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (4))){
var inst_32895 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
if(cljs.core.truth_(inst_32895)){
var statearr_32988_33045 = state_32977__$1;
(statearr_32988_33045[(1)] = (8));

} else {
var statearr_32989_33046 = state_32977__$1;
(statearr_32989_33046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (15))){
var inst_32922 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
if(cljs.core.truth_(inst_32922)){
var statearr_32990_33047 = state_32977__$1;
(statearr_32990_33047[(1)] = (19));

} else {
var statearr_32991_33048 = state_32977__$1;
(statearr_32991_33048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (21))){
var inst_32927 = (state_32977[(12)]);
var inst_32927__$1 = (state_32977[(2)]);
var inst_32928 = cljs.core.get.call(null,inst_32927__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32929 = cljs.core.get.call(null,inst_32927__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32930 = cljs.core.get.call(null,inst_32927__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32977__$1 = (function (){var statearr_32992 = state_32977;
(statearr_32992[(13)] = inst_32929);

(statearr_32992[(10)] = inst_32928);

(statearr_32992[(12)] = inst_32927__$1);

return statearr_32992;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32977__$1,(22),inst_32930);
} else {
if((state_val_32978 === (31))){
var inst_32959 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
if(cljs.core.truth_(inst_32959)){
var statearr_32993_33049 = state_32977__$1;
(statearr_32993_33049[(1)] = (32));

} else {
var statearr_32994_33050 = state_32977__$1;
(statearr_32994_33050[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (32))){
var inst_32936 = (state_32977[(14)]);
var state_32977__$1 = state_32977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32977__$1,(35),out,inst_32936);
} else {
if((state_val_32978 === (33))){
var inst_32927 = (state_32977[(12)]);
var inst_32904 = inst_32927;
var state_32977__$1 = (function (){var statearr_32995 = state_32977;
(statearr_32995[(7)] = inst_32904);

return statearr_32995;
})();
var statearr_32996_33051 = state_32977__$1;
(statearr_32996_33051[(2)] = null);

(statearr_32996_33051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (13))){
var inst_32904 = (state_32977[(7)]);
var inst_32911 = inst_32904.cljs$lang$protocol_mask$partition0$;
var inst_32912 = (inst_32911 & (64));
var inst_32913 = inst_32904.cljs$core$ISeq$;
var inst_32914 = (cljs.core.PROTOCOL_SENTINEL === inst_32913);
var inst_32915 = ((inst_32912) || (inst_32914));
var state_32977__$1 = state_32977;
if(cljs.core.truth_(inst_32915)){
var statearr_32997_33052 = state_32977__$1;
(statearr_32997_33052[(1)] = (16));

} else {
var statearr_32998_33053 = state_32977__$1;
(statearr_32998_33053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (22))){
var inst_32936 = (state_32977[(14)]);
var inst_32937 = (state_32977[(11)]);
var inst_32935 = (state_32977[(2)]);
var inst_32936__$1 = cljs.core.nth.call(null,inst_32935,(0),null);
var inst_32937__$1 = cljs.core.nth.call(null,inst_32935,(1),null);
var inst_32938 = (inst_32936__$1 == null);
var inst_32939 = cljs.core._EQ_.call(null,inst_32937__$1,change);
var inst_32940 = ((inst_32938) || (inst_32939));
var state_32977__$1 = (function (){var statearr_32999 = state_32977;
(statearr_32999[(14)] = inst_32936__$1);

(statearr_32999[(11)] = inst_32937__$1);

return statearr_32999;
})();
if(cljs.core.truth_(inst_32940)){
var statearr_33000_33054 = state_32977__$1;
(statearr_33000_33054[(1)] = (23));

} else {
var statearr_33001_33055 = state_32977__$1;
(statearr_33001_33055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (36))){
var inst_32927 = (state_32977[(12)]);
var inst_32904 = inst_32927;
var state_32977__$1 = (function (){var statearr_33002 = state_32977;
(statearr_33002[(7)] = inst_32904);

return statearr_33002;
})();
var statearr_33003_33056 = state_32977__$1;
(statearr_33003_33056[(2)] = null);

(statearr_33003_33056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (29))){
var inst_32951 = (state_32977[(9)]);
var state_32977__$1 = state_32977;
var statearr_33004_33057 = state_32977__$1;
(statearr_33004_33057[(2)] = inst_32951);

(statearr_33004_33057[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (6))){
var state_32977__$1 = state_32977;
var statearr_33005_33058 = state_32977__$1;
(statearr_33005_33058[(2)] = false);

(statearr_33005_33058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (28))){
var inst_32947 = (state_32977[(2)]);
var inst_32948 = calc_state.call(null);
var inst_32904 = inst_32948;
var state_32977__$1 = (function (){var statearr_33006 = state_32977;
(statearr_33006[(15)] = inst_32947);

(statearr_33006[(7)] = inst_32904);

return statearr_33006;
})();
var statearr_33007_33059 = state_32977__$1;
(statearr_33007_33059[(2)] = null);

(statearr_33007_33059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (25))){
var inst_32973 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
var statearr_33008_33060 = state_32977__$1;
(statearr_33008_33060[(2)] = inst_32973);

(statearr_33008_33060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (34))){
var inst_32971 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
var statearr_33009_33061 = state_32977__$1;
(statearr_33009_33061[(2)] = inst_32971);

(statearr_33009_33061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (17))){
var state_32977__$1 = state_32977;
var statearr_33010_33062 = state_32977__$1;
(statearr_33010_33062[(2)] = false);

(statearr_33010_33062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (3))){
var state_32977__$1 = state_32977;
var statearr_33011_33063 = state_32977__$1;
(statearr_33011_33063[(2)] = false);

(statearr_33011_33063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (12))){
var inst_32975 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32977__$1,inst_32975);
} else {
if((state_val_32978 === (2))){
var inst_32879 = (state_32977[(8)]);
var inst_32884 = inst_32879.cljs$lang$protocol_mask$partition0$;
var inst_32885 = (inst_32884 & (64));
var inst_32886 = inst_32879.cljs$core$ISeq$;
var inst_32887 = (cljs.core.PROTOCOL_SENTINEL === inst_32886);
var inst_32888 = ((inst_32885) || (inst_32887));
var state_32977__$1 = state_32977;
if(cljs.core.truth_(inst_32888)){
var statearr_33012_33064 = state_32977__$1;
(statearr_33012_33064[(1)] = (5));

} else {
var statearr_33013_33065 = state_32977__$1;
(statearr_33013_33065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (23))){
var inst_32936 = (state_32977[(14)]);
var inst_32942 = (inst_32936 == null);
var state_32977__$1 = state_32977;
if(cljs.core.truth_(inst_32942)){
var statearr_33014_33066 = state_32977__$1;
(statearr_33014_33066[(1)] = (26));

} else {
var statearr_33015_33067 = state_32977__$1;
(statearr_33015_33067[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (35))){
var inst_32962 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
if(cljs.core.truth_(inst_32962)){
var statearr_33016_33068 = state_32977__$1;
(statearr_33016_33068[(1)] = (36));

} else {
var statearr_33017_33069 = state_32977__$1;
(statearr_33017_33069[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (19))){
var inst_32904 = (state_32977[(7)]);
var inst_32924 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32904);
var state_32977__$1 = state_32977;
var statearr_33018_33070 = state_32977__$1;
(statearr_33018_33070[(2)] = inst_32924);

(statearr_33018_33070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (11))){
var inst_32904 = (state_32977[(7)]);
var inst_32908 = (inst_32904 == null);
var inst_32909 = cljs.core.not.call(null,inst_32908);
var state_32977__$1 = state_32977;
if(inst_32909){
var statearr_33019_33071 = state_32977__$1;
(statearr_33019_33071[(1)] = (13));

} else {
var statearr_33020_33072 = state_32977__$1;
(statearr_33020_33072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (9))){
var inst_32879 = (state_32977[(8)]);
var state_32977__$1 = state_32977;
var statearr_33021_33073 = state_32977__$1;
(statearr_33021_33073[(2)] = inst_32879);

(statearr_33021_33073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (5))){
var state_32977__$1 = state_32977;
var statearr_33022_33074 = state_32977__$1;
(statearr_33022_33074[(2)] = true);

(statearr_33022_33074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (14))){
var state_32977__$1 = state_32977;
var statearr_33023_33075 = state_32977__$1;
(statearr_33023_33075[(2)] = false);

(statearr_33023_33075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (26))){
var inst_32937 = (state_32977[(11)]);
var inst_32944 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32937);
var state_32977__$1 = state_32977;
var statearr_33024_33076 = state_32977__$1;
(statearr_33024_33076[(2)] = inst_32944);

(statearr_33024_33076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (16))){
var state_32977__$1 = state_32977;
var statearr_33025_33077 = state_32977__$1;
(statearr_33025_33077[(2)] = true);

(statearr_33025_33077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (38))){
var inst_32967 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
var statearr_33026_33078 = state_32977__$1;
(statearr_33026_33078[(2)] = inst_32967);

(statearr_33026_33078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (30))){
var inst_32929 = (state_32977[(13)]);
var inst_32928 = (state_32977[(10)]);
var inst_32937 = (state_32977[(11)]);
var inst_32954 = cljs.core.empty_QMARK_.call(null,inst_32928);
var inst_32955 = inst_32929.call(null,inst_32937);
var inst_32956 = cljs.core.not.call(null,inst_32955);
var inst_32957 = ((inst_32954) && (inst_32956));
var state_32977__$1 = state_32977;
var statearr_33027_33079 = state_32977__$1;
(statearr_33027_33079[(2)] = inst_32957);

(statearr_33027_33079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (10))){
var inst_32879 = (state_32977[(8)]);
var inst_32900 = (state_32977[(2)]);
var inst_32901 = cljs.core.get.call(null,inst_32900,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32902 = cljs.core.get.call(null,inst_32900,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32903 = cljs.core.get.call(null,inst_32900,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32904 = inst_32879;
var state_32977__$1 = (function (){var statearr_33028 = state_32977;
(statearr_33028[(16)] = inst_32902);

(statearr_33028[(7)] = inst_32904);

(statearr_33028[(17)] = inst_32901);

(statearr_33028[(18)] = inst_32903);

return statearr_33028;
})();
var statearr_33029_33080 = state_32977__$1;
(statearr_33029_33080[(2)] = null);

(statearr_33029_33080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (18))){
var inst_32919 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
var statearr_33030_33081 = state_32977__$1;
(statearr_33030_33081[(2)] = inst_32919);

(statearr_33030_33081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (37))){
var state_32977__$1 = state_32977;
var statearr_33031_33082 = state_32977__$1;
(statearr_33031_33082[(2)] = null);

(statearr_33031_33082[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (8))){
var inst_32879 = (state_32977[(8)]);
var inst_32897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32879);
var state_32977__$1 = state_32977;
var statearr_33032_33083 = state_32977__$1;
(statearr_33032_33083[(2)] = inst_32897);

(statearr_33032_33083[(1)] = (10));


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
});})(c__31978__auto___33037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31883__auto__,c__31978__auto___33037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31884__auto__ = null;
var cljs$core$async$mix_$_state_machine__31884__auto____0 = (function (){
var statearr_33033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33033[(0)] = cljs$core$async$mix_$_state_machine__31884__auto__);

(statearr_33033[(1)] = (1));

return statearr_33033;
});
var cljs$core$async$mix_$_state_machine__31884__auto____1 = (function (state_32977){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_32977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33034){if((e33034 instanceof Object)){
var ex__31887__auto__ = e33034;
var statearr_33035_33084 = state_32977;
(statearr_33035_33084[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33085 = state_32977;
state_32977 = G__33085;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31884__auto__ = function(state_32977){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31884__auto____1.call(this,state_32977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31884__auto____0;
cljs$core$async$mix_$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31884__auto____1;
return cljs$core$async$mix_$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___33037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31980__auto__ = (function (){var statearr_33036 = f__31979__auto__.call(null);
(statearr_33036[(6)] = c__31978__auto___33037);

return statearr_33036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33087 = arguments.length;
switch (G__33087) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33091 = arguments.length;
switch (G__33091) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__33089_SHARP_){
if(cljs.core.truth_(p1__33089_SHARP_.call(null,topic))){
return p1__33089_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33089_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33092 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33093){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33093 = meta33093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33094,meta33093__$1){
var self__ = this;
var _33094__$1 = this;
return (new cljs.core.async.t_cljs$core$async33092(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33093__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33094){
var self__ = this;
var _33094__$1 = this;
return self__.meta33093;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33092.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33092.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33092.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33092.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33092.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33093","meta33093",936542876,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33092";

cljs.core.async.t_cljs$core$async33092.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33092");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33092.
 */
cljs.core.async.__GT_t_cljs$core$async33092 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33092(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33093){
return (new cljs.core.async.t_cljs$core$async33092(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33093));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33092(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31978__auto___33212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33212,mults,ensure_mult,p){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___33212,mults,ensure_mult,p){
return (function (state_33166){
var state_val_33167 = (state_33166[(1)]);
if((state_val_33167 === (7))){
var inst_33162 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33168_33213 = state_33166__$1;
(statearr_33168_33213[(2)] = inst_33162);

(statearr_33168_33213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (20))){
var state_33166__$1 = state_33166;
var statearr_33169_33214 = state_33166__$1;
(statearr_33169_33214[(2)] = null);

(statearr_33169_33214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (1))){
var state_33166__$1 = state_33166;
var statearr_33170_33215 = state_33166__$1;
(statearr_33170_33215[(2)] = null);

(statearr_33170_33215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (24))){
var inst_33145 = (state_33166[(7)]);
var inst_33154 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33145);
var state_33166__$1 = state_33166;
var statearr_33171_33216 = state_33166__$1;
(statearr_33171_33216[(2)] = inst_33154);

(statearr_33171_33216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (4))){
var inst_33097 = (state_33166[(8)]);
var inst_33097__$1 = (state_33166[(2)]);
var inst_33098 = (inst_33097__$1 == null);
var state_33166__$1 = (function (){var statearr_33172 = state_33166;
(statearr_33172[(8)] = inst_33097__$1);

return statearr_33172;
})();
if(cljs.core.truth_(inst_33098)){
var statearr_33173_33217 = state_33166__$1;
(statearr_33173_33217[(1)] = (5));

} else {
var statearr_33174_33218 = state_33166__$1;
(statearr_33174_33218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (15))){
var inst_33139 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33175_33219 = state_33166__$1;
(statearr_33175_33219[(2)] = inst_33139);

(statearr_33175_33219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (21))){
var inst_33159 = (state_33166[(2)]);
var state_33166__$1 = (function (){var statearr_33176 = state_33166;
(statearr_33176[(9)] = inst_33159);

return statearr_33176;
})();
var statearr_33177_33220 = state_33166__$1;
(statearr_33177_33220[(2)] = null);

(statearr_33177_33220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (13))){
var inst_33121 = (state_33166[(10)]);
var inst_33123 = cljs.core.chunked_seq_QMARK_.call(null,inst_33121);
var state_33166__$1 = state_33166;
if(inst_33123){
var statearr_33178_33221 = state_33166__$1;
(statearr_33178_33221[(1)] = (16));

} else {
var statearr_33179_33222 = state_33166__$1;
(statearr_33179_33222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (22))){
var inst_33151 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
if(cljs.core.truth_(inst_33151)){
var statearr_33180_33223 = state_33166__$1;
(statearr_33180_33223[(1)] = (23));

} else {
var statearr_33181_33224 = state_33166__$1;
(statearr_33181_33224[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (6))){
var inst_33145 = (state_33166[(7)]);
var inst_33097 = (state_33166[(8)]);
var inst_33147 = (state_33166[(11)]);
var inst_33145__$1 = topic_fn.call(null,inst_33097);
var inst_33146 = cljs.core.deref.call(null,mults);
var inst_33147__$1 = cljs.core.get.call(null,inst_33146,inst_33145__$1);
var state_33166__$1 = (function (){var statearr_33182 = state_33166;
(statearr_33182[(7)] = inst_33145__$1);

(statearr_33182[(11)] = inst_33147__$1);

return statearr_33182;
})();
if(cljs.core.truth_(inst_33147__$1)){
var statearr_33183_33225 = state_33166__$1;
(statearr_33183_33225[(1)] = (19));

} else {
var statearr_33184_33226 = state_33166__$1;
(statearr_33184_33226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (25))){
var inst_33156 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33185_33227 = state_33166__$1;
(statearr_33185_33227[(2)] = inst_33156);

(statearr_33185_33227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (17))){
var inst_33121 = (state_33166[(10)]);
var inst_33130 = cljs.core.first.call(null,inst_33121);
var inst_33131 = cljs.core.async.muxch_STAR_.call(null,inst_33130);
var inst_33132 = cljs.core.async.close_BANG_.call(null,inst_33131);
var inst_33133 = cljs.core.next.call(null,inst_33121);
var inst_33107 = inst_33133;
var inst_33108 = null;
var inst_33109 = (0);
var inst_33110 = (0);
var state_33166__$1 = (function (){var statearr_33186 = state_33166;
(statearr_33186[(12)] = inst_33109);

(statearr_33186[(13)] = inst_33107);

(statearr_33186[(14)] = inst_33108);

(statearr_33186[(15)] = inst_33110);

(statearr_33186[(16)] = inst_33132);

return statearr_33186;
})();
var statearr_33187_33228 = state_33166__$1;
(statearr_33187_33228[(2)] = null);

(statearr_33187_33228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (3))){
var inst_33164 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33166__$1,inst_33164);
} else {
if((state_val_33167 === (12))){
var inst_33141 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33188_33229 = state_33166__$1;
(statearr_33188_33229[(2)] = inst_33141);

(statearr_33188_33229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (2))){
var state_33166__$1 = state_33166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33166__$1,(4),ch);
} else {
if((state_val_33167 === (23))){
var state_33166__$1 = state_33166;
var statearr_33189_33230 = state_33166__$1;
(statearr_33189_33230[(2)] = null);

(statearr_33189_33230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (19))){
var inst_33097 = (state_33166[(8)]);
var inst_33147 = (state_33166[(11)]);
var inst_33149 = cljs.core.async.muxch_STAR_.call(null,inst_33147);
var state_33166__$1 = state_33166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33166__$1,(22),inst_33149,inst_33097);
} else {
if((state_val_33167 === (11))){
var inst_33107 = (state_33166[(13)]);
var inst_33121 = (state_33166[(10)]);
var inst_33121__$1 = cljs.core.seq.call(null,inst_33107);
var state_33166__$1 = (function (){var statearr_33190 = state_33166;
(statearr_33190[(10)] = inst_33121__$1);

return statearr_33190;
})();
if(inst_33121__$1){
var statearr_33191_33231 = state_33166__$1;
(statearr_33191_33231[(1)] = (13));

} else {
var statearr_33192_33232 = state_33166__$1;
(statearr_33192_33232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (9))){
var inst_33143 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33193_33233 = state_33166__$1;
(statearr_33193_33233[(2)] = inst_33143);

(statearr_33193_33233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (5))){
var inst_33104 = cljs.core.deref.call(null,mults);
var inst_33105 = cljs.core.vals.call(null,inst_33104);
var inst_33106 = cljs.core.seq.call(null,inst_33105);
var inst_33107 = inst_33106;
var inst_33108 = null;
var inst_33109 = (0);
var inst_33110 = (0);
var state_33166__$1 = (function (){var statearr_33194 = state_33166;
(statearr_33194[(12)] = inst_33109);

(statearr_33194[(13)] = inst_33107);

(statearr_33194[(14)] = inst_33108);

(statearr_33194[(15)] = inst_33110);

return statearr_33194;
})();
var statearr_33195_33234 = state_33166__$1;
(statearr_33195_33234[(2)] = null);

(statearr_33195_33234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (14))){
var state_33166__$1 = state_33166;
var statearr_33199_33235 = state_33166__$1;
(statearr_33199_33235[(2)] = null);

(statearr_33199_33235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (16))){
var inst_33121 = (state_33166[(10)]);
var inst_33125 = cljs.core.chunk_first.call(null,inst_33121);
var inst_33126 = cljs.core.chunk_rest.call(null,inst_33121);
var inst_33127 = cljs.core.count.call(null,inst_33125);
var inst_33107 = inst_33126;
var inst_33108 = inst_33125;
var inst_33109 = inst_33127;
var inst_33110 = (0);
var state_33166__$1 = (function (){var statearr_33200 = state_33166;
(statearr_33200[(12)] = inst_33109);

(statearr_33200[(13)] = inst_33107);

(statearr_33200[(14)] = inst_33108);

(statearr_33200[(15)] = inst_33110);

return statearr_33200;
})();
var statearr_33201_33236 = state_33166__$1;
(statearr_33201_33236[(2)] = null);

(statearr_33201_33236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (10))){
var inst_33109 = (state_33166[(12)]);
var inst_33107 = (state_33166[(13)]);
var inst_33108 = (state_33166[(14)]);
var inst_33110 = (state_33166[(15)]);
var inst_33115 = cljs.core._nth.call(null,inst_33108,inst_33110);
var inst_33116 = cljs.core.async.muxch_STAR_.call(null,inst_33115);
var inst_33117 = cljs.core.async.close_BANG_.call(null,inst_33116);
var inst_33118 = (inst_33110 + (1));
var tmp33196 = inst_33109;
var tmp33197 = inst_33107;
var tmp33198 = inst_33108;
var inst_33107__$1 = tmp33197;
var inst_33108__$1 = tmp33198;
var inst_33109__$1 = tmp33196;
var inst_33110__$1 = inst_33118;
var state_33166__$1 = (function (){var statearr_33202 = state_33166;
(statearr_33202[(17)] = inst_33117);

(statearr_33202[(12)] = inst_33109__$1);

(statearr_33202[(13)] = inst_33107__$1);

(statearr_33202[(14)] = inst_33108__$1);

(statearr_33202[(15)] = inst_33110__$1);

return statearr_33202;
})();
var statearr_33203_33237 = state_33166__$1;
(statearr_33203_33237[(2)] = null);

(statearr_33203_33237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (18))){
var inst_33136 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33204_33238 = state_33166__$1;
(statearr_33204_33238[(2)] = inst_33136);

(statearr_33204_33238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (8))){
var inst_33109 = (state_33166[(12)]);
var inst_33110 = (state_33166[(15)]);
var inst_33112 = (inst_33110 < inst_33109);
var inst_33113 = inst_33112;
var state_33166__$1 = state_33166;
if(cljs.core.truth_(inst_33113)){
var statearr_33205_33239 = state_33166__$1;
(statearr_33205_33239[(1)] = (10));

} else {
var statearr_33206_33240 = state_33166__$1;
(statearr_33206_33240[(1)] = (11));

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
});})(c__31978__auto___33212,mults,ensure_mult,p))
;
return ((function (switch__31883__auto__,c__31978__auto___33212,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_33207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33207[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_33207[(1)] = (1));

return statearr_33207;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_33166){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_33166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33208){if((e33208 instanceof Object)){
var ex__31887__auto__ = e33208;
var statearr_33209_33241 = state_33166;
(statearr_33209_33241[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33242 = state_33166;
state_33166 = G__33242;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_33166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_33166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___33212,mults,ensure_mult,p))
})();
var state__31980__auto__ = (function (){var statearr_33210 = f__31979__auto__.call(null);
(statearr_33210[(6)] = c__31978__auto___33212);

return statearr_33210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33212,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33244 = arguments.length;
switch (G__33244) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33247 = arguments.length;
switch (G__33247) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33250 = arguments.length;
switch (G__33250) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31978__auto___33317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___33317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33289){
var state_val_33290 = (state_33289[(1)]);
if((state_val_33290 === (7))){
var state_33289__$1 = state_33289;
var statearr_33291_33318 = state_33289__$1;
(statearr_33291_33318[(2)] = null);

(statearr_33291_33318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (1))){
var state_33289__$1 = state_33289;
var statearr_33292_33319 = state_33289__$1;
(statearr_33292_33319[(2)] = null);

(statearr_33292_33319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (4))){
var inst_33253 = (state_33289[(7)]);
var inst_33255 = (inst_33253 < cnt);
var state_33289__$1 = state_33289;
if(cljs.core.truth_(inst_33255)){
var statearr_33293_33320 = state_33289__$1;
(statearr_33293_33320[(1)] = (6));

} else {
var statearr_33294_33321 = state_33289__$1;
(statearr_33294_33321[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (15))){
var inst_33285 = (state_33289[(2)]);
var state_33289__$1 = state_33289;
var statearr_33295_33322 = state_33289__$1;
(statearr_33295_33322[(2)] = inst_33285);

(statearr_33295_33322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (13))){
var inst_33278 = cljs.core.async.close_BANG_.call(null,out);
var state_33289__$1 = state_33289;
var statearr_33296_33323 = state_33289__$1;
(statearr_33296_33323[(2)] = inst_33278);

(statearr_33296_33323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (6))){
var state_33289__$1 = state_33289;
var statearr_33297_33324 = state_33289__$1;
(statearr_33297_33324[(2)] = null);

(statearr_33297_33324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (3))){
var inst_33287 = (state_33289[(2)]);
var state_33289__$1 = state_33289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33289__$1,inst_33287);
} else {
if((state_val_33290 === (12))){
var inst_33275 = (state_33289[(8)]);
var inst_33275__$1 = (state_33289[(2)]);
var inst_33276 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33275__$1);
var state_33289__$1 = (function (){var statearr_33298 = state_33289;
(statearr_33298[(8)] = inst_33275__$1);

return statearr_33298;
})();
if(cljs.core.truth_(inst_33276)){
var statearr_33299_33325 = state_33289__$1;
(statearr_33299_33325[(1)] = (13));

} else {
var statearr_33300_33326 = state_33289__$1;
(statearr_33300_33326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (2))){
var inst_33252 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33253 = (0);
var state_33289__$1 = (function (){var statearr_33301 = state_33289;
(statearr_33301[(7)] = inst_33253);

(statearr_33301[(9)] = inst_33252);

return statearr_33301;
})();
var statearr_33302_33327 = state_33289__$1;
(statearr_33302_33327[(2)] = null);

(statearr_33302_33327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (11))){
var inst_33253 = (state_33289[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33289,(10),Object,null,(9));
var inst_33262 = chs__$1.call(null,inst_33253);
var inst_33263 = done.call(null,inst_33253);
var inst_33264 = cljs.core.async.take_BANG_.call(null,inst_33262,inst_33263);
var state_33289__$1 = state_33289;
var statearr_33303_33328 = state_33289__$1;
(statearr_33303_33328[(2)] = inst_33264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (9))){
var inst_33253 = (state_33289[(7)]);
var inst_33266 = (state_33289[(2)]);
var inst_33267 = (inst_33253 + (1));
var inst_33253__$1 = inst_33267;
var state_33289__$1 = (function (){var statearr_33304 = state_33289;
(statearr_33304[(10)] = inst_33266);

(statearr_33304[(7)] = inst_33253__$1);

return statearr_33304;
})();
var statearr_33305_33329 = state_33289__$1;
(statearr_33305_33329[(2)] = null);

(statearr_33305_33329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (5))){
var inst_33273 = (state_33289[(2)]);
var state_33289__$1 = (function (){var statearr_33306 = state_33289;
(statearr_33306[(11)] = inst_33273);

return statearr_33306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33289__$1,(12),dchan);
} else {
if((state_val_33290 === (14))){
var inst_33275 = (state_33289[(8)]);
var inst_33280 = cljs.core.apply.call(null,f,inst_33275);
var state_33289__$1 = state_33289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33289__$1,(16),out,inst_33280);
} else {
if((state_val_33290 === (16))){
var inst_33282 = (state_33289[(2)]);
var state_33289__$1 = (function (){var statearr_33307 = state_33289;
(statearr_33307[(12)] = inst_33282);

return statearr_33307;
})();
var statearr_33308_33330 = state_33289__$1;
(statearr_33308_33330[(2)] = null);

(statearr_33308_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (10))){
var inst_33257 = (state_33289[(2)]);
var inst_33258 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33289__$1 = (function (){var statearr_33309 = state_33289;
(statearr_33309[(13)] = inst_33257);

return statearr_33309;
})();
var statearr_33310_33331 = state_33289__$1;
(statearr_33310_33331[(2)] = inst_33258);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33290 === (8))){
var inst_33271 = (state_33289[(2)]);
var state_33289__$1 = state_33289;
var statearr_33311_33332 = state_33289__$1;
(statearr_33311_33332[(2)] = inst_33271);

(statearr_33311_33332[(1)] = (5));


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
});})(c__31978__auto___33317,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31883__auto__,c__31978__auto___33317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_33312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33312[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_33312[(1)] = (1));

return statearr_33312;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_33289){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_33289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33313){if((e33313 instanceof Object)){
var ex__31887__auto__ = e33313;
var statearr_33314_33333 = state_33289;
(statearr_33314_33333[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33334 = state_33289;
state_33289 = G__33334;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_33289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_33289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___33317,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31980__auto__ = (function (){var statearr_33315 = f__31979__auto__.call(null);
(statearr_33315[(6)] = c__31978__auto___33317);

return statearr_33315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33317,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33337 = arguments.length;
switch (G__33337) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33391,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___33391,out){
return (function (state_33369){
var state_val_33370 = (state_33369[(1)]);
if((state_val_33370 === (7))){
var inst_33349 = (state_33369[(7)]);
var inst_33348 = (state_33369[(8)]);
var inst_33348__$1 = (state_33369[(2)]);
var inst_33349__$1 = cljs.core.nth.call(null,inst_33348__$1,(0),null);
var inst_33350 = cljs.core.nth.call(null,inst_33348__$1,(1),null);
var inst_33351 = (inst_33349__$1 == null);
var state_33369__$1 = (function (){var statearr_33371 = state_33369;
(statearr_33371[(9)] = inst_33350);

(statearr_33371[(7)] = inst_33349__$1);

(statearr_33371[(8)] = inst_33348__$1);

return statearr_33371;
})();
if(cljs.core.truth_(inst_33351)){
var statearr_33372_33392 = state_33369__$1;
(statearr_33372_33392[(1)] = (8));

} else {
var statearr_33373_33393 = state_33369__$1;
(statearr_33373_33393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (1))){
var inst_33338 = cljs.core.vec.call(null,chs);
var inst_33339 = inst_33338;
var state_33369__$1 = (function (){var statearr_33374 = state_33369;
(statearr_33374[(10)] = inst_33339);

return statearr_33374;
})();
var statearr_33375_33394 = state_33369__$1;
(statearr_33375_33394[(2)] = null);

(statearr_33375_33394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (4))){
var inst_33339 = (state_33369[(10)]);
var state_33369__$1 = state_33369;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33369__$1,(7),inst_33339);
} else {
if((state_val_33370 === (6))){
var inst_33365 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
var statearr_33376_33395 = state_33369__$1;
(statearr_33376_33395[(2)] = inst_33365);

(statearr_33376_33395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (3))){
var inst_33367 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33369__$1,inst_33367);
} else {
if((state_val_33370 === (2))){
var inst_33339 = (state_33369[(10)]);
var inst_33341 = cljs.core.count.call(null,inst_33339);
var inst_33342 = (inst_33341 > (0));
var state_33369__$1 = state_33369;
if(cljs.core.truth_(inst_33342)){
var statearr_33378_33396 = state_33369__$1;
(statearr_33378_33396[(1)] = (4));

} else {
var statearr_33379_33397 = state_33369__$1;
(statearr_33379_33397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (11))){
var inst_33339 = (state_33369[(10)]);
var inst_33358 = (state_33369[(2)]);
var tmp33377 = inst_33339;
var inst_33339__$1 = tmp33377;
var state_33369__$1 = (function (){var statearr_33380 = state_33369;
(statearr_33380[(11)] = inst_33358);

(statearr_33380[(10)] = inst_33339__$1);

return statearr_33380;
})();
var statearr_33381_33398 = state_33369__$1;
(statearr_33381_33398[(2)] = null);

(statearr_33381_33398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (9))){
var inst_33349 = (state_33369[(7)]);
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33369__$1,(11),out,inst_33349);
} else {
if((state_val_33370 === (5))){
var inst_33363 = cljs.core.async.close_BANG_.call(null,out);
var state_33369__$1 = state_33369;
var statearr_33382_33399 = state_33369__$1;
(statearr_33382_33399[(2)] = inst_33363);

(statearr_33382_33399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (10))){
var inst_33361 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
var statearr_33383_33400 = state_33369__$1;
(statearr_33383_33400[(2)] = inst_33361);

(statearr_33383_33400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (8))){
var inst_33350 = (state_33369[(9)]);
var inst_33339 = (state_33369[(10)]);
var inst_33349 = (state_33369[(7)]);
var inst_33348 = (state_33369[(8)]);
var inst_33353 = (function (){var cs = inst_33339;
var vec__33344 = inst_33348;
var v = inst_33349;
var c = inst_33350;
return ((function (cs,vec__33344,v,c,inst_33350,inst_33339,inst_33349,inst_33348,state_val_33370,c__31978__auto___33391,out){
return (function (p1__33335_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33335_SHARP_);
});
;})(cs,vec__33344,v,c,inst_33350,inst_33339,inst_33349,inst_33348,state_val_33370,c__31978__auto___33391,out))
})();
var inst_33354 = cljs.core.filterv.call(null,inst_33353,inst_33339);
var inst_33339__$1 = inst_33354;
var state_33369__$1 = (function (){var statearr_33384 = state_33369;
(statearr_33384[(10)] = inst_33339__$1);

return statearr_33384;
})();
var statearr_33385_33401 = state_33369__$1;
(statearr_33385_33401[(2)] = null);

(statearr_33385_33401[(1)] = (2));


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
});})(c__31978__auto___33391,out))
;
return ((function (switch__31883__auto__,c__31978__auto___33391,out){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_33386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33386[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_33386[(1)] = (1));

return statearr_33386;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_33369){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_33369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33387){if((e33387 instanceof Object)){
var ex__31887__auto__ = e33387;
var statearr_33388_33402 = state_33369;
(statearr_33388_33402[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33403 = state_33369;
state_33369 = G__33403;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_33369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_33369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___33391,out))
})();
var state__31980__auto__ = (function (){var statearr_33389 = f__31979__auto__.call(null);
(statearr_33389[(6)] = c__31978__auto___33391);

return statearr_33389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33391,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33405 = arguments.length;
switch (G__33405) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33450,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___33450,out){
return (function (state_33429){
var state_val_33430 = (state_33429[(1)]);
if((state_val_33430 === (7))){
var inst_33411 = (state_33429[(7)]);
var inst_33411__$1 = (state_33429[(2)]);
var inst_33412 = (inst_33411__$1 == null);
var inst_33413 = cljs.core.not.call(null,inst_33412);
var state_33429__$1 = (function (){var statearr_33431 = state_33429;
(statearr_33431[(7)] = inst_33411__$1);

return statearr_33431;
})();
if(inst_33413){
var statearr_33432_33451 = state_33429__$1;
(statearr_33432_33451[(1)] = (8));

} else {
var statearr_33433_33452 = state_33429__$1;
(statearr_33433_33452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (1))){
var inst_33406 = (0);
var state_33429__$1 = (function (){var statearr_33434 = state_33429;
(statearr_33434[(8)] = inst_33406);

return statearr_33434;
})();
var statearr_33435_33453 = state_33429__$1;
(statearr_33435_33453[(2)] = null);

(statearr_33435_33453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (4))){
var state_33429__$1 = state_33429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33429__$1,(7),ch);
} else {
if((state_val_33430 === (6))){
var inst_33424 = (state_33429[(2)]);
var state_33429__$1 = state_33429;
var statearr_33436_33454 = state_33429__$1;
(statearr_33436_33454[(2)] = inst_33424);

(statearr_33436_33454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (3))){
var inst_33426 = (state_33429[(2)]);
var inst_33427 = cljs.core.async.close_BANG_.call(null,out);
var state_33429__$1 = (function (){var statearr_33437 = state_33429;
(statearr_33437[(9)] = inst_33426);

return statearr_33437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33429__$1,inst_33427);
} else {
if((state_val_33430 === (2))){
var inst_33406 = (state_33429[(8)]);
var inst_33408 = (inst_33406 < n);
var state_33429__$1 = state_33429;
if(cljs.core.truth_(inst_33408)){
var statearr_33438_33455 = state_33429__$1;
(statearr_33438_33455[(1)] = (4));

} else {
var statearr_33439_33456 = state_33429__$1;
(statearr_33439_33456[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (11))){
var inst_33406 = (state_33429[(8)]);
var inst_33416 = (state_33429[(2)]);
var inst_33417 = (inst_33406 + (1));
var inst_33406__$1 = inst_33417;
var state_33429__$1 = (function (){var statearr_33440 = state_33429;
(statearr_33440[(8)] = inst_33406__$1);

(statearr_33440[(10)] = inst_33416);

return statearr_33440;
})();
var statearr_33441_33457 = state_33429__$1;
(statearr_33441_33457[(2)] = null);

(statearr_33441_33457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (9))){
var state_33429__$1 = state_33429;
var statearr_33442_33458 = state_33429__$1;
(statearr_33442_33458[(2)] = null);

(statearr_33442_33458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (5))){
var state_33429__$1 = state_33429;
var statearr_33443_33459 = state_33429__$1;
(statearr_33443_33459[(2)] = null);

(statearr_33443_33459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (10))){
var inst_33421 = (state_33429[(2)]);
var state_33429__$1 = state_33429;
var statearr_33444_33460 = state_33429__$1;
(statearr_33444_33460[(2)] = inst_33421);

(statearr_33444_33460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (8))){
var inst_33411 = (state_33429[(7)]);
var state_33429__$1 = state_33429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33429__$1,(11),out,inst_33411);
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
});})(c__31978__auto___33450,out))
;
return ((function (switch__31883__auto__,c__31978__auto___33450,out){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_33445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33445[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_33445[(1)] = (1));

return statearr_33445;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_33429){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_33429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33446){if((e33446 instanceof Object)){
var ex__31887__auto__ = e33446;
var statearr_33447_33461 = state_33429;
(statearr_33447_33461[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33462 = state_33429;
state_33429 = G__33462;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_33429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_33429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___33450,out))
})();
var state__31980__auto__ = (function (){var statearr_33448 = f__31979__auto__.call(null);
(statearr_33448[(6)] = c__31978__auto___33450);

return statearr_33448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33450,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33464 = (function (f,ch,meta33465){
this.f = f;
this.ch = ch;
this.meta33465 = meta33465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33466,meta33465__$1){
var self__ = this;
var _33466__$1 = this;
return (new cljs.core.async.t_cljs$core$async33464(self__.f,self__.ch,meta33465__$1));
});

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33466){
var self__ = this;
var _33466__$1 = this;
return self__.meta33465;
});

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33467 = (function (f,ch,meta33465,_,fn1,meta33468){
this.f = f;
this.ch = ch;
this.meta33465 = meta33465;
this._ = _;
this.fn1 = fn1;
this.meta33468 = meta33468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33469,meta33468__$1){
var self__ = this;
var _33469__$1 = this;
return (new cljs.core.async.t_cljs$core$async33467(self__.f,self__.ch,self__.meta33465,self__._,self__.fn1,meta33468__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33469){
var self__ = this;
var _33469__$1 = this;
return self__.meta33468;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33463_SHARP_){
return f1.call(null,(((p1__33463_SHARP_ == null))?null:self__.f.call(null,p1__33463_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33467.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33465","meta33465",872409545,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33464","cljs.core.async/t_cljs$core$async33464",-12401100,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33468","meta33468",-54574121,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33467";

cljs.core.async.t_cljs$core$async33467.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33467");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33467.
 */
cljs.core.async.__GT_t_cljs$core$async33467 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33467(f__$1,ch__$1,meta33465__$1,___$2,fn1__$1,meta33468){
return (new cljs.core.async.t_cljs$core$async33467(f__$1,ch__$1,meta33465__$1,___$2,fn1__$1,meta33468));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33467(self__.f,self__.ch,self__.meta33465,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33465","meta33465",872409545,null)], null);
});

cljs.core.async.t_cljs$core$async33464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33464";

cljs.core.async.t_cljs$core$async33464.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33464");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33464.
 */
cljs.core.async.__GT_t_cljs$core$async33464 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33464(f__$1,ch__$1,meta33465){
return (new cljs.core.async.t_cljs$core$async33464(f__$1,ch__$1,meta33465));
});

}

return (new cljs.core.async.t_cljs$core$async33464(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33470 = (function (f,ch,meta33471){
this.f = f;
this.ch = ch;
this.meta33471 = meta33471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33472,meta33471__$1){
var self__ = this;
var _33472__$1 = this;
return (new cljs.core.async.t_cljs$core$async33470(self__.f,self__.ch,meta33471__$1));
});

cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33472){
var self__ = this;
var _33472__$1 = this;
return self__.meta33471;
});

cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33471","meta33471",1741452903,null)], null);
});

cljs.core.async.t_cljs$core$async33470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33470";

cljs.core.async.t_cljs$core$async33470.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33470");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33470.
 */
cljs.core.async.__GT_t_cljs$core$async33470 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33470(f__$1,ch__$1,meta33471){
return (new cljs.core.async.t_cljs$core$async33470(f__$1,ch__$1,meta33471));
});

}

return (new cljs.core.async.t_cljs$core$async33470(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33473 = (function (p,ch,meta33474){
this.p = p;
this.ch = ch;
this.meta33474 = meta33474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33475,meta33474__$1){
var self__ = this;
var _33475__$1 = this;
return (new cljs.core.async.t_cljs$core$async33473(self__.p,self__.ch,meta33474__$1));
});

cljs.core.async.t_cljs$core$async33473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33475){
var self__ = this;
var _33475__$1 = this;
return self__.meta33474;
});

cljs.core.async.t_cljs$core$async33473.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33473.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33473.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33474","meta33474",-861220128,null)], null);
});

cljs.core.async.t_cljs$core$async33473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33473";

cljs.core.async.t_cljs$core$async33473.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33473");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33473.
 */
cljs.core.async.__GT_t_cljs$core$async33473 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33473(p__$1,ch__$1,meta33474){
return (new cljs.core.async.t_cljs$core$async33473(p__$1,ch__$1,meta33474));
});

}

return (new cljs.core.async.t_cljs$core$async33473(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33477 = arguments.length;
switch (G__33477) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33517,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___33517,out){
return (function (state_33498){
var state_val_33499 = (state_33498[(1)]);
if((state_val_33499 === (7))){
var inst_33494 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
var statearr_33500_33518 = state_33498__$1;
(statearr_33500_33518[(2)] = inst_33494);

(statearr_33500_33518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (1))){
var state_33498__$1 = state_33498;
var statearr_33501_33519 = state_33498__$1;
(statearr_33501_33519[(2)] = null);

(statearr_33501_33519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (4))){
var inst_33480 = (state_33498[(7)]);
var inst_33480__$1 = (state_33498[(2)]);
var inst_33481 = (inst_33480__$1 == null);
var state_33498__$1 = (function (){var statearr_33502 = state_33498;
(statearr_33502[(7)] = inst_33480__$1);

return statearr_33502;
})();
if(cljs.core.truth_(inst_33481)){
var statearr_33503_33520 = state_33498__$1;
(statearr_33503_33520[(1)] = (5));

} else {
var statearr_33504_33521 = state_33498__$1;
(statearr_33504_33521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (6))){
var inst_33480 = (state_33498[(7)]);
var inst_33485 = p.call(null,inst_33480);
var state_33498__$1 = state_33498;
if(cljs.core.truth_(inst_33485)){
var statearr_33505_33522 = state_33498__$1;
(statearr_33505_33522[(1)] = (8));

} else {
var statearr_33506_33523 = state_33498__$1;
(statearr_33506_33523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (3))){
var inst_33496 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33498__$1,inst_33496);
} else {
if((state_val_33499 === (2))){
var state_33498__$1 = state_33498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33498__$1,(4),ch);
} else {
if((state_val_33499 === (11))){
var inst_33488 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
var statearr_33507_33524 = state_33498__$1;
(statearr_33507_33524[(2)] = inst_33488);

(statearr_33507_33524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (9))){
var state_33498__$1 = state_33498;
var statearr_33508_33525 = state_33498__$1;
(statearr_33508_33525[(2)] = null);

(statearr_33508_33525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (5))){
var inst_33483 = cljs.core.async.close_BANG_.call(null,out);
var state_33498__$1 = state_33498;
var statearr_33509_33526 = state_33498__$1;
(statearr_33509_33526[(2)] = inst_33483);

(statearr_33509_33526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (10))){
var inst_33491 = (state_33498[(2)]);
var state_33498__$1 = (function (){var statearr_33510 = state_33498;
(statearr_33510[(8)] = inst_33491);

return statearr_33510;
})();
var statearr_33511_33527 = state_33498__$1;
(statearr_33511_33527[(2)] = null);

(statearr_33511_33527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (8))){
var inst_33480 = (state_33498[(7)]);
var state_33498__$1 = state_33498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33498__$1,(11),out,inst_33480);
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
});})(c__31978__auto___33517,out))
;
return ((function (switch__31883__auto__,c__31978__auto___33517,out){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_33512 = [null,null,null,null,null,null,null,null,null];
(statearr_33512[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_33512[(1)] = (1));

return statearr_33512;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_33498){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_33498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33513){if((e33513 instanceof Object)){
var ex__31887__auto__ = e33513;
var statearr_33514_33528 = state_33498;
(statearr_33514_33528[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33529 = state_33498;
state_33498 = G__33529;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_33498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_33498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___33517,out))
})();
var state__31980__auto__ = (function (){var statearr_33515 = f__31979__auto__.call(null);
(statearr_33515[(6)] = c__31978__auto___33517);

return statearr_33515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33517,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33531 = arguments.length;
switch (G__33531) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto__){
return (function (state_33594){
var state_val_33595 = (state_33594[(1)]);
if((state_val_33595 === (7))){
var inst_33590 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33596_33634 = state_33594__$1;
(statearr_33596_33634[(2)] = inst_33590);

(statearr_33596_33634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (20))){
var inst_33560 = (state_33594[(7)]);
var inst_33571 = (state_33594[(2)]);
var inst_33572 = cljs.core.next.call(null,inst_33560);
var inst_33546 = inst_33572;
var inst_33547 = null;
var inst_33548 = (0);
var inst_33549 = (0);
var state_33594__$1 = (function (){var statearr_33597 = state_33594;
(statearr_33597[(8)] = inst_33571);

(statearr_33597[(9)] = inst_33548);

(statearr_33597[(10)] = inst_33549);

(statearr_33597[(11)] = inst_33546);

(statearr_33597[(12)] = inst_33547);

return statearr_33597;
})();
var statearr_33598_33635 = state_33594__$1;
(statearr_33598_33635[(2)] = null);

(statearr_33598_33635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (1))){
var state_33594__$1 = state_33594;
var statearr_33599_33636 = state_33594__$1;
(statearr_33599_33636[(2)] = null);

(statearr_33599_33636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (4))){
var inst_33535 = (state_33594[(13)]);
var inst_33535__$1 = (state_33594[(2)]);
var inst_33536 = (inst_33535__$1 == null);
var state_33594__$1 = (function (){var statearr_33600 = state_33594;
(statearr_33600[(13)] = inst_33535__$1);

return statearr_33600;
})();
if(cljs.core.truth_(inst_33536)){
var statearr_33601_33637 = state_33594__$1;
(statearr_33601_33637[(1)] = (5));

} else {
var statearr_33602_33638 = state_33594__$1;
(statearr_33602_33638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (15))){
var state_33594__$1 = state_33594;
var statearr_33606_33639 = state_33594__$1;
(statearr_33606_33639[(2)] = null);

(statearr_33606_33639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (21))){
var state_33594__$1 = state_33594;
var statearr_33607_33640 = state_33594__$1;
(statearr_33607_33640[(2)] = null);

(statearr_33607_33640[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (13))){
var inst_33548 = (state_33594[(9)]);
var inst_33549 = (state_33594[(10)]);
var inst_33546 = (state_33594[(11)]);
var inst_33547 = (state_33594[(12)]);
var inst_33556 = (state_33594[(2)]);
var inst_33557 = (inst_33549 + (1));
var tmp33603 = inst_33548;
var tmp33604 = inst_33546;
var tmp33605 = inst_33547;
var inst_33546__$1 = tmp33604;
var inst_33547__$1 = tmp33605;
var inst_33548__$1 = tmp33603;
var inst_33549__$1 = inst_33557;
var state_33594__$1 = (function (){var statearr_33608 = state_33594;
(statearr_33608[(9)] = inst_33548__$1);

(statearr_33608[(10)] = inst_33549__$1);

(statearr_33608[(11)] = inst_33546__$1);

(statearr_33608[(14)] = inst_33556);

(statearr_33608[(12)] = inst_33547__$1);

return statearr_33608;
})();
var statearr_33609_33641 = state_33594__$1;
(statearr_33609_33641[(2)] = null);

(statearr_33609_33641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (22))){
var state_33594__$1 = state_33594;
var statearr_33610_33642 = state_33594__$1;
(statearr_33610_33642[(2)] = null);

(statearr_33610_33642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (6))){
var inst_33535 = (state_33594[(13)]);
var inst_33544 = f.call(null,inst_33535);
var inst_33545 = cljs.core.seq.call(null,inst_33544);
var inst_33546 = inst_33545;
var inst_33547 = null;
var inst_33548 = (0);
var inst_33549 = (0);
var state_33594__$1 = (function (){var statearr_33611 = state_33594;
(statearr_33611[(9)] = inst_33548);

(statearr_33611[(10)] = inst_33549);

(statearr_33611[(11)] = inst_33546);

(statearr_33611[(12)] = inst_33547);

return statearr_33611;
})();
var statearr_33612_33643 = state_33594__$1;
(statearr_33612_33643[(2)] = null);

(statearr_33612_33643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (17))){
var inst_33560 = (state_33594[(7)]);
var inst_33564 = cljs.core.chunk_first.call(null,inst_33560);
var inst_33565 = cljs.core.chunk_rest.call(null,inst_33560);
var inst_33566 = cljs.core.count.call(null,inst_33564);
var inst_33546 = inst_33565;
var inst_33547 = inst_33564;
var inst_33548 = inst_33566;
var inst_33549 = (0);
var state_33594__$1 = (function (){var statearr_33613 = state_33594;
(statearr_33613[(9)] = inst_33548);

(statearr_33613[(10)] = inst_33549);

(statearr_33613[(11)] = inst_33546);

(statearr_33613[(12)] = inst_33547);

return statearr_33613;
})();
var statearr_33614_33644 = state_33594__$1;
(statearr_33614_33644[(2)] = null);

(statearr_33614_33644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (3))){
var inst_33592 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33594__$1,inst_33592);
} else {
if((state_val_33595 === (12))){
var inst_33580 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33615_33645 = state_33594__$1;
(statearr_33615_33645[(2)] = inst_33580);

(statearr_33615_33645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (2))){
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33594__$1,(4),in$);
} else {
if((state_val_33595 === (23))){
var inst_33588 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33616_33646 = state_33594__$1;
(statearr_33616_33646[(2)] = inst_33588);

(statearr_33616_33646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (19))){
var inst_33575 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33617_33647 = state_33594__$1;
(statearr_33617_33647[(2)] = inst_33575);

(statearr_33617_33647[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (11))){
var inst_33546 = (state_33594[(11)]);
var inst_33560 = (state_33594[(7)]);
var inst_33560__$1 = cljs.core.seq.call(null,inst_33546);
var state_33594__$1 = (function (){var statearr_33618 = state_33594;
(statearr_33618[(7)] = inst_33560__$1);

return statearr_33618;
})();
if(inst_33560__$1){
var statearr_33619_33648 = state_33594__$1;
(statearr_33619_33648[(1)] = (14));

} else {
var statearr_33620_33649 = state_33594__$1;
(statearr_33620_33649[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (9))){
var inst_33582 = (state_33594[(2)]);
var inst_33583 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33594__$1 = (function (){var statearr_33621 = state_33594;
(statearr_33621[(15)] = inst_33582);

return statearr_33621;
})();
if(cljs.core.truth_(inst_33583)){
var statearr_33622_33650 = state_33594__$1;
(statearr_33622_33650[(1)] = (21));

} else {
var statearr_33623_33651 = state_33594__$1;
(statearr_33623_33651[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (5))){
var inst_33538 = cljs.core.async.close_BANG_.call(null,out);
var state_33594__$1 = state_33594;
var statearr_33624_33652 = state_33594__$1;
(statearr_33624_33652[(2)] = inst_33538);

(statearr_33624_33652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (14))){
var inst_33560 = (state_33594[(7)]);
var inst_33562 = cljs.core.chunked_seq_QMARK_.call(null,inst_33560);
var state_33594__$1 = state_33594;
if(inst_33562){
var statearr_33625_33653 = state_33594__$1;
(statearr_33625_33653[(1)] = (17));

} else {
var statearr_33626_33654 = state_33594__$1;
(statearr_33626_33654[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (16))){
var inst_33578 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33627_33655 = state_33594__$1;
(statearr_33627_33655[(2)] = inst_33578);

(statearr_33627_33655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (10))){
var inst_33549 = (state_33594[(10)]);
var inst_33547 = (state_33594[(12)]);
var inst_33554 = cljs.core._nth.call(null,inst_33547,inst_33549);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33594__$1,(13),out,inst_33554);
} else {
if((state_val_33595 === (18))){
var inst_33560 = (state_33594[(7)]);
var inst_33569 = cljs.core.first.call(null,inst_33560);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33594__$1,(20),out,inst_33569);
} else {
if((state_val_33595 === (8))){
var inst_33548 = (state_33594[(9)]);
var inst_33549 = (state_33594[(10)]);
var inst_33551 = (inst_33549 < inst_33548);
var inst_33552 = inst_33551;
var state_33594__$1 = state_33594;
if(cljs.core.truth_(inst_33552)){
var statearr_33628_33656 = state_33594__$1;
(statearr_33628_33656[(1)] = (10));

} else {
var statearr_33629_33657 = state_33594__$1;
(statearr_33629_33657[(1)] = (11));

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
});})(c__31978__auto__))
;
return ((function (switch__31883__auto__,c__31978__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31884__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31884__auto____0 = (function (){
var statearr_33630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33630[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31884__auto__);

(statearr_33630[(1)] = (1));

return statearr_33630;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31884__auto____1 = (function (state_33594){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_33594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33631){if((e33631 instanceof Object)){
var ex__31887__auto__ = e33631;
var statearr_33632_33658 = state_33594;
(statearr_33632_33658[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33659 = state_33594;
state_33594 = G__33659;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31884__auto__ = function(state_33594){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31884__auto____1.call(this,state_33594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31884__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31884__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_33633 = f__31979__auto__.call(null);
(statearr_33633[(6)] = c__31978__auto__);

return statearr_33633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33661 = arguments.length;
switch (G__33661) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33664 = arguments.length;
switch (G__33664) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33667 = arguments.length;
switch (G__33667) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33714,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___33714,out){
return (function (state_33691){
var state_val_33692 = (state_33691[(1)]);
if((state_val_33692 === (7))){
var inst_33686 = (state_33691[(2)]);
var state_33691__$1 = state_33691;
var statearr_33693_33715 = state_33691__$1;
(statearr_33693_33715[(2)] = inst_33686);

(statearr_33693_33715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (1))){
var inst_33668 = null;
var state_33691__$1 = (function (){var statearr_33694 = state_33691;
(statearr_33694[(7)] = inst_33668);

return statearr_33694;
})();
var statearr_33695_33716 = state_33691__$1;
(statearr_33695_33716[(2)] = null);

(statearr_33695_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (4))){
var inst_33671 = (state_33691[(8)]);
var inst_33671__$1 = (state_33691[(2)]);
var inst_33672 = (inst_33671__$1 == null);
var inst_33673 = cljs.core.not.call(null,inst_33672);
var state_33691__$1 = (function (){var statearr_33696 = state_33691;
(statearr_33696[(8)] = inst_33671__$1);

return statearr_33696;
})();
if(inst_33673){
var statearr_33697_33717 = state_33691__$1;
(statearr_33697_33717[(1)] = (5));

} else {
var statearr_33698_33718 = state_33691__$1;
(statearr_33698_33718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (6))){
var state_33691__$1 = state_33691;
var statearr_33699_33719 = state_33691__$1;
(statearr_33699_33719[(2)] = null);

(statearr_33699_33719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (3))){
var inst_33688 = (state_33691[(2)]);
var inst_33689 = cljs.core.async.close_BANG_.call(null,out);
var state_33691__$1 = (function (){var statearr_33700 = state_33691;
(statearr_33700[(9)] = inst_33688);

return statearr_33700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33691__$1,inst_33689);
} else {
if((state_val_33692 === (2))){
var state_33691__$1 = state_33691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33691__$1,(4),ch);
} else {
if((state_val_33692 === (11))){
var inst_33671 = (state_33691[(8)]);
var inst_33680 = (state_33691[(2)]);
var inst_33668 = inst_33671;
var state_33691__$1 = (function (){var statearr_33701 = state_33691;
(statearr_33701[(7)] = inst_33668);

(statearr_33701[(10)] = inst_33680);

return statearr_33701;
})();
var statearr_33702_33720 = state_33691__$1;
(statearr_33702_33720[(2)] = null);

(statearr_33702_33720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (9))){
var inst_33671 = (state_33691[(8)]);
var state_33691__$1 = state_33691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33691__$1,(11),out,inst_33671);
} else {
if((state_val_33692 === (5))){
var inst_33671 = (state_33691[(8)]);
var inst_33668 = (state_33691[(7)]);
var inst_33675 = cljs.core._EQ_.call(null,inst_33671,inst_33668);
var state_33691__$1 = state_33691;
if(inst_33675){
var statearr_33704_33721 = state_33691__$1;
(statearr_33704_33721[(1)] = (8));

} else {
var statearr_33705_33722 = state_33691__$1;
(statearr_33705_33722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (10))){
var inst_33683 = (state_33691[(2)]);
var state_33691__$1 = state_33691;
var statearr_33706_33723 = state_33691__$1;
(statearr_33706_33723[(2)] = inst_33683);

(statearr_33706_33723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (8))){
var inst_33668 = (state_33691[(7)]);
var tmp33703 = inst_33668;
var inst_33668__$1 = tmp33703;
var state_33691__$1 = (function (){var statearr_33707 = state_33691;
(statearr_33707[(7)] = inst_33668__$1);

return statearr_33707;
})();
var statearr_33708_33724 = state_33691__$1;
(statearr_33708_33724[(2)] = null);

(statearr_33708_33724[(1)] = (2));


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
});})(c__31978__auto___33714,out))
;
return ((function (switch__31883__auto__,c__31978__auto___33714,out){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_33709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33709[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_33709[(1)] = (1));

return statearr_33709;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_33691){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_33691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33710){if((e33710 instanceof Object)){
var ex__31887__auto__ = e33710;
var statearr_33711_33725 = state_33691;
(statearr_33711_33725[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33726 = state_33691;
state_33691 = G__33726;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_33691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_33691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___33714,out))
})();
var state__31980__auto__ = (function (){var statearr_33712 = f__31979__auto__.call(null);
(statearr_33712[(6)] = c__31978__auto___33714);

return statearr_33712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33714,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33728 = arguments.length;
switch (G__33728) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33794,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___33794,out){
return (function (state_33766){
var state_val_33767 = (state_33766[(1)]);
if((state_val_33767 === (7))){
var inst_33762 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
var statearr_33768_33795 = state_33766__$1;
(statearr_33768_33795[(2)] = inst_33762);

(statearr_33768_33795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (1))){
var inst_33729 = (new Array(n));
var inst_33730 = inst_33729;
var inst_33731 = (0);
var state_33766__$1 = (function (){var statearr_33769 = state_33766;
(statearr_33769[(7)] = inst_33730);

(statearr_33769[(8)] = inst_33731);

return statearr_33769;
})();
var statearr_33770_33796 = state_33766__$1;
(statearr_33770_33796[(2)] = null);

(statearr_33770_33796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (4))){
var inst_33734 = (state_33766[(9)]);
var inst_33734__$1 = (state_33766[(2)]);
var inst_33735 = (inst_33734__$1 == null);
var inst_33736 = cljs.core.not.call(null,inst_33735);
var state_33766__$1 = (function (){var statearr_33771 = state_33766;
(statearr_33771[(9)] = inst_33734__$1);

return statearr_33771;
})();
if(inst_33736){
var statearr_33772_33797 = state_33766__$1;
(statearr_33772_33797[(1)] = (5));

} else {
var statearr_33773_33798 = state_33766__$1;
(statearr_33773_33798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (15))){
var inst_33756 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
var statearr_33774_33799 = state_33766__$1;
(statearr_33774_33799[(2)] = inst_33756);

(statearr_33774_33799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (13))){
var state_33766__$1 = state_33766;
var statearr_33775_33800 = state_33766__$1;
(statearr_33775_33800[(2)] = null);

(statearr_33775_33800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (6))){
var inst_33731 = (state_33766[(8)]);
var inst_33752 = (inst_33731 > (0));
var state_33766__$1 = state_33766;
if(cljs.core.truth_(inst_33752)){
var statearr_33776_33801 = state_33766__$1;
(statearr_33776_33801[(1)] = (12));

} else {
var statearr_33777_33802 = state_33766__$1;
(statearr_33777_33802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (3))){
var inst_33764 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33766__$1,inst_33764);
} else {
if((state_val_33767 === (12))){
var inst_33730 = (state_33766[(7)]);
var inst_33754 = cljs.core.vec.call(null,inst_33730);
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33766__$1,(15),out,inst_33754);
} else {
if((state_val_33767 === (2))){
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33766__$1,(4),ch);
} else {
if((state_val_33767 === (11))){
var inst_33746 = (state_33766[(2)]);
var inst_33747 = (new Array(n));
var inst_33730 = inst_33747;
var inst_33731 = (0);
var state_33766__$1 = (function (){var statearr_33778 = state_33766;
(statearr_33778[(7)] = inst_33730);

(statearr_33778[(10)] = inst_33746);

(statearr_33778[(8)] = inst_33731);

return statearr_33778;
})();
var statearr_33779_33803 = state_33766__$1;
(statearr_33779_33803[(2)] = null);

(statearr_33779_33803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (9))){
var inst_33730 = (state_33766[(7)]);
var inst_33744 = cljs.core.vec.call(null,inst_33730);
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33766__$1,(11),out,inst_33744);
} else {
if((state_val_33767 === (5))){
var inst_33734 = (state_33766[(9)]);
var inst_33730 = (state_33766[(7)]);
var inst_33739 = (state_33766[(11)]);
var inst_33731 = (state_33766[(8)]);
var inst_33738 = (inst_33730[inst_33731] = inst_33734);
var inst_33739__$1 = (inst_33731 + (1));
var inst_33740 = (inst_33739__$1 < n);
var state_33766__$1 = (function (){var statearr_33780 = state_33766;
(statearr_33780[(12)] = inst_33738);

(statearr_33780[(11)] = inst_33739__$1);

return statearr_33780;
})();
if(cljs.core.truth_(inst_33740)){
var statearr_33781_33804 = state_33766__$1;
(statearr_33781_33804[(1)] = (8));

} else {
var statearr_33782_33805 = state_33766__$1;
(statearr_33782_33805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (14))){
var inst_33759 = (state_33766[(2)]);
var inst_33760 = cljs.core.async.close_BANG_.call(null,out);
var state_33766__$1 = (function (){var statearr_33784 = state_33766;
(statearr_33784[(13)] = inst_33759);

return statearr_33784;
})();
var statearr_33785_33806 = state_33766__$1;
(statearr_33785_33806[(2)] = inst_33760);

(statearr_33785_33806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (10))){
var inst_33750 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
var statearr_33786_33807 = state_33766__$1;
(statearr_33786_33807[(2)] = inst_33750);

(statearr_33786_33807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (8))){
var inst_33730 = (state_33766[(7)]);
var inst_33739 = (state_33766[(11)]);
var tmp33783 = inst_33730;
var inst_33730__$1 = tmp33783;
var inst_33731 = inst_33739;
var state_33766__$1 = (function (){var statearr_33787 = state_33766;
(statearr_33787[(7)] = inst_33730__$1);

(statearr_33787[(8)] = inst_33731);

return statearr_33787;
})();
var statearr_33788_33808 = state_33766__$1;
(statearr_33788_33808[(2)] = null);

(statearr_33788_33808[(1)] = (2));


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
});})(c__31978__auto___33794,out))
;
return ((function (switch__31883__auto__,c__31978__auto___33794,out){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_33789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33789[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_33789[(1)] = (1));

return statearr_33789;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_33766){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_33766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33790){if((e33790 instanceof Object)){
var ex__31887__auto__ = e33790;
var statearr_33791_33809 = state_33766;
(statearr_33791_33809[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33810 = state_33766;
state_33766 = G__33810;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_33766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_33766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___33794,out))
})();
var state__31980__auto__ = (function (){var statearr_33792 = f__31979__auto__.call(null);
(statearr_33792[(6)] = c__31978__auto___33794);

return statearr_33792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33794,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33812 = arguments.length;
switch (G__33812) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33882,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31883__auto__ = ((function (c__31978__auto___33882,out){
return (function (state_33854){
var state_val_33855 = (state_33854[(1)]);
if((state_val_33855 === (7))){
var inst_33850 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
var statearr_33856_33883 = state_33854__$1;
(statearr_33856_33883[(2)] = inst_33850);

(statearr_33856_33883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (1))){
var inst_33813 = [];
var inst_33814 = inst_33813;
var inst_33815 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33854__$1 = (function (){var statearr_33857 = state_33854;
(statearr_33857[(7)] = inst_33815);

(statearr_33857[(8)] = inst_33814);

return statearr_33857;
})();
var statearr_33858_33884 = state_33854__$1;
(statearr_33858_33884[(2)] = null);

(statearr_33858_33884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (4))){
var inst_33818 = (state_33854[(9)]);
var inst_33818__$1 = (state_33854[(2)]);
var inst_33819 = (inst_33818__$1 == null);
var inst_33820 = cljs.core.not.call(null,inst_33819);
var state_33854__$1 = (function (){var statearr_33859 = state_33854;
(statearr_33859[(9)] = inst_33818__$1);

return statearr_33859;
})();
if(inst_33820){
var statearr_33860_33885 = state_33854__$1;
(statearr_33860_33885[(1)] = (5));

} else {
var statearr_33861_33886 = state_33854__$1;
(statearr_33861_33886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (15))){
var inst_33844 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
var statearr_33862_33887 = state_33854__$1;
(statearr_33862_33887[(2)] = inst_33844);

(statearr_33862_33887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (13))){
var state_33854__$1 = state_33854;
var statearr_33863_33888 = state_33854__$1;
(statearr_33863_33888[(2)] = null);

(statearr_33863_33888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (6))){
var inst_33814 = (state_33854[(8)]);
var inst_33839 = inst_33814.length;
var inst_33840 = (inst_33839 > (0));
var state_33854__$1 = state_33854;
if(cljs.core.truth_(inst_33840)){
var statearr_33864_33889 = state_33854__$1;
(statearr_33864_33889[(1)] = (12));

} else {
var statearr_33865_33890 = state_33854__$1;
(statearr_33865_33890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (3))){
var inst_33852 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33854__$1,inst_33852);
} else {
if((state_val_33855 === (12))){
var inst_33814 = (state_33854[(8)]);
var inst_33842 = cljs.core.vec.call(null,inst_33814);
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33854__$1,(15),out,inst_33842);
} else {
if((state_val_33855 === (2))){
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33854__$1,(4),ch);
} else {
if((state_val_33855 === (11))){
var inst_33818 = (state_33854[(9)]);
var inst_33822 = (state_33854[(10)]);
var inst_33832 = (state_33854[(2)]);
var inst_33833 = [];
var inst_33834 = inst_33833.push(inst_33818);
var inst_33814 = inst_33833;
var inst_33815 = inst_33822;
var state_33854__$1 = (function (){var statearr_33866 = state_33854;
(statearr_33866[(11)] = inst_33832);

(statearr_33866[(12)] = inst_33834);

(statearr_33866[(7)] = inst_33815);

(statearr_33866[(8)] = inst_33814);

return statearr_33866;
})();
var statearr_33867_33891 = state_33854__$1;
(statearr_33867_33891[(2)] = null);

(statearr_33867_33891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (9))){
var inst_33814 = (state_33854[(8)]);
var inst_33830 = cljs.core.vec.call(null,inst_33814);
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33854__$1,(11),out,inst_33830);
} else {
if((state_val_33855 === (5))){
var inst_33818 = (state_33854[(9)]);
var inst_33822 = (state_33854[(10)]);
var inst_33815 = (state_33854[(7)]);
var inst_33822__$1 = f.call(null,inst_33818);
var inst_33823 = cljs.core._EQ_.call(null,inst_33822__$1,inst_33815);
var inst_33824 = cljs.core.keyword_identical_QMARK_.call(null,inst_33815,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33825 = ((inst_33823) || (inst_33824));
var state_33854__$1 = (function (){var statearr_33868 = state_33854;
(statearr_33868[(10)] = inst_33822__$1);

return statearr_33868;
})();
if(cljs.core.truth_(inst_33825)){
var statearr_33869_33892 = state_33854__$1;
(statearr_33869_33892[(1)] = (8));

} else {
var statearr_33870_33893 = state_33854__$1;
(statearr_33870_33893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (14))){
var inst_33847 = (state_33854[(2)]);
var inst_33848 = cljs.core.async.close_BANG_.call(null,out);
var state_33854__$1 = (function (){var statearr_33872 = state_33854;
(statearr_33872[(13)] = inst_33847);

return statearr_33872;
})();
var statearr_33873_33894 = state_33854__$1;
(statearr_33873_33894[(2)] = inst_33848);

(statearr_33873_33894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (10))){
var inst_33837 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
var statearr_33874_33895 = state_33854__$1;
(statearr_33874_33895[(2)] = inst_33837);

(statearr_33874_33895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (8))){
var inst_33818 = (state_33854[(9)]);
var inst_33822 = (state_33854[(10)]);
var inst_33814 = (state_33854[(8)]);
var inst_33827 = inst_33814.push(inst_33818);
var tmp33871 = inst_33814;
var inst_33814__$1 = tmp33871;
var inst_33815 = inst_33822;
var state_33854__$1 = (function (){var statearr_33875 = state_33854;
(statearr_33875[(14)] = inst_33827);

(statearr_33875[(7)] = inst_33815);

(statearr_33875[(8)] = inst_33814__$1);

return statearr_33875;
})();
var statearr_33876_33896 = state_33854__$1;
(statearr_33876_33896[(2)] = null);

(statearr_33876_33896[(1)] = (2));


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
});})(c__31978__auto___33882,out))
;
return ((function (switch__31883__auto__,c__31978__auto___33882,out){
return (function() {
var cljs$core$async$state_machine__31884__auto__ = null;
var cljs$core$async$state_machine__31884__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = cljs$core$async$state_machine__31884__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var cljs$core$async$state_machine__31884__auto____1 = (function (state_33854){
while(true){
var ret_value__31885__auto__ = (function (){try{while(true){
var result__31886__auto__ = switch__31883__auto__.call(null,state_33854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31886__auto__;
}
break;
}
}catch (e33878){if((e33878 instanceof Object)){
var ex__31887__auto__ = e33878;
var statearr_33879_33897 = state_33854;
(statearr_33879_33897[(5)] = ex__31887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33898 = state_33854;
state_33854 = G__33898;
continue;
} else {
return ret_value__31885__auto__;
}
break;
}
});
cljs$core$async$state_machine__31884__auto__ = function(state_33854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31884__auto____1.call(this,state_33854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31884__auto____0;
cljs$core$async$state_machine__31884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31884__auto____1;
return cljs$core$async$state_machine__31884__auto__;
})()
;})(switch__31883__auto__,c__31978__auto___33882,out))
})();
var state__31980__auto__ = (function (){var statearr_33880 = f__31979__auto__.call(null);
(statearr_33880[(6)] = c__31978__auto___33882);

return statearr_33880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33882,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1573661528890
