"use strict";
/** ZM Type:
Validate a ≡   Validate a
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
exports.$Validate = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xff, 0xe0, 0x94, 0x0f, 0x8f, 0xf2],
    decoder: function (decoders) {
        return function (st) { return new Validate(decoders[0](st)); };
    }
};
var Validate = /** @class */ (function () {
    function Validate(_0) {
        this._0 = _0;
    }
    Validate.prototype.toString = function () { return this.toStr(false); };
    Validate.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Validate", this._0.toStr(true)].join(' '));
    };
    Validate.prototype.match = function (m) { return m.Validate(this._0); };
    Validate.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Validate.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Validate;
}());
exports.Validate = Validate;
