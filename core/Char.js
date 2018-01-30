"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Char = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x06, 0x6d, 0xb5, 0x2a, 0xf1, 0x45],
    decoder: function (decoders) {
        return function (st) { return new Char(String.fromCharCode(st.word())); };
    }
};
class Char {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() { return 24; }
    flatEncode(st) { st.word(this.value.charCodeAt(0)); }
    toString() { return this.toStr(); }
    toStr(nested = false) { return "'" + this.value + "'"; }
}
exports.Char = Char;
//# sourceMappingURL=Char.js.map