/** ZM Type:
Word32 ≡   Word32 Kf92e8339908a
*/
import * as Q from '../.././lib/core';
export declare const $Word32: Q.zmFold<Word32>;
export declare const ___: Q.zmTypeInfo;
export declare class Word32 implements Q.ZM {
    readonly value: number;
    constructor(value: number);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
