import { flat } from "./flat";
import { zmFold, zmType } from "./zm";
import { Word8 } from "@quid2/adt/Word8/Kb1f46a49c8f8";
import { SHAKE128_48 } from "@quid2/adt/SHAKE128_48/K9f214799149b";
import { AbsRef } from "@quid2/adt/AbsRef/K4bbd38587b9e";
import { TypedBLOB } from "@quid2/adt/TypedBLOB/K614edd84c8bd";
import { BLOB } from "@quid2/adt/BLOB/Kf139d4751fda";
import { FlatEncoding } from "@quid2/adt/FlatEncoding/K982148c09ddb";
import { Bytes } from "@quid2/adt/Bytes/Kf8844385a443";

/**
 * flat(3) // => [233,1]
 * @param v
 */
export function flatBLOB(v: any): BLOB<FlatEncoding> {
  //return new BLOB(new FlatEncoding,new Bytes(new PreAligned(new FillerEnd(),flat (new ByType))));
  return new BLOB(new FlatEncoding(), new Bytes(flat(v)));
}

export function typedBLOB(v: any, t: zmFold<any>): TypedBLOB {
  return new TypedBLOB(t(zmType), flatBLOB(v));
}

export function parseAbsRef(s: string): AbsRef {
  if (s.substring(0, 1) !== "K") throw "unexpected input: " + s;

  return new AbsRef(parseShake48(s.substring(1)));
}
/**
 *
 * @param s string to parse
 *
 *    parseShake48 "K3e8257255cbf" // => boh
 *
 */
export function parseShake48(s: string): SHAKE128_48<any> {
  function hex(offset: number) {
    return new Word8(parseInt(s.substring(offset, offset + 2), 16));
  }

  return new SHAKE128_48(hex(0), hex(2), hex(4), hex(6), hex(8), hex(10));
}

// export function prettyAbsRef(r: AbsRef): string {
//     return "K" + prettyShake48(r._0);
// }

// export function prettyShake48<I extends Flat>(s: SHAKE128_48<I>): string {
//     function asHex(v: Word8) { const r = v.value.toString(16); return r.length == 1 ? '0' + r : r; }
//     return asHex(s._0) + asHex(s._1) + asHex(s._2) + asHex(s._3) + asHex(s._4) + asHex(s._5);
// }
