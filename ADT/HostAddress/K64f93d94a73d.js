"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$HostAddress = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0x64, 0xf9, 0x3d, 0x94, 0xa7, 0x3d],
    decoder: function (decoders) {
        var decs = { "IPAddress": [Q.zmConst(decoders[0])(Q.flatDecoder)], "DNSAddress": [Kb8cd13187198.$List(K066db52af145.$Char)(Q.flatDecoder)] };
        return function (st) { if (st.zero()) {
            var d = decs["IPAddress"];
            return new IPAddress(d[0](st));
        }
        else {
            var d = decs["DNSAddress"];
            return new DNSAddress(d[0](st));
        } };
    }
};
var IPAddress = (function () {
    function IPAddress(_0) {
        this._0 = _0;
    }
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
    DNSAddress.prototype.match = function (m) { return m.DNSAddress(this._0); };
    DNSAddress.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    DNSAddress.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return DNSAddress;
}());
exports.DNSAddress = DNSAddress;
//# sourceMappingURL=K64f93d94a73d.js.map