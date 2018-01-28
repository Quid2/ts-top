"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K3878b3580fc5 = require("../UnicodeLetter/K3878b3580fc5");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K33445520c45a = require("../UnicodeLetterOrNumberOrLine/K33445520c45a");
var Kbf2d1c86eb20 = require("../NonEmptyList/Kbf2d1c86eb20");
var K801030ef543c = require("../UnicodeSymbol/K801030ef543c");
exports.$Identifier = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xdc, 0x26, 0xe9, 0xd9, 0x00, 0x47],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Name(K3878b3580fc5.___.decoder([])(st), Kb8cd13187198.___.decoder([K33445520c45a.___.decoder([])])(st));
        }
        else {
            return new Symbol(Kbf2d1c86eb20.___.decoder([K801030ef543c.___.decoder([])])(st));
        } };
    }
};
var Name = (function () {
    function Name(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Name.prototype.match = function (m) { return m.Name(this._0, this._1); };
    Name.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Name.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Name;
}());
exports.Name = Name;
var Symbol = (function () {
    function Symbol(_0) {
        this._0 = _0;
    }
    Symbol.prototype.match = function (m) { return m.Symbol(this._0); };
    Symbol.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Symbol.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return Symbol;
}());
exports.Symbol = Symbol;
//# sourceMappingURL=Kdc26e9d90047.js.map