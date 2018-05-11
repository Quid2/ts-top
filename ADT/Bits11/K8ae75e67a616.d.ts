/** ZM Type:
Bits11 ≡   Bits11 {bit0 :: K65149ce3b366,
                   bit1 :: K65149ce3b366,
                   bit2 :: K65149ce3b366,
                   bit3 :: K65149ce3b366,
                   bit4 :: K65149ce3b366,
                   bit5 :: K65149ce3b366,
                   bit6 :: K65149ce3b366,
                   bit7 :: K65149ce3b366,
                   bit8 :: K65149ce3b366,
                   bit9 :: K65149ce3b366,
                   bit10 :: K65149ce3b366}
*/
import * as Q from '../.././lib/core';
import * as K65149ce3b366 from '../Bit/K65149ce3b366';
export declare const $Bits11: Q.zmFold<Bits11>;
export declare const ___: Q.zmTypeInfo;
export declare class Bits11 implements Q.Flat {
    bit0: K65149ce3b366.Bit;
    bit1: K65149ce3b366.Bit;
    bit2: K65149ce3b366.Bit;
    bit3: K65149ce3b366.Bit;
    bit4: K65149ce3b366.Bit;
    bit5: K65149ce3b366.Bit;
    bit6: K65149ce3b366.Bit;
    bit7: K65149ce3b366.Bit;
    bit8: K65149ce3b366.Bit;
    bit9: K65149ce3b366.Bit;
    bit10: K65149ce3b366.Bit;
    constructor(bit0: K65149ce3b366.Bit, bit1: K65149ce3b366.Bit, bit2: K65149ce3b366.Bit, bit3: K65149ce3b366.Bit, bit4: K65149ce3b366.Bit, bit5: K65149ce3b366.Bit, bit6: K65149ce3b366.Bit, bit7: K65149ce3b366.Bit, bit8: K65149ce3b366.Bit, bit9: K65149ce3b366.Bit, bit10: K65149ce3b366.Bit);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Bits11: (v0: K65149ce3b366.Bit, v1: K65149ce3b366.Bit, v2: K65149ce3b366.Bit, v3: K65149ce3b366.Bit, v4: K65149ce3b366.Bit, v5: K65149ce3b366.Bit, v6: K65149ce3b366.Bit, v7: K65149ce3b366.Bit, v8: K65149ce3b366.Bit, v9: K65149ce3b366.Bit, v10: K65149ce3b366.Bit) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
