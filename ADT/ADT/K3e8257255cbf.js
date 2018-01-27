"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
var Kda6836778fd4 = require("../Maybe/Kda6836778fd4");
var K86653e040025 = require("../ConTree/K86653e040025");
exports.$ADT = function (t1, t2, t3) { return function (f) { return f(___, [t1(f), t2(f), t3(f)]); }; };
var ___ = {
    zid: [0x3e, 0x82, 0x57, 0x25, 0x5c, 0xbf],
    decoder: function (decoders) {
        var decs = { "ADT": [Q.zmConst(decoders[0])(Q.flatDecoder), Kb1f46a49c8f8.$Word8(Q.flatDecoder), Kda6836778fd4.$Maybe(K86653e040025.$ConTree(Q.zmConst(decoders[1]), Q.zmConst(decoders[2])))(Q.flatDecoder)] };
        return function (st) { var d = decs["ADT"]; return new ADT(d[0](st), d[1](st), d[2](st)); };
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