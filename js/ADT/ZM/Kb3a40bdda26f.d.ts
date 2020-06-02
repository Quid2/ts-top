/** ZM Type:
ZM ≡   ZM
*/
import * as Q from "@quid2/ts-core";
export declare const $ZM: Q.zmFold<ZM>;
export declare const ___: Q.zmTypeInfo;
export declare class ZM implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        ZM: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
//# sourceMappingURL=Kb3a40bdda26f.d.ts.map