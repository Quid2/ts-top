/** ZM Type:
Filler ≡   FillerBit ↫
         | FillerEnd
*/

import * as Q from '../.././lib/core'

export const $Filler:Q.zmFold<Filler> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0xae,0x1d,0xfe,0xec,0xe1,0x89],
  decoder : function (decoders) {
        return function(st) { return new Filler(st.zmFiller(decoders)); }
  }
}


export class Filler  implements Q.ZM {
    constructor(public readonly value:string) { }
    flatMaxSize() {return Q.EncoderState.szFiller(this.value);}
    flatEncode(st: Q.EncoderState) {st.zmFiller(this.value);}
    toString(): string {return this.toStr(false)}
    toStr(nested?:boolean): string {return this.value.toString();}
    pretty(nested?:boolean): string {return this.toString(); }

}

