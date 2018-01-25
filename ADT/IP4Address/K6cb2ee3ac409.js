"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IP4Address = function (f) { return f(___, []); };
var ___ = {
    zid: [0x6c, 0xb2, 0xee, 0x3a, 0xc4, 0x09],
    decoder: function (decoders) {
        return function (st) { return new IP4Address(decoders[0](st), decoders[1](st), decoders[2](st), decoders[3](st)); };
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