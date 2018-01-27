"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K65149ce3b366 = require("../Bit/K65149ce3b366");
exports.$Bits11 = function (f) { return f(___, []); };
var ___ = {
    zid: [0x8a, 0xe7, 0x5e, 0x67, 0xa6, 0x16],
    decoder: function (decoders) {
        var decs = { "Bits11": [K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder), K65149ce3b366.$Bit(Q.flatDecoder)] };
        return function (st) { var d = decs["Bits11"]; return new Bits11(d[0](st), d[1](st), d[2](st), d[3](st), d[4](st), d[5](st), d[6](st), d[7](st), d[8](st), d[9](st), d[10](st)); };
    }
};
var Bits11 = (function () {
    function Bits11(bit0, bit1, bit2, bit3, bit4, bit5, bit6, bit7, bit8, bit9, bit10) {
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
    Bits11.prototype.match = function (m) { return m.Bits11(this.bit0, this.bit1, this.bit2, this.bit3, this.bit4, this.bit5, this.bit6, this.bit7, this.bit8, this.bit9, this.bit10); };
    Bits11.prototype.flatMaxSize = function () { return this.bit0.flatMaxSize() + this.bit1.flatMaxSize() + this.bit2.flatMaxSize() + this.bit3.flatMaxSize() + this.bit4.flatMaxSize() + this.bit5.flatMaxSize() + this.bit6.flatMaxSize() + this.bit7.flatMaxSize() + this.bit8.flatMaxSize() + this.bit9.flatMaxSize() + this.bit10.flatMaxSize(); };
    Bits11.prototype.flatEncode = function (st) { this.bit0.flatEncode(st); this.bit1.flatEncode(st); this.bit2.flatEncode(st); this.bit3.flatEncode(st); this.bit4.flatEncode(st); this.bit5.flatEncode(st); this.bit6.flatEncode(st); this.bit7.flatEncode(st); this.bit8.flatEncode(st); this.bit9.flatEncode(st); this.bit10.flatEncode(st); };
    return Bits11;
}());
exports.Bits11 = Bits11;
//# sourceMappingURL=K8ae75e67a616.js.map