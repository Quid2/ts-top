/** ZM Type:
Solve a ≡   Solve a
*/

import * as Q from '../.././lib/core'

export const $Solve:<A extends Q.ZM>(t0:Q.zmFold<A>) => Q.zmFold<Solve<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x3e,0xcc,0x38,0x40,0x6f,0x4b],
  decoder : function (decoders) {
        return function(st) { return new Solve(decoders[0](st)) }
  }
}


export class Solve <A extends Q.ZM> implements Q.ZM {
  constructor(
    public _0: A,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Solve",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Solve",this._0.pretty(true)].join(' '))}

  match <R>(m:{Solve:(v0:A)=>R}) : R {return m.Solve(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


