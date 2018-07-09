import * as Q from "../core";
export declare const $Array: <A extends Q.ZM>(t1: Q.zmFold<A>) => Q.zmFold<Array<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class Array<A extends Q.ZM> implements Q.ZM {
    values: A[];
    constructor(values: A[]);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
}
