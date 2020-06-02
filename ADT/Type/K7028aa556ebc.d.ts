/** ZM Type:
Type a ≡   TypeCon a
         | TypeApp (↫ a) (↫ a)
*/
import * as Q from "@quid2/ts-core";
export declare const $Type: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<Type<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type Type<A extends Q.ZM> = TypeCon<A> | TypeApp<A>;
export declare class TypeCon<A extends Q.ZM> implements Q.ZM {
  readonly _0: A;
  constructor(_0: A);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    TypeCon: (v0: A) => R;
    TypeApp: (v0: Type<A>, v1: Type<A>) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
export declare class TypeApp<A extends Q.ZM> implements Q.ZM {
  readonly _0: Type<A>;
  readonly _1: Type<A>;
  constructor(_0: Type<A>, _1: Type<A>);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    TypeCon: (v0: A) => R;
    TypeApp: (v0: Type<A>, v1: Type<A>) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K7028aa556ebc.d.ts.map
