"use strict";
/** ZM Type:
ByType a ≡   ByType
*/
exports.__esModule = true;
exports.ByType = exports.___ = exports.$ByType = void 0;
exports.$ByType = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0x87, 0xf0, 0x90, 0xa5, 0x4e, 0xa3],
    decoder: function (decoders) {
        return function (st) {
            return new ByType();
        };
    }
};
var ByType = /** @class */ (function () {
    function ByType() {
    }
    ByType.prototype.toString = function () {
        return this.toStr(false);
    };
    ByType.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "ByType";
    };
    ByType.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "ByType";
    };
    ByType.prototype.match = function (m) {
        return m.ByType;
    };
    ByType.prototype.flatMaxSize = function () {
        return 0;
    };
    ByType.prototype.flatEncode = function () { };
    return ByType;
}());
exports.ByType = ByType;
