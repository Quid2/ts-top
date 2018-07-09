/** ZM Type:
Array a ≡   A0
          | A1 a (↫ a)
          | A2 a a (↫ a)
          | A3 a a a (↫ a)
          
*/
import * as Q from '../.././lib/core';
export declare const $Array: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<Array<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class Array<A extends Q.ZM> implements Q.ZM {
    value: A[];
    constructor(value: A[]);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
