"use strict";
/** ZM Type:
SourceCode a ≡   SourceCode a K2f006595638c
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K2f006595638c = require("../String/K2f006595638c");
exports.$SourceCode = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xb9, 0xb0, 0x8d, 0x43, 0x76, 0x6f],
    decoder: function (decoders) {
        return function (st) { return new SourceCode(decoders[0](st), K2f006595638c.___.decoder([])(st)); };
    }
};
var SourceCode = /** @class */ (function () {
    function SourceCode(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    SourceCode.prototype.toString = function () { return this.toStr(false); };
    SourceCode.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["SourceCode", this._0.toStr(true), this._1.toStr(true)].join(' '));
    };
    SourceCode.prototype.match = function (m) { return m.SourceCode(this._0, this._1); };
    SourceCode.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize(); };
    SourceCode.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); };
    return SourceCode;
}());
exports.SourceCode = SourceCode;
