/** ZM Type:
Bytes ≡   Bytes (Kb2f28cf37d12 (K2e8b4519aeaa Kb1f46a49c8f8))
*/
import * as Q from '../.././lib/core';
export declare const $Bytes: Q.zmFold<Bytes>;
export declare const ___: Q.zmTypeInfo;
export declare class Bytes implements Q.ZM {
    value: Uint8Array;
    constructor(value: Uint8Array);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
