"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$ADTRef = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x07, 0xb1, 0xb0, 0x45, 0xac, 0x3c],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Var(Kb1f46a49c8f8.___.decoder([])(st));
        }
        else {
            if (st.zero()) {
                return new Rec();
            }
            else {
                return new Ext(decoders[0](st));
            }
        } };
    }
};
var Var = (function () {
    function Var(_0) {
        this._0 = _0;
    }
    Var.prototype.toString = function () { return this.toStr(false); };
    Var.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Var" + this._0.toStr(true));
    };
    Var.prototype.match = function (m) { return m.Var(this._0); };
    Var.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Var.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Var;
}());
exports.Var = Var;
var Rec = (function () {
    function Rec() {
    }
    Rec.prototype.toString = function () { return this.toStr(false); };
    Rec.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Rec";
    };
    Rec.prototype.match = function (m) { return m.Rec; };
    Rec.prototype.flatMaxSize = function () { return 2 + 0; };
    Rec.prototype.flatEncode = function (st) { st.one(); st.zero(); };
    return Rec;
}());
exports.Rec = Rec;
var Ext = (function () {
    function Ext(_0) {
        this._0 = _0;
    }
    Ext.prototype.toString = function () { return this.toStr(false); };
    Ext.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Ext" + this._0.toStr(true));
    };
    Ext.prototype.match = function (m) { return m.Ext(this._0); };
    Ext.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize(); };
    Ext.prototype.flatEncode = function (st) { st.one(); st.one(); this._0.flatEncode(st); };
    return Ext;
}());
exports.Ext = Ext;
//# sourceMappingURL=K07b1b045ac3c.js.map