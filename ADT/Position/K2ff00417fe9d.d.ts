/** ZM Type:
Position ≡   Position {row :: K2412799c99f1,
                       column :: K2412799c99f1}
*/
import * as Q from '../.././lib/core';
import * as K2412799c99f1 from '../Word32/K2412799c99f1';
export declare const $Position: Q.zmFold<Position>;
export declare const ___: Q.zmTypeInfo;
export declare class Position implements Q.ZM {
    readonly row: K2412799c99f1.Word32;
    readonly column: K2412799c99f1.Word32;
    constructor(row: K2412799c99f1.Word32, column: K2412799c99f1.Word32);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Position: (v0: K2412799c99f1.Word32, v1: K2412799c99f1.Word32) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
