/** ZM Type:
Tuple2 a b ≡   Tuple2 a b
*/
import * as Q from "@quid2/ts-core";
export declare const $Tuple2: <A extends Q.ZM, B extends Q.ZM>(
  t0: Q.zmFold<A>,
  t1: Q.zmFold<B>
) => Q.zmFold<Tuple2<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare class Tuple2<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
  readonly _0: A;
  readonly _1: B;
  constructor(_0: A, _1: B);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { Tuple2: (v0: A, v1: B) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Ka5583bf3ad34.d.ts.map
