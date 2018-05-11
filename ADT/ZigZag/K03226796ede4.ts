/** ZM Type:
ZigZag a ≡   ZigZag a
*/

import * as Q from '../.././lib/core'

export const $ZigZag:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<ZigZag<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x03,0x22,0x67,0x96,0xed,0xe4],
  decoder : function (decoders) {
        return function(st) { return new ZigZag(decoders[0](st)) }
  }
}

export class ZigZag <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["ZigZag",this._0.toStr(true)].join(' '))}
  match <R>(m:{ZigZag:(v0:A)=>R}) : R {return m.ZigZag(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


