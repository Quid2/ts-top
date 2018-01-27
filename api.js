"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
var Ka5583bf3ad34_1 = require("./ADT/Tuple2/Ka5583bf3ad34");
var Kae1dfeece189_1 = require("./ADT/Filler/Kae1dfeece189");
var K7028aa556ebc_1 = require("./ADT/Type/K7028aa556ebc");
var K4bbd38587b9e_1 = require("./ADT/AbsRef/K4bbd38587b9e");
var K9f214799149b_1 = require("./ADT/SHAKE128_48/K9f214799149b");
var Kb1f46a49c8f8_1 = require("./ADT/Word8/Kb1f46a49c8f8");
function flat(v) {
    var val = new Ka5583bf3ad34_1.Tuple2(v, new Kae1dfeece189_1.FillerEnd());
    var numBits = val.flatMaxSize();
    var numBytes = Math.ceil(numBits / 8);
    var st = new core_1.EncoderState(numBytes);
    val.flatEncode(st);
    return st.seal();
}
exports.flat = flat;
function zmType(t, ts) {
    function typeId(v) {
        return new K7028aa556ebc_1.TypeCon(new K4bbd38587b9e_1.AbsRef(new K9f214799149b_1.SHAKE128_48(new Kb1f46a49c8f8_1.Word8(v[0]), new Kb1f46a49c8f8_1.Word8(v[1]), new Kb1f46a49c8f8_1.Word8(v[2]), new Kb1f46a49c8f8_1.Word8(v[3]), new Kb1f46a49c8f8_1.Word8(v[4]), new Kb1f46a49c8f8_1.Word8(v[5]))));
    }
    return ts.reduce(function (f, a) { return new K7028aa556ebc_1.TypeApp(f, a); }, typeId(t.zid));
}
exports.zmType = zmType;
;
function unflat(dec, buf) {
    var st = new core_1.DecoderState(buf);
    var v = dec(st);
    st.filler();
    st.seal();
    return v;
}
exports.unflat = unflat;
//# sourceMappingURL=api.js.map