"use strict";
/** ZM Type:
Unit ≡   Unit
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Unit = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x79, 0x4a, 0xef, 0x6e, 0x21, 0xaa],
    decoder: function (decoders) {
        return function (st) { return new Unit(); };
    }
};
class Unit {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "Unit"; }
    match(m) { return m.Unit; }
    flatMaxSize() { return 0; }
    flatEncode() { }
}
exports.Unit = Unit;
//# sourceMappingURL=K794aef6e21aa.js.map