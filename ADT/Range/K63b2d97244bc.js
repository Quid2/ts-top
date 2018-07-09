"use strict";
/** ZM Type:
Range ≡   Range {start :: K2ff00417fe9d, end :: K2ff00417fe9d}
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K2ff00417fe9d = require("../Position/K2ff00417fe9d");
exports.$Range = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x63, 0xb2, 0xd9, 0x72, 0x44, 0xbc],
    decoder: function (decoders) {
        return function (st) { return new Range(K2ff00417fe9d.___.decoder([])(st), K2ff00417fe9d.___.decoder([])(st)); };
    }
};
var Range = /** @class */ (function () {
    function Range(start, end) {
        this.start = start;
        this.end = end;
    }
    Range.prototype.toString = function () { return this.toStr(false); };
    Range.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Range", this.start.toStr(true), this.end.toStr(true)].join(' '));
    };
    Range.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Range", this.start.pretty(true), this.end.pretty(true)].join(' '));
    };
    Range.prototype.match = function (m) { return m.Range(this.start, this.end); };
    Range.prototype.flatMaxSize = function () { return this.start.flatMaxSize() + this.end.flatMaxSize(); };
    Range.prototype.flatEncode = function (st) { this.start.flatEncode(st); this.end.flatEncode(st); };
    return Range;
}());
exports.Range = Range;
