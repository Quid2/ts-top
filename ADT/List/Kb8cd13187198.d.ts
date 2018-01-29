import * as Q from '../../core';
export declare const $List: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<List<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type List<A extends Q.Flat> = Nil<A> | Cons<A>;
export declare class Nil<A extends Q.Flat> implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Nil: R;
        Cons: (v0: A, v1: List<A>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Cons<A extends Q.Flat> implements Q.Flat {
    _0: A;
    _1: List<A>;
    constructor(_0: A, _1: List<A>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Nil: R;
        Cons: (v0: A, v1: List<A>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
