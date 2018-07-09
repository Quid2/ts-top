/** ZM Type:
UTF8Encoding ≡   UTF8Encoding
*/

import * as Q from '../.././lib/core'

export const $UTF8Encoding:Q.zmFold<UTF8Encoding> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x0f,0x44,0x8b,0xe8,0x05,0x80],
  decoder : function (decoders) {
        return function(st) { return new UTF8Encoding() }
  }
}


export class UTF8Encoding  implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "UTF8Encoding"}
  pretty(nested=false):string {return "UTF8Encoding"}

  match <R>(m:{UTF8Encoding:R}) : R {return m.UTF8Encoding;}
  flatMaxSize():number {return 0;}
  flatEncode() {}

}


