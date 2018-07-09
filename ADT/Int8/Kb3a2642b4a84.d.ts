/** ZM Type:
Int8 ≡   Int8 (K03226796ede4 Kb1f46a49c8f8)
*/
import * as Q from '../.././lib/core';
import * as K03226796ede4 from '../ZigZag/K03226796ede4';
import * as Kb1f46a49c8f8 from '../Word8/Kb1f46a49c8f8';
export declare const $Int8: Q.zmFold<Int8>;
export declare const ___: Q.zmTypeInfo;
export declare class Int8 implements Q.ZM {
    _0: K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>;
    constructor(_0: K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Int8: (v0: K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
