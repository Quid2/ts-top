"use strict";
/** ZM Type:
Either a b ≡   Left a
             | Right b
*/
exports.__esModule = true;
exports.Right = exports.Left = exports.___ = exports.$Either = void 0;
var Q = require("@quid2/ts-core");
exports.$Either = function (t1, t2) {
    return function (f) {
        return f(exports.___, [t1(f), t2(f)]);
    };
};
exports.___ = {
    zid: [0x62, 0x60, 0xe4, 0x65, 0xae, 0x74],
    decoder: function (decoders) {
        return function (st) {
            if (st.zero()) {
                return new Left(decoders[0](st));
            }
            else {
                return new Right(decoders[1](st));
            }
        };
    }
};
var Left = /** @class */ (function () {
    function Left(_0) {
        this._0 = _0;
    }
    Left.prototype.toString = function () {
        return this.toStr(false);
    };
    Left.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Left", this._0.toStr(true)].join(" "));
    };
    Left.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Left", this._0.pretty(true)].join(" "));
    };
    Left.prototype.match = function (m) {
        return m.Left(this._0);
    };
    Left.prototype.flatMaxSize = function () {
        return 1 + this._0.flatMaxSize();
    };
    Left.prototype.flatEncode = function (st) {
        st.zero();
        this._0.flatEncode(st);
    };
    return Left;
}());
exports.Left = Left;
var Right = /** @class */ (function () {
    function Right(_0) {
        this._0 = _0;
    }
    Right.prototype.toString = function () {
        return this.toStr(false);
    };
    Right.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Right", this._0.toStr(true)].join(" "));
    };
    Right.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Right", this._0.pretty(true)].join(" "));
    };
    Right.prototype.match = function (m) {
        return m.Right(this._0);
    };
    Right.prototype.flatMaxSize = function () {
        return 1 + this._0.flatMaxSize();
    };
    Right.prototype.flatEncode = function (st) {
        st.one();
        this._0.flatEncode(st);
    };
    return Right;
}());
exports.Right = Right;
