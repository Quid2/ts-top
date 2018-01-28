import * as Q from '../../core';
import * as K102a3bb904e3 from '../Int/K102a3bb904e3';
import * as K2412799c99f1 from '../Word32/K2412799c99f1';
export declare const $Time: Q.zmFold<Time>;
export declare const ___: Q.zmTypeInfo;
export declare class Time implements Q.Flat {
    utcDay: K102a3bb904e3.Int;
    utcSecs: K2412799c99f1.Word32;
    constructor(utcDay: K102a3bb904e3.Int, utcSecs: K2412799c99f1.Word32);
    match<R>(m: {
        Time: (v0: K102a3bb904e3.Int, v1: K2412799c99f1.Word32) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
