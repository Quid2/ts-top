"use strict";
/** ZM Type:
String ≡   String (Kb8cd13187198 K066db52af145)
*/
exports.__esModule = true;
exports.String = exports.___ = exports.$String = void 0;
var Q = require("@quid2/ts-core");
exports.$String = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x2f, 0x00, 0x65, 0x95, 0x63, 0x8c],
    decoder: function (decoders) {
        return function (st) {
            return new String(st.zmString(decoders));
        };
    }
};
var String = /** @class */ (function () {
    function String(value) {
        this.value = value;
    }
    String.prototype.flatMaxSize = function () {
        return Q.EncoderState.szString(this.value);
    };
    String.prototype.flatEncode = function (st) {
        st.zmString(this.value);
    };
    String.prototype.toString = function () {
        return this.toStr(false);
    };
    String.prototype.toStr = function (nested) {
        return this.value.toString();
    };
    String.prototype.pretty = function (nested) {
        return this.toString();
    };
    return String;
}());
exports.String = String;
