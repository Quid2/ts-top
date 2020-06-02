"use strict";
/** ZM Type:
Tuple2 a b ≡   Tuple2 a b
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tuple2 = exports.___ = exports.$Tuple2 = void 0;
const Q = require("@quid2/ts-core");
exports.$Tuple2 = function (t1, t2) {
    return function (f) {
        return f(exports.___, [t1(f), t2(f)]);
    };
};
exports.___ = {
    zid: [0xa5, 0x58, 0x3b, 0xf3, 0xad, 0x34],
    decoder: function (decoders) {
        return function (st) {
            return new Tuple2(decoders[0](st), decoders[1](st));
        };
    },
};
class Tuple2 {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Tuple2", this._0.toStr(true), this._1.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Tuple2", this._0.pretty(true), this._1.pretty(true)].join(" "));
    }
    match(m) {
        return m.Tuple2(this._0, this._1);
    }
    flatMaxSize() {
        return this._0.flatMaxSize() + this._1.flatMaxSize();
    }
    flatEncode(st) {
        this._0.flatEncode(st);
        this._1.flatEncode(st);
    }
}
exports.Tuple2 = Tuple2;
//# sourceMappingURL=Ka5583bf3ad34.js.map