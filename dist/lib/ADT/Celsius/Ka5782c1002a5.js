"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Celsius = function (f) { return f(___, []); };
var ___ = {
    zid: [0xa5, 0x78, 0x2c, 0x10, 0x02, 0xa5],
    decoder: function (decoders) {
        return function (st) { return new Celsius(decoders[0](st)); };
    }
};
var Celsius = (function () {
    function Celsius(_0) {
        this._0 = _0;
    }
    Celsius.prototype.match = function (m) { return m.Celsius(this._0); };
    Celsius.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Celsius.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Celsius;
}());
exports.Celsius = Celsius;
//# sourceMappingURL=Ka5782c1002a5.js.map