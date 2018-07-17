/** ZM Type:
Word7 ≡   V0
        | V1
        | V2
        | V3
        | V4
        | V5
        | V6
        | V7
        | V8
        | V9
        | V10
        | V11
        | V12
        | V13
        | V14
        | V15
        | V16
        | V17
        | V18
        | V19
        | V20
        | V21
        | V22
        | V23
        | V24
        | V25
        | V26
        | V27
        | V28
        | V29
        | V30
        | V31
        | V32
        | V33
        | V34
        | V35
        | V36
        | V37
        | V38
        | V39
        | V40
        | V41
        | V42
        | V43
        | V44
        | V45
        | V46
        | V47
        | V48
        | V49
        | V50
        | V51
        | V52
        | V53
        | V54
        | V55
        | V56
        | V57
        | V58
        | V59
        | V60
        | V61
        | V62
        | V63
        | V64
        | V65
        | V66
        | V67
        | V68
        | V69
        | V70
        | V71
  
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
    constructor(public readonly value:number) { }
    flatMaxSize() {return Q.EncoderState.szWord7(this.value);}
    flatEncode(st: Q.EncoderState) {st.zmWord7(this.value);}
    toString(): string {return this.toStr(false)}
    toStr(nested?:boolean): string {return this.value.toString();}
    pretty(nested?:boolean): string {return this.toString(); }

}

