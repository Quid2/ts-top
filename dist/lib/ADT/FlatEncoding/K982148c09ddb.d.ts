import * as Q from '../../core';
export declare const $FlatEncoding: Q.zmFold<FlatEncoding>;
export declare class FlatEncoding implements Q.Flat {
    match<R>(m: {
        FlatEncoding: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
