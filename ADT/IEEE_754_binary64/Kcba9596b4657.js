"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K549f91f3b0ec = require("../Sign/K549f91f3b0ec");
var K74e2b3b89941 = require("../MostSignificantFirst/K74e2b3b89941");
var K8ae75e67a616 = require("../Bits11/K8ae75e67a616");
var Kf727da8aa8ad = require("../Bits52/Kf727da8aa8ad");
exports.$IEEE_754_binary64 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xcb, 0xa9, 0x59, 0x6b, 0x46, 0x57],
    decoder: function (decoders) {
        return function (st) { return new IEEE_754_binary64(K549f91f3b0ec.___.decoder([])(st), K74e2b3b89941.___.decoder([K8ae75e67a616.___.decoder([])])(st), K74e2b3b89941.___.decoder([Kf727da8aa8ad.___.decoder([])])(st)); };
    }
};
var IEEE_754_binary64 = (function () {
    function IEEE_754_binary64(sign, exponent, fraction) {
        this.sign = sign;
        this.exponent = exponent;
        this.fraction = fraction;
    }
    IEEE_754_binary64.prototype.toString = function () { return this.toStr(false); };
    IEEE_754_binary64.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "IEEE_754_binary64" + this.sign.toStr(true) + this.exponent.toStr(true) + this.fraction.toStr(true));
    };
    IEEE_754_binary64.prototype.match = function (m) { return m.IEEE_754_binary64(this.sign, this.exponent, this.fraction); };
    IEEE_754_binary64.prototype.flatMaxSize = function () { return this.sign.flatMaxSize() + this.exponent.flatMaxSize() + this.fraction.flatMaxSize(); };
    IEEE_754_binary64.prototype.flatEncode = function (st) { this.sign.flatEncode(st); this.exponent.flatEncode(st); this.fraction.flatEncode(st); };
    return IEEE_754_binary64;
}());
exports.IEEE_754_binary64 = IEEE_754_binary64;
//# sourceMappingURL=Kcba9596b4657.js.map