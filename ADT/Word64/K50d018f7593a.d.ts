import * as Q from '../../core';
import * as Kf92e8339908a from '../Word/Kf92e8339908a';
export declare const $Word64: Q.zmFold<Word64>;
export declare const ___: Q.zmTypeInfo;
export declare class Word64 implements Q.Flat {
    _0: Kf92e8339908a.Word;
    constructor(_0: Kf92e8339908a.Word);
    match<R>(m: {
        Word64: (v0: Kf92e8339908a.Word) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
