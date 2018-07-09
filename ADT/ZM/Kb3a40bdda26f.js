"use strict";
/** ZM Type:
ZM ≡   ZM
*/
exports.__esModule = true;
exports.$ZM = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xb3, 0xa4, 0x0b, 0xdd, 0xa2, 0x6f],
    decoder: function (decoders) {
        return function (st) { return new ZM(); };
    }
};
var ZM = /** @class */ (function () {
    function ZM() {
    }
    ZM.prototype.toString = function () { return this.toStr(false); };
    ZM.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "ZM";
    };
    ZM.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "ZM";
    };
    ZM.prototype.match = function (m) { return m.ZM; };
    ZM.prototype.flatMaxSize = function () { return 0; };
    ZM.prototype.flatEncode = function () { };
    return ZM;
}());
exports.ZM = ZM;
