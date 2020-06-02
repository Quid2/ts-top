/** ZM Type:
ChannelSelectionResult a ≡   Success
                           | Failure {reason :: Kb8cd13187198 K066db52af145}
                           | RetryAt a
*/
import * as Q from "@quid2/ts-core";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K066db52af145 from "../Char/K066db52af145";
export declare const $ChannelSelectionResult: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<ChannelSelectionResult<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type ChannelSelectionResult<A extends Q.ZM> =
  | Success<A>
  | Failure<A>
  | RetryAt<A>;
export declare class Success<A extends Q.ZM> implements Q.ZM {
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    Success: R;
    Failure: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    RetryAt: (v0: A) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
export declare class Failure<A extends Q.ZM> implements Q.ZM {
  readonly reason: Kb8cd13187198.List<K066db52af145.Char>;
  constructor(reason: Kb8cd13187198.List<K066db52af145.Char>);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    Success: R;
    Failure: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    RetryAt: (v0: A) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
export declare class RetryAt<A extends Q.ZM> implements Q.ZM {
  readonly _0: A;
  constructor(_0: A);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    Success: R;
    Failure: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    RetryAt: (v0: A) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Kc6627a317dbc.d.ts.map
