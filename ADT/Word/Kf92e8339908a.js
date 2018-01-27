"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K20ffacc8f8c9 = require("../LeastSignificantFirst/K20ffacc8f8c9");
var Kbf2d1c86eb20 = require("../NonEmptyList/Kbf2d1c86eb20");
var K74e2b3b89941 = require("../MostSignificantFirst/K74e2b3b89941");
var Kf4c946334a7e = require("../Word7/Kf4c946334a7e");
exports.$Word = function (f) { return f(___, []); };
var ___ = {
    zid: [0xf9, 0x2e, 0x83, 0x39, 0x90, 0x8a],
    decoder: function (decoders) {
        var decs = { "Word": [K20ffacc8f8c9.$LeastSignificantFirst(Kbf2d1c86eb20.$NonEmptyList(K74e2b3b89941.$MostSignificantFirst(Kf4c946334a7e.$Word7)))(Q.flatDecoder)] };
        return function (st) { var d = decs["Word"]; return new Word(d[0](st)); };
    }
};
var Word = (function () {
    function Word(_0) {
        this._0 = _0;
    }
    Word.prototype.match = function (m) { return m.Word(this._0); };
    Word.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Word.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Word;
}());
exports.Word = Word;
//# sourceMappingURL=Kf92e8339908a.js.map