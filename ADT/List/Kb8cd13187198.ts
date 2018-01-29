import * as Q from '../../core'

export const $List:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<List<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xb8,0xcd,0x13,0x18,0x71,0x98],
  decoder : function (decoders) {
        return function(st) { if (st.zero()) { return new Nil() } else { return new Cons(decoders[0](st),___.decoder([decoders[0]])(st)) } }
  }
}

export type List <A extends Q.Flat> = Nil <A> | Cons <A>

export class Nil <A extends Q.Flat> implements Q.Flat {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "Nil"}
  match <R>(m:{Nil:R,Cons:(v0:A,v1:List<A>)=>R}) : R {return m.Nil;}
  flatMaxSize():number {return 1+0;}
  flatEncode(st:Q.EncoderState) {st.zero();}

}

export class Cons <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,
    public _1: List<A>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,"Cons"+this._0.toStr(true)+this._1.toStr(true))}
  match <R>(m:{Nil:R,Cons:(v0:A,v1:List<A>)=>R}) : R {return m.Cons(this._0,this._1);}
  flatMaxSize():number {return 1+this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();this._0.flatEncode(st);this._1.flatEncode(st);}

}


