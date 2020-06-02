/** ZM Type:
Either a b ≡   Left a
             | Right b
*/

import * as Q from "@quid2/ts-core";

export const $Either: <A extends Q.ZM, B extends Q.ZM>(
  t0: Q.zmFold<A>,
  t1: Q.zmFold<B>
) => Q.zmFold<Either<A, B>> = function (t1, t2) {
  return function (f) {
    return f(___, [t1(f), t2(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0x62, 0x60, 0xe4, 0x65, 0xae, 0x74],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new Left(decoders[0](st));
      } else {
        return new Right(decoders[1](st));
      }
    };
  },
};

export type Either<A extends Q.ZM, B extends Q.ZM> = Left<A, B> | Right<A, B>;

export class Left<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: A) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["Left", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["Left", this._0.pretty(true)].join(" "));
  }

  match<R>(m: { Left: (v0: A) => R; Right: (v0: B) => R }): R {
    return m.Left(this._0);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
    this._0.flatEncode(st);
  }
}

export class Right<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: B) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["Right", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["Right", this._0.pretty(true)].join(" "));
  }

  match<R>(m: { Left: (v0: A) => R; Right: (v0: B) => R }): R {
    return m.Right(this._0);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
    this._0.flatEncode(st);
  }
}
