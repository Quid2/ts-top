import * as Q from '../../core';
import * as K3878b3580fc5 from '../UnicodeLetter/K3878b3580fc5';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K33445520c45a from '../UnicodeLetterOrNumberOrLine/K33445520c45a';
import * as Kbf2d1c86eb20 from '../NonEmptyList/Kbf2d1c86eb20';
import * as K801030ef543c from '../UnicodeSymbol/K801030ef543c';
export declare const $Identifier: Q.zmFold<Identifier>;
export declare const ___: Q.zmTypeInfo;
export declare type Identifier = Name | Symbol;
export declare class Name implements Q.Flat {
    _0: K3878b3580fc5.UnicodeLetter;
    _1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>;
    constructor(_0: K3878b3580fc5.UnicodeLetter, _1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>);
    match<R>(m: {
        Name: (v0: K3878b3580fc5.UnicodeLetter, v1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>) => R;
        Symbol: (v0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Symbol implements Q.Flat {
    _0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>;
    constructor(_0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>);
    match<R>(m: {
        Name: (v0: K3878b3580fc5.UnicodeLetter, v1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>) => R;
        Symbol: (v0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
