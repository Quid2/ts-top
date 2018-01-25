"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word = function (f) { return f(___, []); };
var ___ = {
    zid: [0xf9, 0x2e, 0x83, 0x39, 0x90, 0x8a],
    decoder: function (decoders) {
        return function (st) { return new Word(decoders[0](st)); };
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