"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Message = function (f) { return f(___, []); };
var ___ = {
    zid: [0x55, 0x1d, 0x9f, 0x2a, 0xdb, 0x72],
    decoder: function (decoders) {
        return function (st) { return new Message(decoders[0](st), decoders[1](st), decoders[2](st)); };
    }
};
var Message = (function () {
    function Message(fromUser, subject, content) {
        this.fromUser = fromUser;
        this.subject = subject;
        this.content = content;
    }
    Message.prototype.match = function (m) { return m.Message(this.fromUser, this.subject, this.content); };
    Message.prototype.flatMaxSize = function () { return this.fromUser.flatMaxSize() + this.subject.flatMaxSize() + this.content.flatMaxSize(); };
    Message.prototype.flatEncode = function (st) { this.fromUser.flatEncode(st); this.subject.flatEncode(st); this.content.flatEncode(st); };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=K551d9f2adb72.js.map