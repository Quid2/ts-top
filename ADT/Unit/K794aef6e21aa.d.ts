import * as Q from '../../core';
export declare const $Unit: Q.zmFold<Unit>;
export declare const ___: Q.zmTypeInfo;
export declare class Unit implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Unit: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
