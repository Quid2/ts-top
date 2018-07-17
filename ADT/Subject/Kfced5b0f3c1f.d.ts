/** ZM Type:
Subject ≡   Subject (Kb8cd13187198 (Kb8cd13187198 K066db52af145))
*/
import * as Q from '../.././lib/core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $Subject: Q.zmFold<Subject>;
export declare const ___: Q.zmTypeInfo;
export declare class Subject implements Q.ZM {
    readonly _0: Kb8cd13187198.List<Kb8cd13187198.List<K066db52af145.Char>>;
    constructor(_0: Kb8cd13187198.List<Kb8cd13187198.List<K066db52af145.Char>>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Subject: (v0: Kb8cd13187198.List<Kb8cd13187198.List<K066db52af145.Char>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
