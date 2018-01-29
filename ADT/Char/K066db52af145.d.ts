import * as Q from '../../core';
import * as K2412799c99f1 from '../Word32/K2412799c99f1';
export declare const $Char: Q.zmFold<Char>;
export declare const ___: Q.zmTypeInfo;
export declare class Char implements Q.Flat {
    _0: K2412799c99f1.Word32;
    constructor(_0: K2412799c99f1.Word32);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Char: (v0: K2412799c99f1.Word32) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
