"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$User = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x0e, 0x1d, 0xf2, 0x5d, 0xc4, 0x80],
    decoder: function (decoders) {
        return function (st) { return new User(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)); };
    }
};
var User = (function () {
    function User(userName) {
        this.userName = userName;
    }
    User.prototype.toString = function () { return this.toStr(false); };
    User.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "User" + this.userName.toStr(true));
    };
    User.prototype.match = function (m) { return m.User(this.userName); };
    User.prototype.flatMaxSize = function () { return this.userName.flatMaxSize(); };
    User.prototype.flatEncode = function (st) { this.userName.flatEncode(st); };
    return User;
}());
exports.User = User;
//# sourceMappingURL=K0e1df25dc480.js.map