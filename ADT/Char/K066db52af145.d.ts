/** ZM Type:
Char ≡   Char K2412799c99f1
*/
import * as Q from '../.././lib/core';
export declare const $Char: Q.zmFold<Char>;
export declare const ___: Q.zmTypeInfo;
export declare class Char implements Q.ZM {
    value: string;
    constructor(value: string);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
