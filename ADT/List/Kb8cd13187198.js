"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
exports.$List = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xb8, 0xcd, 0x13, 0x18, 0x71, 0x98],
    decoder: function (decoders) {
        var decs = { "Cons": [Q.zmConst(decoders[0])(Q.flatDecoder), exports.$List(Q.zmConst(decoders[0]))(Q.flatDecoder)] };
        return function (st) { if (st.zero()) {
            return new Nil();
        }
        else {
            var d = decs["Cons"];
            return new Cons(d[0](st), d[1](st));
        } };
    }
};
var Nil = (function () {
    function Nil() {
    }
    Nil.prototype.match = function (m) { return m.Nil; };
    Nil.prototype.flatMaxSize = function () { return 1 + 0; };
    Nil.prototype.flatEncode = function (st) { st.zero(); };
    return Nil;
}());
exports.Nil = Nil;
var Cons = (function () {
    function Cons(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Cons.prototype.match = function (m) { return m.Cons(this._0, this._1); };
    Cons.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Cons.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Cons;
}());
exports.Cons = Cons;
//# sourceMappingURL=Kb8cd13187198.js.map