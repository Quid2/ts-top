"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Char = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x06, 0x6d, 0xb5, 0x2a, 0xf1, 0x45],
    decoder: function (decoders) {
        return function (st) { return new Char(st.char()); };
    }
};
class Char {
    constructor(_0) {
        this._0 = _0;
    }
    flatMaxSize() { return 24; }
    flatEncode(st) { st.char(this._0); }
    toString() { return this.toStr(); }
    toStr(nested = false) { return "'" + this._0.toString() + "'"; }
    pretty(nested) { return this.toString(); }
}
exports.Char = Char;
//# sourceMappingURL=Char.js.map