"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var Kc23b20389114 = require("../Match/Kc23b20389114");
var K65149ce3b366 = require("../Bit/K65149ce3b366");
exports.$ByPattern = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xcf, 0x6c, 0x76, 0xb3, 0xf8, 0x08],
    decoder: function (decoders) {
        return function (st) { return new ByPattern(Kb8cd13187198.___.decoder([Kc23b20389114.___.decoder([Kb8cd13187198.___.decoder([K65149ce3b366.___.decoder([])])])])(st)); };
    }
};
var ByPattern = (function () {
    function ByPattern(_0) {
        this._0 = _0;
    }
    ByPattern.prototype.toString = function () { return this.toStr(false); };
    ByPattern.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["ByPattern", this._0.toStr(true)].join(' '));
    };
    ByPattern.prototype.match = function (m) { return m.ByPattern(this._0); };
    ByPattern.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    ByPattern.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return ByPattern;
}());
exports.ByPattern = ByPattern;
//# sourceMappingURL=Kcf6c76b3f808.js.map