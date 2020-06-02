/** ZM Type:
List a ≡   Nil
         | Cons a (↫ a)
*/
import * as Q from "@quid2/ts-core";
export declare const $List: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<List<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type List<A extends Q.ZM> = Nil<A> | Cons<A>;
export declare class Nil<A extends Q.ZM> implements Q.ZM {
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { Nil: R; Cons: (v0: A, v1: List<A>) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
export declare class Cons<A extends Q.ZM> implements Q.ZM {
  readonly _0: A;
  readonly _1: List<A>;
  constructor(_0: A, _1: List<A>);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { Nil: R; Cons: (v0: A, v1: List<A>) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Kb8cd13187198.d.ts.map
