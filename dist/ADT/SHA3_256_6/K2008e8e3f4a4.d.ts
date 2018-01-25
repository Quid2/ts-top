import * as Q from '../../core';
import * as Kb1f46a49c8f8 from '../Word8/Kb1f46a49c8f8';
export declare const $SHA3_256_6: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<SHA3_256_6<A>>;
export declare class SHA3_256_6<A extends Q.Flat> implements Q.Flat {
    _0: Kb1f46a49c8f8.Word8;
    _1: Kb1f46a49c8f8.Word8;
    _2: Kb1f46a49c8f8.Word8;
    _3: Kb1f46a49c8f8.Word8;
    _4: Kb1f46a49c8f8.Word8;
    _5: Kb1f46a49c8f8.Word8;
    constructor(_0: Kb1f46a49c8f8.Word8, _1: Kb1f46a49c8f8.Word8, _2: Kb1f46a49c8f8.Word8, _3: Kb1f46a49c8f8.Word8, _4: Kb1f46a49c8f8.Word8, _5: Kb1f46a49c8f8.Word8);
    match<R>(m: {
        SHA3_256_6: (v0: Kb1f46a49c8f8.Word8, v1: Kb1f46a49c8f8.Word8, v2: Kb1f46a49c8f8.Word8, v3: Kb1f46a49c8f8.Word8, v4: Kb1f46a49c8f8.Word8, v5: Kb1f46a49c8f8.Word8) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
