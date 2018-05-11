/** ZM Type:
ZM ≡   ZM
*/
import * as Q from '../.././lib/core';
export declare const $ZM: Q.zmFold<ZM>;
export declare const ___: Q.zmTypeInfo;
export declare class ZM implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        ZM: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
