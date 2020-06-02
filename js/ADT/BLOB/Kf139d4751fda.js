"use strict";
/** ZM Type:
BLOB a ≡   BLOB {encoding :: a, content :: Kf8844385a443}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLOB = exports.___ = exports.$BLOB = void 0;
const Q = require("@quid2/ts-core");
const Kf8844385a443 = require("../Bytes/Kf8844385a443");
exports.$BLOB = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0xf1, 0x39, 0xd4, 0x75, 0x1f, 0xda],
    decoder: function (decoders) {
        return function (st) {
            return new BLOB(decoders[0](st), Kf8844385a443.___.decoder([])(st));
        };
    },
};
class BLOB {
    constructor(encoding, content) {
        this.encoding = encoding;
        this.content = content;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["BLOB", this.encoding.toStr(true), this.content.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["BLOB", this.encoding.pretty(true), this.content.pretty(true)].join(" "));
    }
    match(m) {
        return m.BLOB(this.encoding, this.content);
    }
    flatMaxSize() {
        return this.encoding.flatMaxSize() + this.content.flatMaxSize();
    }
    flatEncode(st) {
        this.encoding.flatEncode(st);
        this.content.flatEncode(st);
    }
}
exports.BLOB = BLOB;
//# sourceMappingURL=Kf139d4751fda.js.map