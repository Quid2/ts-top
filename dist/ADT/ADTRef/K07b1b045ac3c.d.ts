import * as Q from '../../core';
import * as Kb1f46a49c8f8 from '../Word8/Kb1f46a49c8f8';
export declare const $ADTRef: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<ADTRef<A>>;
export declare type ADTRef<A extends Q.Flat> = Var<A> | Rec<A> | Ext<A>;
export declare class Var<A extends Q.Flat> implements Q.Flat {
    _0: Kb1f46a49c8f8.Word8;
    constructor(_0: Kb1f46a49c8f8.Word8);
    match<R>(m: {
        Var: (v0: Kb1f46a49c8f8.Word8) => R;
        Rec: R;
        Ext: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Rec<A extends Q.Flat> implements Q.Flat {
    match<R>(m: {
        Var: (v0: Kb1f46a49c8f8.Word8) => R;
        Rec: R;
        Ext: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Ext<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    match<R>(m: {
        Var: (v0: Kb1f46a49c8f8.Word8) => R;
        Rec: R;
        Ext: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
