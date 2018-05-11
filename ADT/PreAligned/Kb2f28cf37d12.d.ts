/** ZM Type:
PreAligned a ≡   PreAligned {preFiller :: Kae1dfeece189,
                             preValue :: a}
*/
import * as Q from '../.././lib/core';
import * as Kae1dfeece189 from '../Filler/Kae1dfeece189';
export declare const $PreAligned: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<PreAligned<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class PreAligned<A extends Q.Flat> implements Q.Flat {
    preFiller: Kae1dfeece189.Filler;
    preValue: A;
    constructor(preFiller: Kae1dfeece189.Filler, preValue: A);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        PreAligned: (v0: Kae1dfeece189.Filler, v1: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
