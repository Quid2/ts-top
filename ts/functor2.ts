import { $ADT, ADT } from "@quid2/adt/ADT/K3e8257255cbf";
import { $ADTRef, ADTRef } from "@quid2/adt/ADTRef/K07b1b045ac3c";
import { AbsRef } from "@quid2/adt/AbsRef/K4bbd38587b9e";
import { $Identifier, Identifier } from "@quid2/adt/Identifier/Kdc26e9d90047";
import { $String, String } from "@quid2/adt/String/K2f006595638c";
import { $Solve, Solve as CallSolve } from "@quid2/adt/Solve/K3ecc38406f4b";
import { Type, TypeApp, TypeCon } from "@quid2/adt/Type/K7028aa556ebc";
import { Con, _ConTree } from "@quid2/adt/ConTree/K86653e040025";
import { ZM } from "@quid2/prim";

interface Functor<T extends ZM> {
  map<U extends ZM>(f: (x: T) => U): Functor<U>;
}

declare module "@quid2/adt/Type/K7028aa556ebc" {
  //interface TypeCon<A extends ZM> extends Functor<A> { }
  //interface TypeApp<A extends ZM> extends Functor<A> { }
}

// interface ZM1<A extends ZM> {
//     map<U extends ZM>(f: (x: A) => U): ZM1<U>
// }

// interface ZM {
//         map<U extends ZM>(f: (x: A) => U): ZM1<U>
//     }
