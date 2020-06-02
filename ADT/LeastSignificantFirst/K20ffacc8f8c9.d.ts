/** ZM Type:
LeastSignificantFirst a ≡   LeastSignificantFirst a
*/
import * as Q from "@quid2/ts-core";
export declare const $LeastSignificantFirst: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<LeastSignificantFirst<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class LeastSignificantFirst<A extends Q.ZM> implements Q.ZM {
  readonly _0: A;
  constructor(_0: A);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { LeastSignificantFirst: (v0: A) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K20ffacc8f8c9.d.ts.map
