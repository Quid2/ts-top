import * as Q from '../../core'
import * as K2412799c99f1 from  '../Word32/K2412799c99f1'

export const $Char:Q.zmFold<Char> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x06,0x6d,0xb5,0x2a,0xf1,0x45],
  decoder : function (decoders) {
    const decs = {"Char":[K2412799c99f1.$Word32(Q.flatDecoder)]} ;
    return function(st) { const d=decs["Char"]; return new Char(d[0](st)) }

  }
}

export class Char  implements Q.Flat {
  constructor(
    public _0: K2412799c99f1.Word32,

  ) { }

  match <R>(m:{Char:(v0:K2412799c99f1.Word32)=>R}) : R {return m.Char(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


