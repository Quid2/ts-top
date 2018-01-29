import * as Q from "../core";

export const $Char : Q.zmFold<Char> = function (f) { return f(___, []) }

export const ___ : Q.zmTypeInfo = {
    zid : [0x06, 0x6d, 0xb5, 0x2a, 0xf1, 0x45],
    decoder : function (decoders) {
      return function(st) {return new Char(String.fromCharCode(st.word()));}
    }
}

export class Char implements Q.Flat {
    constructor(
        public value: string
    ) { }
    flatMaxSize() { return 24; }
    flatEncode(st: Q.EncoderState) { st.word(this.value.charCodeAt(0)); }
    toString():string {return this.toStr()}
    toStr(nested=false):string {return this.value.toString();}
  
}