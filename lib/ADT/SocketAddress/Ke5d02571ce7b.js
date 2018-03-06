"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const K64f93d94a73d = require("../HostAddress/K64f93d94a73d");
const K0ab5ac6303b9 = require("../HostPort/K0ab5ac6303b9");
exports.$SocketAddress = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xe5, 0xd0, 0x25, 0x71, 0xce, 0x7b],
    decoder: function (decoders) {
        return function (st) { return new SocketAddress(K64f93d94a73d.___.decoder([decoders[0]])(st), K0ab5ac6303b9.___.decoder([])(st)); };
    }
};
class SocketAddress {
    constructor(socketAddress, socketPort) {
        this.socketAddress = socketAddress;
        this.socketPort = socketPort;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["SocketAddress", this.socketAddress.toStr(true), this.socketPort.toStr(true)].join(' ')); }
    match(m) { return m.SocketAddress(this.socketAddress, this.socketPort); }
    flatMaxSize() { return this.socketAddress.flatMaxSize() + this.socketPort.flatMaxSize(); }
    flatEncode(st) { this.socketAddress.flatEncode(st); this.socketPort.flatEncode(st); }
}
exports.SocketAddress = SocketAddress;
//# sourceMappingURL=Ke5d02571ce7b.js.map