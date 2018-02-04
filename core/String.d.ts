import * as Q from '../core';
export declare const $String: Q.zmFold<String>;
export declare const ___: Q.zmTypeInfo;
export declare class String implements Q.Flat {
    _0: string;
    constructor(_0: string);
    toString(): string;
    toStr(nested?: boolean): string;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
