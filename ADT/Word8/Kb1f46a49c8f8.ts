/** ZM Type:
Word8 ≡   V0
        | V1
        | V2
        | V3
        | V4
        | V5
        | V6
        |
*/

import * as Q from '../.././lib/core'

export const $Word8:Q.zmFold<Word8> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0xb1,0xf4,0x6a,0x49,0xc8,0xf8],
  decoder : function (decoders) {
        return function(st) { return new Word8(st.zmWord8(decoders)); }
  }
}


export class Word8  implements Q.ZM {
    constructor(public value:number) { }
    flatMaxSize() {return Q.EncoderState.szWord8(this.value);}
    flatEncode(st: Q.EncoderState) {st.zmWord8(this.value);}
    toString(): string {return this.toStr(false)}
    toStr(nested?:boolean): string {return this.value.toString();}
    pretty(nested?:boolean): string {return this.toString(); }

}

