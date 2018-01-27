import * as Q from '../../core'

export const $Bit:Q.zmFold<Bit> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x65,0x14,0x9c,0xe3,0xb3,0x66],
  decoder : function (decoders) {
    const decs = {} ;
    return function(st) { if (st.zero()) { return new V0() } else { return new V1() } }

  }
}

export type Bit  = V0  | V1 

export class V0  implements Q.Flat {

  match <R>(m:{V0:R,V1:R}) : R {return m.V0;}
  flatMaxSize():number {return 1+0;}
  flatEncode(st:Q.EncoderState) {st.zero();}

}

export class V1  implements Q.Flat {

  match <R>(m:{V0:R,V1:R}) : R {return m.V1;}
  flatMaxSize():number {return 1+0;}
  flatEncode(st:Q.EncoderState) {st.one();}

}


