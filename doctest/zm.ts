import { zmId, zmTypeInfo, zmFold, ZM } from "@quid2/ts-core";
import { Type, TypeApp, TypeCon } from "../ADT/Type/K7028aa556ebc";
import { AbsRef } from "../ADT/AbsRef/K4bbd38587b9e";
import { SHAKE128_48 } from "../ADT/SHAKE128_48/K9f214799149b";
import { Word8 as W } from "../ADT/Word8/Kb1f46a49c8f8";

export { zmType, zmId, zmTypeInfo, ZM, zmFold };

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

import * as __test from "tape"

    __test("zmType", t => {
      
      t.deepEqual(2 + 2, 44, "2 + 2 == 44")
      
;t.end()
    })