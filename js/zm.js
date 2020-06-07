"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zmType = void 0;
const K7028aa556ebc_1 = require("@quid2/adt/Type/K7028aa556ebc");
const K4bbd38587b9e_1 = require("@quid2/adt/AbsRef/K4bbd38587b9e");
const K9f214799149b_1 = require("@quid2/adt/SHAKE128_48/K9f214799149b");
const Kb1f46a49c8f8_1 = require("@quid2/adt/Word8/Kb1f46a49c8f8");
/** Apply to a type to create the corresponding ZM type
 *
 * TODO zmType()...
 *
 * 2+2 // =>  44
 *
 * @param t the type to apply
 * @param ts the types to which 't' is applied
 * @return the applied type
 */
function zmType(t, ts) {
    function typeId(v) {
        return new K7028aa556ebc_1.TypeCon(new K4bbd38587b9e_1.AbsRef(new K9f214799149b_1.SHAKE128_48(new Kb1f46a49c8f8_1.Word8(v[0]), new Kb1f46a49c8f8_1.Word8(v[1]), new Kb1f46a49c8f8_1.Word8(v[2]), new Kb1f46a49c8f8_1.Word8(v[3]), new Kb1f46a49c8f8_1.Word8(v[4]), new Kb1f46a49c8f8_1.Word8(v[5]))));
    }
    return ts.reduce((f, a) => new K7028aa556ebc_1.TypeApp(f, a), typeId(t.zid));
}
exports.zmType = zmType;
//# sourceMappingURL=zm.js.map