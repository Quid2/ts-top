"use strict";
/** ZM Type:
LeastSignificantFirst a ≡   LeastSignificantFirst a
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeastSignificantFirst = exports.___ = exports.$LeastSignificantFirst = void 0;
const Q = require("@quid2/ts-core");
exports.$LeastSignificantFirst = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0x20, 0xff, 0xac, 0xc8, 0xf8, 0xc9],
    decoder: function (decoders) {
        return function (st) {
            return new LeastSignificantFirst(decoders[0](st));
        };
    },
};
class LeastSignificantFirst {
    constructor(_0) {
        this._0 = _0;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["LeastSignificantFirst", this._0.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["LeastSignificantFirst", this._0.pretty(true)].join(" "));
    }
    match(m) {
        return m.LeastSignificantFirst(this._0);
    }
    flatMaxSize() {
        return this._0.flatMaxSize();
    }
    flatEncode(st) {
        this._0.flatEncode(st);
    }
}
exports.LeastSignificantFirst = LeastSignificantFirst;
//# sourceMappingURL=K20ffacc8f8c9.js.map