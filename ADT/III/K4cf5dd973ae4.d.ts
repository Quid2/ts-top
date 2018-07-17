/** ZM Type:
III ≡   III {w8 :: Kb3a2642b4a84,
             w16 :: K3dac6bd4fa9c,
             w :: Kfb94cb4d4ede,
             i8 :: Kb3a2642b4a84,
             i :: Kfb94cb4d4ede,
             f :: Kb53bec846608,
             d :: Kcba9596b4657,
             ii :: K102a3bb904e3}
*/
import * as Q from '../.././lib/core';
import * as Kb3a2642b4a84 from '../Int8/Kb3a2642b4a84';
import * as K3dac6bd4fa9c from '../Int16/K3dac6bd4fa9c';
import * as Kfb94cb4d4ede from '../Int64/Kfb94cb4d4ede';
import * as Kb53bec846608 from '../IEEE_754_binary32/Kb53bec846608';
import * as Kcba9596b4657 from '../IEEE_754_binary64/Kcba9596b4657';
import * as K102a3bb904e3 from '../Int/K102a3bb904e3';
export declare const $III: Q.zmFold<III>;
export declare const ___: Q.zmTypeInfo;
export declare class III implements Q.ZM {
    readonly w8: Kb3a2642b4a84.Int8;
    readonly w16: K3dac6bd4fa9c.Int16;
    readonly w: Kfb94cb4d4ede.Int64;
    readonly i8: Kb3a2642b4a84.Int8;
    readonly i: Kfb94cb4d4ede.Int64;
    readonly f: Kb53bec846608.IEEE_754_binary32;
    readonly d: Kcba9596b4657.IEEE_754_binary64;
    readonly ii: K102a3bb904e3.Int;
    constructor(w8: Kb3a2642b4a84.Int8, w16: K3dac6bd4fa9c.Int16, w: Kfb94cb4d4ede.Int64, i8: Kb3a2642b4a84.Int8, i: Kfb94cb4d4ede.Int64, f: Kb53bec846608.IEEE_754_binary32, d: Kcba9596b4657.IEEE_754_binary64, ii: K102a3bb904e3.Int);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        III: (v0: Kb3a2642b4a84.Int8, v1: K3dac6bd4fa9c.Int16, v2: Kfb94cb4d4ede.Int64, v3: Kb3a2642b4a84.Int8, v4: Kfb94cb4d4ede.Int64, v5: Kb53bec846608.IEEE_754_binary32, v6: Kcba9596b4657.IEEE_754_binary64, v7: K102a3bb904e3.Int) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
