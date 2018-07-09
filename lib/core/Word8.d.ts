import * as Q from "../core";
export declare const $Word8: Q.zmFold<Word8>;
export declare const ___: Q.zmTypeInfo;
export declare class Word8 implements Q.ZM {
    value: number;
    constructor(value: number);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
