"use strict";
exports.__esModule = true;
var core_1 = require("./core");
exports.EncoderState = core_1.EncoderState;
exports.flatDecoder = core_1.flatDecoder;
var Ka5583bf3ad34_1 = require("../ADT/Tuple2/Ka5583bf3ad34");
var Kae1dfeece189_1 = require("../ADT/Filler/Kae1dfeece189");
var K7028aa556ebc_1 = require("../ADT/Type/K7028aa556ebc");
var K4bbd38587b9e_1 = require("../ADT/AbsRef/K4bbd38587b9e");
var K9f214799149b_1 = require("../ADT/SHAKE128_48/K9f214799149b");
var Kb1f46a49c8f8_1 = require("../ADT/Word8/Kb1f46a49c8f8");
//export * from './iterator' // Not working?
require("./pretty");
require("./iterator");
require("./functor");
/**
 *  Encode a value in the [Flat](http://quid2.org) binary format.
 *  > flat(true)
 *  MM
 */
/**
 * @param v the value to encode
 * @return the encoded value
 */
function flat(v) {
    var val = new Ka5583bf3ad34_1.Tuple2(v, new Kae1dfeece189_1.Filler(""));
    var numBits = val.flatMaxSize();
    var numBytes = Math.ceil(numBits / 8);
    var st = new core_1.EncoderState(numBytes);
    val.flatEncode(st);
    return st.seal();
}
exports.flat = flat;
/** Apply to a type to create the corresponding ZM type */
function zmType(t, ts) {
    function typeId(v) {
        return new K7028aa556ebc_1.TypeCon(new K4bbd38587b9e_1.AbsRef(new K9f214799149b_1.SHAKE128_48(new Kb1f46a49c8f8_1.Word8(v[0]), new Kb1f46a49c8f8_1.Word8(v[1]), new Kb1f46a49c8f8_1.Word8(v[2]), new Kb1f46a49c8f8_1.Word8(v[3]), new Kb1f46a49c8f8_1.Word8(v[4]), new Kb1f46a49c8f8_1.Word8(v[5]))));
    }
    return ts.reduce(function (f, a) { return new K7028aa556ebc_1.TypeApp(f, a); }, typeId(t.zid));
}
exports.zmType = zmType;
;
/**
 * Decode value
 * @param dec the decoder for the value only (excluding the final Filler)
 * @param buf the binary buffer containing the encoded value plus the final Filler
 * @return the decoded value
 */
function unflat(dec, buf) {
    //console.log("unflat",buf);
    var st = new core_1.DecoderState(buf);
    var v = dec(st);
    st.zmFiller();
    st.seal();
    return v;
}
exports.unflat = unflat;
// Optimised Types
// Filler
// decoder: function (decoders) {
//   return function (st) { st.filler(); return new FillerEnd(); }
// }
// String
//toStr(nested = false): string { return '"' + this.value.toString() + '"'; }
