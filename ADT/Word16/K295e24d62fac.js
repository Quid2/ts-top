"use strict";
/** ZM Type:
Word16 ≡   Word16 Kf92e8339908a
*/
exports.__esModule = true;
exports.Word16 = exports.___ = exports.$Word16 = void 0;
var Q = require("@quid2/ts-core");
exports.$Word16 = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x29, 0x5e, 0x24, 0xd6, 0x2f, 0xac],
    decoder: function (decoders) {
        return function (st) {
            return new Word16(st.zmWord16(decoders));
        };
    }
};
var Word16 = /** @class */ (function () {
    function Word16(value) {
        this.value = value;
    }
    Word16.prototype.flatMaxSize = function () {
        return Q.EncoderState.szWord16(this.value);
    };
    Word16.prototype.flatEncode = function (st) {
        st.zmWord16(this.value);
    };
    Word16.prototype.toString = function () {
        return this.toStr(false);
    };
    Word16.prototype.toStr = function (nested) {
        return this.value.toString();
    };
    Word16.prototype.pretty = function (nested) {
        return this.toString();
    };
    return Word16;
}());
exports.Word16 = Word16;
