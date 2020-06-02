"use strict";
/** ZM Type:
HostPort ≡   HostPort {port :: K295e24d62fac}
*/
exports.__esModule = true;
exports.HostPort = exports.___ = exports.$HostPort = void 0;
var Q = require("@quid2/ts-core");
var K295e24d62fac = require("../Word16/K295e24d62fac");
exports.$HostPort = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x0a, 0xb5, 0xac, 0x63, 0x03, 0xb9],
    decoder: function (decoders) {
        return function (st) {
            return new HostPort(K295e24d62fac.___.decoder([])(st));
        };
    }
};
var HostPort = /** @class */ (function () {
    function HostPort(port) {
        this.port = port;
    }
    HostPort.prototype.toString = function () {
        return this.toStr(false);
    };
    HostPort.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["HostPort", this.port.toStr(true)].join(" "));
    };
    HostPort.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["HostPort", this.port.pretty(true)].join(" "));
    };
    HostPort.prototype.match = function (m) {
        return m.HostPort(this.port);
    };
    HostPort.prototype.flatMaxSize = function () {
        return this.port.flatMaxSize();
    };
    HostPort.prototype.flatEncode = function (st) {
        this.port.flatEncode(st);
    };
    return HostPort;
}());
exports.HostPort = HostPort;
