import * as Q from '../../core'

export const $ByAny:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<ByAny<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xa4,0xd0,0xbf,0x8f,0x6f,0xb5],
  decoder : function (decoders) {
        return function(st) { return new ByAny() }
  }
}

export class ByAny <A extends Q.Flat> implements Q.Flat {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "ByAny"}
  match <R>(m:{ByAny:R}) : R {return m.ByAny;}
  flatMaxSize():number {return 0;}
  flatEncode() {}

}


