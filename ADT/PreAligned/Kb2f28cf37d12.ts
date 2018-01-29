import * as Q from '../../core'
import * as Kae1dfeece189 from  '../Filler/Kae1dfeece189'

export const $PreAligned:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<PreAligned<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xb2,0xf2,0x8c,0xf3,0x7d,0x12],
  decoder : function (decoders) {
        return function(st) { return new PreAligned(Kae1dfeece189.___.decoder([])(st),decoders[0](st)) }
  }
}

export class PreAligned <A extends Q.Flat> implements Q.Flat {
  constructor(
    public preFiller: Kae1dfeece189.Filler,
    public preValue: A,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["PreAligned",this.preFiller.toStr(true),this.preValue.toStr(true)].join(' '))}
  match <R>(m:{PreAligned:(v0:Kae1dfeece189.Filler,v1:A)=>R}) : R {return m.PreAligned(this.preFiller,this.preValue);}
  flatMaxSize():number {return this.preFiller.flatMaxSize()+this.preValue.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.preFiller.flatEncode(st);this.preValue.flatEncode(st);}

}


