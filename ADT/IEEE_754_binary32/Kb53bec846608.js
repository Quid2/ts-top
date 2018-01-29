"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K549f91f3b0ec = require("../Sign/K549f91f3b0ec");
var K74e2b3b89941 = require("../MostSignificantFirst/K74e2b3b89941");
var K9e3b8c835fe9 = require("../Bits8/K9e3b8c835fe9");
var K338888222364 = require("../Bits23/K338888222364");
exports.$IEEE_754_binary32 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xb5, 0x3b, 0xec, 0x84, 0x66, 0x08],
    decoder: function (decoders) {
        return function (st) { return new IEEE_754_binary32(K549f91f3b0ec.___.decoder([])(st), K74e2b3b89941.___.decoder([K9e3b8c835fe9.___.decoder([])])(st), K74e2b3b89941.___.decoder([K338888222364.___.decoder([])])(st)); };
    }
};
var IEEE_754_binary32 = (function () {
    function IEEE_754_binary32(sign, exponent, fraction) {
        this.sign = sign;
        this.exponent = exponent;
        this.fraction = fraction;
    }
    IEEE_754_binary32.prototype.toString = function () { return this.toStr(false); };
    IEEE_754_binary32.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["IEEE_754_binary32", this.sign.toStr(true), this.exponent.toStr(true), this.fraction.toStr(true)].join(' '));
    };
    IEEE_754_binary32.prototype.match = function (m) { return m.IEEE_754_binary32(this.sign, this.exponent, this.fraction); };
    IEEE_754_binary32.prototype.flatMaxSize = function () { return this.sign.flatMaxSize() + this.exponent.flatMaxSize() + this.fraction.flatMaxSize(); };
    IEEE_754_binary32.prototype.flatEncode = function (st) { this.sign.flatEncode(st); this.exponent.flatEncode(st); this.fraction.flatEncode(st); };
    return IEEE_754_binary32;
}());
exports.IEEE_754_binary32 = IEEE_754_binary32;
//# sourceMappingURL=Kb53bec846608.js.map