"use strict";
/** ZM Type:
MostSignificantFirst a ≡   MostSignificantFirst a
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
exports.$MostSignificantFirst = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x74, 0xe2, 0xb3, 0xb8, 0x99, 0x41],
    decoder: function (decoders) {
        return function (st) { return new MostSignificantFirst(decoders[0](st)); };
    }
};
class MostSignificantFirst {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["MostSignificantFirst", this._0.toStr(true)].join(' ')); }
    match(m) { return m.MostSignificantFirst(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.MostSignificantFirst = MostSignificantFirst;
//# sourceMappingURL=K74e2b3b89941.js.map