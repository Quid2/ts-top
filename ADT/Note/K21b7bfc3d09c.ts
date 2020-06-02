/** ZM Type:
Note a b ≡   Note {annotation :: a, object :: b}
*/

import * as Q from "@quid2/ts-core";

export const $Note: <A extends Q.ZM, B extends Q.ZM>(
  t0: Q.zmFold<A>,
  t1: Q.zmFold<B>
) => Q.zmFold<Note<A, B>> = function (t1, t2) {
  return function (f) {
    return f(___, [t1(f), t2(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0x21, 0xb7, 0xbf, 0xc3, 0xd0, 0x9c],
  decoder: function (decoders) {
    return function (st) {
      return new Note(decoders[0](st), decoders[1](st));
    };
  },
};

export class Note<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
  constructor(public readonly annotation: A, public readonly object: B) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Note", this.annotation.toStr(true), this.object.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Note", this.annotation.pretty(true), this.object.pretty(true)].join(" ")
    );
  }

  match<R>(m: { Note: (v0: A, v1: B) => R }): R {
    return m.Note(this.annotation, this.object);
  }
  flatMaxSize(): number {
    return this.annotation.flatMaxSize() + this.object.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    this.annotation.flatEncode(st);
    this.object.flatEncode(st);
  }
}
