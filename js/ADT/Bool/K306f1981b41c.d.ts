/** ZM Type:
Bool ≡   False
       | True
*/
import * as Q from "@quid2/ts-core";
export declare const $Bool: Q.zmFold<Bool>;
export declare const ___: Q.zmTypeInfo;
export declare type Bool = False | True;
export declare class False implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        False: R;
        True: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class True implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        False: R;
        True: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K306f1981b41c.d.ts.map