/** ZM Type:
Word7 ≡   V0
        | V1
        | V2
        | V3
        | V4
        | V5
        | V6
        |
*/

import * as Q from '../.././lib/core'

export const $Word7:Q.zmFold<Word7> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0xf4,0xc9,0x46,0x33,0x4a,0x7e],
  decoder : function (decoders) {
        return function(st) { return new Word7(st.zmWord7(decoders)); }
  }
}


export class Word7  implements Q.ZM {
    constructor(public value:number) { }
    flatMaxSize() {return Q.EncoderState.szWord7(this.value);}
    flatEncode(st: Q.EncoderState) {st.zmWord7(this.value);}
    toString(): string {return this.toStr(false)}
    toStr(nested?:boolean): string {return this.value.toString();}
    pretty(nested?:boolean): string {return this.toString(); }

}

