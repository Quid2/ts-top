import * as Q from '../../core'

export const $MostSignificantFirst:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<MostSignificantFirst<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0x74,0xe2,0xb3,0xb8,0x99,0x41],
  decoder : function (decoders) {
    const decs = {"MostSignificantFirst":[Q.zmConst(decoders[0])(Q.flatDecoder)]} ;
    return function(st) { const d=decs["MostSignificantFirst"]; return new MostSignificantFirst(d[0](st)) }

  }
}

export class MostSignificantFirst <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  match <R>(m:{MostSignificantFirst:(v0:A)=>R}) : R {return m.MostSignificantFirst(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


