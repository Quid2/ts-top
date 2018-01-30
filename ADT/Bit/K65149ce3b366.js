"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Bit = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x65, 0x14, 0x9c, 0xe3, 0xb3, 0x66],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new V0();
        }
        else {
            return new V1();
        } };
    }
};
class V0 {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "V0"; }
    match(m) { return m.V0; }
    flatMaxSize() { return 1 + 0; }
    flatEncode(st) { st.zero(); }
}
exports.V0 = V0;
class V1 {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "V1"; }
    match(m) { return m.V1; }
    flatMaxSize() { return 1 + 0; }
    flatEncode(st) { st.one(); }
}
exports.V1 = V1;
//# sourceMappingURL=K65149ce3b366.js.map