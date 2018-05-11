/** ZM Type:
Validate a ≡   Validate a
*/

import * as Q from '../.././lib/core'

export const $Validate:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<Validate<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xff,0xe0,0x94,0x0f,0x8f,0xf2],
  decoder : function (decoders) {
        return function(st) { return new Validate(decoders[0](st)) }
  }
}

export class Validate <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Validate",this._0.toStr(true)].join(' '))}
  match <R>(m:{Validate:(v0:A)=>R}) : R {return m.Validate(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


