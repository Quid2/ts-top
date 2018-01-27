import * as Q from '../../core'

export const $Maybe:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<Maybe<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0xda,0x68,0x36,0x77,0x8f,0xd4],
  decoder : function (decoders) {
    const decs = {"Just":[Q.zmConst(decoders[0])(Q.flatDecoder)]} ;
    return function(st) { if (st.zero()) { return new Nothing() } else { const d=decs["Just"]; return new Just(d[0](st)) } }

  }
}

export type Maybe <A extends Q.Flat> = Nothing <A> | Just <A>

export class Nothing <A extends Q.Flat> implements Q.Flat {

  match <R>(m:{Nothing:R,Just:(v0:A)=>R}) : R {return m.Nothing;}
  flatMaxSize():number {return 1+0;}
  flatEncode(st:Q.EncoderState) {st.zero();}

}

export class Just <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  match <R>(m:{Nothing:R,Just:(v0:A)=>R}) : R {return m.Just(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();this._0.flatEncode(st);}

}


