import * as Q from '../../core';
import * as Kf92e8339908a from '../Word/Kf92e8339908a';
export declare const $Word32: Q.zmFold<Word32>;
export declare const ___: Q.zmTypeInfo;
export declare class Word32 implements Q.Flat {
    _0: Kf92e8339908a.Word;
    constructor(_0: Kf92e8339908a.Word);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Word32: (v0: Kf92e8339908a.Word) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
