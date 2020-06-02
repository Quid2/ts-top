/** ZM Type:
ByAny a ≡   ByAny
*/
import * as Q from "@quid2/ts-core";
export declare const $ByAny: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<ByAny<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class ByAny<A extends Q.ZM> implements Q.ZM {
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { ByAny: R }): R;
  flatMaxSize(): number;
  flatEncode(): void;
}
