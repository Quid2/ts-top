/** ZM Type:
Issues a b ≡   Issues {errors :: Kb8cd13187198 a,
                       warnings :: Kb8cd13187198 b
*/

import * as Q from '../.././lib/core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'

export const $Issues:<A extends Q.ZM,B extends Q.ZM>(t0:Q.zmFold<A>,t1:Q.zmFold<B>) => Q.zmFold<Issues<A,B>> = function (t1,t2) {return function (f) {return f(___,[t1(f),t2(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xd0,0x79,0x03,0x79,0xc6,0x31],
  decoder : function (decoders) {
        return function(st) { return new Issues(Kb8cd13187198.___.decoder([decoders[0]])(st),Kb8cd13187198.___.decoder([decoders[1]])(st)) }
  }
}


export class Issues <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {
  constructor(
    public errors: Kb8cd13187198.List<A>,
    public warnings: Kb8cd13187198.List<B>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Issues",this.errors.toStr(true),this.warnings.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Issues",this.errors.pretty(true),this.warnings.pretty(true)].join(' '))}

  match <R>(m:{Issues:(v0:Kb8cd13187198.List<A>,v1:Kb8cd13187198.List<B>)=>R}) : R {return m.Issues(this.errors,this.warnings);}
  flatMaxSize():number {return this.errors.flatMaxSize()+this.warnings.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.errors.flatEncode(st);this.warnings.flatEncode(st);}

}


