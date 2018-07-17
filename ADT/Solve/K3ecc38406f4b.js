"use strict";
/** ZM Type:
Solve a ≡   Solve a
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
exports.$Solve = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x3e, 0xcc, 0x38, 0x40, 0x6f, 0x4b],
    decoder: function (decoders) {
        return function (st) { return new Solve(decoders[0](st)); };
    }
};
var Solve = /** @class */ (function () {
    function Solve(_0) {
        this._0 = _0;
    }
    Solve.prototype.toString = function () { return this.toStr(false); };
    Solve.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Solve", this._0.toStr(true)].join(' '));
    };
    Solve.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Solve", this._0.pretty(true)].join(' '));
    };
    Solve.prototype.match = function (m) { return m.Solve(this._0); };
    Solve.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Solve.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Solve;
}());
exports.Solve = Solve;
