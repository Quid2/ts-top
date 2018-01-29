import * as Q from "../core";
export declare const $Bytes: Q.zmFold<Bytes>;
export declare const ___: Q.zmTypeInfo;
export declare class Bytes implements Q.Flat {
    bytes: Uint8Array;
    constructor(bytes: Uint8Array);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
}
