import * as Q from "../core";

export const $Filler: Q.zmFold<Filler> = function (f) { return f(___, []) }

export const ___: Q.zmTypeInfo = {
    zid: [0xae, 0x1d, 0xfe, 0xec, 0xe1, 0x89],
    decoder: function (decoders) {
        return function (st) { st.filler(); return new FillerEnd(); }
    }
}

export type Filler = FillerBit | FillerEnd

export class FillerBit implements Q.ZM {
    constructor(
        public _0: Filler,
    ) { }

    flatMaxSize(): number { return 8; }
    flatEncode(st: Q.EncoderState) { st.filler(); }
    toStr(nested = false): string { return "Filler" }
    pretty(nested?: boolean) { return this.toString(); }
}

export class FillerEnd implements Q.ZM {
    flatMaxSize(): number { return 8; }
    flatEncode(st: Q.EncoderState) { st.filler(); }
    toString(): string { return this.toStr() }
    toStr(nested = false): string { return "Filler" }
    pretty(nested?: boolean) { return this.toString(); }
}
