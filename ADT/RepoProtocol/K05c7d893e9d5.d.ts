/** ZM Type:
RepoProtocol ≡   Record (K3e8257255cbf Kdc26e9d90047
                                       Kdc26e9d90047
                                       (K07b1b045ac3c K4bbd38587b9e))
               | Solve K4bbd38587b9e
               | Solved K4bbd38587b9e
                        (K3e8257255cbf Kdc26e9d90047
                                       Kdc26e9d90047
                                       (K07b1b045ac3c K4bbd38587b9e))
               | AskDataTypes
               | KnownDataTypes (Kb8cd13187198 (Ka5583bf3ad34 K4bbd38587b9e
                                                              (K3e8257255cbf Kdc26e9d90047
                                                                             Kdc26e9d90047
                                                                             (K07b1b045ac3c K4bbd38587b9e))))
*/
import * as Q from '../.././lib/core';
import * as K3e8257255cbf from '../ADT/K3e8257255cbf';
import * as Kdc26e9d90047 from '../Identifier/Kdc26e9d90047';
import * as K07b1b045ac3c from '../ADTRef/K07b1b045ac3c';
import * as K4bbd38587b9e from '../AbsRef/K4bbd38587b9e';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as Ka5583bf3ad34 from '../Tuple2/Ka5583bf3ad34';
export declare const $RepoProtocol: Q.zmFold<RepoProtocol>;
export declare const ___: Q.zmTypeInfo;
export declare type RepoProtocol = Record | Solve | Solved | AskDataTypes | KnownDataTypes;
export declare class Record implements Q.ZM {
    readonly _0: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>;
    constructor(_0: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Record: (v0: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        Solve: (v0: K4bbd38587b9e.AbsRef) => R;
        Solved: (v0: K4bbd38587b9e.AbsRef, v1: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        AskDataTypes: R;
        KnownDataTypes: (v0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef, K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Solve implements Q.ZM {
    readonly _0: K4bbd38587b9e.AbsRef;
    constructor(_0: K4bbd38587b9e.AbsRef);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Record: (v0: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        Solve: (v0: K4bbd38587b9e.AbsRef) => R;
        Solved: (v0: K4bbd38587b9e.AbsRef, v1: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        AskDataTypes: R;
        KnownDataTypes: (v0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef, K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Solved implements Q.ZM {
    readonly _0: K4bbd38587b9e.AbsRef;
    readonly _1: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>;
    constructor(_0: K4bbd38587b9e.AbsRef, _1: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Record: (v0: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        Solve: (v0: K4bbd38587b9e.AbsRef) => R;
        Solved: (v0: K4bbd38587b9e.AbsRef, v1: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        AskDataTypes: R;
        KnownDataTypes: (v0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef, K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class AskDataTypes implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Record: (v0: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        Solve: (v0: K4bbd38587b9e.AbsRef) => R;
        Solved: (v0: K4bbd38587b9e.AbsRef, v1: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        AskDataTypes: R;
        KnownDataTypes: (v0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef, K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class KnownDataTypes implements Q.ZM {
    readonly _0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef, K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>;
    constructor(_0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef, K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Record: (v0: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        Solve: (v0: K4bbd38587b9e.AbsRef) => R;
        Solved: (v0: K4bbd38587b9e.AbsRef, v1: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>) => R;
        AskDataTypes: R;
        KnownDataTypes: (v0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef, K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
