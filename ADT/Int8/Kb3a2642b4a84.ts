import * as Q from '../../core'
import * as K03226796ede4 from  '../ZigZag/K03226796ede4'
import * as Kb1f46a49c8f8 from  '../Word8/Kb1f46a49c8f8'

export const $Int8:Q.zmFold<Int8> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0xb3,0xa2,0x64,0x2b,0x4a,0x84],
  decoder : function (decoders) {
        return function(st) { return new Int8(K03226796ede4.___.decoder([Kb1f46a49c8f8.___.decoder([])])(st)) }
  }
}

export class Int8  implements Q.Flat {
  constructor(
    public _0: K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,"Int8"+this._0.toStr(true))}
  match <R>(m:{Int8:(v0:K03226796ede4.ZigZag<Kb1f46a49c8f8.Word8>)=>R}) : R {return m.Int8(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


