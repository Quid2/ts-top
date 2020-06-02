/** ZM Type:
LeastSignificantFirst a ≡   LeastSignificantFirst a
*/

import * as Q from "@quid2/ts-core";

export const $LeastSignificantFirst: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<LeastSignificantFirst<A>> = function (t1) {
  return function (f) {
    return f(___, [t1(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0x20, 0xff, 0xac, 0xc8, 0xf8, 0xc9],
  decoder: function (decoders) {
    return function (st) {
      return new LeastSignificantFirst(decoders[0](st));
    };
  },
};

export class LeastSignificantFirst<A extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: A) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["LeastSignificantFirst", this._0.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["LeastSignificantFirst", this._0.pretty(true)].join(" ")
    );
  }

  match<R>(m: { LeastSignificantFirst: (v0: A) => R }): R {
    return m.LeastSignificantFirst(this._0);
  }
  flatMaxSize(): number {
    return this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this._0.flatEncode(st);
  }
}
