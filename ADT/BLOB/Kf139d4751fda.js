"use strict";
/** ZM Type:
BLOB a ≡   BLOB {encoding :: a, content :: Kf8844385a443}
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var Kf8844385a443 = require("../Bytes/Kf8844385a443");
exports.$BLOB = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xf1, 0x39, 0xd4, 0x75, 0x1f, 0xda],
    decoder: function (decoders) {
        return function (st) { return new BLOB(decoders[0](st), Kf8844385a443.___.decoder([])(st)); };
    }
};
var BLOB = /** @class */ (function () {
    function BLOB(encoding, content) {
        this.encoding = encoding;
        this.content = content;
    }
    BLOB.prototype.toString = function () { return this.toStr(false); };
    BLOB.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["BLOB", this.encoding.toStr(true), this.content.toStr(true)].join(' '));
    };
    BLOB.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["BLOB", this.encoding.pretty(true), this.content.pretty(true)].join(' '));
    };
    BLOB.prototype.match = function (m) { return m.BLOB(this.encoding, this.content); };
    BLOB.prototype.flatMaxSize = function () { return this.encoding.flatMaxSize() + this.content.flatMaxSize(); };
    BLOB.prototype.flatEncode = function (st) { this.encoding.flatEncode(st); this.content.flatEncode(st); };
    return BLOB;
}());
exports.BLOB = BLOB;
