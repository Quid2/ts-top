"use strict";
/** ZM Type:
HostPort ≡   HostPort {port :: K295e24d62fac}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostPort = exports.___ = exports.$HostPort = void 0;
const Q = require("@quid2/ts-core");
const K295e24d62fac = require("../Word16/K295e24d62fac");
exports.$HostPort = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x0a, 0xb5, 0xac, 0x63, 0x03, 0xb9],
    decoder: function (decoders) {
        return function (st) {
            return new HostPort(K295e24d62fac.___.decoder([])(st));
        };
    },
};
class HostPort {
    constructor(port) {
        this.port = port;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["HostPort", this.port.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["HostPort", this.port.pretty(true)].join(" "));
    }
    match(m) {
        return m.HostPort(this.port);
    }
    flatMaxSize() {
        return this.port.flatMaxSize();
    }
    flatEncode(st) {
        this.port.flatEncode(st);
    }
}
exports.HostPort = HostPort;
//# sourceMappingURL=K0ab5ac6303b9.js.map