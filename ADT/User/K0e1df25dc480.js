"use strict";
/** ZM Type:
User ≡   User {userName :: Kb8cd13187198 K066db52af145}
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K066db52af145 = require("../Char/K066db52af145");
exports.$User = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x0e, 0x1d, 0xf2, 0x5d, 0xc4, 0x80],
    decoder: function (decoders) {
        return function (st) { return new User(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)); };
    }
};
class User {
    constructor(userName) {
        this.userName = userName;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["User", this.userName.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["User", this.userName.pretty(true)].join(' ')); }
    match(m) { return m.User(this.userName); }
    flatMaxSize() { return this.userName.flatMaxSize(); }
    flatEncode(st) { this.userName.flatEncode(st); }
}
exports.User = User;
//# sourceMappingURL=K0e1df25dc480.js.map