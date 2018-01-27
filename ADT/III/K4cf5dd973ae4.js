"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var Kb3a2642b4a84 = require("../Int8/Kb3a2642b4a84");
var K3dac6bd4fa9c = require("../Int16/K3dac6bd4fa9c");
var Kfb94cb4d4ede = require("../Int64/Kfb94cb4d4ede");
var Kb53bec846608 = require("../IEEE_754_binary32/Kb53bec846608");
var Kcba9596b4657 = require("../IEEE_754_binary64/Kcba9596b4657");
var K102a3bb904e3 = require("../Int/K102a3bb904e3");
exports.$III = function (f) { return f(___, []); };
var ___ = {
    zid: [0x4c, 0xf5, 0xdd, 0x97, 0x3a, 0xe4],
    decoder: function (decoders) {
        var decs = { "III": [Kb3a2642b4a84.$Int8(Q.flatDecoder), K3dac6bd4fa9c.$Int16(Q.flatDecoder), Kfb94cb4d4ede.$Int64(Q.flatDecoder), Kb3a2642b4a84.$Int8(Q.flatDecoder), Kfb94cb4d4ede.$Int64(Q.flatDecoder), Kb53bec846608.$IEEE_754_binary32(Q.flatDecoder), Kcba9596b4657.$IEEE_754_binary64(Q.flatDecoder), K102a3bb904e3.$Int(Q.flatDecoder)] };
        return function (st) { var d = decs["III"]; return new III(d[0](st), d[1](st), d[2](st), d[3](st), d[4](st), d[5](st), d[6](st), d[7](st)); };
    }
};
var III = (function () {
    function III(w8, w16, w, i8, i, f, d, ii) {
        this.w8 = w8;
        this.w16 = w16;
        this.w = w;
        this.i8 = i8;
        this.i = i;
        this.f = f;
        this.d = d;
        this.ii = ii;
    }
    III.prototype.match = function (m) { return m.III(this.w8, this.w16, this.w, this.i8, this.i, this.f, this.d, this.ii); };
    III.prototype.flatMaxSize = function () { return this.w8.flatMaxSize() + this.w16.flatMaxSize() + this.w.flatMaxSize() + this.i8.flatMaxSize() + this.i.flatMaxSize() + this.f.flatMaxSize() + this.d.flatMaxSize() + this.ii.flatMaxSize(); };
    III.prototype.flatEncode = function (st) { this.w8.flatEncode(st); this.w16.flatEncode(st); this.w.flatEncode(st); this.i8.flatEncode(st); this.i.flatEncode(st); this.f.flatEncode(st); this.d.flatEncode(st); this.ii.flatEncode(st); };
    return III;
}());
exports.III = III;
//# sourceMappingURL=K4cf5dd973ae4.js.map