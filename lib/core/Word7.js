"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word7 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf4, 0xc9, 0x46, 0x33, 0x4a, 0x7e],
    decoder: function (decoders) {
        return function (st) { return new Word7(st.bits8(7)); };
    }
};
class Word7 {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() { return 7; }
    flatEncode(st) { st.bits(7, this.value); }
    toString() { return this.toStr(); }
    toStr(nested = false) { return this.value.toString(); }
}
exports.Word7 = Word7;
//# sourceMappingURL=Word7.js.map