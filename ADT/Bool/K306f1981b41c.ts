import * as Q from '../../core'

export const $Bool:Q.zmFold<Bool> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x30,0x6f,0x19,0x81,0xb4,0x1c],
  decoder : function (decoders) {
    const decs = {} ;
    return function(st) { if (st.zero()) { return new False() } else { return new True() } }

  }
}

export type Bool  = False  | True 

export class False  implements Q.Flat {

  match <R>(m:{False:R,True:R}) : R {return m.False;}
  flatMaxSize():number {return 1+0;}
  flatEncode(st:Q.EncoderState) {st.zero();}

}

export class True  implements Q.Flat {

  match <R>(m:{False:R,True:R}) : R {return m.True;}
  flatMaxSize():number {return 1+0;}
  flatEncode(st:Q.EncoderState) {st.one();}

}


