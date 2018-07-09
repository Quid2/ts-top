"use strict";
/** ZM Type:
Array a ≡   A0
          | A1 a (↫ a)
          | A2 a a (↫ a)
          | A3 a a a (↫ a)
          
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
exports.$Array = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x2e, 0x8b, 0x45, 0x19, 0xae, 0xaa],
    decoder: function (decoders) {
        return function (st) { return new Array(st.zmArray(decoders)); };
    }
};
var Array = /** @class */ (function () {
    function Array(value) {
        this.value = value;
    }
    Array.prototype.flatMaxSize = function () { return Q.EncoderState.szArray(this.value); };
    Array.prototype.flatEncode = function (st) { st.zmArray(this.value); };
    Array.prototype.toString = function () { return this.toStr(false); };
    Array.prototype.toStr = function (nested) { return this.value.toString(); };
    Array.prototype.pretty = function (nested) { return this.toString(); };
    return Array;
}());
exports.Array = Array;
