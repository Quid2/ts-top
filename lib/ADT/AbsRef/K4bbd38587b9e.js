"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const K9f214799149b = require("../SHAKE128_48/K9f214799149b");
const K3e8257255cbf = require("../ADT/K3e8257255cbf");
const Kdc26e9d90047 = require("../Identifier/Kdc26e9d90047");
const K07b1b045ac3c = require("../ADTRef/K07b1b045ac3c");
exports.$AbsRef = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x4b, 0xbd, 0x38, 0x58, 0x7b, 0x9e],
    decoder: function (decoders) {
        return function (st) { return new AbsRef(K9f214799149b.___.decoder([K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]), Kdc26e9d90047.___.decoder([]), K07b1b045ac3c.___.decoder([exports.___.decoder([])])])])(st)); };
    }
};
class AbsRef {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["AbsRef", this._0.toStr(true)].join(' ')); }
    match(m) { return m.AbsRef(this._0); }
    flatMaxSize() { return this._0.flatMaxSize(); }
    flatEncode(st) { this._0.flatEncode(st); }
}
exports.AbsRef = AbsRef;
//# sourceMappingURL=K4bbd38587b9e.js.map