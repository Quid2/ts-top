"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SocketAddress = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xe5, 0xd0, 0x25, 0x71, 0xce, 0x7b],
    decoder: function (decoders) {
        return function (st) { return new SocketAddress(decoders[0](st), decoders[1](st)); };
    }
};
var SocketAddress = (function () {
    function SocketAddress(socketAddress, socketPort) {
        this.socketAddress = socketAddress;
        this.socketPort = socketPort;
    }
    SocketAddress.prototype.match = function (m) { return m.SocketAddress(this.socketAddress, this.socketPort); };
    SocketAddress.prototype.flatMaxSize = function () { return this.socketAddress.flatMaxSize() + this.socketPort.flatMaxSize(); };
    SocketAddress.prototype.flatEncode = function (st) { this.socketAddress.flatEncode(st); this.socketPort.flatEncode(st); };
    return SocketAddress;
}());
exports.SocketAddress = SocketAddress;
//# sourceMappingURL=Ke5d02571ce7b.js.map