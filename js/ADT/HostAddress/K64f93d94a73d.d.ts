/** ZM Type:
HostAddress a ≡   IPAddress a
                | DNSAddress (Kb8cd13187198 K066db52af145)
*/
import * as Q from "@quid2/ts-core";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K066db52af145 from "../Char/K066db52af145";
export declare const $HostAddress: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<HostAddress<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type HostAddress<A extends Q.ZM> = IPAddress<A> | DNSAddress<A>;
export declare class IPAddress<A extends Q.ZM> implements Q.ZM {
    readonly _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        IPAddress: (v0: A) => R;
        DNSAddress: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class DNSAddress<A extends Q.ZM> implements Q.ZM {
    readonly _0: Kb8cd13187198.List<K066db52af145.Char>;
    constructor(_0: Kb8cd13187198.List<K066db52af145.Char>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        IPAddress: (v0: A) => R;
        DNSAddress: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K64f93d94a73d.d.ts.map