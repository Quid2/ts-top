/** ZM Type:
FlatEncoding ≡   FlatEncoding
*/
import * as Q from '../.././lib/core';
export declare const $FlatEncoding: Q.zmFold<FlatEncoding>;
export declare const ___: Q.zmTypeInfo;
export declare class FlatEncoding implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        FlatEncoding: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
