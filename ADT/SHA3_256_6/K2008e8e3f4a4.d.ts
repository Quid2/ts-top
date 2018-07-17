/** ZM Type:
SHA3_256_6 a ≡   SHA3_256_6 Kb1f46a49c8f8
                            Kb1f46a49c8f8
                            Kb1f46a49c8f8
                            Kb1f46a49c8f8
                            Kb1f46a49c8f8
                            Kb1f46a49c8f8
*/
import * as Q from '../.././lib/core';
import * as Kb1f46a49c8f8 from '../Word8/Kb1f46a49c8f8';
export declare const $SHA3_256_6: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<SHA3_256_6<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class SHA3_256_6<A extends Q.ZM> implements Q.ZM {
    readonly _0: Kb1f46a49c8f8.Word8;
    readonly _1: Kb1f46a49c8f8.Word8;
    readonly _2: Kb1f46a49c8f8.Word8;
    readonly _3: Kb1f46a49c8f8.Word8;
    readonly _4: Kb1f46a49c8f8.Word8;
    readonly _5: Kb1f46a49c8f8.Word8;
    constructor(_0: Kb1f46a49c8f8.Word8, _1: Kb1f46a49c8f8.Word8, _2: Kb1f46a49c8f8.Word8, _3: Kb1f46a49c8f8.Word8, _4: Kb1f46a49c8f8.Word8, _5: Kb1f46a49c8f8.Word8);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        SHA3_256_6: (v0: Kb1f46a49c8f8.Word8, v1: Kb1f46a49c8f8.Word8, v2: Kb1f46a49c8f8.Word8, v3: Kb1f46a49c8f8.Word8, v4: Kb1f46a49c8f8.Word8, v5: Kb1f46a49c8f8.Word8) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
