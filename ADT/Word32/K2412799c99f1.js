"use strict";
/** ZM Type:
Word32 ≡   Word32 Kf92e8339908a
*/
exports.__esModule = true;
exports.Word32 = exports.___ = exports.$Word32 = void 0;
var Q = require("@quid2/ts-core");
exports.$Word32 = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x24, 0x12, 0x79, 0x9c, 0x99, 0xf1],
    decoder: function (decoders) {
        return function (st) {
            return new Word32(st.zmWord32(decoders));
        };
    }
};
var Word32 = /** @class */ (function () {
    function Word32(value) {
        this.value = value;
    }
    Word32.prototype.flatMaxSize = function () {
        return Q.EncoderState.szWord32(this.value);
    };
    Word32.prototype.flatEncode = function (st) {
        st.zmWord32(this.value);
    };
    Word32.prototype.toString = function () {
        return this.toStr(false);
    };
    Word32.prototype.toStr = function (nested) {
        return this.value.toString();
    };
    Word32.prototype.pretty = function (nested) {
        return this.toString();
    };
    return Word32;
}());
exports.Word32 = Word32;
