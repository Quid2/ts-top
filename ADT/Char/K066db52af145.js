"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K2412799c99f1 = require("../Word32/K2412799c99f1");
exports.$Char = function (f) { return f(___, []); };
var ___ = {
    zid: [0x06, 0x6d, 0xb5, 0x2a, 0xf1, 0x45],
    decoder: function (decoders) {
        var decs = { "Char": [K2412799c99f1.$Word32(Q.flatDecoder)] };
        return function (st) { var d = decs["Char"]; return new Char(d[0](st)); };
    }
};
var Char = (function () {
    function Char(_0) {
        this._0 = _0;
    }
    Char.prototype.match = function (m) { return m.Char(this._0); };
    Char.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Char.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Char;
}());
exports.Char = Char;
//# sourceMappingURL=K066db52af145.js.map