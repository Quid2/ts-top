"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PreAligned = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xb2, 0xf2, 0x8c, 0xf3, 0x7d, 0x12],
    decoder: function (decoders) {
        return function (st) { return new PreAligned(decoders[0](st), decoders[1](st)); };
    }
};
var PreAligned = (function () {
    function PreAligned(preFiller, preValue) {
        this.preFiller = preFiller;
        this.preValue = preValue;
    }
    PreAligned.prototype.match = function (m) { return m.PreAligned(this.preFiller, this.preValue); };
    PreAligned.prototype.flatMaxSize = function () { return this.preFiller.flatMaxSize() + this.preValue.flatMaxSize(); };
    PreAligned.prototype.flatEncode = function (st) { this.preFiller.flatEncode(st); this.preValue.flatEncode(st); };
    return PreAligned;
}());
exports.PreAligned = PreAligned;
//# sourceMappingURL=Kb2f28cf37d12.js.map