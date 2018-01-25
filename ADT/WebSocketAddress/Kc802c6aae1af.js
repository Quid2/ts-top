"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$WebSocketAddress = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xc8, 0x02, 0xc6, 0xaa, 0xe1, 0xaf],
    decoder: function (decoders) {
        return function (st) { return new WebSocketAddress(decoders[0](st), decoders[1](st), decoders[2](st)); };
    }
};
var WebSocketAddress = (function () {
    function WebSocketAddress(secure, host, path) {
        this.secure = secure;
        this.host = host;
        this.path = path;
    }
    WebSocketAddress.prototype.match = function (m) { return m.WebSocketAddress(this.secure, this.host, this.path); };
    WebSocketAddress.prototype.flatMaxSize = function () { return this.secure.flatMaxSize() + this.host.flatMaxSize() + this.path.flatMaxSize(); };
    WebSocketAddress.prototype.flatEncode = function (st) { this.secure.flatEncode(st); this.host.flatEncode(st); this.path.flatEncode(st); };
    return WebSocketAddress;
}());
exports.WebSocketAddress = WebSocketAddress;
//# sourceMappingURL=Kc802c6aae1af.js.map