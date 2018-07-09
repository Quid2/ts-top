/** ZM Type:
Word16 ≡   Word16 Kf92e8339908a
*/
import * as Q from '../.././lib/core';
export declare const $Word16: Q.zmFold<Word16>;
export declare const ___: Q.zmTypeInfo;
export declare class Word16 implements Q.ZM {
    value: number;
    constructor(value: number);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
