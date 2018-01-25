import * as Q from '../../core'
import * as K3878b3580fc5 from  '../UnicodeLetter/K3878b3580fc5'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K33445520c45a from  '../UnicodeLetterOrNumberOrLine/K33445520c45a'
import * as Kbf2d1c86eb20 from  '../NonEmptyList/Kbf2d1c86eb20'
import * as K801030ef543c from  '../UnicodeSymbol/K801030ef543c'

export const $Identifier:Q.zmFold<Identifier> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0xdc,0x26,0xe9,0xd9,0x00,0x47],
  decoder : function (decoders) {
    return function(st) { if (st.zero()) { return new Name (decoders[0](st),decoders[1](st)) } else { return new Symbol (decoders[0](st)) } }
  }
}

export type Identifier  = Name  | Symbol 

export class Name  implements Q.Flat {
  constructor(
    public _0: K3878b3580fc5.UnicodeLetter,
    public _1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>,

  ) { }

  match <R>(m:{Name:(v0:K3878b3580fc5.UnicodeLetter,v1:Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>)=>R,Symbol:(v0:Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>)=>R}) : R {return m.Name(this._0,this._1);}
  flatMaxSize():number {return 1+this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this._0.flatEncode(st);this._1.flatEncode(st);}

}

export class Symbol  implements Q.Flat {
  constructor(
    public _0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>,

  ) { }

  match <R>(m:{Name:(v0:K3878b3580fc5.UnicodeLetter,v1:Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>)=>R,Symbol:(v0:Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>)=>R}) : R {return m.Symbol(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();this._0.flatEncode(st);}

}


