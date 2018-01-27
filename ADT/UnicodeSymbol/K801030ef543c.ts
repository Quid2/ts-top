import * as Q from '../../core'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $UnicodeSymbol:Q.zmFold<UnicodeSymbol> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x80,0x10,0x30,0xef,0x54,0x3c],
  decoder : function (decoders) {
    const decs = {"UnicodeSymbol":[K066db52af145.$Char(Q.flatDecoder)]} ;
    return function(st) { const d=decs["UnicodeSymbol"]; return new UnicodeSymbol(d[0](st)) }

  }
}

export class UnicodeSymbol  implements Q.Flat {
  constructor(
    public _0: K066db52af145.Char,

  ) { }

  match <R>(m:{UnicodeSymbol:(v0:K066db52af145.Char)=>R}) : R {return m.UnicodeSymbol(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


