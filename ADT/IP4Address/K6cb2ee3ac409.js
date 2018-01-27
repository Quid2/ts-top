"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$IP4Address = function (f) { return f(___, []); };
var ___ = {
    zid: [0x6c, 0xb2, 0xee, 0x3a, 0xc4, 0x09],
    decoder: function (decoders) {
        var decs = { "IP4Address": [Kb1f46a49c8f8.$Word8(Q.flatDecoder), Kb1f46a49c8f8.$Word8(Q.flatDecoder), Kb1f46a49c8f8.$Word8(Q.flatDecoder), Kb1f46a49c8f8.$Word8(Q.flatDecoder)] };
        return function (st) { var d = decs["IP4Address"]; return new IP4Address(d[0](st), d[1](st), d[2](st), d[3](st)); };
    }
};
var IP4Address = (function () {
    function IP4Address(_0, _1, _2, _3) {
        this._0 = _0;
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
    }
    IP4Address.prototype.match = function (m) { return m.IP4Address(this._0, this._1, this._2, this._3); };
    IP4Address.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize() + this._2.flatMaxSize() + this._3.flatMaxSize(); };
    IP4Address.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); this._2.flatEncode(st); this._3.flatEncode(st); };
    return IP4Address;
}());
exports.IP4Address = IP4Address;
//# sourceMappingURL=K6cb2ee3ac409.js.map