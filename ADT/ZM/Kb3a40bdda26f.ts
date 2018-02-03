import * as Q from '../../core'

export const $ZM:Q.zmFold<ZM> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0xb3,0xa4,0x0b,0xdd,0xa2,0x6f],
  decoder : function (decoders) {
        return function(st) { return new ZM() }
  }
}

export class ZM  implements Q.Flat {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "ZM"}
  match <R>(m:{ZM:R}) : R {return m.ZM;}
  flatMaxSize():number {return 0;}
  flatEncode() {}

}


