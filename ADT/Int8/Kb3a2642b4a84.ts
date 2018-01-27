import * as Q from '../../core'
import * as K03226796ede4 from  '../ZigZag/K03226796ede4'
import * as Kb1f46a49c8f8 from  '../Word8/Kb1f46a49c8f8'

export const $Int8:Q.zmFold<Int8> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0xb3,0xa2,0x64,0x2b,0x4a,0x84],
  decoder : function (decoders) {
    const decs = {"Int8":[K03226796ede4.$ZigZag(Kb1f46a49c8f8.$Word8)(Q.flatDecoder)]} ;
    return function(st) { const d=decs["Int8"]; return new Int8(d[0](st)) }

  }
}

export class Int8  implements Q.Flat {
  constructor(
    public _0: K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>,

  ) { }

  match <R>(m:{Int8:(v0:K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>)=>R}) : R {return m.Int8(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


