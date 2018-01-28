import * as Q from '../../core';
import * as K549f91f3b0ec from '../Sign/K549f91f3b0ec';
import * as K74e2b3b89941 from '../MostSignificantFirst/K74e2b3b89941';
import * as K8ae75e67a616 from '../Bits11/K8ae75e67a616';
import * as Kf727da8aa8ad from '../Bits52/Kf727da8aa8ad';
export declare const $IEEE_754_binary64: Q.zmFold<IEEE_754_binary64>;
export declare const ___: Q.zmTypeInfo;
export declare class IEEE_754_binary64 implements Q.Flat {
    sign: K549f91f3b0ec.Sign;
    exponent: K74e2b3b89941.MostSignificantFirst<K8ae75e67a616.Bits11>;
    fraction: K74e2b3b89941.MostSignificantFirst<Kf727da8aa8ad.Bits52>;
    constructor(sign: K549f91f3b0ec.Sign, exponent: K74e2b3b89941.MostSignificantFirst<K8ae75e67a616.Bits11>, fraction: K74e2b3b89941.MostSignificantFirst<Kf727da8aa8ad.Bits52>);
    match<R>(m: {
        IEEE_754_binary64: (v0: K549f91f3b0ec.Sign, v1: K74e2b3b89941.MostSignificantFirst<K8ae75e67a616.Bits11>, v2: K74e2b3b89941.MostSignificantFirst<Kf727da8aa8ad.Bits52>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
