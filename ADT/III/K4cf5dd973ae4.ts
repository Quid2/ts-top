/** ZM Type:
III ≡   III {w8 :: Kb3a2642b4a84,
             w16 :: K3dac6bd4fa9c,
             w :: Kfb94cb4d4ede,
             i8 :: Kb3a2642b4a84,
             i :: Kfb94cb4d4ede,
             f :: Kb53bec846608,
             d :: Kcba9596b4657,
             ii :: K102a3bb904e3}
*/

import * as Q from "@quid2/ts-core";
import * as Kb3a2642b4a84 from "../Int8/Kb3a2642b4a84";
import * as K3dac6bd4fa9c from "../Int16/K3dac6bd4fa9c";
import * as Kfb94cb4d4ede from "../Int64/Kfb94cb4d4ede";
import * as Kb53bec846608 from "../IEEE_754_binary32/Kb53bec846608";
import * as Kcba9596b4657 from "../IEEE_754_binary64/Kcba9596b4657";
import * as K102a3bb904e3 from "../Int/K102a3bb904e3";

export const $III: Q.zmFold<III> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x4c, 0xf5, 0xdd, 0x97, 0x3a, 0xe4],
  decoder: function (decoders) {
    return function (st) {
      return new III(
        Kb3a2642b4a84.___.decoder([])(st),
        K3dac6bd4fa9c.___.decoder([])(st),
        Kfb94cb4d4ede.___.decoder([])(st),
        Kb3a2642b4a84.___.decoder([])(st),
        Kfb94cb4d4ede.___.decoder([])(st),
        Kb53bec846608.___.decoder([])(st),
        Kcba9596b4657.___.decoder([])(st),
        K102a3bb904e3.___.decoder([])(st)
      );
    };
  },
};

export class III implements Q.ZM {
  constructor(
    public readonly w8: Kb3a2642b4a84.Int8,
    public readonly w16: K3dac6bd4fa9c.Int16,
    public readonly w: Kfb94cb4d4ede.Int64,
    public readonly i8: Kb3a2642b4a84.Int8,
    public readonly i: Kfb94cb4d4ede.Int64,
    public readonly f: Kb53bec846608.IEEE_754_binary32,
    public readonly d: Kcba9596b4657.IEEE_754_binary64,
    public readonly ii: K102a3bb904e3.Int
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "III",
        this.w8.toStr(true),
        this.w16.toStr(true),
        this.w.toStr(true),
        this.i8.toStr(true),
        this.i.toStr(true),
        this.f.toStr(true),
        this.d.toStr(true),
        this.ii.toStr(true),
      ].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "III",
        this.w8.pretty(true),
        this.w16.pretty(true),
        this.w.pretty(true),
        this.i8.pretty(true),
        this.i.pretty(true),
        this.f.pretty(true),
        this.d.pretty(true),
        this.ii.pretty(true),
      ].join(" ")
    );
  }

  match<R>(m: {
    III: (
      v0: Kb3a2642b4a84.Int8,
      v1: K3dac6bd4fa9c.Int16,
      v2: Kfb94cb4d4ede.Int64,
      v3: Kb3a2642b4a84.Int8,
      v4: Kfb94cb4d4ede.Int64,
      v5: Kb53bec846608.IEEE_754_binary32,
      v6: Kcba9596b4657.IEEE_754_binary64,
      v7: K102a3bb904e3.Int
    ) => R;
  }): R {
    return m.III(
      this.w8,
      this.w16,
      this.w,
      this.i8,
      this.i,
      this.f,
      this.d,
      this.ii
    );
  }
  flatMaxSize(): number {
    return (
      this.w8.flatMaxSize() +
      this.w16.flatMaxSize() +
      this.w.flatMaxSize() +
      this.i8.flatMaxSize() +
      this.i.flatMaxSize() +
      this.f.flatMaxSize() +
      this.d.flatMaxSize() +
      this.ii.flatMaxSize()
    );
  }
  flatEncode(st: Q.EncoderState) {
    this.w8.flatEncode(st);
    this.w16.flatEncode(st);
    this.w.flatEncode(st);
    this.i8.flatEncode(st);
    this.i.flatEncode(st);
    this.f.flatEncode(st);
    this.d.flatEncode(st);
    this.ii.flatEncode(st);
  }
}
