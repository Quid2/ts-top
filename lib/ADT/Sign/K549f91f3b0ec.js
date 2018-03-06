"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Sign = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x54, 0x9f, 0x91, 0xf3, 0xb0, 0xec],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Positive();
        }
        else {
            return new Negative();
        } };
    }
};
class Positive {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "Positive"; }
    match(m) { return m.Positive; }
    flatMaxSize() { return 1 + 0; }
    flatEncode(st) { st.zero(); }
}
exports.Positive = Positive;
class Negative {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "Negative"; }
    match(m) { return m.Negative; }
    flatMaxSize() { return 1 + 0; }
    flatEncode(st) { st.one(); }
}
exports.Negative = Negative;
//# sourceMappingURL=K549f91f3b0ec.js.map