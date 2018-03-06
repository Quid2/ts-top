import * as Q from '../../core';
export declare const $UTF8Encoding: Q.zmFold<UTF8Encoding>;
export declare const ___: Q.zmTypeInfo;
export declare class UTF8Encoding implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        UTF8Encoding: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
