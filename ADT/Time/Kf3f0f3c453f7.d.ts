/** ZM Type:
Time ≡   Time {utcDay :: K102a3bb904e3, utcSecs :: K2412799c99f1}
*/
import * as Q from '../.././lib/core';
import * as K102a3bb904e3 from '../Int/K102a3bb904e3';
import * as K2412799c99f1 from '../Word32/K2412799c99f1';
export declare const $Time: Q.zmFold<Time>;
export declare const ___: Q.zmTypeInfo;
export declare class Time implements Q.ZM {
    readonly utcDay: K102a3bb904e3.Int;
    readonly utcSecs: K2412799c99f1.Word32;
    constructor(utcDay: K102a3bb904e3.Int, utcSecs: K2412799c99f1.Word32);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Time: (v0: K102a3bb904e3.Int, v1: K2412799c99f1.Word32) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
