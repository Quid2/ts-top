"use strict";
exports.__esModule = true;
exports.$Word32 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x24, 0x12, 0x79, 0x9c, 0x99, 0xf1],
    decoder: function (decoders) {
        return function (st) { return new Word32(st.word()); };
    }
};
var Word32 = /** @class */ (function () {
    function Word32(value) {
        this.value = value;
    }
    Word32.prototype.flatMaxSize = function () { return 40; };
    Word32.prototype.flatEncode = function (st) { st.word(this.value); };
    Word32.prototype.toString = function () { return this.toStr(); };
    Word32.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return this.value.toString();
    };
    return Word32;
}());
exports.Word32 = Word32;
