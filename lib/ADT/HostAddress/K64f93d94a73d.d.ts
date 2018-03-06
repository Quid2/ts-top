import * as Q from '../../core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $HostAddress: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<HostAddress<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type HostAddress<A extends Q.Flat> = IPAddress<A> | DNSAddress<A>;
export declare class IPAddress<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        IPAddress: (v0: A) => R;
        DNSAddress: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class DNSAddress<A extends Q.Flat> implements Q.Flat {
    _0: Kb8cd13187198.List<K066db52af145.Char>;
    constructor(_0: Kb8cd13187198.List<K066db52af145.Char>);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        IPAddress: (v0: A) => R;
        DNSAddress: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
