"use strict";
/** ZM Type:
Word32 ≡   Word32 Kf92e8339908a
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word32 = exports.___ = exports.$Word32 = void 0;
const Q = require("@quid2/ts-core");
exports.$Word32 = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x24, 0x12, 0x79, 0x9c, 0x99, 0xf1],
    decoder: function (decoders) {
        return function (st) {
            return new Word32(st.zmWord32(decoders));
        };
    },
};
class Word32 {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() {
        return Q.EncoderState.szWord32(this.value);
    }
    flatEncode(st) {
        st.zmWord32(this.value);
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
exports.Word32 = Word32;
//# sourceMappingURL=K2412799c99f1.js.map