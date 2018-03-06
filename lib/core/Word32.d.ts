import * as Q from "../core";
export declare const $Word32: Q.zmFold<Word32>;
export declare const ___: Q.zmTypeInfo;
export declare class Word32 implements Q.Flat {
    value: number;
    constructor(value: number);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
}
