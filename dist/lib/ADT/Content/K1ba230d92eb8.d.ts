import * as Q from '../../core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $Content: Q.zmFold<Content>;
export declare type Content = TextMsg | Join;
export declare class TextMsg implements Q.Flat {
    _0: Kb8cd13187198.List<K066db52af145.Char>;
    constructor(_0: Kb8cd13187198.List<K066db52af145.Char>);
    match<R>(m: {
        TextMsg: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        Join: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Join implements Q.Flat {
    match<R>(m: {
        TextMsg: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        Join: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
