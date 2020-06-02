/** ZM Type:
UnicodeSymbol ≡   UnicodeSymbol K066db52af145
*/

import * as Q from "@quid2/ts-core";
import * as K066db52af145 from "../Char/K066db52af145";

export const $UnicodeSymbol: Q.zmFold<UnicodeSymbol> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x80, 0x10, 0x30, 0xef, 0x54, 0x3c],
  decoder: function (decoders) {
    return function (st) {
      return new UnicodeSymbol(K066db52af145.___.decoder([])(st));
    };
  },
};

export class UnicodeSymbol implements Q.ZM {
  constructor(public readonly _0: K066db52af145.Char) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["UnicodeSymbol", this._0.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["UnicodeSymbol", this._0.pretty(true)].join(" ")
    );
  }

  match<R>(m: { UnicodeSymbol: (v0: K066db52af145.Char) => R }): R {
    return m.UnicodeSymbol(this._0);
  }
  flatMaxSize(): number {
    return this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this._0.flatEncode(st);
  }
}
