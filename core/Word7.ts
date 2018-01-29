import * as Q from "../core";

export const $Word7 : Q.zmFold<Word7> = function (f) { return f(___, []) };

export const ___ : Q.zmTypeInfo = {
    zid : [0xf4, 0xc9, 0x46, 0x33, 0x4a, 0x7e],
    decoder : function (decoders) {
      return function(st) {return new Word7(st.bits8(7));}
    }
}

export class Word7 implements Q.Flat {
    constructor(
        public value: number
    ) { }
    flatMaxSize() { return 7 }
    flatEncode(st: Q.EncoderState) { st.bits(7, this.value); }
    toString():string {return this.toStr()}
    toStr(nested=false):string {return this.value.toString();}

}
