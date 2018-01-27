"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K7028aa556ebc = require("../Type/K7028aa556ebc");
var K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
exports.$Match = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xc2, 0x3b, 0x20, 0x38, 0x91, 0x14],
    decoder: function (decoders) {
        var decs = { "MatchValue": [Q.zmConst(decoders[0])(Q.flatDecoder)], "MatchAny": [K7028aa556ebc.$Type(K4bbd38587b9e.$AbsRef)(Q.flatDecoder)] };
        return function (st) { if (st.zero()) {
            var d = decs["MatchValue"];
            return new MatchValue(d[0](st));
        }
        else {
            var d = decs["MatchAny"];
            return new MatchAny(d[0](st));
        } };
    }
};
var MatchValue = (function () {
    function MatchValue(_0) {
        this._0 = _0;
    }
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
    MatchAny.prototype.match = function (m) { return m.MatchAny(this._0); };
    MatchAny.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    MatchAny.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return MatchAny;
}());
exports.MatchAny = MatchAny;
//# sourceMappingURL=Kc23b20389114.js.map