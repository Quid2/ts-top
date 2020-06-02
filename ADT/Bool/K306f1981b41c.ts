/** ZM Type:
Bool ≡   False
       | True
*/

import * as Q from "@quid2/ts-core";

export const $Bool: Q.zmFold<Bool> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x30, 0x6f, 0x19, 0x81, 0xb4, 0x1c],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new False();
      } else {
        return new True();
      }
    };
  },
};

export type Bool = False | True;

export class False implements Q.ZM {
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return "False";
  }
  pretty(nested = false): string {
    return "False";
  }

  match<R>(m: { False: R; True: R }): R {
    return m.False;
  }
  flatMaxSize(): number {
    return 1 + 0;
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
  }
}

export class True implements Q.ZM {
  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return "True";
  }
  pretty(nested = false): string {
    return "True";
  }

  match<R>(m: { False: R; True: R }): R {
    return m.True;
  }
  flatMaxSize(): number {
    return 1 + 0;
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
  }
}
