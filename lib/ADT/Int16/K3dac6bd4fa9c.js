"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const K03226796ede4 = require("../ZigZag/K03226796ede4");
const K295e24d62fac = require("../Word16/K295e24d62fac");
exports.$Int16 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x3d, 0xac, 0x6b, 0xd4, 0xfa, 0x9c],
    decoder: function (decoders) {
        return function (st) { return new Int16(K03226796ede4.___.decoder([K295e24d62fac.___.decoder([])])(st)); };
    }
};
class Int16 {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Int16", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Int16(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.Int16 = Int16;
//# sourceMappingURL=K3dac6bd4fa9c.js.map