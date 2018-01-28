import * as Q from "../core";

export const $Bytes : Q.zmFold<Bytes> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0xf8,0x84,0x43,0x85,0xa4,0x43],
  decoder : function (decoders) {
    return function(st) {st.filler();return new Bytes(st.byteArray());}
  }
}

export class Bytes  implements Q.Flat {
  constructor(
    public bytes: Uint8Array
  ) { }

  flatMaxSize():number {
      return 8+Q.byteArraySize(this.bytes); // Up to 8 bits for prefiller plus aligned byte array size
    }
  flatEncode(st:Q.EncoderState) {st.filler();st.byteArray(this.bytes);}
}
