/** ZM Type:
Bits52 ≡   Bits52 {bit0 :: K65149ce3b366,
                   bit1 :: K65149ce3b366,
                   bit2 :: K65149ce3b366,
                   bit3 :: K65149ce3b366,
                   bit4 :: K65149ce3b366,
                   bit5 :: K65149ce3b366,
                   bit6 :: K65149ce3b366,
                   bit7 :: K65149ce3b366,
                   bit8 :: K65149ce3b366,
                   bit9 :: K65149ce3b366,
                   bit10 :: K65149ce3b366,
                   bit11 :: K65149ce3b366,
                   bit12 :: K65149ce3b366,
                   bit13 :: K65149ce3b366,
                   bit14 :: K65149ce3b366,
                   bit15 :: K65149ce3b366,
                   bit16 :: K65149ce3b366,
                   bit17 :: K65149ce3b366,
                   bit18 :: K65149ce3b366,
                   bit19 :: K65149ce3b366,
                   bit20 :: K65149ce3b366,
                   bit21 :: K65149ce3b366,
                   bit22 :: K65149ce3b366,
                   bi
*/

import * as Q from "@quid2/ts-core";
import * as K65149ce3b366 from "../Bit/K65149ce3b366";

export const $Bits52: Q.zmFold<Bits52> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0xf7, 0x27, 0xda, 0x8a, 0xa8, 0xad],
  decoder: function (decoders) {
    return function (st) {
      return new Bits52(
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st),
        K65149ce3b366.___.decoder([])(st)
      );
    };
  },
};

