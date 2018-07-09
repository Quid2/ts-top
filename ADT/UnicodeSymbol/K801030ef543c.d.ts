/** ZM Type:
UnicodeSymbol ≡   UnicodeSymbol K066db52af145
*/
import * as Q from '../.././lib/core';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $UnicodeSymbol: Q.zmFold<UnicodeSymbol>;
export declare const ___: Q.zmTypeInfo;
export declare class UnicodeSymbol implements Q.ZM {
    _0: K066db52af145.Char;
    constructor(_0: K066db52af145.Char);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        UnicodeSymbol: (v0: K066db52af145.Char) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
