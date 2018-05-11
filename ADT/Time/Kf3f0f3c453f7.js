"use strict";
/** ZM Type:
Time ≡   Time {utcDay :: K102a3bb904e3, utcSecs :: K2412799c99f1}
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K102a3bb904e3 = require("../Int/K102a3bb904e3");
const K2412799c99f1 = require("../Word32/K2412799c99f1");
exports.$Time = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf3, 0xf0, 0xf3, 0xc4, 0x53, 0xf7],
    decoder: function (decoders) {
        return function (st) { return new Time(K102a3bb904e3.___.decoder([])(st), K2412799c99f1.___.decoder([])(st)); };
    }
};
class Time {
    constructor(utcDay, utcSecs) {
        this.utcDay = utcDay;
        this.utcSecs = utcSecs;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Time", this.utcDay.toStr(true), this.utcSecs.toStr(true)].join(' ')); }
    match(m) { return m.Time(this.utcDay, this.utcSecs); }
    flatMaxSize() { return this.utcDay.flatMaxSize() + this.utcSecs.flatMaxSize(); }
    flatEncode(st) { this.utcDay.flatEncode(st); this.utcSecs.flatEncode(st); }
}
exports.Time = Time;
//# sourceMappingURL=Kf3f0f3c453f7.js.map