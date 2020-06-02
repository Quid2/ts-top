"use strict";
/** ZM Type:
Bool ≡   False
       | True
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.True = exports.False = exports.___ = exports.$Bool = void 0;
exports.$Bool = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x30, 0x6f, 0x19, 0x81, 0xb4, 0x1c],
    decoder: function (decoders) {
        return function (st) {
            if (st.zero()) {
                return new False();
            }
            else {
                return new True();
            }
        };
    },
};
class False {
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return "False";
    }
    pretty(nested = false) {
        return "False";
    }
    match(m) {
        return m.False;
    }
    flatMaxSize() {
        return 1 + 0;
    }
    flatEncode(st) {
        st.zero();
    }
}
exports.False = False;
class True {
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return "True";
    }
    pretty(nested = false) {
        return "True";
    }
    match(m) {
        return m.True;
    }
    flatMaxSize() {
        return 1 + 0;
    }
    flatEncode(st) {
        st.one();
    }
}
exports.True = True;
//# sourceMappingURL=K306f1981b41c.js.map