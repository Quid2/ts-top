import * as Q from '../../core'
import * as Kf8844385a443 from  '../Bytes/Kf8844385a443'

export const $BLOB:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<BLOB<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0xf1,0x39,0xd4,0x75,0x1f,0xda],
  decoder : function (decoders) {
    return function(st) { return new BLOB (decoders[0](st),decoders[1](st)) }
  }
}

export class BLOB <A extends Q.Flat> implements Q.Flat {
  constructor(
    public encoding: A,
    public content: Kf8844385a443.Bytes,

  ) { }

  match <R>(m:{BLOB:(v0:A,v1:Kf8844385a443.Bytes)=>R}) : R {return m.BLOB(this.encoding,this.content);}
  flatMaxSize():number {return this.encoding.flatMaxSize()+this.content.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.encoding.flatEncode(st);this.content.flatEncode(st);}

}


