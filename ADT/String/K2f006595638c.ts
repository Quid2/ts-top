/** ZM Type:
String ≡   String (Kb8cd13187198 K066db52af145)
*/

import * as Q from '../.././lib/core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $String:Q.zmFold<String> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x2f,0x00,0x65,0x95,0x63,0x8c],
  decoder : function (decoders) {
        return function(st) { return new String(st.zmString(decoders)); }
  }
}


export class String  implements Q.ZM {
    constructor(public readonly value:string) { }
    flatMaxSize() {return Q.EncoderState.szString(this.value);}
    flatEncode(st: Q.EncoderState) {st.zmString(this.value);}
    toString(): string {return this.toStr(false)}
    toStr(nested?:boolean): string {return this.value.toString();}
    pretty(nested?:boolean): string {return this.toString(); }

}

