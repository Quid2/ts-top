"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kf92e8339908a = require("../Word/Kf92e8339908a");
exports.$Word32 = function (f) { return f(___, []); };
var ___ = {
    zid: [0x24, 0x12, 0x79, 0x9c, 0x99, 0xf1],
    decoder: function (decoders) {
        var decs = { "Word32": [Kf92e8339908a.$Word(Q.flatDecoder)] };
        return function (st) { var d = decs["Word32"]; return new Word32(d[0](st)); };
    }
};
var Word32 = (function () {
    function Word32(_0) {
        this._0 = _0;
    }
    Word32.prototype.match = function (m) { return m.Word32(this._0); };
    Word32.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Word32.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Word32;
}());
exports.Word32 = Word32;
//# sourceMappingURL=K2412799c99f1.js.map