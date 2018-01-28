import * as Q from '../../core'

export const $FlatEncoding:Q.zmFold<FlatEncoding> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x98,0x21,0x48,0xc0,0x9d,0xdb],
  decoder : function (decoders) {
        return function(st) { return new FlatEncoding() }
  }
}

export class FlatEncoding  implements Q.Flat {

  match <R>(m:{FlatEncoding:R}) : R {return m.FlatEncoding;}
  flatMaxSize():number {return 0;}
  flatEncode() {}

}


