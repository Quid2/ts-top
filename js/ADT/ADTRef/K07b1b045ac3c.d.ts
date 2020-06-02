/** ZM Type:
ADTRef a ≡   Var Kb1f46a49c8f8
           | Rec
           | Ext a
*/
import * as Q from "@quid2/ts-core";
import * as Kb1f46a49c8f8 from "../Word8/Kb1f46a49c8f8";
export declare const $ADTRef: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<ADTRef<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type ADTRef<A extends Q.ZM> = Var<A> | Rec<A> | Ext<A>;
export declare class Var<A extends Q.ZM> implements Q.ZM {
    readonly _0: Kb1f46a49c8f8.Word8;
    constructor(_0: Kb1f46a49c8f8.Word8);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Var: (v0: Kb1f46a49c8f8.Word8) => R;
        Rec: R;
        Ext: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Rec<A extends Q.ZM> implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Var: (v0: Kb1f46a49c8f8.Word8) => R;
        Rec: R;
        Ext: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Ext<A extends Q.ZM> implements Q.ZM {
    readonly _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Var: (v0: Kb1f46a49c8f8.Word8) => R;
        Rec: R;
        Ext: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K07b1b045ac3c.d.ts.map