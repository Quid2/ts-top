"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
var Kfced5b0f3c1f = require("../Subject/Kfced5b0f3c1f");
var K1ba230d92eb8 = require("../Content/K1ba230d92eb8");
exports.$Msg = function (f) { return f(___, []); };
var ___ = {
    zid: [0xfb, 0x89, 0xa5, 0x7c, 0xdc, 0x09],
    decoder: function (decoders) {
        var decs = { "Msg": [Kb8cd13187198.$List(K066db52af145.$Char)(Q.flatDecoder), Kfced5b0f3c1f.$Subject(Q.flatDecoder), K1ba230d92eb8.$Content(Q.flatDecoder)] };
        return function (st) { var d = decs["Msg"]; return new Msg(d[0](st), d[1](st), d[2](st)); };
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