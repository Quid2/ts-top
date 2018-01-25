"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Time = function (f) { return f(___, []); };
var ___ = {
    zid: [0xf3, 0xf0, 0xf3, 0xc4, 0x53, 0xf7],
    decoder: function (decoders) {
        return function (st) { return new Time(decoders[0](st), decoders[1](st)); };
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