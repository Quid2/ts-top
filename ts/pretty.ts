import { UnicodeLetterOrNumberOrLine } from "../ADT/UnicodeLetterOrNumberOrLine/K33445520c45a";
import { UnicodeLetter } from "../ADT/UnicodeLetter/K3878b3580fc5";
import { AbsRef } from "../ADT/AbsRef/K4bbd38587b9e";
import { Word8 } from "../ADT/Word8/Kb1f46a49c8f8";
import { SHAKE128_48 } from "../ADT/SHAKE128_48/K9f214799149b";
import { Char } from "../ADT/Char/K066db52af145";
import { Identifier, Name } from "../ADT/Identifier/Kdc26e9d90047";
import { Con, _ConTree } from "../ADT/ConTree/K86653e040025";
import * as Q from "@quid2/ts-core";
import { ADT } from "../ADT/ADT/K3e8257255cbf";
import { Tuple2 } from "../ADT/Tuple2/Ka5583bf3ad34";
import { Type, TypeApp, TypeCon } from "../ADT/Type/K7028aa556ebc";
import { Var, Ext, Rec } from "../ADT/ADTRef/K07b1b045ac3c";
import { List, Nil, Cons } from "../ADT/List/Kb8cd13187198";

//import {Name}

// Check https://www.bennadel.com/blog/3290-using-module-augmentation-to-safely-inject-runtime-methods-using-typescript-and-node-js.htm

// interface Pretty<A> {
//     pretty<A>(v: A): string
// }

// declare module '../ADT/AbsRef/K4bbd38587b9e' {
//     // interface Flat {
//     //     pretty(): string
//     // }

//     // Selectively add pretty to some classes.
//     // interface AbsRef {
//     //     pretty(): string
//     // }

//     // //interface SHAKE128_48<A extends Flat> {
//     // interface SHAKE128_48<A> {
//     //     pretty(): string
//     // }
// }

// class AbsRef implements Pretty {
//     pretty() { return "PRETTY" + prettyAbsRef(this) }
// }

function prettyList<A extends Q.ZM>(c: Cons<A>): string {
  var p = "[" + c._0.pretty(false);
  var l = c._1;
  while (l instanceof Cons) {
    p += "," + l._0.pretty(false);
    l = l._1;
  }
  return p + "]";
}

function prettyString<A extends Q.ZM>(l: List<A>): string {
  return '"' + prettyConcat(l) + '"';
}

function prettyConcat<A extends Q.ZM>(
  l: List<A>,
  separator: string = ""
): string {
  return l.match({
    Nil: "",
    Cons: (h, t) => h.pretty() + separator + prettyConcat(t),
  });
}

function asArray<A extends Q.ZM>(l: List<A>, vs?: Array<A>): Array<A> {
  var vss = vs ? vs : new Array<A>();
  return l.match({
    Nil: vss,
    Cons: function (h, t) {
      vss.push(h);
      return asArray(t, vss);
    },
  });
}

function str(s: string): string {
  return '"' + s + '"';
}

function varName(n: number): string {
  return String.fromCharCode(97 + n);
}

function vars(numVars: number) {
  let vs = "";
  for (var n = 0; n < numVars; n++) {
    vs += varName(n) + " ";
  }
  return vs;
}

function prettyField(f: Tuple2<Identifier, Type<AbsRef>>): string {
  return f._0.pretty() + ":" + f._1.pretty();
}

function prettyFields(ts: List<Tuple2<Identifier, Type<AbsRef>>>) {
  //for (var f of asArray(ts)) { s += prettyField(f) }
  return asArray(ts).map(prettyField).join(", ");
}

// declare global {

//     interface Array<T,A> extends Pretty<A>

// }

// Array.prototype.pretty = function (nested: false) { return asArray(this).toString(); }

Nil.prototype.pretty = () => "[]";

Cons.prototype.pretty = function (nested: false) {
  return prettyList(this);
};
//Cons.prototype.pretty = function (nested: false) { return asArray(this).toString(); }

TypeApp.prototype.pretty = function (nested = false) {
  return Q.nestedPars(
    nested,
    this._0.pretty(true) + " " + this._1.pretty(true)
  );
};

TypeCon.prototype.pretty = function () {
  return this._0.pretty();
};

Ext.prototype.pretty = function () {
  return this._0.pretty();
};

Var.prototype.pretty = function () {
  return varName(this._0.value);
};

Rec.prototype.pretty = () => "\u21AB";

//Rec.prototype.pretty = (currADTName = '\u21AB') => currADTName

// class InEnv<A> implements Q.AsString {
//     //env: string[];
//     //obj: A;
//     constructor(private env: [string],private obj: A) {} //  this.env = env; this.obj = obj }

//     pretty() { return this.env["_"];}

//     toStr() { return "" }
// }

// interface TypeEnv {
//     env :
// }

// var env : [string] : string = new Array();
// env["11234"]="Bool"
// const s = new InEnv(env, new Rec).pretty()

//InNamed<Rec<A>>.prototype.pretty = () => '\u21AB'

Con.prototype.pretty = function () {
  return (
    this.constrName.pretty() +
    " " +
    this.constrFields.match({
      Left: (ts) => prettyConcat(ts),
      Right: (ts) => "{" + prettyFields(ts) + "}",
    })
  );
};

_ConTree.prototype.pretty = function () {
  return this._0.pretty() + "\n  | " + this._1.pretty();
};

ADT.prototype.pretty = function () {
  return (
    this.declName.pretty() +
    " " +
    vars(this.declNumParameters.value) +
    this.declCons.match({
      Nothing: "",
      Just: (conTree) => "= " + conTree.pretty(),
    })
  );
};

Name.prototype.pretty = function () {
  return this._0.pretty() + prettyConcat(this._1);
};

UnicodeLetter.prototype.pretty = function () {
  return this._0.pretty();
};
UnicodeLetterOrNumberOrLine.prototype.pretty = function () {
  return this._0.pretty();
};

// Char.prototype.toStr = function(nested = false): string { return "'" + this._0.toString() + "'"; }
//Char.prototype.pretty = function () { return "'" + this.value.toString() + "'"; }
Char.prototype.pretty = function () {
  return this.value;
};

AbsRef.prototype.pretty = function () {
  return "K" + this._0.pretty();
};

SHAKE128_48.prototype.pretty = function () {
  function asHex(v: Word8) {
    const r = v.value.toString(16);
    return r.length == 1 ? "0" + r : r;
  }
  return (
    asHex(this._0) +
    asHex(this._1) +
    asHex(this._2) +
    asHex(this._3) +
    asHex(this._4) +
    asHex(this._5)
  );
};

//export function prettyADT(o:ADT<) : string {
//}

// export function prettyAbsRef(r: AbsRef): string {
//     return "K" + prettyShake48(r._0);
// }

// export function prettyShake48<I extends ZM>(s: SHAKE128_48<I>): string {
//     function asHex(v: Word8) { const r = v.value.toString(16); return r.length == 1 ? '0' + r : r; }
//     return asHex(s._0) + asHex(s._1) + asHex(s._2) + asHex(s._3) + asHex(s._4) + asHex(s._5);
// }

export { str, prettyConcat, prettyString };
