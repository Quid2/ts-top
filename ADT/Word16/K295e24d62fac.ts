import * as Q from '../../core'
import * as Kf92e8339908a from  '../Word/Kf92e8339908a'

export const $Word16:Q.zmFold<Word16> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x29,0x5e,0x24,0xd6,0x2f,0xac],
  decoder : function (decoders) {
        return function(st) { return new Word16(Kf92e8339908a.___.decoder([])(st)) }
  }
}

export class Word16  implements Q.Flat {
  constructor(
    public _0: Kf92e8339908a.Word,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Word16",this._0.toStr(true)].join(' '))}
  match <R>(m:{Word16:(v0:Kf92e8339908a.Word)=>R}) : R {return m.Word16(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


