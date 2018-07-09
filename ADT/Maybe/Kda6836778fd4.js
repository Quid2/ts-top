"use strict";
/** ZM Type:
Maybe a ≡   Nothing
          | Just a
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
exports.$Maybe = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xda, 0x68, 0x36, 0x77, 0x8f, 0xd4],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Nothing();
        }
        else {
            return new Just(decoders[0](st));
        } };
    }
};
var Nothing = /** @class */ (function () {
    function Nothing() {
    }
    Nothing.prototype.toString = function () { return this.toStr(false); };
    Nothing.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Nothing";
    };
    Nothing.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Nothing";
    };
    Nothing.prototype.match = function (m) { return m.Nothing; };
    Nothing.prototype.flatMaxSize = function () { return 1 + 0; };
    Nothing.prototype.flatEncode = function (st) { st.zero(); };
    return Nothing;
}());
exports.Nothing = Nothing;
var Just = /** @class */ (function () {
    function Just(_0) {
        this._0 = _0;
    }
    Just.prototype.toString = function () { return this.toStr(false); };
    Just.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Just", this._0.toStr(true)].join(' '));
    };
    Just.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Just", this._0.pretty(true)].join(' '));
    };
    Just.prototype.match = function (m) { return m.Just(this._0); };
    Just.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Just.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return Just;
}());
exports.Just = Just;
