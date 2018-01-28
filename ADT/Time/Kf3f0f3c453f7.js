"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K102a3bb904e3 = require("../Int/K102a3bb904e3");
var K2412799c99f1 = require("../Word32/K2412799c99f1");
exports.$Time = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf3, 0xf0, 0xf3, 0xc4, 0x53, 0xf7],
    decoder: function (decoders) {
        return function (st) { return new Time(K102a3bb904e3.___.decoder([])(st), K2412799c99f1.___.decoder([])(st)); };
    }
};
var Time = (function () {
    function Time(utcDay, utcSecs) {
        this.utcDay = utcDay;
        this.utcSecs = utcSecs;
    }
    Time.prototype.match = function (m) { return m.Time(this.utcDay, this.utcSecs); };
    Time.prototype.flatMaxSize = function () { return this.utcDay.flatMaxSize() + this.utcSecs.flatMaxSize(); };
    Time.prototype.flatEncode = function (st) { this.utcDay.flatEncode(st); this.utcSecs.flatEncode(st); };
    return Time;
}());
exports.Time = Time;
//# sourceMappingURL=Kf3f0f3c453f7.js.map