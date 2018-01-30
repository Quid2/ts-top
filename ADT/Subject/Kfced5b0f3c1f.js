"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K066db52af145 = require("../Char/K066db52af145");
exports.$Subject = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xfc, 0xed, 0x5b, 0x0f, 0x3c, 0x1f],
    decoder: function (decoders) {
        return function (st) { return new Subject(Kb8cd13187198.___.decoder([Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])])(st)); };
    }
};
class Subject {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Subject", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Subject(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.Subject = Subject;
//# sourceMappingURL=Kfced5b0f3c1f.js.map