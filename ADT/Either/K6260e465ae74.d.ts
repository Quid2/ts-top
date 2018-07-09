/** ZM Type:
Either a b ≡   Left a
             | Right b
*/
import * as Q from '../.././lib/core';
export declare const $Either: <A extends Q.ZM, B extends Q.ZM>(t0: Q.zmFold<A>, t1: Q.zmFold<B>) => Q.zmFold<Either<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare type Either<A extends Q.ZM, B extends Q.ZM> = Left<A, B> | Right<A, B>;
export declare class Left<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Left: (v0: A) => R;
        Right: (v0: B) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Right<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    _0: B;
    constructor(_0: B);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Left: (v0: A) => R;
        Right: (v0: B) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
