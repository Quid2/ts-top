"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$String = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x2f, 0x00, 0x65, 0x95, 0x63, 0x8c],
    decoder: function (decoders) {
        return function (st) { return new String(st.string()); };
    }
};
class String {
    constructor(value) {
        this.value = value;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return '"' + this.value.toString() + '"'; }
    flatMaxSize() { return this.value.length * 25 + 1; }
    flatEncode(st) { st.string(this.value); }
}
exports.String = String;
//# sourceMappingURL=String.js.map