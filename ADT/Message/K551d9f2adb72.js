"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K0e1df25dc480 = require("../User/K0e1df25dc480");
var Kfced5b0f3c1f = require("../Subject/Kfced5b0f3c1f");
var K957357183935 = require("../Content/K957357183935");
exports.$Message = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x55, 0x1d, 0x9f, 0x2a, 0xdb, 0x72],
    decoder: function (decoders) {
        return function (st) { return new Message(K0e1df25dc480.___.decoder([])(st), Kfced5b0f3c1f.___.decoder([])(st), K957357183935.___.decoder([K0e1df25dc480.___.decoder([]), exports.___.decoder([])])(st)); };
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