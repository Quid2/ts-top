import * as Q from '../../core'
import * as Kf92e8339908a from  '../Word/Kf92e8339908a'

export const $Word32:Q.zmFold<Word32> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x24,0x12,0x79,0x9c,0x99,0xf1],
  decoder : function (decoders) {
    const decs = {"Word32":[Kf92e8339908a.$Word(Q.flatDecoder)]} ;
    return function(st) { const d=decs["Word32"]; return new Word32(d[0](st)) }

  }
}

export class Word32  implements Q.Flat {
  constructor(
    public _0: Kf92e8339908a.Word,

  ) { }

  match <R>(m:{Word32:(v0:Kf92e8339908a.Word)=>R}) : R {return m.Word32(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


