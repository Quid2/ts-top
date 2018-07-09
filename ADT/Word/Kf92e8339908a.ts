/** ZM Type:
Word ≡   Word (K20ffacc8f8c9 (Kbf2d1c86eb20 (K74e2b3b89941 Kf4c946334a7e)))
*/

import * as Q from '../.././lib/core'
import * as K20ffacc8f8c9 from  '../LeastSignificantFirst/K20ffacc8f8c9'
import * as Kbf2d1c86eb20 from  '../NonEmptyList/Kbf2d1c86eb20'
import * as K74e2b3b89941 from  '../MostSignificantFirst/K74e2b3b89941'
import * as Kf4c946334a7e from  '../Word7/Kf4c946334a7e'

export const $Word:Q.zmFold<Word> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0xf9,0x2e,0x83,0x39,0x90,0x8a],
  decoder : function (decoders) {
        return function(st) { return new Word(K20ffacc8f8c9.___.decoder([Kbf2d1c86eb20.___.decoder([K74e2b3b89941.___.decoder([Kf4c946334a7e.___.decoder([])])])])(st)) }
  }
}


export class Word  implements Q.ZM {
  constructor(
    public _0: K20ffacc8f8c9.LeastSignificantFirst<Kbf2d1c86eb20.NonEmptyList<K74e2b3b89941.MostSignificantFirst<Kf4c946334a7e.Word7>>>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Word",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Word",this._0.pretty(true)].join(' '))}

  match <R>(m:{Word:(v0:K20ffacc8f8c9.LeastSignificantFirst<Kbf2d1c86eb20.NonEmptyList<K74e2b3b89941.MostSignificantFirst<Kf4c946334a7e.Word7>>>)=>R}) : R {return m.Word(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


