"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$HostAddress = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x64, 0xf9, 0x3d, 0x94, 0xa7, 0x3d],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new IPAddress(decoders[0](st));
        }
        else {
            return new DNSAddress(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
        } };
    }
};
var IPAddress = (function () {
    function IPAddress(_0) {
        this._0 = _0;
    }
    IPAddress.prototype.toString = function () { return this.toStr(false); };
    IPAddress.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "IPAddress" + this._0.toStr(true));
    };
    IPAddress.prototype.match = function (m) { return m.IPAddress(this._0); };
    IPAddress.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    IPAddress.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return IPAddress;
}());
exports.IPAddress = IPAddress;
var DNSAddress = (function () {
    function DNSAddress(_0) {
        this._0 = _0;
    }
    DNSAddress.prototype.toString = function () { return this.toStr(false); };
    DNSAddress.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "DNSAddress" + this._0.toStr(true));
    };
    DNSAddress.prototype.match = function (m) { return m.DNSAddress(this._0); };
    DNSAddress.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    DNSAddress.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return DNSAddress;
}());
exports.DNSAddress = DNSAddress;
//# sourceMappingURL=K64f93d94a73d.js.map