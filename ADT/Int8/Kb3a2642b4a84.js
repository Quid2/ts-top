"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K03226796ede4 = require("../ZigZag/K03226796ede4");
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$Int8 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xb3, 0xa2, 0x64, 0x2b, 0x4a, 0x84],
    decoder: function (decoders) {
        return function (st) { return new Int8(K03226796ede4.___.decoder([Kb1f46a49c8f8.___.decoder([])])(st)); };
    }
};
var Int8 = (function () {
    function Int8(_0) {
        this._0 = _0;
    }
    Int8.prototype.toString = function () { return this.toStr(false); };
    Int8.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Int8" + this._0.toStr(true));
    };
    Int8.prototype.match = function (m) { return m.Int8(this._0); };
    Int8.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Int8.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Int8;
}());
exports.Int8 = Int8;
//# sourceMappingURL=Kb3a2642b4a84.js.map