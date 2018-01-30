"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word8 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xb1, 0xf4, 0x6a, 0x49, 0xc8, 0xf8],
    decoder: function (decoders) {
        return function (st) { return new Word8(st.bits8(8)); };
    }
};
class Word8 {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() { return 8; }
    flatEncode(st) { st.bits(8, this.value); }
    toString() { return this.toStr(); }
    toStr(nested = false) { return this.value.toString(); }
}
exports.Word8 = Word8;
//# sourceMappingURL=Word8.js.map