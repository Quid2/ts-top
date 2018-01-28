import * as Q from "../core";
export declare const $Array: <A extends Q.Flat>(t1: Q.zmFold<A>) => Q.zmFold<Array<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class Array<A extends Q.Flat> implements Q.Flat {
    values: A[];
    constructor(values: A[]);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
