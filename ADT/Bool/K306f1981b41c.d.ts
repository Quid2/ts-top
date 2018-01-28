import * as Q from '../../core';
export declare const $Bool: Q.zmFold<Bool>;
export declare const ___: Q.zmTypeInfo;
export declare type Bool = False | True;
export declare class False implements Q.Flat {
    match<R>(m: {
        False: R;
        True: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class True implements Q.Flat {
    match<R>(m: {
        False: R;
        True: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
