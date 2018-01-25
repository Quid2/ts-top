"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$RepoProtocol = function (f) { return f(___, []); };
var ___ = {
    zid: [0x05, 0xc7, 0xd8, 0x93, 0xe9, 0xd5],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            if (st.zero()) {
                return new Record(decoders[0](st));
            }
            else {
                return new Solve(decoders[0](st));
            }
        }
        else {
            if (st.zero()) {
                return new Solved(decoders[0](st), decoders[1](st));
            }
            else {
                if (st.zero()) {
                    return new AskDataTypes();
                }
                else {
                    return new KnownDataTypes(decoders[0](st));
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