import * as Q from '../../core';
import * as K03226796ede4 from '../ZigZag/K03226796ede4';
import * as K50d018f7593a from '../Word64/K50d018f7593a';
export declare const $Int64: Q.zmFold<Int64>;
export declare const ___: Q.zmTypeInfo;
export declare class Int64 implements Q.Flat {
    _0: K03226796ede4.ZigZag<K50d018f7593a.Word64>;
    constructor(_0: K03226796ede4.ZigZag<K50d018f7593a.Word64>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Int64: (v0: K03226796ede4.ZigZag<K50d018f7593a.Word64>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
