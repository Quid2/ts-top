"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K03226796ede4 = require("../ZigZag/K03226796ede4");
var K50d018f7593a = require("../Word64/K50d018f7593a");
exports.$Int64 = function (f) { return f(___, []); };
var ___ = {
    zid: [0xfb, 0x94, 0xcb, 0x4d, 0x4e, 0xde],
    decoder: function (decoders) {
        var decs = { "Int64": [K03226796ede4.$ZigZag(K50d018f7593a.$Word64)(Q.flatDecoder)] };
        return function (st) { var d = decs["Int64"]; return new Int64(d[0](st)); };
    }
};
var Int64 = (function () {
    function Int64(_0) {
        this._0 = _0;
    }
    Int64.prototype.match = function (m) { return m.Int64(this._0); };
    Int64.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Int64.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Int64;
}());
exports.Int64 = Int64;
//# sourceMappingURL=Kfb94cb4d4ede.js.map