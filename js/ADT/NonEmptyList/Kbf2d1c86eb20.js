"use strict";
/** ZM Type:
NonEmptyList a ≡   Elem a
                 | Cons a (↫ a)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cons = exports.Elem = exports.___ = exports.$NonEmptyList = void 0;
const Q = require("@quid2/ts-core");
exports.$NonEmptyList = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0xbf, 0x2d, 0x1c, 0x86, 0xeb, 0x20],
    decoder: function (decoders) {
        return function (st) {
            if (st.zero()) {
                return new Elem(decoders[0](st));
            }
            else {
                return new Cons(decoders[0](st), exports.___.decoder([decoders[0]])(st));
            }
        };
    },
};
class Elem {
    constructor(_0) {
        this._0 = _0;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Elem", this._0.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Elem", this._0.pretty(true)].join(" "));
    }
    match(m) {
        return m.Elem(this._0);
    }
    flatMaxSize() {
        return 1 + this._0.flatMaxSize();
    }
    flatEncode(st) {
        st.zero();
        this._0.flatEncode(st);
    }
}
exports.Elem = Elem;
class Cons {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Cons", this._0.toStr(true), this._1.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Cons", this._0.pretty(true), this._1.pretty(true)].join(" "));
    }
    match(m) {
        return m.Cons(this._0, this._1);
    }
    flatMaxSize() {
        return 1 + this._0.flatMaxSize() + this._1.flatMaxSize();
    }
    flatEncode(st) {
        st.one();
        this._0.flatEncode(st);
        this._1.flatEncode(st);
    }
}
exports.Cons = Cons;
//# sourceMappingURL=Kbf2d1c86eb20.js.map