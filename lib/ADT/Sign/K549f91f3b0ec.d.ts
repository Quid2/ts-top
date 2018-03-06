import * as Q from '../../core';
export declare const $Sign: Q.zmFold<Sign>;
export declare const ___: Q.zmTypeInfo;
export declare type Sign = Positive | Negative;
export declare class Positive implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Positive: R;
        Negative: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Negative implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Positive: R;
        Negative: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
