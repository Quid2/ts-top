import { $ADT, ADT } from "../ADT/ADT/K3e8257255cbf";
import { $ADTRef, ADTRef } from "../ADT/ADTRef/K07b1b045ac3c";
import { AbsRef } from "../ADT/AbsRef/K4bbd38587b9e";
import { $Identifier, Identifier } from "../ADT/Identifier/Kdc26e9d90047";
import { $String, String } from "../ADT/String/K2f006595638c";
import { $Solve, Solve as CallSolve } from "../ADT/Solve/K3ecc38406f4b";
import { Type, TypeApp, TypeCon } from "../ADT/Type/K7028aa556ebc";
import { Con, _ConTree } from "../ADT/ConTree/K86653e040025";
import { ZM } from "@quid2/ts-core";

interface Functor<T extends ZM> {
  map<U extends ZM>(f: (x: T) => U): Functor<U>;
}

declare module "../ADT/Type/K7028aa556ebc" {
  //interface TypeCon<A extends ZM> extends Functor<A> { }
  //interface TypeApp<A extends ZM> extends Functor<A> { }
}

// interface ZM1<A extends ZM> {
//     map<U extends ZM>(f: (x: A) => U): ZM1<U>
// }

// interface ZM {
//         map<U extends ZM>(f: (x: A) => U): ZM1<U>
//     }
