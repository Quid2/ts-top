"use strict";
exports.__esModule = true;
exports.$Filler = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xae, 0x1d, 0xfe, 0xec, 0xe1, 0x89],
    decoder: function (decoders) {
        return function (st) { st.filler(); return new FillerEnd(); };
    }
};
var FillerBit = /** @class */ (function () {
    function FillerBit(_0) {
        this._0 = _0;
    }
    FillerBit.prototype.flatMaxSize = function () { return 8; };
    FillerBit.prototype.flatEncode = function (st) { st.filler(); };
    FillerBit.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Filler";
    };
    FillerBit.prototype.pretty = function (nested) { return this.toString(); };
    return FillerBit;
}());
exports.FillerBit = FillerBit;
var FillerEnd = /** @class */ (function () {
    function FillerEnd() {
    }
    FillerEnd.prototype.flatMaxSize = function () { return 8; };
    FillerEnd.prototype.flatEncode = function (st) { st.filler(); };
    FillerEnd.prototype.toString = function () { return this.toStr(); };
    FillerEnd.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Filler";
    };
    FillerEnd.prototype.pretty = function (nested) { return this.toString(); };
    return FillerEnd;
}());
exports.FillerEnd = FillerEnd;
