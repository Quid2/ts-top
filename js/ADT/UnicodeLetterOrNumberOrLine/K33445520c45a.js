"use strict";
/** ZM Type:
UnicodeLetterOrNumberOrLine ≡   UnicodeLetterOrNumberOrLine K066db52af145
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnicodeLetterOrNumberOrLine = exports.___ = exports.$UnicodeLetterOrNumberOrLine = void 0;
const Q = require("@quid2/ts-core");
const K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeLetterOrNumberOrLine = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x33, 0x44, 0x55, 0x20, 0xc4, 0x5a],
    decoder: function (decoders) {
        return function (st) {
            return new UnicodeLetterOrNumberOrLine(K066db52af145.___.decoder([])(st));
        };
    },
};
class UnicodeLetterOrNumberOrLine {
    constructor(_0) {
        this._0 = _0;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, ["UnicodeLetterOrNumberOrLine", this._0.toStr(true)].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, ["UnicodeLetterOrNumberOrLine", this._0.pretty(true)].join(" "));
    }
    match(m) {
        return m.UnicodeLetterOrNumberOrLine(this._0);
    }
    flatMaxSize() {
        return this._0.flatMaxSize();
    }
    flatEncode(st) {
        this._0.flatEncode(st);
    }
}
exports.UnicodeLetterOrNumberOrLine = UnicodeLetterOrNumberOrLine;
//# sourceMappingURL=K33445520c45a.js.map