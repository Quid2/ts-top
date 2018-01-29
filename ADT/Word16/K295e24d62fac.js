"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kf92e8339908a = require("../Word/Kf92e8339908a");
exports.$Word16 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x29, 0x5e, 0x24, 0xd6, 0x2f, 0xac],
    decoder: function (decoders) {
        return function (st) { return new Word16(Kf92e8339908a.___.decoder([])(st)); };
    }
};
var Word16 = (function () {
    function Word16(_0) {
        this._0 = _0;
    }
    Word16.prototype.toString = function () { return this.toStr(false); };
    Word16.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Word16" + this._0.toStr(true));
    };
    Word16.prototype.match = function (m) { return m.Word16(this._0); };
    Word16.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Word16.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Word16;
}());
exports.Word16 = Word16;
//# sourceMappingURL=K295e24d62fac.js.map