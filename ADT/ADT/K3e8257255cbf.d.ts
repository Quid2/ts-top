/** ZM Type:
ADT a b c ≡   ADT {declName :: a,
                   declNumParameters :: Kb1f46a49c8f8,
                   declCons :: Kda6836778fd4 (K86653e040025 b c)}
*/
import * as Q from "@quid2/ts-core";
import * as Kb1f46a49c8f8 from "../Word8/Kb1f46a49c8f8";
import * as Kda6836778fd4 from "../Maybe/Kda6836778fd4";
import * as K86653e040025 from "../ConTree/K86653e040025";
export declare const $ADT: <A extends Q.ZM, B extends Q.ZM, C extends Q.ZM>(
  t0: Q.zmFold<A>,
  t1: Q.zmFold<B>,
  t2: Q.zmFold<C>
) => Q.zmFold<ADT<A, B, C>>;
export declare const ___: Q.zmTypeInfo;
export declare class ADT<A extends Q.ZM, B extends Q.ZM, C extends Q.ZM>
  implements Q.ZM {
  readonly declName: A;
  readonly declNumParameters: Kb1f46a49c8f8.Word8;
  readonly declCons: Kda6836778fd4.Maybe<K86653e040025.ConTree<B, C>>;
  constructor(
    declName: A,
    declNumParameters: Kb1f46a49c8f8.Word8,
    declCons: Kda6836778fd4.Maybe<K86653e040025.ConTree<B, C>>
  );
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    ADT: (
      v0: A,
      v1: Kb1f46a49c8f8.Word8,
      v2: Kda6836778fd4.Maybe<K86653e040025.ConTree<B, C>>
    ) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K3e8257255cbf.d.ts.map
