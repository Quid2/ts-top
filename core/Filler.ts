import * as Q from "../core";

export const $Filler: Q.zmFold<Filler> = function (f) { return f(___, []) }

export const ___ : Q.zmTypeInfo = {
    zid : [0xae, 0x1d, 0xfe, 0xec, 0xe1, 0x89],
    decoder : function (decoders) {
      return function(st) {st.filler();return new FillerEnd();}
    }
  }

export type Filler = FillerBit | FillerEnd

export class FillerBit implements Q.Flat {
    constructor(
        public _0: Filler,
    ) { }

    flatMaxSize(): number { return 8; }
    flatEncode(st: Q.EncoderState) { st.filler(); }
}

export class FillerEnd implements Q.Flat {
    flatMaxSize(): number { return 8; }
    flatEncode(st: Q.EncoderState) { st.filler(); }
}
