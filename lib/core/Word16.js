"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word16 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x29, 0x5e, 0x24, 0xd6, 0x2f, 0xac],
    decoder: function (decoders) {
        return function (st) { return new Word16(st.word16()); };
    }
};
class Word16 {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() { return EncoderState.word16MaxSize; }
    flatEncode(st) { st.word66(this.value); }
    toString() { return this.toStr(); }
    toStr(nested = false) { return this.value.toString(); }
}
exports.Word16 = Word16;
//# sourceMappingURL=Word16.js.map