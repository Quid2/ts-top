/** ZM Type:
Function a b c ≡   Call a
                 | Reply b c
*/

import * as Q from '../.././lib/core'

export const $Function:<A extends Q.ZM,B extends Q.ZM,C extends Q.ZM>(t0:Q.zmFold<A>,t1:Q.zmFold<B>,t2:Q.zmFold<C>) => Q.zmFold<Function<A,B,C>> = function (t1,t2,t3) {return function (f) {return f(___,[t1(f),t2(f),t3(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x56,0x17,0x9b,0xc1,0x1d,0xc1],
  decoder : function (decoders) {
        return function(st) { if (st.zero()) { return new Call(decoders[0](st)) } else { return new Reply(decoders[1](st),decoders[2](st)) } }
  }
}


export type Function <A extends Q.ZM,B extends Q.ZM,C extends Q.ZM> = Call <A,B,C> | Reply <A,B,C>

export class Call <A extends Q.ZM,B extends Q.ZM,C extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: A,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Call",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Call",this._0.pretty(true)].join(' '))}

  match <R>(m:{Call:(v0:A)=>R,Reply:(v0:B,v1:C)=>R}) : R {return m.Call(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this._0.flatEncode(st);}

}

export class Reply <A extends Q.ZM,B extends Q.ZM,C extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: B,
    public readonly _1: C,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Reply",this._0.toStr(true),this._1.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Reply",this._0.pretty(true),this._1.pretty(true)].join(' '))}

  match <R>(m:{Call:(v0:A)=>R,Reply:(v0:B,v1:C)=>R}) : R {return m.Reply(this._0,this._1);}
  flatMaxSize():number {return 1+this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();this._0.flatEncode(st);this._1.flatEncode(st);}

}


