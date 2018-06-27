/** ZM Type:
Solve a ≡   Solve a
*/
import * as Q from '../.././lib/core';
export declare const $Solve: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<Solve<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class Solve<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Solve: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
