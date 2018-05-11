"use strict";
/** ZM Type:
Either a b ≡   Left a
             | Right b
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
exports.$Either = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x62, 0x60, 0xe4, 0x65, 0xae, 0x74],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Left(decoders[0](st));
        }
        else {
            return new Right(decoders[1](st));
        } };
    }
};
class Left {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Left", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Left(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); this._0.flatEncode(st); }
}
exports.Left = Left;
class Right {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Right", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Right(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); this._0.flatEncode(st); }
}
exports.Right = Right;
//# sourceMappingURL=K6260e465ae74.js.map