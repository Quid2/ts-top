"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../core");
exports.$Bytes = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf8, 0x84, 0x43, 0x85, 0xa4, 0x43],
    decoder: function (decoders) {
        return function (st) { st.filler(); return new Bytes(st.byteArray()); };
    }
};
var Bytes = (function () {
    function Bytes(bytes) {
        this.bytes = bytes;
    }
    Bytes.prototype.flatMaxSize = function () {
        return 8 + Q.byteArraySize(this.bytes);
    };
    Bytes.prototype.flatEncode = function (st) { st.filler(); st.byteArray(this.bytes); };
    Bytes.prototype.toString = function () { return this.toStr(); };
    Bytes.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return this.bytes.toString();
    };
    return Bytes;
}());
exports.Bytes = Bytes;
//# sourceMappingURL=Bytes.js.map