import * as Q from '../../core'
import * as K65149ce3b366 from  '../Bit/K65149ce3b366'

export const $Bits23:Q.zmFold<Bits23> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x33,0x88,0x88,0x22,0x23,0x64],
  decoder : function (decoders) {
        return function(st) { return new Bits23(K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st),K65149ce3b366.___.decoder([])(st)) }
  }
}

export class Bits23  implements Q.Flat {
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
    public bit11: K65149ce3b366.Bit,
    public bit12: K65149ce3b366.Bit,
    public bit13: K65149ce3b366.Bit,
    public bit14: K65149ce3b366.Bit,
    public bit15: K65149ce3b366.Bit,
    public bit16: K65149ce3b366.Bit,
    public bit17: K65149ce3b366.Bit,
    public bit18: K65149ce3b366.Bit,
    public bit19: K65149ce3b366.Bit,
    public bit20: K65149ce3b366.Bit,
    public bit21: K65149ce3b366.Bit,
    public bit22: K65149ce3b366.Bit,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Bits23",this.bit0.toStr(true),this.bit1.toStr(true),this.bit2.toStr(true),this.bit3.toStr(true),this.bit4.toStr(true),this.bit5.toStr(true),this.bit6.toStr(true),this.bit7.toStr(true),this.bit8.toStr(true),this.bit9.toStr(true),this.bit10.toStr(true),this.bit11.toStr(true),this.bit12.toStr(true),this.bit13.toStr(true),this.bit14.toStr(true),this.bit15.toStr(true),this.bit16.toStr(true),this.bit17.toStr(true),this.bit18.toStr(true),this.bit19.toStr(true),this.bit20.toStr(true),this.bit21.toStr(true),this.bit22.toStr(true)].join(' '))}
  match <R>(m:{Bits23:(v0:K65149ce3b366.Bit,v1:K65149ce3b366.Bit,v2:K65149ce3b366.Bit,v3:K65149ce3b366.Bit,v4:K65149ce3b366.Bit,v5:K65149ce3b366.Bit,v6:K65149ce3b366.Bit,v7:K65149ce3b366.Bit,v8:K65149ce3b366.Bit,v9:K65149ce3b366.Bit,v10:K65149ce3b366.Bit,v11:K65149ce3b366.Bit,v12:K65149ce3b366.Bit,v13:K65149ce3b366.Bit,v14:K65149ce3b366.Bit,v15:K65149ce3b366.Bit,v16:K65149ce3b366.Bit,v17:K65149ce3b366.Bit,v18:K65149ce3b366.Bit,v19:K65149ce3b366.Bit,v20:K65149ce3b366.Bit,v21:K65149ce3b366.Bit,v22:K65149ce3b366.Bit)=>R}) : R {return m.Bits23(this.bit0,this.bit1,this.bit2,this.bit3,this.bit4,this.bit5,this.bit6,this.bit7,this.bit8,this.bit9,this.bit10,this.bit11,this.bit12,this.bit13,this.bit14,this.bit15,this.bit16,this.bit17,this.bit18,this.bit19,this.bit20,this.bit21,this.bit22);}
  flatMaxSize():number {return this.bit0.flatMaxSize()+this.bit1.flatMaxSize()+this.bit2.flatMaxSize()+this.bit3.flatMaxSize()+this.bit4.flatMaxSize()+this.bit5.flatMaxSize()+this.bit6.flatMaxSize()+this.bit7.flatMaxSize()+this.bit8.flatMaxSize()+this.bit9.flatMaxSize()+this.bit10.flatMaxSize()+this.bit11.flatMaxSize()+this.bit12.flatMaxSize()+this.bit13.flatMaxSize()+this.bit14.flatMaxSize()+this.bit15.flatMaxSize()+this.bit16.flatMaxSize()+this.bit17.flatMaxSize()+this.bit18.flatMaxSize()+this.bit19.flatMaxSize()+this.bit20.flatMaxSize()+this.bit21.flatMaxSize()+this.bit22.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.bit0.flatEncode(st);this.bit1.flatEncode(st);this.bit2.flatEncode(st);this.bit3.flatEncode(st);this.bit4.flatEncode(st);this.bit5.flatEncode(st);this.bit6.flatEncode(st);this.bit7.flatEncode(st);this.bit8.flatEncode(st);this.bit9.flatEncode(st);this.bit10.flatEncode(st);this.bit11.flatEncode(st);this.bit12.flatEncode(st);this.bit13.flatEncode(st);this.bit14.flatEncode(st);this.bit15.flatEncode(st);this.bit16.flatEncode(st);this.bit17.flatEncode(st);this.bit18.flatEncode(st);this.bit19.flatEncode(st);this.bit20.flatEncode(st);this.bit21.flatEncode(st);this.bit22.flatEncode(st);}

}


