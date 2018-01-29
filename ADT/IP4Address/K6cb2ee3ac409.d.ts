import * as Q from '../../core';
import * as Kb1f46a49c8f8 from '../Word8/Kb1f46a49c8f8';
export declare const $IP4Address: Q.zmFold<IP4Address>;
export declare const ___: Q.zmTypeInfo;
export declare class IP4Address implements Q.Flat {
    _0: Kb1f46a49c8f8.Word8;
    _1: Kb1f46a49c8f8.Word8;
    _2: Kb1f46a49c8f8.Word8;
    _3: Kb1f46a49c8f8.Word8;
    constructor(_0: Kb1f46a49c8f8.Word8, _1: Kb1f46a49c8f8.Word8, _2: Kb1f46a49c8f8.Word8, _3: Kb1f46a49c8f8.Word8);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        IP4Address: (v0: Kb1f46a49c8f8.Word8, v1: Kb1f46a49c8f8.Word8, v2: Kb1f46a49c8f8.Word8, v3: Kb1f46a49c8f8.Word8) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
