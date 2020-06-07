import * as tap from "tap";
//import * as L from "@quid2/ts/ADT/List/Kb8cd13187198"
import * as NL from "@quid2/ts/ADT/NonEmptyList/Kbf2d1c86eb20";
import { Word8 } from "@quid2/ts/ADT/Word8/Kb1f46a49c8f8";
import { UnicodeLetter } from "@quid2/ts/ADT/UnicodeLetter/K3878b3580fc5";
import { Char } from "@quid2/ts/ADT/Char/K066db52af145";
import * as L from "@quid2/ts/ADT/List/Kb8cd13187198";
import { ZM, prettyString } from "@quid2/ts";

// Import like this to get import/pretty prototype definitions
//import "@quid2/ts";

function test() {
  const a = new Char("a");
  const b = new Char("b");

  const ua = new UnicodeLetter(a);
  const ub = new UnicodeLetter(b);

  const l0 = new L.Nil();
  const l2 = new L.Cons(new Word8(11), new L.Cons(new Word8(22), l0));

  const s2 = new L.Cons(a, new L.Cons(b, l0));

  const u2 = new L.Cons(ua, new L.Cons(ub, l0));

  const nl1 = new NL.Elem(a);
  const nl2 = new NL.Cons(b, nl1);

  // tap.equal(nl1.pretty(false), "a");
  // tap.equal(nl2.pretty(true), "ba");

  // Wrong actually
  tap.equal(a.pretty(false), "a");
  tap.equal(ua.pretty(false), "a");

  tap.equal(l0.pretty(false), "[]");
  tap.equal(l0.pretty(true), "[]");
  tap.equal(l2.pretty(true), "[11,22]");

  tap.equal(s2.pretty(), "[a,b]");
  tap.equal(prettyString(s2), '"ab"');

  tap.equal(u2.pretty(), "[a,b]");
  tap.equal(prettyString(u2), '"ab"');

  tap.equal(nl1.pretty(false), "Elem a");
  tap.equal(nl2.pretty(true), "(Cons b (Elem a))");

  // This gets compiled to for loop for ArrayLike objects
  //function len<A extends ZM>(l: L.List<A>) {
  function len(l) {
    var count = 0;
    for (let value of l) {
      count += 1;
    }
    return count;
  }

  tap.type(Array.prototype[Symbol.iterator], "function");

  tap.type(L.Nil.prototype[Symbol.iterator], "function");
  tap.type(L.Cons.prototype[Symbol.iterator], "function");

  tap.same(l0[Symbol.iterator]().next(), {
    done: true,
    value: null,
  });
  const i2 = l2[Symbol.iterator]();

  tap.same(i2.next(), {
    done: false,
    value: new Word8(11),
  });

  tap.same(i2.next(), {
    done: false,
    value: new Word8(22),
  });

  tap.same(i2.next(), {
    done: true,
    value: null,
  });

  //let [...a0] = l0
  //let [...a2] = l2
  //tap.equal(a0, []);
  //tap.equal(a2, [55]);

  const a3 = new Array(11, 22, 33);
  tap.equal(len(a3), 3);

  // var count = 0;
  // for (let value of l2) {
  //     count += 1;
  //     console.log(value);
  // }
  //tap.equal(count, 2);

  tap.equal(len(l0), 0);
  //tap.equal(len(l2), 2);
}

test();
