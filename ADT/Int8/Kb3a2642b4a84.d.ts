import * as Q from '../../core';
import * as K03226796ede4 from '../ZigZag/K03226796ede4';
import * as Kb1f46a49c8f8 from '../Word8/Kb1f46a49c8f8';
export declare const $Int8: Q.zmFold<Int8>;
export declare class Int8 implements Q.Flat {
    _0: K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>;
    constructor(_0: K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>);
    match<R>(m: {
        Int8: (v0: K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
