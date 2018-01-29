"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb53bec846608 = require("../IEEE_754_binary32/Kb53bec846608");
exports.$Celsius = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xa5, 0x78, 0x2c, 0x10, 0x02, 0xa5],
    decoder: function (decoders) {
        return function (st) { return new Celsius(Kb53bec846608.___.decoder([])(st)); };
    }
};
var Celsius = (function () {
    function Celsius(_0) {
        this._0 = _0;
    }
    Celsius.prototype.toString = function () { return this.toStr(false); };
    Celsius.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Celsius", this._0.toStr(true)].join(' '));
    };
    Celsius.prototype.match = function (m) { return m.Celsius(this._0); };
    Celsius.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Celsius.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Celsius;
}());
exports.Celsius = Celsius;
//# sourceMappingURL=Ka5782c1002a5.js.map