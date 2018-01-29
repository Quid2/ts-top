"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Unit = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x79, 0x4a, 0xef, 0x6e, 0x21, 0xaa],
    decoder: function (decoders) {
        return function (st) { return new Unit(); };
    }
};
var Unit = (function () {
    function Unit() {
    }
    Unit.prototype.toString = function () { return this.toStr(false); };
    Unit.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "Unit";
    };
    Unit.prototype.match = function (m) { return m.Unit; };
    Unit.prototype.flatMaxSize = function () { return 0; };
    Unit.prototype.flatEncode = function () { };
    return Unit;
}());
exports.Unit = Unit;
//# sourceMappingURL=K794aef6e21aa.js.map