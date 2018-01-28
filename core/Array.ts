import * as Q from "../core";

export const $Array: <A extends Q.Flat>(t1: Q.zmFold<A>) => Q.zmFold<Array<A>> = function (t1) { return function (f) { return f(___, [t1(f)]) } }

export const ___: Q.zmTypeInfo = {
  zid: [0x2e, 0x8b, 0x45, 0x19, 0xae, 0xaa],
  decoder: function (decoders) {
    const dec = decoders[0];
    return function (st) {
      var arr = [];
      var blkLen;
      while (blkLen = st.bits8(8))
        for (var i = 0; i < blkLen; i++) arr.push(dec(st));
      console.log(arr);
      return new Array(arr);
    }
  }
}

export class Array<A extends Q.Flat> implements Q.Flat {
  constructor(
    public values: A[]
  ) { }

  flatMaxSize() { 
    const len = this.values.length;
    var size = Q.arrayBlocks(len)*8;
    for (var i =0;i<len;i++) size += this.values[i].flatMaxSize();
    return size;
  }
  
  flatEncode(st: Q.EncoderState) {
    const vals = this.values;
    var numElems = vals.length;
    var inx = 0;
    var blkLen;

    while (blkLen = Math.min(255, numElems)) {
      st.bits(8, blkLen);
      for (var i = 0; i < blkLen; i++) vals[inx + i].flatEncode(st);
      numElems -= blkLen;
    }
    st.bits(8,0);

  }
}
