/** ZM Type:
Celsius ≡   Celsius Kb53bec846608
*/
import * as Q from '../.././lib/core';
import * as Kb53bec846608 from '../IEEE_754_binary32/Kb53bec846608';
export declare const $Celsius: Q.zmFold<Celsius>;
export declare const ___: Q.zmTypeInfo;
export declare class Celsius implements Q.ZM {
    readonly _0: Kb53bec846608.IEEE_754_binary32;
    constructor(_0: Kb53bec846608.IEEE_754_binary32);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Celsius: (v0: Kb53bec846608.IEEE_754_binary32) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
