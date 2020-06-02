/** ZM Type:
Word16 ≡   Word16 Kf92e8339908a
*/

import * as Q from "@quid2/ts-core";
import * as Kf92e8339908a from "../Word/Kf92e8339908a";

export const $Word16: Q.zmFold<Word16> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x29, 0x5e, 0x24, 0xd6, 0x2f, 0xac],
  decoder: function (decoders) {
    return function (st) {
      return new Word16(st.zmWord16(decoders));
    };
  },
};

export class Word16 implements Q.ZM {
  constructor(public readonly value: number) {}
  flatMaxSize() {
    return Q.EncoderState.szWord16(this.value);
  }
  flatEncode(st: Q.EncoderState) {
    st.zmWord16(this.value);
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
