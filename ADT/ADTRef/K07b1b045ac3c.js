"use strict";
/** ZM Type:
ADTRef a ≡   Var Kb1f46a49c8f8
           | Rec
           | Ext a
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$ADTRef = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x07, 0xb1, 0xb0, 0x45, 0xac, 0x3c],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Var(Kb1f46a49c8f8.___.decoder([])(st));
        }
        else {
            if (st.zero()) {
                return new Rec();
            }
            else {
                return new Ext(decoders[0](st));
            }
        } };
    }
};
class Var {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Var", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Var(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); this._0.flatEncode(st); }
}
exports.Var = Var;
class Rec {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "Rec"; }
    match(m) { return m.Rec; }
    flatMaxSize() { return 2 + 0; }
    flatEncode(st) { st.one(); st.zero(); }
}
exports.Rec = Rec;
class Ext {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Ext", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Ext(this._0); }
    flatMaxSize() { return 2 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); st.one(); this._0.flatEncode(st); }
}
exports.Ext = Ext;
//# sourceMappingURL=K07b1b045ac3c.js.map