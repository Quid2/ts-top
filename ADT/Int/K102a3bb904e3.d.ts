import * as Q from '../../core';
import * as K03226796ede4 from '../ZigZag/K03226796ede4';
import * as Kf92e8339908a from '../Word/Kf92e8339908a';
export declare const $Int: Q.zmFold<Int>;
export declare class Int implements Q.Flat {
    _0: K03226796ede4.ZigZag<Kf92e8339908a.Word>;
    constructor(_0: K03226796ede4.ZigZag<Kf92e8339908a.Word>);
    match<R>(m: {
        Int: (v0: K03226796ede4.ZigZag<Kf92e8339908a.Word>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
