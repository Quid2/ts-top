"use strict";
/** ZM Type:
ByAny a ≡   ByAny
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ByAny = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xa4, 0xd0, 0xbf, 0x8f, 0x6f, 0xb5],
    decoder: function (decoders) {
        return function (st) { return new ByAny(); };
    }
};
class ByAny {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "ByAny"; }
    match(m) { return m.ByAny; }
    flatMaxSize() { return 0; }
    flatEncode() { }
}
exports.ByAny = ByAny;
//# sourceMappingURL=Ka4d0bf8f6fb5.js.map