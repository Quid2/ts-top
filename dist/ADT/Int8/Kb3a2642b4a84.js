"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Int8 = function (f) { return f(___, []); };
var ___ = {
    zid: [0xb3, 0xa2, 0x64, 0x2b, 0x4a, 0x84],
    decoder: function (decoders) {
        return function (st) { return new Int8(decoders[0](st)); };
    }
};
var Int8 = (function () {
    function Int8(_0) {
        this._0 = _0;
    }
    Int8.prototype.match = function (m) { return m.Int8(this._0); };
    Int8.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Int8.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Int8;
}());
exports.Int8 = Int8;
//# sourceMappingURL=Kb3a2642b4a84.js.map