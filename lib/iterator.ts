import { ZM } from '../lib/api'
import { List, Nil, Cons } from '../ADT/List/Kb8cd13187198'

declare module '../ADT/List/Kb8cd13187198' {

    interface Nil<A extends ZM> extends Iterable<A> { }

    interface Cons<A extends ZM> extends Iterable<A> { }
}

Nil.prototype[Symbol.iterator] = function <A extends ZM>() {
    return { next: function () { return { done: true, value: null } } }
}

Cons.prototype[Symbol.iterator] = function <A extends ZM>() {
    var l: List<A> = this;
    return {
        next: function () {
            if (l instanceof Nil) {
                return { done: true, value: null }
            }
            else {
                const c: Cons<A> = <Cons<A>>l;
                l = c._1;
                return { done: false, value: c._0 }
            }
        }
    }
}

// TODO FIX
  // *[Symbol.iterator]() {
  //   yield this._0;
  //   var l: List<A> = this;
  // }

// Kb8cd13187198.Cons.prototype[Symbol.iterator] = function* () {
//     var l = this;
//     do {
 //        l = <>this._1; 
//         yield l._0
//         l=<>this._1;
//  while (l._1 instanceof Kb8cd13187198.Nil)
//     } while (l.match({Nil:false,Cons:()=>true}))
// }
