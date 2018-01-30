"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
exports.flatDecoder = core_1.flatDecoder;
const Ka5583bf3ad34_1 = require("./ADT/Tuple2/Ka5583bf3ad34");
const Kae1dfeece189_1 = require("./ADT/Filler/Kae1dfeece189");
const K7028aa556ebc_1 = require("./ADT/Type/K7028aa556ebc");
const K4bbd38587b9e_1 = require("./ADT/AbsRef/K4bbd38587b9e");
const K9f214799149b_1 = require("./ADT/SHAKE128_48/K9f214799149b");
const Kb1f46a49c8f8_1 = require("./ADT/Word8/Kb1f46a49c8f8");
function flat(v) {
    let val = new Ka5583bf3ad34_1.Tuple2(v, new Kae1dfeece189_1.FillerEnd());
    let numBits = val.flatMaxSize();
    var numBytes = Math.ceil(numBits / 8);
    let st = new core_1.EncoderState(numBytes);
    val.flatEncode(st);
    return st.seal();
}
exports.flat = flat;
function zmType(t, ts) {
    function typeId(v) {
        return new K7028aa556ebc_1.TypeCon(new K4bbd38587b9e_1.AbsRef(new K9f214799149b_1.SHAKE128_48(new Kb1f46a49c8f8_1.Word8(v[0]), new Kb1f46a49c8f8_1.Word8(v[1]), new Kb1f46a49c8f8_1.Word8(v[2]), new Kb1f46a49c8f8_1.Word8(v[3]), new Kb1f46a49c8f8_1.Word8(v[4]), new Kb1f46a49c8f8_1.Word8(v[5]))));
    }
    return ts.reduce((f, a) => new K7028aa556ebc_1.TypeApp(f, a), typeId(t.zid));
}
exports.zmType = zmType;
;
function unflat(dec, buf) {
    const st = new core_1.DecoderState(buf);
    const v = dec(st);
    st.filler();
    st.seal();
    return v;
}
exports.unflat = unflat;
//# sourceMappingURL=api.js.map