"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
exports.$SensorReading = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0xe4, 0x56, 0x82, 0xc1, 0x1f, 0x7b],
    decoder: function (decoders) {
        return function (st) { return new SensorReading(decoders[0](st), decoders[1](st)); };
    }
};
class SensorReading {
    constructor(reading, location) {
        this.reading = reading;
        this.location = location;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["SensorReading", this.reading.toStr(true), this.location.toStr(true)].join(' ')); }
    match(m) { return m.SensorReading(this.reading, this.location); }
    flatMaxSize() { return this.reading.flatMaxSize() + this.location.flatMaxSize(); }
    flatEncode(st) { this.reading.flatEncode(st); this.location.flatEncode(st); }
}
exports.SensorReading = SensorReading;
//# sourceMappingURL=Ke45682c11f7b.js.map