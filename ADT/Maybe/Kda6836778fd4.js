"use strict";
/** ZM Type:
Maybe a ≡   Nothing
          | Just a
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
exports.$Maybe = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xda, 0x68, 0x36, 0x77, 0x8f, 0xd4],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Nothing();
        }
        else {
            return new Just(decoders[0](st));
        } };
    }
};
class Nothing {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "Nothing"; }
    match(m) { return m.Nothing; }
    flatMaxSize() { return 1 + 0; }
    flatEncode(st) { st.zero(); }
}
exports.Nothing = Nothing;
class Just {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Just", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Just(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); this._0.flatEncode(st); }
}
exports.Just = Just;
//# sourceMappingURL=Kda6836778fd4.js.map