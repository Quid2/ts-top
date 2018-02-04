"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$String = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x2f, 0x00, 0x65, 0x95, 0x63, 0x8c],
    decoder: function (decoders) {
        return function (st) { return new String(st.string()); };
    }
};
class String {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return '"' + this._0.toString() + '"'; }
    flatMaxSize() { return this._0.length * 25 + 1; }
    flatEncode(st) { st.string(this._0); }
}
exports.String = String;
//# sourceMappingURL=String.js.map