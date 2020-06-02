/** ZM Type:
Bit ≡   V0
      | V1
*/

import * as Q from "@quid2/ts-core";

export const $Bit: Q.zmFold<Bit> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x65, 0x14, 0x9c, 0xe3, 0xb3, 0x66],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new V0();
      } else {
        return new V1();
      }
    };
  },
};

export type Bit = V0 | V1;

export class V0 implements Q.ZM {
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return "V0";
  }
  pretty(nested = false): string {
    return "V0";
  }

  match<R>(m: { V0: R; V1: R }): R {
    return m.V0;
  }
  flatMaxSize(): number {
    return 1 + 0;
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
  }
}

export class V1 implements Q.ZM {
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return "V1";
  }
  pretty(nested = false): string {
    return "V1";
  }

  match<R>(m: { V0: R; V1: R }): R {
    return m.V1;
  }
  flatMaxSize(): number {
    return 1 + 0;
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
  }
}
