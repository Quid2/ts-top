/** ZM Type:
SHAKE128_48 a ≡   SHAKE128_48 Kb1f46a49c8f8
                              Kb1f46a49c8f8
                              Kb1f46a49c8f8
                              Kb1f46a49c8f8
                              Kb1f46a49c8f8
                              Kb1f46a49c8f8
*/

import * as Q from '../.././lib/core'
import * as Kb1f46a49c8f8 from  '../Word8/Kb1f46a49c8f8'

export const $SHAKE128_48:<A extends Q.ZM>(t0:Q.zmFold<A>) => Q.zmFold<SHAKE128_48<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x9f,0x21,0x47,0x99,0x14,0x9b],
  decoder : function (decoders) {
        return function(st) { return new SHAKE128_48(Kb1f46a49c8f8.___.decoder([])(st),Kb1f46a49c8f8.___.decoder([])(st),Kb1f46a49c8f8.___.decoder([])(st),Kb1f46a49c8f8.___.decoder([])(st),Kb1f46a49c8f8.___.decoder([])(st),Kb1f46a49c8f8.___.decoder([])(st)) }
  }
}


export class SHAKE128_48 <A extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: Kb1f46a49c8f8.Word8,
    public readonly _1: Kb1f46a49c8f8.Word8,
    public readonly _2: Kb1f46a49c8f8.Word8,
    public readonly _3: Kb1f46a49c8f8.Word8,
    public readonly _4: Kb1f46a49c8f8.Word8,
    public readonly _5: Kb1f46a49c8f8.Word8,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["SHAKE128_48",this._0.toStr(true),this._1.toStr(true),this._2.toStr(true),this._3.toStr(true),this._4.toStr(true),this._5.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["SHAKE128_48",this._0.pretty(true),this._1.pretty(true),this._2.pretty(true),this._3.pretty(true),this._4.pretty(true),this._5.pretty(true)].join(' '))}

  match <R>(m:{SHAKE128_48:(v0:Kb1f46a49c8f8.Word8,v1:Kb1f46a49c8f8.Word8,v2:Kb1f46a49c8f8.Word8,v3:Kb1f46a49c8f8.Word8,v4:Kb1f46a49c8f8.Word8,v5:Kb1f46a49c8f8.Word8)=>R}) : R {return m.SHAKE128_48(this._0,this._1,this._2,this._3,this._4,this._5);}
  flatMaxSize():number {return this._0.flatMaxSize()+this._1.flatMaxSize()+this._2.flatMaxSize()+this._3.flatMaxSize()+this._4.flatMaxSize()+this._5.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);this._1.flatEncode(st);this._2.flatEncode(st);this._3.flatEncode(st);this._4.flatEncode(st);this._5.flatEncode(st);}

}


