"use strict";
/** ZM Type:
Msg ≡   Msg {fromUser :: Kb8cd13187198 K066db52af145,
             subject :: Kfced5b0f3c1f,
             content :: K1ba230d92eb8}
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K066db52af145 = require("../Char/K066db52af145");
const Kfced5b0f3c1f = require("../Subject/Kfced5b0f3c1f");
const K1ba230d92eb8 = require("../Content/K1ba230d92eb8");
exports.$Msg = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xfb, 0x89, 0xa5, 0x7c, 0xdc, 0x09],
    decoder: function (decoders) {
        return function (st) { return new Msg(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st), Kfced5b0f3c1f.___.decoder([])(st), K1ba230d92eb8.___.decoder([])(st)); };
    }
};
class Msg {
    constructor(fromUser, subject, content) {
        this.fromUser = fromUser;
        this.subject = subject;
        this.content = content;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Msg", this.fromUser.toStr(true), this.subject.toStr(true), this.content.toStr(true)].join(' ')); }
    match(m) { return m.Msg(this.fromUser, this.subject, this.content); }
    flatMaxSize() { return this.fromUser.flatMaxSize() + this.subject.flatMaxSize() + this.content.flatMaxSize(); }
    flatEncode(st) { this.fromUser.flatEncode(st); this.subject.flatEncode(st); this.content.flatEncode(st); }
}
exports.Msg = Msg;
//# sourceMappingURL=Kfb89a57cdc09.js.map