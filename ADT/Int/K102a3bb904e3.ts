import * as Q from '../../core'
import * as K03226796ede4 from  '../ZigZag/K03226796ede4'
import * as Kf92e8339908a from  '../Word/Kf92e8339908a'

export const $Int:Q.zmFold<Int> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x10,0x2a,0x3b,0xb9,0x04,0xe3],
  decoder : function (decoders) {
        return function(st) { return new Int(K03226796ede4.___.decoder([Kf92e8339908a.___.decoder([])])(st)) }
  }
}

export class Int  implements Q.Flat {
  constructor(
    public _0: K03226796ede4.ZigZag<Kf92e8339908a.Word>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Int",this._0.toStr(true)].join(' '))}
  match <R>(m:{Int:(v0:K03226796ede4.ZigZag<Kf92e8339908a.Word>)=>R}) : R {return m.Int(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


