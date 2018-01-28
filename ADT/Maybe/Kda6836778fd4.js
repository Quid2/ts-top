"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Maybe = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xda, 0x68, 0x36, 0x77, 0x8f, 0xd4],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Nothing();
        }
        else {
            return new Just(decoders[0](st));
        } };
    }
};
var Nothing = (function () {
    function Nothing() {
    }
    Nothing.prototype.match = function (m) { return m.Nothing; };
    Nothing.prototype.flatMaxSize = function () { return 1 + 0; };
    Nothing.prototype.flatEncode = function (st) { st.zero(); };
    return Nothing;
}());
exports.Nothing = Nothing;
var Just = (function () {
    function Just(_0) {
        this._0 = _0;
    }
    Just.prototype.match = function (m) { return m.Just(this._0); };
    Just.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Just.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return Just;
}());
exports.Just = Just;
//# sourceMappingURL=Kda6836778fd4.js.map