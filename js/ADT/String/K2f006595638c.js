"use strict";
/** ZM Type:
String ≡   String (Kb8cd13187198 K066db52af145)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = exports.___ = exports.$String = void 0;
const Q = require("@quid2/ts-core");
exports.$String = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x2f, 0x00, 0x65, 0x95, 0x63, 0x8c],
    decoder: function (decoders) {
        return function (st) {
            return new String(st.zmString(decoders));
        };
    },
};
class String {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() {
        return Q.EncoderState.szString(this.value);
    }
    flatEncode(st) {
        st.zmString(this.value);
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
exports.String = String;
//# sourceMappingURL=K2f006595638c.js.map