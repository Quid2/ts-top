"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
exports.$SensorReading = function (t1, t2) { return function (f) { return f(___, [t1(f), t2(f)]); }; };
var ___ = {
    zid: [0xe4, 0x56, 0x82, 0xc1, 0x1f, 0x7b],
    decoder: function (decoders) {
        var decs = { "SensorReading": [Q.zmConst(decoders[0])(Q.flatDecoder), Q.zmConst(decoders[1])(Q.flatDecoder)] };
        return function (st) { var d = decs["SensorReading"]; return new SensorReading(d[0](st), d[1](st)); };
    }
};
var SensorReading = (function () {
    function SensorReading(reading, location) {
        this.reading = reading;
        this.location = location;
    }
    SensorReading.prototype.match = function (m) { return m.SensorReading(this.reading, this.location); };
    SensorReading.prototype.flatMaxSize = function () { return this.reading.flatMaxSize() + this.location.flatMaxSize(); };
    SensorReading.prototype.flatEncode = function (st) { this.reading.flatEncode(st); this.location.flatEncode(st); };
    return SensorReading;
}());
exports.SensorReading = SensorReading;
//# sourceMappingURL=Ke45682c11f7b.js.map