import * as Q from '../../core';
import * as K9f214799149b from '../SHAKE128_48/K9f214799149b';
export declare const $StoreProtocol: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<StoreProtocol<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type StoreProtocol<A extends Q.Flat> = Save<A> | Solve<A> | Solved<A>;
export declare class Save<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    match<R>(m: {
        Save: (v0: A) => R;
        Solve: (v0: K9f214799149b.SHAKE128_48<A>) => R;
        Solved: (v0: K9f214799149b.SHAKE128_48<A>, v1: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Solve<A extends Q.Flat> implements Q.Flat {
    _0: K9f214799149b.SHAKE128_48<A>;
    constructor(_0: K9f214799149b.SHAKE128_48<A>);
    match<R>(m: {
        Save: (v0: A) => R;
        Solve: (v0: K9f214799149b.SHAKE128_48<A>) => R;
        Solved: (v0: K9f214799149b.SHAKE128_48<A>, v1: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Solved<A extends Q.Flat> implements Q.Flat {
    _0: K9f214799149b.SHAKE128_48<A>;
    _1: A;
    constructor(_0: K9f214799149b.SHAKE128_48<A>, _1: A);
    match<R>(m: {
        Save: (v0: A) => R;
        Solve: (v0: K9f214799149b.SHAKE128_48<A>) => R;
        Solved: (v0: K9f214799149b.SHAKE128_48<A>, v1: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
