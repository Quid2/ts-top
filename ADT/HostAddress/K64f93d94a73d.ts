/** ZM Type:
HostAddress a ≡   IPAddress a
                | DNSAddress (Kb8cd13187198 K066db52af145)
*/

import * as Q from '../.././lib/core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $HostAddress:<A extends Q.ZM>(t0:Q.zmFold<A>) => Q.zmFold<HostAddress<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x64,0xf9,0x3d,0x94,0xa7,0x3d],
  decoder : function (decoders) {
        return function(st) { if (st.zero()) { return new IPAddress(decoders[0](st)) } else { return new DNSAddress(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)) } }
  }
}


export type HostAddress <A extends Q.ZM> = IPAddress <A> | DNSAddress <A>

export class IPAddress <A extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: A,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["IPAddress",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["IPAddress",this._0.pretty(true)].join(' '))}

  match <R>(m:{IPAddress:(v0:A)=>R,DNSAddress:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R}) : R {return m.IPAddress(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this._0.flatEncode(st);}

}

export class DNSAddress <A extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: Kb8cd13187198.List<K066db52af145.Char>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["DNSAddress",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["DNSAddress",this._0.pretty(true)].join(' '))}

  match <R>(m:{IPAddress:(v0:A)=>R,DNSAddress:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R}) : R {return m.DNSAddress(this._0);}
  flatMaxSize():number {return 1+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();this._0.flatEncode(st);}

}


