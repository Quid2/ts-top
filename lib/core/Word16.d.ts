import * as Q from "../core";
export declare const $Word16: Q.zmFold<Word16>;
export declare const ___: Q.zmTypeInfo;
export declare class Word16 implements Q.Flat {
    value: number;
    constructor(value: number);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
}
