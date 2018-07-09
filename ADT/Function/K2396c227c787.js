"use strict";
/** ZM Type:
Function a b ≡   Call a
               | Reply (K9f214799149b a) b
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K9f214799149b = require("../SHAKE128_48/K9f214799149b");
exports.$Function = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x23, 0x96, 0xc2, 0x27, 0xc7, 0x87],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Call(decoders[0](st));
        }
        else {
            return new Reply(K9f214799149b.___.decoder([decoders[0]])(st), decoders[1](st));
        } };
    }
};
var Call = /** @class */ (function () {
    function Call(_0) {
        this._0 = _0;
    }
    Call.prototype.toString = function () { return this.toStr(false); };
    Call.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Call", this._0.toStr(true)].join(' '));
    };
    Call.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Call", this._0.pretty(true)].join(' '));
    };
    Call.prototype.match = function (m) { return m.Call(this._0); };
    Call.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Call.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Call;
}());
exports.Call = Call;
var Reply = /** @class */ (function () {
    function Reply(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Reply.prototype.toString = function () { return this.toStr(false); };
    Reply.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Reply", this._0.toStr(true), this._1.toStr(true)].join(' '));
    };
    Reply.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Reply", this._0.pretty(true), this._1.pretty(true)].join(' '));
    };
    Reply.prototype.match = function (m) { return m.Reply(this._0, this._1); };
    Reply.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Reply.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Reply;
}());
exports.Reply = Reply;
