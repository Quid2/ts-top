"use strict";
/** ZM Type:
Function a b ≡   Call a
               | Reply (K9f214799149b a) b
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = exports.Call = exports.___ = exports.$Function = void 0;
const Q = require("@quid2/ts-core");
const K9f214799149b = require("../SHAKE128_48/K9f214799149b");
exports.$Function = function (t1, t2) {
    return function (f) {
        return f(exports.___, [t1(f), t2(f)]);
    };
};
exports.___ = {
    zid: [0x23, 0x96, 0xc2, 0x27, 0xc7, 0x87],
    decoder: function (decoders) {
        return function (st) {
            if (st.zero()) {
                return new Call(decoders[0](st));
            }
            else {
                return new Reply(K9f214799149b.___.decoder([decoders[0]])(st), decoders[1](st));
            }
        };
    },
};
class Call {
    constructor(_0) {
        this._0 = _0;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Call", this._0.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Call", this._0.pretty(true)].join(" "));
    }
    match(m) {
        return m.Call(this._0);
    }
    flatMaxSize() {
        return 1 + this._0.flatMaxSize();
    }
    flatEncode(st) {
        st.zero();
        this._0.flatEncode(st);
    }
}
exports.Call = Call;
class Reply {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Reply", this._0.toStr(true), this._1.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Reply", this._0.pretty(true), this._1.pretty(true)].join(" "));
    }
    match(m) {
        return m.Reply(this._0, this._1);
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
exports.Reply = Reply;
//# sourceMappingURL=K2396c227c787.js.map