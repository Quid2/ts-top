"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseShake48 = exports.parseAbsRef = exports.typedBLOB = exports.flatBLOB = void 0;
const flat_1 = require("./flat");
const zm_1 = require("./zm");
const Kb1f46a49c8f8_1 = require("@quid2/adt/Word8/Kb1f46a49c8f8");
const K9f214799149b_1 = require("@quid2/adt/SHAKE128_48/K9f214799149b");
const K4bbd38587b9e_1 = require("@quid2/adt/AbsRef/K4bbd38587b9e");
const K614edd84c8bd_1 = require("@quid2/adt/TypedBLOB/K614edd84c8bd");
const Kf139d4751fda_1 = require("@quid2/adt/BLOB/Kf139d4751fda");
const K982148c09ddb_1 = require("@quid2/adt/FlatEncoding/K982148c09ddb");
const Kf8844385a443_1 = require("@quid2/adt/Bytes/Kf8844385a443");
/**
 * flat(3) // => [233,1]
 * @param v
 */
function flatBLOB(v) {
    //return new BLOB(new FlatEncoding,new Bytes(new PreAligned(new FillerEnd(),flat (new ByType))));
    return new Kf139d4751fda_1.BLOB(new K982148c09ddb_1.FlatEncoding(), new Kf8844385a443_1.Bytes(flat_1.flat(v)));
}
exports.flatBLOB = flatBLOB;
function typedBLOB(v, t) {
    return new K614edd84c8bd_1.TypedBLOB(t(zm_1.zmType), flatBLOB(v));
}
exports.typedBLOB = typedBLOB;
function parseAbsRef(s) {
    if (s.substring(0, 1) !== "K")
        throw "unexpected input: " + s;
    return new K4bbd38587b9e_1.AbsRef(parseShake48(s.substring(1)));
}
exports.parseAbsRef = parseAbsRef;
/**
 *
 * @param s string to parse
 *
 *    parseShake48 "K3e8257255cbf" // => boh
 *
 */
function parseShake48(s) {
    function hex(offset) {
        return new Kb1f46a49c8f8_1.Word8(parseInt(s.substring(offset, offset + 2), 16));
    }
    return new K9f214799149b_1.SHAKE128_48(hex(0), hex(2), hex(4), hex(6), hex(8), hex(10));
}
exports.parseShake48 = parseShake48;
// export function prettyAbsRef(r: AbsRef): string {
//     return "K" + prettyShake48(r._0);
// }
// export function prettyShake48<I extends Flat>(s: SHAKE128_48<I>): string {
//     function asHex(v: Word8) { const r = v.value.toString(16); return r.length == 1 ? '0' + r : r; }
//     return asHex(s._0) + asHex(s._1) + asHex(s._2) + asHex(s._3) + asHex(s._4) + asHex(s._5);
// }
//# sourceMappingURL=util.js.map