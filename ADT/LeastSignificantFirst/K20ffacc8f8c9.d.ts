import * as Q from '../../core';
export declare const $LeastSignificantFirst: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<LeastSignificantFirst<A>>;
export declare class LeastSignificantFirst<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    match<R>(m: {
        LeastSignificantFirst: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}