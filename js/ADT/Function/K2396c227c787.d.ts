/** ZM Type:
Function a b ≡   Call a
               | Reply (K9f214799149b a) b
*/
import * as Q from "@quid2/ts-core";
import * as K9f214799149b from "../SHAKE128_48/K9f214799149b";
export declare const $Function: <A extends Q.ZM, B extends Q.ZM>(t0: Q.zmFold<A>, t1: Q.zmFold<B>) => Q.zmFold<Function<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare type Function<A extends Q.ZM, B extends Q.ZM> = Call<A, B> | Reply<A, B>;
export declare class Call<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    readonly _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Call: (v0: A) => R;
        Reply: (v0: K9f214799149b.SHAKE128_48<A>, v1: B) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Reply<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
    readonly _0: K9f214799149b.SHAKE128_48<A>;
    readonly _1: B;
    constructor(_0: K9f214799149b.SHAKE128_48<A>, _1: B);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Call: (v0: A) => R;
        Reply: (v0: K9f214799149b.SHAKE128_48<A>, v1: B) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K2396c227c787.d.ts.map