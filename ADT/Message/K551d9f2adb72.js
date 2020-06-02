"use strict";
/** ZM Type:
Message ≡   Message {fromUser :: K0e1df25dc480,
                     subject :: Kfced5b0f3c1f,
                     content :: K957357183935 K0e1df25dc480 ↫}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.___ = exports.$Message = void 0;
const Q = require("../.././lib/core");
const K0e1df25dc480 = require("../User/K0e1df25dc480");
const Kfced5b0f3c1f = require("../Subject/Kfced5b0f3c1f");
const K957357183935 = require("../Content/K957357183935");
exports.$Message = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x55, 0x1d, 0x9f, 0x2a, 0xdb, 0x72],
    decoder: function (decoders) {
        return function (st) { return new Message(K0e1df25dc480.___.decoder([])(st), Kfced5b0f3c1f.___.decoder([])(st), K957357183935.___.decoder([K0e1df25dc480.___.decoder([]), exports.___.decoder([])])(st)); };
    }
};
class Message {
    constructor(fromUser, subject, content) {
        this.fromUser = fromUser;
        this.subject = subject;
        this.content = content;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Message", this.fromUser.toStr(true), this.subject.toStr(true), this.content.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["Message", this.fromUser.pretty(true), this.subject.pretty(true), this.content.pretty(true)].join(' ')); }
    match(m) { return m.Message(this.fromUser, this.subject, this.content); }
    flatMaxSize() { return this.fromUser.flatMaxSize() + this.subject.flatMaxSize() + this.content.flatMaxSize(); }
    flatEncode(st) { this.fromUser.flatEncode(st); this.subject.flatEncode(st); this.content.flatEncode(st); }
}
exports.Message = Message;
//# sourceMappingURL=K551d9f2adb72.js.map