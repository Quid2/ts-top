"use strict";
/** ZM Type:
UnicodeLetterOrNumberOrLine ≡   UnicodeLetterOrNumberOrLine K066db52af145
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeLetterOrNumberOrLine = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x33, 0x44, 0x55, 0x20, 0xc4, 0x5a],
    decoder: function (decoders) {
        return function (st) { return new UnicodeLetterOrNumberOrLine(K066db52af145.___.decoder([])(st)); };
    }
};
var UnicodeLetterOrNumberOrLine = /** @class */ (function () {
    function UnicodeLetterOrNumberOrLine(_0) {
        this._0 = _0;
    }
    UnicodeLetterOrNumberOrLine.prototype.toString = function () { return this.toStr(false); };
    UnicodeLetterOrNumberOrLine.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["UnicodeLetterOrNumberOrLine", this._0.toStr(true)].join(' '));
    };
    UnicodeLetterOrNumberOrLine.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["UnicodeLetterOrNumberOrLine", this._0.pretty(true)].join(' '));
    };
    UnicodeLetterOrNumberOrLine.prototype.match = function (m) { return m.UnicodeLetterOrNumberOrLine(this._0); };
    UnicodeLetterOrNumberOrLine.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    UnicodeLetterOrNumberOrLine.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return UnicodeLetterOrNumberOrLine;
}());
exports.UnicodeLetterOrNumberOrLine = UnicodeLetterOrNumberOrLine;
