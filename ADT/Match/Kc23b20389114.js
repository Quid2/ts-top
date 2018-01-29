"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K7028aa556ebc = require("../Type/K7028aa556ebc");
var K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
exports.$Match = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xc2, 0x3b, 0x20, 0x38, 0x91, 0x14],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new MatchValue(decoders[0](st));
        }
        else {
            return new MatchAny(K7028aa556ebc.___.decoder([K4bbd38587b9e.___.decoder([])])(st));
        } };
    }
};
var MatchValue = (function () {
    function MatchValue(_0) {
        this._0 = _0;
    }
    MatchValue.prototype.toString = function () { return this.toStr(false); };
    MatchValue.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["MatchValue", this._0.toStr(true)].join(' '));
    };
    MatchValue.prototype.match = function (m) { return m.MatchValue(this._0); };
    MatchValue.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    MatchValue.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return MatchValue;
}());
exports.MatchValue = MatchValue;
var MatchAny = (function () {
    function MatchAny(_0) {
        this._0 = _0;
    }
    MatchAny.prototype.toString = function () { return this.toStr(false); };
    MatchAny.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["MatchAny", this._0.toStr(true)].join(' '));
    };
    MatchAny.prototype.match = function (m) { return m.MatchAny(this._0); };
    MatchAny.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    MatchAny.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return MatchAny;
}());
exports.MatchAny = MatchAny;
//# sourceMappingURL=Kc23b20389114.js.map