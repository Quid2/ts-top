"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const K7028aa556ebc_1 = require("../ADT/Type/K7028aa556ebc");
const K86653e040025_1 = require("../ADT/ConTree/K86653e040025");
const Ka5583bf3ad34_1 = require("../ADT/Tuple2/Ka5583bf3ad34");
const K6260e465ae74_1 = require("../ADT/Either/K6260e465ae74");
const Kb8cd13187198_1 = require("../ADT/List/Kb8cd13187198");
const Kda6836778fd4_1 = require("../ADT/Maybe/Kda6836778fd4");
K7028aa556ebc_1.TypeCon.prototype.map = function (f) { return new K7028aa556ebc_1.TypeCon(f(this._0)); };
K7028aa556ebc_1.TypeApp.prototype.map = function (f) { return new K7028aa556ebc_1.TypeApp(this._0.map(f), this._1.map(f)); };
Kb8cd13187198_1.Nil.prototype.map = function (f) { return this; };
Kb8cd13187198_1.Cons.prototype.map = function (f) { return new Kb8cd13187198_1.Cons(this._0.map(f), this._1.map(f)); };
Kda6836778fd4_1.Nothing.prototype.map = function (f) { return this; };
Kda6836778fd4_1.Just.prototype.map = function (f) { return new Kda6836778fd4_1.Just(this._0.map(f)); };
K6260e465ae74_1.Left.prototype.map = function (f) { return this; };
K6260e465ae74_1.Right.prototype.map = function (f) { return new K6260e465ae74_1.Right(this._0.map(f)); };
Ka5583bf3ad34_1.Tuple2.prototype.map = function (f) { return new Ka5583bf3ad34_1.Tuple2(this._0.map(f), this._1.map(f)); };
// TO FIX
// Con.prototype.map = function (f) { return new Con(this.constrName, this.constrFields.map(f)) }
K86653e040025_1._ConTree.prototype.map = function (f) { return new K86653e040025_1._ConTree(this._0.map(f), this._1.map(f)); };
// visit(o:(name:string,obj:any) => any) {
//     o("ADT",[this.declName.visit(o)];
//   }
//   function pretty(name:string,pars:[any]) {
//     switch （name） {
//         case 'ADT': 
//         default: 
//     }
//   }
//# sourceMappingURL=functor.js.map