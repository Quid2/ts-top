"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const K20ffacc8f8c9 = require("../LeastSignificantFirst/K20ffacc8f8c9");
const Kbf2d1c86eb20 = require("../NonEmptyList/Kbf2d1c86eb20");
const K74e2b3b89941 = require("../MostSignificantFirst/K74e2b3b89941");
const Kf4c946334a7e = require("../Word7/Kf4c946334a7e");
exports.$Word = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf9, 0x2e, 0x83, 0x39, 0x90, 0x8a],
    decoder: function (decoders) {
        return function (st) { return new Word(K20ffacc8f8c9.___.decoder([Kbf2d1c86eb20.___.decoder([K74e2b3b89941.___.decoder([Kf4c946334a7e.___.decoder([])])])])(st)); };
    }
};
class Word {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Word", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Word(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.Word = Word;
//# sourceMappingURL=Kf92e8339908a.js.map