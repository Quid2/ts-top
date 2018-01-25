import * as Q from '../../core'
import * as Kb1f46a49c8f8 from  '../Word8/Kb1f46a49c8f8'

export const $SHA3_256_6:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<SHA3_256_6<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0x20,0x08,0xe8,0xe3,0xf4,0xa4],
  decoder : function (decoders) {
    return function(st) { return new SHA3_256_6 (decoders[0](st),decoders[1](st),decoders[2](st),decoders[3](st),decoders[4](st),decoders[5](st)) }
  }
}

export class SHA3_256_6 <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: Kb1f46a49c8f8.Word8,
    public _1: Kb1f46a49c8f8.Word8,
    public _2: Kb1f46a49c8f8.Word8,
    public _3: Kb1f46a49c8f8.Word8,
    public _4: Kb1f46a49c8f8.Word8,
    public _5: Kb1f46a49c8f8.Word8,

  ) { }

  match <R>(m:{SHA3_256_6:(v0:Kb1f46a49c8f8.Word8,v1:Kb1f46a49c8f8.Word8,v2:Kb1f46a49c8f8.Word8,v3:Kb1f46a49c8f8.Word8,v4:Kb1f46a49c8f8.Word8,v5:Kb1f46a49c8f8.Word8)=>R}) : R {return m.SHA3_256_6(this._0,this._1,this._2,this._3,this._4,this._5);}
  flatMaxSize():number {return this._0.flatMaxSize()+this._1.flatMaxSize()+this._2.flatMaxSize()+this._3.flatMaxSize()+this._4.flatMaxSize()+this._5.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);this._1.flatEncode(st);this._2.flatEncode(st);this._3.flatEncode(st);this._4.flatEncode(st);this._5.flatEncode(st);}

}


