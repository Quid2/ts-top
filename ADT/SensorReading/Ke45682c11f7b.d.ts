/** ZM Type:
SensorReading a b ≡   SensorReading {reading :: a, location :: b}
*/
import * as Q from "@quid2/ts-core";
export declare const $SensorReading: <A extends Q.ZM, B extends Q.ZM>(
  t0: Q.zmFold<A>,
  t1: Q.zmFold<B>
) => Q.zmFold<SensorReading<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare class SensorReading<A extends Q.ZM, B extends Q.ZM>
  implements Q.ZM {
  readonly reading: A;
  readonly location: B;
  constructor(reading: A, location: B);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { SensorReading: (v0: A, v1: B) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
