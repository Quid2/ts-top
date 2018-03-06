import * as Q from '../../core';
export declare const $ByType: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<ByType<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class ByType<A extends Q.Flat> implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        ByType: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
