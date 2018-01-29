"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$UTF8Encoding = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x0f, 0x44, 0x8b, 0xe8, 0x05, 0x80],
    decoder: function (decoders) {
        return function (st) { return new UTF8Encoding(); };
    }
};
var UTF8Encoding = (function () {
    function UTF8Encoding() {
    }
    UTF8Encoding.prototype.toString = function () { return this.toStr(false); };
    UTF8Encoding.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "UTF8Encoding";
    };
    UTF8Encoding.prototype.match = function (m) { return m.UTF8Encoding; };
    UTF8Encoding.prototype.flatMaxSize = function () { return 0; };
    UTF8Encoding.prototype.flatEncode = function () { };
    return UTF8Encoding;
}());
exports.UTF8Encoding = UTF8Encoding;
//# sourceMappingURL=K0f448be80580.js.map