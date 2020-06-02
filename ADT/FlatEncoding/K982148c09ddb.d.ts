/** ZM Type:
FlatEncoding ≡   FlatEncoding
*/
import * as Q from "@quid2/ts-core";
export declare const $FlatEncoding: Q.zmFold<FlatEncoding>;
export declare const ___: Q.zmTypeInfo;
export declare class FlatEncoding implements Q.ZM {
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { FlatEncoding: R }): R;
  flatMaxSize(): number;
  flatEncode(): void;
}
//# sourceMappingURL=K982148c09ddb.d.ts.map
