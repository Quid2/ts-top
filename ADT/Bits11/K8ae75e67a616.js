"use strict";
/** ZM Type:
Bits11 ≡   Bits11 {bit0 :: K65149ce3b366,
                   bit1 :: K65149ce3b366,
                   bit2 :: K65149ce3b366,
                   bit3 :: K65149ce3b366,
                   bit4 :: K65149ce3b366,
                   bit5 :: K65149ce3b366,
                   bit6 :: K65149ce3b366,
                   bit7 :: K65149ce3b366,
                   bit8 :: K65149ce3b366,
                   bit9 :: K65149ce3b366,
                   bit10 :: K65149ce3b366}
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K65149ce3b366 = require("../Bit/K65149ce3b366");
exports.$Bits11 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x8a, 0xe7, 0x5e, 0x67, 0xa6, 0x16],
    decoder: function (decoders) {
        return function (st) { return new Bits11(K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st)); };
    }
};
class Bits11 {
    constructor(bit0, bit1, bit2, bit3, bit4, bit5, bit6, bit7, bit8, bit9, bit10) {
        this.bit0 = bit0;
        this.bit1 = bit1;
        this.bit2 = bit2;
        this.bit3 = bit3;
        this.bit4 = bit4;
        this.bit5 = bit5;
        this.bit6 = bit6;
        this.bit7 = bit7;
        this.bit8 = bit8;
        this.bit9 = bit9;
        this.bit10 = bit10;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Bits11", this.bit0.toStr(true), this.bit1.toStr(true), this.bit2.toStr(true), this.bit3.toStr(true), this.bit4.toStr(true), this.bit5.toStr(true), this.bit6.toStr(true), this.bit7.toStr(true), this.bit8.toStr(true), this.bit9.toStr(true), this.bit10.toStr(true)].join(' ')); }
    match(m) { return m.Bits11(this.bit0, this.bit1, this.bit2, this.bit3, this.bit4, this.bit5, this.bit6, this.bit7, this.bit8, this.bit9, this.bit10); }
    flatMaxSize() { return this.bit0.flatMaxSize() + this.bit1.flatMaxSize() + this.bit2.flatMaxSize() + this.bit3.flatMaxSize() + this.bit4.flatMaxSize() + this.bit5.flatMaxSize() + this.bit6.flatMaxSize() + this.bit7.flatMaxSize() + this.bit8.flatMaxSize() + this.bit9.flatMaxSize() + this.bit10.flatMaxSize(); }
    flatEncode(st) { this.bit0.flatEncode(st); this.bit1.flatEncode(st); this.bit2.flatEncode(st); this.bit3.flatEncode(st); this.bit4.flatEncode(st); this.bit5.flatEncode(st); this.bit6.flatEncode(st); this.bit7.flatEncode(st); this.bit8.flatEncode(st); this.bit9.flatEncode(st); this.bit10.flatEncode(st); }
}
exports.Bits11 = Bits11;
//# sourceMappingURL=K8ae75e67a616.js.map