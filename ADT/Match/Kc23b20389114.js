"use strict";
/** ZM Type:
Match a ≡   MatchValue a
          | MatchAny (K7028aa556ebc K4bbd38587b9e)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K7028aa556ebc = require("../Type/K7028aa556ebc");
const K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
exports.$Match = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xc2, 0x3b, 0x20, 0x38, 0x91, 0x14],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new MatchValue(decoders[0](st));
        }
        else {
            return new MatchAny(K7028aa556ebc.___.decoder([K4bbd38587b9e.___.decoder([])])(st));
        } };
    }
};
class MatchValue {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["MatchValue", this._0.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["MatchValue", this._0.pretty(true)].join(' ')); }
    match(m) { return m.MatchValue(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); this._0.flatEncode(st); }
}
exports.MatchValue = MatchValue;
class MatchAny {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["MatchAny", this._0.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["MatchAny", this._0.pretty(true)].join(' ')); }
    match(m) { return m.MatchAny(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); this._0.flatEncode(st); }
}
exports.MatchAny = MatchAny;
//# sourceMappingURL=Kc23b20389114.js.map