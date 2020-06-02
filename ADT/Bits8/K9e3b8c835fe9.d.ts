/** ZM Type:
Bits8 ≡   Bits8 {bit0 :: K65149ce3b366,
                 bit1 :: K65149ce3b366,
                 bit2 :: K65149ce3b366,
                 bit3 :: K65149ce3b366,
                 bit4 :: K65149ce3b366,
                 bit5 :: K65149ce3b366,
                 bit6 :: K65149ce3b366,
                 bit7 :: K65149ce3b366}
*/
import * as Q from "@quid2/ts-core";
import * as K65149ce3b366 from "../Bit/K65149ce3b366";
export declare const $Bits8: Q.zmFold<Bits8>;
export declare const ___: Q.zmTypeInfo;
export declare class Bits8 implements Q.ZM {
  readonly bit0: K65149ce3b366.Bit;
  readonly bit1: K65149ce3b366.Bit;
  readonly bit2: K65149ce3b366.Bit;
  readonly bit3: K65149ce3b366.Bit;
  readonly bit4: K65149ce3b366.Bit;
  readonly bit5: K65149ce3b366.Bit;
  readonly bit6: K65149ce3b366.Bit;
  readonly bit7: K65149ce3b366.Bit;
  constructor(
    bit0: K65149ce3b366.Bit,
    bit1: K65149ce3b366.Bit,
    bit2: K65149ce3b366.Bit,
    bit3: K65149ce3b366.Bit,
    bit4: K65149ce3b366.Bit,
    bit5: K65149ce3b366.Bit,
    bit6: K65149ce3b366.Bit,
    bit7: K65149ce3b366.Bit
  );
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    Bits8: (
      v0: K65149ce3b366.Bit,
      v1: K65149ce3b366.Bit,
      v2: K65149ce3b366.Bit,
      v3: K65149ce3b366.Bit,
      v4: K65149ce3b366.Bit,
      v5: K65149ce3b366.Bit,
      v6: K65149ce3b366.Bit,
      v7: K65149ce3b366.Bit
    ) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
