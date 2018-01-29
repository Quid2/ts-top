import * as Q from '../../core'
import * as K7028aa556ebc from  '../Type/K7028aa556ebc'
import * as K4bbd38587b9e from  '../AbsRef/K4bbd38587b9e'
import * as Kf139d4751fda from  '../BLOB/Kf139d4751fda'
import * as K982148c09ddb from  '../FlatEncoding/K982148c09ddb'

export const $TypedBLOB:Q.zmFold<TypedBLOB> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x61,0x4e,0xdd,0x84,0xc8,0xbd],
  decoder : function (decoders) {
        return function(st) { return new TypedBLOB(K7028aa556ebc.___.decoder([K4bbd38587b9e.___.decoder([])])(st),Kf139d4751fda.___.decoder([K982148c09ddb.___.decoder([])])(st)) }
  }
}

export class TypedBLOB  implements Q.Flat {
  constructor(
    public _0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>,
    public _1: Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,"TypedBLOB"+this._0.toStr(true)+this._1.toStr(true))}
  match <R>(m:{TypedBLOB:(v0:K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>,v1:Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>)=>R}) : R {return m.TypedBLOB(this._0,this._1);}
  flatMaxSize():number {return this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);this._1.flatEncode(st);}

}


