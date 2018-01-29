import * as Q from '../../core'

export const $Tuple2:<A extends Q.Flat,B extends Q.Flat>(t0:Q.zmFold<A>,t1:Q.zmFold<B>) => Q.zmFold<Tuple2<A,B>> = function (t1,t2) {return function (f) {return f(___,[t1(f),t2(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xa5,0x58,0x3b,0xf3,0xad,0x34],
  decoder : function (decoders) {
        return function(st) { return new Tuple2(decoders[0](st),decoders[1](st)) }
  }
}

export class Tuple2 <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: A,
    public _1: B,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,"Tuple2"+this._0.toStr(true)+this._1.toStr(true))}
  match <R>(m:{Tuple2:(v0:A,v1:B)=>R}) : R {return m.Tuple2(this._0,this._1);}
  flatMaxSize():number {return this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);this._1.flatEncode(st);}

}


