"use strict";
/** ZM Type:
Issues a b ≡   Issues {errors :: Kb8cd13187198 a,
                       warnings :: Kb8cd13187198 b}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issues = exports.___ = exports.$Issues = void 0;
const Q = require("../.././lib/core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
exports.$Issues = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0xd0, 0x79, 0x03, 0x79, 0xc6, 0x31],
    decoder: function (decoders) {
        return function (st) { return new Issues(Kb8cd13187198.___.decoder([decoders[0]])(st), Kb8cd13187198.___.decoder([decoders[1]])(st)); };
    }
};
class Issues {
    constructor(errors, warnings) {
        this.errors = errors;
        this.warnings = warnings;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Issues", this.errors.toStr(true), this.warnings.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["Issues", this.errors.pretty(true), this.warnings.pretty(true)].join(' ')); }
    match(m) { return m.Issues(this.errors, this.warnings); }
    flatMaxSize() { return this.errors.flatMaxSize() + this.warnings.flatMaxSize(); }
    flatEncode(st) { this.errors.flatEncode(st); this.warnings.flatEncode(st); }
}
exports.Issues = Issues;
//# sourceMappingURL=Kd0790379c631.js.map