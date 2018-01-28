import * as Q from '../../core';
export declare const $Bit: Q.zmFold<Bit>;
export declare const ___: Q.zmTypeInfo;
export declare type Bit = V0 | V1;
export declare class V0 implements Q.Flat {
    match<R>(m: {
        V0: R;
        V1: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class V1 implements Q.Flat {
    match<R>(m: {
        V0: R;
        V1: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
