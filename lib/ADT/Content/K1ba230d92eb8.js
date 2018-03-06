"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K066db52af145 = require("../Char/K066db52af145");
exports.$Content = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x1b, 0xa2, 0x30, 0xd9, 0x2e, 0xb8],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new TextMsg(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
        }
        else {
            return new Join();
        } };
    }
};
class TextMsg {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["TextMsg", this._0.toStr(true)].join(' ')); }
    match(m) { return m.TextMsg(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); this._0.flatEncode(st); }
}
exports.TextMsg = TextMsg;
class Join {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "Join"; }
    match(m) { return m.Join; }
    flatMaxSize() { return 1 + 0; }
    flatEncode(st) { st.one(); }
}
exports.Join = Join;
//# sourceMappingURL=K1ba230d92eb8.js.map