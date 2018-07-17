/** ZM Type:
MostSignificantFirst a ≡   MostSignificantFirst a
*/
import * as Q from '../.././lib/core';
export declare const $MostSignificantFirst: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<MostSignificantFirst<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class MostSignificantFirst<A extends Q.ZM> implements Q.ZM {
    readonly _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        MostSignificantFirst: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
