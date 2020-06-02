/** ZM Type:
ByType a ≡   ByType
*/
import * as Q from "@quid2/ts-core";
export declare const $ByType: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<ByType<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class ByType<A extends Q.ZM> implements Q.ZM {
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { ByType: R }): R;
  flatMaxSize(): number;
  flatEncode(): void;
}
//# sourceMappingURL=K87f090a54ea3.d.ts.map
