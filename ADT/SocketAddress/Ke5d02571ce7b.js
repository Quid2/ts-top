"use strict";
/** ZM Type:
SocketAddress a ≡   SocketAddress {socketAddress :: K64f93d94a73d a,
                                   socketPort :: K0ab5ac6303b9}
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K64f93d94a73d = require("../HostAddress/K64f93d94a73d");
var K0ab5ac6303b9 = require("../HostPort/K0ab5ac6303b9");
exports.$SocketAddress = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xe5, 0xd0, 0x25, 0x71, 0xce, 0x7b],
    decoder: function (decoders) {
        return function (st) { return new SocketAddress(K64f93d94a73d.___.decoder([decoders[0]])(st), K0ab5ac6303b9.___.decoder([])(st)); };
    }
};
var SocketAddress = /** @class */ (function () {
    function SocketAddress(socketAddress, socketPort) {
        this.socketAddress = socketAddress;
        this.socketPort = socketPort;
    }
    SocketAddress.prototype.toString = function () { return this.toStr(false); };
    SocketAddress.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["SocketAddress", this.socketAddress.toStr(true), this.socketPort.toStr(true)].join(' '));
    };
    SocketAddress.prototype.match = function (m) { return m.SocketAddress(this.socketAddress, this.socketPort); };
    SocketAddress.prototype.flatMaxSize = function () { return this.socketAddress.flatMaxSize() + this.socketPort.flatMaxSize(); };
    SocketAddress.prototype.flatEncode = function (st) { this.socketAddress.flatEncode(st); this.socketPort.flatEncode(st); };
    return SocketAddress;
}());
exports.SocketAddress = SocketAddress;
