import * as Q from '../../core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $Subject:Q.zmFold<Subject> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0xfc,0xed,0x5b,0x0f,0x3c,0x1f],
  decoder : function (decoders) {
    return function(st) { return new Subject (decoders[0](st)) }
  }
}

export class Subject  implements Q.Flat {
  constructor(
    public _0: Kb8cd13187198.List<Kb8cd13187198.List<K066db52af145.Char>>,

  ) { }

  match <R>(m:{Subject:(v0:Kb8cd13187198.List<Kb8cd13187198.List<K066db52af145.Char>>)=>R}) : R {return m.Subject(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


