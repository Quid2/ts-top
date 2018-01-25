"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Bits23 = function (f) { return f(___, []); };
var ___ = {
    zid: [0x33, 0x88, 0x88, 0x22, 0x23, 0x64],
    decoder: function (decoders) {
        return function (st) { return new Bits23(decoders[0](st), decoders[1](st), decoders[2](st), decoders[3](st), decoders[4](st), decoders[5](st), decoders[6](st), decoders[7](st), decoders[8](st), decoders[9](st), decoders[10](st), decoders[11](st), decoders[12](st), decoders[13](st), decoders[14](st), decoders[15](st), decoders[16](st), decoders[17](st), decoders[18](st), decoders[19](st), decoders[20](st), decoders[21](st), decoders[22](st)); };
    }
};
var Bits23 = (function () {
    function Bits23(bit0, bit1, bit2, bit3, bit4, bit5, bit6, bit7, bit8, bit9, bit10, bit11, bit12, bit13, bit14, bit15, bit16, bit17, bit18, bit19, bit20, bit21, bit22) {
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
    Bits23.prototype.match = function (m) { return m.Bits23(this.bit0, this.bit1, this.bit2, this.bit3, this.bit4, this.bit5, this.bit6, this.bit7, this.bit8, this.bit9, this.bit10, this.bit11, this.bit12, this.bit13, this.bit14, this.bit15, this.bit16, this.bit17, this.bit18, this.bit19, this.bit20, this.bit21, this.bit22); };
    Bits23.prototype.flatMaxSize = function () { return this.bit0.flatMaxSize() + this.bit1.flatMaxSize() + this.bit2.flatMaxSize() + this.bit3.flatMaxSize() + this.bit4.flatMaxSize() + this.bit5.flatMaxSize() + this.bit6.flatMaxSize() + this.bit7.flatMaxSize() + this.bit8.flatMaxSize() + this.bit9.flatMaxSize() + this.bit10.flatMaxSize() + this.bit11.flatMaxSize() + this.bit12.flatMaxSize() + this.bit13.flatMaxSize() + this.bit14.flatMaxSize() + this.bit15.flatMaxSize() + this.bit16.flatMaxSize() + this.bit17.flatMaxSize() + this.bit18.flatMaxSize() + this.bit19.flatMaxSize() + this.bit20.flatMaxSize() + this.bit21.flatMaxSize() + this.bit22.flatMaxSize(); };
    Bits23.prototype.flatEncode = function (st) { this.bit0.flatEncode(st); this.bit1.flatEncode(st); this.bit2.flatEncode(st); this.bit3.flatEncode(st); this.bit4.flatEncode(st); this.bit5.flatEncode(st); this.bit6.flatEncode(st); this.bit7.flatEncode(st); this.bit8.flatEncode(st); this.bit9.flatEncode(st); this.bit10.flatEncode(st); this.bit11.flatEncode(st); this.bit12.flatEncode(st); this.bit13.flatEncode(st); this.bit14.flatEncode(st); this.bit15.flatEncode(st); this.bit16.flatEncode(st); this.bit17.flatEncode(st); this.bit18.flatEncode(st); this.bit19.flatEncode(st); this.bit20.flatEncode(st); this.bit21.flatEncode(st); this.bit22.flatEncode(st); };
    return Bits23;
}());
exports.Bits23 = Bits23;
//# sourceMappingURL=K338888222364.js.map