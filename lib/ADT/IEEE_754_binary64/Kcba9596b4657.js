"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const K549f91f3b0ec = require("../Sign/K549f91f3b0ec");
const K74e2b3b89941 = require("../MostSignificantFirst/K74e2b3b89941");
const K8ae75e67a616 = require("../Bits11/K8ae75e67a616");
const Kf727da8aa8ad = require("../Bits52/Kf727da8aa8ad");
exports.$IEEE_754_binary64 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xcb, 0xa9, 0x59, 0x6b, 0x46, 0x57],
    decoder: function (decoders) {
        return function (st) { return new IEEE_754_binary64(K549f91f3b0ec.___.decoder([])(st), K74e2b3b89941.___.decoder([K8ae75e67a616.___.decoder([])])(st), K74e2b3b89941.___.decoder([Kf727da8aa8ad.___.decoder([])])(st)); };
    }
};
class IEEE_754_binary64 {
    constructor(sign, exponent, fraction) {
        this.sign = sign;
        this.exponent = exponent;
        this.fraction = fraction;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["IEEE_754_binary64", this.sign.toStr(true), this.exponent.toStr(true), this.fraction.toStr(true)].join(' ')); }
    match(m) { return m.IEEE_754_binary64(this.sign, this.exponent, this.fraction); }
    flatMaxSize() { return this.sign.flatMaxSize() + this.exponent.flatMaxSize() + this.fraction.flatMaxSize(); }
    flatEncode(st) { this.sign.flatEncode(st); this.exponent.flatEncode(st); this.fraction.flatEncode(st); }
}
exports.IEEE_754_binary64 = IEEE_754_binary64;
//# sourceMappingURL=Kcba9596b4657.js.map