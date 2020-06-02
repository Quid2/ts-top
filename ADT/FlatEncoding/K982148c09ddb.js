"use strict";
/** ZM Type:
FlatEncoding ≡   FlatEncoding
*/
exports.__esModule = true;
exports.FlatEncoding = exports.___ = exports.$FlatEncoding = void 0;
exports.$FlatEncoding = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x98, 0x21, 0x48, 0xc0, 0x9d, 0xdb],
    decoder: function (decoders) {
        return function (st) {
            return new FlatEncoding();
        };
    }
};
var FlatEncoding = /** @class */ (function () {
    function FlatEncoding() {
    }
    FlatEncoding.prototype.toString = function () {
        return this.toStr(false);
    };
    FlatEncoding.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "FlatEncoding";
    };
    FlatEncoding.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "FlatEncoding";
    };
    FlatEncoding.prototype.match = function (m) {
        return m.FlatEncoding;
    };
    FlatEncoding.prototype.flatMaxSize = function () {
        return 0;
    };
    FlatEncoding.prototype.flatEncode = function () { };
    return FlatEncoding;
}());
exports.FlatEncoding = FlatEncoding;
