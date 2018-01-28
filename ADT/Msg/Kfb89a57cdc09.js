"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
var Kfced5b0f3c1f = require("../Subject/Kfced5b0f3c1f");
var K1ba230d92eb8 = require("../Content/K1ba230d92eb8");
exports.$Msg = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xfb, 0x89, 0xa5, 0x7c, 0xdc, 0x09],
    decoder: function (decoders) {
        return function (st) { return new Msg(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st), Kfced5b0f3c1f.___.decoder([])(st), K1ba230d92eb8.___.decoder([])(st)); };
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