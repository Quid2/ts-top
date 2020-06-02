/** ZM Type:
Validate a ≡   Validate a
*/
import * as Q from "@quid2/ts-core";
export declare const $Validate: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<Validate<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class Validate<A extends Q.ZM> implements Q.ZM {
  readonly _0: A;
  constructor(_0: A);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { Validate: (v0: A) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Kffe0940f8ff2.d.ts.map
