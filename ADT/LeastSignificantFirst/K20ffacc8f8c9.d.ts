/** ZM Type:
LeastSignificantFirst a ≡   LeastSignificantFirst a
*/
import * as Q from '../.././lib/core';
export declare const $LeastSignificantFirst: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<LeastSignificantFirst<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class LeastSignificantFirst<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        LeastSignificantFirst: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
