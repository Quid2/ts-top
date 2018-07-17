/** ZM Type:
MostSignificantFirst a ≡   MostSignificantFirst a
*/

import * as Q from '../.././lib/core'

export const $MostSignificantFirst:<A extends Q.ZM>(t0:Q.zmFold<A>) => Q.zmFold<MostSignificantFirst<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x74,0xe2,0xb3,0xb8,0x99,0x41],
  decoder : function (decoders) {
        return function(st) { return new MostSignificantFirst(decoders[0](st)) }
  }
}


export class MostSignificantFirst <A extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: A,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["MostSignificantFirst",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["MostSignificantFirst",this._0.pretty(true)].join(' '))}

  match <R>(m:{MostSignificantFirst:(v0:A)=>R}) : R {return m.MostSignificantFirst(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


