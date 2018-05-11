/** ZM Type:
Type a ≡   TypeCon a
         | TypeApp (↫ a) (↫ a)
*/

import * as Q from '../.././lib/core'

export const $Type:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<Type<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x70,0x28,0xaa,0x55,0x6e,0xbc],
  decoder : function (decoders) {
        return function(st) { if (st.zero()) { return new TypeCon(decoders[0](st)) } else { return new TypeApp(___.decoder([decoders[0]])(st),___.decoder([decoders[0]])(st)) } }
  }
}

export type Type <A extends Q.Flat> = TypeCon <A> | TypeApp <A>

export class TypeCon <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["TypeCon",this._0.toStr(true)].join(' '))}
  match <R>(m:{TypeCon:(v0:A)=>R,TypeApp:(v0:Type<A>,v1:Type<A>)=>R}) : R {return m.TypeCon(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this._0.flatEncode(st);}

}

export class TypeApp <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: Type<A>,
    public _1: Type<A>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["TypeApp",this._0.toStr(true),this._1.toStr(true)].join(' '))}
  match <R>(m:{TypeCon:(v0:A)=>R,TypeApp:(v0:Type<A>,v1:Type<A>)=>R}) : R {return m.TypeApp(this._0,this._1);}
  flatMaxSize():number {return 1+this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();this._0.flatEncode(st);this._1.flatEncode(st);}

}


