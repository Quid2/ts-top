/** ZM Type:
Unit ≡   Unit
*/

import * as Q from '../.././lib/core'

export const $Unit:Q.zmFold<Unit> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x79,0x4a,0xef,0x6e,0x21,0xaa],
  decoder : function (decoders) {
        return function(st) { return new Unit() }
  }
}

export class Unit  implements Q.Flat {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "Unit"}
  match <R>(m:{Unit:R}) : R {return m.Unit;}
  flatMaxSize():number {return 0;}
  flatEncode() {}

}


