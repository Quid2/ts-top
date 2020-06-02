"use strict";
/** ZM Type:
ChannelSelectionResult a ≡   Success
                           | Failure {reason :: Kb8cd13187198 K066db52af145}
                           | RetryAt a
*/
exports.__esModule = true;
exports.RetryAt = exports.Failure = exports.Success = exports.___ = exports.$ChannelSelectionResult = void 0;
var Q = require("@quid2/ts-core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$ChannelSelectionResult = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0xc6, 0x62, 0x7a, 0x31, 0x7d, 0xbc],
    decoder: function (decoders) {
        return function (st) {
            if (st.zero()) {
                return new Success();
            }
            else {
                if (st.zero()) {
                    return new Failure(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
                }
                else {
                    return new RetryAt(decoders[0](st));
                }
            }
        };
    }
};
var Success = /** @class */ (function () {
    function Success() {
    }
    Success.prototype.toString = function () {
        return this.toStr(false);
    };
    Success.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Success";
    };
    Success.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Success";
    };
    Success.prototype.match = function (m) {
        return m.Success;
    };
    Success.prototype.flatMaxSize = function () {
        return 1 + 0;
    };
    Success.prototype.flatEncode = function (st) {
        st.zero();
    };
    return Success;
}());
exports.Success = Success;
var Failure = /** @class */ (function () {
    function Failure(reason) {
        this.reason = reason;
    }
    Failure.prototype.toString = function () {
        return this.toStr(false);
    };
    Failure.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Failure", this.reason.toStr(true)].join(" "));
    };
    Failure.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Failure", this.reason.pretty(true)].join(" "));
    };
    Failure.prototype.match = function (m) {
        return m.Failure(this.reason);
    };
    Failure.prototype.flatMaxSize = function () {
        return 2 + this.reason.flatMaxSize();
    };
    Failure.prototype.flatEncode = function (st) {
        st.one();
        st.zero();
        this.reason.flatEncode(st);
    };
    return Failure;
}());
exports.Failure = Failure;
var RetryAt = /** @class */ (function () {
    function RetryAt(_0) {
        this._0 = _0;
    }
    RetryAt.prototype.toString = function () {
        return this.toStr(false);
    };
    RetryAt.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["RetryAt", this._0.toStr(true)].join(" "));
    };
    RetryAt.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["RetryAt", this._0.pretty(true)].join(" "));
    };
    RetryAt.prototype.match = function (m) {
        return m.RetryAt(this._0);
    };
    RetryAt.prototype.flatMaxSize = function () {
        return 2 + this._0.flatMaxSize();
    };
    RetryAt.prototype.flatEncode = function (st) {
        st.one();
        st.one();
        this._0.flatEncode(st);
    };
    return RetryAt;
}());
exports.RetryAt = RetryAt;
