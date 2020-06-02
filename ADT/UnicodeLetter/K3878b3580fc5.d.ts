/** ZM Type:
UnicodeLetter ≡   UnicodeLetter K066db52af145
*/
import * as Q from "@quid2/ts-core";
import * as K066db52af145 from "../Char/K066db52af145";
export declare const $UnicodeLetter: Q.zmFold<UnicodeLetter>;
export declare const ___: Q.zmTypeInfo;
export declare class UnicodeLetter implements Q.ZM {
  readonly _0: K066db52af145.Char;
  constructor(_0: K066db52af145.Char);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { UnicodeLetter: (v0: K066db52af145.Char) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K3878b3580fc5.d.ts.map
