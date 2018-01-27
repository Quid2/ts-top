"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
exports.$MostSignificantFirst = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0x74, 0xe2, 0xb3, 0xb8, 0x99, 0x41],
    decoder: function (decoders) {
        var decs = { "MostSignificantFirst": [Q.zmConst(decoders[0])(Q.flatDecoder)] };
        return function (st) { var d = decs["MostSignificantFirst"]; return new MostSignificantFirst(d[0](st)); };
    }
};
var MostSignificantFirst = (function () {
    function MostSignificantFirst(_0) {
        this._0 = _0;
    }
    MostSignificantFirst.prototype.match = function (m) { return m.MostSignificantFirst(this._0); };
    MostSignificantFirst.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    MostSignificantFirst.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return MostSignificantFirst;
}());
exports.MostSignificantFirst = MostSignificantFirst;
//# sourceMappingURL=K74e2b3b89941.js.map