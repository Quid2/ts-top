"use strict";
/** ZM Type:
Word7 ≡   V0
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
exports.$Word7 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf4, 0xc9, 0x46, 0x33, 0x4a, 0x7e],
    decoder: function (decoders) {
        return function (st) { return new Word7(st.zmWord7(decoders)); };
    }
};
var Word7 = /** @class */ (function () {
    function Word7(value) {
        this.value = value;
    }
    Word7.prototype.flatMaxSize = function () { return Q.EncoderState.szWord7(this.value); };
    Word7.prototype.flatEncode = function (st) { st.zmWord7(this.value); };
    Word7.prototype.toString = function () { return this.toStr(false); };
    Word7.prototype.toStr = function (nested) { return this.value.toString(); };
    Word7.prototype.pretty = function (nested) { return this.toString(); };
    return Word7;
}());
exports.Word7 = Word7;
