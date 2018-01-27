"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K7028aa556ebc = require("../Type/K7028aa556ebc");
var K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
var Kf139d4751fda = require("../BLOB/Kf139d4751fda");
var K982148c09ddb = require("../FlatEncoding/K982148c09ddb");
exports.$TypedBLOB = function (f) { return f(___, []); };
var ___ = {
    zid: [0x61, 0x4e, 0xdd, 0x84, 0xc8, 0xbd],
    decoder: function (decoders) {
        var decs = { "TypedBLOB": [K7028aa556ebc.$Type(K4bbd38587b9e.$AbsRef)(Q.flatDecoder), Kf139d4751fda.$BLOB(K982148c09ddb.$FlatEncoding)(Q.flatDecoder)] };
        return function (st) { var d = decs["TypedBLOB"]; return new TypedBLOB(d[0](st), d[1](st)); };
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