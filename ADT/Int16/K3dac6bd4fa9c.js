"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K03226796ede4 = require("../ZigZag/K03226796ede4");
var K295e24d62fac = require("../Word16/K295e24d62fac");
exports.$Int16 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x3d, 0xac, 0x6b, 0xd4, 0xfa, 0x9c],
    decoder: function (decoders) {
        return function (st) { return new Int16(K03226796ede4.___.decoder([K295e24d62fac.___.decoder([])])(st)); };
    }
};
var Int16 = (function () {
    function Int16(_0) {
        this._0 = _0;
    }
    Int16.prototype.toString = function () { return this.toStr(false); };
    Int16.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Int16", this._0.toStr(true)].join(' '));
    };
    Int16.prototype.match = function (m) { return m.Int16(this._0); };
    Int16.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Int16.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Int16;
}());
exports.Int16 = Int16;
//# sourceMappingURL=K3dac6bd4fa9c.js.map