"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ByAny = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xa4, 0xd0, 0xbf, 0x8f, 0x6f, 0xb5],
    decoder: function (decoders) {
        return function (st) { return new ByAny(); };
    }
};
var ByAny = (function () {
    function ByAny() {
    }
    ByAny.prototype.match = function (m) { return m.ByAny; };
    ByAny.prototype.flatMaxSize = function () { return 0; };
    ByAny.prototype.flatEncode = function () { };
    return ByAny;
}());
exports.ByAny = ByAny;
//# sourceMappingURL=Ka4d0bf8f6fb5.js.map