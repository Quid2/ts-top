/** ZM Type:
ByAny a ≡   ByAny
*/
import * as Q from '../.././lib/core';
export declare const $ByAny: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<ByAny<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class ByAny<A extends Q.Flat> implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        ByAny: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
