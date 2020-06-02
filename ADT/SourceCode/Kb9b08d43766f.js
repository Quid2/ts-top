"use strict";
/** ZM Type:
SourceCode a ≡   SourceCode a K2f006595638c
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCode = exports.___ = exports.$SourceCode = void 0;
const Q = require("../.././lib/core");
const K2f006595638c = require("../String/K2f006595638c");
exports.$SourceCode = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xb9, 0xb0, 0x8d, 0x43, 0x76, 0x6f],
    decoder: function (decoders) {
        return function (st) { return new SourceCode(decoders[0](st), K2f006595638c.___.decoder([])(st)); };
    }
};
class SourceCode {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["SourceCode", this._0.toStr(true), this._1.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["SourceCode", this._0.pretty(true), this._1.pretty(true)].join(' ')); }
    match(m) { return m.SourceCode(this._0, this._1); }
    flatMaxSize() { return this._0.flatMaxSize() + this._1.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); this._1.flatEncode(st); }
}
exports.SourceCode = SourceCode;
//# sourceMappingURL=Kb9b08d43766f.js.map