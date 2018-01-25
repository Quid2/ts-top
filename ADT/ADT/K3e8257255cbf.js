"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ADT = function (t1, t2, t3) { return function (f) { return f(___, [t1(f), t2(f), t3(f)]); }; };
var ___ = {
    zid: [0x3e, 0x82, 0x57, 0x25, 0x5c, 0xbf],
    decoder: function (decoders) {
        return function (st) { return new ADT(decoders[0](st), decoders[1](st), decoders[2](st)); };
    }
};
var ADT = (function () {
    function ADT(declName, declNumParameters, declCons) {
        this.declName = declName;
        this.declNumParameters = declNumParameters;
        this.declCons = declCons;
    }
    ADT.prototype.match = function (m) { return m.ADT(this.declName, this.declNumParameters, this.declCons); };
    ADT.prototype.flatMaxSize = function () { return this.declName.flatMaxSize() + this.declNumParameters.flatMaxSize() + this.declCons.flatMaxSize(); };
    ADT.prototype.flatEncode = function (st) { this.declName.flatEncode(st); this.declNumParameters.flatEncode(st); this.declCons.flatEncode(st); };
    return ADT;
}());
exports.ADT = ADT;
//# sourceMappingURL=K3e8257255cbf.js.map