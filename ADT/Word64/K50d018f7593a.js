"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kf92e8339908a = require("../Word/Kf92e8339908a");
exports.$Word64 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x50, 0xd0, 0x18, 0xf7, 0x59, 0x3a],
    decoder: function (decoders) {
        return function (st) { return new Word64(Kf92e8339908a.___.decoder([])(st)); };
    }
};
var Word64 = (function () {
    function Word64(_0) {
        this._0 = _0;
    }
    Word64.prototype.toString = function () { return this.toStr(false); };
    Word64.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Word64" + this._0.toStr(true));
    };
    Word64.prototype.match = function (m) { return m.Word64(this._0); };
    Word64.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Word64.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Word64;
}());
exports.Word64 = Word64;
//# sourceMappingURL=K50d018f7593a.js.map