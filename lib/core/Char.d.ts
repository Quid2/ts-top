import * as Q from "../core";
export declare const $Char: Q.zmFold<Char>;
export declare const ___: Q.zmTypeInfo;
export declare class Char implements Q.ZM {
    _0: string;
    constructor(_0: string);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
