"use strict";
/** ZM Type:
ZM ≡   ZM
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZM = exports.___ = exports.$ZM = void 0;
exports.$ZM = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0xb3, 0xa4, 0x0b, 0xdd, 0xa2, 0x6f],
    decoder: function (decoders) {
        return function (st) {
            return new ZM();
        };
    },
};
class ZM {
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return "ZM";
    }
    pretty(nested = false) {
        return "ZM";
    }
    match(m) {
        return m.ZM;
    }
    flatMaxSize() {
        return 0;
    }
    flatEncode() { }
}
exports.ZM = ZM;
//# sourceMappingURL=Kb3a40bdda26f.js.map