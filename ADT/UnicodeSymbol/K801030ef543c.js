"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeSymbol = function (f) { return f(___, []); };
var ___ = {
    zid: [0x80, 0x10, 0x30, 0xef, 0x54, 0x3c],
    decoder: function (decoders) {
        var decs = { "UnicodeSymbol": [K066db52af145.$Char(Q.flatDecoder)] };
        return function (st) { var d = decs["UnicodeSymbol"]; return new UnicodeSymbol(d[0](st)); };
    }
};
var UnicodeSymbol = (function () {
    function UnicodeSymbol(_0) {
        this._0 = _0;
    }
    UnicodeSymbol.prototype.match = function (m) { return m.UnicodeSymbol(this._0); };
    UnicodeSymbol.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    UnicodeSymbol.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return UnicodeSymbol;
}());
exports.UnicodeSymbol = UnicodeSymbol;
//# sourceMappingURL=K801030ef543c.js.map