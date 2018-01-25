"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Msg = function (f) { return f(___, []); };
var ___ = {
    zid: [0xfb, 0x89, 0xa5, 0x7c, 0xdc, 0x09],
    decoder: function (decoders) {
        return function (st) { return new Msg(decoders[0](st), decoders[1](st), decoders[2](st)); };
    }
};
var Msg = (function () {
    function Msg(fromUser, subject, content) {
        this.fromUser = fromUser;
        this.subject = subject;
        this.content = content;
    }
    Msg.prototype.match = function (m) { return m.Msg(this.fromUser, this.subject, this.content); };
    Msg.prototype.flatMaxSize = function () { return this.fromUser.flatMaxSize() + this.subject.flatMaxSize() + this.content.flatMaxSize(); };
    Msg.prototype.flatEncode = function (st) { this.fromUser.flatEncode(st); this.subject.flatEncode(st); this.content.flatEncode(st); };
    return Msg;
}());
exports.Msg = Msg;
//# sourceMappingURL=Kfb89a57cdc09.js.map