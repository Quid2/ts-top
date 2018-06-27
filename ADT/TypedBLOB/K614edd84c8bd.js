"use strict";
/** ZM Type:
TypedBLOB ≡   TypedBLOB (K7028aa556ebc K4bbd38587b9e)
                        (Kf139d4751fda K982148c09ddb)
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K7028aa556ebc = require("../Type/K7028aa556ebc");
var K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
var Kf139d4751fda = require("../BLOB/Kf139d4751fda");
var K982148c09ddb = require("../FlatEncoding/K982148c09ddb");
exports.$TypedBLOB = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x61, 0x4e, 0xdd, 0x84, 0xc8, 0xbd],
    decoder: function (decoders) {
        return function (st) { return new TypedBLOB(K7028aa556ebc.___.decoder([K4bbd38587b9e.___.decoder([])])(st), Kf139d4751fda.___.decoder([K982148c09ddb.___.decoder([])])(st)); };
    }
};
var TypedBLOB = /** @class */ (function () {
    function TypedBLOB(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    TypedBLOB.prototype.toString = function () { return this.toStr(false); };
    TypedBLOB.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["TypedBLOB", this._0.toStr(true), this._1.toStr(true)].join(' '));
    };
    TypedBLOB.prototype.match = function (m) { return m.TypedBLOB(this._0, this._1); };
    TypedBLOB.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize(); };
    TypedBLOB.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); };
    return TypedBLOB;
}());
exports.TypedBLOB = TypedBLOB;
