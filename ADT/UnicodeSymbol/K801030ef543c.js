"use strict";
/** ZM Type:
UnicodeSymbol ≡   UnicodeSymbol K066db52af145
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeSymbol = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x80, 0x10, 0x30, 0xef, 0x54, 0x3c],
    decoder: function (decoders) {
        return function (st) { return new UnicodeSymbol(K066db52af145.___.decoder([])(st)); };
    }
};
var UnicodeSymbol = /** @class */ (function () {
    function UnicodeSymbol(_0) {
        this._0 = _0;
    }
    UnicodeSymbol.prototype.toString = function () { return this.toStr(false); };
    UnicodeSymbol.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["UnicodeSymbol", this._0.toStr(true)].join(' '));
    };
    UnicodeSymbol.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["UnicodeSymbol", this._0.pretty(true)].join(' '));
    };
    UnicodeSymbol.prototype.match = function (m) { return m.UnicodeSymbol(this._0); };
    UnicodeSymbol.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    UnicodeSymbol.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return UnicodeSymbol;
}());
exports.UnicodeSymbol = UnicodeSymbol;
