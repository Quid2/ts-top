"use strict";
/** ZM Type:
SHA3_256_6 a ≡   SHA3_256_6 Kb1f46a49c8f8
                            Kb1f46a49c8f8
                            Kb1f46a49c8f8
                            Kb1f46a49c8f8
                            Kb1f46a49c8f8
                            Kb1f46a49c8f8
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$SHA3_256_6 = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x20, 0x08, 0xe8, 0xe3, 0xf4, 0xa4],
    decoder: function (decoders) {
        return function (st) { return new SHA3_256_6(Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st)); };
    }
};
class SHA3_256_6 {
    constructor(_0, _1, _2, _3, _4, _5) {
        this._0 = _0;
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["SHA3_256_6", this._0.toStr(true), this._1.toStr(true), this._2.toStr(true), this._3.toStr(true), this._4.toStr(true), this._5.toStr(true)].join(' ')); }
    match(m) { return m.SHA3_256_6(this._0, this._1, this._2, this._3, this._4, this._5); }
    flatMaxSize() { return this._0.flatMaxSize() + this._1.flatMaxSize() + this._2.flatMaxSize() + this._3.flatMaxSize() + this._4.flatMaxSize() + this._5.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); this._1.flatEncode(st); this._2.flatEncode(st); this._3.flatEncode(st); this._4.flatEncode(st); this._5.flatEncode(st); }
}
exports.SHA3_256_6 = SHA3_256_6;
//# sourceMappingURL=K2008e8e3f4a4.js.map