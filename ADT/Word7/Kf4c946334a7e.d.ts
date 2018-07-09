/** ZM Type:
Word7 ≡   V0
        | V1
        | V2
        | V3
        | V4
        | V5
        | V6
        |
*/
import * as Q from '../.././lib/core';
export declare const $Word7: Q.zmFold<Word7>;
export declare const ___: Q.zmTypeInfo;
export declare class Word7 implements Q.ZM {
    value: number;
    constructor(value: number);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
