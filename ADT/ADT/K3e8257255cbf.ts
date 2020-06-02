/** ZM Type:
ADT a b c ≡   ADT {declName :: a,
                   declNumParameters :: Kb1f46a49c8f8,
                   declCons :: Kda6836778fd4 (K86653e040025 b c)}
*/

import * as Q from "@quid2/ts-core";
import * as Kb1f46a49c8f8 from "../Word8/Kb1f46a49c8f8";
import * as Kda6836778fd4 from "../Maybe/Kda6836778fd4";
import * as K86653e040025 from "../ConTree/K86653e040025";

export const $ADT: <A extends Q.ZM, B extends Q.ZM, C extends Q.ZM>(
  t0: Q.zmFold<A>,
  t1: Q.zmFold<B>,
  t2: Q.zmFold<C>
) => Q.zmFold<ADT<A, B, C>> = function (t1, t2, t3) {
  return function (f) {
    return f(___, [t1(f), t2(f), t3(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0x3e, 0x82, 0x57, 0x25, 0x5c, 0xbf],
  decoder: function (decoders) {
    return function (st) {
      return new ADT(
        decoders[0](st),
        Kb1f46a49c8f8.___.decoder([])(st),
        Kda6836778fd4.___.decoder([
          K86653e040025.___.decoder([decoders[1], decoders[2]]),
        ])(st)
      );
    };
  },
};

export class ADT<A extends Q.ZM, B extends Q.ZM, C extends Q.ZM>
  implements Q.ZM {
  constructor(
    public readonly declName: A,
    public readonly declNumParameters: Kb1f46a49c8f8.Word8,
    public readonly declCons: Kda6836778fd4.Maybe<K86653e040025.ConTree<B, C>>
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "ADT",
        this.declName.toStr(true),
        this.declNumParameters.toStr(true),
        this.declCons.toStr(true),
      ].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "ADT",
        this.declName.pretty(true),
        this.declNumParameters.pretty(true),
        this.declCons.pretty(true),
      ].join(" ")
    );
  }

  match<R>(m: {
    ADT: (
      v0: A,
      v1: Kb1f46a49c8f8.Word8,
      v2: Kda6836778fd4.Maybe<K86653e040025.ConTree<B, C>>
    ) => R;
  }): R {
    return m.ADT(this.declName, this.declNumParameters, this.declCons);
  }
  flatMaxSize(): number {
    return (
      this.declName.flatMaxSize() +
      this.declNumParameters.flatMaxSize() +
      this.declCons.flatMaxSize()
    );
  }
  flatEncode(st: Q.EncoderState) {
    this.declName.flatEncode(st);
    this.declNumParameters.flatEncode(st);
    this.declCons.flatEncode(st);
  }
}
