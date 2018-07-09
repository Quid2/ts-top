/** ZM Type:
Int ≡   Int (K03226796ede4 Kf92e8339908a)
*/
import * as Q from '../.././lib/core';
import * as K03226796ede4 from '../ZigZag/K03226796ede4';
import * as Kf92e8339908a from '../Word/Kf92e8339908a';
export declare const $Int: Q.zmFold<Int>;
export declare const ___: Q.zmTypeInfo;
export declare class Int implements Q.ZM {
    _0: K03226796ede4.ZigZag<Kf92e8339908a.Word>;
    constructor(_0: K03226796ede4.ZigZag<Kf92e8339908a.Word>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Int: (v0: K03226796ede4.ZigZag<Kf92e8339908a.Word>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
