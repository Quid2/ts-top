"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K9f214799149b = require("../SHAKE128_48/K9f214799149b");
var K3e8257255cbf = require("../ADT/K3e8257255cbf");
var Kdc26e9d90047 = require("../Identifier/Kdc26e9d90047");
var K07b1b045ac3c = require("../ADTRef/K07b1b045ac3c");
exports.$AbsRef = function (f) { return f(___, []); };
var ___ = {
    zid: [0x4b, 0xbd, 0x38, 0x58, 0x7b, 0x9e],
    decoder: function (decoders) {
        var decs = { "AbsRef": [K9f214799149b.$SHAKE128_48(K3e8257255cbf.$ADT(Kdc26e9d90047.$Identifier, Kdc26e9d90047.$Identifier, K07b1b045ac3c.$ADTRef(exports.$AbsRef)))(Q.flatDecoder)] };
        return function (st) { var d = decs["AbsRef"]; return new AbsRef(d[0](st)); };
    }
};
var AbsRef = (function () {
    function AbsRef(_0) {
        this._0 = _0;
    }
    AbsRef.prototype.match = function (m) { return m.AbsRef(this._0); };
    AbsRef.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    AbsRef.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return AbsRef;
}());
exports.AbsRef = AbsRef;
//# sourceMappingURL=K4bbd38587b9e.js.map