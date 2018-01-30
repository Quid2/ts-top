"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Filler = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xae, 0x1d, 0xfe, 0xec, 0xe1, 0x89],
    decoder: function (decoders) {
        return function (st) { st.filler(); return new FillerEnd(); };
    }
};
class FillerBit {
    constructor(_0) {
        this._0 = _0;
    }
    flatMaxSize() { return 8; }
    flatEncode(st) { st.filler(); }
    toStr(nested = false) { return "Filler"; }
}
exports.FillerBit = FillerBit;
class FillerEnd {
    flatMaxSize() { return 8; }
    flatEncode(st) { st.filler(); }
    toString() { return this.toStr(); }
    toStr(nested = false) { return "Filler"; }
}
exports.FillerEnd = FillerEnd;
//# sourceMappingURL=Filler.js.map