"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../core");
exports.$Bytes = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf8, 0x84, 0x43, 0x85, 0xa4, 0x43],
    decoder: function (decoders) {
        return function (st) { st.filler(); return new Bytes(st.byteArray()); };
    }
};
class Bytes {
    constructor(bytes) {
        this.bytes = bytes;
    }
    flatMaxSize() {
        return 8 + Q.byteArraySize(this.bytes); // Up to 8 bits for prefiller plus aligned byte array size
    }
    flatEncode(st) { st.filler(); st.byteArray(this.bytes); }
    toString() { return this.toStr(); }
    toStr(nested = false) { return this.bytes.toString(); }
}
exports.Bytes = Bytes;
//# sourceMappingURL=Bytes.js.map