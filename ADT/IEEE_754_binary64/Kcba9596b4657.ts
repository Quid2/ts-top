import * as Q from '../../core'
import * as K549f91f3b0ec from  '../Sign/K549f91f3b0ec'
import * as K74e2b3b89941 from  '../MostSignificantFirst/K74e2b3b89941'
import * as K8ae75e67a616 from  '../Bits11/K8ae75e67a616'
import * as Kf727da8aa8ad from  '../Bits52/Kf727da8aa8ad'

export const $IEEE_754_binary64:Q.zmFold<IEEE_754_binary64> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0xcb,0xa9,0x59,0x6b,0x46,0x57],
  decoder : function (decoders) {
    return function(st) { return new IEEE_754_binary64 (decoders[0](st),decoders[1](st),decoders[2](st)) }
  }
}

export class IEEE_754_binary64  implements Q.Flat {
  constructor(
    public sign: K549f91f3b0ec.Sign,
    public exponent: K74e2b3b89941.MostSignificantFirst<K8ae75e67a616.Bits11>,
    public fraction: K74e2b3b89941.MostSignificantFirst<Kf727da8aa8ad.Bits52>,

  ) { }

  match <R>(m:{IEEE_754_binary64:(v0:K549f91f3b0ec.Sign,v1:K74e2b3b89941.MostSignificantFirst<K8ae75e67a616.Bits11>,v2:K74e2b3b89941.MostSignificantFirst<Kf727da8aa8ad.Bits52>)=>R}) : R {return m.IEEE_754_binary64(this.sign,this.exponent,this.fraction);}
  flatMaxSize():number {return this.sign.flatMaxSize()+this.exponent.flatMaxSize()+this.fraction.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.sign.flatEncode(st);this.exponent.flatEncode(st);this.fraction.flatEncode(st);}

}

