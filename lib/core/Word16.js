"use strict";
exports.__esModule = true;
exports.$Word16 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x29, 0x5e, 0x24, 0xd6, 0x2f, 0xac],
    decoder: function (decoders) {
        return function (st) { return new Word16(st.word()); };
    }
};
var Word16 = /** @class */ (function () {
    function Word16(value) {
        this.value = value;
    }
    Word16.prototype.flatMaxSize = function () { return 24; };
    Word16.prototype.flatEncode = function (st) { st.word(this.value); };
    Word16.prototype.toString = function () { return this.toStr(); };
    Word16.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return this.value.toString();
    };
    return Word16;
}());
exports.Word16 = Word16;
