"use strict";
/** ZM Type:
StoreProtocol a ≡   Save a
                  | Solve (K9f214799149b a)
                  | Solved (K
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K9f214799149b = require("../SHAKE128_48/K9f214799149b");
exports.$StoreProtocol = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xe8, 0x38, 0x59, 0xe5, 0x2e, 0x9a],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Save(decoders[0](st));
        }
        else {
            if (st.zero()) {
                return new Solve(K9f214799149b.___.decoder([decoders[0]])(st));
            }
            else {
                return new Solved(K9f214799149b.___.decoder([decoders[0]])(st), decoders[0](st));
            }
        } };
    }
};
class Save {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Save", this._0.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["Save", this._0.pretty(true)].join(' ')); }
    match(m) { return m.Save(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); this._0.flatEncode(st); }
}
exports.Save = Save;
class Solve {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Solve", this._0.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["Solve", this._0.pretty(true)].join(' ')); }
    match(m) { return m.Solve(this._0); }
    flatMaxSize() { return 2 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); st.zero(); this._0.flatEncode(st); }
}
exports.Solve = Solve;
class Solved {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Solved", this._0.toStr(true), this._1.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["Solved", this._0.pretty(true), this._1.pretty(true)].join(' ')); }
    match(m) { return m.Solved(this._0, this._1); }
    flatMaxSize() { return 2 + this._0.flatMaxSize() + this._1.flatMaxSize(); }
    flatEncode(st) { st.one(); st.one(); this._0.flatEncode(st); this._1.flatEncode(st); }
}
exports.Solved = Solved;
//# sourceMappingURL=Ke83859e52e9a.js.map