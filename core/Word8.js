"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word8 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xb1, 0xf4, 0x6a, 0x49, 0xc8, 0xf8],
    decoder: function (decoders) {
        return function (st) { return new Word8(st.bits8(8)); };
    }
};
var Word8 = (function () {
    function Word8(value) {
        this.value = value;
    }
    Word8.prototype.flatMaxSize = function () { return 8; };
    Word8.prototype.flatEncode = function (st) { st.bits(8, this.value); };
    return Word8;
}());
exports.Word8 = Word8;
//# sourceMappingURL=Word8.js.map