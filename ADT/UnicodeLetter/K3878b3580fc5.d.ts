import * as Q from '../../core';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $UnicodeLetter: Q.zmFold<UnicodeLetter>;
export declare const ___: Q.zmTypeInfo;
export declare class UnicodeLetter implements Q.Flat {
    _0: K066db52af145.Char;
    constructor(_0: K066db52af145.Char);
    match<R>(m: {
        UnicodeLetter: (v0: K066db52af145.Char) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
