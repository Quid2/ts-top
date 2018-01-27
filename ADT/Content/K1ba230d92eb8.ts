import * as Q from '../../core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $Content:Q.zmFold<Content> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x1b,0xa2,0x30,0xd9,0x2e,0xb8],
  decoder : function (decoders) {
    const decs = {"TextMsg":[Kb8cd13187198.$List(K066db52af145.$Char)(Q.flatDecoder)]} ;
    return function(st) { if (st.zero()) { const d=decs["TextMsg"]; return new TextMsg(d[0](st)) } else { return new Join() } }

  }
}

export type Content  = TextMsg  | Join 

export class TextMsg  implements Q.Flat {
  constructor(
    public _0: Kb8cd13187198.List<K066db52af145.Char>,

  ) { }

  match <R>(m:{TextMsg:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,Join:R}) : R {return m.TextMsg(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this._0.flatEncode(st);}

}

export class Join  implements Q.Flat {

  match <R>(m:{TextMsg:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,Join:R}) : R {return m.Join;}
  flatMaxSize():number {return 1+0;}
  flatEncode(st:Q.EncoderState) {st.one();}

}


