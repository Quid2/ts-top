"use strict";
/** ZM Type:
ChannelSelectionResult a ≡   Success
                           | Failure {reason :: Kb8cd13187198 K066db52af145}
                           | RetryAt a
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryAt = exports.Failure = exports.Success = exports.___ = exports.$ChannelSelectionResult = void 0;
const Q = require("@quid2/ts-core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K066db52af145 = require("../Char/K066db52af145");
exports.$ChannelSelectionResult = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0xc6, 0x62, 0x7a, 0x31, 0x7d, 0xbc],
    decoder: function (decoders) {
        return function (st) {
            if (st.zero()) {
                return new Success();
            }
            else {
                if (st.zero()) {
                    return new Failure(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
                }
                else {
                    return new RetryAt(decoders[0](st));
                }
            }
        };
    },
};
class Success {
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return "Success";
    }
    pretty(nested = false) {
        return "Success";
    }
    match(m) {
        return m.Success;
    }
    flatMaxSize() {
        return 1 + 0;
    }
    flatEncode(st) {
        st.zero();
    }
}
exports.Success = Success;
class Failure {
    constructor(reason) {
        this.reason = reason;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["Failure", this.reason.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["Failure", this.reason.pretty(true)].join(" "));
    }
    match(m) {
        return m.Failure(this.reason);
    }
    flatMaxSize() {
        return 2 + this.reason.flatMaxSize();
    }
    flatEncode(st) {
        st.one();
        st.zero();
        this.reason.flatEncode(st);
    }
}
exports.Failure = Failure;
class RetryAt {
    constructor(_0) {
        this._0 = _0;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["RetryAt", this._0.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["RetryAt", this._0.pretty(true)].join(" "));
    }
    match(m) {
        return m.RetryAt(this._0);
    }
    flatMaxSize() {
        return 2 + this._0.flatMaxSize();
    }
    flatEncode(st) {
        st.one();
        st.one();
        this._0.flatEncode(st);
    }
}
exports.RetryAt = RetryAt;
//# sourceMappingURL=Kc6627a317dbc.js.map