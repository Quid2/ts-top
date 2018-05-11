"use strict";
/** ZM Type:
Int64 ≡   Int64 (K03226796ede4 K50d018f7593a)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K03226796ede4 = require("../ZigZag/K03226796ede4");
const K50d018f7593a = require("../Word64/K50d018f7593a");
exports.$Int64 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xfb, 0x94, 0xcb, 0x4d, 0x4e, 0xde],
    decoder: function (decoders) {
        return function (st) { return new Int64(K03226796ede4.___.decoder([K50d018f7593a.___.decoder([])])(st)); };
    }
};
class Int64 {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Int64", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Int64(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.Int64 = Int64;
//# sourceMappingURL=Kfb94cb4d4ede.js.map