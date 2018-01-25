"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$User = function (f) { return f(___, []); };
var ___ = {
    zid: [0x0e, 0x1d, 0xf2, 0x5d, 0xc4, 0x80],
    decoder: function (decoders) {
        return function (st) { return new User(decoders[0](st)); };
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