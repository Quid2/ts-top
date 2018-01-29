"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
exports.$ZigZag = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x03, 0x22, 0x67, 0x96, 0xed, 0xe4],
    decoder: function (decoders) {
        return function (st) { return new ZigZag(decoders[0](st)); };
    }
};
var ZigZag = (function () {
    function ZigZag(_0) {
        this._0 = _0;
    }
    ZigZag.prototype.toString = function () { return this.toStr(false); };
    ZigZag.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["ZigZag", this._0.toStr(true)].join(' '));
    };
    ZigZag.prototype.match = function (m) { return m.ZigZag(this._0); };
    ZigZag.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    ZigZag.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return ZigZag;
}());
exports.ZigZag = ZigZag;
//# sourceMappingURL=K03226796ede4.js.map