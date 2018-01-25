"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Tuple2 = function (t1, t2) { return function (f) { return f(___, [t1(f), t2(f)]); }; };
var ___ = {
    zid: [0xa5, 0x58, 0x3b, 0xf3, 0xad, 0x34],
    decoder: function (decoders) {
        return function (st) { return new Tuple2(decoders[0](st), decoders[1](st)); };
    }
};
var Tuple2 = (function () {
    function Tuple2(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Tuple2.prototype.match = function (m) { return m.Tuple2(this._0, this._1); };
    Tuple2.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Tuple2.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); };
    return Tuple2;
}());
exports.Tuple2 = Tuple2;
//# sourceMappingURL=Ka5583bf3ad34.js.map