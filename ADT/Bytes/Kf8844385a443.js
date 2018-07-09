"use strict";
/** ZM Type:
Bytes ≡   Bytes (Kb2f28cf37d12 (K2e8b4519aeaa Kb1f46a49c8f8))
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
exports.$Bytes = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf8, 0x84, 0x43, 0x85, 0xa4, 0x43],
    decoder: function (decoders) {
        return function (st) { return new Bytes(st.zmBytes(decoders)); };
    }
};
var Bytes = /** @class */ (function () {
    function Bytes(value) {
        this.value = value;
    }
    Bytes.prototype.flatMaxSize = function () { return Q.EncoderState.szBytes(this.value); };
    Bytes.prototype.flatEncode = function (st) { st.zmBytes(this.value); };
    Bytes.prototype.toString = function () { return this.toStr(false); };
    Bytes.prototype.toStr = function (nested) { return this.value.toString(); };
    Bytes.prototype.pretty = function (nested) { return this.toString(); };
    return Bytes;
}());
exports.Bytes = Bytes;
