"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K3e8257255cbf = require("../ADT/K3e8257255cbf");
var Kdc26e9d90047 = require("../Identifier/Kdc26e9d90047");
var K07b1b045ac3c = require("../ADTRef/K07b1b045ac3c");
var K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var Ka5583bf3ad34 = require("../Tuple2/Ka5583bf3ad34");
exports.$RepoProtocol = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x05, 0xc7, 0xd8, 0x93, 0xe9, 0xd5],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            if (st.zero()) {
                return new Record(K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]), Kdc26e9d90047.___.decoder([]), K07b1b045ac3c.___.decoder([K4bbd38587b9e.___.decoder([])])])(st));
            }
            else {
                return new Solve(K4bbd38587b9e.___.decoder([])(st));
            }
        }
        else {
            if (st.zero()) {
                return new Solved(K4bbd38587b9e.___.decoder([])(st), K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]), Kdc26e9d90047.___.decoder([]), K07b1b045ac3c.___.decoder([K4bbd38587b9e.___.decoder([])])])(st));
            }
            else {
                if (st.zero()) {
                    return new AskDataTypes();
                }
                else {
                    return new KnownDataTypes(Kb8cd13187198.___.decoder([Ka5583bf3ad34.___.decoder([K4bbd38587b9e.___.decoder([]), K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]), Kdc26e9d90047.___.decoder([]), K07b1b045ac3c.___.decoder([K4bbd38587b9e.___.decoder([])])])])])(st));
                }
            }
        } };
    }
};
var Record = (function () {
    function Record(_0) {
        this._0 = _0;
    }
    Record.prototype.toString = function () { return this.toStr(false); };
    Record.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Record" + this._0.toStr(true));
    };
    Record.prototype.match = function (m) { return m.Record(this._0); };
    Record.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize(); };
    Record.prototype.flatEncode = function (st) { st.zero(); st.zero(); this._0.flatEncode(st); };
    return Record;
}());
exports.Record = Record;
var Solve = (function () {
    function Solve(_0) {
        this._0 = _0;
    }
    Solve.prototype.toString = function () { return this.toStr(false); };
    Solve.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Solve" + this._0.toStr(true));
    };
    Solve.prototype.match = function (m) { return m.Solve(this._0); };
    Solve.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize(); };
    Solve.prototype.flatEncode = function (st) { st.zero(); st.one(); this._0.flatEncode(st); };
    return Solve;
}());
exports.Solve = Solve;
var Solved = (function () {
    function Solved(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Solved.prototype.toString = function () { return this.toStr(false); };
    Solved.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Solved" + this._0.toStr(true) + this._1.toStr(true));
    };
    Solved.prototype.match = function (m) { return m.Solved(this._0, this._1); };
    Solved.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Solved.prototype.flatEncode = function (st) { st.one(); st.zero(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Solved;
}());
exports.Solved = Solved;
var AskDataTypes = (function () {
    function AskDataTypes() {
    }
    AskDataTypes.prototype.toString = function () { return this.toStr(false); };
    AskDataTypes.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "AskDataTypes";
    };
    AskDataTypes.prototype.match = function (m) { return m.AskDataTypes; };
    AskDataTypes.prototype.flatMaxSize = function () { return 3 + 0; };
    AskDataTypes.prototype.flatEncode = function (st) { st.one(); st.one(); st.zero(); };
    return AskDataTypes;
}());
exports.AskDataTypes = AskDataTypes;
var KnownDataTypes = (function () {
    function KnownDataTypes(_0) {
        this._0 = _0;
    }
    KnownDataTypes.prototype.toString = function () { return this.toStr(false); };
    KnownDataTypes.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "KnownDataTypes" + this._0.toStr(true));
    };
    KnownDataTypes.prototype.match = function (m) { return m.KnownDataTypes(this._0); };
    KnownDataTypes.prototype.flatMaxSize = function () { return 3 + this._0.flatMaxSize(); };
    KnownDataTypes.prototype.flatEncode = function (st) { st.one(); st.one(); st.one(); this._0.flatEncode(st); };
    return KnownDataTypes;
}());
exports.KnownDataTypes = KnownDataTypes;
//# sourceMappingURL=K05c7d893e9d5.js.map