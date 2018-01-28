import * as Q from '../../core';
export declare const $ZigZag: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<ZigZag<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class ZigZag<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    match<R>(m: {
        ZigZag: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
