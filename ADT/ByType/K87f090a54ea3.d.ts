/** ZM Type:
ByType a ≡   ByType
*/
import * as Q from '../.././lib/core';
export declare const $ByType: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<ByType<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class ByType<A extends Q.ZM> implements Q.ZM {
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        ByType: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
