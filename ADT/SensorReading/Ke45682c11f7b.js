"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
exports.$SensorReading = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0xe4, 0x56, 0x82, 0xc1, 0x1f, 0x7b],
    decoder: function (decoders) {
        return function (st) { return new SensorReading(decoders[0](st), decoders[1](st)); };
    }
};
var SensorReading = (function () {
    function SensorReading(reading, location) {
        this.reading = reading;
        this.location = location;
    }
    SensorReading.prototype.toString = function () { return this.toStr(false); };
    SensorReading.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "SensorReading" + this.reading.toStr(true) + this.location.toStr(true));
    };
    SensorReading.prototype.match = function (m) { return m.SensorReading(this.reading, this.location); };
    SensorReading.prototype.flatMaxSize = function () { return this.reading.flatMaxSize() + this.location.flatMaxSize(); };
    SensorReading.prototype.flatEncode = function (st) { this.reading.flatEncode(st); this.location.flatEncode(st); };
    return SensorReading;
}());
exports.SensorReading = SensorReading;
//# sourceMappingURL=Ke45682c11f7b.js.map