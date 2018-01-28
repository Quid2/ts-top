"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$SHAKE128_48 = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x9f, 0x21, 0x47, 0x99, 0x14, 0x9b],
    decoder: function (decoders) {
        return function (st) { return new SHAKE128_48(Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st)); };
    }
};
var SHAKE128_48 = (function () {
    function SHAKE128_48(_0, _1, _2, _3, _4, _5) {
        this._0 = _0;
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
    }
    SHAKE128_48.prototype.match = function (m) { return m.SHAKE128_48(this._0, this._1, this._2, this._3, this._4, this._5); };
    SHAKE128_48.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize() + this._2.flatMaxSize() + this._3.flatMaxSize() + this._4.flatMaxSize() + this._5.flatMaxSize(); };
    SHAKE128_48.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); this._2.flatEncode(st); this._3.flatEncode(st); this._4.flatEncode(st); this._5.flatEncode(st); };
    return SHAKE128_48;
}());
exports.SHAKE128_48 = SHAKE128_48;
//# sourceMappingURL=K9f214799149b.js.map