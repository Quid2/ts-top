"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K549f91f3b0ec = require("../Sign/K549f91f3b0ec");
var K74e2b3b89941 = require("../MostSignificantFirst/K74e2b3b89941");
var K8ae75e67a616 = require("../Bits11/K8ae75e67a616");
var Kf727da8aa8ad = require("../Bits52/Kf727da8aa8ad");
exports.$IEEE_754_binary64 = function (f) { return f(___, []); };
var ___ = {
    zid: [0xcb, 0xa9, 0x59, 0x6b, 0x46, 0x57],
    decoder: function (decoders) {
        var decs = { "IEEE_754_binary64": [K549f91f3b0ec.$Sign(Q.flatDecoder), K74e2b3b89941.$MostSignificantFirst(K8ae75e67a616.$Bits11)(Q.flatDecoder), K74e2b3b89941.$MostSignificantFirst(Kf727da8aa8ad.$Bits52)(Q.flatDecoder)] };
        return function (st) { var d = decs["IEEE_754_binary64"]; return new IEEE_754_binary64(d[0](st), d[1](st), d[2](st)); };
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