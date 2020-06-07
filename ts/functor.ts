import { $ADT, ADT } from "@quid2/adt/ADT/K3e8257255cbf";

import { AbsRef } from "@quid2/adt/AbsRef/K4bbd38587b9e";
import { $Identifier, Identifier } from "@quid2/adt/Identifier/Kdc26e9d90047";
import { $String, String } from "@quid2/adt/String/K2f006595638c";
import { $Solve, Solve as CallSolve } from "@quid2/adt/Solve/K3ecc38406f4b";
import { Type, TypeApp, TypeCon } from "@quid2/adt/Type/K7028aa556ebc";
import { Con, _ConTree } from "@quid2/adt/ConTree/K86653e040025";
import { Tuple2 } from "@quid2/adt/Tuple2/Ka5583bf3ad34";
import { Left, Right } from "@quid2/adt/Either/K6260e465ae74";
import { ZM } from "@quid2/prim";
import { Nil, Cons } from "@quid2/adt/List/Kb8cd13187198";
import { Nothing, Just } from "@quid2/adt/Maybe/Kda6836778fd4";

declare module "@quid2/adt/ADT/K3e8257255cbf" {
  interface ADT<A extends ZM, B extends ZM, C extends ZM> {
    map<T extends ZM>(f: (x: C) => T): ADT<A, B, T>;
  }
}

// TO DFIX
// ADT.prototype.map = function (f) { return new ADT(this.declName, this.declNumParameters, this.declCons.map(f)) }

declare module "@quid2/adt/Type/K7028aa556ebc" {
  interface TypeCon<A extends ZM> {
    map<B extends ZM>(f: (x: A) => B): Type<B>;
  }

  interface TypeApp<A extends ZM> {
    map<B extends ZM>(f: (x: A) => B): Type<B>;
  }
}

TypeCon.prototype.map = function (f) {
  return new TypeCon(f(this._0));
};

TypeApp.prototype.map = function (f) {
  return new TypeApp(this._0.map(f), this._1.map(f));
};

declare module "@quid2/adt/ConTree/K86653e040025" {
  interface Con<A extends ZM, B extends ZM> {
    map<T extends ZM>(f: (x: B) => T): ConTree<A, T>;
  }

  interface _ConTree<A extends ZM, B extends ZM> {
    map<T extends ZM>(f: (x: B) => T): ConTree<A, T>;
  }
}

declare module "@quid2/adt/List/Kb8cd13187198" {
  // Return type must be the same
  interface Nil<A extends ZM> {
    map<B extends ZM>(f: (x: A) => B): List<B>;
  }

  interface Cons<A extends ZM> {
    map<B extends ZM>(f: (x: A) => B): List<B>;
  }
}

Nil.prototype.map = function (f) {
  return this;
};

Cons.prototype.map = function (f) {
  return new Cons(this._0.map(f), this._1.map(f));
};

declare module "@quid2/adt/Maybe/Kda6836778fd4" {
  interface Nothing<A extends ZM> {
    map<B extends ZM>(f: (x: A) => B): Maybe<B>;
  }

  interface Just<A extends ZM> {
    map<B extends ZM>(f: (x: A) => B): Maybe<B>;
  }
}

Nothing.prototype.map = function (f) {
  return this;
};

Just.prototype.map = function (f) {
  return new Just(this._0.map(f));
};

declare module "@quid2/adt/Either/K6260e465ae74" {
  interface Left<A extends ZM, B extends ZM> {
    map<T extends ZM>(f: (x: B) => T): Either<A, T>;
  }

  interface Right<A extends ZM, B extends ZM> {
    map<T extends ZM>(f: (x: B) => T): Either<A, T>;
  }
}

Left.prototype.map = function (f) {
  return this;
};

Right.prototype.map = function (f) {
  return new Right(this._0.map(f));
};

declare module "@quid2/adt/Tuple2/Ka5583bf3ad34" {
  interface Tuple2<A extends ZM, B extends ZM> {
    map<T extends ZM>(f: (x: B) => T): Tuple2<A, T>;
  }
}

Tuple2.prototype.map = function (f) {
  return new Tuple2(this._0.map(f), this._1.map(f));
};

// TO FIX
// Con.prototype.map = function (f) { return new Con(this.constrName, this.constrFields.map(f)) }

_ConTree.prototype.map = function (f) {
  return new _ConTree(this._0.map(f), this._1.map(f));
};

// visit(o:(name:string,obj:any) => any) {
//     o("ADT",[this.declName.visit(o)];
//   }

//   function pretty(name:string,pars:[any]) {
//     switch （name） {
//         case 'ADT':
//         default:
//     }
//   }
