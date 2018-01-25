import * as Q from '../../core'

export const $NonEmptyList:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<NonEmptyList<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0xbf,0x2d,0x1c,0x86,0xeb,0x20],
  decoder : function (decoders) {
    return function(st) { if (st.zero()) { return new Elem (decoders[0](st)) } else { return new Cons (decoders[0](st),decoders[1](st)) } }
  }
}

export type NonEmptyList <A extends Q.Flat> = Elem <A> | Cons <A>

export class Elem <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  match <R>(m:{Elem:(v0:A)=>R,Cons:(v0:A,v1:NonEmptyList<A>)=>R}) : R {return m.Elem(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this._0.flatEncode(st);}

}

export class Cons <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,
    public _1: NonEmptyList<A>,

  ) { }

  match <R>(m:{Elem:(v0:A)=>R,Cons:(v0:A,v1:NonEmptyList<A>)=>R}) : R {return m.Cons(this._0,this._1);}
  flatMaxSize():number {return 1+this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();this._0.flatEncode(st);this._1.flatEncode(st);}

}


