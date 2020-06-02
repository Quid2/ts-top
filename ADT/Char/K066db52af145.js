"use strict";
/** ZM Type:
Char ≡   Char K2412799c99f1
*/
exports.__esModule = true;
exports.Char = exports.___ = exports.$Char = void 0;
var Q = require("@quid2/ts-core");
exports.$Char = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x06, 0x6d, 0xb5, 0x2a, 0xf1, 0x45],
    decoder: function (decoders) {
        return function (st) {
            return new Char(st.zmChar(decoders));
        };
    }
};
var Char = /** @class */ (function () {
    function Char(value) {
        this.value = value;
    }
    Char.prototype.flatMaxSize = function () {
        return Q.EncoderState.szChar(this.value);
    };
    Char.prototype.flatEncode = function (st) {
        st.zmChar(this.value);
    };
    Char.prototype.toString = function () {
        return this.toStr(false);
    };
    Char.prototype.toStr = function (nested) {
        return this.value.toString();
    };
    Char.prototype.pretty = function (nested) {
        return this.toString();
    };
    return Char;
}());
exports.Char = Char;
