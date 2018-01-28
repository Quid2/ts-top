"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word7 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf4, 0xc9, 0x46, 0x33, 0x4a, 0x7e],
    decoder: function (decoders) {
        return function (st) { return new Word7(st.bits8(7)); };
    }
};
var Word7 = (function () {
    function Word7(value) {
        this.value = value;
    }
    Word7.prototype.flatMaxSize = function () { return 7; };
    Word7.prototype.flatEncode = function (st) { st.bits(7, this.value); };
    return Word7;
}());
exports.Word7 = Word7;
//# sourceMappingURL=Word7.js.map