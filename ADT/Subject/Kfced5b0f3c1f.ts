/** ZM Type:
Subject ≡   Subject (Kb8cd13187198 (Kb8cd13187198 K066db52af145))
*/

import * as Q from "@quid2/ts-core";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K066db52af145 from "../Char/K066db52af145";

export const $Subject: Q.zmFold<Subject> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0xfc, 0xed, 0x5b, 0x0f, 0x3c, 0x1f],
  decoder: function (decoders) {
    return function (st) {
      return new Subject(
        Kb8cd13187198.___.decoder([
          Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])]),
        ])(st)
      );
    };
  },
};

export class Subject implements Q.ZM {
  constructor(
    public readonly _0: Kb8cd13187198.List<
      Kb8cd13187198.List<K066db52af145.Char>
    >
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["Subject", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["Subject", this._0.pretty(true)].join(" "));
  }

  match<R>(m: {
    Subject: (
      v0: Kb8cd13187198.List<Kb8cd13187198.List<K066db52af145.Char>>
    ) => R;
  }): R {
    return m.Subject(this._0);
  }
  flatMaxSize(): number {
    return this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this._0.flatEncode(st);
  }
}
