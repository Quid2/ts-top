import * as Q from '../../core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $Subject: Q.zmFold<Subject>;
export declare class Subject implements Q.Flat {
    _0: Kb8cd13187198.List<Kb8cd13187198.List<K066db52af145.Char>>;
    constructor(_0: Kb8cd13187198.List<Kb8cd13187198.List<K066db52af145.Char>>);
    match<R>(m: {
        Subject: (v0: Kb8cd13187198.List<Kb8cd13187198.List<K066db52af145.Char>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
