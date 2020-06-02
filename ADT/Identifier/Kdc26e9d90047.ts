/** ZM Type:
Identifier ≡   Name K3878b3580fc5 (Kb8cd13187198 K33445520c45a)
             | Symbol (Kbf2d1c86eb20 K801030ef543c)
*/

import * as Q from "@quid2/ts-core";
import * as K3878b3580fc5 from "../UnicodeLetter/K3878b3580fc5";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K33445520c45a from "../UnicodeLetterOrNumberOrLine/K33445520c45a";
import * as Kbf2d1c86eb20 from "../NonEmptyList/Kbf2d1c86eb20";
import * as K801030ef543c from "../UnicodeSymbol/K801030ef543c";

export const $Identifier: Q.zmFold<Identifier> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0xdc, 0x26, 0xe9, 0xd9, 0x00, 0x47],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new Name(
          K3878b3580fc5.___.decoder([])(st),
          Kb8cd13187198.___.decoder([K33445520c45a.___.decoder([])])(st)
        );
      } else {
        return new Symbol(
          Kbf2d1c86eb20.___.decoder([K801030ef543c.___.decoder([])])(st)
        );
      }
    };
  },
};

export type Identifier = Name | Symbol;

export class Name implements Q.ZM {
  constructor(
    public readonly _0: K3878b3580fc5.UnicodeLetter,
    public readonly _1: Kb8cd13187198.List<
      K33445520c45a.UnicodeLetterOrNumberOrLine
    >
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Name", this._0.toStr(true), this._1.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Name", this._0.pretty(true), this._1.pretty(true)].join(" ")
    );
  }

  match<R>(m: {
    Name: (
      v0: K3878b3580fc5.UnicodeLetter,
      v1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>
    ) => R;
    Symbol: (v0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>) => R;
  }): R {
    return m.Name(this._0, this._1);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize() + this._1.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
    this._0.flatEncode(st);
    this._1.flatEncode(st);
  }
}

export class Symbol implements Q.ZM {
  constructor(
    public readonly _0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["Symbol", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["Symbol", this._0.pretty(true)].join(" "));
  }

  match<R>(m: {
    Name: (
      v0: K3878b3580fc5.UnicodeLetter,
      v1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>
    ) => R;
    Symbol: (v0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>) => R;
  }): R {
    return m.Symbol(this._0);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
    this._0.flatEncode(st);
  }
}
