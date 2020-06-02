"use strict";
/** ZM Type:
TypedBLOB ≡   TypedBLOB (K7028aa556ebc K4bbd38587b9e)
                        (Kf139d4751fda K982148c09ddb)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedBLOB = exports.___ = exports.$TypedBLOB = void 0;
const Q = require("../.././lib/core");
const K7028aa556ebc = require("../Type/K7028aa556ebc");
const K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
const Kf139d4751fda = require("../BLOB/Kf139d4751fda");
const K982148c09ddb = require("../FlatEncoding/K982148c09ddb");
exports.$TypedBLOB = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x61, 0x4e, 0xdd, 0x84, 0xc8, 0xbd],
    decoder: function (decoders) {
        return function (st) { return new TypedBLOB(K7028aa556ebc.___.decoder([K4bbd38587b9e.___.decoder([])])(st), Kf139d4751fda.___.decoder([K982148c09ddb.___.decoder([])])(st)); };
    }
};
class TypedBLOB {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["TypedBLOB", this._0.toStr(true), this._1.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["TypedBLOB", this._0.pretty(true), this._1.pretty(true)].join(' ')); }
    match(m) { return m.TypedBLOB(this._0, this._1); }
    flatMaxSize() { return this._0.flatMaxSize() + this._1.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); this._1.flatEncode(st); }
}
exports.TypedBLOB = TypedBLOB;
//# sourceMappingURL=K614edd84c8bd.js.map