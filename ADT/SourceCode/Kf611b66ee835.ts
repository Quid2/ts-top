/** ZM Type:
SourceCode a ≡   SourceCode a (Kb8cd13187198 K066db52af145)
*/

import * as Q from "@quid2/ts-core";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K066db52af145 from "../Char/K066db52af145";

export const $SourceCode: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<SourceCode<A>> = function (t1) {
  return function (f) {
    return f(___, [t1(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0xf6, 0x11, 0xb6, 0x6e, 0xe8, 0x35],
  decoder: function (decoders) {
    return function (st) {
      return new SourceCode(
        decoders[0](st),
        Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)
      );
    };
  },
};

export class SourceCode<A extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: A,
    public readonly _1: Kb8cd13187198.List<K066db52af145.Char>
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

  match<R>(m: {
    SourceCode: (v0: A, v1: Kb8cd13187198.List<K066db52af145.Char>) => R;
  }): R {
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
