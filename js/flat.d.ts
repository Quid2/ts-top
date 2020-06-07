import { Flat, EncoderState, Decoder, DecoderState, flatDecoder } from "@quid2/prim";
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
declare function flat(v: any): Uint8Array;
/**
 * Decode value
 * @param dec the decoder for the value only (excluding the final Filler)
 * @param buf the binary buffer containing the encoded value plus the final Filler
 * @return the decoded value
 */
declare function unflat(dec: Decoder, buf: Uint8Array): any;
//# sourceMappingURL=flat.d.ts.map