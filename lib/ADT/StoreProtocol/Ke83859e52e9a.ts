import * as Q from '../../core'
import * as K9f214799149b from  '../SHAKE128_48/K9f214799149b'

export const $StoreProtocol:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<StoreProtocol<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0xe8,0x38,0x59,0xe5,0x2e,0x9a],
  decoder : function (decoders) {
    return function(st) { if (st.zero()) { return new Save (decoders[0](st)) } else { if (st.zero()) { return new Solve (decoders[0](st)) } else { return new Solved (decoders[0](st),decoders[1](st)) } } }
  }
}

export type StoreProtocol <A extends Q.Flat> = Save <A> | Solve <A> | Solved <A>

export class Save <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  match <R>(m:{Save:(v0:A)=>R,Solve:(v0:K9f214799149b.SHAKE128_48<A>)=>R,Solved:(v0:K9f214799149b.SHAKE128_48<A>,v1:A)=>R}) : R {return m.Save(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this._0.flatEncode(st);}

}

export class Solve <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: K9f214799149b.SHAKE128_48<A>,

  ) { }

  match <R>(m:{Save:(v0:A)=>R,Solve:(v0:K9f214799149b.SHAKE128_48<A>)=>R,Solved:(v0:K9f214799149b.SHAKE128_48<A>,v1:A)=>R}) : R {return m.Solve(this._0);}
  flatMaxSize():number {return 2+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();this._0.flatEncode(st);}

}

export class Solved <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: K9f214799149b.SHAKE128_48<A>,
    public _1: A,

  ) { }

  match <R>(m:{Save:(v0:A)=>R,Solve:(v0:K9f214799149b.SHAKE128_48<A>)=>R,Solved:(v0:K9f214799149b.SHAKE128_48<A>,v1:A)=>R}) : R {return m.Solved(this._0,this._1);}
  flatMaxSize():number {return 2+this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.one();this._0.flatEncode(st);this._1.flatEncode(st);}

}


