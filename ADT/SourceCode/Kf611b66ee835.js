"use strict";
/** ZM Type:
SourceCode a ≡   SourceCode a (Kb8cd13187198 K066db52af145)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K066db52af145 = require("../Char/K066db52af145");
exports.$SourceCode = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xf6, 0x11, 0xb6, 0x6e, 0xe8, 0x35],
    decoder: function (decoders) {
        return function (st) { return new SourceCode(decoders[0](st), Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)); };
    }
};
class SourceCode {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["SourceCode", this._0.toStr(true), this._1.toStr(true)].join(' ')); }
    match(m) { return m.SourceCode(this._0, this._1); }
    flatMaxSize() { return this._0.flatMaxSize() + this._1.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); this._1.flatEncode(st); }
}
exports.SourceCode = SourceCode;
//# sourceMappingURL=Kf611b66ee835.js.map