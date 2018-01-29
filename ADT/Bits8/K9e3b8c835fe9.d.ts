import * as Q from '../../core';
import * as K65149ce3b366 from '../Bit/K65149ce3b366';
export declare const $Bits8: Q.zmFold<Bits8>;
export declare const ___: Q.zmTypeInfo;
export declare class Bits8 implements Q.Flat {
    bit0: K65149ce3b366.Bit;
    bit1: K65149ce3b366.Bit;
    bit2: K65149ce3b366.Bit;
    bit3: K65149ce3b366.Bit;
    bit4: K65149ce3b366.Bit;
    bit5: K65149ce3b366.Bit;
    bit6: K65149ce3b366.Bit;
    bit7: K65149ce3b366.Bit;
    constructor(bit0: K65149ce3b366.Bit, bit1: K65149ce3b366.Bit, bit2: K65149ce3b366.Bit, bit3: K65149ce3b366.Bit, bit4: K65149ce3b366.Bit, bit5: K65149ce3b366.Bit, bit6: K65149ce3b366.Bit, bit7: K65149ce3b366.Bit);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Bits8: (v0: K65149ce3b366.Bit, v1: K65149ce3b366.Bit, v2: K65149ce3b366.Bit, v3: K65149ce3b366.Bit, v4: K65149ce3b366.Bit, v5: K65149ce3b366.Bit, v6: K65149ce3b366.Bit, v7: K65149ce3b366.Bit) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
