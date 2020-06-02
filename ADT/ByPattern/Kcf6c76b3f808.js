"use strict";
/** ZM Type:
ByPattern a ≡   ByPattern (Kb8cd13187198 (Kc23b20389114 (Kb8cd13187198 K65149ce3b366)))
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByPattern = exports.___ = exports.$ByPattern = void 0;
const Q = require("../.././lib/core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const Kc23b20389114 = require("../Match/Kc23b20389114");
const K65149ce3b366 = require("../Bit/K65149ce3b366");
exports.$ByPattern = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xcf, 0x6c, 0x76, 0xb3, 0xf8, 0x08],
    decoder: function (decoders) {
        return function (st) { return new ByPattern(Kb8cd13187198.___.decoder([Kc23b20389114.___.decoder([Kb8cd13187198.___.decoder([K65149ce3b366.___.decoder([])])])])(st)); };
    }
};
class ByPattern {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["ByPattern", this._0.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["ByPattern", this._0.pretty(true)].join(' ')); }
    match(m) { return m.ByPattern(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.ByPattern = ByPattern;
//# sourceMappingURL=Kcf6c76b3f808.js.map