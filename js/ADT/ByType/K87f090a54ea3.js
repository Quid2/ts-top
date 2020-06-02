"use strict";
/** ZM Type:
ByType a ≡   ByType
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByType = exports.___ = exports.$ByType = void 0;
exports.$ByType = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0x87, 0xf0, 0x90, 0xa5, 0x4e, 0xa3],
    decoder: function (decoders) {
        return function (st) {
            return new ByType();
        };
    },
};
class ByType {
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return "ByType";
    }
    pretty(nested = false) {
        return "ByType";
    }
    match(m) {
        return m.ByType;
    }
    flatMaxSize() {
        return 0;
    }
    flatEncode() { }
}
exports.ByType = ByType;
//# sourceMappingURL=K87f090a54ea3.js.map