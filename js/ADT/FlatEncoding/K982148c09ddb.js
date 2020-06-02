"use strict";
/** ZM Type:
FlatEncoding ≡   FlatEncoding
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatEncoding = exports.___ = exports.$FlatEncoding = void 0;
exports.$FlatEncoding = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x98, 0x21, 0x48, 0xc0, 0x9d, 0xdb],
    decoder: function (decoders) {
        return function (st) {
            return new FlatEncoding();
        };
    },
};
class FlatEncoding {
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return "FlatEncoding";
    }
    pretty(nested = false) {
        return "FlatEncoding";
    }
    match(m) {
        return m.FlatEncoding;
    }
    flatMaxSize() {
        return 0;
    }
    flatEncode() { }
}
exports.FlatEncoding = FlatEncoding;
//# sourceMappingURL=K982148c09ddb.js.map