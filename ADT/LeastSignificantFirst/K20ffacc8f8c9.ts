import * as Q from '../../core'

export const $LeastSignificantFirst:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<LeastSignificantFirst<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x20,0xff,0xac,0xc8,0xf8,0xc9],
  decoder : function (decoders) {
        return function(st) { return new LeastSignificantFirst(decoders[0](st)) }
  }
}

export class LeastSignificantFirst <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  match <R>(m:{LeastSignificantFirst:(v0:A)=>R}) : R {return m.LeastSignificantFirst(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


