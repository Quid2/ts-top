"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IEEE_754_binary32 = function (f) { return f(___, []); };
var ___ = {
    zid: [0xb5, 0x3b, 0xec, 0x84, 0x66, 0x08],
    decoder: function (decoders) {
        return function (st) { return new IEEE_754_binary32(decoders[0](st), decoders[1](st), decoders[2](st)); };
    }
};
var IEEE_754_binary32 = (function () {
    function IEEE_754_binary32(sign, exponent, fraction) {
        this.sign = sign;
        this.exponent = exponent;
        this.fraction = fraction;
    }
    IEEE_754_binary32.prototype.match = function (m) { return m.IEEE_754_binary32(this.sign, this.exponent, this.fraction); };
    IEEE_754_binary32.prototype.flatMaxSize = function () { return this.sign.flatMaxSize() + this.exponent.flatMaxSize() + this.fraction.flatMaxSize(); };
    IEEE_754_binary32.prototype.flatEncode = function (st) { this.sign.flatEncode(st); this.exponent.flatEncode(st); this.fraction.flatEncode(st); };
    return IEEE_754_binary32;
}());
exports.IEEE_754_binary32 = IEEE_754_binary32;
//# sourceMappingURL=Kb53bec846608.js.map