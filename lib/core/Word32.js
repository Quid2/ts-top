"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word32 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x24, 0x12, 0x79, 0x9c, 0x99, 0xf1],
    decoder: function (decoders) {
        return function (st) { return new Word32(st.word()); };
    }
};
class Word32 {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() { return 40; }
    flatEncode(st) { st.word(this.value); }
    toString() { return this.toStr(); }
    toStr(nested = false) { return this.value.toString(); }
}
exports.Word32 = Word32;
//# sourceMappingURL=Word32.js.map