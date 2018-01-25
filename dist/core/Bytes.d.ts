import * as Q from "../core";
export declare const $Bytes: Q.zmFold<Bytes>;
export declare class Bytes implements Q.Flat {
    bytes: Uint8Array;
    constructor(bytes: Uint8Array);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
