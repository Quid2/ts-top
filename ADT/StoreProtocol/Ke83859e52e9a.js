"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K9f214799149b = require("../SHAKE128_48/K9f214799149b");
exports.$StoreProtocol = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xe8, 0x38, 0x59, 0xe5, 0x2e, 0x9a],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Save(decoders[0](st));
        }
        else {
            if (st.zero()) {
                return new Solve(K9f214799149b.___.decoder([decoders[0]])(st));
            }
            else {
                return new Solved(K9f214799149b.___.decoder([decoders[0]])(st), decoders[0](st));
            }
        } };
    }
};
var Save = (function () {
    function Save(_0) {
        this._0 = _0;
    }
    Save.prototype.toString = function () { return this.toStr(false); };
    Save.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Save", this._0.toStr(true)].join(' '));
    };
    Save.prototype.match = function (m) { return m.Save(this._0); };
    Save.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Save.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Save;
}());
exports.Save = Save;
var Solve = (function () {
    function Solve(_0) {
        this._0 = _0;
    }
    Solve.prototype.toString = function () { return this.toStr(false); };
    Solve.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Solve", this._0.toStr(true)].join(' '));
    };
    Solve.prototype.match = function (m) { return m.Solve(this._0); };
    Solve.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize(); };
    Solve.prototype.flatEncode = function (st) { st.one(); st.zero(); this._0.flatEncode(st); };
    return Solve;
}());
exports.Solve = Solve;
var Solved = (function () {
    function Solved(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Solved.prototype.toString = function () { return this.toStr(false); };
    Solved.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Solved", this._0.toStr(true), this._1.toStr(true)].join(' '));
    };
    Solved.prototype.match = function (m) { return m.Solved(this._0, this._1); };
    Solved.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Solved.prototype.flatEncode = function (st) { st.one(); st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Solved;
}());
exports.Solved = Solved;
//# sourceMappingURL=Ke83859e52e9a.js.map