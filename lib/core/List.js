"use strict";
exports.__esModule = true;
var Q = require("../core");
exports.$List = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xb8, 0xcd, 0x13, 0x18, 0x71, 0x98],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Nil();
        }
        else {
            return new Cons(decoders[0](st), exports.___.decoder([decoders[0]])(st));
        } };
    }
};
var Nil = /** @class */ (function () {
    function Nil() {
        this.length = function () { return 0; };
    }
    Nil.prototype.toString = function () { return this.toStr(false); };
    Nil.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Nil";
    };
    Nil.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "[]";
    };
    Nil.prototype.match = function (m) { return m.Nil; };
    Nil.prototype.flatMaxSize = function () { return 1 + 0; };
    Nil.prototype.flatEncode = function (st) { st.zero(); };
    Nil.prototype[Symbol.iterator] = function () { return { next: function () { return { done: true, value: undefined }; } }; };
    return Nil;
}());
exports.Nil = Nil;
var Cons = /** @class */ (function () {
    function Cons(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Cons.prototype.toString = function () { return this.toStr(false); };
    Cons.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Cons", this._0.toStr(true), this._1.toStr(true)].join(' '));
    };
    Cons.prototype.match = function (m) { return m.Cons(this._0, this._1); };
    Cons.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Cons.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    // TODO FIX
    // *[Symbol.iterator]() {
    //   yield this._0;
    //   var l: List<A> = this;
    // }
    // [Symbol.iterator]() {
    //   var l: List<A> = this;
    //   return {
    //     next: function () {
    //       if (l instanceof Nil) {
    //         return { done: true, value: undefined }
    //       }
    //       else {
    //         const c: Cons<A> = <Cons<A>>l;
    //         l = c._1;
    //         return { done: false, value: c._0 }
    //       }
    //     }
    //   }
    // }
    // pretty(nested = false): string {
    //   var nxt = false;
    //   var p = "[";
    //   for (let e of this) {
    //     if (nxt) p = ",";
    //     nxt = true;
    //     p += (<A>e).pretty(false)
    //   }
    //   return p + "]";
    // }
    Cons.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return this.prettyList();
        //return (this._0 instanceof Char) ? this.prettyString() : this.prettyList();
    };
    Cons.prototype.prettyList = function (nested) {
        if (nested === void 0) { nested = false; }
        var p = "[" + this._0.pretty(false);
        var l = this._1;
        while (l instanceof Cons) {
            p += "," + l._0.pretty(false);
            l = l._1;
        }
        ;
        return p + "]";
    };
    return Cons;
}());
exports.Cons = Cons;
function prettyString(l) {
    return '"' + prettyConcat(l) + '"';
}
exports.prettyString = prettyString;
function prettyConcat(l, separator) {
    if (separator === void 0) { separator = ""; }
    return l.match({
        Nil: "",
        Cons: function (h, t) { return h.pretty() + separator + prettyConcat(t); }
    });
}
exports.prettyConcat = prettyConcat;
function asArray(l, vs) {
    var vss = vs ? vs : new Array();
    return l.match({
        Nil: vss,
        Cons: function (h, t) {
            vss.push(h);
            return asArray(t, vss);
        }
    });
}
exports.asArray = asArray;
