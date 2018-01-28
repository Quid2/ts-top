"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Filler = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xae, 0x1d, 0xfe, 0xec, 0xe1, 0x89],
    decoder: function (decoders) {
        return function (st) { st.filler(); return new FillerEnd(); };
    }
};
var FillerBit = (function () {
    function FillerBit(_0) {
        this._0 = _0;
    }
    FillerBit.prototype.flatMaxSize = function () { return 8; };
    FillerBit.prototype.flatEncode = function (st) { st.filler(); };
    return FillerBit;
}());
exports.FillerBit = FillerBit;
var FillerEnd = (function () {
    function FillerEnd() {
    }
    FillerEnd.prototype.flatMaxSize = function () { return 8; };
    FillerEnd.prototype.flatEncode = function (st) { st.filler(); };
    return FillerEnd;
}());
exports.FillerEnd = FillerEnd;
//# sourceMappingURL=Filler.js.map