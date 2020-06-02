/** ZM Type:
Maybe a ≡   Nothing
          | Just a
*/
import * as Q from "@quid2/ts-core";
export declare const $Maybe: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<Maybe<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type Maybe<A extends Q.ZM> = Nothing<A> | Just<A>;
export declare class Nothing<A extends Q.ZM> implements Q.ZM {
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { Nothing: R; Just: (v0: A) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
export declare class Just<A extends Q.ZM> implements Q.ZM {
  readonly _0: A;
  constructor(_0: A);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { Nothing: R; Just: (v0: A) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Kda6836778fd4.d.ts.map
