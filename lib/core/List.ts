import * as Q from '../core'

import { Char } from "../../ADT/Char/K066db52af145"

export const $List: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<List<A>> = function (t1) { return function (f) { return f(___, [t1(f)]) } }

export const ___: Q.zmTypeInfo = {
  zid: [0xb8, 0xcd, 0x13, 0x18, 0x71, 0x98],
  decoder: function (decoders) {
    return function (st) { if (st.zero()) { return new Nil() } else { return new Cons(decoders[0](st), ___.decoder([decoders[0]])(st)) } }
  }
}

export type List<A extends Q.ZM> = Nil<A> | Cons<A>

export class Nil<A extends Q.ZM> implements Q.ZM {

  toString(): string { return this.toStr(false) }
  toStr(nested = false): string { return "Nil" }
  pretty(nested = false): string { return "[]"; }

  match<R>(m: { Nil: R, Cons: (v0: A, v1: List<A>) => R }): R { return m.Nil; }
  flatMaxSize(): number { return 1 + 0; }
  flatEncode(st: Q.EncoderState) { st.zero(); }

  [Symbol.iterator]() { return { next: function () { return { done: true, value: undefined } } } }
  length = () => 0;
}

export class Cons<A extends Q.ZM> implements Q.ZM {
  constructor(
    public _0: A,
    public _1: List<A>,

  ) { }

  toString(): string { return this.toStr(false) }
  toStr(nested = false): string { return Q.nestedPars(nested, ["Cons", this._0.toStr(true), this._1.toStr(true)].join(' ')) }


  match<R>(m: { Nil: R, Cons: (v0: A, v1: List<A>) => R }): R { return m.Cons(this._0, this._1); }
  flatMaxSize(): number { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); }
  flatEncode(st: Q.EncoderState) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); }

  // TODO FIX
  [Symbol.iterator]() {
    var l: List<A> = this;
    return {
      next: function () {
        if (l instanceof Nil) {
          return { done: true, value: undefined }
        }
        else {
          const c: Cons<A> = <Cons<A>>l;
          l = c._1;
          return { done: false, value: c._0 }
        }
      }
    }
  }

  // pretty(nested = false): string {
  //   var nxt = false;
  //   var p = "[";
  //   for (let e of this) {
  //     if (nxt) p = ",";
  //     nxt = true;
  //     p += (<A>e).pretty(false)
  //   }
  //   return p + "]";
  // }

  pretty(nested = false): string {
    return this.prettyList();
    //return (this._0 instanceof Char) ? this.prettyString() : this.prettyList();
  }

  prettyList(nested = false): string {
    var p = "[" + this._0.pretty(false);
    var l = this._1;
    while (l instanceof Cons) {
      p += "," + l._0.pretty(false);
      l = l._1;
    };
    return p + "]";
  }
}

export function prettyString<A extends Q.ZM>(l: List<A>): string {
  return '"' + prettyConcat(l) + '"';
}

export function prettyConcat<A extends Q.ZM>(l: List<A>): string {
  return l.match({
    Nil: ""
    , Cons: (h, t) => h.pretty() + prettyConcat(t)
  })
}
