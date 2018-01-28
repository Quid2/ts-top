import * as Q from '../../core';
import * as Kf92e8339908a from '../Word/Kf92e8339908a';
export declare const $Word16: Q.zmFold<Word16>;
export declare const ___: Q.zmTypeInfo;
export declare class Word16 implements Q.Flat {
    _0: Kf92e8339908a.Word;
    constructor(_0: Kf92e8339908a.Word);
    match<R>(m: {
        Word16: (v0: Kf92e8339908a.Word) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
