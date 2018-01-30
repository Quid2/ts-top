"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeSymbol = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x80, 0x10, 0x30, 0xef, 0x54, 0x3c],
    decoder: function (decoders) {
        return function (st) { return new UnicodeSymbol(K066db52af145.___.decoder([])(st)); };
    }
};
class UnicodeSymbol {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["UnicodeSymbol", this._0.toStr(true)].join(' ')); }
    match(m) { return m.UnicodeSymbol(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.UnicodeSymbol = UnicodeSymbol;
//# sourceMappingURL=K801030ef543c.js.map