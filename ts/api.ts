import {
  EncoderState,
  zmId,
  zmFold,
  zmTypeInfo,
  Decoder,
  DecoderState,
  Flat,
  AsString,
  ZM,
} from "@quid2/ts-core";
import { Tuple2 } from "../ADT/Tuple2/Ka5583bf3ad34";
import { Filler } from "../ADT/Filler/Kae1dfeece189";
import { Type, TypeApp, TypeCon } from "../ADT/Type/K7028aa556ebc";
import { AbsRef } from "../ADT/AbsRef/K4bbd38587b9e";
import { SHAKE128_48 } from "../ADT/SHAKE128_48/K9f214799149b";
import { Word8 as W } from "../ADT/Word8/Kb1f46a49c8f8";
//export * from './iterator' // Not working?
import "./pretty";
import "./iterator";
import "./functor";

//var x = console.log(ADD.dummy)

export {
  flat,
  zmType,
  zmId,
  zmFold,
  unflat,
  Decoder,
  //flatDecoder,
  Flat,
  AsString,
  ZM,
  EncoderState,
  DecoderState,
};

/**
 *  Encode a value in the [Flat](http://quid2.org) binary format.
 *  > flat(true)
 *  MM
 */
/**
 * @param v the value to encode
 * @return the encoded value
 */
function flat(v: any): Uint8Array {
  let val = new Tuple2(v, new Filler(""));
  let numBits = val.flatMaxSize();
  var numBytes = Math.ceil(numBits / 8);
  let st = new EncoderState(numBytes);
  val.flatEncode(st);
  return st.seal();
}

/** Apply to a type to create the corresponding ZM type */
function zmType(t: zmTypeInfo, ts: Type<AbsRef>[]): Type<AbsRef> {
  function typeId(v: zmId): Type<AbsRef> {
    return new TypeCon(
      new AbsRef(
        new SHAKE128_48(
          new W(v[0]),
          new W(v[1]),
          new W(v[2]),
          new W(v[3]),
          new W(v[4]),
          new W(v[5])
        )
      )
    );
  }

  return ts.reduce((f, a) => new TypeApp(f, a), typeId(t.zid));
}

/**
 * Decode value
 * @param dec the decoder for the value only (excluding the final Filler)
 * @param buf the binary buffer containing the encoded value plus the final Filler
 * @return the decoded value
 */
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
