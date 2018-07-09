"use strict";
/** ZM Type:
Position ≡   Position {row :: K2412799c99f1,
                       column :: K2412799c99f1}
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K2412799c99f1 = require("../Word32/K2412799c99f1");
exports.$Position = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x2f, 0xf0, 0x04, 0x17, 0xfe, 0x9d],
    decoder: function (decoders) {
        return function (st) { return new Position(K2412799c99f1.___.decoder([])(st), K2412799c99f1.___.decoder([])(st)); };
    }
};
var Position = /** @class */ (function () {
    function Position(row, column) {
        this.row = row;
        this.column = column;
    }
    Position.prototype.toString = function () { return this.toStr(false); };
    Position.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Position", this.row.toStr(true), this.column.toStr(true)].join(' '));
    };
    Position.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Position", this.row.pretty(true), this.column.pretty(true)].join(' '));
    };
    Position.prototype.match = function (m) { return m.Position(this.row, this.column); };
    Position.prototype.flatMaxSize = function () { return this.row.flatMaxSize() + this.column.flatMaxSize(); };
    Position.prototype.flatEncode = function (st) { this.row.flatEncode(st); this.column.flatEncode(st); };
    return Position;
}());
exports.Position = Position;
