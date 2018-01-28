import * as Q from '../../core';
import * as Kb3a2642b4a84 from '../Int8/Kb3a2642b4a84';
import * as K3dac6bd4fa9c from '../Int16/K3dac6bd4fa9c';
import * as Kfb94cb4d4ede from '../Int64/Kfb94cb4d4ede';
import * as Kb53bec846608 from '../IEEE_754_binary32/Kb53bec846608';
import * as Kcba9596b4657 from '../IEEE_754_binary64/Kcba9596b4657';
import * as K102a3bb904e3 from '../Int/K102a3bb904e3';
export declare const $III: Q.zmFold<III>;
export declare const ___: Q.zmTypeInfo;
export declare class III implements Q.Flat {
    w8: Kb3a2642b4a84.Int8;
    w16: K3dac6bd4fa9c.Int16;
    w: Kfb94cb4d4ede.Int64;
    i8: Kb3a2642b4a84.Int8;
    i: Kfb94cb4d4ede.Int64;
    f: Kb53bec846608.IEEE_754_binary32;
    d: Kcba9596b4657.IEEE_754_binary64;
    ii: K102a3bb904e3.Int;
    constructor(w8: Kb3a2642b4a84.Int8, w16: K3dac6bd4fa9c.Int16, w: Kfb94cb4d4ede.Int64, i8: Kb3a2642b4a84.Int8, i: Kfb94cb4d4ede.Int64, f: Kb53bec846608.IEEE_754_binary32, d: Kcba9596b4657.IEEE_754_binary64, ii: K102a3bb904e3.Int);
    match<R>(m: {
        III: (v0: Kb3a2642b4a84.Int8, v1: K3dac6bd4fa9c.Int16, v2: Kfb94cb4d4ede.Int64, v3: Kb3a2642b4a84.Int8, v4: Kfb94cb4d4ede.Int64, v5: Kb53bec846608.IEEE_754_binary32, v6: Kcba9596b4657.IEEE_754_binary64, v7: K102a3bb904e3.Int) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