export class Bits52 implements Q.ZM {
  constructor(
    public readonly bit0: K65149ce3b366.Bit,
    public readonly bit1: K65149ce3b366.Bit,
    public readonly bit2: K65149ce3b366.Bit,
    public readonly bit3: K65149ce3b366.Bit,
    public readonly bit4: K65149ce3b366.Bit,
    public readonly bit5: K65149ce3b366.Bit,
    public readonly bit6: K65149ce3b366.Bit,
    public readonly bit7: K65149ce3b366.Bit,
    public readonly bit8: K65149ce3b366.Bit,
    public readonly bit9: K65149ce3b366.Bit,
    public readonly bit10: K65149ce3b366.Bit,
    public readonly bit11: K65149ce3b366.Bit,
    public readonly bit12: K65149ce3b366.Bit,
    public readonly bit13: K65149ce3b366.Bit,
    public readonly bit14: K65149ce3b366.Bit,
    public readonly bit15: K65149ce3b366.Bit,
    public readonly bit16: K65149ce3b366.Bit,
    public readonly bit17: K65149ce3b366.Bit,
    public readonly bit18: K65149ce3b366.Bit,
    public readonly bit19: K65149ce3b366.Bit,
    public readonly bit20: K65149ce3b366.Bit,
    public readonly bit21: K65149ce3b366.Bit,
    public readonly bit22: K65149ce3b366.Bit,
    public readonly bit23: K65149ce3b366.Bit,
    public readonly bit24: K65149ce3b366.Bit,
    public readonly bit25: K65149ce3b366.Bit,
    public readonly bit26: K65149ce3b366.Bit,
    public readonly bit27: K65149ce3b366.Bit,
    public readonly bit28: K65149ce3b366.Bit,
    public readonly bit29: K65149ce3b366.Bit,
    public readonly bit30: K65149ce3b366.Bit,
    public readonly bit31: K65149ce3b366.Bit,
    public readonly bit32: K65149ce3b366.Bit,
    public readonly bit33: K65149ce3b366.Bit,
    public readonly bit34: K65149ce3b366.Bit,
    public readonly bit35: K65149ce3b366.Bit,
    public readonly bit36: K65149ce3b366.Bit,
    public readonly bit37: K65149ce3b366.Bit,
    public readonly bit38: K65149ce3b366.Bit,
    public readonly bit39: K65149ce3b366.Bit,
    public readonly bit40: K65149ce3b366.Bit,
    public readonly bit41: K65149ce3b366.Bit,
    public readonly bit42: K65149ce3b366.Bit,
    public readonly bit43: K65149ce3b366.Bit,
    public readonly bit44: K65149ce3b366.Bit,
    public readonly bit45: K65149ce3b366.Bit,
    public readonly bit46: K65149ce3b366.Bit,
    public readonly bit47: K65149ce3b366.Bit,
    public readonly bit48: K65149ce3b366.Bit,
    public readonly bit49: K65149ce3b366.Bit,
    public readonly bit50: K65149ce3b366.Bit,
    public readonly bit51: K65149ce3b366.Bit
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "Bits52",
        this.bit0.toStr(true),
        this.bit1.toStr(true),
        this.bit2.toStr(true),
        this.bit3.toStr(true),
        this.bit4.toStr(true),
        this.bit5.toStr(true),
        this.bit6.toStr(true),
        this.bit7.toStr(true),
        this.bit8.toStr(true),
        this.bit9.toStr(true),
        this.bit10.toStr(true),
        this.bit11.toStr(true),
        this.bit12.toStr(true),
        this.bit13.toStr(true),
        this.bit14.toStr(true),
        this.bit15.toStr(true),
        this.bit16.toStr(true),
        this.bit17.toStr(true),
        this.bit18.toStr(true),
        this.bit19.toStr(true),
        this.bit20.toStr(true),
        this.bit21.toStr(true),
        this.bit22.toStr(true),
        this.bit23.toStr(true),
        this.bit24.toStr(true),
        this.bit25.toStr(true),
        this.bit26.toStr(true),
        this.bit27.toStr(true),
        this.bit28.toStr(true),
        this.bit29.toStr(true),
        this.bit30.toStr(true),
        this.bit31.toStr(true),
        this.bit32.toStr(true),
        this.bit33.toStr(true),
        this.bit34.toStr(true),
        this.bit35.toStr(true),
        this.bit36.toStr(true),
        this.bit37.toStr(true),
        this.bit38.toStr(true),
        this.bit39.toStr(true),
        this.bit40.toStr(true),
        this.bit41.toStr(true),
        this.bit42.toStr(true),
        this.bit43.toStr(true),
        this.bit44.toStr(true),
        this.bit45.toStr(true),
        this.bit46.toStr(true),
        this.bit47.toStr(true),
        this.bit48.toStr(true),
        this.bit49.toStr(true),
        this.bit50.toStr(true),
        this.bit51.toStr(true),
      ].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      [
        "Bits52",
        this.bit0.pretty(true),
        this.bit1.pretty(true),
        this.bit2.pretty(true),
        this.bit3.pretty(true),
        this.bit4.pretty(true),
        this.bit5.pretty(true),
        this.bit6.pretty(true),
        this.bit7.pretty(true),
        this.bit8.pretty(true),
        this.bit9.pretty(true),
        this.bit10.pretty(true),
        this.bit11.pretty(true),
        this.bit12.pretty(true),
        this.bit13.pretty(true),
        this.bit14.pretty(true),
        this.bit15.pretty(true),
        this.bit16.pretty(true),
        this.bit17.pretty(true),
        this.bit18.pretty(true),
        this.bit19.pretty(true),
        this.bit20.pretty(true),
        this.bit21.pretty(true),
        this.bit22.pretty(true),
        this.bit23.pretty(true),
        this.bit24.pretty(true),
        this.bit25.pretty(true),
        this.bit26.pretty(true),
        this.bit27.pretty(true),
        this.bit28.pretty(true),
        this.bit29.pretty(true),
        this.bit30.pretty(true),
        this.bit31.pretty(true),
        this.bit32.pretty(true),
        this.bit33.pretty(true),
        this.bit34.pretty(true),
        this.bit35.pretty(true),
        this.bit36.pretty(true),
        this.bit37.pretty(true),
        this.bit38.pretty(true),
        this.bit39.pretty(true),
        this.bit40.pretty(true),
        this.bit41.pretty(true),
        this.bit42.pretty(true),
        this.bit43.pretty(true),
        this.bit44.pretty(true),
        this.bit45.pretty(true),
        this.bit46.pretty(true),
        this.bit47.pretty(true),
        this.bit48.pretty(true),
        this.bit49.pretty(true),
        this.bit50.pretty(true),
        this.bit51.pretty(true),
      ].join(" ")
    );
  }

  match<R>(m: {
    Bits52: (
      v0: K65149ce3b366.Bit,
      v1: K65149ce3b366.Bit,
      v2: K65149ce3b366.Bit,
      v3: K65149ce3b366.Bit,
      v4: K65149ce3b366.Bit,
      v5: K65149ce3b366.Bit,
      v6: K65149ce3b366.Bit,
      v7: K65149ce3b366.Bit,
      v8: K65149ce3b366.Bit,
      v9: K65149ce3b366.Bit,
      v10: K65149ce3b366.Bit,
      v11: K65149ce3b366.Bit,
      v12: K65149ce3b366.Bit,
      v13: K65149ce3b366.Bit,
      v14: K65149ce3b366.Bit,
      v15: K65149ce3b366.Bit,
      v16: K65149ce3b366.Bit,
      v17: K65149ce3b366.Bit,
      v18: K65149ce3b366.Bit,
      v19: K65149ce3b366.Bit,
      v20: K65149ce3b366.Bit,
      v21: K65149ce3b366.Bit,
      v22: K65149ce3b366.Bit,
      v23: K65149ce3b366.Bit,
      v24: K65149ce3b366.Bit,
      v25: K65149ce3b366.Bit,
      v26: K65149ce3b366.Bit,
      v27: K65149ce3b366.Bit,
      v28: K65149ce3b366.Bit,
      v29: K65149ce3b366.Bit,
      v30: K65149ce3b366.Bit,
      v31: K65149ce3b366.Bit,
      v32: K65149ce3b366.Bit,
      v33: K65149ce3b366.Bit,
      v34: K65149ce3b366.Bit,
      v35: K65149ce3b366.Bit,
      v36: K65149ce3b366.Bit,
      v37: K65149ce3b366.Bit,
      v38: K65149ce3b366.Bit,
      v39: K65149ce3b366.Bit,
      v40: K65149ce3b366.Bit,
      v41: K65149ce3b366.Bit,
      v42: K65149ce3b366.Bit,
      v43: K65149ce3b366.Bit,
      v44: K65149ce3b366.Bit,
      v45: K65149ce3b366.Bit,
      v46: K65149ce3b366.Bit,
      v47: K65149ce3b366.Bit,
      v48: K65149ce3b366.Bit,
      v49: K65149ce3b366.Bit,
      v50: K65149ce3b366.Bit,
      v51: K65149ce3b366.Bit
    ) => R;
  }): R {
    return m.Bits52(
      this.bit0,
      this.bit1,
      this.bit2,
      this.bit3,
      this.bit4,
      this.bit5,
      this.bit6,
      this.bit7,
      this.bit8,
      this.bit9,
      this.bit10,
      this.bit11,
      this.bit12,
      this.bit13,
      this.bit14,
      this.bit15,
      this.bit16,
      this.bit17,
      this.bit18,
      this.bit19,
      this.bit20,
      this.bit21,
      this.bit22,
      this.bit23,
      this.bit24,
      this.bit25,
      this.bit26,
      this.bit27,
      this.bit28,
      this.bit29,
      this.bit30,
      this.bit31,
      this.bit32,
      this.bit33,
      this.bit34,
      this.bit35,
      this.bit36,
      this.bit37,
      this.bit38,
      this.bit39,
      this.bit40,
      this.bit41,
      this.bit42,
      this.bit43,
      this.bit44,
      this.bit45,
      this.bit46,
      this.bit47,
      this.bit48,
      this.bit49,
      this.bit50,
      this.bit51
    );
  }
  flatMaxSize(): number {
    return (
      this.bit0.flatMaxSize() +
      this.bit1.flatMaxSize() +
      this.bit2.flatMaxSize() +
      this.bit3.flatMaxSize() +
      this.bit4.flatMaxSize() +
      this.bit5.flatMaxSize() +
      this.bit6.flatMaxSize() +
      this.bit7.flatMaxSize() +
      this.bit8.flatMaxSize() +
      this.bit9.flatMaxSize() +
      this.bit10.flatMaxSize() +
      this.bit11.flatMaxSize() +
      this.bit12.flatMaxSize() +
      this.bit13.flatMaxSize() +
      this.bit14.flatMaxSize() +
      this.bit15.flatMaxSize() +
      this.bit16.flatMaxSize() +
      this.bit17.flatMaxSize() +
      this.bit18.flatMaxSize() +
      this.bit19.flatMaxSize() +
      this.bit20.flatMaxSize() +
      this.bit21.flatMaxSize() +
      this.bit22.flatMaxSize() +
      this.bit23.flatMaxSize() +
      this.bit24.flatMaxSize() +
      this.bit25.flatMaxSize() +
      this.bit26.flatMaxSize() +
      this.bit27.flatMaxSize() +
      this.bit28.flatMaxSize() +
      this.bit29.flatMaxSize() +
      this.bit30.flatMaxSize() +
      this.bit31.flatMaxSize() +
      this.bit32.flatMaxSize() +
      this.bit33.flatMaxSize() +
      this.bit34.flatMaxSize() +
      this.bit35.flatMaxSize() +
      this.bit36.flatMaxSize() +
      this.bit37.flatMaxSize() +
      this.bit38.flatMaxSize() +
      this.bit39.flatMaxSize() +
      this.bit40.flatMaxSize() +
      this.bit41.flatMaxSize() +
      this.bit42.flatMaxSize() +
      this.bit43.flatMaxSize() +
      this.bit44.flatMaxSize() +
      this.bit45.flatMaxSize() +
      this.bit46.flatMaxSize() +
      this.bit47.flatMaxSize() +
      this.bit48.flatMaxSize() +
      this.bit49.flatMaxSize() +
      this.bit50.flatMaxSize() +
      this.bit51.flatMaxSize()
    );
  }
  flatEncode(st: Q.EncoderState) {
    this.bit0.flatEncode(st);
    this.bit1.flatEncode(st);
    this.bit2.flatEncode(st);
    this.bit3.flatEncode(st);
    this.bit4.flatEncode(st);
    this.bit5.flatEncode(st);
    this.bit6.flatEncode(st);
    this.bit7.flatEncode(st);
    this.bit8.flatEncode(st);
    this.bit9.flatEncode(st);
    this.bit10.flatEncode(st);
    this.bit11.flatEncode(st);
    this.bit12.flatEncode(st);
    this.bit13.flatEncode(st);
    this.bit14.flatEncode(st);
    this.bit15.flatEncode(st);
    this.bit16.flatEncode(st);
    this.bit17.flatEncode(st);
    this.bit18.flatEncode(st);
    this.bit19.flatEncode(st);
    this.bit20.flatEncode(st);
    this.bit21.flatEncode(st);
    this.bit22.flatEncode(st);
    this.bit23.flatEncode(st);
    this.bit24.flatEncode(st);
    this.bit25.flatEncode(st);
    this.bit26.flatEncode(st);
    this.bit27.flatEncode(st);
    this.bit28.flatEncode(st);
    this.bit29.flatEncode(st);
    this.bit30.flatEncode(st);
    this.bit31.flatEncode(st);
    this.bit32.flatEncode(st);
    this.bit33.flatEncode(st);
    this.bit34.flatEncode(st);
    this.bit35.flatEncode(st);
    this.bit36.flatEncode(st);
    this.bit37.flatEncode(st);
    this.bit38.flatEncode(st);
    this.bit39.flatEncode(st);
    this.bit40.flatEncode(st);
    this.bit41.flatEncode(st);
    this.bit42.flatEncode(st);
    this.bit43.flatEncode(st);
    this.bit44.flatEncode(st);
    this.bit45.flatEncode(st);
    this.bit46.flatEncode(st);
    this.bit47.flatEncode(st);
    this.bit48.flatEncode(st);
    this.bit49.flatEncode(st);
    this.bit50.flatEncode(st);
    this.bit51.flatEncode(st);
  }
}
