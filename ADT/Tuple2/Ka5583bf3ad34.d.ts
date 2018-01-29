import * as Q from '../../core';
export declare const $Tuple2: <A extends Q.Flat, B extends Q.Flat>(t0: Q.zmFold<A>, t1: Q.zmFold<B>) => Q.zmFold<Tuple2<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare class Tuple2<A extends Q.Flat, B extends Q.Flat> implements Q.Flat {
    _0: A;
    _1: B;
    constructor(_0: A, _1: B);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Tuple2: (v0: A, v1: B) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
