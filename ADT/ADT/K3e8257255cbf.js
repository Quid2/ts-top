"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
var Kda6836778fd4 = require("../Maybe/Kda6836778fd4");
var K86653e040025 = require("../ConTree/K86653e040025");
exports.$ADT = function (t1, t2, t3) { return function (f) { return f(exports.___, [t1(f), t2(f), t3(f)]); }; };
exports.___ = {
    zid: [0x3e, 0x82, 0x57, 0x25, 0x5c, 0xbf],
    decoder: function (decoders) {
        return function (st) { return new ADT(decoders[0](st), Kb1f46a49c8f8.___.decoder([])(st), Kda6836778fd4.___.decoder([K86653e040025.___.decoder([decoders[1], decoders[2]])])(st)); };
    }
};
var ADT = (function () {
    function ADT(declName, declNumParameters, declCons) {
        this.declName = declName;
        this.declNumParameters = declNumParameters;
        this.declCons = declCons;
    }
    ADT.prototype.toString = function () { return this.toStr(false); };
    ADT.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["ADT", this.declName.toStr(true), this.declNumParameters.toStr(true), this.declCons.toStr(true)].join(' '));
    };
    ADT.prototype.match = function (m) { return m.ADT(this.declName, this.declNumParameters, this.declCons); };
    ADT.prototype.flatMaxSize = function () { return this.declName.flatMaxSize() + this.declNumParameters.flatMaxSize() + this.declCons.flatMaxSize(); };
    ADT.prototype.flatEncode = function (st) { this.declName.flatEncode(st); this.declNumParameters.flatEncode(st); this.declCons.flatEncode(st); };
    return ADT;
}());
exports.ADT = ADT;
//# sourceMappingURL=K3e8257255cbf.js.map