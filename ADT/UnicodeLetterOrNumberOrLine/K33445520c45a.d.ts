import * as Q from '../../core';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $UnicodeLetterOrNumberOrLine: Q.zmFold<UnicodeLetterOrNumberOrLine>;
export declare class UnicodeLetterOrNumberOrLine implements Q.Flat {
    _0: K066db52af145.Char;
    constructor(_0: K066db52af145.Char);
    match<R>(m: {
        UnicodeLetterOrNumberOrLine: (v0: K066db52af145.Char) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}