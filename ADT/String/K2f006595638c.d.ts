/** ZM Type:
String ≡   String (Kb8cd13187198 K066db52af145)
*/
import * as Q from "@quid2/ts-core";
export declare const $String: Q.zmFold<String>;
export declare const ___: Q.zmTypeInfo;
export declare class String implements Q.ZM {
  readonly value: string;
  constructor(value: string);
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
}
//# sourceMappingURL=K2f006595638c.d.ts.map
