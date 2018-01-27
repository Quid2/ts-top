"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeLetter = function (f) { return f(___, []); };
var ___ = {
    zid: [0x38, 0x78, 0xb3, 0x58, 0x0f, 0xc5],
    decoder: function (decoders) {
        var decs = { "UnicodeLetter": [K066db52af145.$Char(Q.flatDecoder)] };
        return function (st) { var d = decs["UnicodeLetter"]; return new UnicodeLetter(d[0](st)); };
    }
};
var UnicodeLetter = (function () {
    function UnicodeLetter(_0) {
        this._0 = _0;
    }
    UnicodeLetter.prototype.match = function (m) { return m.UnicodeLetter(this._0); };
    UnicodeLetter.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    UnicodeLetter.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return UnicodeLetter;
}());
exports.UnicodeLetter = UnicodeLetter;
//# sourceMappingURL=K3878b3580fc5.js.map