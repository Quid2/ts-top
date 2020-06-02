"use strict";
/** ZM Type:
Filler ≡   FillerBit ↫
         | FillerEnd
*/
exports.__esModule = true;
exports.Filler = exports.___ = exports.$Filler = void 0;
var Q = require("@quid2/ts-core");
exports.$Filler = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0xae, 0x1d, 0xfe, 0xec, 0xe1, 0x89],
    decoder: function (decoders) {
        return function (st) {
            return new Filler(st.zmFiller(decoders));
        };
    }
};
var Filler = /** @class */ (function () {
    function Filler(value) {
        this.value = value;
    }
    Filler.prototype.flatMaxSize = function () {
        return Q.EncoderState.szFiller(this.value);
    };
    Filler.prototype.flatEncode = function (st) {
        st.zmFiller(this.value);
    };
    Filler.prototype.toString = function () {
        return this.toStr(false);
    };
    Filler.prototype.toStr = function (nested) {
        return this.value.toString();
    };
    Filler.prototype.pretty = function (nested) {
        return this.toString();
    };
    return Filler;
}());
exports.Filler = Filler;
