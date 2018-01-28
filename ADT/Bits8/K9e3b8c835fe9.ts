import * as Q from '../../core'
import * as K65149ce3b366 from  '../Bit/K65149ce3b366'

export const $Bits8:Q.zmFold<Bits8> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x9e,0x3b,0x8c,0x83,0x5f,0xe9],
  decoder : function (decoders) {
        return function(st) { return new Bits8(K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st)) }
  }
}

export class Bits8  implements Q.Flat {
  constructor(
    public bit0: K65149ce3b366.Bit,
    public bit1: K65149ce3b366.Bit,
    public bit2: K65149ce3b366.Bit,
    public bit3: K65149ce3b366.Bit,
    public bit4: K65149ce3b366.Bit,
    public bit5: K65149ce3b366.Bit,
    public bit6: K65149ce3b366.Bit,
    public bit7: K65149ce3b366.Bit,

  ) { }

  match <R>(m:{Bits8:(v0:K65149ce3b366.Bit,v1:K65149ce3b366.Bit,v2:K65149ce3b366.Bit,v3:K65149ce3b366.Bit,v4:K65149ce3b366.Bit,v5:K65149ce3b366.Bit,v6:K65149ce3b366.Bit,v7:K65149ce3b366.Bit)=>R}) : R {return m.Bits8(this.bit0,this.bit1,this.bit2,this.bit3,this.bit4,this.bit5,this.bit6,this.bit7);}
  flatMaxSize():number {return this.bit0.flatMaxSize()+this.bit1.flatMaxSize()+this.bit2.flatMaxSize()+this.bit3.flatMaxSize()+this.bit4.flatMaxSize()+this.bit5.flatMaxSize()+this.bit6.flatMaxSize()+this.bit7.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.bit0.flatEncode(st);this.bit1.flatEncode(st);this.bit2.flatEncode(st);this.bit3.flatEncode(st);this.bit4.flatEncode(st);this.bit5.flatEncode(st);this.bit6.flatEncode(st);this.bit7.flatEncode(st);}

}


