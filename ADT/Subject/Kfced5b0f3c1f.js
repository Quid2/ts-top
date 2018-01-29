"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$Subject = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xfc, 0xed, 0x5b, 0x0f, 0x3c, 0x1f],
    decoder: function (decoders) {
        return function (st) { return new Subject(Kb8cd13187198.___.decoder([Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])])(st)); };
    }
};
var Subject = (function () {
    function Subject(_0) {
        this._0 = _0;
    }
    Subject.prototype.toString = function () { return this.toStr(false); };
    Subject.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Subject", this._0.toStr(true)].join(' '));
    };
    Subject.prototype.match = function (m) { return m.Subject(this._0); };
    Subject.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Subject.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Subject;
}());
exports.Subject = Subject;
//# sourceMappingURL=Kfced5b0f3c1f.js.map