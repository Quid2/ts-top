/** ZM Type:
IP4Address ≡   IP4Address Kb1f46a49c8f8
                          Kb1f46a49c8f8
                          Kb1f46a49c8f8
                          Kb1f46a49c8f8
*/

import * as Q from "@quid2/ts-core";
import * as Kb1f46a49c8f8 from "../Word8/Kb1f46a49c8f8";

export const $IP4Address: Q.zmFold<IP4Address> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x6c, 0xb2, 0xee, 0x3a, 0xc4, 0x09],
  decoder: function (decoders) {
    return function (st) {
      return new IP4Address(
        Kb1f46a49c8f8.___.decoder([])(st),
        Kb1f46a49c8f8.___.decoder([])(st),
        Kb1f46a49c8f8.___.decoder([])(st),
        Kb1f46a49c8f8.___.decoder([])(st)
      );
    };
  },
};

export class IP4Address implements Q.ZM {
  constructor(
    public readonly _0: Kb1f46a49c8f8.Word8,
    public readonly _1: Kb1f46a49c8f8.Word8,
    public readonly _2: Kb1f46a49c8f8.Word8,
    public readonly _3: Kb1f46a49c8f8.Word8
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "IP4Address",
        this._0.toStr(true),
        this._1.toStr(true),
        this._2.toStr(true),
        this._3.toStr(true),
      ].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "IP4Address",
        this._0.pretty(true),
        this._1.pretty(true),
        this._2.pretty(true),
        this._3.pretty(true),
      ].join(" ")
    );
  }

  match<R>(m: {
    IP4Address: (
      v0: Kb1f46a49c8f8.Word8,
      v1: Kb1f46a49c8f8.Word8,
      v2: Kb1f46a49c8f8.Word8,
      v3: Kb1f46a49c8f8.Word8
    ) => R;
  }): R {
    return m.IP4Address(this._0, this._1, this._2, this._3);
  }
  flatMaxSize(): number {
    return (
      this._0.flatMaxSize() +
      this._1.flatMaxSize() +
      this._2.flatMaxSize() +
      this._3.flatMaxSize()
    );
  }
  flatEncode(st: Q.EncoderState) {
    this._0.flatEncode(st);
    this._1.flatEncode(st);
    this._2.flatEncode(st);
    this._3.flatEncode(st);
  }
}
