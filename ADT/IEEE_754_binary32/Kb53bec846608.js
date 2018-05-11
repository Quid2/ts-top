"use strict";
/** ZM Type:
IEEE_754_binary32 ≡   IEEE_754_binary32 {sign :: K549f91f3b0ec,
                                         exponent :: K74e2b3b89941 K9e3b8c835fe9,
                                         fraction :: K74e2b3b89941 K338888222364}
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K549f91f3b0ec = require("../Sign/K549f91f3b0ec");
const K74e2b3b89941 = require("../MostSignificantFirst/K74e2b3b89941");
const K9e3b8c835fe9 = require("../Bits8/K9e3b8c835fe9");
const K338888222364 = require("../Bits23/K338888222364");
exports.$IEEE_754_binary32 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xb5, 0x3b, 0xec, 0x84, 0x66, 0x08],
    decoder: function (decoders) {
        return function (st) { return new IEEE_754_binary32(K549f91f3b0ec.___.decoder([])(st), K74e2b3b89941.___.decoder([K9e3b8c835fe9.___.decoder([])])(st), K74e2b3b89941.___.decoder([K338888222364.___.decoder([])])(st)); };
    }
};
class IEEE_754_binary32 {
    constructor(sign, exponent, fraction) {
        this.sign = sign;
        this.exponent = exponent;
        this.fraction = fraction;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["IEEE_754_binary32", this.sign.toStr(true), this.exponent.toStr(true), this.fraction.toStr(true)].join(' ')); }
    match(m) { return m.IEEE_754_binary32(this.sign, this.exponent, this.fraction); }
    flatMaxSize() { return this.sign.flatMaxSize() + this.exponent.flatMaxSize() + this.fraction.flatMaxSize(); }
    flatEncode(st) { this.sign.flatEncode(st); this.exponent.flatEncode(st); this.fraction.flatEncode(st); }
}
exports.IEEE_754_binary32 = IEEE_754_binary32;
//# sourceMappingURL=Kb53bec846608.js.map