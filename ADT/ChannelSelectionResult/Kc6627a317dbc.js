"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$ChannelSelectionResult = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xc6, 0x62, 0x7a, 0x31, 0x7d, 0xbc],
    decoder: function (decoders) {
        var decs = { "Failure": [Kb8cd13187198.$List(K066db52af145.$Char)(Q.flatDecoder)], "RetryAt": [Q.zmConst(decoders[0])(Q.flatDecoder)] };
        return function (st) { if (st.zero()) {
            return new Success();
        }
        else {
            if (st.zero()) {
                var d = decs["Failure"];
                return new Failure(d[0](st));
            }
            else {
                var d = decs["RetryAt"];
                return new RetryAt(d[0](st));
            }
        } };
    }
};
var Success = (function () {
    function Success() {
    }
    Success.prototype.match = function (m) { return m.Success; };
    Success.prototype.flatMaxSize = function () { return 1 + 0; };
    Success.prototype.flatEncode = function (st) { st.zero(); };
    return Success;
}());
exports.Success = Success;
var Failure = (function () {
    function Failure(reason) {
        this.reason = reason;
    }
    Failure.prototype.match = function (m) { return m.Failure(this.reason); };
    Failure.prototype.flatMaxSize = function () { return 2 + this.reason.flatMaxSize(); };
    Failure.prototype.flatEncode = function (st) { st.one(); st.zero(); this.reason.flatEncode(st); };
    return Failure;
}());
exports.Failure = Failure;
var RetryAt = (function () {
    function RetryAt(_0) {
        this._0 = _0;
    }
    RetryAt.prototype.match = function (m) { return m.RetryAt(this._0); };
    RetryAt.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize(); };
    RetryAt.prototype.flatEncode = function (st) { st.one(); st.one(); this._0.flatEncode(st); };
    return RetryAt;
}());
exports.RetryAt = RetryAt;
//# sourceMappingURL=Kc6627a317dbc.js.map