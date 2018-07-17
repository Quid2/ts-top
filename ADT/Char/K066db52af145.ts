/** ZM Type:
Char ≡   Char K2412799c99f1
*/

import * as Q from '../.././lib/core'
import * as K2412799c99f1 from  '../Word32/K2412799c99f1'

export const $Char:Q.zmFold<Char> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x06,0x6d,0xb5,0x2a,0xf1,0x45],
  decoder : function (decoders) {
        return function(st) { return new Char(st.zmChar(decoders)); }
  }
}


export class Char  implements Q.ZM {
    constructor(public readonly value:string) { }
    flatMaxSize() {return Q.EncoderState.szChar(this.value);}
    flatEncode(st: Q.EncoderState) {st.zmChar(this.value);}
    toString(): string {return this.toStr(false)}
    toStr(nested?:boolean): string {return this.value.toString();}
    pretty(nested?:boolean): string {return this.toString(); }

}

