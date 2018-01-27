"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
var K9f214799149b = require("../SHAKE128_48/K9f214799149b");
exports.$StoreProtocol = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0xe8, 0x38, 0x59, 0xe5, 0x2e, 0x9a],
    decoder: function (decoders) {
        var decs = { "Save": [Q.zmConst(decoders[0])(Q.flatDecoder)], "Solve": [K9f214799149b.$SHAKE128_48(Q.zmConst(decoders[0]))(Q.flatDecoder)], "Solved": [K9f214799149b.$SHAKE128_48(Q.zmConst(decoders[0]))(Q.flatDecoder), Q.zmConst(decoders[0])(Q.flatDecoder)] };
        return function (st) { if (st.zero()) {
            var d = decs["Save"];
            return new Save(d[0](st));
        }
        else {
            if (st.zero()) {
                var d = decs["Solve"];
                return new Solve(d[0](st));
            }
            else {
                var d = decs["Solved"];
                return new Solved(d[0](st), d[1](st));
            }
        } };
    }
};
var Save = (function () {
    function Save(_0) {
        this._0 = _0;
    }
    Save.prototype.match = function (m) { return m.Save(this._0); };
    Save.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Save.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Save;
}());
exports.Save = Save;
var Solve = (function () {
    function Solve(_0) {
        this._0 = _0;
    }
    Solve.prototype.match = function (m) { return m.Solve(this._0); };
    Solve.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize(); };
    Solve.prototype.flatEncode = function (st) { st.one(); st.zero(); this._0.flatEncode(st); };
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
    Solved.prototype.flatEncode = function (st) { st.one(); st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Solved;
}());
exports.Solved = Solved;
//# sourceMappingURL=Ke83859e52e9a.js.map