"use strict";
/** ZM Type:
Bytes ≡   Bytes (Kb2f28cf37d12 (K2e8b4519aeaa Kb1f46a49c8f8))
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bytes = exports.___ = exports.$Bytes = void 0;
const Q = require("@quid2/ts-core");
exports.$Bytes = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0xf8, 0x84, 0x43, 0x85, 0xa4, 0x43],
    decoder: function (decoders) {
        return function (st) {
            return new Bytes(st.zmBytes(decoders));
        };
    },
};
class Bytes {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() {
        return Q.EncoderState.szBytes(this.value);
    }
    flatEncode(st) {
        st.zmBytes(this.value);
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested) {
        return this.value.toString();
    }
    pretty(nested) {
        return this.toString();
    }
}
exports.Bytes = Bytes;
//# sourceMappingURL=Kf8844385a443.js.map