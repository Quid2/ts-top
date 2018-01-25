"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Identifier = function (f) { return f(___, []); };
var ___ = {
    zid: [0xdc, 0x26, 0xe9, 0xd9, 0x00, 0x47],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Name(decoders[0](st), decoders[1](st));
        }
        else {
            return new Symbol(decoders[0](st));
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