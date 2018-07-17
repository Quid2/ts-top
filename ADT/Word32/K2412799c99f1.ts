/** ZM Type:
Word32 ≡   Word32 Kf92e8339908a
*/

import * as Q from '../.././lib/core'
import * as Kf92e8339908a from  '../Word/Kf92e8339908a'

export const $Word32:Q.zmFold<Word32> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x24,0x12,0x79,0x9c,0x99,0xf1],
  decoder : function (decoders) {
        return function(st) { return new Word32(st.zmWord32(decoders)); }
  }
}


export class Word32  implements Q.ZM {
    constructor(public readonly value:number) { }
    flatMaxSize() {return Q.EncoderState.szWord32(this.value);}
    flatEncode(st: Q.EncoderState) {st.zmWord32(this.value);}
    toString(): string {return this.toStr(false)}
    toStr(nested?:boolean): string {return this.value.toString();}
    pretty(nested?:boolean): string {return this.toString(); }

}

