/** ZM Type:
Content a b ≡   TextMessage (Kb8cd13187198 K066db52af145)
              | AskSubSubjects
           
*/
import * as Q from '../.././lib/core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $Content: <A extends Q.ZM, B extends Q.ZM>(t0: Q.zmFold<A>, t1: Q.zmFold<B>) => Q.zmFold<Content<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare type Content<A extends Q.ZM, B extends Q.ZM> = TextMessage<A, B> | AskSubSubjects<A, B> | Join<A, B> | Leave<A, B> | Ping<A, B> | AskUsers<A, B> | Users<A, B> | AskHistory<A, B> | History<A, B>;
export declare class TextMessage<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    _0: Kb8cd13187198.List<K066db52af145.Char>;
    constructor(_0: Kb8cd13187198.List<K066db52af145.Char>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        TextMessage: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        AskSubSubjects: R;
        Join: R;
        Leave: R;
        Ping: R;
        AskUsers: R;
        Users: (v0: Kb8cd13187198.List<A>) => R;
        AskHistory: R;
        History: (v0: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class AskSubSubjects<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        TextMessage: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        AskSubSubjects: R;
        Join: R;
        Leave: R;
        Ping: R;
        AskUsers: R;
        Users: (v0: Kb8cd13187198.List<A>) => R;
        AskHistory: R;
        History: (v0: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Join<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        TextMessage: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        AskSubSubjects: R;
        Join: R;
        Leave: R;
        Ping: R;
        AskUsers: R;
        Users: (v0: Kb8cd13187198.List<A>) => R;
        AskHistory: R;
        History: (v0: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Leave<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        TextMessage: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        AskSubSubjects: R;
        Join: R;
        Leave: R;
        Ping: R;
        AskUsers: R;
        Users: (v0: Kb8cd13187198.List<A>) => R;
        AskHistory: R;
        History: (v0: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Ping<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        TextMessage: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        AskSubSubjects: R;
        Join: R;
        Leave: R;
        Ping: R;
        AskUsers: R;
        Users: (v0: Kb8cd13187198.List<A>) => R;
        AskHistory: R;
        History: (v0: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class AskUsers<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        TextMessage: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        AskSubSubjects: R;
        Join: R;
        Leave: R;
        Ping: R;
        AskUsers: R;
        Users: (v0: Kb8cd13187198.List<A>) => R;
        AskHistory: R;
        History: (v0: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Users<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    _0: Kb8cd13187198.List<A>;
    constructor(_0: Kb8cd13187198.List<A>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        TextMessage: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        AskSubSubjects: R;
        Join: R;
        Leave: R;
        Ping: R;
        AskUsers: R;
        Users: (v0: Kb8cd13187198.List<A>) => R;
        AskHistory: R;
        History: (v0: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class AskHistory<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        TextMessage: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        AskSubSubjects: R;
        Join: R;
        Leave: R;
        Ping: R;
        AskUsers: R;
        Users: (v0: Kb8cd13187198.List<A>) => R;
        AskHistory: R;
        History: (v0: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class History<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    _0: Kb8cd13187198.List<B>;
    constructor(_0: Kb8cd13187198.List<B>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        TextMessage: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
        AskSubSubjects: R;
        Join: R;
        Leave: R;
        Ping: R;
        AskUsers: R;
        Users: (v0: Kb8cd13187198.List<A>) => R;
        AskHistory: R;
        History: (v0: Kb8cd13187198.List<B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
