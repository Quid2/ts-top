"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Char = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x06, 0x6d, 0xb5, 0x2a, 0xf1, 0x45],
    decoder: function (decoders) {
        return function (st) { return new Char(String.fromCharCode(st.word())); };
    }
};
var Char = (function () {
    function Char(value) {
        this.value = value;
    }
    Char.prototype.flatMaxSize = function () { return 24; };
    Char.prototype.flatEncode = function (st) { st.word(this.value.charCodeAt(0)); };
    Char.prototype.toString = function () { return this.toStr(); };
    Char.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "'" + this.value + "'";
    };
    return Char;
}());
exports.Char = Char;
//# sourceMappingURL=Char.js.map