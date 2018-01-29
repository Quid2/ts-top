"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K6260e465ae74 = require("../Either/K6260e465ae74");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K7028aa556ebc = require("../Type/K7028aa556ebc");
var Ka5583bf3ad34 = require("../Tuple2/Ka5583bf3ad34");
exports.$ConTree = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x86, 0x65, 0x3e, 0x04, 0x00, 0x25],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Con(decoders[0](st), K6260e465ae74.___.decoder([Kb8cd13187198.___.decoder([K7028aa556ebc.___.decoder([decoders[1]])]), Kb8cd13187198.___.decoder([Ka5583bf3ad34.___.decoder([decoders[0], K7028aa556ebc.___.decoder([decoders[1]])])])])(st));
        }
        else {
            return new _ConTree(exports.___.decoder([decoders[0], decoders[1]])(st), exports.___.decoder([decoders[0], decoders[1]])(st));
        } };
    }
};
var Con = (function () {
    function Con(constrName, constrFields) {
        this.constrName = constrName;
        this.constrFields = constrFields;
    }
    Con.prototype.toString = function () { return this.toStr(false); };
    Con.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Con", this.constrName.toStr(true), this.constrFields.toStr(true)].join(' '));
    };
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
    _ConTree.prototype.toString = function () { return this.toStr(false); };
    _ConTree.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["ConTree", this._0.toStr(true), this._1.toStr(true)].join(' '));
    };
    _ConTree.prototype.match = function (m) { return m.ConTree(this._0, this._1); };
    _ConTree.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    _ConTree.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return _ConTree;
}());
exports._ConTree = _ConTree;
//# sourceMappingURL=K86653e040025.js.map