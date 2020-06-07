import {
  Flat,
  EncoderState,
  Decoder,
  DecoderState,
  flatDecoder,
  ZM,
} from "@quid2/prim";
import { Tuple2 } from "@quid2/adt/Tuple2/Ka5583bf3ad34";
import { Filler } from "@quid2/adt/Filler/Kae1dfeece189";

export { flat, unflat, Flat, EncoderState, Decoder, DecoderState, flatDecoder };

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
function flat(v: any): Uint8Array {
  let val = new Tuple2(v, new Filler(""));
  let numBits = val.flatMaxSize();
  var numBytes = Math.ceil(numBits / 8);
  let st = new EncoderState(numBytes);
  val.flatEncode(st);
  return st.seal();
}

/**
 * Decode value
 * @param dec the decoder for the value only (excluding the final Filler)
 * @param buf the binary buffer containing the encoded value plus the final Filler
 * @return the decoded value
 */
//function unflat(dec: Decoder, buf: Uint8Array): ZM {
function unflat(dec: Decoder, buf: Uint8Array): any {
  //console.log("unflat",buf);
  const st = new DecoderState(buf);
  const v = dec(st);
  st.zmFiller();
  st.seal();
  return v;
}

// Optimised Types

// Filler
// decoder: function (decoders) {
//   return function (st) { st.filler(); return new FillerEnd(); }
// }

// String
//toStr(nested = false): string { return '"' + this.value.toString() + '"'; }
