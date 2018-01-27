import * as Q from '../../core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $HostAddress:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<HostAddress<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0x64,0xf9,0x3d,0x94,0xa7,0x3d],
  decoder : function (decoders) {
    const decs = {"IPAddress":[Q.zmConst(decoders[0])(Q.flatDecoder)],"DNSAddress":[Kb8cd13187198.$List(K066db52af145.$Char)(Q.flatDecoder)]} ;
    return function(st) { if (st.zero()) { const d=decs["IPAddress"]; return new IPAddress(d[0](st)) } else { const d=decs["DNSAddress"]; return new DNSAddress(d[0](st)) } }

  }
}

export type HostAddress <A extends Q.Flat> = IPAddress <A> | DNSAddress <A>

export class IPAddress <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,

  ) { }

  match <R>(m:{IPAddress:(v0:A)=>R,DNSAddress:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R}) : R {return m.IPAddress(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this._0.flatEncode(st);}

}

export class DNSAddress <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: Kb8cd13187198.List<K066db52af145.Char>,

  ) { }

  match <R>(m:{IPAddress:(v0:A)=>R,DNSAddress:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R}) : R {return m.DNSAddress(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();this._0.flatEncode(st);}

}


