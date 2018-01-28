"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Either = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x62, 0x60, 0xe4, 0x65, 0xae, 0x74],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Left(decoders[0](st));
        }
        else {
            return new Right(decoders[1](st));
        } };
    }
};
var Left = (function () {
    function Left(_0) {
        this._0 = _0;
    }
    Left.prototype.match = function (m) { return m.Left(this._0); };
    Left.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Left.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Left;
}());
exports.Left = Left;
var Right = (function () {
    function Right(_0) {
        this._0 = _0;
    }
    Right.prototype.match = function (m) { return m.Right(this._0); };
    Right.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Right.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return Right;
}());
exports.Right = Right;
//# sourceMappingURL=K6260e465ae74.js.map