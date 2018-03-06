import * as Q from '../../core';
import * as K2f006595638c from '../String/K2f006595638c';
export declare const $SourceCode: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<SourceCode<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class SourceCode<A extends Q.Flat> implements Q.Flat {
    _0: A;
    _1: K2f006595638c.String;
    constructor(_0: A, _1: K2f006595638c.String);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        SourceCode: (v0: A, v1: K2f006595638c.String) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
