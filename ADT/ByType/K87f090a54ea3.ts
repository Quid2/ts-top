/** ZM Type:
ByType a ≡   ByType
*/

import * as Q from '../.././lib/core'

export const $ByType:<A extends Q.ZM>(t0:Q.zmFold<A>) => Q.zmFold<ByType<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x87,0xf0,0x90,0xa5,0x4e,0xa3],
  decoder : function (decoders) {
        return function(st) { return new ByType() }
  }
}


export class ByType <A extends Q.ZM> implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "ByType"}
  pretty(nested=false):string {return "ByType"}

  match <R>(m:{ByType:R}) : R {return m.ByType;}
  flatMaxSize():number {return 0;}
  flatEncode() {}

}


