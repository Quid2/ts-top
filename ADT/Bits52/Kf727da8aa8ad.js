"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K65149ce3b366 = require("../Bit/K65149ce3b366");
exports.$Bits52 = function (f) { return f(___, []); };
var ___ = {
    zid: [0xf7, 0x27, 0xda, 0x8a, 0xa8, 0xad],
    decoder: function (decoders) {
        var decs = { "Bits52": [K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder)] };
        return function (st) { var d = decs["Bits52"]; return new Bits52(d[0](st), d[1](st), d[2](st), d[3](st), d[4](st), d[5](st), d[6](st), d[7](st), d[8](st), d[9](st), d[10](st), d[11](st), d[12](st), d[13](st), d[14](st), d[15](st), d[16](st), d[17](st), d[18](st), d[19](st), d[20](st), d[21](st), d[22](st), d[23](st), d[24](st), d[25](st), d[26](st), d[27](st), d[28](st), d[29](st), d[30](st), d[31](st), d[32](st), d[33](st), d[34](st), d[35](st), d[36](st), d[37](st), d[38](st), d[39](st), d[40](st), d[41](st), d[42](st), d[43](st), d[44](st), d[45](st), d[46](st), d[47](st), d[48](st), d[49](st), d[50](st), d[51](st)); };
    }
};
var Bits52 = (function () {
    function Bits52(bit0, bit1, bit2, bit3, bit4, bit5, bit6, bit7, bit8, bit9, bit10, bit11, bit12, bit13, bit14, bit15, bit16, bit17, bit18, bit19, bit20, bit21, bit22, bit23, bit24, bit25, bit26, bit27, bit28, bit29, bit30, bit31, bit32, bit33, bit34, bit35, bit36, bit37, bit38, bit39, bit40, bit41, bit42, bit43, bit44, bit45, bit46, bit47, bit48, bit49, bit50, bit51) {
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
        this.bit23 = bit23;
        this.bit24 = bit24;
        this.bit25 = bit25;
        this.bit26 = bit26;
        this.bit27 = bit27;
        this.bit28 = bit28;
        this.bit29 = bit29;
        this.bit30 = bit30;
        this.bit31 = bit31;
        this.bit32 = bit32;
        this.bit33 = bit33;
        this.bit34 = bit34;
        this.bit35 = bit35;
        this.bit36 = bit36;
        this.bit37 = bit37;
        this.bit38 = bit38;
        this.bit39 = bit39;
        this.bit40 = bit40;
        this.bit41 = bit41;
        this.bit42 = bit42;
        this.bit43 = bit43;
        this.bit44 = bit44;
        this.bit45 = bit45;
        this.bit46 = bit46;
        this.bit47 = bit47;
        this.bit48 = bit48;
        this.bit49 = bit49;
        this.bit50 = bit50;
        this.bit51 = bit51;
    }
    Bits52.prototype.match = function (m) { return m.Bits52(this.bit0, this.bit1, this.bit2, this.bit3, this.bit4, this.bit5, this.bit6, this.bit7, this.bit8, this.bit9, this.bit10, this.bit11, this.bit12, this.bit13, this.bit14, this.bit15, this.bit16, this.bit17, this.bit18, this.bit19, this.bit20, this.bit21, this.bit22, this.bit23, this.bit24, this.bit25, this.bit26, this.bit27, this.bit28, this.bit29, this.bit30, this.bit31, this.bit32, this.bit33, this.bit34, this.bit35, this.bit36, this.bit37, this.bit38, this.bit39, this.bit40, this.bit41, this.bit42, this.bit43, this.bit44, this.bit45, this.bit46, this.bit47, this.bit48, this.bit49, this.bit50, this.bit51); };
    Bits52.prototype.flatMaxSize = function () { return this.bit0.flatMaxSize() + this.bit1.flatMaxSize() + this.bit2.flatMaxSize() + this.bit3.flatMaxSize() + this.bit4.flatMaxSize() + this.bit5.flatMaxSize() + this.bit6.flatMaxSize() + this.bit7.flatMaxSize() + this.bit8.flatMaxSize() + this.bit9.flatMaxSize() + this.bit10.flatMaxSize() + this.bit11.flatMaxSize() + this.bit12.flatMaxSize() + this.bit13.flatMaxSize() + this.bit14.flatMaxSize() + this.bit15.flatMaxSize() + this.bit16.flatMaxSize() + this.bit17.flatMaxSize() + this.bit18.flatMaxSize() + this.bit19.flatMaxSize() + this.bit20.flatMaxSize() + this.bit21.flatMaxSize() + this.bit22.flatMaxSize() + this.bit23.flatMaxSize() + this.bit24.flatMaxSize() + this.bit25.flatMaxSize() + this.bit26.flatMaxSize() + this.bit27.flatMaxSize() + this.bit28.flatMaxSize() + this.bit29.flatMaxSize() + this.bit30.flatMaxSize() + this.bit31.flatMaxSize() + this.bit32.flatMaxSize() + this.bit33.flatMaxSize() + this.bit34.flatMaxSize() + this.bit35.flatMaxSize() + this.bit36.flatMaxSize() + this.bit37.flatMaxSize() + this.bit38.flatMaxSize() + this.bit39.flatMaxSize() + this.bit40.flatMaxSize() + this.bit41.flatMaxSize() + this.bit42.flatMaxSize() + this.bit43.flatMaxSize() + this.bit44.flatMaxSize() + this.bit45.flatMaxSize() + this.bit46.flatMaxSize() + this.bit47.flatMaxSize() + this.bit48.flatMaxSize() + this.bit49.flatMaxSize() + this.bit50.flatMaxSize() + this.bit51.flatMaxSize(); };
    Bits52.prototype.flatEncode = function (st) { this.bit0.flatEncode(st); this.bit1.flatEncode(st); this.bit2.flatEncode(st); this.bit3.flatEncode(st); this.bit4.flatEncode(st); this.bit5.flatEncode(st); this.bit6.flatEncode(st); this.bit7.flatEncode(st); this.bit8.flatEncode(st); this.bit9.flatEncode(st); this.bit10.flatEncode(st); this.bit11.flatEncode(st); this.bit12.flatEncode(st); this.bit13.flatEncode(st); this.bit14.flatEncode(st); this.bit15.flatEncode(st); this.bit16.flatEncode(st); this.bit17.flatEncode(st); this.bit18.flatEncode(st); this.bit19.flatEncode(st); this.bit20.flatEncode(st); this.bit21.flatEncode(st); this.bit22.flatEncode(st); this.bit23.flatEncode(st); this.bit24.flatEncode(st); this.bit25.flatEncode(st); this.bit26.flatEncode(st); this.bit27.flatEncode(st); this.bit28.flatEncode(st); this.bit29.flatEncode(st); this.bit30.flatEncode(st); this.bit31.flatEncode(st); this.bit32.flatEncode(st); this.bit33.flatEncode(st); this.bit34.flatEncode(st); this.bit35.flatEncode(st); this.bit36.flatEncode(st); this.bit37.flatEncode(st); this.bit38.flatEncode(st); this.bit39.flatEncode(st); this.bit40.flatEncode(st); this.bit41.flatEncode(st); this.bit42.flatEncode(st); this.bit43.flatEncode(st); this.bit44.flatEncode(st); this.bit45.flatEncode(st); this.bit46.flatEncode(st); this.bit47.flatEncode(st); this.bit48.flatEncode(st); this.bit49.flatEncode(st); this.bit50.flatEncode(st); this.bit51.flatEncode(st); };
    return Bits52;
}());
exports.Bits52 = Bits52;
//# sourceMappingURL=Kf727da8aa8ad.js.map