import * as Q from '../../core'
import * as K03226796ede4 from  '../ZigZag/K03226796ede4'
import * as K50d018f7593a from  '../Word64/K50d018f7593a'

export const $Int64:Q.zmFold<Int64> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0xfb,0x94,0xcb,0x4d,0x4e,0xde],
  decoder : function (decoders) {
    return function(st) { return new Int64 (decoders[0](st)) }
  }
}

export class Int64  implements Q.Flat {
  constructor(
    public _0: K03226796ede4.ZigZag<K50d018f7593a.Word64>,

  ) { }

  match <R>(m:{Int64:(v0:K03226796ede4.ZigZag<K50d018f7593a.Word64>)=>R}) : R {return m.Int64(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}

