"use strict";
/** ZM Type:
Array a ≡   A0
          | A1 a (↫ a)
          | A2 a a (↫ a)
          | A3 a a a (↫ a)
          | A4 a a a a (↫ a)
          | A5 a a a a a (↫ a)
          | A6 a a a a a a (↫ a)
          | A7 a a a a a a a (↫ a)
          | A8 a a a a a a a a (↫ a)
          | A9 a a a a a a a a a (↫ a)
          | A10 a a a a a a a a a a (↫ a)
          | A11 a a a a a a a a a a a (↫ a)
          | A12 a a a a a a a a a a a a (↫ a)
          | A13 a a a a a a a a a a a a a (↫ a)
          | A14 a a a a a a a a a a a a a a (↫ a)
          | A15 a a a a a a a a a a a a a a a (↫ a)
          | A16 a a a a a a a a a a a a a a a a (↫ a)
          | A17 a a a a a a a a a a a a a a a a a (↫ a)
          | A18 a a a a a a a a a a a a a a a a a a (↫ a)
          | A19 a a a a a a a a a a a a a a a a a a a (↫ a)
          | A20 a a a a a a a a a a a a a a a a a a a a (↫ a)
          | A21 a a a a a a a a a a a a a a a a a a a a a (↫ a)
          | A22 a a a a a a a a a a a a a a a a a a a a a a (↫ a)
    
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
