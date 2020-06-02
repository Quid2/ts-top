"use strict";
/** ZM Type:
Filler ≡   FillerBit ↫
         | FillerEnd
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filler = exports.___ = exports.$Filler = void 0;
const Q = require("@quid2/ts-core");
exports.$Filler = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0xae, 0x1d, 0xfe, 0xec, 0xe1, 0x89],
    decoder: function (decoders) {
        return function (st) {
            return new Filler(st.zmFiller(decoders));
        };
    },
};
class Filler {
    constructor(value) {
        this.value = value;
    }
    flatMaxSize() {
        return Q.EncoderState.szFiller(this.value);
    }
    flatEncode(st) {
        st.zmFiller(this.value);
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
exports.Filler = Filler;
//# sourceMappingURL=Kae1dfeece189.js.map