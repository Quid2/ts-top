import * as Q from '../../core';
export declare const $MostSignificantFirst: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<MostSignificantFirst<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class MostSignificantFirst<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    match<R>(m: {
        MostSignificantFirst: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
