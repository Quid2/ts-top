/** ZM Type:
Function a b c ≡   Call a
                 | Reply b c
*/
import * as Q from '../.././lib/core';
export declare const $Function: <A extends Q.ZM, B extends Q.ZM, C extends Q.ZM>(t0: Q.zmFold<A>, t1: Q.zmFold<B>, t2: Q.zmFold<C>) => Q.zmFold<Function<A, B, C>>;
export declare const ___: Q.zmTypeInfo;
export declare type Function<A extends Q.ZM, B extends Q.ZM, C extends Q.ZM> = Call<A, B, C> | Reply<A, B, C>;
export declare class Call<A extends Q.ZM, B extends Q.ZM, C extends Q.ZM> implements Q.ZM {
    _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Call: (v0: A) => R;
        Reply: (v0: B, v1: C) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Reply<A extends Q.ZM, B extends Q.ZM, C extends Q.ZM> implements Q.ZM {
    _0: B;
    _1: C;
    constructor(_0: B, _1: C);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Call: (v0: A) => R;
        Reply: (v0: B, v1: C) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
