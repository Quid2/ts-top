/** ZM Type:
Word64 ≡   Word64 Kf92e8339908a
*/

import * as Q from '../.././lib/core'
import * as Kf92e8339908a from  '../Word/Kf92e8339908a'

export const $Word64:Q.zmFold<Word64> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x50,0xd0,0x18,0xf7,0x59,0x3a],
  decoder : function (decoders) {
        return function(st) { return new Word64(Kf92e8339908a.___.decoder([])(st)) }
  }
}


export class Word64  implements Q.ZM {
  constructor(
    public readonly _0: Kf92e8339908a.Word,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Word64",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Word64",this._0.pretty(true)].join(' '))}

  match <R>(m:{Word64:(v0:Kf92e8339908a.Word)=>R}) : R {return m.Word64(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


