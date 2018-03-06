import * as Q from '../../core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $User: Q.zmFold<User>;
export declare const ___: Q.zmTypeInfo;
export declare class User implements Q.Flat {
    userName: Kb8cd13187198.List<K066db52af145.Char>;
    constructor(userName: Kb8cd13187198.List<K066db52af145.Char>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        User: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
