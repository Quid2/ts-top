"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kf8844385a443 = require("../Bytes/Kf8844385a443");
exports.$BLOB = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xf1, 0x39, 0xd4, 0x75, 0x1f, 0xda],
    decoder: function (decoders) {
        var decs = { "BLOB": [Q.zmConst(decoders[0])(Q.flatDecoder), Kf8844385a443.$Bytes(Q.flatDecoder)] };
        return function (st) { var d = decs["BLOB"]; return new BLOB(d[0](st), d[1](st)); };
    }
};
var BLOB = (function () {
    function BLOB(encoding, content) {
        this.encoding = encoding;
        this.content = content;
    }
    BLOB.prototype.match = function (m) { return m.BLOB(this.encoding, this.content); };
    BLOB.prototype.flatMaxSize = function () { return this.encoding.flatMaxSize() + this.content.flatMaxSize(); };
    BLOB.prototype.flatEncode = function (st) { this.encoding.flatEncode(st); this.content.flatEncode(st); };
    return BLOB;
}());
exports.BLOB = BLOB;
//# sourceMappingURL=Kf139d4751fda.js.map