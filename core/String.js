"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Kb8cd13187198 = require("../ADT/List/Kb8cd13187198");
const K066db52af145 = require("../ADT/Char/K066db52af145");
exports.$String = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x2f, 0x00, 0x65, 0x95, 0x63, 0x8c],
    decoder: function (decoders) {
        return function (st) { return new String(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)); };
    }
};
class String {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) {
        var cs = Array.from(this._0);
        var s = "";
        for (var c of cs)
            s += c._0;
        return s;
    }
    match(m) { return m.String(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.String = String;
//# sourceMappingURL=String.js.map