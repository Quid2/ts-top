"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K3e8257255cbf = require("../ADT/K3e8257255cbf");
var Kdc26e9d90047 = require("../Identifier/Kdc26e9d90047");
var K07b1b045ac3c = require("../ADTRef/K07b1b045ac3c");
var K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var Ka5583bf3ad34 = require("../Tuple2/Ka5583bf3ad34");
exports.$RepoProtocol = function (f) { return f(___, []); };
var ___ = {
    zid: [0x05, 0xc7, 0xd8, 0x93, 0xe9, 0xd5],
    decoder: function (decoders) {
        var decs = { "Record": [K3e8257255cbf.$ADT(Kdc26e9d90047.$Identifier, Kdc26e9d90047.$Identifier, K07b1b045ac3c.$ADTRef(K4bbd38587b9e.$AbsRef))(Q.flatDecoder)], "Solve": [K4bbd38587b9e.$AbsRef(Q.flatDecoder)], "Solved": [K4bbd38587b9e.$AbsRef(Q.flatDecoder), K3e8257255cbf.$ADT(Kdc26e9d90047.$Identifier, Kdc26e9d90047.$Identifier, K07b1b045ac3c.$ADTRef(K4bbd38587b9e.$AbsRef))(Q.flatDecoder)], "KnownDataTypes": [Kb8cd13187198.$List(Ka5583bf3ad34.$Tuple2(K4bbd38587b9e.$AbsRef, K3e8257255cbf.$ADT(Kdc26e9d90047.$Identifier, Kdc26e9d90047.$Identifier, K07b1b045ac3c.$ADTRef(K4bbd38587b9e.$AbsRef))))(Q.flatDecoder)] };
        return function (st) { if (st.zero()) {
            if (st.zero()) {
                var d = decs["Record"];
                return new Record(d[0](st));
            }
            else {
                var d = decs["Solve"];
                return new Solve(d[0](st));
            }
        }
        else {
            if (st.zero()) {
                var d = decs["Solved"];
                return new Solved(d[0](st), d[1](st));
            }
            else {
                if (st.zero()) {
                    return new AskDataTypes();
                }
                else {
                    var d = decs["KnownDataTypes"];
                    return new KnownDataTypes(d[0](st));
                }
            }
        } };
    }
};
var Record = (function () {
    function Record(_0) {
        this._0 = _0;
    }
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
    Solved.prototype.match = function (m) { return m.Solved(this._0, this._1); };
    Solved.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Solved.prototype.flatEncode = function (st) { st.one(); st.zero(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Solved;
}());
exports.Solved = Solved;
var AskDataTypes = (function () {
    function AskDataTypes() {
    }
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
    KnownDataTypes.prototype.match = function (m) { return m.KnownDataTypes(this._0); };
    KnownDataTypes.prototype.flatMaxSize = function () { return 3 + this._0.flatMaxSize(); };
    KnownDataTypes.prototype.flatEncode = function (st) { st.one(); st.one(); st.one(); this._0.flatEncode(st); };
    return KnownDataTypes;
}());
exports.KnownDataTypes = KnownDataTypes;
//# sourceMappingURL=K05c7d893e9d5.js.map