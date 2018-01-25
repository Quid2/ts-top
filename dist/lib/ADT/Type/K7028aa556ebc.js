"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Type = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0x70, 0x28, 0xaa, 0x55, 0x6e, 0xbc],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new TypeCon(decoders[0](st));
        }
        else {
            return new TypeApp(decoders[0](st), decoders[1](st));
        } };
    }
};
var TypeCon = (function () {
    function TypeCon(_0) {
        this._0 = _0;
    }
    TypeCon.prototype.match = function (m) { return m.TypeCon(this._0); };
    TypeCon.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    TypeCon.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return TypeCon;
}());
exports.TypeCon = TypeCon;
var TypeApp = (function () {
    function TypeApp(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    TypeApp.prototype.match = function (m) { return m.TypeApp(this._0, this._1); };
    TypeApp.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    TypeApp.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return TypeApp;
}());
exports.TypeApp = TypeApp;
//# sourceMappingURL=K7028aa556ebc.js.map