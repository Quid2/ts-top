"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$UnicodeLetterOrNumberOrLine = function (f) { return f(___, []); };
var ___ = {
    zid: [0x33, 0x44, 0x55, 0x20, 0xc4, 0x5a],
    decoder: function (decoders) {
        return function (st) { return new UnicodeLetterOrNumberOrLine(decoders[0](st)); };
    }
};
var UnicodeLetterOrNumberOrLine = (function () {
    function UnicodeLetterOrNumberOrLine(_0) {
        this._0 = _0;
    }
    UnicodeLetterOrNumberOrLine.prototype.match = function (m) { return m.UnicodeLetterOrNumberOrLine(this._0); };
    UnicodeLetterOrNumberOrLine.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    UnicodeLetterOrNumberOrLine.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return UnicodeLetterOrNumberOrLine;
}());
exports.UnicodeLetterOrNumberOrLine = UnicodeLetterOrNumberOrLine;
//# sourceMappingURL=K33445520c45a.js.map