"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$AbsRef = function (f) { return f(___, []); };
var ___ = {
    zid: [0x4b, 0xbd, 0x38, 0x58, 0x7b, 0x9e],
    decoder: function (decoders) {
        return function (st) { return new AbsRef(decoders[0](st)); };
    }
};
var AbsRef = (function () {
    function AbsRef(_0) {
        this._0 = _0;
    }
    AbsRef.prototype.match = function (m) { return m.AbsRef(this._0); };
    AbsRef.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    AbsRef.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return AbsRef;
}());
exports.AbsRef = AbsRef;
//# sourceMappingURL=K4bbd38587b9e.js.map