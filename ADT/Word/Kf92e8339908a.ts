import * as Q from '../../core'
import * as K20ffacc8f8c9 from  '../LeastSignificantFirst/K20ffacc8f8c9'
import * as Kbf2d1c86eb20 from  '../NonEmptyList/Kbf2d1c86eb20'
import * as K74e2b3b89941 from  '../MostSignificantFirst/K74e2b3b89941'
import * as Kf4c946334a7e from  '../Word7/Kf4c946334a7e'

export const $Word:Q.zmFold<Word> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0xf9,0x2e,0x83,0x39,0x90,0x8a],
  decoder : function (decoders) {
    return function(st) { return new Word (decoders[0](st)) }
  }
}

export class Word  implements Q.Flat {
  constructor(
    public _0: K20ffacc8f8c9.LeastSignificantFirst<Kbf2d1c86eb20.NonEmptyList<K74e2b3b89941.MostSignificantFirst<Kf4c946334a7e.Word7>>>,

  ) { }

  match <R>(m:{Word:(v0:K20ffacc8f8c9.LeastSignificantFirst<Kbf2d1c86eb20.NonEmptyList<K74e2b3b89941.MostSignificantFirst<Kf4c946334a7e.Word7>>>)=>R}) : R {return m.Word(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


