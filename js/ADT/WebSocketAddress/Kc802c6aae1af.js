"use strict";
/** ZM Type:
WebSocketAddress a ≡   WebSocketAddress {secure :: K306f1981b41c,
                                         host :: Ke5d02571ce7b a,
                                         path :: Kb8cd13187198 K066db52af145}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketAddress = exports.___ = exports.$WebSocketAddress = void 0;
const Q = require("@quid2/ts-core");
const K306f1981b41c = require("../Bool/K306f1981b41c");
const Ke5d02571ce7b = require("../SocketAddress/Ke5d02571ce7b");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K066db52af145 = require("../Char/K066db52af145");
exports.$WebSocketAddress = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0xc8, 0x02, 0xc6, 0xaa, 0xe1, 0xaf],
    decoder: function (decoders) {
        return function (st) {
            return new WebSocketAddress(K306f1981b41c.___.decoder([])(st), Ke5d02571ce7b.___.decoder([decoders[0]])(st), Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
        };
    },
};
class WebSocketAddress {
    constructor(secure, host, path) {
        this.secure = secure;
        this.host = host;
        this.path = path;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, [
            "WebSocketAddress",
            this.secure.toStr(true),
            this.host.toStr(true),
            this.path.toStr(true),
        ].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, [
            "WebSocketAddress",
            this.secure.pretty(true),
            this.host.pretty(true),
            this.path.pretty(true),
        ].join(" "));
    }
    match(m) {
        return m.WebSocketAddress(this.secure, this.host, this.path);
    }
    flatMaxSize() {
        return (this.secure.flatMaxSize() +
            this.host.flatMaxSize() +
            this.path.flatMaxSize());
    }
    flatEncode(st) {
        this.secure.flatEncode(st);
        this.host.flatEncode(st);
        this.path.flatEncode(st);
    }
}
exports.WebSocketAddress = WebSocketAddress;
//# sourceMappingURL=Kc802c6aae1af.js.map