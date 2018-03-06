import * as Q from '../../core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
export declare const $Issues: <A extends Q.Flat, B extends Q.Flat>(t0: Q.zmFold<A>, t1: Q.zmFold<B>) => Q.zmFold<Issues<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare class Issues<A extends Q.Flat, B extends Q.Flat> implements Q.Flat {
    errors: Kb8cd13187198.List<A>;
    warnings: Kb8cd13187198.List<B>;
    constructor(errors: Kb8cd13187198.List<A>, warnings: Kb8cd13187198.List<B>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Issues: (v0: Kb8cd13187198.List<A>, v1: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
