"use strict";
/** ZM Type:
Bits23 ≡   Bits23 {bit0 :: K65149ce3b366,
                   bit1 :: K65149ce3b366,
                
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K65149ce3b366 = require("../Bit/K65149ce3b366");
exports.$Bits23 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x33, 0x88, 0x88, 0x22, 0x23, 0x64],
    decoder: function (decoders) {
        return function (st) { return new Bits23(K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st)); };
    }
};
class Bits23 {
    constructor(bit0, bit1, bit2, bit3, bit4, bit5, bit6, bit7, bit8, bit9, bit10, bit11, bit12, bit13, bit14, bit15, bit16, bit17, bit18, bit19, bit20, bit21, bit22) {
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
        this.bit11 = bit11;
        this.bit12 = bit12;
        this.bit13 = bit13;
        this.bit14 = bit14;
        this.bit15 = bit15;
        this.bit16 = bit16;
        this.bit17 = bit17;
        this.bit18 = bit18;
        this.bit19 = bit19;
        this.bit20 = bit20;
        this.bit21 = bit21;
        this.bit22 = bit22;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Bits23", this.bit0.toStr(true), this.bit1.toStr(true), this.bit2.toStr(true), this.bit3.toStr(true), this.bit4.toStr(true), this.bit5.toStr(true), this.bit6.toStr(true), this.bit7.toStr(true), this.bit8.toStr(true), this.bit9.toStr(true), this.bit10.toStr(true), this.bit11.toStr(true), this.bit12.toStr(true), this.bit13.toStr(true), this.bit14.toStr(true), this.bit15.toStr(true), this.bit16.toStr(true), this.bit17.toStr(true), this.bit18.toStr(true), this.bit19.toStr(true), this.bit20.toStr(true), this.bit21.toStr(true), this.bit22.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["Bits23", this.bit0.pretty(true), this.bit1.pretty(true), this.bit2.pretty(true), this.bit3.pretty(true), this.bit4.pretty(true), this.bit5.pretty(true), this.bit6.pretty(true), this.bit7.pretty(true), this.bit8.pretty(true), this.bit9.pretty(true), this.bit10.pretty(true), this.bit11.pretty(true), this.bit12.pretty(true), this.bit13.pretty(true), this.bit14.pretty(true), this.bit15.pretty(true), this.bit16.pretty(true), this.bit17.pretty(true), this.bit18.pretty(true), this.bit19.pretty(true), this.bit20.pretty(true), this.bit21.pretty(true), this.bit22.pretty(true)].join(' ')); }
    match(m) { return m.Bits23(this.bit0, this.bit1, this.bit2, this.bit3, this.bit4, this.bit5, this.bit6, this.bit7, this.bit8, this.bit9, this.bit10, this.bit11, this.bit12, this.bit13, this.bit14, this.bit15, this.bit16, this.bit17, this.bit18, this.bit19, this.bit20, this.bit21, this.bit22); }
    flatMaxSize() { return this.bit0.flatMaxSize() + this.bit1.flatMaxSize() + this.bit2.flatMaxSize() + this.bit3.flatMaxSize() + this.bit4.flatMaxSize() + this.bit5.flatMaxSize() + this.bit6.flatMaxSize() + this.bit7.flatMaxSize() + this.bit8.flatMaxSize() + this.bit9.flatMaxSize() + this.bit10.flatMaxSize() + this.bit11.flatMaxSize() + this.bit12.flatMaxSize() + this.bit13.flatMaxSize() + this.bit14.flatMaxSize() + this.bit15.flatMaxSize() + this.bit16.flatMaxSize() + this.bit17.flatMaxSize() + this.bit18.flatMaxSize() + this.bit19.flatMaxSize() + this.bit20.flatMaxSize() + this.bit21.flatMaxSize() + this.bit22.flatMaxSize(); }
    flatEncode(st) { this.bit0.flatEncode(st); this.bit1.flatEncode(st); this.bit2.flatEncode(st); this.bit3.flatEncode(st); this.bit4.flatEncode(st); this.bit5.flatEncode(st); this.bit6.flatEncode(st); this.bit7.flatEncode(st); this.bit8.flatEncode(st); this.bit9.flatEncode(st); this.bit10.flatEncode(st); this.bit11.flatEncode(st); this.bit12.flatEncode(st); this.bit13.flatEncode(st); this.bit14.flatEncode(st); this.bit15.flatEncode(st); this.bit16.flatEncode(st); this.bit17.flatEncode(st); this.bit18.flatEncode(st); this.bit19.flatEncode(st); this.bit20.flatEncode(st); this.bit21.flatEncode(st); this.bit22.flatEncode(st); }
}
exports.Bits23 = Bits23;
//# sourceMappingURL=K338888222364.js.map