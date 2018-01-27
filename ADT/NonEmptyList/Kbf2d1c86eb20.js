"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
exports.$NonEmptyList = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xbf, 0x2d, 0x1c, 0x86, 0xeb, 0x20],
    decoder: function (decoders) {
        var decs = { "Elem": [Q.zmConst(decoders[0])(Q.flatDecoder)], "Cons": [Q.zmConst(decoders[0])(Q.flatDecoder), exports.$NonEmptyList(Q.zmConst(decoders[0]))(Q.flatDecoder)] };
        return function (st) { if (st.zero()) {
            var d = decs["Elem"];
            return new Elem(d[0](st));
        }
        else {
            var d = decs["Cons"];
            return new Cons(d[0](st), d[1](st));
        } };
    }
};
var Elem = (function () {
    function Elem(_0) {
        this._0 = _0;
    }
    Elem.prototype.match = function (m) { return m.Elem(this._0); };
    Elem.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Elem.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Elem;
}());
exports.Elem = Elem;
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
//# sourceMappingURL=Kbf2d1c86eb20.js.map