"use strict";
/** ZM Type:
Char ≡   Char K2412799c99f1
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = exports.___ = exports.$Char = void 0;
const Q = require("@quid2/ts-core");
exports.$Char = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x06, 0x6d, 0xb5, 0x2a, 0xf1, 0x45],
    decoder: function (decoders) {
        return function (st) {
            return new Char(st.zmChar(decoders));
        };
    },
};
class Char {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() {
        return Q.EncoderState.szChar(this.value);
    }
    flatEncode(st) {
        st.zmChar(this.value);
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
exports.Char = Char;
//# sourceMappingURL=K066db52af145.js.map