/** ZM Type:
UnicodeLetterOrNumberOrLine ≡   UnicodeLetterOrNumberOrLine K066db52af145
*/

import * as Q from '../.././lib/core'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $UnicodeLetterOrNumberOrLine:Q.zmFold<UnicodeLetterOrNumberOrLine> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x33,0x44,0x55,0x20,0xc4,0x5a],
  decoder : function (decoders) {
        return function(st) { return new UnicodeLetterOrNumberOrLine(K066db52af145.___.decoder([])(st)) }
  }
}


export class UnicodeLetterOrNumberOrLine  implements Q.ZM {
  constructor(
    public _0: K066db52af145.Char,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["UnicodeLetterOrNumberOrLine",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["UnicodeLetterOrNumberOrLine",this._0.pretty(true)].join(' '))}

  match <R>(m:{UnicodeLetterOrNumberOrLine:(v0:K066db52af145.Char)=>R}) : R {return m.UnicodeLetterOrNumberOrLine(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


