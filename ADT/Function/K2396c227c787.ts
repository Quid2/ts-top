/** ZM Type:
Function a b ≡   Call a
               | Reply (K9f214799149b a) b
*/

import * as Q from "@quid2/ts-core";
import * as K9f214799149b from "../SHAKE128_48/K9f214799149b";

export const $Function: <A extends Q.ZM, B extends Q.ZM>(
  t0: Q.zmFold<A>,
  t1: Q.zmFold<B>
) => Q.zmFold<Function<A, B>> = function (t1, t2) {
  return function (f) {
    return f(___, [t1(f), t2(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0x23, 0x96, 0xc2, 0x27, 0xc7, 0x87],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new Call(decoders[0](st));
      } else {
        return new Reply(
          K9f214799149b.___.decoder([decoders[0]])(st),
          decoders[1](st)
        );
      }
    };
  },
};

export type Function<A extends Q.ZM, B extends Q.ZM> = Call<A, B> | Reply<A, B>;

export class Call<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: A) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["Call", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["Call", this._0.pretty(true)].join(" "));
  }

  match<R>(m: {
    Call: (v0: A) => R;
    Reply: (v0: K9f214799149b.SHAKE128_48<A>, v1: B) => R;
  }): R {
    return m.Call(this._0);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
    this._0.flatEncode(st);
  }
}

export class Reply<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: K9f214799149b.SHAKE128_48<A>,
    public readonly _1: B
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Reply", this._0.toStr(true), this._1.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Reply", this._0.pretty(true), this._1.pretty(true)].join(" ")
    );
  }

  match<R>(m: {
    Call: (v0: A) => R;
    Reply: (v0: K9f214799149b.SHAKE128_48<A>, v1: B) => R;
  }): R {
    return m.Reply(this._0, this._1);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize() + this._1.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
    this._0.flatEncode(st);
    this._1.flatEncode(st);
  }
}
