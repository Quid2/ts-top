/** ZM Type:
Array a ≡   A0
          | A1 a (↫ a)
          | A2 a a (↫ a)
          | A3 a a a (↫ a)
          
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
    constructor(public value:A[]) { }
    flatMaxSize() {return Q.EncoderState.szArray(this.value);}
    flatEncode(st: Q.EncoderState) {st.zmArray(this.value);}
    toString(): string {return this.toStr(false)}
    toStr(nested?:boolean): string {return this.value.toString();}
    pretty(nested?:boolean): string {return this.toString(); }

}

