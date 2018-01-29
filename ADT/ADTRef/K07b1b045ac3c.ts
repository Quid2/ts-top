import * as Q from '../../core'
import * as Kb1f46a49c8f8 from  '../Word8/Kb1f46a49c8f8'

export const $ADTRef:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<ADTRef<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x07,0xb1,0xb0,0x45,0xac,0x3c],
  decoder : function (decoders) {
        return function(st) { if (st.zero()) { return new Var(Kb1f46a49c8f8.___.decoder([])(st)) } else { if (st.zero()) { return new Rec() } else { return new Ext(decoders[0](st)) } } }
  }
}

export type ADTRef <A extends Q.Flat> = Var <A> | Rec <A> | Ext <A>

export class Var <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: Kb1f46a49c8f8.Word8,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,"Var"+this._0.toStr(true))}
  match <R>(m:{Var:(v0:Kb1f46a49c8f8.Word8)=>R,Rec:R,Ext:(v0:A)=>R}) : R {return m.Var(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this._0.flatEncode(st);}

}

export class Rec <A extends Q.Flat> implements Q.Flat {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "Rec"}
  match <R>(m:{Var:(v0:Kb1f46a49c8f8.Word8)=>R,Rec:R,Ext:(v0:A)=>R}) : R {return m.Rec;}
  flatMaxSize():number {return 2+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();}

}

export class Ext <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,"Ext"+this._0.toStr(true))}
  match <R>(m:{Var:(v0:Kb1f46a49c8f8.Word8)=>R,Rec:R,Ext:(v0:A)=>R}) : R {return m.Ext(this._0);}
  flatMaxSize():number {return 2+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.one();this._0.flatEncode(st);}

}


