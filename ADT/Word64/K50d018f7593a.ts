import * as Q from '../../core'
import * as Kf92e8339908a from  '../Word/Kf92e8339908a'

export const $Word64:Q.zmFold<Word64> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x50,0xd0,0x18,0xf7,0x59,0x3a],
  decoder : function (decoders) {
    const decs = {"Word64":[Kf92e8339908a.$Word(Q.flatDecoder)]} ;
    return function(st) { const d=decs["Word64"]; return new Word64(d[0](st)) }

  }
}

export class Word64  implements Q.Flat {
  constructor(
    public _0: Kf92e8339908a.Word,

  ) { }

  match <R>(m:{Word64:(v0:Kf92e8339908a.Word)=>R}) : R {return m.Word64(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


