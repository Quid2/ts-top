"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
exports.$Function = function (t1, t2, t3) { return function (f) { return f(exports.___, [t1(f), t2(f), t3(f)]); }; };
exports.___ = {
    zid: [0x56, 0x17, 0x9b, 0xc1, 0x1d, 0xc1],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Call(decoders[0](st));
        }
        else {
            return new Reply(decoders[1](st), decoders[2](st));
        } };
    }
};
class Call {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Call", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Call(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); this._0.flatEncode(st); }
}
exports.Call = Call;
class Reply {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Reply", this._0.toStr(true), this._1.toStr(true)].join(' ')); }
    match(m) { return m.Reply(this._0, this._1); }
    flatMaxSize() { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); }
    flatEncode(st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); }
}
exports.Reply = Reply;
//# sourceMappingURL=K56179bc11dc1.js.map