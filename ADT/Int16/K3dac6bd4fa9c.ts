import * as Q from '../../core'
import * as K03226796ede4 from  '../ZigZag/K03226796ede4'
import * as K295e24d62fac from  '../Word16/K295e24d62fac'

export const $Int16:Q.zmFold<Int16> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x3d,0xac,0x6b,0xd4,0xfa,0x9c],
  decoder : function (decoders) {
        return function(st) { return new Int16(K03226796ede4.___.decoder([K295e24d62fac.___.decoder([])])(st)) }
  }
}

export class Int16  implements Q.Flat {
  constructor(
    public _0: K03226796ede4.ZigZag<K295e24d62fac.Word16>,

  ) { }

  match <R>(m:{Int16:(v0:K03226796ede4.ZigZag<K295e24d62fac.Word16>)=>R}) : R {return m.Int16(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


