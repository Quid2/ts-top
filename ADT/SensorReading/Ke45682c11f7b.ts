import * as Q from '../../core'

export const $SensorReading:<A extends Q.Flat,B extends Q.Flat>(t0:Q.zmFold<A>,t1:Q.zmFold<B>) => Q.zmFold<SensorReading<A,B>> = function (t1,t2) {return function (f) {return f(___,[t1(f),t2(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0xe4,0x56,0x82,0xc1,0x1f,0x7b],
  decoder : function (decoders) {
    const decs = {"SensorReading":[Q.zmConst(decoders[0])(Q.flatDecoder),Q.zmConst(decoders[1])(Q.flatDecoder)]} ;
    return function(st) { const d=decs["SensorReading"]; return new SensorReading(d[0](st),d[1](st)) }

  }
}

export class SensorReading <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {
  constructor(
    public reading: A,
    public location: B,

  ) { }

  match <R>(m:{SensorReading:(v0:A,v1:B)=>R}) : R {return m.SensorReading(this.reading,this.location);}
  flatMaxSize():number {return this.reading.flatMaxSize()+this.location.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.reading.flatEncode(st);this.location.flatEncode(st);}

}


