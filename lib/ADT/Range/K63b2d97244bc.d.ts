import * as Q from '../../core';
import * as K2ff00417fe9d from '../Position/K2ff00417fe9d';
export declare const $Range: Q.zmFold<Range>;
export declare const ___: Q.zmTypeInfo;
export declare class Range implements Q.Flat {
    start: K2ff00417fe9d.Position;
    end: K2ff00417fe9d.Position;
    constructor(start: K2ff00417fe9d.Position, end: K2ff00417fe9d.Position);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Range: (v0: K2ff00417fe9d.Position, v1: K2ff00417fe9d.Position) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
