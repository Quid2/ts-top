"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
exports.$Either = function (t1, t2) { return function (f) { return f(___, [t1(f), t2(f)]); }; };
var ___ = {
    zid: [0x62, 0x60, 0xe4, 0x65, 0xae, 0x74],
    decoder: function (decoders) {
        var decs = { "Left": [Q.zmConst(decoders[0])(Q.flatDecoder)], "Right": [Q.zmConst(decoders[1])(Q.flatDecoder)] };
        return function (st) { if (st.zero()) {
            var d = decs["Left"];
            return new Left(d[0](st));
        }
        else {
            var d = decs["Right"];
            return new Right(d[0](st));
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