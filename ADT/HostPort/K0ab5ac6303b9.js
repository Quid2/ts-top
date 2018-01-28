"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K295e24d62fac = require("../Word16/K295e24d62fac");
exports.$HostPort = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x0a, 0xb5, 0xac, 0x63, 0x03, 0xb9],
    decoder: function (decoders) {
        return function (st) { return new HostPort(K295e24d62fac.___.decoder([])(st)); };
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