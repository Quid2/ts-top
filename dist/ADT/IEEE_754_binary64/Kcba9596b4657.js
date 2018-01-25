"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IEEE_754_binary64 = function (f) { return f(___, []); };
var ___ = {
    zid: [0xcb, 0xa9, 0x59, 0x6b, 0x46, 0x57],
    decoder: function (decoders) {
        return function (st) { return new IEEE_754_binary64(decoders[0](st), decoders[1](st), decoders[2](st)); };
    }
};
var IEEE_754_binary64 = (function () {
    function IEEE_754_binary64(sign, exponent, fraction) {
        this.sign = sign;
        this.exponent = exponent;
        this.fraction = fraction;
    }
    IEEE_754_binary64.prototype.match = function (m) { return m.IEEE_754_binary64(this.sign, this.exponent, this.fraction); };
    IEEE_754_binary64.prototype.flatMaxSize = function () { return this.sign.flatMaxSize() + this.exponent.flatMaxSize() + this.fraction.flatMaxSize(); };
    IEEE_754_binary64.prototype.flatEncode = function (st) { this.sign.flatEncode(st); this.exponent.flatEncode(st); this.fraction.flatEncode(st); };
    return IEEE_754_binary64;
}());
exports.IEEE_754_binary64 = IEEE_754_binary64;
//# sourceMappingURL=Kcba9596b4657.js.map