import * as Q from '../core';
export declare const $List: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<List<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type List<A extends Q.ZM> = Nil<A> | Cons<A>;
export declare class Nil<A extends Q.ZM> implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Nil: R;
        Cons: (v0: A, v1: List<A>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    [Symbol.iterator](): {
        next: () => {
            done: boolean;
            value: undefined;
        };
    };
    length: () => number;
}
export declare class Cons<A extends Q.ZM> implements Q.ZM {
    _0: A;
    _1: List<A>;
    constructor(_0: A, _1: List<A>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Nil: R;
        Cons: (v0: A, v1: List<A>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    [Symbol.iterator](): {
        next: () => {
            done: boolean;
            value: undefined;
        } | {
            done: boolean;
            value: A;
        };
    };
    pretty(nested?: boolean): string;
    prettyList(nested?: boolean): string;
}
export declare function prettyString<A extends Q.ZM>(l: List<A>): string;
export declare function prettyConcat<A extends Q.ZM>(l: List<A>): string;
