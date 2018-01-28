"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K65149ce3b366 = require("../Bit/K65149ce3b366");
exports.$Bits8 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x9e, 0x3b, 0x8c, 0x83, 0x5f, 0xe9],
    decoder: function (decoders) {
        return function (st) { return new Bits8(K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st), K65149ce3b366.___.decoder([])(st)); };
    }
};
var Bits8 = (function () {
    function Bits8(bit0, bit1, bit2, bit3, bit4, bit5, bit6, bit7) {
        this.bit0 = bit0;
        this.bit1 = bit1;
        this.bit2 = bit2;
        this.bit3 = bit3;
        this.bit4 = bit4;
        this.bit5 = bit5;
        this.bit6 = bit6;
        this.bit7 = bit7;
    }
    Bits8.prototype.match = function (m) { return m.Bits8(this.bit0, this.bit1, this.bit2, this.bit3, this.bit4, this.bit5, this.bit6, this.bit7); };
    Bits8.prototype.flatMaxSize = function () { return this.bit0.flatMaxSize() + this.bit1.flatMaxSize() + this.bit2.flatMaxSize() + this.bit3.flatMaxSize() + this.bit4.flatMaxSize() + this.bit5.flatMaxSize() + this.bit6.flatMaxSize() + this.bit7.flatMaxSize(); };
    Bits8.prototype.flatEncode = function (st) { this.bit0.flatEncode(st); this.bit1.flatEncode(st); this.bit2.flatEncode(st); this.bit3.flatEncode(st); this.bit4.flatEncode(st); this.bit5.flatEncode(st); this.bit6.flatEncode(st); this.bit7.flatEncode(st); };
    return Bits8;
}());
exports.Bits8 = Bits8;
//# sourceMappingURL=K9e3b8c835fe9.js.map