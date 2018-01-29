import * as Q from '../../core';
export declare const $NonEmptyList: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<NonEmptyList<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type NonEmptyList<A extends Q.Flat> = Elem<A> | Cons<A>;
export declare class Elem<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Elem: (v0: A) => R;
        Cons: (v0: A, v1: NonEmptyList<A>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Cons<A extends Q.Flat> implements Q.Flat {
    _0: A;
    _1: NonEmptyList<A>;
    constructor(_0: A, _1: NonEmptyList<A>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Elem: (v0: A) => R;
        Cons: (v0: A, v1: NonEmptyList<A>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
