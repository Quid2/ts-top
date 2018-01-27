"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K295e24d62fac = require("../Word16/K295e24d62fac");
exports.$HostPort = function (f) { return f(___, []); };
var ___ = {
    zid: [0x0a, 0xb5, 0xac, 0x63, 0x03, 0xb9],
    decoder: function (decoders) {
        var decs = { "HostPort": [K295e24d62fac.$Word16(Q.flatDecoder)] };
        return function (st) { var d = decs["HostPort"]; return new HostPort(d[0](st)); };
    }
};
var HostPort = (function () {
    function HostPort(port) {
        this.port = port;
    }
    HostPort.prototype.match = function (m) { return m.HostPort(this.port); };
    HostPort.prototype.flatMaxSize = function () { return this.port.flatMaxSize(); };
    HostPort.prototype.flatEncode = function (st) { this.port.flatEncode(st); };
    return HostPort;
}());
exports.HostPort = HostPort;
//# sourceMappingURL=K0ab5ac6303b9.js.map