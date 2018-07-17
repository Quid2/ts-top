/** ZM Type:
Position ≡   Position {row :: K2412799c99f1,
                       column :: K2412799c99f1}
*/

import * as Q from '../.././lib/core'
import * as K2412799c99f1 from  '../Word32/K2412799c99f1'

export const $Position:Q.zmFold<Position> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x2f,0xf0,0x04,0x17,0xfe,0x9d],
  decoder : function (decoders) {
        return function(st) { return new Position(K2412799c99f1.___.decoder([])(st),K2412799c99f1.___.decoder([])(st)) }
  }
}


export class Position  implements Q.ZM {
  constructor(
    public readonly row: K2412799c99f1.Word32,
    public readonly column: K2412799c99f1.Word32,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Position",this.row.toStr(true),this.column.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Position",this.row.pretty(true),this.column.pretty(true)].join(' '))}

  match <R>(m:{Position:(v0:K2412799c99f1.Word32,v1:K2412799c99f1.Word32)=>R}) : R {return m.Position(this.row,this.column);}
  flatMaxSize():number {return this.row.flatMaxSize()+this.column.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.row.flatEncode(st);this.column.flatEncode(st);}

}


