"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K6260e465ae74 = require("../Either/K6260e465ae74");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K7028aa556ebc = require("../Type/K7028aa556ebc");
var Ka5583bf3ad34 = require("../Tuple2/Ka5583bf3ad34");
exports.$ConTree = function (t1, t2) { return function (f) { return f(___, [t1(f), t2(f)]); }; };
var ___ = {
    zid: [0x86, 0x65, 0x3e, 0x04, 0x00, 0x25],
    decoder: function (decoders) {
        var decs = { "Con": [Q.zmConst(decoders[0])(Q.flatDecoder), K6260e465ae74.$Either(Kb8cd13187198.$List(K7028aa556ebc.$Type(Q.zmConst(decoders[1]))), Kb8cd13187198.$List(Ka5583bf3ad34.$Tuple2(Q.zmConst(decoders[0]), K7028aa556ebc.$Type(Q.zmConst(decoders[1])))))(Q.flatDecoder)], "_ConTree": [exports.$ConTree(Q.zmConst(decoders[0]), Q.zmConst(decoders[1]))(Q.flatDecoder), exports.$ConTree(Q.zmConst(decoders[0]), Q.zmConst(decoders[1]))(Q.flatDecoder)] };
        return function (st) { if (st.zero()) {
            var d = decs["Con"];
            return new Con(d[0](st), d[1](st));
        }
        else {
            var d = decs["_ConTree"];
            return new _ConTree(d[0](st), d[1](st));
        } };
    }
};
var Con = (function () {
    function Con(constrName, constrFields) {
        this.constrName = constrName;
        this.constrFields = constrFields;
    }
    Con.prototype.match = function (m) { return m.Con(this.constrName, this.constrFields); };
    Con.prototype.flatMaxSize = function () { return 1 + this.constrName.flatMaxSize() + this.constrFields.flatMaxSize(); };
    Con.prototype.flatEncode = function (st) { st.zero(); this.constrName.flatEncode(st); this.constrFields.flatEncode(st); };
    return Con;
}());
exports.Con = Con;
var _ConTree = (function () {
    function _ConTree(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    _ConTree.prototype.match = function (m) { return m.ConTree(this._0, this._1); };
    _ConTree.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    _ConTree.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return _ConTree;
}());
exports._ConTree = _ConTree;
//# sourceMappingURL=K86653e040025.js.map