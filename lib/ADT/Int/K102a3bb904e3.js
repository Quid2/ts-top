"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const K03226796ede4 = require("../ZigZag/K03226796ede4");
const Kf92e8339908a = require("../Word/Kf92e8339908a");
exports.$Int = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x10, 0x2a, 0x3b, 0xb9, 0x04, 0xe3],
    decoder: function (decoders) {
        return function (st) { return new Int(K03226796ede4.___.decoder([Kf92e8339908a.___.decoder([])])(st)); };
    }
};
class Int {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Int", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Int(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.Int = Int;
//# sourceMappingURL=K102a3bb904e3.js.map