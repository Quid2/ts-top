import * as Q from "../core";

export const $Word32 : Q.zmFold<Word32> = function (f) { return f(___, []) }

export const ___ : Q.zmTypeInfo = {
    zid: [0x24, 0x12, 0x79, 0x9c, 0x99, 0xf1],
    decoder : function (decoders) {
      return function(st) {return new Word32(st.word());}
    }
}

export class Word32 implements Q.Flat {
    constructor(
        public value: number
    ) { }
    flatMaxSize() { return 40; }
    flatEncode(st: Q.EncoderState) { st.word(this.value); }
    toString():string {return this.toStr()}
    toStr(nested=false):string {return this.value.toString();}
  
}