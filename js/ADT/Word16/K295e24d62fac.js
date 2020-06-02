"use strict";
/** ZM Type:
Word16 ≡   Word16 Kf92e8339908a
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word16 = exports.___ = exports.$Word16 = void 0;
const Q = require("@quid2/ts-core");
exports.$Word16 = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x29, 0x5e, 0x24, 0xd6, 0x2f, 0xac],
    decoder: function (decoders) {
        return function (st) {
            return new Word16(st.zmWord16(decoders));
        };
    },
};
class Word16 {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() {
        return Q.EncoderState.szWord16(this.value);
    }
    flatEncode(st) {
        st.zmWord16(this.value);
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
exports.Word16 = Word16;
//# sourceMappingURL=K295e24d62fac.js.map