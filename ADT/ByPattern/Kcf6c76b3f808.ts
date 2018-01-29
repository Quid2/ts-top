import * as Q from '../../core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as Kc23b20389114 from  '../Match/Kc23b20389114'
import * as K65149ce3b366 from  '../Bit/K65149ce3b366'

export const $ByPattern:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<ByPattern<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xcf,0x6c,0x76,0xb3,0xf8,0x08],
  decoder : function (decoders) {
        return function(st) { return new ByPattern(Kb8cd13187198.___.decoder([Kc23b20389114.___.decoder([Kb8cd13187198.___.decoder([K65149ce3b366.___.decoder([])])])])(st)) }
  }
}

export class ByPattern <A extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: Kb8cd13187198.List<Kc23b20389114.Match<Kb8cd13187198.List<K65149ce3b366.Bit>>>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,"ByPattern"+this._0.toStr(true))}
  match <R>(m:{ByPattern:(v0:Kb8cd13187198.List<Kc23b20389114.Match<Kb8cd13187198.List<K65149ce3b366.Bit>>>)=>R}) : R {return m.ByPattern(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


