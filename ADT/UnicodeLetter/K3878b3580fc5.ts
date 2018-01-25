import * as Q from '../../core'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $UnicodeLetter:Q.zmFold<UnicodeLetter> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x38,0x78,0xb3,0x58,0x0f,0xc5],
  decoder : function (decoders) {
    return function(st) { return new UnicodeLetter (decoders[0](st)) }
  }
}

export class UnicodeLetter  implements Q.Flat {
  constructor(
    public _0: K066db52af145.Char,

  ) { }

  match <R>(m:{UnicodeLetter:(v0:K066db52af145.Char)=>R}) : R {return m.UnicodeLetter(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


