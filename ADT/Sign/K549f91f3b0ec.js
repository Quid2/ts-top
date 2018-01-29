"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Sign = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x54, 0x9f, 0x91, 0xf3, 0xb0, 0xec],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Positive();
        }
        else {
            return new Negative();
        } };
    }
};
var Positive = (function () {
    function Positive() {
    }
    Positive.prototype.toString = function () { return this.toStr(false); };
    Positive.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Positive";
    };
    Positive.prototype.match = function (m) { return m.Positive; };
    Positive.prototype.flatMaxSize = function () { return 1 + 0; };
    Positive.prototype.flatEncode = function (st) { st.zero(); };
    return Positive;
}());
exports.Positive = Positive;
var Negative = (function () {
    function Negative() {
    }
    Negative.prototype.toString = function () { return this.toStr(false); };
    Negative.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Negative";
    };
    Negative.prototype.match = function (m) { return m.Negative; };
    Negative.prototype.flatMaxSize = function () { return 1 + 0; };
    Negative.prototype.flatEncode = function (st) { st.one(); };
    return Negative;
}());
exports.Negative = Negative;
//# sourceMappingURL=K549f91f3b0ec.js.map