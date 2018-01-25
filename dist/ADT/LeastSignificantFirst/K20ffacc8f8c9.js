"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LeastSignificantFirst = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0x20, 0xff, 0xac, 0xc8, 0xf8, 0xc9],
    decoder: function (decoders) {
        return function (st) { return new LeastSignificantFirst(decoders[0](st)); };
    }
};
var LeastSignificantFirst = (function () {
    function LeastSignificantFirst(_0) {
        this._0 = _0;
    }
    LeastSignificantFirst.prototype.match = function (m) { return m.LeastSignificantFirst(this._0); };
    LeastSignificantFirst.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    LeastSignificantFirst.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return LeastSignificantFirst;
}());
exports.LeastSignificantFirst = LeastSignificantFirst;
//# sourceMappingURL=K20ffacc8f8c9.js.map