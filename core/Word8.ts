import * as Q from "../core";

export const $Word8 : Q.zmFold<Word8> = function (f) { return f(___, []) }

export const ___ : Q.zmTypeInfo = {
    zid : [0xb1, 0xf4, 0x6a, 0x49, 0xc8, 0xf8],
    decoder : function (decoders) {
      return function(st) {return new Word8(st.bits8(8));}
    }
}

export class Word8 implements Q.Flat {
    constructor(
        public value: number
    ) { }
    flatMaxSize() { return 8 }
    flatEncode(st: Q.EncoderState) { st.bits(8, this.value); }
    toString():string {return this.toStr()}
    toStr(nested=false):string {return this.value.toString();}
  
}