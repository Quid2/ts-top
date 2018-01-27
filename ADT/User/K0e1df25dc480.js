"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$User = function (f) { return f(___, []); };
var ___ = {
    zid: [0x0e, 0x1d, 0xf2, 0x5d, 0xc4, 0x80],
    decoder: function (decoders) {
        var decs = { "User": [Kb8cd13187198.$List(K066db52af145.$Char)(Q.flatDecoder)] };
        return function (st) { var d = decs["User"]; return new User(d[0](st)); };
    }
};
var User = (function () {
    function User(userName) {
        this.userName = userName;
    }
    User.prototype.match = function (m) { return m.User(this.userName); };
    User.prototype.flatMaxSize = function () { return this.userName.flatMaxSize(); };
    User.prototype.flatEncode = function (st) { this.userName.flatEncode(st); };
    return User;
}());
exports.User = User;
//# sourceMappingURL=K0e1df25dc480.js.map