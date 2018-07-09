"use strict";
/** ZM Type:
Word8 ≡   V0
        | V1
        | V2
        | V3
        | V4
        | V5
        | V6
        |
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
exports.$Word8 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xb1, 0xf4, 0x6a, 0x49, 0xc8, 0xf8],
    decoder: function (decoders) {
        return function (st) { return new Word8(st.zmWord8(decoders)); };
    }
};
var Word8 = /** @class */ (function () {
    function Word8(value) {
        this.value = value;
    }
    Word8.prototype.flatMaxSize = function () { return Q.EncoderState.szWord8(this.value); };
    Word8.prototype.flatEncode = function (st) { st.zmWord8(this.value); };
    Word8.prototype.toString = function () { return this.toStr(false); };
    Word8.prototype.toStr = function (nested) { return this.value.toString(); };
    Word8.prototype.pretty = function (nested) { return this.toString(); };
    return Word8;
}());
exports.Word8 = Word8;
