import * as Q from '../../core';
export declare const $UTF8Encoding: Q.zmFold<UTF8Encoding>;
export declare class UTF8Encoding implements Q.Flat {
    match<R>(m: {
        UTF8Encoding: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
