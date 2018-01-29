"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$Content = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x1b, 0xa2, 0x30, 0xd9, 0x2e, 0xb8],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new TextMsg(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
        }
        else {
            return new Join();
        } };
    }
};
var TextMsg = (function () {
    function TextMsg(_0) {
        this._0 = _0;
    }
    TextMsg.prototype.toString = function () { return this.toStr(false); };
    TextMsg.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "TextMsg" + this._0.toStr(true));
    };
    TextMsg.prototype.match = function (m) { return m.TextMsg(this._0); };
    TextMsg.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    TextMsg.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return TextMsg;
}());
exports.TextMsg = TextMsg;
var Join = (function () {
    function Join() {
    }
    Join.prototype.toString = function () { return this.toStr(false); };
    Join.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Join";
    };
    Join.prototype.match = function (m) { return m.Join; };
    Join.prototype.flatMaxSize = function () { return 1 + 0; };
    Join.prototype.flatEncode = function (st) { st.one(); };
    return Join;
}());
exports.Join = Join;
//# sourceMappingURL=K1ba230d92eb8.js.map