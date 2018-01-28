import * as Q from '../../core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $ChannelSelectionResult:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<ChannelSelectionResult<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xc6,0x62,0x7a,0x31,0x7d,0xbc],
  decoder : function (decoders) {
        return function(st) { if (st.zero()) { return new Success() } else { if (st.zero()) { return new Failure(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)) } else { return new RetryAt(decoders[0](st)) } } }
  }
}

export type ChannelSelectionResult <A extends Q.Flat> = Success <A> | Failure <A> | RetryAt <A>

export class Success <A extends Q.Flat> implements Q.Flat {

  match <R>(m:{Success:R,Failure:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,RetryAt:(v0:A)=>R}) : R {return m.Success;}
  flatMaxSize():number {return 1+0;}
  flatEncode(st:Q.EncoderState) {st.zero();}

}

export class Failure <A extends Q.Flat> implements Q.Flat {
  constructor(
    public reason: Kb8cd13187198.List<K066db52af145.Char>,

  ) { }

  match <R>(m:{Success:R,Failure:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,RetryAt:(v0:A)=>R}) : R {return m.Failure(this.reason);}
  flatMaxSize():number {return 2+this.reason.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();this.reason.flatEncode(st);}

}

export class RetryAt <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  match <R>(m:{Success:R,Failure:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,RetryAt:(v0:A)=>R}) : R {return m.RetryAt(this._0);}
  flatMaxSize():number {return 2+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.one();this._0.flatEncode(st);}

}


