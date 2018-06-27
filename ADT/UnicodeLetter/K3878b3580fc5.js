"use strict";
/** ZM Type:
UnicodeLetter ≡   UnicodeLetter K066db52af145
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeLetter = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x38, 0x78, 0xb3, 0x58, 0x0f, 0xc5],
    decoder: function (decoders) {
        return function (st) { return new UnicodeLetter(K066db52af145.___.decoder([])(st)); };
    }
};
var UnicodeLetter = /** @class */ (function () {
    function UnicodeLetter(_0) {
        this._0 = _0;
    }
    UnicodeLetter.prototype.toString = function () { return this.toStr(false); };
    UnicodeLetter.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["UnicodeLetter", this._0.toStr(true)].join(' '));
    };
    UnicodeLetter.prototype.match = function (m) { return m.UnicodeLetter(this._0); };
    UnicodeLetter.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    UnicodeLetter.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return UnicodeLetter;
}());
exports.UnicodeLetter = UnicodeLetter;
