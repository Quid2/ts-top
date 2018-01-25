import * as Q from '../../core';
export declare const $ByAny: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<ByAny<A>>;
export declare class ByAny<A extends Q.Flat> implements Q.Flat {
    match<R>(m: {
        ByAny: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
