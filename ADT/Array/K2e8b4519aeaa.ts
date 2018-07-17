/** ZM Type:
Array a ≡   A0
          | A1 a (↫ a)
          | A2 a a (↫ a)
          | A3 a a a (↫ a)
          | A4 a a a a (↫ a)
          | A5 a a a a a (↫ a)
          | A6 a a a a a a (↫ a)
          | A7 a a a a a a a (↫ a)
          | A8 a a a a a a a a (↫ a)
          | A9 a a a a a a a a a (↫ a)
          | A10 a a a a a a a a a a (↫ a)
          | A11 a a a a a a a a a a a (↫ a)
          | A12 a a a a a a a a a a a a (↫ a)
          | A13 a a a a a a a a a a a a a (↫ a)
          | A14 a a a a a a a a a a a a a a (↫ a)
          | A15 a a a a a a a a a a a a a a a (↫ a)
          | A16 a a a a a a a a a a a a a a a a (↫ a)
          | A17 a a a a a a a a a a a a a a a a a (↫ a)
          | A18 a a a a a a a a a a a a a a a a a a (↫ a)
          | A19 a a a a a a a a a a a a a a a a a a a (↫ a)
          | A20 a a a a a a a a a a a a a a a a a a a a (↫ a)
          | A21 a a a a a a a a a a a a a a a a a a a a a (↫ a)
          | A22 a a a a a a a a a a a a a a a a a a a a a a (↫ a)
    
*/

import * as Q from '../.././lib/core'

export const $Array:<A extends Q.ZM>(t0:Q.zmFold<A>) => Q.zmFold<Array<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x2e,0x8b,0x45,0x19,0xae,0xaa],
  decoder : function (decoders) {
        return function(st) { return new Array(st.zmArray(decoders)); }
  }
}


export class Array <A extends Q.ZM> implements Q.ZM {
    constructor(public readonly value:A[]) { }
    flatMaxSize() {return Q.EncoderState.szArray(this.value);}
    flatEncode(st: Q.EncoderState) {st.zmArray(this.value);}
    toString(): string {return this.toStr(false)}
    toStr(nested?:boolean): string {return this.value.toString();}
    pretty(nested?:boolean): string {return this.toString(); }

}

