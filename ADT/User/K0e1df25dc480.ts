/** ZM Type:
User ≡   User {userName :: Kb8cd13187198 K066db52af145}
*/

import * as Q from "@quid2/ts-core";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K066db52af145 from "../Char/K066db52af145";

export const $User: Q.zmFold<User> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x0e, 0x1d, 0xf2, 0x5d, 0xc4, 0x80],
  decoder: function (decoders) {
    return function (st) {
      return new User(
        Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)
      );
    };
  },
};

export class User implements Q.ZM {
  constructor(
    public readonly userName: Kb8cd13187198.List<K066db52af145.Char>
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["User", this.userName.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["User", this.userName.pretty(true)].join(" "));
  }

  match<R>(m: { User: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R }): R {
    return m.User(this.userName);
  }
  flatMaxSize(): number {
    return this.userName.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this.userName.flatEncode(st);
  }
}
