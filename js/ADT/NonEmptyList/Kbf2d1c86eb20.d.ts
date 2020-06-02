/** ZM Type:
NonEmptyList a ≡   Elem a
                 | Cons a (↫ a)
*/
import * as Q from "@quid2/ts-core";
export declare const $NonEmptyList: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<NonEmptyList<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type NonEmptyList<A extends Q.ZM> = Elem<A> | Cons<A>;
export declare class Elem<A extends Q.ZM> implements Q.ZM {
    readonly _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Elem: (v0: A) => R;
        Cons: (v0: A, v1: NonEmptyList<A>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Cons<A extends Q.ZM> implements Q.ZM {
    readonly _0: A;
    readonly _1: NonEmptyList<A>;
    constructor(_0: A, _1: NonEmptyList<A>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Elem: (v0: A) => R;
        Cons: (v0: A, v1: NonEmptyList<A>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Kbf2d1c86eb20.d.ts.map