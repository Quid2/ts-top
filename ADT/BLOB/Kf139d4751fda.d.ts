import * as Q from '../../core';
import * as Kf8844385a443 from '../Bytes/Kf8844385a443';
export declare const $BLOB: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<BLOB<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class BLOB<A extends Q.Flat> implements Q.Flat {
    encoding: A;
    content: Kf8844385a443.Bytes;
    constructor(encoding: A, content: Kf8844385a443.Bytes);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        BLOB: (v0: A, v1: Kf8844385a443.Bytes) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
