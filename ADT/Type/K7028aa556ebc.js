"use strict";
/** ZM Type:
Type a ≡   TypeCon a
         | TypeApp (↫ a) (↫ a)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
exports.$Type = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x70, 0x28, 0xaa, 0x55, 0x6e, 0xbc],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new TypeCon(decoders[0](st));
        }
        else {
            return new TypeApp(exports.___.decoder([decoders[0]])(st), exports.___.decoder([decoders[0]])(st));
        } };
    }
};
class TypeCon {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["TypeCon", this._0.toStr(true)].join(' ')); }
    match(m) { return m.TypeCon(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); this._0.flatEncode(st); }
}
exports.TypeCon = TypeCon;
class TypeApp {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["TypeApp", this._0.toStr(true), this._1.toStr(true)].join(' ')); }
    match(m) { return m.TypeApp(this._0, this._1); }
    flatMaxSize() { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); }
    flatEncode(st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); }
}
exports.TypeApp = TypeApp;
//# sourceMappingURL=K7028aa556ebc.js.map