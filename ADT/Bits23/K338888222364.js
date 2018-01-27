"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K65149ce3b366 = require("../Bit/K65149ce3b366");
exports.$Bits23 = function (f) { return f(___, []); };
var ___ = {
    zid: [0x33, 0x88, 0x88, 0x22, 0x23, 0x64],
    decoder: function (decoders) {
        var decs = { "Bits23": [K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder)] };
        return function (st) { var d = decs["Bits23"]; return new Bits23(d[0](st), d[1](st), d[2](st), d[3](st), d[4](st), d[5](st), d[6](st), d[7](st), d[8](st), d[9](st), d[10](st), d[11](st), d[12](st), d[13](st), d[14](st), d[15](st), d[16](st), d[17](st), d[18](st), d[19](st), d[20](st), d[21](st), d[22](st)); };
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