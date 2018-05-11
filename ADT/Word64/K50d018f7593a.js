"use strict";
/** ZM Type:
Word64 ≡   Word64 Kf92e8339908a
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const Kf92e8339908a = require("../Word/Kf92e8339908a");
exports.$Word64 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x50, 0xd0, 0x18, 0xf7, 0x59, 0x3a],
    decoder: function (decoders) {
        return function (st) { return new Word64(Kf92e8339908a.___.decoder([])(st)); };
    }
};
class Word64 {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Word64", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Word64(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.Word64 = Word64;
//# sourceMappingURL=K50d018f7593a.js.map