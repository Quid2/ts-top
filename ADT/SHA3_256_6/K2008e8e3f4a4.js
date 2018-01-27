"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$SHA3_256_6 = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0x20, 0x08, 0xe8, 0xe3, 0xf4, 0xa4],
    decoder: function (decoders) {
        var decs = { "SHA3_256_6": [Kb1f46a49c8f8.$Word8(Q.flatDecoder), Kb1f46a49c8f8.$Word8(Q.flatDecoder), Kb1f46a49c8f8.$Word8(Q.flatDecoder), Kb1f46a49c8f8.$Word8(Q.flatDecoder), Kb1f46a49c8f8.$Word8(Q.flatDecoder), Kb1f46a49c8f8.$Word8(Q.flatDecoder)] };
        return function (st) { var d = decs["SHA3_256_6"]; return new SHA3_256_6(d[0](st), d[1](st), d[2](st), d[3](st), d[4](st), d[5](st)); };
    }
};
var SHA3_256_6 = (function () {
    function SHA3_256_6(_0, _1, _2, _3, _4, _5) {
        this._0 = _0;
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
    }
    SHA3_256_6.prototype.match = function (m) { return m.SHA3_256_6(this._0, this._1, this._2, this._3, this._4, this._5); };
    SHA3_256_6.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize() + this._2.flatMaxSize() + this._3.flatMaxSize() + this._4.flatMaxSize() + this._5.flatMaxSize(); };
    SHA3_256_6.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); this._2.flatEncode(st); this._3.flatEncode(st); this._4.flatEncode(st); this._5.flatEncode(st); };
    return SHA3_256_6;
}());
exports.SHA3_256_6 = SHA3_256_6;
//# sourceMappingURL=K2008e8e3f4a4.js.map