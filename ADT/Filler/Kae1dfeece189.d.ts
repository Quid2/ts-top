/** ZM Type:
Filler ≡   FillerBit ↫
         | FillerEnd
*/
import * as Q from "@quid2/ts-core";
export declare const $Filler: Q.zmFold<Filler>;
export declare const ___: Q.zmTypeInfo;
export declare class Filler implements Q.ZM {
  readonly value: string;
  constructor(value: string);
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
}
//# sourceMappingURL=Kae1dfeece189.d.ts.map
