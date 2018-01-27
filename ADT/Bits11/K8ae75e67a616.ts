import * as Q from '../../core'
import * as K65149ce3b366 from  '../Bit/K65149ce3b366'

export const $Bits11:Q.zmFold<Bits11> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x8a,0xe7,0x5e,0x67,0xa6,0x16],
  decoder : function (decoders) {
    const decs = {"Bits11":[K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder),K65149ce3b366.$Bit(Q.flatDecoder)]} ;
    return function(st) { const d=decs["Bits11"]; return new Bits11(d[0](st),d[1](st),d[2](st),d[3](st),d[4](st),d[5](st),d[6](st),d[7](st),d[8](st),d[9](st),d[10](st)) }

  }
}

export class Bits11  implements Q.Flat {
  constructor(
    public bit0: K65149ce3b366.Bit,
    public bit1: K65149ce3b366.Bit,
    public bit2: K65149ce3b366.Bit,
    public bit3: K65149ce3b366.Bit,
    public bit4: K65149ce3b366.Bit,
    public bit5: K65149ce3b366.Bit,
    public bit6: K65149ce3b366.Bit,
    public bit7: K65149ce3b366.Bit,
    public bit8: K65149ce3b366.Bit,
    public bit9: K65149ce3b366.Bit,
    public bit10: K65149ce3b366.Bit,

  ) { }

  match <R>(m:{Bits11:(v0:K65149ce3b366.Bit,v1:K65149ce3b366.Bit,v2:K65149ce3b366.Bit,v3:K65149ce3b366.Bit,v4:K65149ce3b366.Bit,v5:K65149ce3b366.Bit,v6:K65149ce3b366.Bit,v7:K65149ce3b366.Bit,v8:K65149ce3b366.Bit,v9:K65149ce3b366.Bit,v10:K65149ce3b366.Bit)=>R}) : R {return m.Bits11(this.bit0,this.bit1,this.bit2,this.bit3,this.bit4,this.bit5,this.bit6,this.bit7,this.bit8,this.bit9,this.bit10);}
  flatMaxSize():number {return this.bit0.flatMaxSize()+this.bit1.flatMaxSize()+this.bit2.flatMaxSize()+this.bit3.flatMaxSize()+this.bit4.flatMaxSize()+this.bit5.flatMaxSize()+this.bit6.flatMaxSize()+this.bit7.flatMaxSize()+this.bit8.flatMaxSize()+this.bit9.flatMaxSize()+this.bit10.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.bit0.flatEncode(st);this.bit1.flatEncode(st);this.bit2.flatEncode(st);this.bit3.flatEncode(st);this.bit4.flatEncode(st);this.bit5.flatEncode(st);this.bit6.flatEncode(st);this.bit7.flatEncode(st);this.bit8.flatEncode(st);this.bit9.flatEncode(st);this.bit10.flatEncode(st);}

}


