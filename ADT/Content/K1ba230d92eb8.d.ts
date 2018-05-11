/** ZM Type:
Content ≡   TextMsg (Kb8cd13187198 K066db52af145)
          | Join
*/
import * as Q from '../.././lib/core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $Content: Q.zmFold<Content>;
export declare const ___: Q.zmTypeInfo;
export declare type Content = TextMsg | Join;
export declare class TextMsg implements Q.Flat {
    _0: Kb8cd13187198.List<K066db52af145.Char>;
    constructor(_0: Kb8cd13187198.List<K066db52af145.Char>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        TextMsg: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        Join: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Join implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        TextMsg: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        Join: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
