/** ZM Type:
Range ≡   Range {start :: K2ff00417fe9d, end :: K2ff00417fe9d}
*/

import * as Q from "@quid2/ts-core";
import * as K2ff00417fe9d from "../Position/K2ff00417fe9d";

export const $Range: Q.zmFold<Range> = function (f) {
  return f(___, []);
};

export const ___: Q.zmTypeInfo = {
  zid: [0x63, 0xb2, 0xd9, 0x72, 0x44, 0xbc],
  decoder: function (decoders) {
    return function (st) {
      return new Range(
        K2ff00417fe9d.___.decoder([])(st),
        K2ff00417fe9d.___.decoder([])(st)
      );
    };
  },
};

export class Range implements Q.ZM {
  constructor(
    public readonly start: K2ff00417fe9d.Position,
    public readonly end: K2ff00417fe9d.Position
  ) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Range", this.start.toStr(true), this.end.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Range", this.start.pretty(true), this.end.pretty(true)].join(" ")
    );
  }

  match<R>(m: {
    Range: (v0: K2ff00417fe9d.Position, v1: K2ff00417fe9d.Position) => R;
  }): R {
    return m.Range(this.start, this.end);
  }
  flatMaxSize(): number {
    return this.start.flatMaxSize() + this.end.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this.start.flatEncode(st);
    this.end.flatEncode(st);
  }
}
