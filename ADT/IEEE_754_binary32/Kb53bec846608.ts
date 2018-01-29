import * as Q from '../../core'
import * as K549f91f3b0ec from  '../Sign/K549f91f3b0ec'
import * as K74e2b3b89941 from  '../MostSignificantFirst/K74e2b3b89941'
import * as K9e3b8c835fe9 from  '../Bits8/K9e3b8c835fe9'
import * as K338888222364 from  '../Bits23/K338888222364'

export const $IEEE_754_binary32:Q.zmFold<IEEE_754_binary32> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0xb5,0x3b,0xec,0x84,0x66,0x08],
  decoder : function (decoders) {
        return function(st) { return new IEEE_754_binary32(K549f91f3b0ec.___.decoder([])(st),K74e2b3b89941.___.decoder([K9e3b8c835fe9.___.decoder([])])(st),K74e2b3b89941.___.decoder([K338888222364.___.decoder([])])(st)) }
  }
}

export class IEEE_754_binary32  implements Q.Flat {
  constructor(
    public sign: K549f91f3b0ec.Sign,
    public exponent: K74e2b3b89941.MostSignificantFirst<K9e3b8c835fe9.Bits8>,
    public fraction: K74e2b3b89941.MostSignificantFirst<K338888222364.Bits23>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["IEEE_754_binary32",this.sign.toStr(true),this.exponent.toStr(true),this.fraction.toStr(true)].join(' '))}
  match <R>(m:{IEEE_754_binary32:(v0:K549f91f3b0ec.Sign,v1:K74e2b3b89941.MostSignificantFirst<K9e3b8c835fe9.Bits8>,v2:K74e2b3b89941.MostSignificantFirst<K338888222364.Bits23>)=>R}) : R {return m.IEEE_754_binary32(this.sign,this.exponent,this.fraction);}
  flatMaxSize():number {return this.sign.flatMaxSize()+this.exponent.flatMaxSize()+this.fraction.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.sign.flatEncode(st);this.exponent.flatEncode(st);this.fraction.flatEncode(st);}

}


