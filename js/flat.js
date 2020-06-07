"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatDecoder = exports.DecoderState = exports.EncoderState = exports.unflat = exports.flat = void 0;
const prim_1 = require("@quid2/prim");
Object.defineProperty(exports, "EncoderState", { enumerable: true, get: function () { return prim_1.EncoderState; } });
Object.defineProperty(exports, "DecoderState", { enumerable: true, get: function () { return prim_1.DecoderState; } });
Object.defineProperty(exports, "flatDecoder", { enumerable: true, get: function () { return prim_1.flatDecoder; } });
const Ka5583bf3ad34_1 = require("@quid2/adt/Tuple2/Ka5583bf3ad34");
const Kae1dfeece189_1 = require("@quid2/adt/Filler/Kae1dfeece189");
/**
 *  Encode a value in the [Flat](http://quid2.org) binary format.
 *
 * flatA(ws[0]) // => [233,1]
 *
 * ``` setup
 * import "../util"
 * ```
 * moremm
 *
 * ```
 * const flatA = (v) => Array.from(flat(v))
 * const ws =[new W(233),new W(111)]
 * const ww =[new W(233),new W(111)]
 * flatA(ws[0]) // => [233,1]
 * flatA(ws[0]) // => [233,1]
 *```
 *
 * Examples:

flatA(ws[0]) // => [233,1]

 ```
 flatA(ww[0]).toString() // => [233,112].toString()
 flat(ww[0]) => [233,1].toString()
 ```

 * @param v the value to encode
 * @return the encoded value
 */
//function flat(v: ZM): Uint8Array {
function flat(v) {
    let val = new Ka5583bf3ad34_1.Tuple2(v, new Kae1dfeece189_1.Filler(""));
    let numBits = val.flatMaxSize();
    var numBytes = Math.ceil(numBits / 8);
    let st = new prim_1.EncoderState(numBytes);
    val.flatEncode(st);
    return st.seal();
}
exports.flat = flat;
/**
 * Decode value
 * @param dec the decoder for the value only (excluding the final Filler)
 * @param buf the binary buffer containing the encoded value plus the final Filler
 * @return the decoded value
 */
//function unflat(dec: Decoder, buf: Uint8Array): ZM {
function unflat(dec, buf) {
    //console.log("unflat",buf);
    const st = new prim_1.DecoderState(buf);
    const v = dec(st);
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
//# sourceMappingURL=flat.js.map