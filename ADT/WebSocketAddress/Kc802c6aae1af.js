"use strict";
/** ZM Type:
WebSocketAddress a ≡   WebSocketAddress {secure :: K306f1981b41c,
                                         host :: Ke5d02571ce7b a,
                                         path :: Kb8cd13187198 K066db52af145}
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K306f1981b41c = require("../Bool/K306f1981b41c");
var Ke5d02571ce7b = require("../SocketAddress/Ke5d02571ce7b");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$WebSocketAddress = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xc8, 0x02, 0xc6, 0xaa, 0xe1, 0xaf],
    decoder: function (decoders) {
        return function (st) { return new WebSocketAddress(K306f1981b41c.___.decoder([])(st), Ke5d02571ce7b.___.decoder([decoders[0]])(st), Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)); };
    }
};
var WebSocketAddress = /** @class */ (function () {
    function WebSocketAddress(secure, host, path) {
        this.secure = secure;
        this.host = host;
        this.path = path;
    }
    WebSocketAddress.prototype.toString = function () { return this.toStr(false); };
    WebSocketAddress.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["WebSocketAddress", this.secure.toStr(true), this.host.toStr(true), this.path.toStr(true)].join(' '));
    };
    WebSocketAddress.prototype.match = function (m) { return m.WebSocketAddress(this.secure, this.host, this.path); };
    WebSocketAddress.prototype.flatMaxSize = function () { return this.secure.flatMaxSize() + this.host.flatMaxSize() + this.path.flatMaxSize(); };
    WebSocketAddress.prototype.flatEncode = function (st) { this.secure.flatEncode(st); this.host.flatEncode(st); this.path.flatEncode(st); };
    return WebSocketAddress;
}());
exports.WebSocketAddress = WebSocketAddress;
