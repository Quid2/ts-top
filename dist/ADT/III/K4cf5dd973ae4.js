"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$III = function (f) { return f(___, []); };
var ___ = {
    zid: [0x4c, 0xf5, 0xdd, 0x97, 0x3a, 0xe4],
    decoder: function (decoders) {
        return function (st) { return new III(decoders[0](st), decoders[1](st), decoders[2](st), decoders[3](st), decoders[4](st), decoders[5](st), decoders[6](st), decoders[7](st)); };
    }
};
var III = (function () {
    function III(w8, w16, w, i8, i, f, d, ii) {
        this.w8 = w8;
        this.w16 = w16;
        this.w = w;
        this.i8 = i8;
        this.i = i;
        this.f = f;
        this.d = d;
        this.ii = ii;
    }
    III.prototype.match = function (m) { return m.III(this.w8, this.w16, this.w, this.i8, this.i, this.f, this.d, this.ii); };
    III.prototype.flatMaxSize = function () { return this.w8.flatMaxSize() + this.w16.flatMaxSize() + this.w.flatMaxSize() + this.i8.flatMaxSize() + this.i.flatMaxSize() + this.f.flatMaxSize() + this.d.flatMaxSize() + this.ii.flatMaxSize(); };
    III.prototype.flatEncode = function (st) { this.w8.flatEncode(st); this.w16.flatEncode(st); this.w.flatEncode(st); this.i8.flatEncode(st); this.i.flatEncode(st); this.f.flatEncode(st); this.d.flatEncode(st); this.ii.flatEncode(st); };
    return III;
}());
exports.III = III;
//# sourceMappingURL=K4cf5dd973ae4.js.map