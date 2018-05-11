/** ZM Type:
SourceCode a ≡   SourceCode a (Kb8cd13187198 K066db52af145)
*/
import * as Q from '../.././lib/core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $SourceCode: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<SourceCode<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class SourceCode<A extends Q.Flat> implements Q.Flat {
    _0: A;
    _1: Kb8cd13187198.List<K066db52af145.Char>;
    constructor(_0: A, _1: Kb8cd13187198.List<K066db52af145.Char>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        SourceCode: (v0: A, v1: Kb8cd13187198.List<K066db52af145.Char>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
