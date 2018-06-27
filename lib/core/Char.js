"use strict";
exports.__esModule = true;
exports.$Char = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x06, 0x6d, 0xb5, 0x2a, 0xf1, 0x45],
    decoder: function (decoders) {
        return function (st) { return new Char(st.char()); };
    }
};
var Char = /** @class */ (function () {
    function Char(_0) {
        this._0 = _0;
    }
    Char.prototype.flatMaxSize = function () { return 24; };
    Char.prototype.flatEncode = function (st) { st.char(this._0); };
    Char.prototype.toString = function () { return this.toStr(); };
    Char.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "'" + this._0.toString() + "'";
    };
    return Char;
}());
exports.Char = Char;
