/** ZM Type:
SourceCode a ≡   SourceCode a K2f006595638c
*/

import * as Q from "@quid2/ts-core";
import * as K2f006595638c from "../String/K2f006595638c";

export const $SourceCode: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<SourceCode<A>> = function (t1) {
  return function (f) {
    return f(___, [t1(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0xb9, 0xb0, 0x8d, 0x43, 0x76, 0x6f],
  decoder: function (decoders) {
    return function (st) {
      return new SourceCode(decoders[0](st), K2f006595638c.___.decoder([])(st));
    };
  },
};

export class SourceCode<A extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: A,
    public readonly _1: K2f006595638c.String
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["SourceCode", this._0.toStr(true), this._1.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["SourceCode", this._0.pretty(true), this._1.pretty(true)].join(" ")
    );
  }

  match<R>(m: { SourceCode: (v0: A, v1: K2f006595638c.String) => R }): R {
    return m.SourceCode(this._0, this._1);
  }
  flatMaxSize(): number {
    return this._0.flatMaxSize() + this._1.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this._0.flatEncode(st);
    this._1.flatEncode(st);
  }
}
