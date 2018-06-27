/** ZM Type:
Match a ≡   MatchValue a
          | MatchAny (K7028aa556ebc K4bbd38587b9e)
*/
import * as Q from '../.././lib/core';
import * as K7028aa556ebc from '../Type/K7028aa556ebc';
import * as K4bbd38587b9e from '../AbsRef/K4bbd38587b9e';
export declare const $Match: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<Match<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type Match<A extends Q.Flat> = MatchValue<A> | MatchAny<A>;
export declare class MatchValue<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        MatchValue: (v0: A) => R;
        MatchAny: (v0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class MatchAny<A extends Q.Flat> implements Q.Flat {
    _0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>;
    constructor(_0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        MatchValue: (v0: A) => R;
        MatchAny: (v0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}