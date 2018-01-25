import * as Q from '../../core'
import * as K7028aa556ebc from  '../Type/K7028aa556ebc'
import * as K4bbd38587b9e from  '../AbsRef/K4bbd38587b9e'
import * as Kf139d4751fda from  '../BLOB/Kf139d4751fda'
import * as K982148c09ddb from  '../FlatEncoding/K982148c09ddb'

export const $TypedBLOB:Q.zmFold<TypedBLOB> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x61,0x4e,0xdd,0x84,0xc8,0xbd],
  decoder : function (decoders) {
    return function(st) { return new TypedBLOB (decoders[0](st),decoders[1](st)) }
  }
}

export class TypedBLOB  implements Q.Flat {
  constructor(
    public _0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>,
    public _1: Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>,

  ) { }

  match <R>(m:{TypedBLOB:(v0:K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>,v1:Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>)=>R}) : R {return m.TypedBLOB(this._0,this._1);}
  flatMaxSize():number {return this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);this._1.flatEncode(st);}

}


