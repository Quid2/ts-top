"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K306f1981b41c = require("../Bool/K306f1981b41c");
var Ke5d02571ce7b = require("../SocketAddress/Ke5d02571ce7b");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$WebSocketAddress = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xc8, 0x02, 0xc6, 0xaa, 0xe1, 0xaf],
    decoder: function (decoders) {
        var decs = { "WebSocketAddress": [K306f1981b41c.$Bool(Q.flatDecoder), Ke5d02571ce7b.$SocketAddress(Q.zmConst(decoders[0]))(Q.flatDecoder), Kb8cd13187198.$List(K066db52af145.$Char)(Q.flatDecoder)] };
        return function (st) { var d = decs["WebSocketAddress"]; return new WebSocketAddress(d[0](st), d[1](st), d[2](st)); };
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