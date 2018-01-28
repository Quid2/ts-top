"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K03226796ede4 = require("../ZigZag/K03226796ede4");
var Kf92e8339908a = require("../Word/Kf92e8339908a");
exports.$Int = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x10, 0x2a, 0x3b, 0xb9, 0x04, 0xe3],
    decoder: function (decoders) {
        return function (st) { return new Int(K03226796ede4.___.decoder([Kf92e8339908a.___.decoder([])])(st)); };
    }
};
var Int = (function () {
    function Int(_0) {
        this._0 = _0;
    }
    Int.prototype.match = function (m) { return m.Int(this._0); };
    Int.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Int.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Int;
}());
exports.Int = Int;
//# sourceMappingURL=K102a3bb904e3.js.map