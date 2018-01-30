"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
exports.$ZigZag = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x03, 0x22, 0x67, 0x96, 0xed, 0xe4],
    decoder: function (decoders) {
        return function (st) { return new ZigZag(decoders[0](st)); };
    }
};
class ZigZag {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["ZigZag", this._0.toStr(true)].join(' ')); }
    match(m) { return m.ZigZag(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.ZigZag = ZigZag;
//# sourceMappingURL=K03226796ede4.js.map