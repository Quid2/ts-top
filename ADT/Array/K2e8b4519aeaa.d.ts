/** ZM Type:
Array a ≡   A0
          | A1 a (↫ a)
          | A2 a a (↫ a)
          | A3 a a a (↫ a)
          | A4 a a a a (↫ a)
          | A5 a a a a a (↫ a)
          | A6 a a a a a a (↫ a)
          | A7 a a a a a a a (↫ a)
          | A8 a a a a a a a a (↫ a)
          | A9 a a a a a a a a a (↫ a)
          | A10 a a a a a a a a a a (↫ a)
          | A11 a a a a a a a a a a a (↫ a)
          | A12 a a a a a a a a a a a a (↫ a)
          | A13 a a a a a a a a a a a a a (↫ a)
          | A14 a a a a a a a a a a a a a a (↫ a)
          | A15 a a a a a a a a a a a a a a a (↫ a)
          | A16 a a a a a a a a a a a a a a a a (↫ a)
          | A17 a a a a a a a a a a a a a a a a a (↫ a)
          | A18 a a a a a a a a a a a a a a a a a a (↫ a)
          | A19 a a a a a a a a a a a a a a a a a a a (↫ a)
          | A20 a a a a a a a a a a a a a a a a a a a a (↫ a)
          | A21 a a a a a a a a a a a a a a a a a a a a a (↫ a)
          | A22 a a a a a a a a a a a a a a a a a a a a a a (↫ a)
    
*/
import * as Q from "@quid2/ts-core";
export declare const $Array: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<Array<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class Array<A extends Q.ZM> implements Q.ZM {
  readonly value: A[];
  constructor(value: A[]);
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
}
//# sourceMappingURL=K2e8b4519aeaa.d.ts.map
