"use strict";
/** ZM Type:
Int8 ≡   Int8 (K03226796ede4 Kb1f46a49c8f8)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K03226796ede4 = require("../ZigZag/K03226796ede4");
const Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$Int8 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xb3, 0xa2, 0x64, 0x2b, 0x4a, 0x84],
    decoder: function (decoders) {
        return function (st) { return new Int8(K03226796ede4.___.decoder([Kb1f46a49c8f8.___.decoder([])])(st)); };
    }
};
class Int8 {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Int8", this._0.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["Int8", this._0.pretty(true)].join(' ')); }
    match(m) { return m.Int8(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.Int8 = Int8;
//# sourceMappingURL=Kb3a2642b4a84.js.map