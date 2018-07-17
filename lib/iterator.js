"use strict";
exports.__esModule = true;
var Kb8cd13187198_1 = require("../ADT/List/Kb8cd13187198");
Kb8cd13187198_1.Nil.prototype[Symbol.iterator] = function () {
    return { next: function () { return { done: true, value: null }; } };
};
Kb8cd13187198_1.Cons.prototype[Symbol.iterator] = function () {
    var l = this;
    return {
        next: function () {
            if (l instanceof Kb8cd13187198_1.Nil) {
                return { done: true, value: null };
            }
            else {
                var c = l;
                l = c._1;
                return { done: false, value: c._0 };
            }
        }
    };
};
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
