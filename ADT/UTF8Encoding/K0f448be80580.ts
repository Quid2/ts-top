import * as Q from '../../core'

export const $UTF8Encoding:Q.zmFold<UTF8Encoding> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x0f,0x44,0x8b,0xe8,0x05,0x80],
  decoder : function (decoders) {
    const decs = {} ;
    return function(st) { return new UTF8Encoding() }

  }
}

export class UTF8Encoding  implements Q.Flat {

  match <R>(m:{UTF8Encoding:R}) : R {return m.UTF8Encoding;}
  flatMaxSize():number {return 0;}
  flatEncode() {}

}


