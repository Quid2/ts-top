"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$TypedBLOB = function (f) { return f(___, []); };
var ___ = {
    zid: [0x61, 0x4e, 0xdd, 0x84, 0xc8, 0xbd],
    decoder: function (decoders) {
        return function (st) { return new TypedBLOB(decoders[0](st), decoders[1](st)); };
    }
};
var TypedBLOB = (function () {
    function TypedBLOB(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    TypedBLOB.prototype.match = function (m) { return m.TypedBLOB(this._0, this._1); };
    TypedBLOB.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize(); };
    TypedBLOB.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); };
    return TypedBLOB;
}());
exports.TypedBLOB = TypedBLOB;
//# sourceMappingURL=K614edd84c8bd.js.map