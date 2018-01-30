"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const K3878b3580fc5 = require("../UnicodeLetter/K3878b3580fc5");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K33445520c45a = require("../UnicodeLetterOrNumberOrLine/K33445520c45a");
const Kbf2d1c86eb20 = require("../NonEmptyList/Kbf2d1c86eb20");
const K801030ef543c = require("../UnicodeSymbol/K801030ef543c");
exports.$Identifier = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xdc, 0x26, 0xe9, 0xd9, 0x00, 0x47],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Name(K3878b3580fc5.___.decoder([])(st), Kb8cd13187198.___.decoder([K33445520c45a.___.decoder([])])(st));
        }
        else {
            return new Symbol(Kbf2d1c86eb20.___.decoder([K801030ef543c.___.decoder([])])(st));
        } };
    }
};
class Name {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Name", this._0.toStr(true), this._1.toStr(true)].join(' ')); }
    match(m) { return m.Name(this._0, this._1); }
    flatMaxSize() { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); }
    flatEncode(st) { st.zero(); this._0.flatEncode(st); this._1.flatEncode(st); }
}
exports.Name = Name;
class Symbol {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Symbol", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Symbol(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); this._0.flatEncode(st); }
}
exports.Symbol = Symbol;
//# sourceMappingURL=Kdc26e9d90047.js.map