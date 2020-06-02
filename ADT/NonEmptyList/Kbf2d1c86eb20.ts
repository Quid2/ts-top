/** ZM Type:
NonEmptyList a ≡   Elem a
                 | Cons a (↫ a)
*/

import * as Q from "@quid2/ts-core";

export const $NonEmptyList: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<NonEmptyList<A>> = function (t1) {
  return function (f) {
    return f(___, [t1(f)]);
  };
};

export const ___: Q.zmTypeInfo = {
  zid: [0xbf, 0x2d, 0x1c, 0x86, 0xeb, 0x20],
  decoder: function (decoders) {
    return function (st) {
      if (st.zero()) {
        return new Elem(decoders[0](st));
      } else {
        return new Cons(decoders[0](st), ___.decoder([decoders[0]])(st));
      }
    };
  },
};

export type NonEmptyList<A extends Q.ZM> = Elem<A> | Cons<A>;

export class Elem<A extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: A) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(nested, ["Elem", this._0.toStr(true)].join(" "));
  }
  pretty(nested = false): string {
    return Q.nestedPars(nested, ["Elem", this._0.pretty(true)].join(" "));
  }

  match<R>(m: {
    Elem: (v0: A) => R;
    Cons: (v0: A, v1: NonEmptyList<A>) => R;
  }): R {
    return m.Elem(this._0);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.zero();
    this._0.flatEncode(st);
  }
}

export class Cons<A extends Q.ZM> implements Q.ZM {
  constructor(public readonly _0: A, public readonly _1: NonEmptyList<A>) {}

  toString(): string {
    return this.toStr(false);
  }
  toStr(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Cons", this._0.toStr(true), this._1.toStr(true)].join(" ")
    );
  }
  pretty(nested = false): string {
    return Q.nestedPars(
      nested,
      ["Cons", this._0.pretty(true), this._1.pretty(true)].join(" ")
    );
  }

  match<R>(m: {
    Elem: (v0: A) => R;
    Cons: (v0: A, v1: NonEmptyList<A>) => R;
  }): R {
    return m.Cons(this._0, this._1);
  }
  flatMaxSize(): number {
    return 1 + this._0.flatMaxSize() + this._1.flatMaxSize();
  }
  flatEncode(st: Q.EncoderState) {
    st.one();
    this._0.flatEncode(st);
    this._1.flatEncode(st);
  }
}
