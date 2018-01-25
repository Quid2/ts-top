import * as Q from '../../core';
export declare const $Either: <A extends Q.Flat, B extends Q.Flat>(t0: Q.zmFold<A>, t1: Q.zmFold<B>) => Q.zmFold<Either<A, B>>;
export declare type Either<A extends Q.Flat, B extends Q.Flat> = Left<A, B> | Right<A, B>;
export declare class Left<A extends Q.Flat, B extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    match<R>(m: {
        Left: (v0: A) => R;
        Right: (v0: B) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Right<A extends Q.Flat, B extends Q.Flat> implements Q.Flat {
    _0: B;
    constructor(_0: B);
    match<R>(m: {
        Left: (v0: A) => R;
        Right: (v0: B) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}