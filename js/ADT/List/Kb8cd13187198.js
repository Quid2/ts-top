"use strict";
/** ZM Type:
List a ≡   Nil
         | Cons a (↫ a)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cons = exports.Nil = exports.___ = exports.$List = void 0;
const Q = require("@quid2/ts-core");
exports.$List = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0xb8, 0xcd, 0x13, 0x18, 0x71, 0x98],
    decoder: function (decoders) {
        return function (st) {
            if (st.zero()) {
                return new Nil();
            }
            else {
                return new Cons(decoders[0](st), exports.___.decoder([decoders[0]])(st));
            }
        };
    },
};
class Nil {
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return "Nil";
    }
    pretty(nested = false) {
        return "Nil";
    }
    match(m) {
        return m.Nil;
    }
    flatMaxSize() {
        return 1 + 0;
    }
    flatEncode(st) {
        st.zero();
    }
}
exports.Nil = Nil;
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
//# sourceMappingURL=Kb8cd13187198.js.map