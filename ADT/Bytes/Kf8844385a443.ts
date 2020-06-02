/** ZM Type:
Bytes ≡   Bytes (Kb2f28cf37d12 (K2e8b4519aeaa Kb1f46a49c8f8))
*/

import * as Q from "@quid2/ts-core";
import * as Kb2f28cf37d12 from "../PreAligned/Kb2f28cf37d12";
import * as K2e8b4519aeaa from "../Array/K2e8b4519aeaa";
import * as Kb1f46a49c8f8 from "../Word8/Kb1f46a49c8f8";

export const $Bytes: Q.zmFold<Bytes> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0xf8, 0x84, 0x43, 0x85, 0xa4, 0x43],
  decoder: function (decoders) {
    return function (st) {
      return new Bytes(st.zmBytes(decoders));
    };
  },
};

export class Bytes implements Q.ZM {
  constructor(public readonly value: Uint8Array) {}
  flatMaxSize() {
    return Q.EncoderState.szBytes(this.value);
  }
  flatEncode(st: Q.EncoderState) {
    st.zmBytes(this.value);
  }
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested?: boolean): string {
    return this.value.toString();
  }
  pretty(nested?: boolean): string {
    return this.toString();
  }
}
