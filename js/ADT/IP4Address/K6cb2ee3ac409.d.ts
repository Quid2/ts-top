/** ZM Type:
IP4Address ≡   IP4Address Kb1f46a49c8f8
                          Kb1f46a49c8f8
                          Kb1f46a49c8f8
                          Kb1f46a49c8f8
*/
import * as Q from "@quid2/ts-core";
import * as Kb1f46a49c8f8 from "../Word8/Kb1f46a49c8f8";
export declare const $IP4Address: Q.zmFold<IP4Address>;
export declare const ___: Q.zmTypeInfo;
export declare class IP4Address implements Q.ZM {
    readonly _0: Kb1f46a49c8f8.Word8;
    readonly _1: Kb1f46a49c8f8.Word8;
    readonly _2: Kb1f46a49c8f8.Word8;
    readonly _3: Kb1f46a49c8f8.Word8;
    constructor(_0: Kb1f46a49c8f8.Word8, _1: Kb1f46a49c8f8.Word8, _2: Kb1f46a49c8f8.Word8, _3: Kb1f46a49c8f8.Word8);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        IP4Address: (v0: Kb1f46a49c8f8.Word8, v1: Kb1f46a49c8f8.Word8, v2: Kb1f46a49c8f8.Word8, v3: Kb1f46a49c8f8.Word8) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K6cb2ee3ac409.d.ts.map