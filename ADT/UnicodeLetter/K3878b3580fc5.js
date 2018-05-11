"use strict";
/** ZM Type:
UnicodeLetter ≡   UnicodeLetter K066db52af145
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeLetter = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x38, 0x78, 0xb3, 0x58, 0x0f, 0xc5],
    decoder: function (decoders) {
        return function (st) { return new UnicodeLetter(K066db52af145.___.decoder([])(st)); };
    }
};
class UnicodeLetter {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["UnicodeLetter", this._0.toStr(true)].join(' ')); }
    match(m) { return m.UnicodeLetter(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.UnicodeLetter = UnicodeLetter;
//# sourceMappingURL=K3878b3580fc5.js.map