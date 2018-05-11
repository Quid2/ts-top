"use strict";
/** ZM Type:
UTF8Encoding ≡   UTF8Encoding
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.$UTF8Encoding = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x0f, 0x44, 0x8b, 0xe8, 0x05, 0x80],
    decoder: function (decoders) {
        return function (st) { return new UTF8Encoding(); };
    }
};
class UTF8Encoding {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "UTF8Encoding"; }
    match(m) { return m.UTF8Encoding; }
    flatMaxSize() { return 0; }
    flatEncode() { }
}
exports.UTF8Encoding = UTF8Encoding;
//# sourceMappingURL=K0f448be80580.js.map