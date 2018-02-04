"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const K2412799c99f1 = require("../Word32/K2412799c99f1");
exports.$Position = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x2f, 0xf0, 0x04, 0x17, 0xfe, 0x9d],
    decoder: function (decoders) {
        return function (st) { return new Position(K2412799c99f1.___.decoder([])(st), K2412799c99f1.___.decoder([])(st)); };
    }
};
class Position {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Position", this.row.toStr(true), this.column.toStr(true)].join(' ')); }
    match(m) { return m.Position(this.row, this.column); }
    flatMaxSize() { return this.row.flatMaxSize() + this.column.flatMaxSize(); }
    flatEncode(st) { this.row.flatEncode(st); this.column.flatEncode(st); }
}
exports.Position = Position;
//# sourceMappingURL=K2ff00417fe9d.js.map