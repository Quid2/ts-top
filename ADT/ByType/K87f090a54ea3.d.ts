import * as Q from '../../core';
export declare const $ByType: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<ByType<A>>;
export declare class ByType<A extends Q.Flat> implements Q.Flat {
    match<R>(m: {
        ByType: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
