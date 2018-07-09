import * as Q from "../core";

export const $Word16 : Q.zmFold<Word16> = function (f) { return f(___, []) }

export const ___ : Q.zmTypeInfo = {
    zid : [0x29,0x5e,0x24,0xd6,0x2f,0xac],
    decoder : function (decoders) {
      return function(st) {return new Word16(st.word16());}
    }
}

export class Word16 implements Q.ZM {
    constructor(
        public value: number
    ) { }
    flatMaxSize() { return Q.EncoderState.word16MaxSize; }
    flatEncode(st: Q.EncoderState) { st.word16(this.value); }
    toString():string {return this.toStr()}
    toStr(nested=false):string {return this.value.toString();}
  
}